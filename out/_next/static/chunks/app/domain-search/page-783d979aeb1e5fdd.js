(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[902],{3157:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var r=a(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r.Z)("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])},1827:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var r=a(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r.Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},3505:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var r=a(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r.Z)("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]])},3116:function(e,t,a){Promise.resolve().then(a.bind(a,144))},144:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var r=a(7437),s=a(2265),n=a(4033),i=a(3023),l=a(1908),o=a(3157),c=a(3505),d=a(3715),u=a(1827),m=a(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let x=(0,m.Z)("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);var h=a(3067),f=a(8513),p=a(1393),g=a(1063),y=a(4829);let v=["com","ma","net","org","info"];var b=()=>{let e=(0,n.useRouter)(),t=(0,n.useSearchParams)(),a=t.get("domain"),{addItem:m}=(0,g.j)(),[b,j]=(0,s.useState)(a||""),[w,N]=(0,s.useState)(!1),[C,k]=(0,s.useState)(null),[E,Z]=(0,s.useState)(null),[F,D]=(0,s.useState)(null),[z,S]=(0,s.useState)(!1),[T,L]=(0,s.useState)({}),P=e=>e.includes(".")?e:"".concat(e,".com"),R=e=>e.split(".")[0],A=(e,t,a)=>{m({domain:e,tld:t,price:parseFloat(a.toString()),period:1}),L({...T,[e]:!0})},I=async()=>{S(!0);let e=new URLSearchParams({action:"GetTLDPricing",username:"PLAfTuv5XfgMDdsy0a6ETC3sjs9qFwLU",password:"pw08vf3Il8lHsm2P7Hyx0kyTFdtXwo9X",accesskey:"CE39E3CFFC98BE973FDDD165C9AC9",currencyid:"1",responsetype:"json"});try{let t=await y.Z.post("https://login.wget.ma/includes/api.php",e,{headers:{"Content-Type":"application/x-www-form-urlencoded"}});"success"===t.data.result&&D(t.data)}catch(e){console.error("Error fetching TLD pricing:",e)}finally{S(!1)}},X=async e=>{if(!e)return;let t=P(e.toLowerCase().trim());Z(null),k(null),D(null),L({}),N(!0);let a=new URLSearchParams({action:"DomainWhois",username:"PLAfTuv5XfgMDdsy0a6ETC3sjs9qFwLU",password:"pw08vf3Il8lHsm2P7Hyx0kyTFdtXwo9X",accesskey:"CE39E3CFFC98BE973FDDD165C9AC9",domain:t,responsetype:"json"});try{let e=await y.Z.post("https://login.wget.ma/includes/api.php",a,{headers:{"Content-Type":"application/x-www-form-urlencoded"}});if("success"===e.data.result)k(e.data),"available"===e.data.status&&await I();else throw Error(e.data.result)}catch(t){var r,s;let e=y.Z.isAxiosError(t)?(null===(s=t.response)||void 0===s?void 0:null===(r=s.data)||void 0===r?void 0:r.error)||t.message:"Une erreur est survenue lors de la v\xe9rification du domaine";Z(e),console.error("Domain search error:",t)}finally{N(!1)}},B=async t=>{t.preventDefault(),b&&(e.push("/domain-search?domain=".concat(encodeURIComponent(b))),await X(b))};return(0,s.useEffect)(()=>{a&&X(a)},[a]),(0,r.jsx)("div",{className:"min-h-screen bg-gray-50 py-8",children:(0,r.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,r.jsx)("div",{className:"bg-white rounded-xl shadow-md p-6 mb-8",children:(0,r.jsxs)("form",{onSubmit:B,className:"flex flex-col sm:flex-row gap-4",children:[(0,r.jsx)("div",{className:"flex-1",children:(0,r.jsx)(l.I,{type:"text",placeholder:"Rechercher votre nom de domaine...",value:b,onChange:e=>j(e.target.value),className:"h-12","aria-label":"Nom de domaine"})}),(0,r.jsx)(i.z,{type:"submit",size:"lg",disabled:w,className:"bg-[#003B73] hover:bg-[#002347] text-white font-semibold h-12",children:w?(0,r.jsx)(d.Z,{className:"w-5 h-5 animate-spin"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{className:"w-5 h-5 mr-2"}),"V\xe9rifier"]})})]})}),(0,r.jsxs)(p.M,{mode:"wait",children:[C&&(0,r.jsxs)(f.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"space-y-6",children:[(0,r.jsx)("div",{className:"p-6 rounded-xl shadow-md ".concat("available"===C.status?"bg-green-50 border border-green-200":"bg-red-50 border border-red-200"),children:(0,r.jsx)("div",{className:"flex items-center gap-3",children:"available"===C.status?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{className:"w-8 h-8 text-green-500"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"text-xl font-bold text-gray-900",children:"Domaine disponible !"}),(0,r.jsx)("p",{className:"text-gray-600",children:"R\xe9servez votre nom de domaine d\xe8s maintenant."})]})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{className:"w-8 h-8 text-red-500"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"text-xl font-bold text-gray-900",children:"Domaine d\xe9j\xe0 pris"}),(0,r.jsx)("p",{className:"text-gray-600",children:"Essayez une autre extension ou un nom diff\xe9rent."})]})]})})}),"available"===C.status&&(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsx)("h3",{className:"text-xl font-bold text-gray-900",children:"Extensions disponibles :"}),z?(0,r.jsx)("div",{className:"flex items-center justify-center p-8",children:(0,r.jsx)(d.Z,{className:"w-8 h-8 animate-spin text-[#003B73]"})}):(0,r.jsx)("div",{className:"space-y-4",children:(()=>{if(!C||"available"!==C.status||!F||!b)return null;let e=R(b.toLowerCase().trim());return v.map(t=>{var a;let s=null===(a=F.pricing[t])||void 0===a?void 0:a.register["1"];if(!s)return null;let n="".concat(e,".").concat(t);return(0,r.jsxs)(f.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"flex items-center justify-between bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"text-xl font-bold text-gray-900",children:n}),(0,r.jsxs)("p",{className:"text-sm text-gray-500 mt-1",children:["Extension .",t]})]}),(0,r.jsxs)("div",{className:"flex items-center gap-6",children:[(0,r.jsxs)("div",{className:"text-right",children:[(0,r.jsx)("span",{className:"text-2xl font-bold text-[#003B73]",children:s}),(0,r.jsx)("span",{className:"text-gray-600 ml-1",children:"DH/an"})]}),(0,r.jsx)(i.z,{size:"lg",onClick:()=>A(n,t,parseFloat(s)),disabled:T[n],className:T[n]?"bg-gray-400 text-white cursor-not-allowed":"bg-[#22c55e] hover:bg-[#16a34a] text-white",children:T[n]?(0,r.jsxs)(r.Fragment,{children:["Ajout\xe9 au panier",(0,r.jsx)(o.Z,{className:"ml-2 h-5 w-5"})]}):(0,r.jsxs)(r.Fragment,{children:["Ajouter au panier",(0,r.jsx)(c.Z,{className:"ml-2 h-5 w-5"})]})})]})]},t)})})()})]})]}),E&&(0,r.jsx)(f.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"bg-red-50 border border-red-200 text-red-700 rounded-xl p-6 shadow-md",children:E})]}),(0,r.jsx)("div",{className:"mt-8",children:(0,r.jsxs)(i.z,{variant:"outline",onClick:()=>e.push("/"),className:"text-gray-600",children:[(0,r.jsx)(h.Z,{className:"w-4 h-4 mr-2"}),"Retour \xe0 l'accueil"]})})]})})}},3023:function(e,t,a){"use strict";a.d(t,{z:function(){return c}});var r=a(7437),s=a(2265),n=a(4949),i=a(9213),l=a(9311);let o=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,t)=>{let{className:a,variant:s,size:i,asChild:c=!1,...d}=e,u=c?n.g7:"button";return(0,r.jsx)(u,{className:(0,l.cn)(o({variant:s,size:i,className:a})),ref:t,...d})});c.displayName="Button"},1908:function(e,t,a){"use strict";a.d(t,{I:function(){return i}});var r=a(7437),s=a(2265),n=a(9311);let i=s.forwardRef((e,t)=>{let{className:a,type:s,...i}=e;return(0,r.jsx)("input",{type:s,className:(0,n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...i})});i.displayName="Input"},1063:function(e,t,a){"use strict";a.d(t,{j:function(){return n}});var r=a(4660),s=a(4810);let n=(0,r.ZP)()((0,s.tJ)((e,t)=>({items:[],addItem:a=>{let r=t().items,s=r.find(e=>e.domain===a.domain);s||e({items:[...r,a]})},removeItem:a=>e({items:t().items.filter(e=>e.domain!==a)}),clearCart:()=>e({items:[]}),getTotal:()=>t().items.reduce((e,t)=>e+t.price,0)}),{name:"wget-cart"}))},9311:function(e,t,a){"use strict";a.d(t,{cn:function(){return n}});var r=a(7042),s=a(4769);function n(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.m6)((0,r.W)(t))}}},function(e){e.O(0,[805,513,3,691,971,864,744],function(){return e(e.s=3116)}),_N_E=e.O()}]);