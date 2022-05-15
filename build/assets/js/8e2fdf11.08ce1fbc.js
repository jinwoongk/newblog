"use strict";(self.webpackChunkddii=self.webpackChunkddii||[]).push([[5489],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,d=m["".concat(o,".").concat(k)]||m[k]||u[k]||i;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30678:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],c={layout:"single",title:"CircleCI - GitHub \uc5f0\ub3d9 \ubc0f EKS \uad6c\uc131\ud558\uae30",comments:!0,classes:"wide",slug:"devops/circleci/",date:new Date("2019-06-18T00:00:00.000Z"),categories:["DevOps"],tags:["DevOps","CI/CD","Pipeline","CircleCI","GitHub","GitOps","EKS"]},o=void 0,s={permalink:"/devops/circleci/",editUrl:"https://github.com/ddiiwoong/newblog/tree/main/blog/2019-06-18-circleci.md",source:"@site/blog/2019-06-18-circleci.md",title:"CircleCI - GitHub \uc5f0\ub3d9 \ubc0f EKS \uad6c\uc131\ud558\uae30",description:"CI/CD\ub294 \uac1c\ubc1c\ub2e8\uacc4\uc5d0\uc11c \uc9c0\uc18d\uc801\uc778 \ud1b5\ud569, \ubc30\ud3ec\ub97c \ud1b5\ud574 \ud6a8\uc728\uc131\uc744 \ub192\uc5ec\uc8fc\ub294 \ub3c4\uad6c\ub77c\uace0 \ub9d0\ud560\uc218 \uc788\ub2e4.  \ud2b9\ud788 GitOps\uac00 \uc911\uc694\uc2dc \ub418\ub294 \ucd5c\uadfc \ud2b8\ub80c\ub4dc\uc5d0\uc11c Public Git\uc11c\ube44\uc2a4\uc640 \ud1b5\ud569\uc740 \ud544\uc218\uc801\uc778 \uc694\uc18c\uc774\ub2e4.",date:"2019-06-18T00:00:00.000Z",formattedDate:"June 18, 2019",tags:[{label:"DevOps",permalink:"/tags/dev-ops"},{label:"CI/CD",permalink:"/tags/ci-cd"},{label:"Pipeline",permalink:"/tags/pipeline"},{label:"CircleCI",permalink:"/tags/circle-ci"},{label:"GitHub",permalink:"/tags/git-hub"},{label:"GitOps",permalink:"/tags/git-ops"},{label:"EKS",permalink:"/tags/eks"}],readingTime:10.68,truncated:!1,authors:[],frontMatter:{layout:"single",title:"CircleCI - GitHub \uc5f0\ub3d9 \ubc0f EKS \uad6c\uc131\ud558\uae30",comments:!0,classes:"wide",slug:"devops/circleci/",date:"2019-06-18T00:00:00.000Z",categories:["DevOps"],tags:["DevOps","CI/CD","Pipeline","CircleCI","GitHub","GitOps","EKS"]},prevItem:{title:"CircleCI\ub85c AWS BATCH(ECS) CI/CD Pipeline \uad6c\uc131",permalink:"/devops/circleci-ecs/"},nextItem:{title:"Yaml \uc791\uc131 \uae30\ubcf8 Tip",permalink:"/kubernetes/CKAD-1/"}},p={authorsImageUrls:[]},u=[{value:"CircleCI - GitHub Accout \uc5f0\ub3d9",id:"circleci---github-accout-\uc5f0\ub3d9",level:2},{value:"CircleCI Grossary",id:"circleci-grossary",level:2},{value:"Circle Architecture",id:"circle-architecture",level:2},{value:"CircelCI AWS EKS",id:"circelci-aws-eks",level:2},{value:"pipeline \uc218\ud589",id:"pipeline-\uc218\ud589",level:2},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",level:2}],m={toc:u};function k(e){var t=e.components,c=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"CI/CD\ub294 \uac1c\ubc1c\ub2e8\uacc4\uc5d0\uc11c \uc9c0\uc18d\uc801\uc778 \ud1b5\ud569, \ubc30\ud3ec\ub97c \ud1b5\ud574 \ud6a8\uc728\uc131\uc744 \ub192\uc5ec\uc8fc\ub294 \ub3c4\uad6c\ub77c\uace0 \ub9d0\ud560\uc218 \uc788\ub2e4.  \ud2b9\ud788 GitOps\uac00 \uc911\uc694\uc2dc \ub418\ub294 \ucd5c\uadfc \ud2b8\ub80c\ub4dc\uc5d0\uc11c Public Git\uc11c\ube44\uc2a4\uc640 \ud1b5\ud569\uc740 \ud544\uc218\uc801\uc778 \uc694\uc18c\uc774\ub2e4. "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/marketplace"},"GitHub MarketPlace"),"\uc5d0\uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},"CI")," \ub77c\uace0 \uac80\uc0c9\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \uacb0\uacfc\ub97c \uc5bb\uc744\uc218 \uc788\ub2e4.  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github-ci",src:n(95253).Z,width:"2020",height:"1370"})),(0,i.kt)("p",null,"CircleCI, Travis CI, Google Cloud Build \ub4f1 \ucd5c\uadfc \ud2b8\ub80c\ub4dc\ud55c \ub3c4\uad6c\ub4e4\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.  "),(0,i.kt)("p",null,"\uc774\ubc88 \ud3ec\uc2a4\ud305\uc5d0\uc11c\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"CircleCI"),"\ub97c ",(0,i.kt)("inlineCode",{parentName:"p"},"GitHub"),"\uacfc \uc5f0\ub3d9\ud574\uc11c AWS ECR Push \ubc0f EKS\ub85c \ubc30\ud3ec\ud558\ub294 \uac04\ub2e8\ud55c Pipeline\uc744 \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uc744 \uc801\uc5b4\ubcf4\uace0\uc790 \ud55c\ub2e4.  "),(0,i.kt)("h2",{id:"circleci---github-accout-\uc5f0\ub3d9"},"CircleCI - GitHub Accout \uc5f0\ub3d9"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://circleci.com"},"circleci.com"),"\uc5d0 \uc811\uc18d\ud558\uc5ec Sign Up\uc744 \uc9c4\ud589\ud558\uba74 GitHub\uacfc BitBucket \uacc4\uc815\uc744 \uc5f0\ub3d9\ud560 \uc218 \uc788\ub294\ub370 \uc77c\ubc18\uc801\uc778 GitHub 3rd Party OAuth\uc5f0\ub3d9 \uc9c4\ud589\uc744 \ud558\uac8c\ub41c\ub2e4.  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"init",src:n(8094).Z,width:"2482",height:"1928"})),(0,i.kt)("p",null,"\uc704 \uadf8\ub9bc\ucc98\ub7fc \ubaa8\ub4e0 Repository\uac00 \ud655\uc778\ub418\uace0 Follow\ud560 Repository\ub97c \uc120\ud0dd\ud558\uba74 \ucd08\uae30 \uad6c\uc131\uc774 \uc644\ub8cc\ub41c\ub2e4.  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"error",src:n(7500).Z,width:"2476",height:"2024"})),(0,i.kt)("p",null,"\uccab \uc5f0\ub3d9\uc774 \ub418\uba74 Build\ub97c \uc9c4\ud589\ud558\uac8c \ub418\ub294\ub370 \uc704 \uadf8\ub9bc\uacfc \uac19\uc774 error\ub97c \ubcf4\uac8c \ub418\ub294\ub370 \uc774\ub294 \uae30\ubcf8\uc801\uc73c\ub85c circleci\uac00 \ud544\uc694\ub85c \ud558\ub294 \uae30\ubcf8 \uc124\uc815\uac12(.circleci/config.yaml)\uc774 \uc5c6\uc5b4\uc11c \ubc1c\uc0dd\ud558\ub294 \uc624\ub958\uc774\ub2e4.  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"#!/bin/sh -eo pipefail\n# No configuration was found in your project. Please refer to https://circleci.com/docs/2.0/ to get started with your configuration.\n# \n# -------\n# Warning: This configuration was auto-generated to show you the message above.\n# Don't rerun this job. Rerunning will have no effect.\nfalse\n")),(0,i.kt)("p",null,"\uc704\uc5d0\uc11c \ubcf4\uc774\ub294\uac83 \ucc98\ub7fc config\ub97c \uccb4\ud06c\ud558\ub294\uac83\ub3c4 \ud558\ub098\uc758 \uac00\uc0c1\uba38\uc2e0(\ucee8\ud14c\uc774\ub108)\uc774 \uc9c4\ud589\ud558\ub294\ub370 CircleCI\ucf58\uc194\uc5d0\uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},"Spin up Environment")," \ub85c\uadf8\ub97c \ubcf4\uba74 Docker(18.09.6)\ub85c aws Linux\uae30\ubc18\uc73c\ub85c \ud658\uacbd\uad6c\uc131\uc744 \ud558\ub294 \uac83\uc744 \uc54c \uc218 \uc788\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"Build-agent version 1.0.11727-b0960fc9 (2019-05-23T02:12:54+0000)\nDocker Engine Version: 18.09.6\nKernel Version: Linux 9a20a41aeae4 4.15.0-1035-aws #37-Ubuntu SMP Mon Mar 18 16:15:14 UTC 2019 x86_64 Linux\nStarting container bash:4.4.19\n  using image bash@sha256:9f0a4aa3c9931bd5fdda51b1b2b74a0398a8eabeaf9519d807e010b9d9d41993\n...\n")),(0,i.kt)("h2",{id:"circleci-grossary"},"CircleCI Grossary"),(0,i.kt)("p",null,"\uc544\ub798 \ub9c1\ud06c\ub294 CircleCI\uc5d0\uc11c \uc790\uc8fc \uc0ac\uc6a9\ud558\ub294 \uc6a9\uc5b4\ub4e4\uc744 \ub530\ub85c \uc815\ub9ac\ud55c \ud398\uc774\uc9c0\uc774\ub2e4.  \uc8fc\ub85c \ucee8\ud14c\uc774\ub108 \uae30\ubc18\uc73c\ub85c \ub3d9\uc791\ud558\uae30 \ub54c\ubb38\uc5d0 \uc6a9\uc5b4\ub4e4\uc740 Docker\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uc6a9\uc5b4\uacfc \uacb9\uce58\ub294 \ubd80\ubd84\uc774 \ub9ce\ub2e4.   "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://circleci.com/docs/2.0/glossary/"},"https://circleci.com/docs/2.0/glossary/")),(0,i.kt)("p",null,"\uc704 \ub9c1\ud06c \ub0b4\uc6a9\uc744 \ud655\uc778\ud558\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"Orbs"),"\ub77c\ub294 \uc6a9\uc5b4\uac00 \ub098\uc624\ub294\ub370 \uc774\ub294 \uacf5\uc720\uac00\ub2a5\ud55c \ud328\ud0a4\uc9c0\ub85c Jenkins\uc758 Plugin\uacfc \uc720\uc0ac\ud55c \uac1c\ub150\uc774\ub77c\uace0 \ubcf4\uba74 \ub41c\ub2e4. CircleCI\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uc790\uccb4 \ud328\ud0a4\uc9c0 \ubfd0\ub9cc \uc544\ub2c8\ub77c 3rd Party orbs\ub97c \uc81c\uacf5\ud558\uace0 \uc788\ub2e4. "),(0,i.kt)("p",null,"MacOS\uc5d0\uc11c\ub294 brew\ub97c \ud1b5\ud574 cli\ub97c \uc124\uce58\ud558\uace0 orb \ub9ac\uc2a4\ud2b8\ub97c \ud655\uc778\ud558\uac70\ub098 ",(0,i.kt)("a",{parentName:"p",href:"https://circleci.com/orbs/registry/"},"https://circleci.com/orbs/registry/"),"\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\ub2e4.  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ brew install circleci\n$ circleci orb list\nOrbs found: 43. Showing only certified orbs.\nAdd --uncertified for a list of all orbs.\n\ncircleci/android (0.1.0)\ncircleci/artifactory (1.0.0)\ncircleci/aws-cli (0.1.13)\ncircleci/aws-code-deploy (0.0.9)\ncircleci/aws-ecr (6.1.0)\ncircleci/aws-ecs (0.0.8)\ncircleci/aws-eks (0.1.0)\ncircleci/aws-s3 (1.0.11)\n...\ncircleci/jira (1.0.5)\ncircleci/jq (1.9.0)\ncircleci/kubernetes (0.3.0)\ncircleci/lein-nvd (0.0.2)\ncircleci/maven (0.0.8)\ncircleci/node (1.0.1)\n...\ncircleci/slack (3.2.0)\ncircleci/twilio (0.0.1)\ncircleci/welcome-orb (0.3.1)\n\nIn order to see more details about each orb, type: `circleci orb info orb-namespace/orb-name`\n\nSearch, filter, and view sources for all Orbs online at https://circleci.com/orbs/registry/\n")),(0,i.kt)("h2",{id:"circle-architecture"},"Circle Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://circleci.com/docs/assets/img/docs/arch.png",alt:"circle-arch"})),(0,i.kt)("p",null,"GitHub \ub610\ub294 Bitbucket\uc5d0\uc11c \uad00\ub9ac\ud558\ub294 Repository\uac00 CircleCI \ud504\ub85c\uc81d\ud2b8\ub85c \uc2b9\uc778\ub418\uba74 \ucd5c\ucd08\uc5d0\ub294 \ucee8\ud14c\uc774\ub108\ub098 \uac00\uc0c1\uba38\uc2e0\ud658\uacbd(2core 4GB)\uc774 \ud504\ub85c\ube44\uc800\ub2dd \ub418\uace0 \uc790\ub3d9\uc73c\ub85c \ud14c\uc2a4\ud2b8\uac00 \uc9c4\ud589\ub41c\ub2e4.  "),(0,i.kt)("p",null,"\ud14c\uc2a4\ud2b8\uac00 \uc644\ub8cc\ub41c \ud6c4 \uc131\uacf5 \ub610\ub294 \uc2e4\ud328\uc5d0 \ub300\ud55c Alert\uc124\uc815(Email, Slack)\uc774 \uac00\ub2a5\ud558\uace0 \uac01 \ub2e8\uacc4(job, workflow)\uc5d0 \ub300\ud55c \uacb0\uacfc\ub294 \uac01 \ub2e8\uacc4\ubcc4 \uc138\ubd80 \uc815\ubcf4 \ud398\uc774\uc9c0\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\ub2e4.  "),(0,i.kt)("p",null,"\ub610\ud55c \ubc30\ud3ec\ub294 AWS CodeDeploy, AWS ECS, AWS S3, AWS EKS, Google Kubernetes Engine (GKE) \ubc0f Heroku \ub4f1 \ub2e4\uc591\ud55c \ud658\uacbd\uc5d0 \ucf54\ub4dc\ub97c \ubc30\ud3ec\ud558\ub3c4\ub85d \uad6c\uc131 \ud560 \uc218 \uc788\ub2e4. \uc774\uc678\uc758 \ud074\ub77c\uc6b0\ub4dc \uc11c\ube44\uc2a4 \ubc30\ud3ec\ub294 SSH\ub97c \ud1b5\ud574 \uc9c1\uc811 \uc0ac\uc6a9\ud558\uac70\ub098 terraform\uacfc \uac19\uc740 \ub3c4\uad6c\ub97c \uac00\uc9c0\uace0 \ud574\ub2f9 \ud074\ub77c\uc6b0\ub4dc \uc11c\ube44\uc2a4\uc758 API\ud1b5\ud574 \uc790\ub3d9\ud654\uac00 \uac00\ub2a5\ud55c \uad6c\uc870\ub85c \ub418\uc5b4\uc788\ub2e4.  "),(0,i.kt)("h2",{id:"circelci-aws-eks"},"CircelCI AWS EKS"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/CircleCI-Public/circleci-demo-aws-eks"},"https://github.com/CircleCI-Public/circleci-demo-aws-eks")),(0,i.kt)("p",null,"\uc704 demo\ub294 CircleCI\ub97c \uc774\uc6a9\ud558\uc5ec \ub2e4\uc74c\uacfc \uac19\uc740 workflow (\uc0c1\uc138\ub0b4\uc6a9 \uc544\ub798 config.yaml \ucc38\uace0)\ub97c \uc218\ud589\ud55c\ub2e4.  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"version: 2.1\n\norbs:\n    aws-eks: circleci/aws-eks@0.1.0\n    aws-ecr: circleci/aws-ecr@3.1.0\n    kubernetes: circleci/kubernetes@0.3.0\n")),(0,i.kt)("p",null,"\uacf5\ud1b5\uc801\uc73c\ub85c orb\ub97c 3\uac00\uc9c0\ub97c \ucd94\uac00\ud558\uc600\uae30 \ub54c\ubb38\uc5d0 \uac01\ub2e8\uacc4\ub9c8\ub2e4 \uad00\ub828 orb\ub97c \ucd94\uac00\ud558\ub294 \ub2e8\uacc4\ub97c \uac70\uce58\uac8c \ub41c\ub2e4."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\ud658\uacbd\uc124\uc815 \ubc0f Docker Build \ubc0f ECR\ub85c Push",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"workflows:\n  deployment:\n    jobs:\n      - aws-ecr/build_and_push_image:\n          name: build-and-push-image\n          account-url: AWS_ECR_URL\n          region: AWS_DEFAULT_REGION\n          repo: eks_orb_demo_app\n          dockerfile: ~/project/demo_app/Dockerfile\n          path: ~/project/demo_app\n          tag: ${CIRCLE_SHA1}\n          # repository\uac00 \uc5c6\uc744 \uacbd\uc6b0 \uc0dd\uc131\ud558\ub294 \uc635\uc158\n          # create-repo: true\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"environment variables \uc124\uc815 ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Project - BUILD SETTINGS - Environment Variables \uc5d0\uc11c Key-Value\ud615\ud0dc\ub85c \uc785\ub825  ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"AWS_DEFAULT_REGION : ",(0,i.kt)("inlineCode",{parentName:"li"},"us-west-2")),(0,i.kt)("li",{parentName:"ul"},"AWS_ECR_URL : ",(0,i.kt)("inlineCode",{parentName:"li"},"219547004475.dkr.ecr.us-west-2.amazonaws.com/eks_orb_demo_app"),"  "))))),(0,i.kt)("li",{parentName:"ul"},"github \uc5f0\ub3d9 (ssh-key \uc5f0\ub3d9 \ubc0f repo clone)"),(0,i.kt)("li",{parentName:"ul"},"aws cli \uc124\uce58 \ubc0f AWS Access, Secret Key\uc124\uc815"),(0,i.kt)("li",{parentName:"ul"},"ECR Login"),(0,i.kt)("li",{parentName:"ul"},"Image Build (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ddiiwoong/circleci-demo-aws-eks/blob/master/demo_app/Dockerfile"},"https://github.com/ddiiwoong/circleci-demo-aws-eks/blob/master/demo_app/Dockerfile"),")"),(0,i.kt)("li",{parentName:"ul"},"Push Image to ECR")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"EKS\ud074\ub7ec\uc2a4\ud130 \uc0dd\uc131 (No Scripts)",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"workflows:\n  deployment:\n    jobs:\n      - aws-eks/create-cluster:\n          cluster-name: eks-orb-demo-app-deployment\n          aws-region: $AWS_DEFAULT_REGION\n          requires:\n            - build-and-push-image\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kops, kubectl, aws iam authenticator, aws cli \uc124\uce58"),(0,i.kt)("li",{parentName:"ul"},"kubectl config \uc124\uc815 (aws iam authenticator)"),(0,i.kt)("li",{parentName:"ul"},"eksctl \uc124\uce58"),(0,i.kt)("li",{parentName:"ul"},"eksctl\ub85c \ud074\ub7ec\uc2a4\ud130 \uc0dd\uc131 \ubc0f \uac80\uc99d (Cloudformation)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"variables \uc0ac\uc804 \uc124\uc815\uac00\ub2a5 ($AWS_DEFAULT_REGION)")))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Demo Application \ubc30\ud3ec",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'jobs:\n  deploy-application:\n    executor: aws-eks/python3\n    parameters:\n    ...\n    steps:\n      - checkout\n      - run:\n          name: Create deployment manifest\n          command: |\n            BUILD_DATE=$(date \'+%Y%m%d%H%M%S\')\n            cat deployment/demo-app-deployment.yaml.template |\\\n              sed "s|DOCKER_IMAGE_NAME|<< parameters.docker-image-name >>|\\\n                g;s|BUILD_DATE_VALUE|$BUILD_DATE|g;s|VERSION_INFO_VALUE|\\\n                << parameters.version-info >>|g" > deployment/demo-app-deployment.yaml\n      - aws-eks/update-kubeconfig-with-authenticator:\n          cluster-name: << parameters.cluster-name >>\n          install-kubectl: true\n          aws-region: << parameters.aws-region >>\n      - kubernetes/create-or-update-resource:\n          resource-file-path: "deployment/demo-app-deployment.yaml"\n          get-rollout-status: true\n          resource-name: deployment/demoapp\n      - kubernetes/create-or-update-resource:\n          resource-file-path: "deployment/demo-app-service.yaml"\n...\nworkflows:\n  deployment:\n    jobs:\n      - deploy-application:\n        cluster-name: eks-orb-demo-app-deployment\n        aws-region: $AWS_DEFAULT_REGION\n        docker-image-name: "${AWS_ECR_URL}/eks_orb_demo_app:${CIRCLE_SHA1}"\n        version-info: "${CIRCLE_SHA1}"\n        requires:\n          - aws-eks/create-cluster\n...\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"deployment manifest\uc0dd\uc131 (deployment template)"),(0,i.kt)("li",{parentName:"ul"},"kops, kubectl, aws iam authenticator, aws cli \uc124\uce58 (orb\uc124\uc815: aws-eks,kubernetes)"),(0,i.kt)("li",{parentName:"ul"},"kubectl config \uc124\uc815 (aws iam authenticator)"),(0,i.kt)("li",{parentName:"ul"},"resource(deployment, service) \ubc30\ud3ec (orb\uc124\uc815: aws-eks,kubernetes)"),(0,i.kt)("li",{parentName:"ul"},"rollout \uc218\ud589 (0->3)")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"application test",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'workflows:\n  deployment:\n    jobs:\n      - test-application:\n        name: test-application\n        cluster-name: eks-orb-demo-app-deployment\n        aws-region: $AWS_DEFAULT_REGION\n        expected-version-info: "${CIRCLE_SHA1}"\n        requires:\n          - deploy-application\njobs:\n  test-application:\n    executor: aws-eks/python3\n    parameters:\n      ...\n    steps:\n      - aws-eks/update-kubeconfig-with-authenticator:\n          cluster-name: << parameters.cluster-name >>\n          install-kubectl: true\n          aws-region: << parameters.aws-region >>\n      - run:\n          name: Wait for service to be ready\n          command: |\n            kubectl get pods\n            kubectl get services\n            sleep 30\n            for attempt in {1..20}; do\n              EXTERNAL_IP=$(kubectl get service demoapp | awk \'{print $4}\' | tail -n1)\n              echo "Checking external IP: ${EXTERNAL_IP}"\n              if [ -n "${EXTERNAL_IP}" ] && [ -z $(echo "${EXTERNAL_IP}" | grep "pending") ]; then\n                break\n              fi\n              echo "Waiting for external IP to be ready: ${EXTERNAL_IP}"\n              sleep 10\n            done\n            sleep 180\n            curl -s --retry 10 "http://$EXTERNAL_IP" | grep "<< parameters.expected-version-info >>"\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kops, kubectl, aws iam authenticator, aws cli \uc124\uce58 (orb\uc124\uc815: aws-eks,kubernetes)"),(0,i.kt)("li",{parentName:"ul"},"kubectl config \uc124\uc815 (aws iam authenticator)"),(0,i.kt)("li",{parentName:"ul"},"External IP \uccb4\ud06c \ubc0f curl \ud14c\uc2a4\ud2b8")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Demo Application \uc0ad\uc81c",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'jobs:  \n  undeploy-application:\n    executor: aws-eks/python3\n    parameters:\n    ...\n    steps:\n      - aws-eks/update-kubeconfig-with-authenticator:\n          cluster-name: << parameters.cluster-name >>\n          install-kubectl: true\n          aws-region: << parameters.aws-region >>\n      - kubernetes/delete-resource:\n          resource-types: "deployment,service"\n          label-selector: "app=demo"\n          wait: true\n      - run:\n          name: Check on pod status\n          command: |\n            kubectl get pods\nworkflows:\n  deployment:\n    jobs:\n      - undeploy-application:\n        cluster-name: eks-orb-demo-app-deployment\n        aws-region: $AWS_DEFAULT_REGION\n        requires:\n          - test-application\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kops, kubectl, aws iam authenticator, aws cli \uc124\uce58 (orb\uc124\uc815: aws-eks,kubernetes)"),(0,i.kt)("li",{parentName:"ul"},"kubectl config \uc124\uc815 (aws iam authenticator)"),(0,i.kt)("li",{parentName:"ul"},"deployment \uc0ad\uc81c \ubc0f \uc0c1\ud0dc \uccb4\ud06c")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"EKS\ud074\ub7ec\uc2a4\ud130 \uc0ad\uc81c (No Scripts)",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"workflows:\n  deployment:\n    jobs:\n      - aws-eks/delete-cluster:\n        cluster-name: eks-orb-demo-app-deployment\n        aws-region: $AWS_DEFAULT_REGION\n        wait: true\n        requires:\n          - undeploy-application\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kops, kubectl, aws iam authenticator, aws cli \uc124\uce58 (orb\uc124\uc815: aws-eks,kubernetes)"),(0,i.kt)("li",{parentName:"ul"},"kubectl config \uc124\uc815 (aws iam authenticator)"),(0,i.kt)("li",{parentName:"ul"},"eksctl \uc124\uce58"),(0,i.kt)("li",{parentName:"ul"},"eksctl\ub85c \ud074\ub7ec\uc2a4\ud130 \uc0ad\uc81c \ubc0f \uac80\uc99d (Cloudformation)")),(0,i.kt)("p",null,"\uc0c1\uc138 config\ub294 \ub2e4\uc74c \ub9c1\ud06c\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ddiiwoong/circleci-demo-aws-eks/blob/master/.circleci/config.yml"},"https://github.com/ddiiwoong/circleci-demo-aws-eks/blob/master/.circleci/config.yml")),(0,i.kt)("h2",{id:"pipeline-\uc218\ud589"},"pipeline \uc218\ud589"),(0,i.kt)("p",null,"\uc704 Workflow\ub97c \uc218\ud589\ud558\uac8c \ub418\uba74 \ub9c8\uc9c0\ub9c9\uc5d0 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \ud074\ub7ec\uc2a4\ud130\ub97c \uc0ad\uc81c\ud558\uae30 \ub54c\ubb38\uc5d0 \ud574\ub2f9 workflow\ub294 \uc81c\uc678\ud558\uace0 \uc218\ud589\ud55c\ub2e4. \ud574\ub2f9 config\ub97c commit\ud558\uba74 \ubc14\ub85c \ud574\ub2f9 CI\uac00 \ud2b8\ub9ac\uac70 \ub418\uc5b4 \uc2dc\uc791\ub418\uac8c \ub41c\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"      # - undeploy-application:\n      #     cluster-name: eks-orb-demo-app-deployment\n      #     aws-region: $AWS_DEFAULT_REGION\n      #     requires:\n      #       - test-application\n      # - aws-eks/delete-cluster:\n      #     cluster-name: eks-orb-demo-app-deployment\n      #     aws-region: $AWS_DEFAULT_REGION\n      #     wait: true\n      #     requires:\n      #     - undeploy-application\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"result",src:n(92137).Z,width:"1218",height:"473"})),(0,i.kt)("p",null,"\ud074\ub7ec\uc2a4\ud130 \uad6c\uc131\ud3ec\ud568\ud574\uc11c \ucd1d 20\ubd84\uc815\ub3c4 \uc18c\uc694\ub418\uc5c8\ub2e4. \uc2e4\uc81c ",(0,i.kt)("inlineCode",{parentName:"p"},"eksctl"),"\ub85c \ud504\ub85c\ube44\uc800\ub2dd\ud558\uac8c \ub418\uba74 CloudFormation\uc73c\ub85c \uc218\ud589\ub418\uae30 \ub54c\ubb38\uc5d0 \uc57d 15-20\ubd84 \uc815\ub3c4 \uc18c\uc694\ub418\ub2c8 \uac04\ub2e8\ud55c \ube4c\ub4dc,\ubc30\ud3ec,\ud14c\uc2a4\ud2b8\ub294 5\ubd84\uc815\ub3c4 \uc18c\uc694\ub41c\uac83\uc744 \uc54c \uc218 \uc788\ub2e4.  "),(0,i.kt)("p",null,"\uc0ad\uc81c\ub294 \uc5ed\uc21c\uc73c\ub85c \uc9c4\ud589\ud558\uac70\ub098 \uc704\uc5d0 \uc8fc\uc11d \ucc98\ub9ac\ub41c \uc601\uc5ed\ub9cc \uc218\ud589\ud558\uba74 \ub41c\ub2e4."),(0,i.kt)("h2",{id:"\uc815\ub9ac"},"\uc815\ub9ac"),(0,i.kt)("p",null,"\uac04\ub2e8\ud558\uac8c CircleCI\ub97c \uac00\uc9c0\uace0 GitOps\uc640 CI/CD\ub97c \uad6c\uc131\ud558\ub294 \ub370\ubaa8\ub97c \uc9c4\ud589\ud558\uc600\ub2e4.  "),(0,i.kt)("p",null,"CircleCI\ub294 Jenkins\uc640 \uc720\uc0ac\ud558\uc9c0\ub9cc Public\uc11c\ube44\uc2a4\uc774\uace0 Slave\uad00\ub9ac\uc5d0 \ub300\ud574\uc11c \uc758\uc874\uc801\uc774\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uae30\uc874\uc5d0 Jenkins\ub97c \uc0ac\uc6a9\ud55c \uacbd\ud5d8\uc774 \uc788\ub2e4\uba74 \uc544\uc8fc \uc27d\uac8c \uad6c\uc131\ud560 \uc218 \uc788\ub2e4.  "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://circleci.com/docs/2.0/migrating-from-jenkins"},"https://circleci.com/docs/2.0/migrating-from-jenkins"),"\ub97c \ucc38\uace0\ud558\uba74 Jenkins\uc640 \ucc28\uc774\uc810\uc744 \uc54c \uc218 \uc788\ub294\ub370 \uac00\uc7a5 \ud070 \uc7a5\uc810\uc740 \ubcd1\ub82c\ub85c \ud14c\uc2a4\ud2b8\ub098 Job\uc744 \uc218\ud589\ud560\uc218 \uc788\ub2e4\ub294 \uc810\uacfc Lambda\uc640 \uac19\uc740 \uc11c\ubc84\ub9ac\uc2a4 \uc571\uc744 \ubc30\ud3ec\ud560\ub54c \uc815\ub9d0 \uc11c\ubc84\ub9ac\uc2a4 \ud658\uacbd\uc73c\ub85c \uad6c\uc131\ud560\uc218 \uc788\ub2e4\ub294 \uc810\uc774\ub2e4.  "),(0,i.kt)("p",null,"\uc774\ub294 Git Repository\ub97c \uc5f0\ub3d9\ud560\ub54c\ub3c4 Java Plugin\uc744 \uc124\uce58\ud574\uc57c\ud558\ub294 \ubc88\uac70\ub85c\uc6c0\uc744 \ub35c \uc218 \uc788\ub2e4. \uac00\uc7a5 \uc911\uc694\ud55c\uac74 SaaS\ub77c\ub294 \uc7a5\uc810\ub3c4 \ubb34\uc2dc\ud560\uc218 \uc5c6\ub2e4. Travis \ubb34\ub8cc \ud50c\ub79c\uacfc \ube44\uad50\ud574\ub3c4 \uc791\uc740 \ud504\ub85c\uc81d\ud2b8\uc758 \uacbd\uc6b0 \ubcc4\ub3c4\uc758 Docker environment(2core, 4GB)\ub97c \uc81c\uacf5\ubc1b\uae30 \ub54c\ubb38\uc5d0 \uc9c0\uc5f0\uc5c6\uc774 \ubc14\ub85c \ube4c\ub4dc\uac00 \uac00\ub2a5\ud558\ub2e4\ub294 \uc810\uc774\ub2e4.  "),(0,i.kt)("p",null,"\ub2e4\uc74c\ubc88 \ud3ec\uc2a4\ud305\uc5d0\ub294 terraform\uc744 \ud1b5\ud574 ECR\uacfc ECS\ub85c \ubc30\ud3ec\ud558\ub294 workflow\ub97c \uc0b4\ud3b4\ubcf4\ub824\uace0 \ud55c\ub2e4."))}k.isMDXComponent=!0},8094:function(e,t,n){t.Z=n.p+"assets/images/circleci-init-b44a7c81c0dbf4cf4ff0a4b775427186.png"},95253:function(e,t,n){t.Z=n.p+"assets/images/github-ci-a6a8bfaf143484e079fd19a79207b6c2.png"},7500:function(e,t,n){t.Z=n.p+"assets/images/init-error-dde1c8ca577589b364d02c1f94c47230.png"},92137:function(e,t,n){t.Z=n.p+"assets/images/workflow-result-1507577220f3902e6add662d37db5fcf.png"}}]);