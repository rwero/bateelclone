import{_ as k}from"./AuthenticatedLayout.d74acea7.js";import{r as d,k as C,u as _,l as j,o as l,e as o,f as p,g as r,w as x,F as m,H as S,a as e,I as y,J as u,N as B,n as L}from"./app.89b6fe59.js";import{b as $}from"./functions.0fa17830.js";import"./ApplicationLogo.3d49192e.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./TextInput.b06a54a8.js";import"./XMarkIcon.4fb3bca2.js";const q={"aria-label":"Breadcrumb",class:"flex md:justify-end items-center"},E={role:"list",class:"flex items-center space-x-2"},H={key:0,class:"flex items-center"},N=["href"],A=e("svg",{width:"16",height:"20",viewBox:"0 0 16 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",class:"h-5 w-4 text-gray-300"},[e("path",{d:"M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"})],-1),F={key:1,class:"mr-2 text-sm text-gray-700"},M={class:"py-2"},U={class:"max-w-7xl mx-auto"},V={class:"overflow-hidden"},z={class:"font-medium text-4xl text-gray-800 leading-tight p-6 lg:p-8 text-center lg:text-left"},D={class:""},I={id:"scroll",class:"mx-auto max-w-2xl py-8 pt-0 px-6 lg:max-w-7xl lg:px-8"},P={key:0,class:"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4"},J={class:"min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 hover:opacity-75 cursor-pointer"},R=["href"],T=["src","alt"],G={class:"mt-4 sm:flex justify-between block text-center sm:text-left sm:px-1"},K={class:"text-xl sm:text-md text-gray-700"},O=["href"],Q=e("span",{class:"text-[11px] text-gray-600"},"From ",-1),W={class:"text-xl font-medium text-gray-900"},X={class:"flex justify-center items-baseline gap-2"},Y=["onClick"],Z=e("div",{class:"flex justify-center items-center"},[e("div",{class:"spinner-border animate-spin inline-block w-10 h-10 border-gray-700 rounded-full",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")])],-1),ee=[Z],ce={__name:"Search",setup(te){let a=d(null),i=d(0),c=d(!1),h=d(!1);const w=s=>(s=s/100,s.toLocaleString("en-US",{style:"currency",currency:"USD"}));async function b(){if(!c.value||h.value)return;c.value=!1;const n=await(await fetch(`/api/search?id=${i.value}&q=${_().props.value.query}`)).json();console.log("data: ",n),n.length==[]&&(h.value=!0),a.value=[...a.value,...n],i.value=a.value[a.value.length-1].id,c.value=!0}async function g(){document.getElementById("scroll").getBoundingClientRect().bottom<1200&&await b()}C(async()=>{console.log("page props : ",_().props.value);const n=await(await fetch(`/api/search?id=${i.value}&q=${_().props.value.query}`)).json();console.log("the data : ",n),a.value=n,console.log("products: ",a.value),i.value=a.value[a.value.length-1].id,c.value=!0,window.addEventListener("scroll",g)}),j(()=>{window.removeEventListener("scroll",g)});const v=d([{id:1,name:"Home",href:"#"},{id:2,name:"Search",href:"#"}]);return(s,n)=>(l(),o(m,null,[p(r(S),{title:"All Products"}),p(k,null,{header:x(()=>[e("nav",q,[e("ol",E,[(l(!0),o(m,null,y(v.value,(t,f)=>(l(),o("li",{key:t.id},[f+1<v.value.length?(l(),o("div",H,[e("a",{href:t.href,class:"mr-2 text-sm font-bold text-gray-900"},u(t.name),9,N),A])):(l(),o("div",F,u(t.name),1))]))),128))])])]),main:x(()=>[e("div",M,[e("div",U,[e("div",V,[e("h2",z,' Search results for "'+u(s.$page.props.query)+'" ',1),e("div",D,[e("div",I,[r(i)?(l(),o("div",P,[(l(!0),o(m,null,y(r(a),t=>(l(),o("div",{key:t.id,class:"relative"},[e("div",J,[e("a",{href:s.route("products.show",t.id),class:"block"},[e("img",{src:t.images[0].path,alt:t.imageAlt,class:"h-full w-full object-cover object-center lg:h-full lg:w-full"},null,8,T)],8,R)]),e("div",G,[e("div",null,[e("h3",K,[e("a",{href:s.route("products.show",t.id)},u(t.title),9,O)]),Q,e("span",W,u(w(t.price)),1)]),e("div",X,[e("button",{class:"mt-1 border border-gray-500 py-2 w-1/2 sm:w-28 text-md text-gray-500 hover:text-gray-700",onClick:f=>r($)(t,1)}," Add to cart ",8,Y)])])]))),128))])):B("",!0)])])])])]),e("div",{class:L(["px-4 py-12",r(c)&&r(h)?"hidden":""])},ee,2)]),_:1})],64))}};export{ce as default};