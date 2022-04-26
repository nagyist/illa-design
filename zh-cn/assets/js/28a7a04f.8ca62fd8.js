"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9563],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(n),g=r,s=m["".concat(p,".").concat(g)]||m[g]||c[g]||l;return n?a.createElement(s,o(o({ref:t},d),{},{components:n})):a.createElement(s,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5077:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=n(3117),r=n(102),l=(n(7378),n(3905)),o=["components"],i={},p=void 0,u={unversionedId:"Components/NAVIGATION/page-header",id:"Components/NAVIGATION/page-header",title:"page-header",description:"\u9875\u5934\u4f4d\u4e8e\u9875\u9762\u7684\u9876\u90e8\uff0c\u7528\u4e8e\u5c55\u793a\u9875\u9762\u57fa\u672c\u4fe1\u606f\u548c\u5e38\u7528\u64cd\u4f5c\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/Components/NAVIGATION/page-header.md",sourceDirName:"Components/NAVIGATION",slug:"/Components/NAVIGATION/page-header",permalink:"/zh-cn/docs/Components/NAVIGATION/page-header",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"menu",permalink:"/zh-cn/docs/Components/NAVIGATION/menu"},next:{title:"\u5206\u9875 Pagination",permalink:"/zh-cn/docs/Components/NAVIGATION/pagination"}},d={},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5f15\u7528\u7ec4\u4ef6",id:"\u5f15\u7528\u7ec4\u4ef6",level:2},{value:"\u7ec4\u4ef6\u63a5\u53e3(API)",id:"\u7ec4\u4ef6\u63a5\u53e3api",level:2},{value:"PageHeader \u57fa\u7840\u5c5e\u6027",id:"pageheader-\u57fa\u7840\u5c5e\u6027",level:3},{value:"PageHeader \u4e8b\u4ef6",id:"pageheader-\u4e8b\u4ef6",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:3},{value:"\u57fa\u7840\u7528\u6cd5",id:"\u57fa\u7840\u7528\u6cd5",level:3}],m={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u9875\u5934-pageheader"},"\u9875\u5934 PageHeader"),(0,l.kt)("p",null,"\u9875\u5934\u4f4d\u4e8e\u9875\u9762\u7684\u9876\u90e8\uff0c\u7528\u4e8e\u5c55\u793a\u9875\u9762\u57fa\u672c\u4fe1\u606f\u548c\u5e38\u7528\u64cd\u4f5c\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/pageheader\n")),(0,l.kt)("h2",{id:"\u5f15\u7528\u7ec4\u4ef6"},"\u5f15\u7528\u7ec4\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { PageHeader } from "@illa-dedign/pageheader"\n')),(0,l.kt)("h2",{id:"\u7ec4\u4ef6\u63a5\u53e3api"},"\u7ec4\u4ef6\u63a5\u53e3(API)"),(0,l.kt)("h3",{id:"pageheader-\u57fa\u7840\u5c5e\u6027"},"PageHeader \u57fa\u7840\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u6807\u9898"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subTitle"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b21\u7ea7\u6807\u9898"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"breadcrumb"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9762\u5305\u5c51\uff0c\u63a5\u53d7\u9762\u5305\u5c51\u7684\u6240\u6709\u5c5e\u6027, BreadcrumbProps"),(0,l.kt)("td",{parentName:"tr",align:null},"BreadcrumbProps"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"backIcon"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u56fe\u6807\uff0c\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," \u65f6\u4f1a\u9690\u85cf\u56fe\u6807"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode ","|"," boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"extra"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c55\u793a\u989d\u5916\u5185\u5bb9"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onBack"),(0,l.kt)("td",{parentName:"tr",align:null},"\u70b9\u51fb\u8fd4\u56de\u56fe\u6807\u7684\u56de\u8c03"),(0,l.kt)("td",{parentName:"tr",align:null},"(e: MouseEvent) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"pageheader-\u4e8b\u4ef6"},"PageHeader \u4e8b\u4ef6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onBack"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u70b9\u51fb\u8fd4\u56de\u56fe\u6807\u7684\u56de\u8c03"),(0,l.kt)("td",{parentName:"tr",align:null},"(e: MouseEvent) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,l.kt)("h3",{id:"\u57fa\u7840\u7528\u6cd5"},"\u57fa\u7840\u7528\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<PageHeader\n  title="ILLA-Design"\n  subTitle={\n    <>\n      This is a description\n      <Tag color="blue" size="medium" style={{ marginLeft: 10 }}>\n        Tag\n      </Tag>\n    </>\n  }\n  backIcon\n  onBack={() => Message.info("Click back button")}\n  breadcrumb={{\n    routes: [\n      {\n        path: "/",\n        breadcrumbName: "Home",\n      },\n      {\n        path: "/channel",\n        breadcrumbName: "Channel",\n      },\n      {\n        path: "/news",\n        breadcrumbName: "News",\n      },\n    ],\n  }}\n  extra={\n    <div>\n      <Button colorScheme="grey" style={{ marginRight: 10 }}>\n        Cancel\n      </Button>\n      <Button type="blue">confirm</Button>\n    </div>\n  }\n/>\n')))}g.isMDXComponent=!0}}]);