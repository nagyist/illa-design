"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3021],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return k}});var n=a(7378);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},b=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=d(t,["components","mdxType","originalType","parentName"]),b=o(a),k=r,u=b["".concat(p,".").concat(k)]||b[k]||m[k]||l;return a?n.createElement(u,i(i({ref:e},s),{},{components:a})):n.createElement(u,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=b;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},3148:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return d},metadata:function(){return o},toc:function(){return m}});var n=a(7462),r=a(3366),l=(a(7378),a(3905)),i=["components"],d={},p="Tabs",o={unversionedId:"COMPONENTS/DATA-DISPLAY/tabs",id:"COMPONENTS/DATA-DISPLAY/tabs",title:"Tabs",description:"Tabs is a component that organizing several contents in a view. It can change view by change tags",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/COMPONENTS/DATA-DISPLAY/tabs.md",sourceDirName:"COMPONENTS/DATA-DISPLAY",slug:"/COMPONENTS/DATA-DISPLAY/tabs",permalink:"/docs/COMPONENTS/DATA-DISPLAY/tabs",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/COMPONENTS/DATA-DISPLAY/tabs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"table",permalink:"/docs/COMPONENTS/DATA-DISPLAY/table"},next:{title:"TAG",permalink:"/docs/COMPONENTS/DATA-DISPLAY/tag"}},s={},m=[{value:"Installation",id:"installation",level:2},{value:"Import component",id:"import-component",level:2},{value:"API",id:"api",level:2},{value:"Tabs Basic Properties",id:"tabs-basic-properties",level:3},{value:"Tabs Events",id:"tabs-events",level:3},{value:"TabPane Basic Properties",id:"tabpane-basic-properties",level:3},{value:"Example",id:"example",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Set tabs size",id:"set-tabs-size",level:3},{value:"Set tabs position",id:"set-tabs-position",level:3},{value:"Set tabs variant",id:"set-tabs-variant",level:3},{value:"Set transition animation",id:"set-transition-animation",level:3}],b={toc:m};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},b,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tabs"},"Tabs"),(0,l.kt)("p",null,"Tabs is a component that organizing several contents in a view. It can change view by change tags"),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/tabs\n")),(0,l.kt)("h2",{id:"import-component"},"Import component"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Tabs } from "@illa-design/tabs"\n')),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"tabs-basic-properties"},"Tabs Basic Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tabPosition"),(0,l.kt)("td",{parentName:"tr",align:null},"Position of tabs"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"left" \\| "right" \\| "top" \\| "bottom"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"top"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"animated"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to turn on the transition animation"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean \\|{ tabPane?: boolean; inkBar?: boolean }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"size"),(0,l.kt)("td",{parentName:"tr",align:null},"Size of tabs"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"small" \\| "medium" \\| "large"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"medium"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variant"),(0,l.kt)("td",{parentName:"tr",align:null},"Variant of tabs"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"line" \\| "text" \\| "card" \\| "capsule"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"line"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"activeKey"),(0,l.kt)("td",{parentName:"tr",align:null},"The key of the currently selected tab"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultActiveKey"),(0,l.kt)("td",{parentName:"tr",align:null},"The key of the default selected tab"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"editable"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to allow adding or subtracting tabs. It only effect when ",(0,l.kt)("inlineCode",{parentName:"td"},"variant")," is ",(0,l.kt)("inlineCode",{parentName:"td"},"card")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"addIcon"),(0,l.kt)("td",{parentName:"tr",align:null},"Configure add tab icon"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deleteIcon"),(0,l.kt)("td",{parentName:"tr",align:null},"Configure delete tab icon"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tabBarSpacing"),(0,l.kt)("td",{parentName:"tr",align:null},"Set gap between tabbar"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))))),(0,l.kt)("h3",{id:"tabs-events"},"Tabs Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onChange"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback when ",(0,l.kt)("inlineCode",{parentName:"td"},"activeKey")," changed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(key: string) => void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onClickTab"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback when click tab"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(key: string) => void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onAddTab"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback when click add tab icon"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"() => void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDeleteTab"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback when click deletetab icon"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(key: string) => void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))))),(0,l.kt)("h3",{id:"tabpane-basic-properties"},"TabPane Basic Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"Key of  tab"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"The title of Tab"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| ReactNode ")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"destroyOnHide"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to destroy the DOM structure in the TabPane when the tab is hidden"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the TabPane is disabled"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"closable"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to allow the tab to be closed when ",(0,l.kt)("inlineCode",{parentName:"td"},'editable="true"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tabs defaultActiveTab="1" >\n  <TabPane key="1" title="Tab 1">\n    <Paragraph>This is Tab Panel 1</Paragraph>\n  </TabPane>\n  <TabPane key="2" title="Tab 2" disabled>\n    <Paragraph>This is Tab Panel 2</Paragraph>\n  </TabPane>\n  <TabPane key="3" title="Tab 3">\n    <Paragraph>This is Tab Panel 3</Paragraph>\n  </TabPane>\n</Tabs>\n')),(0,l.kt)("h3",{id:"set-tabs-size"},"Set tabs size"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tabs defaultActiveTab="1" size="large">\n  <TabPane key="1" title="Tab 1">\n    <Paragraph>This is Tab Panel 1</Paragraph>\n  </TabPane>\n  <TabPane key="2" title="Tab 2" disabled>\n    <Paragraph>This is Tab Panel 2</Paragraph>\n  </TabPane>\n  <TabPane key="3" title="Tab 3">\n    <Paragraph>This is Tab Panel 3</Paragraph>\n  </TabPane>\n</Tabs>\n')),(0,l.kt)("h3",{id:"set-tabs-position"},"Set tabs position"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tabs defaultActiveTab="1" size="large" tabPosition="left">\n  <TabPane key="1" title="Tab 1">\n    <Paragraph>This is Tab Panel 1</Paragraph>\n  </TabPane>\n  <TabPane key="2" title="Tab 2" disabled>\n    <Paragraph>This is Tab Panel 2</Paragraph>\n  </TabPane>\n  <TabPane key="3" title="Tab 3">\n    <Paragraph>This is Tab Panel 3</Paragraph>\n  </TabPane>\n</Tabs>\n')),(0,l.kt)("h3",{id:"set-tabs-variant"},"Set tabs variant"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tabs defaultActiveTab="1" size="large" variant="card">\n  <TabPane key="1" title="Tab 1">\n    <Paragraph>This is Tab Panel 1</Paragraph>\n  </TabPane>\n  <TabPane key="2" title="Tab 2" disabled>\n    <Paragraph>This is Tab Panel 2</Paragraph>\n  </TabPane>\n  <TabPane key="3" title="Tab 3">\n    <Paragraph>This is Tab Panel 3</Paragraph>\n  </TabPane>\n</Tabs>\n')),(0,l.kt)("h3",{id:"set-transition-animation"},"Set transition animation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tabs defaultActiveTab="1" size="large" variant="card" animated={false} >\n  <TabPane key="1" title="Tab 1">\n    <Paragraph>This is Tab Panel 1</Paragraph>\n  </TabPane>\n  <TabPane key="2" title="Tab 2" disabled>\n    <Paragraph>This is Tab Panel 2</Paragraph>\n  </TabPane>\n  <TabPane key="3" title="Tab 3">\n    <Paragraph>This is Tab Panel 3</Paragraph>\n  </TabPane>\n</Tabs>\n')))}k.isMDXComponent=!0}}]);