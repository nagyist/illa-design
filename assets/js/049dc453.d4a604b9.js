"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5691],{3905:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return N}});var a=n(7378);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,o=u(t,["components","mdxType","originalType","parentName"]),d=m(n),N=l,s=d["".concat(p,".").concat(N)]||d[N]||k[N]||r;return n?a.createElement(s,i(i({ref:e},o),{},{components:n})):a.createElement(s,i({ref:e},o))}));function N(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=d;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:l,i[1]=u;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7465:function(t,e,n){n.r(e),n.d(e,{assets:function(){return o},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return k}});var a=n(3117),l=n(102),r=(n(7378),n(3905)),i=["components"],u={},p=void 0,m={unversionedId:"COMPONENTS/NAVIGATION/menu",id:"COMPONENTS/NAVIGATION/menu",title:"menu",description:"A list for organizing multiple options.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/COMPONENTS/NAVIGATION/menu.md",sourceDirName:"COMPONENTS/NAVIGATION",slug:"/COMPONENTS/NAVIGATION/menu",permalink:"/docs/COMPONENTS/NAVIGATION/menu",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dropdown",permalink:"/docs/COMPONENTS/NAVIGATION/dropdown"},next:{title:"page-header",permalink:"/docs/COMPONENTS/NAVIGATION/page-header"}},o={},k=[{value:"Installation",id:"installation",level:2},{value:"Import component",id:"import-component",level:2},{value:"API",id:"api",level:2},{value:"Menu Basic Properties",id:"menu-basic-properties",level:3},{value:"Menu Events",id:"menu-events",level:3},{value:"SubMenu Basic Properties",id:"submenu-basic-properties",level:3},{value:"ItemGroup Basic Properties",id:"itemgroup-basic-properties",level:3},{value:"Item Basic Properties",id:"item-basic-properties",level:3},{value:"Example",id:"example",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Set SubMenu",id:"set-submenu",level:3}],d={toc:k};function N(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"menu"},"Menu"),(0,r.kt)("p",null,"A list for organizing multiple options."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/menu\n")),(0,r.kt)("h2",{id:"import-component"},"Import component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Menu } from "@illa-dedign/menu"\n')),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"menu-basic-properties"},"Menu Basic Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"theme"),(0,r.kt)("td",{parentName:"tr",align:null},"Theme of menu"),(0,r.kt)("td",{parentName:"tr",align:null},'"light" ',"|",' "dark"'),(0,r.kt)("td",{parentName:"tr",align:null},'"light"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Set mode of menu"),(0,r.kt)("td",{parentName:"tr",align:null},'"vertical" ',"|",' "horizontal" ',"|",' "popButton"'),(0,r.kt)("td",{parentName:"tr",align:null},'"vertical"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variant"),(0,r.kt)("td",{parentName:"tr",align:null},"Set collapse variant of submenu"),(0,r.kt)("td",{parentName:"tr",align:null},'"inline" ',"|",' "pop"'),(0,r.kt)("td",{parentName:"tr",align:null},'"inline"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accordion"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether open accordion effect"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"levelIndent"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the indent between levels"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"28")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"collapseDefaultIcon"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the collapse icon when menu is opened"),(0,r.kt)("td",{parentName:"tr",align:null},"ReacNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"collapseActiveIcon"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the collapse icon when menu is collapsed"),(0,r.kt)("td",{parentName:"tr",align:null},"ReacNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autoOpen"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether open all of submenu"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hasCollapseButton"),(0,r.kt)("td",{parentName:"tr",align:null},"whether show collapse button"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"collapse"),(0,r.kt)("td",{parentName:"tr",align:null},"whether collapse menu"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selectable"),(0,r.kt)("td",{parentName:"tr",align:null},"whether menu's item can be select"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ellipsis"),(0,r.kt)("td",{parentName:"tr",align:null},"whether menu item can ellipsis"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultSelectedKeys"),(0,r.kt)("td",{parentName:"tr",align:null},"Set default selected menu items by keys"),(0,r.kt)("td",{parentName:"tr",align:null},"string[]"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultOpenKeys"),(0,r.kt)("td",{parentName:"tr",align:null},"Set opened submenu by keys"),(0,r.kt)("td",{parentName:"tr",align:null},"string[]"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selectedKeys"),(0,r.kt)("td",{parentName:"tr",align:null},"Set selected menu items by keys"),(0,r.kt)("td",{parentName:"tr",align:null},"string[]"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openKeys"),(0,r.kt)("td",{parentName:"tr",align:null},"Set opened submenu by keys"),(0,r.kt)("td",{parentName:"tr",align:null},"string[]"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"triggerProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Set triggrt properties"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Partial<TriggerProps>")),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"menu-events"},"Menu Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Desc"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onClickMenuItem"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Callback when click menu item"),(0,r.kt)("td",{parentName:"tr",align:null},"(key: string, event, keyPath: string[]) => any"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onClickSubMenu"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Callback when click submenu"),(0,r.kt)("td",{parentName:"tr",align:null},"(key: string, openKeys: string[], keyPath: string[]) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"--")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onCollapseChange"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Callback when collapse status change"),(0,r.kt)("td",{parentName:"tr",align:null},"(collapse: boolean) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"submenu-basic-properties"},"SubMenu Basic Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"Title of submenu"),(0,r.kt)("td",{parentName:"tr",align:null},"string ","|"," ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"unique key of submenu"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"itemgroup-basic-properties"},"ItemGroup Basic Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"Title of itemgroup"),(0,r.kt)("td",{parentName:"tr",align:null},"string ","|"," ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"item-basic-properties"},"Item Basic Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"Title of item"),(0,r.kt)("td",{parentName:"tr",align:null},"string ","|"," ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"unique key of item"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"whether disable the item"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:""}),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Menu>\n  <Item title={"Blog"} key={"1"} disabled />\n  <Item title={"Tutorial"} key={"2"} />\n  <Item title={"Docs"} key={"3"} />\n  <Item title={"Community"} key={"4"} />\n  <Item title={"Github"} key={"5"} />\n</Menu>\n')),(0,r.kt)("h3",{id:"set-submenu"},"Set SubMenu"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Menu\n  style={{ width: 200, height: 600 }}\n  hasCollapseButton\n  defaultOpenKeys={["0"]}\n  defaultSelectedKeys={["0_1"]}\n>\n  <SubMenu\n    key="0"\n    title={\n      <>\n        <ImageDefaultIcon style={{ marginRight: 16 }} /> Navigation 1\n      </>\n    }\n  >\n    <Item key="0_0" title={"Menu 1"} />\n    <Item key="0_1" title={"Menu 2"} />\n    <Item key="0_2" title={"Menu 3"} disabled />\n  </SubMenu>\n  <SubMenu\n    key="1"\n    title={\n      <>\n        <ImageDefaultIcon style={{ marginRight: 16 }} /> Navigation 2\n      </>\n    }\n  >\n    <Item key="1_0" title={"Menu 1"} />\n    <Item key="1_1" title={"Menu 2"} />\n    <Item key="1_2" title={"Menu 3"} />\n    <SubMenu key="0_0_0_0" title={"Second Sub Menu"}>\n      <Item key="0_0_1_1" title={"Menu 2"} />\n      <Item key="0_0_1_2" title={"Menu 3"} />\n    </SubMenu>\n  </SubMenu>\n  <SubMenu\n    key="2"\n    title={\n      <>\n        <ImageDefaultIcon style={{ marginRight: 16 }} /> Navigation 3\n      </>\n    }\n  >\n    <ItemGroup key="2_0" title="Menu Group 1">\n      <Item key="2_0_0" title={"Menu 1"} />\n      <Item key="2_0_1" title={"Menu 2"} />\n    </ItemGroup>\n    <ItemGroup key="2_1" title="Menu Group 1">\n      <Item key="2_1_0" title={"Menu 3"} />\n      <Item key="2_1_1" title={"Menu 4"} />\n    </ItemGroup>\n  </SubMenu>\n  <ItemGroup key="4_0_0" title="Menu Group">\n    <Item key="4_0_0" title={"Menu 1"} />\n    <Item key="4_0_1" title={"Menu 2"} />\n  </ItemGroup>\n  <Item key="5_0_0" title={"Menu 1"} />\n  <Item key="5_0_1" title={"Menu 2"} />\n  <SubMenu\n    key="3"\n    title={\n      <>\n        <ImageDefaultIcon style={{ marginRight: 16 }} /> Navigation 4\n      </>\n    }\n  >\n    <ItemGroup key="3_0" title="Menu Group 1">\n      <Item key="3_0_0" title={"Menu 1"} />\n      <Item key="3_0_1" title={"Menu 2"} />\n    </ItemGroup>\n    <ItemGroup key="3_1" title="Menu Group 1">\n      <Item key="3_1_0" title={"Menu 3"} />\n      <Item key="3_1_1" title={"Menu 4"} />\n    </ItemGroup>\n  </SubMenu>\n</Menu>\n')))}N.isMDXComponent=!0}}]);