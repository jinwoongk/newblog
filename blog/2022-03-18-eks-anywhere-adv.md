---
layout: single
title: "EKS Anywhere Advanced Usages"
comments: true
classes: wide
description: "EKS Anywhere 로 구성된 쿠버네티스 클러스터 활용 "
authors: jinwoong
toc: true
toc_label: Table of Contents
categories:
  - Kubernetes
tags:
  - Kubernetes
  - vsphere
  - eks anywhere
  - eks-anywhere
  - eks connector
  - eks
  - opentelemetry
  - cilium
  - observability
  - prometheus
  - grafana
  - loki
  - microservice
  - istio
---

지난글에 이어 이번에는 홈랩으로 구성한 EKS Anywhere 클러스터에서 운영, 개발환경 구성을 위한 여러가지 도구를 설치해보는 과정을 정리하고자 한다. 

지난 포스팅은 다음 링크에서 확인할 수 있다.
> 이전글 - [vSphere homelab 환경에서 EKS Anywhere 구성하기](https://ddii.dev/kubernetes/eks-anywhere/)

<!--truncate-->

## EKS Connector

EKS Connector를 통해 EKS Anywhere를 포함한 외부의 모든 클러스터를 AWS 콘솔에 연결할 수 있다. eks connector 컨테이너를 통해 proxy 형태로 외부 쿠버네티스 클러스터의 API서버에서 정보를 가져와 AWS System Manager로 전달하는 비동기 방식으로 워크로드 관리를 진행한다.

- 유저가이드 - [https://docs.aws.amazon.com/eks/latest/userguide/eks-connector.html](https://docs.aws.amazon.com/eks/latest/userguide/eks-connector.html)  
- AWS 블로그 - [https://aws.amazon.com/blogs/containers/connect-any-kubernetes-cluster-to-amazon-eks/](https://aws.amazon.com/blogs/containers/connect-any-kubernetes-cluster-to-amazon-eks/)

### 클러스터 등록

![overview](https://d2908q01vomqb2.cloudfront.net/fe2ef495a1152561572949784c16bf23abb28057/2021/09/15/Screen-Shot-2021-09-03-at-4.28.27-PM.png)

EKS Anywhere를 포함한 외부 K8s 클러스터는 AWS CLI, eksctl, 콘솔을 사용해서 등록(register)이 가능하다. eksctl로 등록을 진행하면 먼저 관련된 Role을 생성해주고 또한 ClusterRole, ClusterRoleBinding 및 Connector StatefulSet을 배포할 수 있도록 자동으로 manifest를 생성해주기 때문에 eksctl로 클러스터 등록을 진행하는 것이 편하다. AWS Managed IAM 역할인 `AWSServiceRoleForAmazonEKSConnector`을 생성하는 과정을 진행하기 때문에 에러가 발생을 한다. 에러가 난 이후에 AWS 콘솔이나 CLI를 통해 확인하면 새롭게 생성된 `AWSServiceRoleForAmazonEKSConnector` IAM 역할과 해당 역할에 연결된 Policy인 `AmazonEKSConnectorServiceRolePolicy`를 확인할 수 있다. 

```sh
> eksctl register cluster --name homelab --provider eks_anywhere --profile jinwoong

2022-03-09 18:50:44 [ℹ]  creating IAM role "eksctl-20220309185044427640"
2022-03-09 18:50:49 [ℹ]  deleting IAM role "eksctl-20220309185044427640"
Error: error registering cluster: error calling RegisterCluster: ResourcePropagationDelayException: Service linked role 'arn:aws:iam::492935017096:role/aws-service-role/eks-connector.amazonaws.com/AWSServiceRoleForAmazonEKSConnector' is propagating, please retry later.
```

실패를 진행한 후에 다시 등록 시도를 하면 아래 출력로그와 같이 명령어를 실행한 디렉토리에 EKS Connector 관련 리소스 manifests(eks-connector.yaml,eks-connector-clusterrole.yaml,eks-connector-console-dashboard-full-access-group.yaml)를 확인할 수 있다. 

```
> eksctl register cluster --name homelab --provider eks_anywhere --profile jinwoong
2022-03-08 22:59:15 [ℹ️]  creating IAM role "eksctl-20220308225915739385"
2022-03-08 22:59:29 [ℹ️]  registered cluster "homelab" successfully
2022-03-08 22:59:29 [ℹ️]  wrote file eks-connector.yaml to /Users/jinwoong/study/eks-anywhere-homelab
2022-03-08 22:59:29 [ℹ️]  wrote file eks-connector-clusterrole.yaml to /Users/jinwoong/study/eks-anywhere-homelab
2022-03-08 22:59:29 [ℹ️]  wrote file eks-connector-console-dashboard-full-access-group.yaml to /Users/jinwoong/study/eks-anywhere-homelab
2022-03-08 22:59:29 [!]  note: "eks-connector-clusterrole.yaml" and "eks-connector-console-dashboard-full-access-group.yaml" give full EKS Console access to IAM identity "arn:aws:iam::492935017096:user/jinwoong", edit if required; read https://docs.aws.amazon.com/eks/latest/userguide/connector-grant-access.html for more info
2022-03-08 22:59:29 [ℹ️]  run kubectl apply -f eks-connector.yaml,eks-connector-clusterrole.yaml,eks-connector-console-dashboard-full-access-group.yaml before 11 Mar 22 13:59 UTC to connect the cluster
```

eks-connector.yaml 에는 `Namespace`, `Secret`, `Role`, `ServiceAccount`, `RoleBinding`, `ConfigMap`과 배포될 `StatefulSet` 이 담겨있어 해당 파일은 그대로 사용하면 된다.

하지만 실제 콘솔에서 노드와 워크로드 정보를 보기 위해서 eks-connector-console-dashboard-full-access-group.yaml에 콘솔 접속이 필요한 IAM 사용자와 접근을 위한 특정 네임스페이스 정보를 `ClusterRole` 및 `ClusterRoleBinding`에 추가해야 한다. 

자세한 내용은 [https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/connector-grant-access.html](https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/connector-grant-access.html)에서 확인이 가능하다. 

위에서 생성된 manifests가 EKS Anywhere 클러스터에 적용되면 StatefulSet 형태로 배포된 EKS Connect 에이전트는 Amazon EventBridge를 통해 EKS에 알림을 보내는 System Manager 서비스에 연결한다. 이후 EKS Connect는 연결된 클러스터의 kubernetes API 서버에 EKS 콘솔 요청을 전달하므로 생성한 서비스 어카운트를 EKS Connect 역할과 연결하여 AWS IAM 엔티티를 가장(impersonate) 할 수있는 권한을 부여하게 된다. 

statefulset을 좀더 살펴보면 위에서 이야기하는 에이전트 역할을 하는 `connector-agent` 와 프록시 역할을 하는 `connector-proxy` 컨테이너 두개가 떠있는걸 볼 수 있다. 사용자가 콘솔에서 해당 클러스터의 노드나 워크로드 정보를 조회하게 되면 EKS는 System Manager 서비스에게 세션을 요청하고 이후 System Manager가 비동기 방식으로 `connector-agent` 컨테이너를 invoke하면 `connector-proxy` 컨테이너 위에서 마운트된 서비스 어카운트로 인증을 하고 가장(impersonation)한 상태로 EKS Anywhere 클러스트의 API를 호출해서 관련된 내용을 가져와서 보여주게 된다.

![connector](https://d2908q01vomqb2.cloudfront.net/fe2ef495a1152561572949784c16bf23abb28057/2021/09/15/Screen-Shot-2021-09-05-at-7.51.33-AM.png)


```sh
> kubectl describe statefulset eks-connector -n eks-connector
Name:               eks-connector
Namespace:          eks-connector
CreationTimestamp:  Wed, 09 Mar 2022 22:53:23 +0900
Selector:           app=eks-connector
Labels:             app=eks-connector
Annotations:        <none>
Replicas:           2 desired | 2 total
Update Strategy:    RollingUpdate
  Partition:        0
Pods Status:        2 Running / 0 Waiting / 0 Succeeded / 0 Failed
Pod Template:
  ...
  Containers:
   connector-agent:
    Image:      public.ecr.aws/amazon-ssm-agent/amazon-ssm-agent:3.1.90.0
    Port:       <none>
    Host Port:  <none>
    Environment:
      AWS_EC2_METADATA_DISABLED:  true
    Mounts:
      /etc/amazon/ssm/amazon-ssm-agent.json from eks-agent-config (rw,path="amazon-ssm-agent.json")
      /etc/amazon/ssm/seelog.xml from eks-agent-config (rw,path="seelog.xml")
      /var/eks/shared from eks-connector-shared (rw)
      /var/lib/amazon/ssm/Vault from eks-agent-vault (rw)
   connector-proxy:
    Image:      public.ecr.aws/eks-connector/eks-connector:0.0.3
    Port:       <none>
    Host Port:  <none>
    Args:
      server
    Environment:
      POD_NAME:   (v1:metadata.name)
    Mounts:
      /var/eks/shared from eks-connector-shared (rw)
      /var/lib/amazon/ssm/Vault from eks-agent-vault (rw)
      /var/run/secrets/kubernetes.io/serviceaccount from service-account-token (rw)
  ...
```
## Istio 환경 구성

Istio 환경에서 앱을 배포하고 Tracing 가시성 확보를 하는 실습을 진행하기 위해 간단하게 구성에 대한 그림을 그려봤다. 

![istio](/img/istio_o11y.png)

Istio 환경에서 sidecar 형태로 envoy proxy가 각 Observability 구성요소로 데이터가 전달되도록 구성한다. 이때 사용되는 오픈소스 스택은 다음과 같다.

- Tracing 
  - Collect : [OpenTelemetry Collector](https://github.com/open-telemetry/opentelemetry-collector)
  - Backend : [Tempo](https://github.com/grafana/tempo)

- Logging
  - Collect : [Fluentbit](https://github.com/fluent/fluent-bit)
  - Backend : [Loki](https://github.com/grafana/loki)

- Metrics
  - Collect : [Exporters](https://istio.io/latest/docs/ops/integrations/prometheus/)
  - Backend : [Prometheus](https://github.com/prometheus)

- Visualization
  - [Grafana](https://github.com/grafana/grafana)

### Istio 설치

IstioOperator를 통해 Istio를 설치한다.

```sh
> istioctl operator init
```

IstioOperator가 설치되면 리소스를 배포하여 istio 서비스를 생성할 수 있다. envoy proxy에는 다양한 헤더들을 통해 trace 정보를 propagate 할 수 있다. 다음과 같이 `x-b3-traceid`를 traceid로 로그 포맷을 구성하도록 하고 trace 활성화를 위해 `enableTracing: true` 를 설정하고 Prometheus에서 스크랩을 할 수 있도록 `enablePrometheusMerge: true`로 설정한다.

마지막으로 zipkin 프로토콜로 OpenTelemetry Collector로 전달할것이기 엔드포인드 정보도 미리 작성했다.

```yaml
apiVersion: install.istio.io/v1alpha1
kind: IstioOperator
metadata:
  name: istio-operator
  namespace: istio-system
spec:
  profile: default
  meshConfig:
    accessLogFile: /dev/stdout
    accessLogFormat: |
      [%START_TIME%] "%REQ(:METHOD)% %REQ(X-ENVOY-ORIGINAL-PATH?:PATH)% %PROTOCOL%" %RESPONSE_CODE% %RESPONSE_FLAGS% %RESPONSE_CODE_DETAILS% %CONNECTION_TERMINATION_DETAILS% "%UPSTREAM_TRANSPORT_FAILURE_REASON%" %BYTES_RECEIVED% %BYTES_SENT% %DURATION% %RESP(X-ENVOY-UPSTREAM-SERVICE-TIME)% "%REQ(X-FORWARDED-FOR)%" "%REQ(USER-AGENT)%" "%REQ(X-REQUEST-ID)%" "%REQ(:AUTHORITY)%" "%UPSTREAM_HOST%" %UPSTREAM_CLUSTER% %UPSTREAM_LOCAL_ADDRESS% %DOWNSTREAM_LOCAL_ADDRESS% %DOWNSTREAM_REMOTE_ADDRESS% %REQUESTED_SERVER_NAME% %ROUTE_NAME% traceID=%REQ(x-b3-traceid)%
    enableTracing: true
    enablePrometheusMerge: true
    defaultConfig:
      tracing:
        sampling: 100
        max_path_tag_length: 99999
        zipkin:
          address: otel-collector.tracing.svc:9411
```

Istio의 대표적인 샘플앱인 [bookinfo](https://istio.io/latest/docs/examples/bookinfo/)를 `bookinfo` 네임스페이스에 설치한다.

```
> kubectl create ns bookinfo
> kubectl label namespace bookinfo istio-injection=enabled --overwrite
> kubectl apply -n bookinfo -f https://raw.githubusercontent.com/istio/istio/release-1.10/samples/bookinfo/platform/kube/bookinfo.yaml
```

서비스 접근을 위한 `Gateway`와 `VirtualService` 도 구성한다. 

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: Gateway
metadata:
  name: bookinfo-gateway
  namespace: bookinfo
spec:
  selector:
    istio: ingressgateway # use istio default controller
  servers:
  - port:
      number: 80
      name: http
      protocol: HTTP
    hosts:
    - "*" # Mind the hosts. This matches all
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: bookinfo
  namespace: bookinfo
spec:
  hosts:
  - "*"
  gateways:
  - tracing/bookinfo-gateway
  - bookinfo-gateway
  http:
  - match:
    - uri:
        prefix: "/"
    route:
    - destination:
        host: productpage.bookinfo.svc.cluster.local
        port:
          number: 9080
```

서비스 확인을 위해 `LoadBalancer`로 구성된 istio-ingressgateway EXTERNAL-IP인 [http://192.168.31.10/productpage](http://192.168.31.10/productpage)로 접속을 확인할 수 있다. 

```
❯ kubectl get svc -n istio-system
NAME                   TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)                                      AGE
istio-ingressgateway   LoadBalancer   10.97.92.31      192.168.31.10   15021:30184/TCP,80:32738/TCP,443:31058/TCP   2d23h
istiod                 ClusterIP      10.107.186.201   <none>          15010/TCP,15012/TCP,443/TCP,15014/TCP        2d23h
```

## metric-server 설치

[https://github.com/kubernetes-sigs/metrics-server](https://github.com/kubernetes-sigs/metrics-server)

HPA 나 Kubernetes 대시보드를 활용하기 위해서 metric-server를 설치한다. kubelet tls 인증서 에러가 날 경우 설치 파일을 받아서 ARG에 `--kubelet-insecure-tls` 플래그를 추가해서 설치하면 된다.

```
> kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
serviceaccount/metrics-server created
clusterrole.rbac.authorization.k8s.io/system:aggregated-metrics-reader created
clusterrole.rbac.authorization.k8s.io/system:metrics-server created
rolebinding.rbac.authorization.k8s.io/metrics-server-auth-reader created
clusterrolebinding.rbac.authorization.k8s.io/metrics-server:system:auth-delegator created
clusterrolebinding.rbac.authorization.k8s.io/system:metrics-server created
service/metrics-server created
deployment.apps/metrics-server created
apiservice.apiregistration.k8s.io/v1beta1.metrics.k8s.io created

> kubectl top nodes
NAME             CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%   
192.168.31.186   175m         9%     2228Mi          29%       
192.168.31.187   82m          4%     893Mi           11%       
192.168.31.188   64m          3%     795Mi           10%       
192.168.31.189   134m         6%     1817Mi          23%       
192.168.31.190   43m          2%     636Mi           8% 
```

## Observability Stack 설치

차트로 일괄배포를 위해 [Loki-stack](https://github.com/grafana/helm-charts/tree/main/charts/loki-stack)를 사용했고, 테스트를 위한 구성으로 구성 변경을 한 chart values는 다음과 같다. 

- [Prometheus](https://github.com/prometheus) - 시계열 데이터(메트릭)을 수집하고 저장하는 프로젝트이며, 키-밸류 형태로 쿼리와 연산이 가능한 모니터링 시스템이다. node-exporter, alertmanager, pushgateway 도 차트로 같이 설치한다. 
- [Grafana](https://github.com/grafana/grafana) - 데이터를 시각화하는 플랫폼으로 다양한 로그, 메트릭, 트레이스 데이터를 시작화하고 알림 관리를 할 수 있다.
- [Loki](https://github.com/grafana/loki) - 다른 로깅 시스템과 달리 로그를 제외한 메타데이터 인덱싱만 하기 때문에 Prometheus처럼 레이블을 염두에 두고 설계된 로깅 데이터스토어 시스템이다.
- [Fluent Bit](https://github.com/fluent/fluent-bit) - 로깅 컬렉터(Collector)로 fluentd 보다 경량화되고 빠른 로그 프로세스이자 전달자(Forwarder)로 다른 로깅 컬렉터인 promtail, filebeat, logstash는 false로 설정한다. 
- [Tempo](https://github.com/grafana/tempo) - Tempo는 분산 추적(Tracing)을 위한 비용 효율적인 백엔드 데이터스토어 프로젝트로 위에서 구성한 Prometheus, Grafana, Loki 등과 같은 다른 Observability 프로젝트와 통합이 쉬운것이 특징이다.

### Prometheus, Loki 설치

`Prometheus`와 `Loki`는 Loki-Stack으로 구성한다. fluent-bit는 별도 구성 파일을 필요로 하기 때문에 나중에 설치할 예정이다. Prometheus는 Persistent Volume은 별도로 구성하지 않은 상태로 `persistentVolume`을 `false`로 설정하여 배포한다.

```sh
> kubectl create ns tracing
> helm repo add grafana https://grafana.github.io/helm-charts
> helm repo update
> helm install loki grafana/loki-stack --version 2.4.1 -n tracing -f - << 'EOF'
fluent-bit:
  enabled: false
promtail:
  enabled: false
prometheus:
  enabled: true
  server:
    persistentVolume:
      enabled: false
  alertmanager:
    persistentVolume:
      enabled: false
EOF
```

`Tempo`는 로그 정보와 tracing을 수신할 리시버 프로토콜 들(zipkin, otlp)을 정의한 채로 Chart로 배포한다. 

```sh
helm install tempo grafana/tempo --version 0.7.4 -n tracing -f - << 'EOF'
tempo:
  extraArgs:
    "distributor.log-received-traces": true
  receivers:
    zipkin:
    otlp:
      protocols:
        http:
        grpc:
EOF
```

### OpenTelemetry Collector 구성

이제까지 observability 관련 데이터 저장소들을 구성했으니 마지막으로 트레이싱을 위한 도구인 [OpenTelemetry Collector](https://opentelemetry.io/docs/collector/getting-started/)를 설치한다. 

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
 name: otel-collector-conf
 labels:
   app: opentelemetry
   component: otel-collector-conf
data:
 otel-collector-config: |
   receivers:   
     zipkin:
        endpoint: 0.0.0.0:9411
   exporters:
     otlp:
       endpoint: tempo.tracing.svc.cluster.local:55680
       insecure: true
   service:
     pipelines:
       traces:
         receivers: [zipkin]
         exporters: [otlp]
```

초기 Collect 구성 컨피그는 다름과 같이 설정했다. 자세한 설정 방법은 [https://opentelemetry.io/docs/collector/configuration/](https://opentelemetry.io/docs/collector/configuration/)에서 확인가능하다.

- `spec.config.receivers.zipkin.endpoint`는 trace정보를 받을 엔드포인트 구성으로 zipkin 포맷으로 수신한다. 
- `spec.config.exporters[]`에서는 Tempo로 보내기 위한 endpoint 설정을 한다.
- `spec.config.service`에서는 이후 collector에서 사용할 protocol이나 backend datasource 에 대한 설정이며 반드시 활성화가 되어야 사용이 가능하다.  


```yaml
apiVersion: v1
kind: Service
metadata:
  name: otel-collector
  labels:
    app: opentelemetry
    component: otel-collector
spec:
  ports:
  - name: otlp # Default endpoint for OpenTelemetry receiver.
    port: 55680
    protocol: TCP
    targetPort: 55680
  - name: jaeger-grpc # Default endpoint for Jaeger gRPC receiver
    port: 14250
  - name: jaeger-thrift-http # Default endpoint for Jaeger HTTP receiver.
    port: 14268
  - name: zipkin # Default endpoint for Zipkin receiver.
    port: 9411
  - name: metrics # Default endpoint for querying metrics.
    port: 8888
  - name: prometheus # prometheus exporter
    port: 8889
  selector:
    component: otel-collector
```

Service에서 주료 사용하게될 포트는 `zipkin`의 `9411`이다.


```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: otel-collector
  labels:
    app: opentelemetry
    component: otel-collector
spec:
  selector:
    matchLabels:
      app: opentelemetry
      component: otel-collector
  template:
    metadata:
      labels:
        app: opentelemetry
        component: otel-collector
    spec:
      containers:
      - command:
          - "/otelcontribcol"
          - "--config=/conf/otel-collector-config.yaml"
          - "--mem-ballast-size-mib=683"
          - "--log-level=DEBUG"
        image: otel/opentelemetry-collector-contrib:0.29.0
        name: otel-collector
        ports:
        - containerPort: 55679 # Default endpoint for ZPages.
        - containerPort: 55680 # Default endpoint for OpenTelemetry receiver.
        - containerPort: 14250 # Default endpoint for Jaeger HTTP receiver.
        - containerPort: 14268 # Default endpoint for Jaeger HTTP receiver.
        - containerPort: 9411 # Default endpoint for Zipkin receiver.
        - containerPort: 8888  # Default endpoint for querying metrics.
        - containerPort: 8889  # prometheus exporter       
        volumeMounts:
        - name: otel-collector-config-vol
          mountPath: /conf
      volumes:
        - configMap:
            name: otel-collector-conf
            items:
              - key: otel-collector-config
                path: otel-collector-config.yaml
          name: otel-collector-config-vol
```


### Fluentbit 구성

클러스터 dataplane과 controlplane의 logging 데이터를 `Loki` 엔드포인트로 전달하기 위한 config로 확인하고 Chart를 배포한다. 

```sh
> helm repo add fluent https://fluent.github.io/helm-charts
> helm repo update
> helm install fluent-bit fluent/fluent-bit --version 0.16.1 -n tracing -f - << 'EOF'
logLevel: trace
config:
  service: |
    [SERVICE]
        Flush 1
        Daemon Off
        Log_Level trace
        Parsers_File custom_parsers.conf
        HTTP_Server On
        HTTP_Listen 0.0.0.0
        HTTP_Port {{ .Values.service.port }}
  inputs: |
    [INPUT]
        Name tail
        Path /var/log/containers/*.log
        Parser cri
        Tag kube.*
        Mem_Buf_Limit 5MB
  outputs: |
    [OUTPUT]
        name loki
        match *
        host loki.tracing.svc
        port 3100
        tenant_id ""
        labels job=fluentbit
        label_keys $trace_id
        auto_kubernetes_labels on
  customParsers: |
    [PARSER]
        Name cri
        Format regex
        Regex ^(?<time>[^ ]+) (?<stream>stdout|stderr) (?<logtag>[^ ]*) (?<message>.*)$
        Time_Key    time
        Time_Format %Y-%m-%dT%H:%M:%S.%L%z
EOF
```

마지막으로 위 3가지 데이터소스(Prometheus, Loki, Tempo)가 등록된 상태의 `Grafana` Chart를 배포한다. 

```sh
> helm install grafana grafana/grafana -n tracing --version 6.13.5  -f - << 'EOF'
datasources:
  datasources.yaml:
    apiVersion: 1
    datasources:
      - name: Tempo
        type: tempo
        access: browser
        orgId: 1
        uid: tempo
        url: http://tempo.tracing.svc:3100
        isDefault: true
        editable: true
      - name: Prometehus
        type: prometheus
        access: browser
        orgId: 1
        uid: prometheus
        url: http://loki-prometheus-server.tracing.svc
        isDefault: false
        editable: true
      - name: Loki
        type: loki
        access: browser
        orgId: 1
        uid: loki
        url: http://loki.tracing.svc:3100
        isDefault: false
        editable: true
        jsonData:
          derivedFields:
            - datasourceName: Tempo
              matcherRegex: "traceID=(\\w+)"
              name: TraceID
              url: "$${__value.raw}"
              datasourceUid: tempo
env:
  JAEGER_AGENT_PORT: 6831
adminUser: admin
adminPassword: password
service:
  type: LoadBalancer
EOF
```

### bookinfo productpage 접속 및 trace 확인

`LoadBalancer`로 구성된 istio-ingressgateway EXTERNAL-IP인 [http://192.168.31.10/productpage](http://192.168.31.10/productpage)로 접속하는 상태에서 trace를 확인할 수 있다.

```sh
> ISTIOINGRESSGW=$(kubectl get pod -n istio-system -l app=istio-ingressgateway -o jsonpath='{.items[0].status.hostIP}')
echo -e "PRODUCTPAGE UI URL = http://$ISTIOINGRESSGW/productpage"
PRODUCTPAGE UI URL = http://192.168.31.187/productpage
```

```sh
> for i in {1..100};  do curl -s $ISTIOINGRESSGW/productpage | grep -o "<title>.*</title>" ; done
```

Grafana Explorer 메뉴에서 `Loki` 데이터소스를 선택하고 Log browser에 `{app="productpage"}`를 입력하게 되면 하나의 트랜잭션에 대한 트레이스 정보를 로그내에서 확인하고 해당 traceid 버튼을 클릭하거나 `Tempo` 메뉴에서 탐색을 하면 관련된 trace 정보를 확인할 수 있다.

![tempo](/img/tempo-grafana.png)

## 정리 
이번 포스팅에서는 eks-anywhere 클러스터에 여러가지 3rd party 구성요소들을 설치하고 실제 운영환경과 유사하게 테스트를 진행해봤다. EKS를 사용하는 관점에서 유사한 경험을 바탕으로 개발환경을 가져갈수 있기에 vSphere를 기반으로 사내 서비스를 개발하는 팀에게는 좋은 하나의 선택지가 추가되었다고 볼 수 있다. Direct Connect나 VPN과 같이 네트워크 연결성만 확보된다면 실제 기업환경에서는 AWS 네이티브 서비스와의 연계가 더 용이해지기 때문에 좋은 개발, 테스트 환경으로 다가갈 수 있을거라 생각한다.  

재미있는 경험이었고 당분간은 개인프로젝트를 진행하는 홈랩 환경은 EKS Anywhere로 정착해서 테스트를 계속 진행하려고 한다. 

> 해당 포스팅은 현재 재직중인 회사에 관련이 없고, 개인 역량 개발을 위한 자료로 활용할 예정입니다.
