"use strict";(self.webpackChunkddii=self.webpackChunkddii||[]).push([[2794],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return t?o.createElement(b,i(i({ref:n},u),{},{components:t})):o.createElement(b,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},89742:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=t(87462),a=t(63366),r=(t(67294),t(3905)),i=["components"],l={layout:"single",classes:"wide",title:"Mutating Webhook",description:"Mutating Webhook\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4",categories:["Kubernetes"],tags:["Mutating Webhook","Kubernetes","Admission Controller","Istio","Agones"]},s=void 0,c={permalink:"/2018/06/27/mutating-web-hook",editUrl:"https://github.com/ddiiwoong/newblog/tree/main/blog/2018-06-27-mutating-web-hook.md",source:"@site/blog/2018-06-27-mutating-web-hook.md",title:"Mutating Webhook",description:"Mutating Webhook\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4",date:"2018-06-27T00:00:00.000Z",formattedDate:"2018\ub144 6\uc6d4 27\uc77c",tags:[{label:"Mutating Webhook",permalink:"/tags/mutating-webhook"},{label:"Kubernetes",permalink:"/tags/kubernetes"},{label:"Admission Controller",permalink:"/tags/admission-controller"},{label:"Istio",permalink:"/tags/istio"},{label:"Agones",permalink:"/tags/agones"}],readingTime:8.435,truncated:!1,authors:[],frontMatter:{layout:"single",classes:"wide",title:"Mutating Webhook",description:"Mutating Webhook\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4",categories:["Kubernetes"],tags:["Mutating Webhook","Kubernetes","Admission Controller","Istio","Agones"]},prevItem:{title:"Provisioning Dedicated Game Server on Kubernetes Cluster",permalink:"/2018/07/01/openinfraday18"}},u={authorsImageUrls:[]},d=[{value:"Admission controller \ud655\uc7a5",id:"admission-controller-\ud655\uc7a5",level:2},{value:"Webhook\uc744 \uc5b8\uc81c \uc4f0\ub294\uac00?",id:"webhook\uc744-\uc5b8\uc81c-\uc4f0\ub294\uac00",level:2},{value:"Use-Case",id:"use-case",level:2},{value:"\uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uac00?",id:"\uc5b4\ub5bb\uac8c-\ub3d9\uc791\ud558\ub294\uac00",level:2},{value:"\ud29c\ud1a0\ub9ac\uc5bc",id:"\ud29c\ud1a0\ub9ac\uc5bc",level:2},{value:"\ud655\uc778\ubc29\ubc95",id:"\ud655\uc778\ubc29\ubc95",level:2},{value:"Build\ud558\uae30",id:"build\ud558\uae30",level:2},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",level:2}],p={toc:d};function m(e){var n=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"admission-controller-\ud655\uc7a5"},"Admission controller \ud655\uc7a5"),(0,r.kt)("p",null,"Kubernetes(\uc774\ud558 k8s)\uae30\ubc18 \uac1c\ubc1c \uacfc\uc81c\ub97c \uc218\ud589\ud558\ub2e4\ubcf4\ub2c8 Custom Resource\ub97c \uc0ac\uc6a9\ud560\uc218 \ubc16\uc5d0 \uc5c6\ub294 \uc0c1\ud669\ub4e4\uc774 \ubc1c\uc0dd\ud558\uc600\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uadf8\ub7f0 \uc640\uc911\uc5d0 istio\uc640 \uac19\uc740 Service Mesh Layer\ub97c \ub9ac\uc11c\uce58\ud558\ub358 \uc911\uc5d0 \ud280\uc5b4\ub098\uc628 MutatingAdmissionWebhook \uc6a9\uc5b4\ub97c \uc774\ud574\ud558\uae30 \uc704\uc5d0 \uc870\uc0ac\ud55c \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud574\ubcf8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/"},"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/")),(0,r.kt)("p",null,"Admission controller\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4 api-server\uc758 \uc624\ube0c\uc81d\ud2b8(Pod,\ub4f1) \uc0dd\uc131 \uc694\uccad\uc744 \uac00\ub85c\uccb4\uc5b4 \uc81c\uc5b4\ub97c \ud560 \uc218 \uc788\ub294 \ud655\uc7a5 \uae30\ub2a5\uc73c\ub85c \ud50c\ub7ec\uadf8\uc778 \ud615\ud0dc\ub85c \uc0ac\uc6a9\uc790\uac00 \ucd94\uac00 \ud560 \uc218 \uc788\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uc880\ub354 \uc790\uc138\ud788 \ud655\uc778\ud574\ubcf4\uc790 "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud074\ub7ec\uc2a4\ud130 \uad00\ub9ac\uc790\uac00 kube-api\ub97c \uc9c1\uc811 \ucef4\ud30c\uc77c \ud558\uace0 \uad6c\uc131\ud574\uc57c \ud558\uae30 \ub54c\ubb38\uc5d0 \uc720\uc5f0\ud558\uac8c \uc0ac\uc6a9\ud558\uae30 \uc5b4\ub824\uc6c0"),(0,r.kt)("li",{parentName:"ul"},"1.7 \ubc84\uc804 \uc774\ud6c4\ubd80\ud130\ub294 \uc774\ub7ec\ud55c \uc81c\ud55c\uc0ac\ud56d\uc744 \ud574\uacb0\ud558\uae30 \uc704\ud574 alpha feature\ub85c  ",(0,r.kt)("a",{parentName:"li",href:"https://v1-9.docs.kubernetes.io/docs/admin/extensible-admission-controllers/#initializers"},"Initializers")," \uc640 ",(0,r.kt)("a",{parentName:"li",href:"https://v1-9.docs.kubernetes.io/docs/admin/extensible-admission-controllers/#external-admission-webhooks"},"External Admission Webhooks")," \uae30\ub2a5\uc774 \ub3c4\uc785\ub428"),(0,r.kt)("li",{parentName:"ul"},"External Admission Webhooks \ub294 k8s \ub9ac\uc18c\uc2a4\uc758 \uc720\ud6a8\uc131 \uac80\uc0ac\ub97c \ud558\ub294\ub370 \ud65c\uc6a9, \uc720\ud6a8\uc131 \uac80\uc0ac\ub97c \ud1b5\uacfc \ud558\uc9c0 \ubabb\ud558\uba74 \ud574 \ub2f9 \ub9ac\uc18c\uc2a4\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc5d0\uc11c \uc0dd\uc131\ub418\uc9c8 \uc54a\uac8c \ud560 \uc218 \uc788\uc74c."),(0,r.kt)("li",{parentName:"ul"},"1.9 \ubc84\uc804\uc5d0\uc11c\ub294 External Admission Webhooks \uc740 beta\ub85c \uc2b9\uaca9\ub418\uc5b4 MutatingAdmissionWebhook \ubc0f ValidatingAdmissionWebhook\uc73c\ub85c \ub098\ub220\uc84c\uc9c0\ub9cc Initializers \ub294 alpha \ub85c \uc720\uc9c0\ub428"),(0,r.kt)("li",{parentName:"ul"},"MutatingAdmissionWebhook \uc740 \uc720\ud6a8\uc131 \uac80\uc0ac \uc774\uc678\uc5d0\ub3c4 \uc2b9\uc778 \uacfc\uc815\uc2dc k8s object\uc5d0 \ubcc0\uacbd\uc744 \ud560\uc218 \uc788\uc74c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc608\ub97c \ub4e4\uba74 resource quota\ub97c \ubcc0\uacbd\ud55c\ub2e4\ub358\uc9c0  Agones \ubc0f istio\uc640 \uac19\uc740 Custom Resource \ub97c \uc218\uc815\ud558\uc5ec object\ub97c \uc0dd\uc131\uc774 \uac00\ub2a5\ud568"),(0,r.kt)("li",{parentName:"ul"},"Webhook \ubc29\uc2dd\uc740 gRPC \ud504\ub85c\ud1a0\ucf5c\uc744 \uc0ac\uc6a9\ud558\ub294 \ub370 \uac1c\ubc1c\uc5b8\uc5b4\uc5d0 \uad6c\uc560 \ubc1b\uc9c0 \uc54a\uace0 \ud655\uc7a5\uc744 \ud560 \uc218 \uc788\ub2e4\ub294 \uc7a5\uc810\uc774 \uc788\uc74c")))),(0,r.kt)("h2",{id:"webhook\uc744-\uc5b8\uc81c-\uc4f0\ub294\uac00"},"Webhook\uc744 \uc5b8\uc81c \uc4f0\ub294\uac00?"),(0,r.kt)("p",null,"Webhook\uc744 \uc0ac\uc6a9\ud558\uc5ec k8s cluster-admin\uc774 api-server\ub97c \ub2e4\uc2dc \ucef4\ud30c\uc77c\ud558\uc9c0 \uc54a\uace0\ub3c4 object\uc0dd\uc131 \uc694\uccad\uc2dc mutating(\ubcc0\uacbd) \ubc0f validation(\uc720\ud6a8\uc131\uac80\uc99d) \uc744 \ud558\ub294 \ud50c\ub7ec\uadf8\uc778\uc744 \ub9cc\ub4e4 \uc218 \uc788\ub2e4. "),(0,r.kt)("p",null,'\uc774\ub97c \ud1b5\ud574 \uac1c\ubc1c\uc790\ub294 \ubaa8\ub4e0 resource \uc5d0\uc11c \uc5ec\ub7ec \uc791\uc5c5 ( "CREATE", "UPDATE", "DELETE"...)\uc5d0 \ub300\ud55c \uc2b9\uc778 \ub85c\uc9c1\uc5d0 \ub300\ud574 \uc0ac\uc6a9\uc790 \uc815\uc758 \ud560 \uc218\uc788\ub294 \uc720\uc5f0\uc131\uc744 \uc81c\uacf5\ubc1b\ub294\ub2e4.'),(0,r.kt)("h2",{id:"use-case"},"Use-Case"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"resource\ub97c \uc0dd\uc131\ud558\uae30 \uc804\uc5d0 \ubcc0\uacbd",(0,r.kt)("br",{parentName:"p"}),"\n","(\uc608, Istio \uc5d0\uc11c \ucc98\ub7fc traffic management \uc640 policy enforcement \uc744 \uc704\ud574 Envoy sidecar container\ub97c injection)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"StorageClass Provisioning \uc790\ub3d9\ud654",(0,r.kt)("br",{parentName:"p"}),"\n","(PersistentVolumeClaim object \uc0dd\uc131\uc744 \ubaa8\ub2c8\ud130\ub9c1\ud558\uace0 \ubbf8\ub9ac \uc815\uc758 \ub41c \uc815\ucc45\uc5d0 \ub530\ub77c \uac1d\uccb4\uc5d0 storage\ub97c \uc790\ub3d9\uc73c\ub85c \ucd94\uac00. \uc0ac\uc6a9\uc790\ub294 StorageClass \uc0dd\uc131 \uc5d0 \uc2e0\uacbd \uc4f8 \ud544\uc694\uac00 \uc5c6\uc74c)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ubcf5\uc7a1\ud55c custom resource \uac80\uc99d (Agones\uc640 \uac19\uc740)namespace \uc81c\ud55c",(0,r.kt)("br",{parentName:"p"}),"\n","\uba40\ud2f0 \ud14c\ub10c\ud2b8 \uc2dc\uc2a4\ud15c\uc5d0\uc11c\ub294 reserved namespace\uc5d0 resource\uc0dd\uc131\uc744 \uae08\uc9c0\uc2dc\ud0ac\ub54c \uc0ac\uc6a9\ud560\uc218 \uc788\uc74c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ucc38\uace0 \uc608\uc2dc",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kelseyhightower/denyenv-validating-admission-webhook"},"https://github.com/kelseyhightower/denyenv-validating-admission-webhook")))),(0,r.kt)("h2",{id:"\uc5b4\ub5bb\uac8c-\ub3d9\uc791\ud558\ub294\uac00"},"\uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uac00?"),(0,r.kt)("p",null,"MutatingWebhookConfiguration \ub0b4\uc5d0 \uc815\uc758\ub41c \ub8f0\uc5d0 \ub530\ub77c etcd\ub85c \uc804\ub2ec\ub418\uae30 \uc804\uc5d0 request\ub97c intercept\ud55c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","webhook \uc11c\ubc84\uc5d0 \uc2b9\uc778 \uc694\uccad\uc744 \uc804\uc1a1\ud558\uc5ec \ubcc0\uc774\ub97c \uc2e4\ud589\ud55c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","webhook \uc11c\ubc84\ub294 API\ub97c \uc900\uc218\ud558\ub294 \ub2e8\uc21c\ud55c http\uc11c\ubc84."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:t(34393).Z,width:"1600",height:"1643"})),(0,r.kt)("h2",{id:"\ud29c\ud1a0\ub9ac\uc5bc"},"\ud29c\ud1a0\ub9ac\uc5bc"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/morvencao/kube-mutating-webhook-tutorial"},"https://github.com/morvencao/kube-mutating-webhook-tutorial"),"  "),(0,r.kt)("p",null,"\uc704 \ud29c\ud1a0\ub9ac\uc5bc\uc740 object\uac00 \uc0dd\uc131\ub418\uae30 \uc804\uc5d0 pod\uc5d0 nginx sidecar container\ub97c inject\ud558\ub294 MutatingAdmissionWebhook\uc744 \ubc30\ud3ec\ud558\ub294 \ub0b4\uc6a9\uc744 \ub2f4\uace0 \uc788\ub2e4."),(0,r.kt)("p",null,"\uc6b0\uc120 admissionregistration.k8s.io/v1beta1 API\ub97c \uc0ac\uc6a9\ud560\uc218 \uc788\ub294 k8s 1.9+ \uc774\uc0c1\uc758 \ud074\ub7ec\uc2a4\ud130\uac00 \ud544\uc694\ud558\ub2e4.  "),(0,r.kt)("h2",{id:"\ud655\uc778\ubc29\ubc95"},"\ud655\uc778\ubc29\ubc95"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl api-versions | grep admissionregistration.k8s.io/v1beta1\n")),(0,r.kt)("p",null,"\uc544\ub798\uc640 \uac19\uc740 \uacb0\uacfc\uac00 \ub098\uc640\uc57c\ud568"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"admissionregistration.k8s.io/v1beta1\n")),(0,r.kt)("h2",{id:"build\ud558\uae30"},"Build\ud558\uae30"),(0,r.kt)("p",null,"\uc77c\ub2e8 Go\uac00 \uc124\uce58\ub418\uc5b4 \uc788\uc5b4\uc57c \ud55c\ub2e4.\n",(0,r.kt)("inlineCode",{parentName:"p"},"~/go/src")," \uc544\ub798\uc5d0 clone\uc744 \ud558\uc600\uc74c."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ cd ~/go/src\n$ git clone https://github.com/morvencao/kube-mutating-webhook-tutorial.git\n")),(0,r.kt)("p",null,"\uc758\uc874\uc131 \uad00\ub9ac\ub97c \uc704\ud574 repo\ub294 dep\ub97c \uc0ac\uc6a9\ud568"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ cd kube-mutating-webhook-tutorial\n$ go get -u github.com/golang/dep/cmd/dep\n")),(0,r.kt)("p",null,"build \ud30c\uc77c \ud655\uc778\ud558\uace0 registry \uc704\uce58\ub97c \ubc14\uafc8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dep ensure\nCGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o kube-mutating-webhook-tutorial .\ndocker build --no-cache -t registry.*****.io/agones/sidecar-injector:v1 .\nrm -rf kube-mutating-webhook-tutorial\n\ndocker push registry.*****.io/agones/sidecar-injector:v1\n")),(0,r.kt)("p",null,"build\ud558\uace0 docker image push"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ ./build\nSending build context to Docker daemon  44.29MB\nStep 1/3 : FROM alpine:latest\n ---\x3e 3fd9065eaf02\nStep 2/3 : ADD kube-mutating-webhook-tutorial /kube-mutating-webhook-tutorial\n ---\x3e 8679ccbab536\nStep 3/3 : ENTRYPOINT ["./kube-mutating-webhook-tutorial"]\n ---\x3e Running in 7699ff5c0885\nRemoving intermediate container 7699ff5c0885\n ---\x3e 2014100d460e\nSuccessfully built 2014100d460e\nSuccessfully tagged registry.*****.io/agones/sidecar-injector:v1\nThe push refers to repository [registry.*****.io/agones/sidecar-injector]\n2456c1309a51: Pushed\ncd7100a72410: Layer already exists\nv1: digest: sha256:15c335daeba40ddcbfbc3631ab6daa7cf623b63420f0ae8b657755322ef0582d size: 739\n')),(0,r.kt)("p",null,"sidecar deployment\uc5d0 \uc0ac\uc6a9\ub418\ub294 secret(cert/key)\uc744 \uc0dd\uc131\ud55c\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./deployment/webhook-create-signed-cert.sh \\\n    --service sidecar-injector-webhook-svc \\\n    --secret sidecar-injector-webhook-certs \\\n    --namespace default\n")),(0,r.kt)("p",null,"\uc704\uc5d0\uc11c \uc0dd\uc131\ub41c \ud074\ub7ec\uc2a4\ud130\uc758 caBundle\uac12\uc744 \uac00\uc9c0\uace0 MutatingWebhookConfiguration \uc0dd\uc131\ud55c\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cat deployment/mutatingwebhook.yaml | \\\n    deployment/webhook-patch-ca-bundle.sh > \\\n    deployment/mutatingwebhook-ca-bundle.yaml\n")),(0,r.kt)("p",null,"resource\ub4e4 deploy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ kubectl create -f deployment/nginxconfigmap.yaml\nkubectl create -f deployment/configmap.yaml\nkubectl create -f deployment/deployment.yaml\nkubectl create -f deployment/service.yaml\nkubectl create -f deployment/mutatingwebhook-ca-bundle.yaml\n\nconfigmap "nginx-configmap" created\nconfigmap "sidecar-injector-webhook-configmap" created\ndeployment.extensions "sidecar-injector-webhook-deployment" created\nservice "sidecar-injector-webhook-svc" created\nmutatingwebhookconfiguration.admissionregistration.k8s.io "sidecar-injector-webhook-cfg" created\n')),(0,r.kt)("p",null,"webhook deployment \ud655\uc778"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl get pods\nNAME                                                   READY     STATUS    RESTARTS   AGE\nsidecar-injector-webhook-deployment-796955558f-js6bb   1/1       Running   0          3m\n\n$ kubectl get deployment\nNAME                                  DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE\nsidecar-injector-webhook-deployment   1         1         1            1           3m\n")),(0,r.kt)("p",null,"default \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc5d0 sidecar-injector \ub77c\ubca8\ub9c1\uc744 \ud55c\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \ud574\ub2f9 \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc5d0 \uc0dd\uc131\ub418\ub294 \ubaa8\ub4e0 app\uc5d0 \uc790\ub3d9\uc73c\ub85c injection\ud558\uac8c \ub428"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl get namespace -L sidecar-injector\nNAME             STATUS    AGE       SIDECAR-INJECTOR\nagones-system    Active    1d\ndefault          Active    19d       enabled\nibm-cert-store   Active    19d\nibm-system       Active    19d\ningress-test     Active    6d\nkube-public      Active    19d\nkube-system      Active    19d\nspinnaker        Active    12d\nxonotic          Active    1d\n")),(0,r.kt)("p",null,"\uc0d8\ud50c\uc571\uc744 \ub514\ud50c\ub85c\uc774 \ud574\ubcf4\uc790"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ cat <<EOF | kubectl create -f -\napiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: sleep\nspec:\n  replicas: 1\n  template:\n    metadata:\n      annotations:\n        sidecar-injector-webhook.morven.me/inject: "yes"\n      labels:\n        app: sleep\n    spec:\n      containers:\n      - name: sleep\n        image: tutum/curl\n        command: ["/bin/sleep","infinity"]\n        imagePullPolicy:\nEOF\ndeployment.extensions "sleep" created\n')),(0,r.kt)("p",null,"sidecar container injection \ud655\uc778",(0,r.kt)("br",{parentName:"p"}),"\n","\uc544\ub798 \uacb0\uacfc\ub97c \ubcf4\uba74 \ud558\ub098\uc758 deployment \ud558\ub098\uc758 container \uc0dd\uc131\uc744 \uc694\uccad\ud588\uc9c0\ub9cc nginx sidecar \ucee8\ud14c\uc774\ub108\uac00 injection \ub41c\uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ kubectl get pod\nNAME                                                   READY     STATUS    RESTARTS   AGE\nsidecar-injector-webhook-deployment-796955558f-js6bb   1/1       Running   0          2h\nsleep-74b46f8bd7-r9l7f                                 2/2       Running   0          42s\n\n$ kubectl describe pod sleep-74b46f8bd7-r9l7f\nName:           sleep-74b46f8bd7-r9l7f\nNamespace:      default\nNode:           10.178.188.16/10.178.188.16\nStart Time:     Wed, 27 Jun 2018 13:12:47 +0900\nLabels:         app=sleep\n                pod-template-hash=3060294683\nAnnotations:    kubernetes.io/psp=ibm-privileged-psp\n                sidecar-injector-webhook.morven.me/inject=yes\n                sidecar-injector-webhook.morven.me/status=injected\nStatus:         Running\nIP:             172.30.169.30\nControlled By:  ReplicaSet/sleep-74b46f8bd7\nContainers:\n  sleep:\n    Container ID:  docker://728ca7f8e741ad29369312bc006c79683e7e605f3b04586df2477e233f93e451\n    Image:         tutum/curl\n    Image ID:      docker-pullable://tutum/curl@sha256:b6f16e88387acd4e6326176b212b3dae63f5b2134e69560d0b0673cfb0fb976f\n    Port:          <none>\n    Host Port:     <none>\n    Command:\n      /bin/sleep\n      infinity\n    State:          Running\n      Started:      Wed, 27 Jun 2018 13:13:01 +0900\n    Ready:          True\n    Restart Count:  0\n    Environment:    <none>\n    Mounts:\n      /var/run/secrets/kubernetes.io/serviceaccount from default-token-czzpj (ro)\n  sidecar-nginx:\n    Container ID:   docker://94fd41a0e153de6d5639873ccbd6b6325cee1ea8351dd02ab4a48ab4004d0b58\n    Image:          nginx:1.12.2\n    Image ID:       docker-pullable://nginx@sha256:72daaf46f11cc753c4eab981cbf869919bd1fee3d2170a2adeac12400f494728\n    Port:           80/TCP\n    Host Port:      0/TCP\n    State:          Running\n      Started:      Wed, 27 Jun 2018 13:13:08 +0900\n    Ready:          True\n    Restart Count:  0\n    Environment:    <none>\n    Mounts:\n      /etc/nginx from nginx-conf (rw)\nConditions:\n  Type           Status\n  Initialized    True\n  Ready          True\n  PodScheduled   True\nVolumes:\n  default-token-czzpj:\n    Type:        Secret (a volume populated by a Secret)\n    SecretName:  default-token-czzpj\n    Optional:    false\n  nginx-conf:\n    Type:        ConfigMap (a volume populated by a ConfigMap)\n    Name:        nginx-configmap\n    Optional:    false\nQoS Class:       BestEffort\nNode-Selectors:  <none>\nTolerations:     node.kubernetes.io/not-ready:NoExecute for 300s\n                 node.kubernetes.io/unreachable:NoExecute for 300s\nEvents:\n  Type    Reason                 Age   From                    Message\n  ----    ------                 ----  ----                    -------\n  Normal  Scheduled              1m    default-scheduler       Successfully assigned sleep-74b46f8bd7-r9l7f to 10.178.188.16\n  Normal  SuccessfulMountVolume  1m    kubelet, 10.178.188.16  MountVolume.SetUp succeeded for volume "nginx-conf"\n  Normal  SuccessfulMountVolume  1m    kubelet, 10.178.188.16  MountVolume.SetUp succeeded for volume "default-token-czzpj"\n  Normal  Pulling                1m    kubelet, 10.178.188.16  pulling image "tutum/curl"\n  Normal  Pulled                 55s   kubelet, 10.178.188.16  Successfully pulled image "tutum/curl"\n  Normal  Created                55s   kubelet, 10.178.188.16  Created container\n  Normal  Started                55s   kubelet, 10.178.188.16  Started container\n  Normal  Pulling                55s   kubelet, 10.178.188.16  pulling image "nginx:1.12.2"\n  Normal  Pulled                 48s   kubelet, 10.178.188.16  Successfully pulled image "nginx:1.12.2"\n  Normal  Created                48s   kubelet, 10.178.188.16  Created container\n  Normal  Started                48s   kubelet, 10.178.188.16  Started container\n')),(0,r.kt)("h2",{id:"\uc815\ub9ac"},"\uc815\ub9ac"),(0,r.kt)("p",null,"\uacb0\uad6d \uc704\uc5d0\uc11c \uc5b8\uae09\ud55c\uac83 \ucc98\ub7fc MutationWebhook\uc740 istio RouteRule\uac19\uc740 \ubcc4\ub3c4\uc758 CustomResource\ub4f1\uc744 injection \ud558\uac70\ub098 agones \ub4f1\uacfc \uac19\uc774 \uac8c\uc784\uc11c\ubc84\uc678\uc5d0 client sdk \ud1b5\uc2e0\uc744 \uc704\ud55c injection \ud615\ud0dc\ub85c \uae30\uc874 resource\uc5d0 \ucd94\uac00\uc801\uc778 \ubcc0\uacbd(mutation) \ub610\ub294 \uac80\uc99d(validation)\ub4f1\uc758 \ucd94\uac00\uc801\uc778 \uc791\uc5c5\uc744 kube-api\uc758 \ucef4\ud30c\uc77c\uc5c6\uc774 \uac00\ub2a5\ud558\ub2e4\ub294\ub370 \ubaa9\uc801\uc774 \uc788\ub2e4\uace0 \ubcfc \uc218 \uc788\ub2e4. \ucd94\uac00\uc801\uc73c\ub85c \uae30\ub2a5\uc5d0 \ub300\ud55c \ub0b4\uc6a9\uc740 \uc774\ud6c4 \ub2e4\uc2dc \uc815\ub9ac\ud574\ubcfc \uc608\uc815\uc774\ub2e4."))}m.isMDXComponent=!0},34393:function(e,n,t){n.Z=t.p+"assets/images/mutating-b4b8965d675e621d8560c81accf497c7.jpg"}}]);