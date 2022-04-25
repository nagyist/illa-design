"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7822],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return c}});var n=a(7378);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=u(a),c=r,s=d["".concat(p,".").concat(c)]||d[c]||g[c]||l;return a?n.createElement(s,i(i({ref:e},m),{},{components:a})):n.createElement(s,i({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3391:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return g}});var n=a(3117),r=a(102),l=(a(7378),a(3905)),i=["components"],o={},p="Pagination",u={unversionedId:"COMPONENTS/NAVIGATION/pagination",id:"COMPONENTS/NAVIGATION/pagination",title:"Pagination",description:"Pagination is used to show content in pages and can control the internal capacity of each page.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/COMPONENTS/NAVIGATION/pagination.md",sourceDirName:"COMPONENTS/NAVIGATION",slug:"/COMPONENTS/NAVIGATION/pagination",permalink:"/docs/COMPONENTS/NAVIGATION/pagination",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"page-header",permalink:"/docs/COMPONENTS/NAVIGATION/page-header"},next:{title:"steps",permalink:"/docs/COMPONENTS/NAVIGATION/steps"}},m={},g=[{value:"Installation",id:"installation",level:2},{value:"Import component",id:"import-component",level:2},{value:"API",id:"api",level:2},{value:"Pagination Basic Properties",id:"pagination-basic-properties",level:3},{value:"Pagination Events",id:"pagination-events",level:3},{value:"Example",id:"example",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Set capacity of each page can be change",id:"set-capacity-of-each-page-can-be-change",level:3},{value:"Set jumper",id:"set-jumper",level:3},{value:"Set Pagination&#39;s size",id:"set-paginations-size",level:3},{value:"Show total number of content",id:"show-total-number-of-content",level:3},{value:"Show all of Configuration item",id:"show-all-of-configuration-item",level:3}],d={toc:g};function c(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"pagination"},"Pagination"),(0,l.kt)("p",null,"Pagination is used to show content in pages and can control the internal capacity of each page."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/pagination\n")),(0,l.kt)("h2",{id:"import-component"},"Import component"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Pagination } from "@illa-design/pagination"\n')),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"pagination-basic-properties"},"Pagination Basic Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"currentPage"),(0,l.kt)("td",{parentName:"tr",align:null},"Set current page"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"Set capacity of each page"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"total"),(0,l.kt)("td",{parentName:"tr",align:null},"Total number of content"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultCurrent"),(0,l.kt)("td",{parentName:"tr",align:null},"Set default current page"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultPageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"Set default capacity of each page"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to disable the component"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideOnSinglePage"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to hide when only one page"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"size"),(0,l.kt)("td",{parentName:"tr",align:null},"Set size"),(0,l.kt)("td",{parentName:"tr",align:null},'"small" ',"|",' "medium" ',"|",' "large"'),(0,l.kt)("td",{parentName:"tr",align:null},'"medium"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showTotal"),(0,l.kt)("td",{parentName:"tr",align:null},"whether to show the total number of content"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean ","|"," ((total: number, range: number[]) => ReactNode)"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sizeCanChange"),(0,l.kt)("td",{parentName:"tr",align:null},"whether to show options of change page capacity"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sizeOptions"),(0,l.kt)("td",{parentName:"tr",align:null},"Set options of change page capacity"),(0,l.kt)("td",{parentName:"tr",align:null},"number[]"),(0,l.kt)("td",{parentName:"tr",align:null},"[10,20,30,40,50]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"simple"),(0,l.kt)("td",{parentName:"tr",align:null},"whether to show simple style"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showJumper"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to show the page jumper"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prevIcon"),(0,l.kt)("td",{parentName:"tr",align:null},"Set previous page icon"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nextIcon"),(0,l.kt)("td",{parentName:"tr",align:null},"Set next page icon"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"moreIcon"),(0,l.kt)("td",{parentName:"tr",align:null},"Set more page icon"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"pagination-events"},"Pagination Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onChange"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback when the current page is changed"),(0,l.kt)("td",{parentName:"tr",align:null},"(pageNumber: number, pageSize: number) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onPageSizeChange"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback when the pageSize is changed"),(0,l.kt)("td",{parentName:"tr",align:null},"(size: number, current: number) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Pagination total={200} />\n")),(0,l.kt)("h3",{id:"set-capacity-of-each-page-can-be-change"},"Set capacity of each page can be change"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Pagination defaultCurrent={5} total={200} sizeCanChange />\n")),(0,l.kt)("h3",{id:"set-jumper"},"Set jumper"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Pagination total={200} showJumper />\n")),(0,l.kt)("h3",{id:"set-paginations-size"},"Set Pagination's size"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Pagination size="small" total={50} showTotal showJumper sizeCanChange />\n')),(0,l.kt)("h3",{id:"show-total-number-of-content"},"Show total number of content"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Pagination showTotal total={50} style={{ marginBottom: 20 }} />\n")),(0,l.kt)("h3",{id:"show-all-of-configuration-item"},"Show all of Configuration item"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Pagination showTotal total={200} showJumper sizeCanChange />\n")))}c.isMDXComponent=!0}}]);