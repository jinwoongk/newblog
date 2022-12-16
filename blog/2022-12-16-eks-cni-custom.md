---
layout: single
title: "EKS CNI Custom Networking"
comments: true
classes: wide
description: "Terraform null_resource를 활용하여 EKS CNI network를 구성하는 방법"
authors: jinwoong
toc: true
toc_label: Table of Contents
slug: kubernetes/eks-cni-custom/
date: 2022-12-16
categories:
  - Kubernetes
tags:
  - Kubernetes
  - EKS
  - CNI
  - Terraform
---

## # EKS CNI Networking 제약사항

[https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/cni-custom-network.html#custom-networking-automatically-apply-eniconfig](https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/cni-custom-network.html#custom-networking-automatically-apply-eniconfig)  
  
AWS에는 기본 ENI가 포함된 서브넷에서 사용할 수 있는 IP개수는 제한되어 있다. 파드의 수 제한이 발생할 수 있기 때문에 secondary ENI에 다른 서브넷을 사용하여 가용 IP개수를 늘릴수 있다. 또한 보안상의 이유로 파드는 노드의 기본 네트워크 인터페이스와 다른 서브넷 또는 보안 그룹을 사용해야 할 수 있다.   
  
CNI Custom Networking이 활성화가 되면 파드는 다른 서브넷에 생성이 되고, 노드 서브넷의 아이피를 사용하지 않는다.

EKS에서 파드 대역을 분리 하기 위해서 CNI Custom Networking 설정을 진행한다. 해당 env 값을 변경하면 즉시 aws-node 가 교체된다.
  
```
kubectl set env daemonset aws-node -n kube-system AWS_VPC_K8S_CNI_CUSTOM_NETWORK_CFG=true
```

파드를 배포하려는 각 서브넷에 대해서 아래와 같은 형식으로 ENIConfig 리소스를 생성해야 한다. 사용하려는 서브넷과 SG을 선언해야 기본적인 구성이 가능하다. 

```
apiVersion: crd.k8s.amazonaws.com/v1alpha1  
kind: ENIConfig  
metadata:  
name: "ap-northeast-2a"  
spec:  
subnet: "${subnet_a}"  
securityGroups:  
- ${NODE_SG}  
  
apiVersion: crd.k8s.amazonaws.com/v1alpha1  
kind: ENIConfig  
metadata:  
name: "ap-northeast-2b"  
spec:  
subnet: "${subnet_c}"  
securityGroups:  
- ${NODE_SG}  
  
apiVersion: crd.k8s.amazonaws.com/v1alpha1  
kind: ENIConfig  
metadata:  
name: "ap-northeast-2c"  
spec:  
subnet: "${subnet_d}"  
securityGroups:  
- ${NODE_SG}
```

`aws-node` `DaemonSet`를 업데이트하여 클러스터에 생성된 모든 노드에 가용 영역의 `ENIConfig`를 자동으로 적용할 수 있다.

```
kubectl set env daemonset aws-node -n kube-system ENI_CONFIG_LABEL_DEF=topology.kubernetes.io/zone
```

이때 몇가지 제약사항이 생기게 된다.

- 해당 설정을 배포하고 난 이후 추가된 노드에 대해서만 새로운 서브넷 IP로 할당이 되기 때문에, 기존 노드를 재시작하거나 삭제를 해야 파드에 새로운 IP가 할당이 된다.

- CNI Custom Networking 설정에서는 다중 서브넷을 할당할 수 없고 서브넷 별로 custom name으로 설정하고 모든 node 각각에 입력한 별도의 annotation을 추가해야한다. ([https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/cni-custom-network.html#custom-networking-deploy-nodes](https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/cni-custom-network.html#custom-networking-deploy-nodes))

- AWS의 인스턴스 타입별 ENI 개수 제한으로 Pod 생성이 불가능할 수 있으므로 Kubelet BootstrapArguments 파라미터를 launch template 에서 사전에 정의된 값으로 변경하여 노드가 생성되도록 한다.

-   MAX PODS = (Number of network interfaces × [the number of IP addresses per network interface – 1]) + 2
-   [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI)

```
MIME-Version: 1.0
Content-Type: multipart/mixed; boundary="==MYBOUNDARY=="

--==MYBOUNDARY==
Content-Type: text/x-shellscript; charset="us-ascii"
#!/bin/bash
/etc/eks/bootstrap.sh {Cluster Name} --use-max-pods false --kubelet-extra-args '--max-pods=110'--==MYBOUNDARY==--\
```

이러한 제약사항들을 처리하기 위해서 CNI Custom Networking 구현을 Terraform Pipeline으로 구현을 진행한다.

## Terraform 으로 CNI 구성하는 스크립트 실행

EKS를 프로비저닝 하는 Terraform 코드는 많이 공개되어 있기 때문에 이번 포스트에서는 생략하기로 하고 VPC Custom CNI를 구성하는 부분만 살펴보자.

기본적으로 VPC CNI를 배포하게 되면 aws-node 재시작이 되기 때문에 Workload NodeGroup이 구성되기 이전에 아래 스크립트를 `null_resource` 리소스를 사용하여 다음과 같은 순서로 Batch를 실행하도록 했다.

-  kubectl 설치
-  AWS Authentication (Assume role)
-  kubeconfig update
-  VPC CNI Custom manifest (버전 v1.11.2) 적용 - [https://github.com/aws/amazon-vpc-cni-k8s](https://github.com/aws/amazon-vpc-cni-k8s)
-  기본 템플릿 : [https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/v1.11.2/config/master/aws-k8s-cni.yaml](https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/v1.11.2/config/master/aws-k8s-cni.yaml)
-  `ENABLE_POD_ENI=true` : Security Group for Pods를 위한 구성으로 Node에 trunk ENI 추가를 하기 위한 `vpc.amazonaws.com/has-trunk-attached` 를 추가한다. 
	-   Pod ENI를 활성화한 경우 Branch ENI를 생성하는 부분에서 ENI 생성 [제약사항](https://github.com/aws/amazon-vpc-resource-controller-k8s/blob/master/pkg/aws/vpc/limits.go)이 발생할수 있다.
-  `DISABLE_TCP_EARLY_DEMUX=true` : `ENABLE_POD_ENI`가 true로 설정된 경우 kubelet이 TCP를 통해 포드 보안 그룹을 사용하는 포드에 연결하려면 `DISABLE_TCP_EARLY_DEMUX`를 initcontainers 컨테이너(amazon-k8s-cni-init)를 통해 true로 설정해야 한다.
-  `AWS_VPC_K8S_CNI_CUSTOM_NETWORK_CFG=true` : worker 노드에서 파드가 별도의 서브넷 및 보안 그룹을 사용할 수 있다고 지정한다. IPAMD가 ENI 할당을 위해 worker 노드의 `ENIConfig`에서 지정한 보안 그룹과 VPC 서브넷을 사용하게 된다. 
-  `ENI_CONFIG_LABEL_DEF=topology.kubernetes.io/zone` - `ENIConfig`와 매칭되도록 노드에서 사용할 가용영역을 zone 별로 구성하는 label을 추가한다.
	-   `ENIConfig` 라는 커스텀 리소스를 생성한다. 해당 설정은 파드용 IP대역을 위한 secondary ENI에 적용될 값으로 subnet id와 sg 값을 spec에 지정해야 한다. 아래 subnet과 sg id는 terraform에서 EKS클러스터가 프로비저닝 될때 결과를 env로 저장된 값을 가져오는 방식으로 처리 할수 있도록 하였다.
	-   `ENIConfig`를 사용할 가용 영역과 동일하게 `ENIConfig`의 name을 지정하는 것이 좋다. 만약 custom name으로 설정하게 되면 모든 node 각각에 입력한 별도의 annotation을 추가해야 한다. ([https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/cni-custom-network.html#custom-networking-deploy-nodes](https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/cni-custom-network.html#custom-networking-deploy-nodes))
-  `ENABLE_PREFIX_DELEGATION=true` 파라미터를 사용하여 네트워크 인터페이스에 접두사를 할당하도록 VPC CNI 플러그인을 구성한다. 
-  `WARM_IP_TARGET=1`, `MINIMUM_IP_TARGET=30`
	-  AWS VPC CNI에는 두 가지 구성 요소가 있다. CNI 플러그인 바이너리 (/opt/cni/bin/aws-cni)및 로컬IP 주소를 관리하는 `ipamd`는 aws-node라는 kubernetes daemonset 으로 실행되며 인스턴스에 연결된 모든 ENI 및 IP를 추적하는 모든 노드에 파드를 추가한다.
	-  CNI 플러그인은 호스트 네트워크 연결과 올바른 네트워크 인터페이스를 파드의 네임스페이스에 추가하는 역할을 한다. CNI 플러그인은 원격 프로시저 호출(gRPC)을 통해 `IPAMD`와 통신한다.
	-  `WARM_IP_TARGET`은 ENI 전체를 Warm Pool로 가져가지 않고 특정 IP 개수만큼만 Warm Pool을 확보하겠다라는 설정이다. `WARM_IP_TARGET=1`로 설정되면 Pod이 생성될 때마다 Secondary IP를 1개씩 추가로 할당한다.
	-  Pod의 생성과 종료가 빈번한 경우, 인스턴스에 IP를 Attach/Detach 하는 API call의 수가 늘어나 ENI를 추가하거나 IP를 추가하는 throttling을 방지하기 위해 `MINIMUM_IP_TARGET`을 함께 설정한다. 노드에 일반적으로 유지되는 Pod의 수를 `MINIMUM_IP_TARGET`으로 지정해 놓으면 해당 수만큼 ENI에 미리 IP가 할당된다. 
	-  `WARM_PREFIX_TARGET=1` 는 위 설정을 적용하면 재정의 된다.

-  `AWS_VPC_K8S_CNI_EXTERNALSNAT=true` : 파드별 ENI에 할당된 IP주소를 제어할수 있도록 Node IP로 SNAT 되지않도록 설정하는 구성이다.
-  `ENIConfig` 구성을 위해 Pod가 사용할 대역을 변수(`subnet_a`,`subnet_b`,`subnet_c`)로 받아 kubectl로 설정한다.

```sh
#!/bin/bash  
 
KUBE_CONFIG="$(mktemp)"  
aws eks update-kubeconfig --name "${CLUSTER_NAME}" --kubeconfig "${KUBE_CONFIG}"  
  
## Apply VPC CNI manifests (origin: https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/v1.11.2/config/master/aws-k8s-cni.yaml)  
# Security group for pod env configurations ; ENABLE_POD_ENI=true  
# https://github.com/aws/amazon-vpc-cni-k8s#disable_tcp_early_demux-v173 ; DISABLE_TCP_EARLY_DEMUX=true  
# Custom networking ; AWS_VPC_K8S_CNI_CUSTOM_NETWORK_CFG=true  
# Custom networking ; ENI_CONFIG_LABEL_DEF=topology.kubernetes.io/zone  
# Custom networking ; WARM_IP_TARGET=1  
# Custom networking ; MINIMUM_IP_TARGET=30  
# Custom networking ; WARM_PREFIX_TARGET=1  
# Fewer API calls required to EC2 control plane ; ENABLE_PREFIX_DELEGATION=true  
# Source NAT disabled ; AWS_VPC_K8S_CNI_EXTERNALSNAT=true  
  
KUBE_CONFIG="$(mktemp)"
aws eks update-kubeconfig --name "${CLUSTER_NAME}" --kubeconfig "${KUBE_CONFIG}"

## Apply VPC CNI manifests (origin: https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/v1.11.2/config/master/aws-k8s-cni.yaml)
# Security group for pod env configurations ; ENABLE_POD_ENI=true
# https://github.com/aws/amazon-vpc-cni-k8s#disable_tcp_early_demux-v173 ; DISABLE_TCP_EARLY_DEMUX=true
# Custom networking ; AWS_VPC_K8S_CNI_CUSTOM_NETWORK_CFG=true
# Custom networking ; ENI_CONFIG_LABEL_DEF=topology.kubernetes.io/zone
# Custom networking ; WARM_IP_TARGET=1
# Custom networking ; MINIMUM_IP_TARGET=30
# Custom networking ; WARM_PREFIX_TARGET=1
# Fewer API calls required to EC2 control plane ; ENABLE_PREFIX_DELEGATION=true
# Source NAT disabled ; AWS_VPC_K8S_CNI_EXTERNALSNAT=true

kubectl --kubeconfig "${KUBE_CONFIG}" apply -f ./scripts/aws-k8s-cni.yaml

# set up ENIConfig 
subnet_a=$(echo ${SUBNETS} |awk -F"," '{print $1}')
subnet_b=$(echo ${SUBNETS} |awk -F"," '{print $2}')
subnet_c=$(echo ${SUBNETS} |awk -F"," '{print $3}')

cat <<EOF | kubectl --kubeconfig "${KUBE_CONFIG}" apply -f -
apiVersion: crd.k8s.amazonaws.com/v1alpha1
kind: ENIConfig
metadata:
  name: "ap-northeast-2a"
spec:
  subnet: "${subnet_a}"
  securityGroups:
  - ${CLUSTER_SG}
EOF

cat <<EOF | kubectl --kubeconfig "${KUBE_CONFIG}" apply -f -
apiVersion: crd.k8s.amazonaws.com/v1alpha1
kind: ENIConfig
metadata:
  name: "ap-northeast-2b"
spec:
  subnet: "${subnet_b}"
  securityGroups:
  - ${CLUSTER_SG}
EOF

cat <<EOF | kubectl --kubeconfig "${KUBE_CONFIG}" apply -f -
apiVersion: crd.k8s.amazonaws.com/v1alpha1
kind: ENIConfig
metadata:
  name: "ap-northeast-2c"
spec:
  subnet: "${subnet_c}"
  securityGroups:
  - ${CLUSTER_SG}
EOF

# remobe creds
rm "${KUBE_CONFIG}"
```

다음은 위 스크립트를 실행하는 테라폼 코드의 예시이다.

- 기본적으로 null_resource를 사용한다. 
	- https://registry.terraform.io/providers/hashicorp/null/latest/docs/resources/resource
- 위에서 작성한 스크립트를 network.sh 에서 환경변수를 받아서 실행할 수 있도록 구성한다. 
- eks 모듈의 의존성을 걸어 eks 클러스터 배포가 완료된 이후에 해당 스크립트가 동작하도록 한다. 

```terraform
# Configure CNI custom network
resource "null_resource" "cni_patch" {
  triggers = {
    cluster_name  = local.cluster_name
    cluster_sg    = module.eks.cluster_primary_security_group_id
    intra_subnets = join(",", module.vpc.intra_subnets)
    content       = file("${path.module}/scripts/network.sh")
  }
  provisioner "local-exec" {
    environment = {
      CLUSTER_NAME = self.triggers.cluster_name
      CLUSTER_SG   = self.triggers.cluster_sg
      SUBNETS      = self.triggers.intra_subnets
    }
    command     = "${path.cwd}/scripts/network.sh"
    interpreter = ["bash"]
  }
  depends_on = [
    module.eks
  ]
}
```

## 정리

초반에 언급한 EKS CNI Custom Networking 제약사항을 처리하고 null_resource로 EKS CNI를 배포할 때 원하는 형태로 수정하여 `aws_node` 재기동 없이 배포하는 방법을 작성해봤다. 

샘플 코드는 아래 저장소에서 확인할 수 있다.
https://github.com/jinwoongk/eks-cni-custom

> 해당 포스팅은 현재 재직중인 회사에 관련이 없고, 개인 역량 개발을 위한 자료로 활용할 예정입니다.

 

