"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1602],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var a=n(7378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),g=u(n),k=r,N=g["".concat(o,".").concat(k)]||g[k]||d[k]||l;return n?a.createElement(N,i(i({ref:e},m),{},{components:n})):a.createElement(N,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3640:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var a=n(3117),r=n(102),l=(n(7378),n(3905)),i=["components"],p={},o="\u5206\u9875 Pagination",u={unversionedId:"Components/NAVIGATION/pagination",id:"Components/NAVIGATION/pagination",title:"\u5206\u9875 Pagination",description:"\u5c06\u5927\u91cf\u5185\u5bb9\u5206\u9875\u5c55\u793a\uff0c\u5e76\u63a7\u5236\u6bcf\u9875\u7684\u5185\u5bb9\u91cf\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/Components/NAVIGATION/pagination.md",sourceDirName:"Components/NAVIGATION",slug:"/Components/NAVIGATION/pagination",permalink:"/zh-cn/docs/Components/NAVIGATION/pagination",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"page-header",permalink:"/zh-cn/docs/Components/NAVIGATION/page-header"},next:{title:"steps",permalink:"/zh-cn/docs/Components/NAVIGATION/steps"}},m={},d=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5f15\u7528\u7ec4\u4ef6",id:"\u5f15\u7528\u7ec4\u4ef6",level:2},{value:"\u7ec4\u4ef6\u63a5\u53e3(API)",id:"\u7ec4\u4ef6\u63a5\u53e3api",level:2},{value:"Pagination \u57fa\u7840\u5c5e\u6027",id:"pagination-\u57fa\u7840\u5c5e\u6027",level:3},{value:"Pagination \u4e8b\u4ef6",id:"pagination-\u4e8b\u4ef6",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u57fa\u7840\u7528\u6cd5",id:"\u57fa\u7840\u7528\u6cd5",level:3},{value:"\u8bbe\u7f6e\u6bcf\u9875\u5185\u5bb9\u6570\u91cf",id:"\u8bbe\u7f6e\u6bcf\u9875\u5185\u5bb9\u6570\u91cf",level:3},{value:"\u8bbe\u7f6e\u53ef\u8df3\u8f6c",id:"\u8bbe\u7f6e\u53ef\u8df3\u8f6c",level:3},{value:"\u8bbe\u7f6e\u5206\u9875\u5c3a\u5bf8",id:"\u8bbe\u7f6e\u5206\u9875\u5c3a\u5bf8",level:3},{value:"\u5c55\u793a\u603b\u6570",id:"\u5c55\u793a\u603b\u6570",level:3},{value:"\u5c55\u793a\u5168\u90e8\u914d\u7f6e\u9879",id:"\u5c55\u793a\u5168\u90e8\u914d\u7f6e\u9879",level:3}],g={toc:d};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5206\u9875-pagination"},"\u5206\u9875 Pagination"),(0,l.kt)("p",null,"\u5c06\u5927\u91cf\u5185\u5bb9\u5206\u9875\u5c55\u793a\uff0c\u5e76\u63a7\u5236\u6bcf\u9875\u7684\u5185\u5bb9\u91cf\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/pagination\n")),(0,l.kt)("h2",{id:"\u5f15\u7528\u7ec4\u4ef6"},"\u5f15\u7528\u7ec4\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Pagination } from "@illa-design/pagination"\n')),(0,l.kt)("h2",{id:"\u7ec4\u4ef6\u63a5\u53e3api"},"\u7ec4\u4ef6\u63a5\u53e3(API)"),(0,l.kt)("h3",{id:"pagination-\u57fa\u7840\u5c5e\u6027"},"Pagination \u57fa\u7840\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"currentPage"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u9875"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9875\u6570\u636e\u6761\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"total"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u603b\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultCurrent"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u9875\u9ed8\u8ba4\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultPageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u6bcf\u9875\u6570\u636e\u6761\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u7981\u7528"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideOnSinglePage"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5728\u53ea\u6709\u4e00\u9875\u7684\u60c5\u51b5\u4e0b\u9690\u85cf"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"size"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u9875\u5668\u5c3a\u5bf8\uff0c3 \u79cd\u89c4\u683c"),(0,l.kt)("td",{parentName:"tr",align:null},'"small" ',"|",' "medium" ',"|",' "large"'),(0,l.kt)("td",{parentName:"tr",align:null},'"medium"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showTotal"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u663e\u793a\u6570\u636e\u603b\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean ","|"," ((total: number, range: number[]) => ReactNode)"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sizeCanChange"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u4ee5\u6539\u53d8\u6bcf\u9875\u6761\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sizeOptions"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9875\u53ef\u4ee5\u663e\u793a\u7684\u6570\u636e\u6761\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"number[]"),(0,l.kt)("td",{parentName:"tr",align:null},"[10,20,30,40,50]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"simple"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5e94\u7528\u7cbe\u7b80\u5206\u9875\u6a21\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showJumper"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u663e\u793a\u5feb\u901f\u8df3\u8f6c\u5230\u67d0\u9875"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prevIcon"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u524d\u4e00\u9875\u7684\u56fe\u6807"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nextIcon"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u4e0b\u4e00\u9875\u7684\u56fe\u6807"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"moreIcon"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u66f4\u591a\u9875\u7684\u56fe\u6807"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"pagination-\u4e8b\u4ef6"},"Pagination \u4e8b\u4ef6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onChange"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d8\u5316\u65f6\u89e6\u53d1\u7684\u56de\u8c03"),(0,l.kt)("td",{parentName:"tr",align:null},"(pageNumber: number, pageSize: number) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onPageSizeChange"),(0,l.kt)("td",{parentName:"tr",align:null},"pageSize \u53d8\u5316\u65f6\u7684\u56de\u8c03"),(0,l.kt)("td",{parentName:"tr",align:null},"(size: number, current: number) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,l.kt)("h3",{id:"\u57fa\u7840\u7528\u6cd5"},"\u57fa\u7840\u7528\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Pagination total={200} />\n")),(0,l.kt)("h3",{id:"\u8bbe\u7f6e\u6bcf\u9875\u5185\u5bb9\u6570\u91cf"},"\u8bbe\u7f6e\u6bcf\u9875\u5185\u5bb9\u6570\u91cf"),(0,l.kt)("p",null,"\u901a\u8fc7 sizeCanChange \u63a5\u53e3\u53ef\u4ee5\u8bbe\u7f6e\u9875\u7801\u5185\u5bb9\u6570\u91cf\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Pagination defaultCurrent={5} total={200} sizeCanChange />\n")),(0,l.kt)("h3",{id:"\u8bbe\u7f6e\u53ef\u8df3\u8f6c"},"\u8bbe\u7f6e\u53ef\u8df3\u8f6c"),(0,l.kt)("p",null,"\u901a\u8fc7 showJumper \u53ef\u4ee5\u901a\u8fc7\u8f93\u5165\u9875\u7801\uff0c\u5feb\u901f\u8df3\u8f6c\u5230\u6307\u5b9a\u9875\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Pagination total={200} showJumper />\n")),(0,l.kt)("h3",{id:"\u8bbe\u7f6e\u5206\u9875\u5c3a\u5bf8"},"\u8bbe\u7f6e\u5206\u9875\u5c3a\u5bf8"),(0,l.kt)("p",null,"\u901a\u8fc7 size \u63a5\u53e3\u53ef\u4ee5\u6539\u53d8\u5206\u9875\u7684\u5c3a\u5bf8\u5927\u5c0f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Pagination size="small" total={50} showTotal showJumper sizeCanChange />\n')),(0,l.kt)("h3",{id:"\u5c55\u793a\u603b\u6570"},"\u5c55\u793a\u603b\u6570"),(0,l.kt)("p",null,"\u901a\u8fc7 showTotal \u63a5\u53e3\u53ef\u4ee5\u5c55\u793a\u6570\u636e\u603b\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Pagination showTotal total={50} style={{ marginBottom: 20 }} />\n")),(0,l.kt)("h3",{id:"\u5c55\u793a\u5168\u90e8\u914d\u7f6e\u9879"},"\u5c55\u793a\u5168\u90e8\u914d\u7f6e\u9879"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Pagination showTotal total={200} showJumper sizeCanChange />\n")))}k.isMDXComponent=!0}}]);