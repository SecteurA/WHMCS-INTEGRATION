"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[805],{5531:function(e,r,o){o.d(r,{Z:function(){return a}});var t=o(2265);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=(...e)=>e.filter((e,r,o)=>!!e&&o.indexOf(e)===r).join(" ");/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,t.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:n,className:i="",children:a,iconNode:d,...c},u)=>(0,t.createElement)("svg",{ref:u,...s,width:r,height:r,stroke:e,strokeWidth:n?24*Number(o)/Number(r):o,className:l("lucide",i),...c},[...d.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(a)?a:[a]])),a=(e,r)=>{let o=(0,t.forwardRef)(({className:o,...s},a)=>(0,t.createElement)(i,{ref:a,iconNode:r,className:l(`lucide-${n(e)}`,o),...s}));return o.displayName=`${e}`,o}},622:function(e,r,o){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=o(2265),n=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,o){var t,l={},d=null,c=null;for(t in void 0!==o&&(d=""+o),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(c=r.ref),r)s.call(r,t)&&!a.hasOwnProperty(t)&&(l[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===l[t]&&(l[t]=r[t]);return{$$typeof:n,type:e,key:d,ref:c,props:l,_owner:i.current}}r.Fragment=l,r.jsx=d,r.jsxs=d},7437:function(e,r,o){e.exports=o(622)},4949:function(e,r,o){o.d(r,{g7:function(){return l}});var t=o(2265),n=o(7437),l=t.forwardRef((e,r)=>{let{children:o,...l}=e,i=t.Children.toArray(o),d=i.find(a);if(d){let e=d.props.children,o=i.map(r=>r!==d?r:t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null);return(0,n.jsx)(s,{...l,ref:r,children:t.isValidElement(e)?t.cloneElement(e,void 0,o):null})}return(0,n.jsx)(s,{...l,ref:r,children:o})});l.displayName="Slot";var s=t.forwardRef((e,r)=>{let{children:o,...n}=e;if(t.isValidElement(o)){let e,l;let s=(e=Object.getOwnPropertyDescriptor(o.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?o.ref:(e=Object.getOwnPropertyDescriptor(o,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?o.props.ref:o.props.ref||o.ref;return t.cloneElement(o,{...function(e,r){let o={...r};for(let t in r){let n=e[t],l=r[t],s=/^on[A-Z]/.test(t);s?n&&l?o[t]=(...e)=>{l(...e),n(...e)}:n&&(o[t]=n):"style"===t?o[t]={...n,...l}:"className"===t&&(o[t]=[n,l].filter(Boolean).join(" "))}return{...e,...o}}(n,o.props),ref:r?function(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}(r,s):s})}return t.Children.count(o)>1?t.Children.only(null):null});s.displayName="SlotClone";var i=({children:e})=>(0,n.jsx)(n.Fragment,{children:e});function a(e){return t.isValidElement(e)&&e.type===i}},9213:function(e,r,o){o.d(r,{j:function(){return l}});let t=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,n=function(){for(var e,r,o=0,t="";o<arguments.length;)(e=arguments[o++])&&(r=function e(r){var o,t,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r))for(o=0;o<r.length;o++)r[o]&&(t=e(r[o]))&&(n&&(n+=" "),n+=t);else for(o in r)r[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(t&&(t+=" "),t+=r);return t},l=(e,r)=>o=>{var l;if((null==r?void 0:r.variants)==null)return n(e,null==o?void 0:o.class,null==o?void 0:o.className);let{variants:s,defaultVariants:i}=r,a=Object.keys(s).map(e=>{let r=null==o?void 0:o[e],n=null==i?void 0:i[e];if(null===r)return null;let l=t(r)||t(n);return s[e][l]}),d=o&&Object.entries(o).reduce((e,r)=>{let[o,t]=r;return void 0===t||(e[o]=t),e},{}),c=null==r?void 0:null===(l=r.compoundVariants)||void 0===l?void 0:l.reduce((e,r)=>{let{class:o,className:t,...n}=r;return Object.entries(n).every(e=>{let[r,o]=e;return Array.isArray(o)?o.includes({...i,...d}[r]):({...i,...d})[r]===o})?[...e,o,t]:e},[]);return n(e,a,c,null==o?void 0:o.class,null==o?void 0:o.className)}},7042:function(e,r,o){o.d(r,{W:function(){return t}});function t(){for(var e,r,o=0,t="",n=arguments.length;o<n;o++)(e=arguments[o])&&(r=function e(r){var o,t,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(o=0;o<l;o++)r[o]&&(t=e(r[o]))&&(n&&(n+=" "),n+=t)}else for(t in r)r[t]&&(n&&(n+=" "),n+=t)}return n}(e))&&(t&&(t+=" "),t+=r);return t}},4769:function(e,r,o){o.d(r,{m6:function(){return H}});let t=e=>{let r=i(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:t}=e;return{getClassGroupId:e=>{let o=e.split("-");return""===o[0]&&1!==o.length&&o.shift(),n(o,r)||s(e)},getConflictingClassGroupIds:(e,r)=>{let n=o[e]||[];return r&&t[e]?[...n,...t[e]]:n}}},n=(e,r)=>{if(0===e.length)return r.classGroupId;let o=e[0],t=r.nextPart.get(o),l=t?n(e.slice(1),t):void 0;if(l)return l;if(0===r.validators.length)return;let s=e.join("-");return r.validators.find(({validator:e})=>e(s))?.classGroupId},l=/^\[(.+)\]$/,s=e=>{if(l.test(e)){let r=l.exec(e)[1],o=r?.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}},i=e=>{let{theme:r,prefix:o}=e,t={nextPart:new Map,validators:[]},n=u(Object.entries(e.classGroups),o);return n.forEach(([e,o])=>{a(o,t,e,r)}),t},a=(e,r,o,t)=>{e.forEach(e=>{if("string"==typeof e){let t=""===e?r:d(r,e);t.classGroupId=o;return}if("function"==typeof e){if(c(e)){a(e(t),r,o,t);return}r.validators.push({validator:e,classGroupId:o});return}Object.entries(e).forEach(([e,n])=>{a(n,d(r,e),o,t)})})},d=(e,r)=>{let o=e;return r.split("-").forEach(e=>{o.nextPart.has(e)||o.nextPart.set(e,{nextPart:new Map,validators:[]}),o=o.nextPart.get(e)}),o},c=e=>e.isThemeGetter,u=(e,r)=>r?e.map(([e,o])=>{let t=o.map(e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,o])=>[r+e,o])):e);return[e,t]}):e,p=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,o=new Map,t=new Map,n=(n,l)=>{o.set(n,l),++r>e&&(r=0,t=o,o=new Map)};return{get(e){let r=o.get(e);return void 0!==r?r:void 0!==(r=t.get(e))?(n(e,r),r):void 0},set(e,r){o.has(e)?o.set(e,r):n(e,r)}}},b=e=>{let{separator:r,experimentalParseClassName:o}=e,t=1===r.length,n=r[0],l=r.length,s=e=>{let o;let s=[],i=0,a=0;for(let d=0;d<e.length;d++){let c=e[d];if(0===i){if(c===n&&(t||e.slice(d,d+l)===r)){s.push(e.slice(a,d)),a=d+l;continue}if("/"===c){o=d;continue}}"["===c?i++:"]"===c&&i--}let d=0===s.length?e:e.substring(a),c=d.startsWith("!"),u=c?d.substring(1):d,p=o&&o>a?o-a:void 0;return{modifiers:s,hasImportantModifier:c,baseClassName:u,maybePostfixModifierPosition:p}};return o?e=>o({className:e,parseClassName:s}):s},f=e=>{if(e.length<=1)return e;let r=[],o=[];return e.forEach(e=>{let t="["===e[0];t?(r.push(...o.sort(),e),o=[]):o.push(e)}),r.push(...o.sort()),r},m=e=>({cache:p(e.cacheSize),parseClassName:b(e),...t(e)}),g=/\s+/,h=(e,r)=>{let{parseClassName:o,getClassGroupId:t,getConflictingClassGroupIds:n}=r,l=[],s=e.trim().split(g),i="";for(let e=s.length-1;e>=0;e-=1){let r=s[e],{modifiers:a,hasImportantModifier:d,baseClassName:c,maybePostfixModifierPosition:u}=o(r),p=!!u,b=t(p?c.substring(0,u):c);if(!b){if(!p||!(b=t(c))){i=r+(i.length>0?" "+i:i);continue}p=!1}let m=f(a).join(":"),g=d?m+"!":m,h=g+b;if(l.includes(h))continue;l.push(h);let y=n(b,p);for(let e=0;e<y.length;++e){let r=y[e];l.push(g+r)}i=r+(i.length>0?" "+i:i)}return i};function y(){let e,r,o=0,t="";for(;o<arguments.length;)(e=arguments[o++])&&(r=v(e))&&(t&&(t+=" "),t+=r);return t}let v=e=>{let r;if("string"==typeof e)return e;let o="";for(let t=0;t<e.length;t++)e[t]&&(r=v(e[t]))&&(o&&(o+=" "),o+=r);return o},w=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},x=/^\[(?:([a-z-]+):)?(.+)\]$/i,k=/^\d+\/\d+$/,z=new Set(["px","full","screen"]),j=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,C=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,E=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,N=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,_=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,O=e=>R(e)||z.has(e)||k.test(e),S=e=>F(e,"length",Z),R=e=>!!e&&!Number.isNaN(Number(e)),P=e=>F(e,"number",R),$=e=>!!e&&Number.isInteger(Number(e)),A=e=>e.endsWith("%")&&R(e.slice(0,-1)),W=e=>x.test(e),G=e=>j.test(e),I=new Set(["length","size","percentage"]),L=e=>F(e,I,q),M=e=>F(e,"position",q),T=new Set(["image","url"]),V=e=>F(e,T,Y),D=e=>F(e,"",U),B=()=>!0,F=(e,r,o)=>{let t=x.exec(e);return!!t&&(t[1]?"string"==typeof r?t[1]===r:r.has(t[1]):o(t[2]))},Z=e=>C.test(e)&&!E.test(e),q=()=>!1,U=e=>N.test(e),Y=e=>_.test(e),H=function(e){let r,o,t;let n=function(s){let i=[].reduce((e,r)=>r(e),e());return o=(r=m(i)).cache.get,t=r.cache.set,n=l,l(s)};function l(e){let n=o(e);if(n)return n;let l=h(e,r);return t(e,l),l}return function(){return n(y.apply(null,arguments))}}(()=>{let e=w("colors"),r=w("spacing"),o=w("blur"),t=w("brightness"),n=w("borderColor"),l=w("borderRadius"),s=w("borderSpacing"),i=w("borderWidth"),a=w("contrast"),d=w("grayscale"),c=w("hueRotate"),u=w("invert"),p=w("gap"),b=w("gradientColorStops"),f=w("gradientColorStopPositions"),m=w("inset"),g=w("margin"),h=w("opacity"),y=w("padding"),v=w("saturate"),x=w("scale"),k=w("sepia"),z=w("skew"),j=w("space"),C=w("translate"),E=()=>["auto","contain","none"],N=()=>["auto","hidden","clip","visible","scroll"],_=()=>["auto",W,r],I=()=>[W,r],T=()=>["",O,S],F=()=>["auto",R,W],Z=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],q=()=>["solid","dashed","dotted","double","none"],U=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Y=()=>["start","end","center","between","around","evenly","stretch"],H=()=>["","0",W],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],K=()=>[R,W];return{cacheSize:500,separator:":",theme:{colors:[B],spacing:[O,S],blur:["none","",G,W],brightness:K(),borderColor:[e],borderRadius:["none","","full",G,W],borderSpacing:I(),borderWidth:T(),contrast:K(),grayscale:H(),hueRotate:K(),invert:H(),gap:I(),gradientColorStops:[e],gradientColorStopPositions:[A,S],inset:_(),margin:_(),opacity:K(),padding:I(),saturate:K(),scale:K(),sepia:H(),skew:K(),space:I(),translate:I()},classGroups:{aspect:[{aspect:["auto","square","video",W]}],container:["container"],columns:[{columns:[G]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Z(),W]}],overflow:[{overflow:N()}],"overflow-x":[{"overflow-x":N()}],"overflow-y":[{"overflow-y":N()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",$,W]}],basis:[{basis:_()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",W]}],grow:[{grow:H()}],shrink:[{shrink:H()}],order:[{order:["first","last","none",$,W]}],"grid-cols":[{"grid-cols":[B]}],"col-start-end":[{col:["auto",{span:["full",$,W]},W]}],"col-start":[{"col-start":F()}],"col-end":[{"col-end":F()}],"grid-rows":[{"grid-rows":[B]}],"row-start-end":[{row:["auto",{span:[$,W]},W]}],"row-start":[{"row-start":F()}],"row-end":[{"row-end":F()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",W]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",W]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...Y()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Y(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Y(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[j]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[j]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",W,r]}],"min-w":[{"min-w":[W,r,"min","max","fit"]}],"max-w":[{"max-w":[W,r,"none","full","min","max","fit","prose",{screen:[G]},G]}],h:[{h:[W,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[W,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[W,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[W,r,"auto","min","max","fit"]}],"font-size":[{text:["base",G,S]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",P]}],"font-family":[{font:[B]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",W]}],"line-clamp":[{"line-clamp":["none",R,P]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",O,W]}],"list-image":[{"list-image":["none",W]}],"list-style-type":[{list:["none","disc","decimal",W]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...q(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",O,S]}],"underline-offset":[{"underline-offset":["auto",O,W]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:I()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",W]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",W]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Z(),M]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",L]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},V]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[f]}],"gradient-via-pos":[{via:[f]}],"gradient-to-pos":[{to:[f]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...q(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:q()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...q()]}],"outline-offset":[{"outline-offset":[O,W]}],"outline-w":[{outline:[O,S]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:T()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[O,S]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",G,D]}],"shadow-color":[{shadow:[B]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...U(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":U()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",G,W]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[u]}],saturate:[{saturate:[v]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",W]}],duration:[{duration:K()}],ease:[{ease:["linear","in","out","in-out",W]}],delay:[{delay:K()}],animate:[{animate:["none","spin","ping","pulse","bounce",W]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[$,W]}],"translate-x":[{"translate-x":[C]}],"translate-y":[{"translate-y":[C]}],"skew-x":[{"skew-x":[z]}],"skew-y":[{"skew-y":[z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",W]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",W]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":I()}],"scroll-mx":[{"scroll-mx":I()}],"scroll-my":[{"scroll-my":I()}],"scroll-ms":[{"scroll-ms":I()}],"scroll-me":[{"scroll-me":I()}],"scroll-mt":[{"scroll-mt":I()}],"scroll-mr":[{"scroll-mr":I()}],"scroll-mb":[{"scroll-mb":I()}],"scroll-ml":[{"scroll-ml":I()}],"scroll-p":[{"scroll-p":I()}],"scroll-px":[{"scroll-px":I()}],"scroll-py":[{"scroll-py":I()}],"scroll-ps":[{"scroll-ps":I()}],"scroll-pe":[{"scroll-pe":I()}],"scroll-pt":[{"scroll-pt":I()}],"scroll-pr":[{"scroll-pr":I()}],"scroll-pb":[{"scroll-pb":I()}],"scroll-pl":[{"scroll-pl":I()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",W]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[O,S,P]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);