---
layout: single
title: "What is Tailscale?"
comments: true
classes: wide
description: "wireguard와 tailscale을 비교하고 kubernetes 환경에서 활용방안 검토"
categories:
  - Kubernetes
tags:
  - Kubernetes
  - wireguard
  - tailscale
  - vpn
  - network
---

> 해당 포스팅은 현재 재직중인 회사에 관련이 없고, 개인 역량 개발을 위한 자료로 활용할 예정입니다.

이직을 하고 블로그에 손을 놓고 있다가 페이스북 [Kubernetes Korea Group](https://ko-kr.facebook.com/groups/)에 올라온 [쿠버네티스 네트워킹 스터디 모집 공고](https://gasidaseo.notion.site/c9cd413265ea4ea1b1ae38eb36dfda94)를 보게되었다. 이직후에 대부분의 프로젝트가 쿠버네티스 기반으로 진행되다 보니 네트워크 전문가 이신 [가시다](https://www.facebook.com/jongho.seo.5811)님의 [팀 블로그](https://cloudneta.github.io/)나 이나 여러 양질의 게시글들을 참고만 하다가 조금더 깊이 학습을 하고 싶어 스터디를 신청했고, 간단한 면접(??)후에 정식으로 스터디에 참여하게 되었다.  

본론으로 돌아가서 calico 스터디를 진행하다가 [wireguard](https://www.wireguard.com/)라는 opensource vpn을 알게 되었고 해당 패키지를 이것저것 테스트하다가 기존에 사용중인 [tailscale](https://tailscale.com/) 과 유사하다는 것을 인지하고 내부 구성을 조금 찾아보기로 했다.  

확인해보니 tailscale은 wireguard 기반으로 하는 동일 기술의 상용 솔루션이였고, 이에 몇가지 공부차 정리를 위해 해당 포스트를 작성하게 되었다. 

<!--truncate-->

## Wireguard

- [https://www.wireguard.com/](https://www.wireguard.com/)

먼저 WireGuard를 간단하게 정의하면 보안에 초점을 두고 단순함과 쉬운 사용을 대표적인 특징으로 내세우는 오픈소스 기반 VPN 소프트웨어로 IPsec과 OpenVPN보다 사용하기 용이하고 가벼운 것을 강점으로 [Linux 5.6 커널 이후부터 기본 패키지](https://lore.kernel.org/wireguard/CAHmME9qOpDeraWo5rM31EWQW574KEduRBTL-+0A2ZyqBNDeYkg@mail.gmail.com/T/#u)로 탑재가 되었다. 제이슨 도넨필드(Jason Donenfeld, [@zx2c4](https://twitter.com/zx2c4))가 설계한 WireGuard는 암호화 민첩성, 즉 다양한 암호화, 키 교환, 해싱 알고리즘에 대한 선택권을 제공한다는 개념을 버리고 아주 간결한 코드 구조를 통해 커널에서 직접 동작하고 주요 암호 알고리즘에 대해서 병렬처리하므로 빠른 속도를 자랑한다.  

홈페이지에 게시된 몇가지 특징을 정리하면 
- Simple & Easy-to-use : SSH 처럼 키교환 방식으로 진행되고 WireGuard에 의해 관리되기 때문에 쉽게 사용이 가능하고, IP가 변경되는 모바일 로밍중에서 연결이 보장되는 것이 특징이다. 
- Cryptographically Sound : [Noise protocol framework](http://www.noiseprotocol.org/), [Curve25519](http://cr.yp.to/ecdh.html), [ChaCha20](http://cr.yp.to/chacha.html), [Poly1305](http://cr.yp.to/mac.html), [BLAKE2](https://blake2.net/), [SipHash24](https://131002.net/siphash/), [HKDF](https://eprint.iacr.org/2010/264) 와 같은 가장 빠르고 최신의 암호, 해시 알고리즘을 사용한다.  
- Minimal Attack Surface : WireGuard는 구현 용이성과 단순성을 염두에 두고 설계되었다. 매우 적은 코드 라인으로 구현되서 보안 취약점에 대해 쉽게 감사할 수 있다. 그만큼 철저히 검증될 가능성이 높고, 예상치 못한 곳에서의 버그로 인한 취약점이 발생할 가능성이 상대적으로 적다는 얘기가 된다.  
- High Performance : 모든 것이 kernel에서 동작하고 안전한 네트워킹이 매우 빠른 속도 로 동작하기 때문에 스마트폰과 백본 라우터와 같은 작은 임베디드 장치 등 모두에 적합하다.  
- Well Defined & Thoroughly Considered : Wireguard는 [백서](https://www.wireguard.com/papers/wireguard.pdf)가 발행될 정도로 기술적으로 여러가지 고려사항들을 명확하게 정의해놨다.

관련한 자세한 내용은 [백서](https://www.wireguard.com/papers/wireguard.pdf) 를 참고한다.

### Wireguard in Calico CNI

스터디를 진행할때는 쿠버네티스 파드와 파드 사이의 패킷을 네트워크 레벨로 암호화 하는 도구로 Calico에 내장된 WireGuard 플러그인을 사용해서 파드간 터널을 설정하고 트래픽을 암호화 하는 테스트를 진행하게 되었다. Calico CNI에서 구성하는 방법은 `calicoctl`를 사용해서 설정하기 때문에 간단하다. 

```
$ calicoctl patch felixconfiguration default --type='merge' -p '{"spec":{"wireguardEnabled":true}}'

$ calicoctl get felixconfiguration default -o yaml | grep wireguardEnabled
  wireguardEnabled: true
```

파드간의 ping test를 진행하고 난 이후 파드 레벨에서 패킷 덤프한 내용을 wireshark로 확인한 내용이다. 그림에서처럼 icmp 패킷은 확인이 안되고 udp와 wireguard 프로토콜을 통해 데이터가 암호화 된것을 확인할 수 있다.

![wg](/img/wg.png)

이번 포스팅에서는 tailscale 활용방안을 소개하는 것으로 간단하게 calico를 통해 wireguard 설정하는 것은 넘어간다. 다른 좋은 내용들은 다음 링크들에서 확인할 수 있다.  

### 참고자료
- [WireGuard로 멋진 VPN 서버 구축하기 - devsisters](https://tech.devsisters.com/posts/wireguard-vpn-1/)
- [WireGuard VPN 해부 - Slowboot](https://slowbootkernelhacks.blogspot.com/2020/09/wireguard-vpn.html)
- [Kilo - multi-cloud k8s network overlay built on WireGuard](https://github.com/squat/kilo)
- [Go implementation of WireGuard](https://git.zx2c4.com/wireguard-go/about/)

## Tailscale

- [https://tailscale.com/](https://tailscale.com/)

TailScale은 서버, 컴퓨터 및 클라우드 인스턴스간에 보안 네트워크를 만드는 VPN으로 Wireguard 프로토콜을 사용해서 만든 클라우드 서비스이다. Tailscale이 어떻게 동작하는지는 [공식 블로그](https://tailscale.com/blog/how-tailscale-works/)에서 간단히 확인할 수 있다. 

간단하게 블로그 내용을 정리해보면 기존의 VPN 방식은 Hub-and-spoke 방식으로 아래 그림과 같이 Gateway 방식으로 모든 클라이언트와 서버를 연결하는게 기존의 방식이다. 새로운 클라이언트나 서버가 추가될 경우 새로운 키를 모든 사용자에게 배포하게 되고 이는 장비가 증가함에 따라 많은 작업이 필요로 하게 된다.

![hub](https://tailscale.com/blog/how-tailscale-works/hub-and-spoke-single.svg)

Wireguard 터널을 이용하면 노드간의 연결이 직접 이뤄지게 되고 이는 아래 그림과 같이 메쉬 형태로 구성되게 된다. 

![mesh](https://tailscale.com/blog/how-tailscale-works/mesh-network.svg)

이런 메쉬방식의 가장 큰 단점은 피어끼리 연결하는 노드 네트워크의 경우 연결되는 경우의 수가 `n(n-1)`으로 그림의 예시에서도 10*9 = 90개의 연결 구성이 필요하게 된다. 모든 노드가 해당 사항으로 Wireguard의 key를 로테이트하거나 사용자를 추가, 제거할때마다 각 노드에 업데이트가 되어야 한다. 만약에라도 각 노드에 static ip가 없을 경우 노드끼리 찾는일이 결고 쉽지는 않을 것이다. 특히 방화벽을 운영하는 엔터프라이즈 조직의 경우에 더욱더 까다로운 일이 된다고 말한다.

그래서 Tailscale에서 이야기하는 가장 핵심은 노드 간의 트래픽을 감사, 통제할 수 있는 컨트롤 플레인을 두는것이다. 방화벽이나 static ip가 없는 환경에서도 노드, 피어간의 통제가 가능한 환경을 제공하는 것이 기본 사상이다. 

![controlplane](https://tailscale.com/blog/how-tailscale-works/mesh-coordination-server.svg)

### 기본 작동방식

- 각 노드(클라이언트)는 랜덤 공개키와 개인키를 생성하고 공개키를 ID(tailscale account)와 연결한다.
- 노드는 중앙의 tailscale서버에 공개키와 해당 노드가 현재 연결가능한지와 도메인 정보(client name) 정보를 전달한다. 
- 노드는 tailscale서버 업데이트된 도메인의 공개키 및 주소 목록을 다운로드 한다.
- 노드는 내려받은 공개 키 세트로 Wireguard 인스턴스를 구성한다.

이는 다시 hub-and-spoke 모델로 돌아간것 같지만 실제 컨트롤 플레인과 데이터 플레인을 분리해서 처리하기 때문에 실제 중앙 서버가 관리하는 것은 공개키 세트와 연결가능한 노드 리스트 정보뿐이다.

## Tailscale 테스트

### talescale 설치 (macOS 기준)

- [https://tailscale.com/download](https://tailscale.com/download)

macOS용 CLI 설치 정보는 아래 링크에서 확인할 수 있다. 
- [https://tailscale.com/kb/1065/macos-variants/](https://tailscale.com/kb/1065/macos-variants/)

macOS용 GUI 클라이언트에 CLI도 내장되어 있기 때문에 `.zshrc`에 alias를 추가했다. 

```
alias tailscale="/Applications/Tailscale.app/Contents/MacOS/Tailscale"
```

2022년 2월 5일자 기준으로 1.20.2 버전을 사용한다. 

```
$ tailscale version
1.20.2
  tailscale commit: 312750ddd288cf4073cfaef56a45102b9c1e8421
  other commit: 2c164d9c7443e2f3014fa54ea45e946b35152680
  go version: go1.17.6-tse44d304e54
```

windows에서도 쉽게 설치가 가능하고, 물론 애정하는 Synology에도 패키지를 설치할 수 있다. 

[https://github.com/tailscale/tailscale-synology](https://github.com/tailscale/tailscale-synology)

설치된 클라이언트 모두를 tailscale 계정으로 로그인하면 VPN연결이 끝난다. 

연결된 머신리스트는 아래와 같이 [Machines](https://login.tailscale.com/admin/machines) 메뉴 에서 확인할 수 있고 각 노드나 클라이언트로 할당된 `100.*` 대역 IP로 접속이 가능하다. 

![machine](/img/tailscale-web.png)

여기서 machine name으로 직접 접속이 가능하기 위해서는 MagicDNS 기능을 사용해야 하는데 `beta` 기능으로 [활성화](https://login.tailscale.com/admin/dns)를 할 수 있고 네트워크에 있는 장치의 DNS 이름을 자동으로 등록하는 기능이다.

- DNS 설정가이드 : [https://tailscale.com/kb/1081/magicdns/](https://tailscale.com/kb/1081/magicdns/)

CLI로 현재 연결된 client 정보나 publickey 등을 확인할 수 있다. 

```
$ tailscale status
100.89.226.113  88665a4a51c4         ddiiwoong@   macOS   -
100.76.233.116  jinwoonuimbp141      ddiiwoong@   macOS   offline
100.95.209.95   proxy                ddiiwoong@   linux   -
100.106.65.5    win11                ddiiwoong@   windows -

$ tailscale status --json | jq '.Self.PublicKey'
"nodekey:97c4dc44ecdf56******************adb3246d87fd9e270"
```

DNS 등록 방식은 아래와 같이 구성되고

![magicdns](https://tailscale.com/kb/1081/magicdns/magic-dns-naming.png)

내가 등록한 머신리스트에서 win11 은 다음 정보로 도메인이 등록된다.

```
win11.ddiiwoong.gmail.com.beta.tailscale.net
```

두가지 방식으로 해당 머신에 ping check를 할 수 있다.

```sh
$ ping win11
PING win11.ddiiwoong.gmail.com.beta.tailscale.net (100.106.65.5): 56 data bytes
64 bytes from 100.106.65.5: icmp_seq=0 ttl=128 time=124.031 ms
64 bytes from 100.106.65.5: icmp_seq=1 ttl=128 time=2.180 ms
64 bytes from 100.106.65.5: icmp_seq=2 ttl=128 time=2.776 ms

$ ping win11.ddiiwoong.gmail.com.beta.tailscale.net
PING win11.ddiiwoong.gmail.com.beta.tailscale.net (100.106.65.5): 56 data bytes
64 bytes from 100.106.65.5: icmp_seq=0 ttl=128 time=5.086 ms
64 bytes from 100.106.65.5: icmp_seq=1 ttl=128 time=2.060 ms
64 bytes from 100.106.65.5: icmp_seq=2 ttl=128 time=2.213 ms
```

### kubernetes 환경구성

kubernetes 리소스로 tailscale을 구성을 해보자. 먼저 `1.16` 버전 이상의 kubernetes 클러스터를 준비한다. 아래 구성환경은 `1.21.5` 버전으로 eksctl로 설치한 기본 EKS 클러스터이다. 

```sh
$ kubectl get node
NAME                                                 STATUS   ROLES    AGE   VERSION
ip-192-168-101-195.ap-northeast-2.compute.internal   Ready    <none>   19h   v1.21.5-eks-9017834
ip-192-168-134-35.ap-northeast-2.compute.internal    Ready    <none>   19h   v1.21.5-eks-9017834
ip-192-168-186-235.ap-northeast-2.compute.internal   Ready    <none>   19h   v1.21.5-eks-9017834
```

### authKey 발급 및 Secret 등록

authKey는 tailscale 네트워크에 등록하기 위한 Key로 아래와 같이 관리를 Web에서 할 수 있다.

![key](/img/tailscale-key.png)

[Keys](https://login.tailscale.com/admin/settings/keys) 메뉴로 이동해서 auth Key를 발급받는다. 발급을 할때 여러머신에서 사용할 경우는 `Reusable`, 임시로 키를 사용할때는 `Ephemeral` 옵션을 사용할 수도 있다. 아래와 같은 형식으로 발급되고, 해당 key는 kubernetes `Secret` 리소스에 등록을 해서 사용할 것이다.

```
tskey-kZAinb5CNTRL-********************
```

해당 auth Key를 Secret으로 생성한다.

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: tailscale-auth
stringData:
  AUTH_KEY: tskey-kZAinb5CNTRL-********************
```
```sh
$ kubectl get secret -n tailscale
NAME                    TYPE                                  DATA   AGE
default-token-fww2j     kubernetes.io/service-account-token   3      18h
tailscale-auth          Opaque                                3      18h
tailscale-token-7cgsc   kubernetes.io/service-account-token   3      17h
```

### image build & push

tailscale image를 빌드한다. 자세한 내용은 아래 링크를 참고한다.  
- [https://github.com/tailscale/tailscale/tree/main/docs/k8s](https://github.com/tailscale/tailscale/tree/main/docs/k8s)

Dockerfile은 다음과 같이 공식 이미지를 사용한다. 
```dockerfile
FROM ghcr.io/tailscale/tailscale:latest
COPY run.sh /run.sh
CMD "/run.sh"
```

[run.sh](https://github.com/tailscale/tailscale/blob/main/docs/k8s/run.sh)을 살펴보면 `tailscaled` 데몬을 실행할때 몇가지 환경변수를 입력받아 처리하는 것을 알 수 있다. 

`AUTH_KEY`와 `KUBE_SECRET`은 위 Secret으로 처리를 하고 여러 사용 모드(router, userspace)도 컨테이너 실행시 입력받아 처리한다. 또한, 마지막 구문을 보면 목적지 IP DNAT 처리를 위한 iptables 등록 옵션도 있다.

```sh
#! /bin/sh

export PATH=$PATH:/tailscale/bin

AUTH_KEY="${AUTH_KEY:-}"
ROUTES="${ROUTES:-}"
DEST_IP="${DEST_IP:-}"
EXTRA_ARGS="${EXTRA_ARGS:-}"
USERSPACE="${USERSPACE:-true}"
KUBE_SECRET="${KUBE_SECRET:-tailscale}"

set -e

TAILSCALED_ARGS="--state=kube:${KUBE_SECRET} --socket=/tmp/tailscaled.sock"

if [[ "${USERSPACE}" == "true" ]]; then
  if [[ ! -z "${DEST_IP}" ]]; then
    echo "IP forwarding is not supported in userspace mode"
    exit 1
  fi
  TAILSCALED_ARGS="${TAILSCALED_ARGS} --tun=userspace-networking"
else
  if [[ ! -d /dev/net ]]; then
    mkdir -p /dev/net
  fi

  if [[ ! -c /dev/net/tun ]]; then
    mknod /dev/net/tun c 10 200
  fi
fi

echo "Starting tailscaled"
tailscaled ${TAILSCALED_ARGS} &
PID=$!

UP_ARGS="--accept-dns=false"
if [[ ! -z "${ROUTES}" ]]; then
  UP_ARGS="--advertise-routes=${ROUTES} ${UP_ARGS}"
fi
if [[ ! -z "${AUTH_KEY}" ]]; then
  UP_ARGS="--authkey=${AUTH_KEY} ${UP_ARGS}"
fi
if [[ ! -z "${EXTRA_ARGS}" ]]; then
  UP_ARGS="${UP_ARGS} ${EXTRA_ARGS:-}"
fi

echo "Running tailscale up"
tailscale --socket=/tmp/tailscaled.sock up ${UP_ARGS}

if [[ ! -z "${DEST_IP}" ]]; then
  echo "Adding iptables rule for DNAT"
  iptables -t nat -I PREROUTING -d "$(tailscale --socket=/tmp/tailscaled.sock ip -4)" -j DNAT --to-destination "${DEST_IP}"
fi

wait ${PID}
```

build하고 레지스트리로 push 하자.
```sh
$ export IMAGE_TAG=ddiiwoong/tailscale-k8s:latest
$ docker build . -t $(IMAGE_TAG)
$ docker push $(IMAGE_TAG)
$ docker images ddiiwoong/tailscale-k8s:latest
REPOSITORY            TAG       IMAGE ID       CREATED        SIZE
ddiiwoong/tailscale-k8s   latest    9dc489da64c4   18 hours ago   44.1MB
```

### RBAC 리소스 생성

rbac 설정을 위해서 `role`, `rolebinding`, `serviceaccount`를 생성한다.

```sh
export SA_NAME=tailscale
export KUBE_SECRET=tailscale-auth
```

위 ENV값을 치환해서 생성한다.

```yaml
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: tailscale
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: tailscale
rules:
- apiGroups: [""] # "" indicates the core API group
  resources: ["secrets"]
  # Create can not be restricted to a resource name.
  verbs: ["create"]
- apiGroups: [""] # "" indicates the core API group
  resourceNames: ["tailscale-auth"]
  resources: ["secrets"]
  verbs: ["get", "update"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: tailscale
subjects:
- kind: ServiceAccount
  name: tailscale
roleRef:
  kind: Role
  name: tailscale
  apiGroup: rbac.authorization.k8s.io
```

### sidecar 배포

sidecar 생성을 위해 manifest를 확인한다. 자세히 살펴보면 `ts-sidecar` 컨테이너 securityContext에 `NET_ADMIN` 권한이 추가된것을 볼수 있다. 이는 sidecar 파드가 터널 인터페이스를 구성하기 위해 상위 노드 `CAP_NET_ADMIN` 권한을 취득하기 위함이다. 자세한 내용은 [Set capabilities for a Container](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-capabilities-for-a-container) 문서를 확인하자. 

그리고 추가 sidecar로 `nicolaka/netshoot`를 추가했는데 이는 [네트워크 장애 처리에 유용한 프로젝트](https://github.com/nicolaka/netshoot)로 여러가지 네트워크 정보를 확인할 수 있다.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  serviceAccountName: tailscale
  containers:
  - name: nginx
    image: nginx
  - name: netshoot
    image: nicolaka/netshoot 
    command: ["tail"]
    args: ["-f", "/dev/null"]
  - name: ts-sidecar
    imagePullPolicy: Always
    image: ddiiwoong/tailscale-k8s:latest
    env:
      # Store the state in a k8s secret
    - name: KUBE_SECRET
      value: tailscale-auth
    - name: USERSPACE
      value: "false"
    - name: AUTH_KEY
      valueFrom:
        secretKeyRef:
          name: tailscale-auth
          key: AUTH_KEY
          optional: true
    securityContext:
      capabilities:
        add:
        - NET_ADMIN
```

생성을 하고 살펴보면 sidecar nginx 파드가 생성된 것을 확인할 수 있다.

```sh
$ kubectl get pod nginx -n tailscale
NAME    READY   STATUS    RESTARTS   AGE
nginx   3/3     Running   0          25s
```

tailscale sidecar 로그를 잠깐 살펴보자. 새로운 `tailscale0` tun 인터페이스가 추가되고 원래 pod eth0 인터페이스 ip도 확인이 된다. 또한 `wireguard` device도 올라오는 것을 확인할 수 있다. 

```sh
$ kubectl logs nginx ts-sidecar -n tailscale
Starting tailscaled
Running tailscale up
2022/02/05 12:20:26 logtail started
2022/02/05 12:20:26 Program starting: v1.20.2-t8e643357d, Go 1.17.6-tse44d304e54: []string{"tailscaled", "--state=kube:tailscale-auth", "--socket=/tmp/tailscaled.sock"}
2022/02/05 12:20:26 LogID: 31416c9a454e3667661bf0f21ccde8ebf72604d7434660b0db55e838be372bc4
2022/02/05 12:20:26 logpolicy: using system state directory "/var/lib/tailscale"
logpolicy.Read /var/lib/tailscale/tailscaled.log.conf: open /var/lib/tailscale/tailscaled.log.conf: no such file or directory
2022/02/05 12:20:26 wgengine.NewUserspaceEngine(tun "tailscale0") ...
2022/02/05 12:20:26 router: disabling tunneled IPv6 due to system IPv6 config: disable_ipv6 is set
2022/02/05 12:20:26 dns: [rc=unknown ret=direct]
2022/02/05 12:20:26 dns: using *dns.directManager
2022/02/05 12:20:26 link state: interfaces.State{defaultRoute=eth0 ifs={eth0:[192.168.118.89/32]} v4=true v6=false}
2022/02/05 12:20:26 magicsock: disco key = d:1b04c57ebf000fe0
2022/02/05 12:20:26 Creating wireguard device...
2022/02/05 12:20:26 Bringing wireguard device up...
2022/02/05 12:20:26 Bringing router up...
2022/02/05 12:20:26 external route: up
2022/02/05 12:20:26 Clearing router settings...
2022/02/05 12:20:26 Starting link monitor...
2022/02/05 12:20:26 Engine created.
2022/02/05 12:20:26 netmap packet filter: (not ready yet)
2022/02/05 12:20:26 Start
2022/02/05 12:20:26 using backend prefs
...
2022/02/05 12:20:28 active login: ddiiwoong@gmail.com
2022/02/05 12:20:28 netmap packet filter: 1 filters
...
2022/02/05 12:20:28 dns: Set: {DefaultResolvers:[] Routes:{} SearchDomains:[] Hosts:4}
2022/02/05 12:20:28 dns: Resolvercfg: {Routes:{} Hosts:4 LocalDomains:[]}
2022/02/05 12:20:28 dns: OScfg: {Nameservers:[] SearchDomains:[] MatchDomains:[]}
2022/02/05 12:20:28 Taildrop disabled; no state directory
2022/02/05 12:20:28 peerapi starting without Taildrop directory configured
2022/02/05 12:20:28 peerapi: serving on http://100.95.209.95:34980
...
```

netshoot 파드내에서도 `tailscale0` 인터페이스가 추가된 것을 확인할 수 있다.
```sh
$ kubectl exec -it nginx -c netshoot -- ip -c addr
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
3: eth0@if8: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 9001 qdisc noqueue state UP group default
    link/ether 6e:f8:f5:f3:47:11 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 192.168.118.89/32 scope global eth0
       valid_lft forever preferred_lft forever
4: tailscale0: <POINTOPOINT,MULTICAST,NOARP,UP,LOWER_UP> mtu 1280 qdisc pfifo_fast state UNKNOWN group default qlen 500
    link/none
    inet 100.95.209.95/32 scope global tailscale0
       valid_lft forever preferred_lft forever
```

로컬에서 `tailscale` CLI를 통해 IP정보도 동일한 것을 확인 할 수 있다.

```sh
$ tailscale status
100.89.226.113  88665a4a51c4         ddiiwoong@   macOS   -
100.76.233.116  jinwoonuimbp141      ddiiwoong@   macOS   offline
100.95.209.95   nginx                ddiiwoong@   linux   -
100.106.65.5    win11                ddiiwoong@   windows -
```

먼저 어떠한 kubernetes 서비스도 없는 것을 확인하고, 미리 magicdns를 구성해놨기 때문에 `nginx` 주소로 직접 통신을 시도해보자. 

```
$ kubectl get svc -n A
No resources found in A namespace.

$ ping nginx
PING nginx.ddiiwoong.gmail.com.beta.tailscale.net (100.95.209.95): 56 data bytes
64 bytes from 100.95.209.95: icmp_seq=0 ttl=255 time=193.606 ms
64 bytes from 100.95.209.95: icmp_seq=1 ttl=255 time=95.747 ms
64 bytes from 100.95.209.95: icmp_seq=2 ttl=255 time=94.441 ms

$ curl http://nginx
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
...
```

### Userspace Sidecar 테스트

userspace 모드로 실행해보자. 위와 차이점은 `NET_ADMIN` 권한을 빼고, `runAsUser: 1000`와 `runAsGroup: 1000`을 추가했다. 해당 클라이언트나 노드가 외부로 통신을 위해서는 [SOCKS5 이나 HTTP proxy 모드](https://tailscale.com/kb/1112/userspace-networking/)로 실행되어야 한다. 이번 데모에서는 구성하지 않는다.

userspace 모드는 주로 서버리스 워크로드(Heroku, Google Cloud Run, AWS Lambda, Github Action)에서 활용을 할 때 좋다. 단 보안을 위해 authKey를 `ephemeral` 형태로 구성하는게 좋다.

```
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  serviceAccountName: tailscale
  containers:
  - name: nginx
    image: nginx
  - name: netshoot
    image: nicolaka/netshoot 
    command: ["tail"]
    args: ["-f", "/dev/null"]
  - name: ts-sidecar
    imagePullPolicy: Always
    image: ddiiwoong/tailscale-k8s:latest
    securityContext:
      runAsUser: 1000
      runAsGroup: 1000
    env:
    - name: KUBE_SECRET
      value: tailscale-auth
    - name: USERSPACE
      value: "true"
    - name: AUTH_KEY
      valueFrom:
        secretKeyRef:
          name: tailscale-auth
          key: AUTH_KEY
          optional: true
```

동일하게 접속이 가능한데, userspace 모드 이기 때문에 netshoot 컨테이너로 인터페이스를 확인하면 권한이 없기 때문에 eth0 만 확인 가능하다. 

```sh
$ kubectl exec -it nginx -c netshoot -- ip -c addr
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
3: eth0@if10: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 9001 qdisc noqueue state UP group default
    link/ether 3a:c5:b6:cf:d1:bd brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 192.168.117.251/32 scope global eth0
       valid_lft forever preferred_lft forever
```

### Proxy 모드 테스트

기존의 배포된 Service 리소스에 연결하는 방식이다. 미리 nginx를 띄워 놓고 ClusterIP를 확인한다.

```
$ kubectl create deployment nginx --image nginx
$ kubectl expose deployment nginx --port 80
$ kubectl get svc nginx -o=jsonpath='{.spec.clusterIP}'
deployment.apps/nginx created
service/nginx exposed
10.100.213.92%
```

Proxy 파드를 배포한다. 참고할 사항은 `sysctler` 컨테이너인데, 기본적으로 `net.ipv4.ip_forward` 플래그는 `Kubelet`에서 화이트리스트 처리가 되어 있지 않으므로 내부에서 IP Forwarding을 위해서 추가 설정이 필요하다. 

```
apiVersion: v1
kind: Pod
metadata:
  name: proxy
spec:
  serviceAccountName: tailscale
  initContainers:
  - name: sysctler
    image: busybox
    securityContext:
      privileged: true
    command: ["/bin/sh"]
    args:
      - -c
      - sysctl -w net.ipv4.ip_forward=1
    resources:
      requests:
        cpu: 1m
        memory: 1Mi
  containers:
  - name: tailscale
    imagePullPolicy: Always
    image: ddiiwoong/tailscale-k8s:latest
    env:
    - name: KUBE_SECRET
      value: tailscale-auth
    - name: USERSPACE
      value: "false"
    - name: AUTH_KEY
      valueFrom:
        secretKeyRef:
          name: tailscale-auth
          key: AUTH_KEY
          optional: true
    - name: DEST_IP
      value: 10.100.213.92
    securityContext:
      capabilities:
        add:
        - NET_ADMIN
```

```
kubectl get pod -n tailscale
NAME                     READY   STATUS    RESTARTS   AGE
nginx-6799fc88d8-5g49v   1/1     Running   0          5m59s
proxy                    1/1     Running   0          22s
```

정상적으로 배포된 proxy 컨테이너로 접속해보면 동일하게 접근이 되는 것을 확인할 수 있다.  


```sh
$ tailscale status
100.89.226.113  88665a4a51c4         ddiiwoong@   macOS   -
100.76.233.116  jinwoonuimbp141      ddiiwoong@   macOS   offline
100.95.209.95   proxy                ddiiwoong@   linux   idle, tx 788 rx 1452
100.106.65.5    win11                ddiiwoong@   windows -

$ curl https://proxy
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
...
```

### Subnet Router 모드 테스트

Tailscale에서 Subnet Router 모드를 사용하면 전체 클러스터의 subnet 대역으로 접근이 가능하다. 

기본적으로 EKS API는 서비스 subnet으로 `10.100.0.0/16` 또는 `172.20.0.0/16` 을 사용한다. 배포한 eksctl로 구성한 EKS 클러스터 subnet은 3개 AZ에 19bit로 나뉘어 배포되었고 `192.168.96.0/19`, `192.168.128.0/19`, `192.168.160.0/19`으로 구성되어 있다. 

```
$ kubectl get node -o wide
NAME                                                 STATUS   ROLES    AGE   VERSION               INTERNAL-IP       EXTERNAL-IP   OS-IMAGE         KERNEL-VERSION                CONTAINER-RUNTIME
ip-192-168-101-195.ap-northeast-2.compute.internal   Ready    <none>   23h   v1.21.5-eks-9017834   192.168.101.195   <none>        Amazon Linux 2   5.4.172-90.336.amzn2.x86_64   docker://20.10.7
ip-192-168-134-35.ap-northeast-2.compute.internal    Ready    <none>   23h   v1.21.5-eks-9017834   192.168.134.35    <none>        Amazon Linux 2   5.4.172-90.336.amzn2.x86_64   docker://20.10.7
ip-192-168-186-235.ap-northeast-2.compute.internal   Ready    <none>   23h   v1.21.5-eks-9017834   192.168.186.235   <none>        Amazon Linux 2   5.4.172-90.336.amzn2.x86_64   docker://20.10.7

$ kubectl get pod -o wide
NAME                     READY   STATUS    RESTARTS   AGE     IP                NODE                                                 NOMINATED NODE   READINESS GATES
nginx-6799fc88d8-5g49v   1/1     Running   0          11m     192.168.112.183   ip-192-168-101-195.ap-northeast-2.compute.internal   <none>           <none>
proxy                    1/1     Running   0          5m39s   192.168.155.196   ip-192-168-134-35.ap-northeast-2.compute.internal    <none>           <none>

$ kubectl get svc -o wide
NAME    TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE   SELECTOR
nginx   ClusterIP   10.100.213.92   <none>        80/TCP    11m   app=nginx
```

해당 subnet 대역을 접속하기 위해서 서비스 대역인 `10.100.0.0/16`와 파드 대역인 `192.168.96.0/19`, `192.168.128.0/19`, `192.168.160.0/19`를 설정해서 router 모드로 tailscale을 실행하자.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: subnet-router
  labels:
    app: tailscale
spec:
  serviceAccountName: tailscale
  containers:
  - name: tailscale
    imagePullPolicy: Always
    image: ddiiwoong/tailscale-k8s:latest
    env:
    - name: KUBE_SECRET
      value: tailscale-auth
    - name: USERSPACE
      value: "true"
    - name: AUTH_KEY
      valueFrom:
        secretKeyRef:
          name: tailscale-auth
          key: AUTH_KEY
          optional: true
    - name: ROUTES
      value: 10.100.0.0/16,192.168.96.0/19,192.168.128.0/19,192.168.160.0/19
    securityContext:
      runAsUser: 1000
      runAsGroup: 1000
```

배포된 router 디바이스와, 내부의 서비스에 접근하기 위해 파드와 서비스 IP를 확인한다.

```sh
$ tailscale status
100.89.226.113  88665a4a51c4         ddiiwoong@   macOS   -
100.76.233.116  jinwoonuimbp141      ddiiwoong@   macOS   offline
100.95.209.95   subnet-router        ddiiwoong@   linux   idle, tx 1556 rx 2908
100.106.65.5    win11                ddiiwoong@   windows -

$ kubectl get pod -n tailscale
NAME                     READY   STATUS    RESTARTS   AGE
nginx-6799fc88d8-5g49v   1/1     Running   0          39m
subnet-router            1/1     Running   0          9m47s

$ kubectl get pod -n tailscale -o wide
NAME                     READY   STATUS    RESTARTS   AGE   IP                NODE                                                 NOMINATED NODE   READINESS GATES
nginx-6799fc88d8-5g49v   1/1     Running   0          39m   192.168.112.183   ip-192-168-101-195.ap-northeast-2.compute.internal   <none>           <none>
subnet-router            1/1     Running   0          10m   192.168.137.188   ip-192-168-134-35.ap-northeast-2.compute.internal    <none>           <none>

$ kubectl get svc -n tailscale
NAME    TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
nginx   ClusterIP   10.100.213.92   <none>        80/TCP    40m
```

바로 접속을 해보면 접속이 안된다는걸 알수 있다. [tailscale 서비스](https://login.tailscale.com/admin/machines)로 이동해 route 설정에서 접근할 대역을 아래와 같이 활성화하고 curl로 접속해보면 정상적으로 접근이 된다는걸 알수 있다. 이걸로 생각해봤을 때 `NetworkPolicy` 등과 함께 설정을 하면 내부 리소스 접근 통제도 가능할 것으로 생각된다. 

![router](/img/subnetmode.png)

```
$ curl 192.168.112.183
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
...

$ curl 10.100.213.92
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
...
```

## 활용방안

기존에는 집 내부에 있는 자원 NAS나 macOS 등을 원격으로 관리하기 위한 용도였다면, 이번 테스트를 통해 기본 Personal 무료 Plan으로도 활용가능한 몇가지 유스케이스를 생각해봤다.  

- 추가적인 VPN 구성없이 원격지 쿠버네티스 클러스터에 존재하는 애플리케이션 디버깅 및 관리 가능 (Telepresence 대체)
- sidecar 모드로 활용시 Private 리소스에 대한 서비스 구성 및 IP관리 불필요 
- Prometheus Service Discovry를 tailscale로 진행하여 개인 관리 디바이스 전체 모니터링
- 모바일 웹앱 테스트시 본인 휴대폰으로 직접 액세스 가능
- 현재 개인 프로젝트로 활용중인 Plex(미디어서버), 노트 앱 등을 서비스 구성없이 ACL 및 MFA 적용을 통한 보안 강화
- wireguard 프로토콜을 활용하기 때문에 어디서든 끊김없이 클러스터 리소스 접근
- 현재 구성중인 site-to-site vpn 대체 (OCI-OCI간)

더 많은 활용방안이 있을텐데 일단 생각나는 것들만 적어보았다.

## 정리

이번 포스팅은 네트워크 스터디를 진행하면서 과제로 작성된 부분이 없지 않다. 정말 이번 스터디는 역대급으로 퀄리티나 여러가지면에서 좋은 점이 많다. 항상 대단하다고 느끼는 분들과 함께하고 있어서 마지막까지 완주할 수 있도록 조금 더 공부해야 겠다는 생각이 든다. 다시한번 [가시다](https://www.facebook.com/jongho.seo.5811)님을 `shout-out` 하고 2022년 첫 포스팅은 이것으로 마무리한다.

> 해당 포스팅은 현재 재직중인 회사에 관련이 없고, 개인 역량 개발을 위한 자료로 활용할 예정입니다.