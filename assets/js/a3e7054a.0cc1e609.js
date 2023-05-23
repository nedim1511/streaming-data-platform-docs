"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5377],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>f});var l=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=l.createContext({}),i=function(e){var a=l.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},m=function(e){var a=i(e.components);return l.createElement(c.Provider,{value:a},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},u=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),p=i(t),u=n,f=p["".concat(c,".").concat(u)]||p[u]||s[u]||o;return t?l.createElement(f,r(r({ref:a},m),{},{components:t})):l.createElement(f,r({ref:a},m))}));function f(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,r=new Array(o);r[0]=u;var d={};for(var c in a)hasOwnProperty.call(a,c)&&(d[c]=a[c]);d.originalType=e,d[p]="string"==typeof e?e:n,r[1]=d;for(var i=2;i<o;i++)r[i]=t[i];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}u.displayName="MDXCreateElement"},45670:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>s,Bullet:()=>m,Details:()=>f,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>d,default:()=>g,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var l=t(87462),n=t(67294),o=t(3905);const r={id:"evm-balance-update-fields-log",title:"EVM_BalanceUpdate_Fields_Log",hide_table_of_contents:!1},d=void 0,c={unversionedId:"graphql-reference/objects/evm-balance-update-fields-log",id:"graphql-reference/objects/evm-balance-update-fields-log",title:"EVM_BalanceUpdate_Fields_Log",description:"Log fields",source:"@site/docs/graphql-reference/objects/evm-balance-update-fields-log.mdx",sourceDirName:"graphql-reference/objects",slug:"/graphql-reference/objects/evm-balance-update-fields-log",permalink:"/docs/graphql-reference/objects/evm-balance-update-fields-log",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/graphql-reference/objects/evm-balance-update-fields-log.mdx",tags:[],version:"current",frontMatter:{id:"evm-balance-update-fields-log",title:"EVM_BalanceUpdate_Fields_Log",hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"EVM_BalanceUpdate_Fields_Currency",permalink:"/docs/graphql-reference/objects/evm-balance-update-fields-currency"},next:{title:"EVM_BalanceUpdate_Fields_Transaction",permalink:"/docs/graphql-reference/objects/evm-balance-update-fields-transaction"}},i={},m=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_BalanceUpdate_Fields_Log.<b>Index</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-evm_balanceupdate_fields_logbindexbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_BalanceUpdate_Fields_Log.Index.<b>minimum</b></code><Bullet /><code>EVM_BalanceUpdate_CompareFields</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evm_balanceupdate_fields_logindexbminimumbcodeevm_balanceupdate_comparefields-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_BalanceUpdate_Fields_Log.Index.<b>if</b></code><Bullet /><code>EVM_BalanceUpdate_Filter</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_balanceupdate_fields_logindexbifbcodeevm_balanceupdate_filter-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_BalanceUpdate_Fields_Log.<b>LogAfterCallIndex</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-evm_balanceupdate_fields_logblogaftercallindexbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_BalanceUpdate_Fields_Log.LogAfterCallIndex.<b>minimum</b></code><Bullet /><code>EVM_BalanceUpdate_CompareFields</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evm_balanceupdate_fields_loglogaftercallindexbminimumbcodeevm_balanceupdate_comparefields-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_BalanceUpdate_Fields_Log.LogAfterCallIndex.<b>if</b></code><Bullet /><code>EVM_BalanceUpdate_Filter</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_balanceupdate_fields_loglogaftercallindexbifbcodeevm_balanceupdate_filter-",level:5},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:a,dataClose:t,children:r,startOpen:d=!1}=e;const[c,i]=(0,n.useState)(d);return(0,o.kt)("details",(0,l.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},c?a:t),c&&r)},b={Bullet:m,SpecifiedBy:p,Badge:s,toc:u,Details:f},_="wrapper";function g(e){let{components:a,...t}=e;return(0,o.kt)(_,(0,l.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Log fields"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type EVM_BalanceUpdate_Fields_Log {\n  Index(\n    maximum: EVM_BalanceUpdate_CompareFields\n    minimum: EVM_BalanceUpdate_CompareFields\n    if: EVM_BalanceUpdate_Filter\n  ): Int\n  LogAfterCallIndex(\n    maximum: EVM_BalanceUpdate_CompareFields\n    minimum: EVM_BalanceUpdate_CompareFields\n    if: EVM_BalanceUpdate_Filter\n  ): Int\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-evm_balanceupdate_fields_logbindexbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Log.",(0,o.kt)("b",null,"Index"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(s,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Index value"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-evm_balanceupdate_fields_logindexbmaximumbcodeevm_balanceupdate_comparefields-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Log.Index.",(0,o.kt)("b",null,"maximum"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-balance-update-compare-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_CompareFields"))," ",(0,o.kt)(s,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("p",{parentName:"blockquote"},"Return value when the argument is maximum")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-evm_balanceupdate_fields_logindexbminimumbcodeevm_balanceupdate_comparefields-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Log.Index.",(0,o.kt)("b",null,"minimum"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-balance-update-compare-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_CompareFields"))," ",(0,o.kt)(s,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Return value when the argument is minimum")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-evm_balanceupdate_fields_logindexbifbcodeevm_balanceupdate_filter-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Log.Index.",(0,o.kt)("b",null,"if"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/inputs/evm-balance-update-filter"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_Filter"))," ",(0,o.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Apply a condition to a metric calculation")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-evm_balanceupdate_fields_logblogaftercallindexbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Log.",(0,o.kt)("b",null,"LogAfterCallIndex"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(s,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"LogAfterCallIndex value"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-evm_balanceupdate_fields_loglogaftercallindexbmaximumbcodeevm_balanceupdate_comparefields-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Log.LogAfterCallIndex.",(0,o.kt)("b",null,"maximum"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-balance-update-compare-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_CompareFields"))," ",(0,o.kt)(s,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("p",{parentName:"blockquote"},"Return value when the argument is maximum")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-evm_balanceupdate_fields_loglogaftercallindexbminimumbcodeevm_balanceupdate_comparefields-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Log.LogAfterCallIndex.",(0,o.kt)("b",null,"minimum"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-balance-update-compare-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_CompareFields"))," ",(0,o.kt)(s,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Return value when the argument is minimum")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-evm_balanceupdate_fields_loglogaftercallindexbifbcodeevm_balanceupdate_filter-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Log.LogAfterCallIndex.",(0,o.kt)("b",null,"if"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/inputs/evm-balance-update-filter"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_Filter"))," ",(0,o.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Apply a condition to a metric calculation")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/graphql-reference/objects/evm-balance-update-cube"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_Cube")),"  ",(0,o.kt)(s,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);