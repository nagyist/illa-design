import{a as o}from"./index-1cdf6ce0.js";const u=o.createContext({});function a(t){return e;function e(r){const n=i(r.components);return o.createElement(t,{...r,allComponents:n})}}function i(t){const e=o.useContext(u);return o.useMemo(()=>typeof t=="function"?t(e):{...e,...t},[e,t])}const c={};function l({components:t,children:e,disableParentContext:r}){let n;return r?n=typeof t=="function"?t({}):t||c:n=i(t),o.createElement(u.Provider,{value:n},e)}export{u as MDXContext,l as MDXProvider,i as useMDXComponents,a as withMDXComponents};
//# sourceMappingURL=index-a342c6fd.js.map
