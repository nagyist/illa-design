import{a as e,j as r}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as h}from"./index-1cdf6ce0.js";import{c as f,g as d,i as p}from"./style-3ea54b04.js";import{I as W}from"./info-cricle-a9aef4f6.js";import{C as H,d as D}from"./config-provider-context-e3e0b003.js";import{T as A}from"./typography-1905d610.js";import{S as v}from"./space-97cf5fad.js";import{B as m}from"./button-group-context-e8e00293.js";import{T as F}from"./trigger-1f30ac55.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./create-icon-907f0980.js";import"./color-palette-728b424e.js";import"./index-45a08ae3.js";import"./divider-bd60f9d7.js";import"./loading-be690f19.js";import"./trigger-context-e9ca2c5c.js";import"./index-a01a9712.js";import"./motion-96d4cd12.js";import"./use-isomorphic-effect-9dbdc9b0.js";import"./animate-4e967d14.js";import"./index-a6d290df.js";const L=f`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  padding: 16px;
`,N=f`
  align-self: end;
`;function $(l){const t=l=="white"?d(`--${p}-grayBlue-02`):d(`--${p}-white-02`);return f`
    color: ${t};
    font-size: 16px;
    font-weight: 500;
  `}const i=l=>{var q;const{title:t,cancelText:k,okText:w,okColorScheme:P="blue",okButtonProps:B,cancelButtonProps:T,cancelColorScheme:O="gray",onOk:c,onCancel:g,defaultPopupVisible:I,icon:_=e(W,{color:d(`--${p}-blue-03`)}),colorScheme:y="white",trigger:E="click",closeOnClick:j=!1,popupVisible:a,onVisibleChange:n,...z}=l,[R,o]=h.useState(I??!1),s=h.useContext(H),V=((q=s==null?void 0:s.locale)==null?void 0:q.popConfirm)??D.popConfirm;return e(F,{onVisibleChange:b=>{n!=null&&n(b),a==null&&o(b)},colorScheme:y,popupVisible:a??R,trigger:E,closeOnClick:j,withoutPadding:!0,content:r("div",{css:L,children:[r(A,{children:[t&&r(v,{size:"8px",children:[_,e("div",{css:$(y),children:t})]}),e("div",{style:{height:"16px"}})]}),r(v,{css:N,size:"16px",direction:"horizontal",children:[e(m,{colorScheme:O,onClick:()=>{g!=null&&g(),a==null&&o(!1),n&&n(!1)},...T,children:k??V.cancel}),e(m,{colorScheme:P,onClick:()=>{c!=null&&c(),a==null&&o(!1),n&&n(!1)},...B,children:w??V.confirm})]})]}),...z,children:l.children})};i.displayName="PopConfirm";try{i.displayName="PopConfirm",i.__docgenInfo={description:"",displayName:"PopConfirm",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},cancelText:{defaultValue:null,description:"",name:"cancelText",required:!1,type:{name:"string"}},okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},okColorScheme:{defaultValue:null,description:"",name:"okColorScheme",required:!1,type:{name:"string"}},cancelColorScheme:{defaultValue:null,description:"",name:"cancelColorScheme",required:!1,type:{name:"string"}},okButtonProps:{defaultValue:null,description:"",name:"okButtonProps",required:!1,type:{name:"ButtonProps"}},cancelButtonProps:{defaultValue:null,description:"",name:"cancelButtonProps",required:!1,type:{name:"ButtonProps"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"() => void | Promise<any>"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"() => void"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(e: SyntheticEvent<Element, Event>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: SyntheticEvent<Element, Event>) => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}},inline:{defaultValue:null,description:"",name:"inline",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},renderInBody:{defaultValue:null,description:"",name:"renderInBody",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},triggerRef:{defaultValue:null,description:"",name:"triggerRef",required:!1,type:{name:"MutableRefObject<TriggerRefHandler>"}},closeWhenScroll:{defaultValue:null,description:"",name:"closeWhenScroll",required:!1,type:{name:"boolean"}},clickOutsideToClose:{defaultValue:null,description:"",name:"clickOutsideToClose",required:!1,type:{name:"boolean"}},withoutShadow:{defaultValue:null,description:"",name:"withoutShadow",required:!1,type:{name:"boolean"}},withoutOffset:{defaultValue:null,description:"",name:"withoutOffset",required:!1,type:{name:"boolean"}},trigger:{defaultValue:null,description:"",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}},closeOnInnerClick:{defaultValue:null,description:"",name:"closeOnInnerClick",required:!1,type:{name:"boolean"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right"'},{value:'"right-start"'},{value:'"right-end"'}]}},showArrow:{defaultValue:null,description:"",name:"showArrow",required:!1,type:{name:"boolean"}},closeDelay:{defaultValue:null,description:"",name:"closeDelay",required:!1,type:{name:"number"}},openDelay:{defaultValue:null,description:"",name:"openDelay",required:!1,type:{name:"number"}},autoFitPosition:{defaultValue:null,description:"",name:"autoFitPosition",required:!1,type:{name:"boolean"}},closeOnClick:{defaultValue:null,description:"",name:"closeOnClick",required:!1,type:{name:"boolean"}},defaultPopupVisible:{defaultValue:null,description:"",name:"defaultPopupVisible",required:!1,type:{name:"boolean"}},autoAlignPopupWidth:{defaultValue:null,description:"",name:"autoAlignPopupWidth",required:!1,type:{name:"boolean"}},popupVisible:{defaultValue:null,description:"",name:"popupVisible",required:!1,type:{name:"boolean"}},onVisibleChange:{defaultValue:null,description:"",name:"onVisibleChange",required:!1,type:{name:"(visible: boolean) => void"}},alignPoint:{defaultValue:null,description:"",name:"alignPoint",required:!1,type:{name:"boolean"}},popupContainer:{defaultValue:null,description:"",name:"popupContainer",required:!1,type:{name:"HTMLElement | RefObject<HTMLElement>"}}}}}catch{}const me={title:"FEEDBACK/PopConfirm",component:i,argTypes:{icon:{control:!1}}},u=l=>e("div",{style:{margin:"200px"},children:e(i,{...l,children:e(m,{children:"Click"})})});var C,x,S;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`args => <div style={{
  margin: "200px"
}}>
    <PopConfirm {...args}>
      <Button>Click</Button>
    </PopConfirm>
  </div>`,...(S=(x=u.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const fe=["Basic"];export{u as Basic,fe as __namedExportsOrder,me as default};
//# sourceMappingURL=popconfirm.stories-daf160be.js.map
