"use strict";(self.webpackChunkddii=self.webpackChunkddii||[]).push([[5543],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,m=u["".concat(s,".").concat(d)]||u[d]||k[d]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},77180:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return k}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],p={layout:"single",title:"Spinnaker on Kubernetes #1",comments:!0,classes:"wide",description:"Spinnaker\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4 #1",categories:["Kubernetes"],tags:["CI/CD","Kubernetes","Spinnaker"]},s="Spinnaker on Kubernetes",l={permalink:"/2018/07/03/spinnaker-advanced-1",editUrl:"https://github.com/ddiiwoong/newblog/tree/main/blog/2018-07-03-spinnaker-advanced-1.md",source:"@site/blog/2018-07-03-spinnaker-advanced-1.md",title:"Spinnaker on Kubernetes #1",description:"Spinnaker\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4 #1",date:"2018-07-03T00:00:00.000Z",formattedDate:"July 3, 2018",tags:[{label:"CI/CD",permalink:"/tags/ci-cd"},{label:"Kubernetes",permalink:"/tags/kubernetes"},{label:"Spinnaker",permalink:"/tags/spinnaker"}],readingTime:3.725,truncated:!1,authors:[],frontMatter:{layout:"single",title:"Spinnaker on Kubernetes #1",comments:!0,classes:"wide",description:"Spinnaker\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4 #1",categories:["Kubernetes"],tags:["CI/CD","Kubernetes","Spinnaker"]},prevItem:{title:"Cilium",permalink:"/2018/07/06/cilium-1"},nextItem:{title:"Provisioning Dedicated Game Server on Kubernetes Cluster",permalink:"/2018/07/01/openinfraday18"}},c={authorsImageUrls:[]},k=[{value:"\uc6a9\uc5b4\ub4e4",id:"\uc6a9\uc5b4\ub4e4",level:2},{value:"Jenkins \uc5f0\ub3d9",id:"jenkins-\uc5f0\ub3d9",level:2}],u={toc:k};function d(e){var n=e.components,p=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,p,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\uc9c0\ub09c\ubc88 ",(0,i.kt)("a",{parentName:"p",href:"https://www.slideshare.net/openstack_kr/openinfra-days-korea-2018-track-4-provisioning-dedicated-game-server-on-kubernetes-cluster"},"OpenInfraDay\ubc1c\ud45c"),"\ub54c \uc9c8\ubb38\uc744 \ud574\uc8fc\uc168\ub294\ub370 \uc694\uc998 Spinnaker\ub97c \ub9ce\uc774\ub4e4 \uc4f0\uac70\ub098 \uac80\ud1a0\ub97c \ub9ce\uc774 \ud558\ub294\uac83\uc73c\ub85c \uc54c\uace0 \uc788\ub2e4.  "),(0,i.kt)("p",null,"Spinnaker\ub97c \uc124\uce58\ud558\ub294 \ub0b4\uc6a9\uc740 \ub9ce\uc774 \uc788\uc73c\ub2c8 \uc544\ub798 halyard\ub85c \uc124\uce58\ud558\ub294 \ud3ec\uc2a4\ud2b8\ub97c \ucc38\uace0\ud558\uba74 \ub41c\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://yunsangjun.github.io/blog/spinnaker/2018/06/03/installing-spinnaker.html"},"\uc724\uc0c1\uc900\uc758 \uae30\uc220 \ube14\ub85c\uadf8 - Spinnaker \uc124\uce58\ud558\uae30")),(0,i.kt)("p",null,"\uc774\ubc88\uc5d0 \uc774\uc57c\uae30\ud558\uace0\uc790 \ud558\ub294 \ubd80\ubd84\uc740 \uc2e4\uc81c Spinnaker\ub97c \uc124\uce58\ud558\uace0 \ub09c \ud6c4 \uc6b4\uc601\uc0c1\uc5d0 \uace0\ub824\ud574\uc57c\ud560 \ubd80\ubd84\ub4e4\uacfc \ud301\ub4e4\uc744 \uacf5\uc720\ud574\ubcf4\ub824\uace0 \ud55c\ub2e4."),(0,i.kt)("p",null,"\uc0ac\uc2e4 Spinnaker\ub97c \uad6c\uc131\ud558\uba74\uc11c \uac00\uc7a5 \uc5b4\ub824\uc6e0\ub358 \ubd80\ubd84\ub4e4\uc740 \uc6a9\uc5b4, halyard config \uad00\ub9ac\uc640 custom resourse \uc778\uc2dd\ubd80\ubd84 \uc774\uc600\ub2e4. \ub098\uba38\uc9c0\ub4e4\uc740 \ubb50 \ud29c\ud1a0\ub9ac\uc5bc\uc744 \ub530\ub77c\uac00\uba74 \ubcc4\ub85c \uc5b4\ub835\uc9c4 \uc54a\uc73c\ub2c8 \uc544\ub798 \ub0b4\uc6a9\uc744 \ucc28\uadfc\ucc28\uadfc \ub530\ub77c\uac00\uba74\uc11c \uc774\ud574\ud558\uba74 \ub420\uac83 \uac19\ub2e4. "),(0,i.kt)("h2",{id:"\uc6a9\uc5b4\ub4e4"},"\uc6a9\uc5b4\ub4e4"),(0,i.kt)("p",null,"\uc0ac\uc6a9\ud558\uba74\uc11c \ud63c\ub3c8\uc774 \ub9ce\uc774 \uc0dd\uae30\ub294 \ubd80\ubd84\uc774\ub2e4 \uc774\uac8c GCE\ub098 EC2\ub97c \uc4f0\uba74 \uc6a9\uc5b4 \ub9e4\uce6d\uc774 \uc26c\uc6b4\ub370 k8s\ub97c \uc704\ud55c \ubcc4\ub3c4\uc758 \uba54\ub274\uac00 \uc544\ub2cc \uae30\ub2a5\uc744 \ud1b5\ud569\ud558\ub2e4\ubcf4\ub2c8 \uc6a9\uc5b4\uac00 \uc870\uae08 \ud63c\ub3d9\uc2a4\ub7fd\uac8c \uad6c\uc131\uc774 \ub418\uc5c8\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\ud2b9\ud788 Load Balancer \ubd80\ubd84\uc740 Service\ub85c \ub9e4\ud551\ub418\uace0 \ud37c\ube14\ub9ad k8s\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 Type LoadBalancer\ub294 \ubbf8\uc9c0\uc6d0\ud55c\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uadf8\ub9ac\uace0 \ubaa8\ub4e0 Resource\ub4e4\uc740 Deploy, Delete, Scale, Rollout(Undo, Pause, Resume)\uc744 \uc9c0\uc6d0\ud558\uba70 Versioning\uc774 \uc9c0\uc6d0\ub41c\ub2e4.  Versioning\uc740 ",(0,i.kt)("a",{parentName:"p",href:"https://www.spinnaker.io/reference/providers/kubernetes-v2/#strategy"},"\uc5ec\uae30"),"\uc5d0 \uc124\uba85\ub41c \ub300\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"strategy.spinnaker.io/versioned")," annotation\uc744 \ud1b5\ud574 manifest\ubcc4\ub85c \uc7ac\uc815\uc758\uac00 \uac00\ub2a5\ud558\ub2e4."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Spinnaker"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Kubernetes"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\ube44\uace0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Server Group"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.spinnaker.io/reference/providers/kubernetes-v2/#workloads"},"Workloads")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.spinnaker.io/guides/developer/crd-extensions/"},"CRD\uc758 \uacbd\uc6b0 \ubcc4\ub3c4 Build"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Clusters"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Logical Server Group"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Load Balancer"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Services"),(0,i.kt)("td",{parentName:"tr",align:"center"},"LoadBalancer(k8s) \ubbf8\uc9c0\uc6d0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Firewall"),(0,i.kt)("td",{parentName:"tr",align:"center"},"NetworkPolicies"),(0,i.kt)("td",{parentName:"tr",align:"center"})))),(0,i.kt)("p",null,"Spinnaker Server Group\uc73c\ub85c \ubd84\ub958 \ub41c \ud56d\ubaa9\uc740 \ubaa8\ub450 Spinnaker\uc758 \ud074\ub7ec\uc2a4\ud130 \ud0ed\uc5d0 \ud45c\uc2dc\uac00 \ub41c\ub2e4. \uac00\ub2a5\ud55c \uacbd\uc6b0 \ubaa8\ub4e0 \ud3ec\ub4dc\uac00 \ud45c\uae30\ub418\uc9c0\ub9cc, \ud574\ub2f9 ",(0,i.kt)("a",{parentName:"p",href:"https://www.spinnaker.io/reference/providers/kubernetes-v2/#workloads"},"Workloads")," \uc774\uc678\uc758 CRD(Custom Resource Definition)\ub294 halconfig\uc5d0\uc11c \uc544\ub798\uc640 \uac19\uc774 customResources config\ub97c \ucd94\uac00\ud558\uba74 deploy\ub294 \uac00\ub2a5\ud558\ub098 Spinnaker UI\uc5d0\uc11c \ubcf4\uc774\uc9c0\ub294 \uc54a\ub294\ub2e4.  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubernetes:\n      enabled: true\n      accounts:\n      - name: my-k8s-account\n        customResources:\n        - kubernetesKind: GameServer\n")),(0,i.kt)("p",null,"\uc774\uc720\ub294 \ubc14\ub85c \ub2e4\uc74c \ub9c1\ud06c\ucc98\ub7fc ",(0,i.kt)("a",{parentName:"p",href:"https://www.spinnaker.io/guides/developer/crd-extensions/"},"(CRD\uc758 \uacbd\uc6b0 \ubcc4\ub3c4 Build\ud544\uc694)"),"\n\ubcc4\ub3c4\ub85c Java\ub97c \ube4c\ub4dc\ud574\uc57c \ud55c\ub2e4. Spinnaker Slack\uc5d0 \ubb38\uc758\ub97c \uba87\ubc88\ud588\ub294\ub370 \uc9c8\ubb38\ud558\ub294 \uc0ac\ub78c\ub9cc \uc788\uace0 \ub2f5\uc740 \uc544\ubb34\ub3c4 \uc548\ud574\uc900\ub2e4\ub294...",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://spinnakerteam.slack.com/"},"https://spinnakerteam.slack.com/")),(0,i.kt)("h2",{id:"jenkins-\uc5f0\ub3d9"},"Jenkins \uc5f0\ub3d9"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.spinnaker.io/setup/ci/jenkins/"},"Spinnaker, Jenkins integration \uc0c1\uc138\ub0b4\uc6a9 \uacf5\uc2dd\ubb38\uc11c ")),(0,i.kt)("p",null,"Jenkins\uc640 \uc5f0\ub3d9\ud558\uba74\uc11c \uac00\uc7a5 \uc5b4\uc774\uc5c6\uc774 \ud5e4\ub9e8\ubd80\ubd84\uc740 \uc544\ub798 \uadf8\ub9bc\ucc98\ub7fc \ub418\uc5b4\uc788\uc5b4\uc57c \ud558\ub294\ub370 Security Realm\uc744 Jenkins Default admin \uacc4\uc815\ub9cc\uc744 \uac00\uc9c0\uace0 integration \ud558\ub824\ub2e4\uac00 \uacc4\uc18d \uc2e4\ud328\ud558\uc600\ub2e4. Delegate to servlet container \ub9d0\uace0 Jenkins \uc790\uccb4 \uc0ac\uc6a9\uc790 DB\ub85c \ubcc4\ub3c4 \uacc4\uc815\uc744 \uc0dd\uc131\ud558\uace0 \uc544\ub798 \uadf8\ub9bc\ucc98\ub7fc \uc124\uc815\uc744 \ud574\uc57c\ud55c\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jenkins Config",src:t(67511).Z,width:"896",height:"778"})),(0,i.kt)("p",null,"\uc704 \uc124\uc815 \uc774\ud6c4 \uc544\ub798\uc640 \uac19\uc774 Spinnaker UI\uc5d0\uc11c Jenkins API\uc5f0\ub3d9\uc774 \uac00\ub2a5\ud558\ub2e4.  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Spinnaker Jenkins",src:t(22314).Z,width:"1176",height:"888"})),(0,i.kt)("p",null,"\uc624\ub298\uc740 \uc5ec\uae30\uae4c\uc9c0\ub9cc \ud558\uace0 \ub2e4\uc74c\uae00\uc5d0\uc11c\ub294 \ubc30\ud3ec\uc804\ub7b5\uc774\ub098 Network Policy \uc5f0\ub3d9\ub4f1\uc744 \uc0c1\uc138\ud788 \uc801\uc5b4\ubcfc \uc608\uc815\uc774\ub2e4."))}d.isMDXComponent=!0},67511:function(e,n,t){n.Z=t.p+"assets/images/jenkins_config-ebc060e294614bf3e83967c95b1cb527.png"},22314:function(e,n,t){n.Z=t.p+"assets/images/spin_jenkins-dd2e9b5ec5faf44637c141dba0020e45.png"}}]);