"use strict";(self.webpackChunkddii=self.webpackChunkddii||[]).push([[3187],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(d,l(l({ref:t},k),{},{components:n})):a.createElement(d,l({ref:t},k))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75794:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={layout:"single",title:"K3s on Raspberry Pi Cluster",comments:!0,classes:"wide",description:"\uc774\ubc88 \ud3ec\uc2a4\ud2b8\uc5d0\uc11c\ub294 k3s\ub97c \ub77c\uc988\ubca0\ub9ac\ud30c\uc774 \ud074\ub7ec\uc2a4\ud130\uc5d0 \uc62c\ub824\ubcf4\uace0 \ud65c\uc6a9\ubc29\uc548\uc5d0 \ub300\ud574\uc11c \uace0\ubbfc\ud574\ubcf8\ub2e4",categories:["Kubernetes"],tags:["Kubernetes","Rancher","K3s","Raspberry","Homelab"]},s=void 0,p={permalink:"/2019/03/11/k3s-homelab",editUrl:"https://github.com/ddiiwoong/newblog/tree/main/blog/2019-03-11-k3s-homelab.md",source:"@site/blog/2019-03-11-k3s-homelab.md",title:"K3s on Raspberry Pi Cluster",description:"\uc774\ubc88 \ud3ec\uc2a4\ud2b8\uc5d0\uc11c\ub294 k3s\ub97c \ub77c\uc988\ubca0\ub9ac\ud30c\uc774 \ud074\ub7ec\uc2a4\ud130\uc5d0 \uc62c\ub824\ubcf4\uace0 \ud65c\uc6a9\ubc29\uc548\uc5d0 \ub300\ud574\uc11c \uace0\ubbfc\ud574\ubcf8\ub2e4",date:"2019-03-11T00:00:00.000Z",formattedDate:"March 11, 2019",tags:[{label:"Kubernetes",permalink:"/tags/kubernetes"},{label:"Rancher",permalink:"/tags/rancher"},{label:"K3s",permalink:"/tags/k-3-s"},{label:"Raspberry",permalink:"/tags/raspberry"},{label:"Homelab",permalink:"/tags/homelab"}],readingTime:12.09,truncated:!1,authors:[],frontMatter:{layout:"single",title:"K3s on Raspberry Pi Cluster",comments:!0,classes:"wide",description:"\uc774\ubc88 \ud3ec\uc2a4\ud2b8\uc5d0\uc11c\ub294 k3s\ub97c \ub77c\uc988\ubca0\ub9ac\ud30c\uc774 \ud074\ub7ec\uc2a4\ud130\uc5d0 \uc62c\ub824\ubcf4\uace0 \ud65c\uc6a9\ubc29\uc548\uc5d0 \ub300\ud574\uc11c \uace0\ubbfc\ud574\ubcf8\ub2e4",categories:["Kubernetes"],tags:["Kubernetes","Rancher","K3s","Raspberry","Homelab"]},prevItem:{title:"VScode Server",permalink:"/2019/03/20/vscode-server"},nextItem:{title:"Cloud-Native Microservices Demo Application with OpenCensus",permalink:"/2019/03/07/microservices-demo"}},k={authorsImageUrls:[]},c=[{value:"K3s?",id:"k3s",level:2},{value:"\uc0ac\uc804 \uc900\ube44\uc0ac\ud56d",id:"\uc0ac\uc804-\uc900\ube44\uc0ac\ud56d",level:2},{value:"\uad6c\ub9e4 \uc81c\ud488 \uc870\ub9bd",id:"\uad6c\ub9e4-\uc81c\ud488-\uc870\ub9bd",level:2},{value:"OS \uc124\uce58",id:"os-\uc124\uce58",level:2},{value:"\ud658\uacbd \uc124\uc815",id:"\ud658\uacbd-\uc124\uc815",level:2},{value:"k3s \ud074\ub7ec\uc2a4\ud130 \uc0dd\uc131",id:"k3s-\ud074\ub7ec\uc2a4\ud130-\uc0dd\uc131",level:2},{value:"Server \uae30\ub3d9",id:"server-\uae30\ub3d9",level:3},{value:"node \ucd94\uac00",id:"node-\ucd94\uac00",level:3},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",level:2}],u={toc:c};function m(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc774\ubc88\uc5d0\ub294 \uacbd\ub7c9 Kubernetes\ub77c\uace0 \uc774\uc57c\uae30\ud558\ub294 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/k3s"},"K3s"),"\ub97c Raspberry Pi \ud074\ub7ec\uc2a4\ud130\uc0c1\uc5d0 \uad6c\ub3d9\ud558\ub824\uace0 \ud55c\ub2e4.\n\uc21c\uc218\ud558\uac8c \uac1c\uc778\uc758\uacac\uc73c\ub85c \uc791\uc131\ud558\uc600\uace0 \uc808\ub300 \uc81c\ud488\uc774\ub098 \ubd80\ud488\ud64d\ubcf4\ub97c \ud558\uace0\uc790 \ud558\ub294 \uc758\ub3c4\ub294 \uc804\ud600 \uc5c6\ub2e4."),(0,o.kt)("h2",{id:"k3s"},"K3s?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"K3s"),"\ub294 Rancher Lab\uc5d0\uc11c \ucd5c\uc18c\uc790\uc6d0\uc744 \uc0ac\uc6a9\ud558\ub294 Kubernetes \ud074\ub7ec\uc2a4\ud130 \uad6c\uc131\uc744 \uc704\ud55c \uc194\ub8e8\uc158\uc73c\ub85c \uc2dc\uc791\ub418\uc5c8\uace0 2019\ub144 3\uc6d4 12\uc77c \ud604\uc7ac 0.2\ubc84\uc804\uc774 \ub9b4\ub9ac\uc988\ub41c \uc0c1\ud0dc\uc774\ub2e4. \ubc14\uc774\ub108\ub9ac \uc804\uccb4\uac00 40mb\uac00 \ub418\uc9c0 \uc54a\uace0 \uc124\uce58\uac00 \uc27d\ub2e4\ub294 \uc810\uc5d0\uc11c \ucd5c\uadfc \ud2b8\uc704\ud130 \uc0c1\uc5d0\uc11c \uc774\uc288\uac00 \ub418\uace0 \uc788\ub294 \ud504\ub85c\uc81d\ud2b8\ub77c\uace0 \ud560 \uc218 \uc788\ub2e4. "),(0,o.kt)("p",null,"\uc8fc\ub85c Edge, IoT \ub4f1 \uc800\uc804\ub825, \uc800\uc0ac\uc591 \uae30\ubc18 ARM\uacc4\uc5f4 \ucef4\ud4e8\ud305\uc5d0 \ucd5c\uc801\ud654 \ub418\uc5b4 \uc788\uace0 \uc2e4\uc81c \uc2e4\ud5d8\uc801\uc774\uae34 \ud558\uc9c0\ub9cc \uac04\ub2e8\ud55c \uae30\ub2a5\uc774\ub098 baremetal \uae30\ubc18 \ud074\ub7ec\uc2a4\ud130 \ud14c\uc2a4\ud2b8\ub97c \uc9d1\uc5d0\uc11c \ud574\ubcf4\uae30\uc5d0\ub294 \ub531 \uc88b\uc740 \ud504\ub85c\uc81d\ud2b8\ub77c \ud560 \uc218 \uc788\ub2e4. \uc774\ubbf8 vSphere, OpenStack\uae30\ubc18\uc73c\ub85c \ud14c\uc2a4\ud2b8\ub294 \ucc28\uace0 \ub118\uce58\uac8c \ud574\ubd24\uc9c0\ub9cc \uc77c\ub2e8 \ubb3c\ub9ac\uc801\uc778 \ucf00\uc774\uc2a4\ubd80\ud130 \ubcf4\uace0\ub098\uba74 \ud558\ub4dc\uc6e8\uc5b4\ub97c \uc88b\uc544\ud558\ub294 \uc0ac\ub78c\ub4e4\uc5d0\uac8c\ub294 \uc544\uc8fc \uc7ac\ubbf8\uc788\ub294 \uc7a5\ub09c\uac10\uc774 \uc544\ub2d0\uc218 \uc5c6\uc744 \uac83\uc774\ub2e4. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/k3s"},"K3s Github")," \uc0c1\uc138 \uc124\uba85\uc5d0 \ubcf4\uba74 Cloud Provider, Storage Plugin\uc740 \uc81c\uac70\ud558\uc600\uace0  default \uc800\uc7a5\uc18c\uac00 ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd"),"\uac00 \uc544\ub2cc ",(0,o.kt)("inlineCode",{parentName:"p"},"sqlite3"),"\uc73c\ub85c \ub418\uc5b4\uc788\ub2e4\uace0 \ud55c\ub2e4. "),(0,o.kt)("h2",{id:"\uc0ac\uc804-\uc900\ube44\uc0ac\ud56d"},"\uc0ac\uc804 \uc900\ube44\uc0ac\ud56d"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\ucd5c\uc18c 2\uac1c \uc774\uc0c1\uc758 Raspberry Pi 2B/3B/3B+, 4ea",(0,o.kt)("br",{parentName:"p"}),"\n","\uc624\ud508\ub9c8\ucf13\uc5d0\uc11c \ud560\uc778\ucfe0\ud3f0 \uc801\uc6a9\ud574\uc11c Raspberry Pi 3B+, 4ea\ub97c ",(0,o.kt)("inlineCode",{parentName:"p"},"166,820\uc6d0"),"(\ub300\ub2f9 42,000\uc6d0) \uc815\ub3c4\uc5d0 \uad6c\ub9e4\ud558\uc600\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\ucd5c\uc800\uac00 \uac80\uc0c9\uc73c\ub85c \ub300\ub2f9 46,000\uc6d0 \uc815\ub3c4 \ud588\ub358\uac83 \uac19\ub2e4. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Stackable Case",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.amazon.com/gp/product/B07CTG5N3V/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1"},"iUniker Raspberry Pi Cluster Case")," \uac15\ucd94!! (\uac1c\uc778\uc801\uc73c\ub85c \ucfe8\ub7ec\uc640 \ub514\uc790\uc778\uc774 \ub9d8\uc5d0 \ub4ec)",(0,o.kt)("br",{parentName:"p"}),"\n","\ubc30\uc1a1\ube44\ud3ec\ud568 29.19\ub2ec\ub7ec, \uc57d ",(0,o.kt)("inlineCode",{parentName:"p"},"33,000\uc6d0"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"micro SDHC 4ea",(0,o.kt)("br",{parentName:"p"}),"\n","16GB\ub85c\ub3c4 \ucda9\ubd84\ud558\uc9c0\ub9cc \uc0bc\uc131\uc804\uc790 micro SDHC CLASS10 UHS-I EVO (32GB), 4ea\ub97c \uc624\ud508\ub9c8\ucf13\uc5d0\uc11c \uc0ac\uac8c\ub418\uba74 \ubc30\uc1a1\ub8cc \ud3ec\ud568\ud574\uc11c 8,500\uc6d0 * 4ea = ",(0,o.kt)("inlineCode",{parentName:"p"},"34,000\uc6d0"),"\uc5d0 \uad6c\ub9e4\uac00 \uac00\ub2a5\ud558\ub2e4. \uc624\ud508\ub9c8\ucf13\uc5d0\uc11c\ub294 \uac1c\ub2f9 \ubc30\uc1a1\ub8cc\ub97c \ub0b4\uc57c\ud55c\ub2e4. \ud558\uc9c0\ub9cc \ucfe0\ud321\uc5d0\uc11c\ub294 2ea\ub97c \ub85c\ucf13\ubc30\uc1a1\uc73c\ub85c 15,380\uc6d0\uc5d0 \uad6c\ub9e4\uac00 \uac00\ub2a5\ud558\ubbc0\ub85c \uc57d ",(0,o.kt)("inlineCode",{parentName:"p"},"31,000\uc6d0"),"\uc5d0 4\uac1c\ub97c \uad6c\ub9e4\ud560\uc218 \uc788\ub2e4. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\uba40\ud2f0\ucda9\uc804\uae30",(0,o.kt)("br",{parentName:"p"}),"\n","1\ub9cc\uc6d0\ub300 \ud6c4\ubc18\uc5d0\uc11c 2\ub9cc\uc6d0 \ucd08\ubc18\uc774\uba74 6\ud3ec\ud2b8 \ucda9\uc804\uae30\ub97c \uad6c\ub9e4\ud560\uc218 \uc788\ub294\ub370 \uad6c\ub9e4\ud588\ub358 \uac00\uc7a5 \ud070 \uae30\uc900\uc740 Pi 4\ub300\ub97c \ub3d9\uc2dc\uc5d0 2.5A \uc804\ub958\ub97c \uc548\uc815\uc801\uc73c\ub85c \uacf5\uae09\ud558\ub824\uba74 \ucd5c\ub300 10A\ub97c \uc9c0\uc6d0\ud558\ub294 \uba40\ud2f0 \ucda9\uc804\uae30\ub97c \uc0ac\uc57c\ud588\uc5c8\uace0 4-5\ud3ec\ud2b8 \uc9dc\ub9ac \ucda9\uc804\uae30\ub4e4\uc740 \ub300\ubd80\ubd84 \ucd5c\ub300 \uc804\ub958\uac00 8A\ub85c \ucda9\uc871\ud558\uc9c0 \ubabb\ud574 4\ud3ec\ud2b8\ub9cc \uc0ac\uc6a9\ud558\ub354\ub77c\ub3c4 \uc548\uc815\uc801\uc778 \uc804\ub958 \uacf5\uae09\uc744 \uc704\ud574 6\ud3ec\ud2b8 \ucda9\uc804\uae30\ub85c \uc120\ud0dd\ud558\uc600\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\ucfe0\ud321 \ub85c\ucf13\ubc30\uc1a1 - \ud3ec*\uc9c0 \uac00\uc815\uc6a9 6\ud3ec\ud2b8 \uae09\uc18d \uba40\ud2f0 \ucda9\uc804\uae30, ",(0,o.kt)("inlineCode",{parentName:"p"},"22,900\uc6d0"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"micro 5pin 20cm 2.4A \uc9c0\uc6d0 \ucf00\uc774\ube14 4ea",(0,o.kt)("br",{parentName:"p"}),"\n","Pi \uad8c\uc7a5 \uc804\ub958\uac00 2.5A\ub77c\uace0 \ud588\uc9c0\ub9cc 2.4A, 3A \uc9dc\ub9ac\uc911\uc5d0 \uc800\ub834\ud55c 2.4A \uc9c0\uc6d0 \uc20f\ucf00\uc774\ube14\ub85c \uad6c\ub9e4\ud558\uc600\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc624\ud508\ub9c8\ucf13\uc5d0\uc11c \ubc30\uc1a1\ub8cc \ud3ec\ud568, ",(0,o.kt)("inlineCode",{parentName:"p"},"7800\uc6d0"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"UTP Cat5e 30cm \ucf00\uc774\ube14 4ea",(0,o.kt)("br",{parentName:"p"}),"\n","\uadf8\ub0e5 \uc81c\uc77c\uc2fc\uac78\ub85c \uc624\ud508\ub9c8\ucf13\uc5d0\uc11c \ubc30\uc1a1\ub8cc \ud3ec\ud568 ",(0,o.kt)("inlineCode",{parentName:"p"},"4,100\uc6d0"),"\uc5d0 \uad6c\ub9e4\ud558\uc600\ub2e4.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\uae30\uac00\ube44\ud2b8 \uc9c0\uc6d0\ub418\ub294 5\ud3ec\ud2b8 \uc774\uc0c1 \uc2a4\uc704\uce58 \ud5c8\ube0c(\uacf5\uc720\uae30)",(0,o.kt)("br",{parentName:"p"}),"\n","\uc9d1\uc5d0 \uc788\ub358 \uacf5\uc720\uae30 \ud65c\uc6a9 (iptime A1004) \ud558\uc600\uc9c0\ub9cc \ucd5c\uc800 5\ud3ec\ud2b8 \uc774\uc0c1 \uc2a4\uc704\uce58 \ud5c8\ube0c\uc911 \uc81c\uc77c \uc2fc \ubaa8\ub378\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"16,000\uc6d0"),"\ub300\ub85c \uac00\uaca9 \ud615\uc131\uc911\uc774\ub2e4. "))),(0,o.kt)("p",null,"\uc2e4\uc81c \uc704 \uc2a4\ud399\uc73c\ub85c \ub300\ucda9 \uad6c\ub9e4\ub97c \uc9c4\ud589\ud558\uac8c \ub418\uba74 18.4 + 3.3 + 3.1 + 2.3 + 0.8 + 0.4 + 1.6 = ",(0,o.kt)("inlineCode",{parentName:"p"},"29.9\ub9cc\uc6d0")," \uc815\ub3c4 \uc18c\uc694\uac00 \ub420 \uac83\uc73c\ub85c \uc608\uc0c1\ub41c\ub2e4. \uc9d1\uc5d0 \uad74\ub7ec\ub2e4\ub294 \ubd80\ud488\uc774\ub098 \ucda9\uc804\uae30, \ucf00\uc774\ube14, SD\uce74\ub4dc\ub4e4\uc744 \ud65c\uc6a9\ud558\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"25\ub9cc\uc6d0")," \uc774\ub0b4\ub85c\ub3c4 \ucda9\ubd84\ud788 \uac00\ub2a5\ud558\ub2e4."),(0,o.kt)("h2",{id:"\uad6c\ub9e4-\uc81c\ud488-\uc870\ub9bd"},"\uad6c\ub9e4 \uc81c\ud488 \uc870\ub9bd"),(0,o.kt)("p",null,"\uc870\ub9bd\uc740 \uadf8\ub2e4\uc9c0 \uc5b4\ub835\uc9c0 \uc54a\uc740\ub370 \ucf00\uc774\uc2a4 \uad6c\ub9e4\uc2dc \uc81c\uacf5\ub418\ub294 \ubc29\uc5f4\ud310(CPU, GPU, RAM)\uc744 \uaf3c\uaf3c\ud558\uac8c \ubd99\uc774\uace0 \ucfe8\ub7ec\ub97c GPIO\uc5d0 \uc5f0\uacb0\ud55c\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uadf8\ub807\uac8c \uc5b4\ub824\uc6b4 \uc810\uc740 \uc5c6\uc9c0\ub9cc \ubcf8\uccb4\ub97c \ucf00\uc774\uc2a4\uc5d0 \uace0\uc815\ud560\ub54c \ub108\ud2b8\uac00 \uc791\uc544 \uc190\uc774 \ud070 \uc0ac\ub78c\uc740 \uc870\uae08 \ud798\ub4e4 \uc218\ub3c4 \uc788\uc744 \uac83 \uac19\ub2e4. "),(0,o.kt)("p",null,"\ucf00\uc774\uc2a4\uc758 CPU \ucfe8\ub7ec\uac00 \ud654\ub8e1\uc810\uc815\uc774\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cases",src:n(57217).Z,width:"1224",height:"689"}),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"heat",src:n(78930).Z,width:"689",height:"1224"}),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"cooler",src:n(23617).Z,width:"1224",height:"689"}),"\n",(0,o.kt)("img",{alt:"3stack",src:n(18428).Z,width:"1224",height:"689"}),"\n",(0,o.kt)("img",{alt:"charger",src:n(66042).Z,width:"1224",height:"689"}),"\n",(0,o.kt)("img",{alt:"full",src:n(66492).Z,width:"1224",height:"689"}),"\n",(0,o.kt)("img",{alt:"complete",src:n(10694).Z,width:"1224",height:"689"})),(0,o.kt)("h2",{id:"os-\uc124\uce58"},"OS \uc124\uce58"),(0,o.kt)("p",null,"SD\uce74\ub4dc\uc5d0 \uc124\uce58\ub294 MacOS\uc0c1\uc5d0\uc11c \uc9c4\ud589\ud558\uc600\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/downloads/raspbian/"},"Raspbian Lite"),"\ub97c \ub0b4\ub824\ubc1b\uc544 ",(0,o.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher/"},"Etcher"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec OS\ub97c \uc124\uce58\ud55c\ub2e4. "),(0,o.kt)("p",null,"\uc790\uc138\ud55c \ucd94\uac00\uc801\uc778 \uc124\uce58\ubc29\ubc95\uc740 \ub2e4\uc74c \ub9c1\ud06c\ub97c \ud1b5\ud574\uc11c\ub3c4 \ud655\uc778\uc774 \uac00\ub2a5\ud558\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/documentation/installation/installing-images/README.md"},"Installing operating system images"),"  "),(0,o.kt)("h2",{id:"\ud658\uacbd-\uc124\uc815"},"\ud658\uacbd \uc124\uc815"),(0,o.kt)("p",null,"Mac\uc5d0\uc11c\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"/Volumes/boot"),"\uc5d0 \ub9c8\uc6b4\ud2b8\uac00 \ub41c\ub2e4. OS\ub9c8\ub2e4 \ub2e4\ub974\uc9c0\ub9cc Linux\uc5d0\uc11c\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"/mnt/boot"),", Windows\uc5d0\uc11c\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"boot")," \ub85c \ub9c8\uc6b4\ud2b8\uac00 \ub41c\ub2e4."),(0,o.kt)("p",null,"SSH Service \uc790\ub3d9 \ud65c\uc131\ud654\ub97c \uc704\ud574 \uc704 OS\ubcc4 mount\ub41c root \uacbd\ub85c\uc5d0 ssh \ube48 \ud30c\uc77c\uc744 \uc0dd\uc131\ud558\uac8c \ub418\uba74 reboot\uc774\ud6c4\uc5d0 SSH \uc811\uc18d\uc774 \uac00\ub2a5\ud574\uc9c4\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo touch /Volumes/boot/ssh\n")),(0,o.kt)("p",null,"\ub610\ud55c container \uc0ac\uc6a9\uc744 \uc704\ud574 root\uacbd\ub85c\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"cmdline.txt")," \ud30c\uc77c \ub9c8\uc9c0\ub9c9\uc5d0 cgroup \uc124\uc815\uc744 \ucd94\uac00\ud55c\ub2e4.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cgroup_memory=1 cgroup_enable=memory\n")),(0,o.kt)("p",null,"SD\uce74\ub4dc\ub97c \ub9cc\ub4e4\uace0 \uac01\uac01\uc758 Pi\uc5d0 \uc7a5\ucc29\ud6c4\uc5d0 UTP\ucf00\uc774\ube14\uacfc \uc804\uc6d0\uc744 \ubaa8\ub450 \uc5f0\uacb0\ud55c\ub2e4.\n\ubd80\ud305\uc774 \uc644\ub8cc\ub418\uba74 default id/pass \uc778 ",(0,o.kt)("inlineCode",{parentName:"p"},"pi/raspberry"),"\ub85c \ub85c\uadf8\uc778 \ud558\uace0 ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo raspi-config")," \ub97c \ud1b5\ud574 \ud328\uc2a4\uc6cc\ub4dc \ubcc0\uacbd, hostname \uc124\uc815, GPU memory split \uc124\uc815 \ub4f1\uc744 \uc644\ub8cc\ud558\uc790.",(0,o.kt)("br",{parentName:"p"}),"\n","\ub098\uc911\uc5d0\ub294 PXE booting \ubc0f ansible \uc790\ub3d9\ud654\ub85c \uad6c\ud604\ud558\uba74 \ubb34\uc778\ud658\uacbd \uc124\uce58\uac00 \uac00\ub2a5\ud560\uac83 \uac19\ub2e4. (Edge Computing)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524 Raspberry Pi Software Configuration Tool (raspi-config) \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502                                                                                                  \u2502\n\u2502        1 Change User Password Change password for the current user                               \u2502\n\u2502        2 Network Options      Configure network settings                                         \u2502\n\u2502        3 Boot Options         Configure options for start-up                                     \u2502\n\u2502        4 Localisation Options Set up language and regional settings to match your location       \u2502\n\u2502        5 Interfacing Options  Configure connections to peripherals                               \u2502\n\u2502        6 Overclock            Configure overclocking for your Pi                                 \u2502\n\u2502        7 Advanced Options     Configure advanced settings                                        \u2502\n\u2502        8 Update               Update this tool to the latest version                             \u2502\n\u2502        9 About raspi-config   Information about this configuration tool                          \u2502\n\u2502                                                                                                  \u2502\n\u2502                                                                                                  \u2502\n\u2502                                                                                                  \u2502\n\u2502                           <Select>                           <Finish>                            \u2502\n\u2502                                                                                                  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1 Change User Password"),(0,o.kt)("li",{parentName:"ul"},"2 Network Options - hostname",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"k3s-master, k3s-slave-01, k3s-slave-02, k3s-slave-03"))),(0,o.kt)("li",{parentName:"ul"},"4 Localisation Options - TimeZone",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Asia, Seoul"))),(0,o.kt)("li",{parentName:"ul"},"7 Advanced Options - GPU Memory split ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"16mb")))),(0,o.kt)("p",null,"\ubaa8\ub450 \uc644\ub8cc\uac00 \ub418\uc5c8\uc73c\uba74 pi\ub4e4\uc744 \uc7ac\uae30\ub3d9\ud558\uc790."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo reboot\n")),(0,o.kt)("h2",{id:"k3s-\ud074\ub7ec\uc2a4\ud130-\uc0dd\uc131"},"k3s \ud074\ub7ec\uc2a4\ud130 \uc0dd\uc131"),(0,o.kt)("h3",{id:"server-\uae30\ub3d9"},"Server \uae30\ub3d9"),(0,o.kt)("p",null,"armhf(arm hard float) \uc9c0\uc6d0\uc774 \ub418\ub294 \ucd5c\uc2e0 \ub9b4\ub9ac\uc988 v0.2.0\ub97c \ub2e4\uc6b4\ubc1b\ub294\ub2e4.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ wget -O k3s https://github.com/rancher/k3s/releases/download/v0.2.0/k3s-armhf && \\\n  chmod +x k3s && \\\n  sudo mv k3s /usr/local/bin/k3s\n")),(0,o.kt)("p",null,"Master node \uae30\ub3d9 (\ubc31\uadf8\ub77c\uc6b4\ub4dc)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo k3s server &\n")),(0,o.kt)("p",null,"\ud574\ub2f9 node\ub97c Control plane \ud615\ud0dc\ub85c \ubd84\ub9ac\uc2dc\ucf1c workload\uc5d0\uc11c \uc81c\uc678\ud558\ub824\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"--disable-agent")," \uc635\uc158\uc744 \uc0ac\uc6a9\ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"& k3s server --disable-agent\n")),(0,o.kt)("p",null,"\uc815\uc0c1\uc801\uc73c\ub85c k3s \uae30\ub3d9\uc774 \uc644\ub8cc\ub418\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/k3s.yaml"),"\uc5d0\uc11c Kubeconfig\ub97c \ud655\uc778\ud560\uc218 \uc788\ub2e4. \uadf8\ub9ac\uace0 node \uc0c1\ud0dc\ub3c4 \ud655\uc778\uc774 \uac00\ub2a5\ud558\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo k3s kubectl get nodes\nNAME          STATUS   ROLES    AGE   VERSION\nk3s-master    Ready    <none>   21h   v1.13.4-k3s.1\n")),(0,o.kt)("h3",{id:"node-\ucd94\uac00"},"node \ucd94\uac00"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests")," \uc5d0\uc11c TOKEN\uc744 \ud655\uc778\ud55c\ub2e4. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo cat /var/lib/rancher/k3s/server/node-token\nK100fa5235031f2b8e92e01b8bd3255142422a7aeaa47657ad4c68969d35cddbf3a::node:431342ac6204466e8f81445edb8c2e3a\n")),(0,o.kt)("p",null,"worker node\uc5d0 \uc811\uc18d\ud55c\ub2e4\uc74c \ub3d9\uc77c\ud558\uac8c \ucd5c\uc2e0 \ub9b4\ub9ac\uc988 v0.2.0\ub97c \ub2e4\uc6b4\ubc1b\ub294\ub2e4.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ wget -O k3s https://github.com/rancher/k3s/releases/download/v0.2.0/k3s-armhf && \\\n  chmod +x k3s && \\\n  sudo mv k3s /usr/local/bin/k3s\n")),(0,o.kt)("p",null,"\uc704\uc5d0\uc11c \ub098\uc628 TOKEN\uac12\uacfc Kube API Endpoint\uc815\ubcf4\ub85c node\ub4e4\uc744 \ucc28\ub840\ub85c \ucd94\uac00 \uc2dc\ud0a4\uba74 \ubaa8\ub4e0 \uc791\uc5c5\uc774 \uc644\ub8cc\ub41c\ub2e4. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ export NODE_TOKEN="K100fa5235031f2b8e92e01b8bd3255142422a7aeaa47657ad4c68969d35cddbf3a::node:431342ac6204466e8f81445edb8c2e3a"\n$ export MASTER_IP="https://192.168.0.14:6443"\n$ sudo k3s agent --server https://${MASTER_IP}:6443 --token ${NODE_TOKEN} &\n')),(0,o.kt)("p",null,"\uc644\uc131\ub41c \ud074\ub7ec\uc2a4\ud130\ub97c \ud655\uc778\ud55c\ub2e4. \uc678\ubd80 \ub85c\uceec\uc5d0\uc11c \ud655\uc778\ud558\ub824\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/k3s.yaml")," \ud30c\uc77c\uc744 ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),"\uc5d0 \ucd94\uac00\ud558\uba74 \ub41c\ub2e4. \ud074\ub7ec\uc2a4\ud130 \ub0b4\ubd80\uc5d0\uc11c kubectl \uba85\ub839\uc740 k3s \ubc14\uc774\ub108\ub9ac \ub0b4\ubd80\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\uc73c\ubbc0\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo k3s kubectl")," \uba85\ub839\uc744 \uc0ac\uc6a9\ud558\uc600\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo k3s kubectl get node -o wide\nNAME          STATUS   ROLES    AGE   VERSION         INTERNAL-IP    EXTERNAL-IP   OS-IMAGE                         KERNEL-VERSION   CONTAINER-RUNTIME\nk3s-master    Ready    <none>   22h   v1.13.4-k3s.1   192.168.1.14   <none>        Raspbian GNU/Linux 9 (stretch)   4.14.79-v7+      containerd://1.2.4+unknown\nk3s-slave01   Ready    <none>   21h   v1.13.4-k3s.1   192.168.1.15   <none>        Raspbian GNU/Linux 9 (stretch)   4.14.79-v7+      containerd://1.2.4+unknown\nk3s-slave02   Ready    <none>   10h   v1.13.4-k3s.1   192.168.1.16   <none>        Raspbian GNU/Linux 9 (stretch)   4.14.79-v7+      containerd://1.2.4+unknown\nk3s-slave03   Ready    <none>   10h   v1.13.4-k3s.1   192.168.1.17   <none>        Raspbian GNU/Linux 9 (stretch)   4.14.79-v7+      containerd://1.2.4+unknown\n")),(0,o.kt)("p",null,"node \uc0c1\uc138\uc815\ubcf4\ub97c \ubcf4\uba74 \uae30\ubcf8\uc801\uc73c\ub85c K8s ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.13.4"),", runtime\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"containerd"),"\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc74c\uc744 \uc54c \uc218 \uc788\ub2e4.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo k3s kubectl get svc --all-namespaces\nNAMESPACE     NAME         TYPE           CLUSTER-IP     EXTERNAL-IP                 PORT(S)                      AGE\ndefault       kubernetes   ClusterIP      10.43.0.1      <none>                      443/TCP                      21h\nkube-system   kube-dns     ClusterIP      10.43.0.10     <none>                      53/UDP,53/TCP,9153/TCP       21h\nkube-system   traefik      LoadBalancer   10.43.19.160   192.168.1.14,192.168.1.15   80:32304/TCP,443:31690/TCP   21h\n")),(0,o.kt)("p",null,"Rancher\ucabd\uc5d0\uc11c\ub3c4 \uc624\ub298\ub0a0\uc9dc(3/12)\ub85c F5\uac00 Nginx\ub97c \uc778\uc218\ud558\ub294\uac83\uc744 \uc608\uacac\ud588\ub358 \uac83\uc77c\uae4c?",(0,o.kt)("br",{parentName:"p"}),"\n","Service\ub97c \ud655\uc778\ud558\uba74 traefik\uc774 \uae30\ubcf8\uc73c\ub85c \ub418\uc5b4\uc788\ub2e4. \uc544\ub798\ucc98\ub7fc \uae30\ubcf8\uc801\uc73c\ub85c loadbalancer\ub85c \ud65c\uc6a9\ub418\uace0 \uc788\ub294 traefik\uc744 Helm Chart CRD\ub97c \ud1b5\ud574 \ubc30\ud3ec\ub41c\uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4. \ub610\ud55c \uc5bc\ub9c8\uc804 \uc878\uc5c5\ud55c CoreDNS\ub3c4 \ubcf4\uc778\ub2e4.   "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo k3s kubectl get pod --all-namespaces\nNAMESPACE     NAME                             READY   STATUS      RESTARTS   AGE\nkube-system   coredns-7748f7f6df-qflx9         1/1     Running     0          21h\nkube-system   helm-install-traefik-dqqg9       0/1     Completed   0          21h\nkube-system   svclb-traefik-598fd65c97-4xtkf   2/2     Running     0          21h\nkube-system   svclb-traefik-598fd65c97-vbsqv   2/2     Running     0          19h\nkube-system   traefik-6876857645-2sqg9         1/1     Running     0          21h\n\n$ sudo k3s kubectl get crd\nNAME                            CREATED AT\naddons.k3s.cattle.io            2019-03-11T16:46:22Z\nhelmcharts.k3s.cattle.io        2019-03-11T16:46:22Z\nlistenerconfigs.k3s.cattle.io   2019-03-11T16:46:22Z\n")),(0,o.kt)("h2",{id:"\uc815\ub9ac"},"\uc815\ub9ac"),(0,o.kt)("p",null,"\uc544\uc8fc \uc801\uc740\ube44\uc6a9(?)\uc73c\ub85c \ucde8\ubbf8\uc0bc\uc544 k3s \ud074\ub7ec\uc2a4\ud130\ub97c \uad6c\uc131\ud574\ubd24\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc544\uc9c1 ARM\uacc4\uc5f4\uc5d0\uc11c kubernetes workload\ub97c \uad6c\ub3d9\ud558\ub294 \uac83\uc740 \uc2dc\uae30\uc0c1\uc870\uc774\uae34 \ud558\uc9c0\ub9cc \uae30\uc874\uc5d0 kubeadm\uc744 \uac00\uc9c0\uace0 pi\uc5d0 \ubc30\ud3ec\ud558\ub294\uac83\uc5d0 \ube44\ud558\uba74 \uc124\uce58 \ub09c\uc774\ub3c4\ub098 \uc790\uc6d0\uc0ac\uc6a9\ub7c9 \uce21\uba74\uc5d0\uc11c \uc7a5\uc810\uc774 \ub9ce\uc740 \ud504\ub85c\uc81d\ud2b8\uc774\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\ud574\uc678 \ube14\ub85c\uadf8\ub098 \ud2b8\uc704\ud130\ub97c \ubcf4\uba74 \ucd5c\uadfc ",(0,o.kt)("inlineCode",{parentName:"p"},"k3s"),"\uc5d0 \ub300\ud55c \uad00\uc2ec\ub3c4\uac00 \ub192\uc544\uc9c0\ub294\uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub294\ub370 \ub2e8\uc21c\ud788 \ucde8\ubbf8\uc0dd\ud65c\ub9cc\uc774 \uc544\ub2c8\ub77c IoT, Edge\uc5d0\uc11c\uc758 Serverless Workload \uc218\ud589\uc774\ub77c\ub358\uc9c0 ARM \uacc4\uc5f4 \ucd5c\uc801\ud654\ub41c \ubaa8\uc2b5\ub9cc\uc73c\ub85c\ub3c4 \ucda9\ubd84\ud788 \uac00\ub2a5\uc131\uc740 \ubcf4\uc5ec\uc900\uac83 \uac19\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","Rancher 2.0 \uc774\ud6c4\ub85c Kubernetes \uc5f0\uad00\ub41c \uad00\uc2ec\ub3c4\uac00 \ub5a8\uc5b4\uc84c\uc5c8\ub294\ub370 \uc5d4\uc9c0\ub2c8\uc5b4\ub4e4\uc758 \uad00\uc2ec\uc744 \ub044\ub294\ub370\ub294 \uc131\uacf5\ud55c\ub4ef \ud558\uace0 AWS\uc758 Greengrass, Firecracker\uc640 \ub3d9\uc77c\uc120\uc0c1\uc5d0\uc11c \ubd10\ub3c4 \uacac\uc904\ub9cc\ud55c \uac00\uce58\uac00 \uc788\ub2e4\uace0 \uc0dd\uac01\ub41c\ub2e4."))}m.isMDXComponent=!0},18428:function(e,t,n){t.Z=n.p+"assets/images/3stack-c5510bb36fd5f49a56c318a4a175f3fb.jpg"},57217:function(e,t,n){t.Z=n.p+"assets/images/cases-614af9823c3d08feb1cdfd6feecda887.jpg"},66042:function(e,t,n){t.Z=n.p+"assets/images/charger-fbc5086db8ea25c819ef915b0f298f5e.jpg"},10694:function(e,t,n){t.Z=n.p+"assets/images/complete-8db0eac9257463f0ad669a0bc12541ef.jpg"},23617:function(e,t,n){t.Z=n.p+"assets/images/cooler-01a1339b8c2d113ec8cdd527cd9a51f8.jpg"},66492:function(e,t,n){t.Z=n.p+"assets/images/fullstack-a0ea32c22662582ec85641753804eaf0.jpg"},78930:function(e,t,n){t.Z=n.p+"assets/images/heat-7b312fa5a5ca45bc55e98323ffdbb690.jpg"}}]);