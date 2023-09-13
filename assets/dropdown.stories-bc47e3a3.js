import{j as m,a as t}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{D as e,a as r,b as l}from"./droplist-item-5fe4f77f.js";import{B as d}from"./button-group-context-2fccf722.js";import{S as c}from"./space-97cf5fad.js";import"./index-1cdf6ce0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./use-merge-value-fcf53e13.js";import"./is-47f46886.js";import"./use-previous-5c929b6e.js";import"./trigger-1f30ac55.js";import"./style-3ea54b04.js";import"./color-palette-728b424e.js";import"./index-45a08ae3.js";import"./create-icon-907f0980.js";import"./trigger-context-e9ca2c5c.js";import"./index-a01a9712.js";import"./motion-96d4cd12.js";import"./use-isomorphic-effect-9dbdc9b0.js";import"./animate-4e967d14.js";import"./index-a6d290df.js";import"./loading-be690f19.js";import"./divider-bd60f9d7.js";const N={title:"NAVIGATION/Dropdown",component:e,argTypes:{icon:{control:!1}}},n=()=>m(l,{children:[t(r,{value:"blog",title:"Blog",disabled:!0},"1"),t(r,{value:"tutorial",title:"Tutorial"},"2"),t(r,{value:"docs",title:"Docs",selected:!0},"3"),t(r,{value:"community",title:"Community"},"4"),t(r,{value:"github",title:"Github"},"5")]}),o=i=>m(c,{children:[t(e,{dropList:n(),trigger:"hover",...i,children:t(d,{children:"Hover me"})}),t(e,{dropList:n(),trigger:"contextmenu",...i,children:t("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"lightgray",width:200,height:150},children:"Click me on right"})})]});var s,p,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => <Space>
    <Dropdown dropList={dropList()} trigger="hover" {...args}>
      <Button>Hover me</Button>
    </Dropdown>
    <Dropdown dropList={dropList()} trigger={"contextmenu"} {...args}>
      <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "lightgray",
      width: 200,
      height: 150
    }}>
        Click me on right
      </div>
    </Dropdown>
  </Space>`,...(a=(p=o.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const O=["Basic"];export{o as Basic,O as __namedExportsOrder,N as default};
//# sourceMappingURL=dropdown.stories-bc47e3a3.js.map
