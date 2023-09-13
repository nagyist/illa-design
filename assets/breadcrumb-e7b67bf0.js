import{a as n,j as y,F as C}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r}from"./index-1cdf6ce0.js";import{c as p,a as S,d as R}from"./style-3ea54b04.js";import{g as q}from"./color-palette-728b424e.js";import{D as B}from"./down-3d8ebd18.js";import{D as _,b as I,a as j}from"./droplist-item-5fe4f77f.js";import{S as N}from"./slash-9abd3a84.js";const W=p`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`,z=p`
  margin: 0 6px;
`,v=p`
  font-size: 14px;
  color: ${q("gray","04")};
`;function D(i){const b=i?p`
        &:hover {
          background: ${q("gray","09")};
          border-radius: 4px;
          cursor: pointer;
        }
      `:p``;return p`
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    color: ${q("gray","04")};
    padding: 1px 4px;
    transition: 200ms ease-in-out;
    text-decoration: none;
    ${b};
  `}const P=p`
  font-size: 14px;
  text-decoration: none;
  color: ${q("gray","02")};
  font-weight: 500;
`,k=r.createContext({}),V=r.forwardRef((i,b)=>{const{dropList:o,dropdownProps:u,children:s,last:m,href:f,onClick:t,blockRouterChange:h,...d}=i,e=r.useContext(k),x=h??(e==null?void 0:e.blockRouterChange)??!1;return n(_,{position:"bottom-start",dropList:o,...u,children:y("a",{css:[m?P:D(f!==void 0||t!==void 0),S(i)],href:x?void 0:f,onClick:a=>{var l;t==null||t(a),(l=e==null?void 0:e.onClickPath)==null||l.call(e,f??"",m??!1)},...R(d),children:[s,o&&n(B,{ml:"2px"})]})})});V.displayName="BreadcrumbItem";try{V.displayName="BreadcrumbItem",V.__docgenInfo={description:"",displayName:"BreadcrumbItem",props:{last:{defaultValue:null,description:"",name:"last",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},blockRouterChange:{defaultValue:null,description:"",name:"blockRouterChange",required:!1,type:{name:"boolean"}},dropList:{defaultValue:null,description:"",name:"dropList",required:!1,type:{name:"ReactNode"}},dropdownProps:{defaultValue:null,description:"",name:"dropdownProps",required:!1,type:{name:"DropdownProps"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const w=r.forwardRef((i,b)=>{const{separator:o,routes:u,maxCount:s,blockRouterChange:m,children:f,onClickPath:t,...h}=i,d=r.useMemo(()=>typeof o=="string"?n("span",{css:z,children:o}):o??n(N,{ml:"12px",mr:"12px",fs:"8px",c:q("gray","06")}),[o]),e=r.useMemo(()=>u?u.map((a,l)=>{var g;return y(r.Fragment,{children:[n(V,{last:l===u.length-1,dropList:a.children?n(I,{children:(g=a.children)==null?void 0:g.map(c=>n(j,{value:c.path??"",title:c.breadcrumbName,onClick:()=>{c.path&&!m&&(window.location.href=c.path),t==null||t(c.path??"",l===u.length-1)}},c.path??""))}):void 0,children:a.breadcrumbName},a.path),l!==u.length-1&&d]},l)}):r.Children.toArray(f).filter(a=>a!=null).map((a,l,g)=>y(r.Fragment,{children:[l!==g.length-1?a:r.cloneElement(a,{last:!0}),l!==g.length-1&&d]},l)),[m,f,t,u,d]),x=r.useMemo(()=>s!=null&&e&&e.length>s?s==0?n("span",{css:v,children:"..."}):s===1?e[e.length-1]:s===2?y(C,{children:[e[0],n("span",{css:v,children:"..."}),d,e[e.length-1]]}):y(C,{children:[e[0],n("span",{css:v,children:"..."}),d,e[e.length-2],e[e.length-1]]}):e,[e,s,d]);return n("div",{css:[W,S(i)],...R(h),children:n(k.Provider,{value:{onClickPath:t,blockRouterChange:m},children:x})})});w.displayName="Breadcrumb";try{w.displayName="Breadcrumb",w.__docgenInfo={description:"",displayName:"Breadcrumb",props:{separator:{defaultValue:null,description:"",name:"separator",required:!1,type:{name:"ReactNode"}},routes:{defaultValue:null,description:"",name:"routes",required:!1,type:{name:"RouteProps[]"}},blockRouterChange:{defaultValue:null,description:"",name:"blockRouterChange",required:!1,type:{name:"boolean"}},maxCount:{defaultValue:null,description:"",name:"maxCount",required:!1,type:{name:"number"}},onClickPath:{defaultValue:null,description:"",name:"onClickPath",required:!1,type:{name:"(path: string, last: boolean) => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}export{w as B,V as a};
//# sourceMappingURL=breadcrumb-e7b67bf0.js.map
