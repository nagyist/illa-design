"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9398],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},341:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c}});var n=r(3117),a=r(102),l=(r(7378),r(3905)),o=["components"],s={},p=void 0,i={unversionedId:"Components/FEEDBACK/progress",id:"Components/FEEDBACK/progress",title:"progress",description:"The progress component provides feedback on the running status of tasks in the progress.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Components/FEEDBACK/progress.md",sourceDirName:"Components/FEEDBACK",slug:"/Components/FEEDBACK/progress",permalink:"/docs/Components/FEEDBACK/progress",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Popconfirm",permalink:"/docs/Components/FEEDBACK/popconfirm"},next:{title:"result",permalink:"/docs/Components/FEEDBACK/result"}},u={},c=[{value:"Installation",id:"installation",level:2},{value:"Import component",id:"import-component",level:2},{value:"API",id:"api",level:2},{value:"Progress Basic Properties",id:"progress-basic-properties",level:3},{value:"Example",id:"example",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Set the color as red",id:"set-the-color-as-red",level:3},{value:"Set the success status",id:"set-the-success-status",level:3},{value:"Set the width of the progress",id:"set-the-width-of-the-progress",level:3},{value:"Set the steps of the progress",id:"set-the-steps-of-the-progress",level:3}],m={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"progress"},"Progress"),(0,l.kt)("p",null,"The progress component provides feedback on the running status of tasks in the progress."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/progress\n")),(0,l.kt)("h2",{id:"import-component"},"Import component"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Progress } from "@illa-design/progress"\n')),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"progress-basic-properties"},"Progress Basic Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Type of the progress"),(0,l.kt)("td",{parentName:"tr",align:null},'"line" ',"|",' "circle" ',"|",' "miniCircle" ',"|",' "miniRing"'),(0,l.kt)("td",{parentName:"tr",align:null},'"line"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"steps"),(0,l.kt)("td",{parentName:"tr",align:null},"The step count of the progress"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"animation"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, when type= line show animation"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"The status of the progress"),(0,l.kt)("td",{parentName:"tr",align:null},'"normal" ',"|",' "success" ',"|",' "error"'),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"colorScheme"),(0,l.kt)("td",{parentName:"tr",align:null},"The main color of the progress"),(0,l.kt)("td",{parentName:"tr",align:null},'"white" ',"|",' "blackAlpha" ',"|",' "gray" ',"|",' "grayBlue" ',"|",' "red" ',"|",' "orange" ',"|",' "yellow" ',"|",' "green" ',"|",' "blue" ',"|",' "cyan" ',"|",' "purple"'),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"trailColor"),(0,l.kt)("td",{parentName:"tr",align:null},"The trail color"),(0,l.kt)("td",{parentName:"tr",align:null},'"white" ',"|",' "blackAlpha" ',"|",' "gray" ',"|",' "grayBlue" ',"|",' "red" ',"|",' "orange" ',"|",' "yellow" ',"|",' "green" ',"|",' "blue" ',"|",' "cyan" ',"|",' "purple"'),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showText"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, show the percentage text"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"formatText"),(0,l.kt)("td",{parentName:"tr",align:null},"The format of the text"),(0,l.kt)("td",{parentName:"tr",align:null},"(percent: number) => ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"percent"),(0,l.kt)("td",{parentName:"tr",align:null},"The percentage of the progress"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"strokeWidth"),(0,l.kt)("td",{parentName:"tr",align:null},"The width of the stroke"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},"The width of the progress"),(0,l.kt)("td",{parentName:"tr",align:null},"string","|"," number"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"buffer"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, when type=line, show the buffer part of the progress"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bufferColor"),(0,l.kt)("td",{parentName:"tr",align:null},"The color of the buffer part"),(0,l.kt)("td",{parentName:"tr",align:null},'"white" ',"|",' "blackAlpha" ',"|",' "gray" ',"|",' "grayBlue" ',"|",' "red" ',"|",' "orange" ',"|",' "yellow" ',"|",' "green" ',"|",' "blue" ',"|",' "cyan" ',"|",' "purple"'),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Progress percent={50} />\n")),(0,l.kt)("h3",{id:"set-the-color-as-red"},"Set the color as red"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Progress type="circle" color="red" trailColor="red" />\n')),(0,l.kt)("h3",{id:"set-the-success-status"},"Set the success status"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Progress status="success" type="circle" />\n')),(0,l.kt)("h3",{id:"set-the-width-of-the-progress"},"Set the width of the progress"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Progress percent={50} width="100px" type="circle" strokeWidth="10px" />\n')),(0,l.kt)("h3",{id:"set-the-steps-of-the-progress"},"Set the steps of the progress"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Progress steps={3} type="circle" />\n')))}d.isMDXComponent=!0}}]);