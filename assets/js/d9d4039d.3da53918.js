"use strict";(self.webpackChunkddii=self.webpackChunkddii||[]).push([[4780],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return d}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?t.createElement(g,i(i({ref:n},l),{},{components:r})):t.createElement(g,i({ref:n},l))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72870:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={layout:"single",title:"Cloud-Native Microservices Demo Application with OpenCensus",comments:!0,classes:"wide",description:"Hipster Shop: Cloud-Native Microservices Demo Application \ub97c \uc0b4\ud3b4\ubcf4\uace0 \uc548\uc5d0 \ub4e4\uc5b4\uc788\ub294 \uc5ec\ub7ec\uac00\uc9c0 \uc624\ud508\uc18c\uc2a4\ub4e4\uc744 \uc54c\uc544\ubcf8\ub2e4",categories:["Kubernetes"],tags:["Kubernetes","Istio","Stackdriver","Prometheus","gRPC","OpenCensus","skaffold"]},c="Hipster Shop: Cloud-Native Microservices Demo Application",p={permalink:"/2019/03/07/microservices-demo",editUrl:"https://github.com/ddiiwoong/newblog/tree/main/src/blog/blog/2019-03-07-microservices-demo.md",source:"@site/blog/2019-03-07-microservices-demo.md",title:"Cloud-Native Microservices Demo Application with OpenCensus",description:"Hipster Shop: Cloud-Native Microservices Demo Application \ub97c \uc0b4\ud3b4\ubcf4\uace0 \uc548\uc5d0 \ub4e4\uc5b4\uc788\ub294 \uc5ec\ub7ec\uac00\uc9c0 \uc624\ud508\uc18c\uc2a4\ub4e4\uc744 \uc54c\uc544\ubcf8\ub2e4",date:"2019-03-07T00:00:00.000Z",formattedDate:"March 7, 2019",tags:[{label:"Kubernetes",permalink:"/tags/kubernetes"},{label:"Istio",permalink:"/tags/istio"},{label:"Stackdriver",permalink:"/tags/stackdriver"},{label:"Prometheus",permalink:"/tags/prometheus"},{label:"gRPC",permalink:"/tags/g-rpc"},{label:"OpenCensus",permalink:"/tags/open-census"},{label:"skaffold",permalink:"/tags/skaffold"}],readingTime:13.585,truncated:!1,authors:[],frontMatter:{layout:"single",title:"Cloud-Native Microservices Demo Application with OpenCensus",comments:!0,classes:"wide",description:"Hipster Shop: Cloud-Native Microservices Demo Application \ub97c \uc0b4\ud3b4\ubcf4\uace0 \uc548\uc5d0 \ub4e4\uc5b4\uc788\ub294 \uc5ec\ub7ec\uac00\uc9c0 \uc624\ud508\uc18c\uc2a4\ub4e4\uc744 \uc54c\uc544\ubcf8\ub2e4",categories:["Kubernetes"],tags:["Kubernetes","Istio","Stackdriver","Prometheus","gRPC","OpenCensus","skaffold"]},prevItem:{title:"K3s on Raspberry Pi Cluster",permalink:"/2019/03/11/k3s-homelab"},nextItem:{title:"Knative with Gloo",permalink:"/2019/02/28/knative-using-gloo"}},l={authorsImageUrls:[]},u=[{value:"OpenCensus",id:"opencensus",level:2},{value:"Hipster Shop Demo",id:"hipster-shop-demo",level:2},{value:"Requirement",id:"requirement",level:3},{value:"minikube \uae30\ub3d9",id:"minikube-\uae30\ub3d9",level:3},{value:"Repository Clone",id:"repository-clone",level:3},{value:"library \ucd94\uac00 \ubc0f http handler \ucd08\uae30\ud654",id:"library-\ucd94\uac00-\ubc0f-http-handler-\ucd08\uae30\ud654",level:3},{value:"exporter \ub4f1\ub85d(Jaeger Tracing \ubc0f Prometheus exporter)",id:"exporter-\ub4f1\ub85djaeger-tracing-\ubc0f-prometheus-exporter",level:3},{value:"Demo Application \ubc30\ud3ec",id:"demo-application-\ubc30\ud3ec",level:3},{value:"\uc11c\ube44\uc2a4 \uc811\uc18d \ubc0f Metric/Tracing \ud655\uc778",id:"\uc11c\ube44\uc2a4-\uc811\uc18d-\ubc0f-metrictracing-\ud655\uc778",level:3},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",level:2}],m={toc:u};function d(e){var n=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/microservices-demo"},"https://github.com/GoogleCloudPlatform/microservices-demo"),"\uc5d0\uc11c \uc18c\uac1c\ub41c Demo Application\uc778 ",(0,a.kt)("inlineCode",{parentName:"p"},"Hipster Shop"),"\uc744 Kubernetes \uae30\ubc18\uc73c\ub85c \ubc30\ud3ec\ud558\uace0 \uad00\ub828 \uc624\ud508\uc18c\uc2a4\ub4e4\uc744 \ub354 \uc54c\uc544\ubcf4\uace0\uc790 \ud55c\ub2e4."),(0,a.kt)("p",null,"\uc704 \ub9c1\ud06c\uc5d0 \uac00\uc11c \ubcf4\uba74 \uc54c\uc218 \uc788\uc9c0\ub9cc ",(0,a.kt)("inlineCode",{parentName:"p"},"Hipster Shop")," \uc544\ub798 \uadf8\ub9bc\ucc98\ub7fc 10\uac1c\uc758 Microservice\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uace0 \uc0c1\ud488\uc744 \uac80\uc0c9 \ubc0f \uad6c\ub9e4\ud560 \uc218\uc788\ub294 \uc6f9 \uae30\ubc18 \uc774\ucee4\uba38\uc2a4 Application\uc73c\ub85c \uad6c\uc131 \ub418\uc5b4\uc788\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/GoogleCloudPlatform/microservices-demo/raw/master/docs/img/architecture-diagram.png",alt:"arch"})),(0,a.kt)("p",null,"\uac01\uac01\uc758 \uc11c\ube44\uc2a4\ub294 ",(0,a.kt)("strong",{parentName:"p"},"gRPC")," \ub85c \ud1b5\uc2e0\ud558\uace0 \uc678\ubd80 \uc0ac\uc6a9\uc790\ub9cc HTTP\ub85c \uc811\uadfc\ud55c\ub2e4. \ubaa8\ub4e0 \uc11c\ube44\uc2a4\ub294 \uc11c\ub85c \ub2e4\ub978 \uc5b8\uc5b4(Go, C#, Node.js, Python, Java)\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uace0 \ub300\ubd80\ubd84\uc758 Microservice\ub4e4\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"Istio")," service mesh \ud615\ud0dc\ub85c \uad6c\uc131\ud560\uc218 \uc788\ub3c4\ub85d \ub418\uc5b4\uc788\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"Skaffold"),"\ub97c \ud1b5\ud574 \ubc30\ud3ec\ud558\uace0 ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenCensus"),"\ub77c\uace0 \ud558\ub294 gRPC/HTTP\uae30\ubc18 Tracing tool\uc744 \ud65c\uc6a9\ud558\uc5ec Google ",(0,a.kt)("inlineCode",{parentName:"p"},"Stackdriver"),"\ub85c \ubcf4\ub0b4\ub3c4\ub85d \ub418\uc5b4\uc788\uc9c0\ub9cc  Prometheus\uc5d0 \ud1b5\ud569\ud558\ub294 \ubc29\ud5a5\uc73c\ub85c \uc791\uc131\ud558\uae30 \uc704\ud574\uc11c Prometheus \uae30\ubc18\uc73c\ub85c Metric\uc744 \uc218\uc9d1\ud558\ub294 Fork\ub41c \ub370\ubaa8 Application\uc744 \uac80\uc0c9\uc744 \ud1b5\ud574 \ucc3e\uc744\uc218 \uc788\uc5c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/census-ecosystem/opencensus-microservices-demo"},"https://github.com/census-ecosystem/opencensus-microservices-demo"),"  "),(0,a.kt)("h2",{id:"opencensus"},"OpenCensus"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://opencensus.io/"},"OpenCensus(OC)"),"\ub294 Microservice \ubc0f Monolith \uc11c\ube44\uc2a4\ub97c Tracing \ubc0f Metric Monitoring \ud560 \uc218 \uc788\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc81c\uacf5\ud558\ub294 \uc624\ud508\uc18c\uc2a4\uc774\ub2e4."),(0,a.kt)("p",null,"\uc544\ub798\uc640 \uac19\uc774 \ub2e4\uc591\ud55c \uc5b8\uc5b4\ub97c \uc9c0\uc6d0 \ud55c\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Java , Go, Python, C++, Nodejs, Erlang, Ruby, PHP, C#")),(0,a.kt)("p",null,"\ub610\ud55c \uc218\uc9d1\ub41c \ub370\uc774\ud130\ub97c Prometheus, Stackdriver Tracing and Monitoring, DataDog, Graphite, Zipkin, Jaeger, Azure Insights \ub4f1 \uacfc \uac19\uc740 \ubc31\uc5d4\ub4dc Application\uc73c\ub85c \ub0b4\ubcf4\ub0bc \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \uac1c\ubc1c\uc790, \uc6b4\uc601\uc790 \uce21\uba74\uc5d0\uc11c \uc88b\uc740 \uc120\ud0dd\uc0ac\ud56d\uc774 \ub420 \uc218 \uc788\ub2e4.  "),(0,a.kt)("p",null,"Microservice\uc640 \uac19\uc740 \ubd84\uc0b0 \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uac1c\ubc1c\uc790/\uc6b4\uc601\uc790 \uad00\uc810\uc758 \uac00\uc7a5 \uc911\uc694\ud55c \ubbf8\uc158\uc740 \uac01\uac01\uc758 \uc218\ud589\ub418\ub294 \uc11c\ube44\uc2a4\ub4e4\uc758 \uc2e4\ud589 \uc2dc\uac04\uc744 \ud655\uc778\ud558\uace0 \uc0c1\ud638 API\uac04 \ud1b5\uc2e0\uc774 \uc5bc\ub9c8\ub098 \uac78\ub9ac\ub294\uc9c0\ub97c \ud655\uc778\ud558\uace0 Span(\uc544\ub798 \uadf8\ub9bc\ucc38\uc870)\uc5d0\uc11c \uac00\uc7a5 \uc9c0\uc5f0\uc774 \ubc1c\uc0dd\ud558\ub294 \uc11c\ube44\uc2a4\ub97c \ube68\ub9ac \ucc3e\uc544\ub0b4 \ud655\uc778\ud558\uace0 \uc870\uce58\ud558\ub294 \uac83\uc774\ub77c \ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.jaegertracing.io/img/spans-traces.png",alt:"span"})),(0,a.kt)("p",null,"OpenCensus\ub294 \uc8fc\ub85c \ub450\uac00\uc9c0 \uae30\ub2a5\uc73c\ub85c \ud65c\uc6a9\ub41c\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uccab\ubc88\uc9f8\ub294 Metric \uc218\uc9d1\uc774\uace0 \ub450\ubc88\uc9f8\ub294 Tracing \uae30\ub2a5\uc774\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","Log\uac19\uc740 \uacbd\uc6b0 \ud604\uc7ac \ubbf8\uc9c0\uc6d0\uc774\uc9c0\ub9cc \ub2e4\uc74c \uba54\uc774\uc800 \ub9b4\ub9ac\uc988\uc5d0 \ucd94\uac00\ub420 \uc608\uc815\uc774\ub77c\uace0 \ud558\ub2c8 \uc870\uae08\ub354 \uc9c0\ucf1c\ubcf4\uba74 \uc88b\uc744\uac83 \uac19\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Metrics"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ubc0f API\uc758 \uc751\ub2f5\uc2dc\uac04, \uc694\uccad content length, open file descriptor \uc218\uc640 \uac19\uc774 \ucd94\uc801\ud558\uace0\uc790\ud558\ub294 \uc815\ub7c9 \ub370\uc774\ud130\ub97c \ub9d0\ud55c\ub2e4. Metric \uc744 \uc2dc\uac01\ud654\ud574\uc11c \ubcf4\uba74 \uc751\uc6a9 \ud504\ub85c\uadf8\ub7a8 \ubc0f \uc11c\ube44\uc2a4\uc758 \uc131\ub2a5\uacfc \ud488\uc9c8\uc744 \uce21\uc815\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub420 \uc218 \uc788\ub2e4. \uc608\ub97c \ub4e4\uba74 \uc694\uccad \uc751\ub2f5\uc2dc\uac04\uc758 \ud3c9\uade0\uac12\uc774\ub098 cache hit/miss \uc218\uc640 \uac19\uc740 \uac83\ub4e4\uc774 \ub420 \uc218 \uc788\ub2e4. "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Traces"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc11c\ube44\uc2a4 \uc694\uccad\uc5d0 \ub300\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub610\ub294 \uc11c\ube44\uc2a4 \uad6c\uc870\ub97c \ud655\uc778\ud560\uc218 \uc788\uace0 \ubaa8\ub4e0 \uc11c\ube44\uc2a4 \uac04 \ub370\uc774\ud130 \ud750\ub984\uc744 \uc2dc\uac01\ud654\ud558\uc5ec \uc544\ud0a4\ud14d\ucc98\uc0c1\uc758 \ubcd1\ubaa9 \ud604\uc0c1\uc744 \ud30c\uc545\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub41c\ub2e4.")))),(0,a.kt)("h2",{id:"hipster-shop-demo"},"Hipster Shop Demo"),(0,a.kt)("p",null,"\uc704\uc5d0\uc11c \uc5b8\uae09\ud588\ub358 \ub0b4\uc6a9\ucc98\ub7fc GCP\uc5d0\uc11c \uc791\uc131\ud55c ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/microservices-demo"},"Hipster Shop Demo"),"\ub294 minikube \ubc0f GCP \ub370\ubaa8\ub85c \ub418\uc5b4\uc788\uace0 \ucf54\ub4dc\uc548\uc5d0 \uae30\ubcf8 Metric \uc124\uc815\uc774 Stackdriver\uc73c\ub85c \ub418\uc5b4\uc788\uc5b4 Prometheus Exporter \uc801\uc6a9\uc744 \ud558\ub824\uba74 \ucf54\ub4dc \uc218\uc815\uc774 \ud544\uc694\ud558\uae30 \ub54c\ubb38\uc5d0 Prometheus\uae30\ubc18\uc73c\ub85c \uc791\uc131\ub41c ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/census-ecosystem/opencensus-microservices-demo"},"Forked Repo"),"\ub97c \uc0b4\ud3b4\ubcf4\uae30\ub85c \ud558\uc600\ub2e4."),(0,a.kt)("h3",{id:"requirement"},"Requirement"),(0,a.kt)("p",null,"\ud604\uc7ac \uac00\uc9c0\uace0 \uc788\ub294 MacOS \ud658\uacbd\uc5d0\uc11c \uad6c\ub3d9\ud558\uc600\ub2e4. \ucd5c\uc18c \uc2a4\ud399\uc740 \ub530\ub85c \uae30\uc7ac\ud558\uc9c0 \uc54a\uc558\uc73c\ub098 K8s 1.11 \uc774\uc0c1\uc744 \uad8c\uc7a5\ud55c\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"kubectl : v1.10.7"),(0,a.kt)("li",{parentName:"ul"},"Minikube : v0.34.1"),(0,a.kt)("li",{parentName:"ul"},"Kubernetes : v1.13.3"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/GoogleContainerTools/skaffold/#installation"},"skaffold")," : v0.24")),(0,a.kt)("h3",{id:"minikube-\uae30\ub3d9"},"minikube \uae30\ub3d9"),(0,a.kt)("p",null,"\ucd5c\uc18c 3 CPU, 6Gb Memory\uac00 \ud544\uc694\ud558\ub2e4. \uadf8\ub0e5 minikube\ub97c \uad6c\ub3d9\uc2dc\uae30\uba74 4 CPU, 8Gb \ub85c \uad6c\ub3d9\uc774 \ub418\uae30 \ub54c\ubb38\uc5d0 \ubcc4\ub2e4\ub978 \uc635\uc158 \uc5c6\uc774 default\ub85c \uad6c\ub3d9\ud558\uba74 \ub41c\ub2e4. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ minikube start\n$ kubectl get nodes\nNAME       STATUS    ROLES     AGE       VERSION\nminikube   Ready     master    6h        v1.13.3\n")),(0,a.kt)("h3",{id:"repository-clone"},"Repository Clone"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/census-ecosystem/opencensus-microservices-demo.git\n$ cd opencensus-microservices-demo\n")),(0,a.kt)("p",null,"\ub0b4\ubd80 \uad6c\uc870\ub97c \uc0b4\ud3b4\ubcf4\uba74 \uae30\ubcf8\uc801\uc73c\ub85c ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/GoogleContainerTools/skaffold"},"skaffold"),"\ub97c \ud65c\uc6a9\ud558\uc5ec \ubc30\ud3ec\ub97c \uc9c4\ud589\uc744 \ud558\ub294 \uac83\uc744 \uc54c\uc218\uc788\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"skaffold"),"\ub294 \ub85c\uceec\uc5d0\uc11c Kubernetes \uae30\ubc18 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c\uacfc \ubc30\ud3ec(CD)\ub97c \ube60\ub974\uac8c \ub3c4\uc640\uc8fc\ub294 CLI tool\uc774\ub2e4. \uc18c\uc2a4\ucf54\ub4dc\uc758 \ubcc0\ud654\ub97c \uac10\uc9c0\ud558\uc5ec build, registry push/tagging, deploy\uae4c\uc9c0 \uc790\ub3d9\uc73c\ub85c \ud560 \uc218 \uc788\ub294 \ub85c\uceec \uae30\ubc18 \ub3c4\uad6c\uc774\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"skaffold dev"),"\ub294 \ub85c\uceec \ud658\uacbd\uc758 \ubc18\ubcf5\uc801\uc778 \uac1c\ubc1c\uc5d0 \ud65c\uc6a9\ud558\uace0 \uc2e4\uc81c \ubc30\ud3ec\ub294 CI Process\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"skaffold run"),"\uc744 \ud1b5\ud574 \ubc30\ud3ec\ub97c \uc9c4\ud589\ud560 \uc218 \uc788\ub2e4.  "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/GoogleContainerTools/skaffold/raw/master/docs/static/img/intro.gif",alt:"skaffold demo"})),(0,a.kt)("p",null,"Kubernetes \ubc30\ud3ec\ud234\uc5d0 \ub300\ud574 \ube44\uad50\ud55c \uae00\uc740 ",(0,a.kt)("a",{parentName:"p",href:"https://blog.hasura.io/draft-vs-gitkube-vs-helm-vs-ksonnet-vs-metaparticle-vs-skaffold-f5aa9561f948/"},"\ube14\ub85c\uadf8 \ub9c1\ud06c"),"\ub97c \ud1b5\ud574 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,"\uc544\ub798\uc5d0\uc11c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"skaffold"),"\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \ubbf8\ub904\ub450\uace0 \ubc30\ud3ec\ud558\ub294 \ub3c4\uad6c\ub85c\uc11c\ub9cc \uc124\uba85\ud55c\ub2e4.  "),(0,a.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c \uad6c\uc131\uc744 \ud558\uace0\uc790 \ud558\ub294 \ub0b4\uc6a9\uc740 helm\ucc98\ub7fc template \ud30c\uc77c\uc744 \uc0ac\uc6a9\ud558\uac8c \ub418\ub294\ub370 \ud504\ub85c\uc81d\ud2b8 root\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"skaffold.yaml")," \uc5d0 build\ub97c \uc704\ud55c image name, tag, src \uc704\uce58\ub4f1 \uae30\ubcf8\uc801\uc778 \ub0b4\uc6a9\uc744 \uae30\uc7ac\ud55c\ub2e4. \ud30c\uc77c\ub0b4\uc6a9\uc744 \uc0b4\ud3b4\ubcf4\uba74 build\uc5d0 \uad00\ub828\ub41c \ub0b4\uc6a9\ub4e4\uc744 \uc791\uc131\ud558\uace0 deploy\ud560 manifests\uc758 \uc704\uce58\uae4c\uc9c0 \uc9c0\uc815\ud558\ub3c4\ub85d \ub418\uc5b4\uc788\ub2e4. \ub85c\uceec\ud658\uacbd\uc5d0\uc11c \ud655\uc778\uc744 \uc704\ud574 grafana, prometheus, jaeger\uac00 \ucd94\uac00\ub41c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: skaffold/v1alpha2\nkind: Config\nbuild:\n  tagPolicy:\n    gitCommit: {}\n  artifacts:\n  - imageName: gcr.io/opencensus-microservices-demo/emailservice\n    workspace: src/emailservice\n  - imageName: gcr.io/opencensus-microservices-demo/productcatalogservice\n    workspace: src/productcatalogservice\n  - imageName: gcr.io/opencensus-microservices-demo/recommendationservice\n    workspace: src/recommendationservice\n  - imageName: gcr.io/opencensus-microservices-demo/shippingservice\n    workspace: src/shippingservice\n  - imageName: gcr.io/opencensus-microservices-demo/checkoutservice\n    workspace: src/checkoutservice\n  - imageName: gcr.io/opencensus-microservices-demo/paymentservice\n    workspace: src/paymentservice\n  - imageName: gcr.io/opencensus-microservices-demo/currencyservice\n    workspace: src/currencyservice\n  - imageName: gcr.io/opencensus-microservices-demo/cartservice\n    workspace: src/cartservice\n  - imageName: gcr.io/opencensus-microservices-demo/frontend\n    workspace: src/frontend\n  - imageName: gcr.io/opencensus-microservices-demo/loadgenerator\n    workspace: src/loadgenerator\n  - imageName: gcr.io/opencensus-microservices-demo/adservice\n    workspace: src/adservice\n  - imageName: gcr.io/opencensus-microservices-demo/grafana\n    workspace: src/grafana\n  - imageName: gcr.io/opencensus-microservices-demo/prometheus\n    workspace: src/prometheus\n  - imageName: gcr.io/opencensus-microservices-demo/jaeger\n    workspace: src/jaeger\ndeploy:\n  kubectl:\n    manifests:\n    - ./kubernetes-manifests/**.yaml\n")),(0,a.kt)("p",null,"Go\ub85c \uc791\uc131\ub41c Frontend microservice\uc744 \uc0b4\ud3b4\ubcf4\uc790. ","[",(0,a.kt)("strong",{parentName:"p"},"./src/frontend/main.go"),"]"),(0,a.kt)("h3",{id:"library-\ucd94\uac00-\ubc0f-http-handler-\ucd08\uae30\ud654"},"library \ucd94\uac00 \ubc0f http handler \ucd08\uae30\ud654"),(0,a.kt)("p",null,"Go\uae30\ubc18 exporter \ud328\ud0a4\uc9c0(jaeger,prometheus)\ub97c \ucd94\uac00\uc801\uc73c\ub85c import \ud558\uace0 http handler\ub97c \uc704\ud55c ",(0,a.kt)("a",{parentName:"p",href:"https://godoc.org/go.opencensus.io/plugin/ochttp"},"ochttp \ud328\ud0a4\uc9c0"),"\ub97c \ucd94\uac00\ud558\uc600\ub2e4. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n...\n        "go.opencensus.io/exporter/jaeger"\n        "go.opencensus.io/exporter/prometheus"\n        "go.opencensus.io/plugin/ochttp"\n        "go.opencensus.io/plugin/ochttp/propagation/b3"\n...\n)\nfunc main() {\n...\n        var handler http.Handler = r\n        handler = &logHandler{log: log, next: handler}\n        handler = ensureSessionID(handler)      \n        // add opencensus instrumentation\n        handler = &ochttp.Handler{ \n                Handler:     handler,\n                Propagation: &b3.HTTPFormat{}}\n        log.Infof("starting server on " + addr + ":" + srvPort)\n        log.Fatal(http.ListenAndServe(addr+":"+srvPort, handler))\n}\n')),(0,a.kt)("h3",{id:"exporter-\ub4f1\ub85djaeger-tracing-\ubc0f-prometheus-exporter"},"exporter \ub4f1\ub85d(Jaeger Tracing \ubc0f Prometheus exporter)"),(0,a.kt)("p",null,"\uc608\uc2dc\ucc98\ub7fc \uac01\uac01\uc758 \uc11c\ube44\uc2a4\uc5d0 jaeger\uc640 prometheus exporter Endpoint\ub97c \uc27d\uac8c \ub4f1\ub85d\ud560\uc218 \uc788\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ub610\ud55c initTracing() \uc5d0\uc11c\ub294 \ub370\ubaa8\ub97c \uc704\ud574 trace.AlwaysSample()\uc744 \uc0ac\uc6a9\ud558\uc600\ub2e4. \uc2e4\uc81c \uc6b4\uc601\ud658\uacbd\uc5d0\uc11c\ub294 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/census-instrumentation/opencensus-specs/blob/master/trace/Sampling.md"},"\ub2e4\uc74c \ub9c1\ud06c"),"\ub97c \ucc38\uace0\ud574\uc11c \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \uad8c\uace0\ud558\uace0 \uc788\ub2e4. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'...\nfunc initJaegerTracing(log logrus.FieldLogger) {\n        // Register the Jaeger exporter to be able to retrieve\n        // the collected spans.\n        exporter, err := jaeger.NewExporter(jaeger.Options{\n                Endpoint: "http://jaeger:14268",\n                Process: jaeger.Process{\n                        ServiceName: "frontend",\n                },\n        })\n        if err != nil {\n                log.Fatal(err)\n        }\n        trace.RegisterExporter(exporter)\n}\n\nfunc initTracing(log logrus.FieldLogger) {\n        // This is a demo app with low QPS. trace.AlwaysSample() is used here\n        // to make sure traces are available for observation and analysis.\n        // In a production environment or high QPS setup please use\n        // trace.ProbabilitySampler set at the desired probability.\n        trace.ApplyConfig(trace.Config{\n                DefaultSampler: trace.AlwaysSample(),\n        })\n        initJaegerTracing(log)\n}\n\nfunc initPrometheusStatsExporter(log logrus.FieldLogger) *prometheus.Exporter {\n    exporter, err := prometheus.NewExporter(prometheus.Options{})\n\n    if err != nil {\n        log.Fatal("error registering prometheus exporter")\n        return nil\n    }\n\n    view.RegisterExporter(exporter)\n    return exporter\n}\nfunc startPrometheusExporter(log logrus.FieldLogger, exporter *prometheus.Exporter) {\n    addr := ":9090"\n    log.Infof("starting prometheus server at %s", addr)\n    http.Handle("/metrics", exporter)\n    log.Fatal(http.ListenAndServe(addr, nil))\n}\n...\n')),(0,a.kt)("h3",{id:"demo-application-\ubc30\ud3ec"},"Demo Application \ubc30\ud3ec"),(0,a.kt)("p",null,"minikube\uc5d0 Hipster Shop Demo\ub97c \ubc30\ud3ec\ud55c\ub2e4. \ub2e8\uc21c\ud558\uac8c ",(0,a.kt)("inlineCode",{parentName:"p"},"skaffold run")," \uba85\ub839\uc73c\ub85c \uc9c4\ud589\ud558\uba74 \ub41c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ skaffold run\n")),(0,a.kt)("p",null,"\ud604\uc7ac \uc0ac\uc6a9\uc911\uc778 2018 Macbook Pro(3.1 GHz Intel Core i7, 16GB) \uc0c1\uc758 Docker\uae30\ubc18 minikube \ud658\uacbd\uc73c\ub85c\ub3c4 \ubc30\ud3ec\ub97c \ud558\uc600\ub294\ub370 \uc2dc\uac04\uc774 \uaf64 \uc18c\uc694\ub418\uc5c8\ub2e4.(20\ubd84\uc774\uc0c1)",(0,a.kt)("br",{parentName:"p"}),"\n","\ucf54\ub4dc\ub97c \uc2e4\uc2dc\uac04\uc73c\ub85c \uc218\uc815\ud558\uace0 \ube4c\ub4dc, \ubc30\ud3ec\ub418\ub294 \uac83\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"skaffold dev")," \uba85\ub839\uc73c\ub85c \ud655\uc778\ud560 \uc218 \uc788\ub2e4. \uc9c4\ud589\ub418\ub294 \uacfc\uc815\uc744 \ubcf4\uba74 ",(0,a.kt)("a",{parentName:"p",href:"https://draft.sh/"},"draft.sh")," \ud504\ub85c\uc81d\ud2b8\uc640\ub3c4 \uaf64 \uc720\uc0ac\ud558\ub2e4\uace0 \ubcfc \uc218 \uc788\ub2e4.  "),(0,a.kt)("p",null,"\uc5d0\ub7ec\uc5c6\uc774 run\uc774 \uc2e4\ud589\ub418\uace0 \ub09c\ud6c4 minikube\uc5d0 \ubc30\ud3ec\ub41c pod\uc640 service\ub97c \ud655\uc778\ud55c\ub2e4. \uc911\uac04\uc5d0 loadgenerator\uac00 init\uc778 \uc774\uc720\ub294 minikube \uc790\uc6d0\uc774 \ubd80\uc871\ud574\uc11c \ubc1c\uc0dd\ud558\ub294 \ud604\uc0c1\uc774\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod\nNAME                                     READY     STATUS     RESTARTS   AGE\nadservice-7c7d687dcb-xzr4m               1/1       Running    1          4h\ncartservice-f54bcb9ff-tcfgn              1/1       Running    4          4h\ncheckoutservice-576446687b-95bwj         1/1       Running    1          4h\ncurrencyservice-5bd99bf97d-28mtz         1/1       Running    1          4h\nemailservice-6cb587798d-wwzdh            1/1       Running    1          4h\nfrontend-6bf9796f7b-ch9pl                1/1       Running    4          4h\ngrafana-6678c5c5d9-2qx75                 1/1       Running    1          4h\njaeger-5b66bdf7f7-csdzx                  1/1       Running    2          4h\nloadgenerator-7c4f446774-68djg           0/1       Init:0/1   1          4h\npaymentservice-fc4c8589-wrfg7            1/1       Running    1          4h\nproductcatalogservice-84878c8b9c-jhgnw   1/1       Running    1          4h\nprometheus-58d98b7578-87td6              1/1       Running    1          4h\nrecommendationservice-8564f9d894-smlpf   1/1       Running    1          4h\nredis-cart-798bc66d58-xn6ff              1/1       Running    1          4h\nshippingservice-789656f6bc-rgzrp         1/1       Running    1          4h\n\n$ kubectl get svc\nNAME                    TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)                                                            AGE\nadservice               ClusterIP      10.107.196.115   <none>        9555/TCP,9090/TCP                                                  4h\ncartservice             ClusterIP      10.98.151.164    <none>        7070/TCP                                                           4h\ncheckoutservice         ClusterIP      10.97.9.197      <none>        5050/TCP                                                           4h\ncurrencyservice         ClusterIP      10.103.112.225   <none>        7000/TCP                                                           4h\nemailservice            ClusterIP      10.97.184.174    <none>        5000/TCP                                                           4h\nfrontend                ClusterIP      10.103.40.138    <none>        80/TCP,9090/TCP                                                    4h\nfrontend-external       LoadBalancer   10.108.170.241   <pending>     80:31944/TCP                                                       4h\ngrafana                 ClusterIP      10.104.141.254   <none>        3000/TCP                                                           4h\ngrafana-external        LoadBalancer   10.102.166.138   <pending>     3000:30459/TCP                                                     4h\njaeger                  ClusterIP      10.98.71.173     <none>        9411/TCP,5775/UDP,6831/UDP,6832/UDP,5778/TCP,16686/TCP,14268/TCP   4h\njaeger-external         LoadBalancer   10.96.164.126    <pending>     16686:32362/TCP                                                    4h\nkubernetes              ClusterIP      10.96.0.1        <none>        443/TCP                                                            6h\npaymentservice          ClusterIP      10.109.31.241    <none>        50051/TCP                                                          4h\nproductcatalogservice   ClusterIP      10.101.124.106   <none>        3550/TCP                                                           4h\nprometheus              ClusterIP      10.103.107.213   <none>        9090/TCP                                                           4h\nrecommendationservice   ClusterIP      10.104.225.28    <none>        8080/TCP                                                           4h\nredis-cart              ClusterIP      10.101.24.157    <none>        6379/TCP                                                           4h\nshippingservice         ClusterIP      10.104.224.18    <none>        50051/TCP                                                          4h\n")),(0,a.kt)("h3",{id:"\uc11c\ube44\uc2a4-\uc811\uc18d-\ubc0f-metrictracing-\ud655\uc778"},"\uc11c\ube44\uc2a4 \uc811\uc18d \ubc0f Metric/Tracing \ud655\uc778"),(0,a.kt)("p",null,"\ub85c\uceec minikube\ud658\uacbd\uc774\uae30 \ub54c\ubb38\uc5d0 external service\uac00 pending\uc774\ubbc0\ub85c service\ub97c minikube NAT IP\ub85c expose \uc2dc\ud0a8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ minikube service frontend-external\n$ minikube service grafana-external\n$ minikube service jaeger-external\n$ minikube service list\n|-------------|-----------------------|-----------------------------|\n|  NAMESPACE  |         NAME          |             URL             |\n|-------------|-----------------------|-----------------------------|\n| default     | adservice             | No node port                |\n| default     | cartservice           | No node port                |\n| default     | checkoutservice       | No node port                |\n| default     | currencyservice       | No node port                |\n| default     | emailservice          | No node port                |\n| default     | frontend              | No node port                |\n| default     | frontend-external     | http://192.168.99.101:31944 |\n| default     | grafana               | No node port                |\n| default     | grafana-external      | http://192.168.99.101:30459 |\n| default     | jaeger                | No node port                |\n| default     | jaeger-external       | http://192.168.99.101:32362 |\n| default     | kubernetes            | No node port                |\n| default     | paymentservice        | No node port                |\n| default     | productcatalogservice | No node port                |\n| default     | prometheus            | No node port                |\n| default     | recommendationservice | No node port                |\n| default     | redis-cart            | No node port                |\n| default     | shippingservice       | No node port                |\n| kube-system | kube-dns              | No node port                |\n|-------------|-----------------------|-----------------------------|\n")),(0,a.kt)("p",null,"3\uac1c\uc758 \uc11c\ube44\uc2a4\ub85c \uac01\uac01 \uc811\uc18d\uc774 \ub418\ub294\uac83\uc744 \ud655\uc778\ud560\uc218 \uc788\ub2e4.\nGrafana \ub300\uc2dc\ubcf4\ub4dc\ub85c \ub4e4\uc5b4\uac00\uba74 \ud604\uc7ac \uc218\uc9d1\ub418\ub294 prometheus source(http://prometheus:9090)\ub97c \ud1b5\ud574 OpenCensus\uae30\ubc18 Application Metric\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"hipster_grafana",src:r(73862).Z,width:"2878",height:"1488"})),(0,a.kt)("p",null,"\uadf8\ub9bc\uc5d0\uc11c \ubcf4\uba74 \uc804\uccb4 \uc11c\ube44\uc2a4 \uc751\ub2f5\uc5d0 \ub300\ud55c 99% \ubc31\ubd84\uc704 \uc9c0\uc5f0\uc2dc\uac04\uc774 944ms \uc778\uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4. "),(0,a.kt)("p",null,"\ub610\ud55c Jaeger\ub97c \ud1b5\ud574 DAG(Directed acyclic graph) \ubc0f \uc11c\ube44\uc2a4\uac04 Tracing \uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"DAG",src:r(92464).Z,width:"3146",height:"1782"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"tracing",src:r(6123).Z,width:"3172",height:"1442"})),(0,a.kt)("h2",{id:"\uc815\ub9ac"},"\uc815\ub9ac"),(0,a.kt)("p",null,"OpenCensus \uae30\ubc18\uc73c\ub85c \uac1c\ubc1c\uc790\uac00 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uace0 Microservice\ub97c minikube\uc5d0\uc11c \ubc30\ud3ec\ud558\uace0 Prometheus, Jaeger Exporter \uc5f0\ub3d9\uc744 \ud1b5\ud574 \uc2dc\uc2a4\ud15c\ubfd0\ub9cc\uc774 \uc544\ub2cc Application\uae30\ubc18 Metrics/Stats\uc744 \uc218\uc9d1\ud558\uace0 \uac1c\ubc1c\uc790\uac00 \uc791\uc131\ud55c \ucf54\ub4dc\ub97c \uc9c1\uc811 Tracing\ud558\ub294 \uac04\ub2e8\ud55c \ub370\ubaa8\ub97c \uc9c4\ud589\ud558\uc600\ub2e4. (Istio\ub97c \ud3ec\ud568\ud574\uc11c Public\ud658\uacbd\uc5d0 \ubc30\ud3ec\ud574\ubd10\ub3c4 \uc88b\uc740 \uacf5\ubd80\uac00 \ub420 \uac83 \uac19\ub2e4)  "),(0,a.kt)("p",null,"\ud5a5\ud6c4 ",(0,a.kt)("a",{parentName:"p",href:"https://openmetrics.io/"},"OpenMetric"),"\uacfc ",(0,a.kt)("a",{parentName:"p",href:"https://opencensus.io/"},"Opencensus"),"\uac00 \uc2e4\uc81c \uac1c\ubc1c\uc790 \uae30\ubc18\uc73c\ub85c \ud65c\uc131\ud654\ub418\uace0 \uc801\uc6a9\uc774 \ub41c\ub2e4\uba74 Telemetric \uce21\uba74\uc5d0\uc11c \ub9ce\uc740 Use-Case\uac00 \ub3c4\ucd9c\ub420 \uc218 \uc788\uc744\uac83 \uac19\ub2e4.  "),(0,a.kt)("p",null,"\uc704\uc5d0\uc11c \uc5b8\uae09\ud588\ub4ef\uc774 Prometheus\uae30\ubc18 Kubernetes \ud074\ub7ec\uc2a4\ud130\ub97c \uc6b4\uc601\ud558\uace0 \uc788\ub294 \ud300\uc758 \uacbd\uc6b0 \uac1c\ubc1c\uc790\uc758 \uc791\uc131 \ucf54\ub4dc\ub97c \ucd5c\uc18c\ud654\ud560 \uc218 \uc788\ub294 \ub3c4\uad6c\ub85c\uc11c \ucda9\ubd84\ud788 \ud65c\uc6a9\ub420 \uc218 \uc788\uc5b4 \ubcf4\uc778\ub2e4.  "),(0,a.kt)("p",null,"\uaf2d Cloud Native \uae30\ubc18 Web \uac1c\ubc1c\uc774 \uc544\ub2c8\ub354\ub77c\ub3c4 \uae30\uc874 \uacf5\uc7a5, \uae08\uc735, \ubcd1\uc6d0 \ub4f1 \uc758 IoT\ub098 \uc13c\uc11c/\uc124\ube44\ub97c \uc704\ud55c \ube44\uc988\ub2c8\uc2a4\uc5d0\ub3c4 Backend\ub85c\uc11c \ud655\uc7a5\uc131\uc788\ub294 \ub3c4\uad6c\ub85c\uc11c \ud65c\uc6a9\uc774 \ub420 \uc218 \uc788\uc744\uac83 \uac19\ub2e4."))}d.isMDXComponent=!0},92464:function(e,n,r){n.Z=r.p+"assets/images/dag-0e49356be3f8676a292785832fbc1981.png"},73862:function(e,n,r){n.Z=r.p+"assets/images/hipster_grafana-13ab198ab40c06a5c6ba6bc61e3725ad.png"},6123:function(e,n,r){n.Z=r.p+"assets/images/tracing-b9038c7a3151b467c5f7d4dc08786f75.png"}}]);