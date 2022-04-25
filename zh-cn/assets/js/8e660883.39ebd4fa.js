"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8093],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(7378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),m=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(i.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),N=m(n),k=r,g=N["".concat(i,".").concat(k)]||N[k]||o[k]||l;return n?a.createElement(g,u(u({ref:e},d),{},{components:n})):a.createElement(g,u({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,u=new Array(l);u[0]=N;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,u[1]=p;for(var m=2;m<l;m++)u[m]=n[m];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},8499:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return o}});var a=n(3117),r=n(102),l=(n(7378),n(3905)),u=["components"],p={},i="\u6570\u5b57\u8f93\u5165\u6846 InputNumber",m={unversionedId:"COMPONENTS/DATA-INPUT/input-number",id:"COMPONENTS/DATA-INPUT/input-number",title:"\u6570\u5b57\u8f93\u5165\u6846 InputNumber",description:"\u6570\u5b57\u8f93\u5165\u6846\u662f\u4ec5\u5141\u8bb8\u8f93\u5165\u6570\u5b57\u683c\u5f0f\u7684\u8f93\u5165\u6846\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/COMPONENTS/DATA-INPUT/input-number.md",sourceDirName:"COMPONENTS/DATA-INPUT",slug:"/COMPONENTS/DATA-INPUT/input-number",permalink:"/zh-cn/docs/COMPONENTS/DATA-INPUT/input-number",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Checkbox\u591a\u9009\u6846",permalink:"/zh-cn/docs/COMPONENTS/DATA-INPUT/checkbox"},next:{title:"\u6807\u7b7e\u8f93\u5165\u6846 InputTag",permalink:"/zh-cn/docs/COMPONENTS/DATA-INPUT/input-tag"}},d={},o=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5f15\u7528\u7ec4\u4ef6",id:"\u5f15\u7528\u7ec4\u4ef6",level:2},{value:"\u7ec4\u4ef6\u63a5\u53e3\uff08API\uff09",id:"\u7ec4\u4ef6\u63a5\u53e3api",level:2},{value:"InputNumber \u57fa\u7840\u5c5e\u6027",id:"inputnumber-\u57fa\u7840\u5c5e\u6027",level:3},{value:"InputNumber \u4e8b\u4ef6",id:"inputnumber-\u4e8b\u4ef6",level:3},{value:"InputNumber \u65b9\u6cd5",id:"inputnumber-\u65b9\u6cd5",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u57fa\u7840\u7528\u6cd5",id:"\u57fa\u7840\u7528\u6cd5",level:3},{value:"\u8bbe\u7f6e\u8f93\u5165\u6846\u7684\u503c\u548c\u8f93\u5165\u6846\u5927\u5c0f",id:"\u8bbe\u7f6e\u8f93\u5165\u6846\u7684\u503c\u548c\u8f93\u5165\u6846\u5927\u5c0f",level:3},{value:"\u8bbe\u7f6e\u7981\u7528\u72b6\u6001",id:"\u8bbe\u7f6e\u7981\u7528\u72b6\u6001",level:3},{value:"\u8bbe\u7f6e\u79fb\u9664\u548c\u83b7\u53d6\u7126\u70b9",id:"\u8bbe\u7f6e\u79fb\u9664\u548c\u83b7\u53d6\u7126\u70b9",level:3}],N={toc:o};function k(t){var e=t.components,n=(0,r.Z)(t,u);return(0,l.kt)("wrapper",(0,a.Z)({},N,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6570\u5b57\u8f93\u5165\u6846-inputnumber"},"\u6570\u5b57\u8f93\u5165\u6846 InputNumber"),(0,l.kt)("p",null,"\u6570\u5b57\u8f93\u5165\u6846\u662f\u4ec5\u5141\u8bb8\u8f93\u5165\u6570\u5b57\u683c\u5f0f\u7684\u8f93\u5165\u6846\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/input-number\n")),(0,l.kt)("h2",{id:"\u5f15\u7528\u7ec4\u4ef6"},"\u5f15\u7528\u7ec4\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { InputNumber } from "@illa-design/input-number"\n')),(0,l.kt)("h2",{id:"\u7ec4\u4ef6\u63a5\u53e3api"},"\u7ec4\u4ef6\u63a5\u53e3\uff08API\uff09"),(0,l.kt)("h3",{id:"inputnumber-\u57fa\u7840\u5c5e\u6027"},"InputNumber \u57fa\u7840\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"step"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u5b57\u53d8\u5316\u6b65\u957f"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"placeholder"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165\u6846\u63d0\u793a\u6587\u5b57"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"precision"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u5b57\u7cbe\u5ea6\u3002\u8bbe\u7f6e\u7cbe\u5ea6\u5c0f\u4e8e",(0,l.kt)("inlineCode",{parentName:"td"},"step"),"\u7684\u5c0f\u6570\u4f4d\u65f6\uff0c\u53d6",(0,l.kt)("inlineCode",{parentName:"td"},"step"),"\u7684\u5c0f\u6570\u4e2a\u6570\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165\u6846\u9ed8\u8ba4\u5185\u5bb9"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u7981\u7528"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u4e3a\u9519\u8bef\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"size"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165\u6846\u5927\u5c0f"),(0,l.kt)("td",{parentName:"tr",align:null},'"small" ',"|",' "medium" ',"|",' "large"'),(0,l.kt)("td",{parentName:"tr",align:null},'"medium"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined ","|","number ","|","string"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"min"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5c0f\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"-Infinity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Infinity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"embed")," - \u6309\u94ae\u5185\u5d4c\u6a21\u5f0f\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"button")," - \u5de6\u53f3\u6309\u94ae\u6a21\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:null},'"embed" ',"|",'"button"'),(0,l.kt)("td",{parentName:"tr",align:null},'"embed"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u524d\u7f00"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"suffix"),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u540e\u7f00"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"formatter"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u8f93\u5165\u6846\u5c55\u793a\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},"(value: number ","|"," string)=>string"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parser"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece formatter \u8f6c\u6362\u4e3a\u6570\u5b57\uff0c\u548c formatter \u642d\u914d\u4f7f\u7528\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"(value: string) =>string number ","|"," string"),(0,l.kt)("td",{parentName:"tr",align:null},"(input) => input.replace(/",(0,l.kt)("sup",{parentName:"td",id:"fnref-\\w\\.-"},(0,l.kt)("a",{parentName:"sup",href:"#fn-\\w\\.-",className:"footnote-ref"},"\\w\\.-")),"+/g, '')")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideControl"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9690\u85cf\u53f3\u4fa7\u6309\u94ae"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"icons"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u56fe\u6807"),(0,l.kt)("td",{parentName:"tr",align:null},"{up?: ReactNode;down?: ReactNode;plus?: ReactNode;minus?: ReactNode;}"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"inputnumber-\u4e8b\u4ef6"},"InputNumber \u4e8b\u4ef6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onChange"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u5bb9\u53d8\u5316\u65f6\u7684\u56de\u8c03"),(0,l.kt)("td",{parentName:"tr",align:null},"(event) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onFocus"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165\u6846\u83b7\u53d6\u7126\u70b9\u65f6\u7684\u56de\u8c03"),(0,l.kt)("td",{parentName:"tr",align:null},"(event) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onBlur"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165\u6846\u5931\u53bb\u7126\u70b9\u65f6\u7684\u56de\u8c03"),(0,l.kt)("td",{parentName:"tr",align:null},"(event) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onKeyDown"),(0,l.kt)("td",{parentName:"tr",align:null},"\u952e\u76d8\u4e8b\u4ef6\u56de\u8c03"),(0,l.kt)("td",{parentName:"tr",align:null},"(event) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"inputnumber-\u65b9\u6cd5"},"InputNumber \u65b9\u6cd5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blur()"),(0,l.kt)("td",{parentName:"tr",align:null},"\u79fb\u9664\u7126\u70b9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"focus()"),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u7126\u70b9")))),(0,l.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,l.kt)("h3",{id:"\u57fa\u7840\u7528\u6cd5"},"\u57fa\u7840\u7528\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<InputNumber placeholder={"input-tag"} />\n')),(0,l.kt)("h3",{id:"\u8bbe\u7f6e\u8f93\u5165\u6846\u7684\u503c\u548c\u8f93\u5165\u6846\u5927\u5c0f"},"\u8bbe\u7f6e\u8f93\u5165\u6846\u7684\u503c\u548c\u8f93\u5165\u6846\u5927\u5c0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<InputNumber placeholder="value" size="large" value={5} />\n')),(0,l.kt)("h3",{id:"\u8bbe\u7f6e\u7981\u7528\u72b6\u6001"},"\u8bbe\u7f6e\u7981\u7528\u72b6\u6001"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<InputNumber placeholder="disabled" disabled />\n')),(0,l.kt)("h3",{id:"\u8bbe\u7f6e\u79fb\u9664\u548c\u83b7\u53d6\u7126\u70b9"},"\u8bbe\u7f6e\u79fb\u9664\u548c\u83b7\u53d6\u7126\u70b9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<InputNumber size="small" onFocus={focusEvent} onBlur={blurEvent} />\n')))}k.isMDXComponent=!0}}]);