import{_ as m}from"./AuthenticatedLayout.7a713b00.js";import{r as _,o as s,b as o,d as c,u as x,w as d,F as r,H as p,a as t,D as n,t as l,E as g}from"./app.b4729431.js";import"./ApplicationLogo.bd5c583e.js";import"./TextInput.4e368796.js";import"./XMarkIcon.d7e5afdd.js";const u={"aria-label":"Breadcrumb",class:"flex md:justify-end items-center"},f={role:"list",class:"flex items-center space-x-2"},v={key:0,class:"flex items-center"},w=["href"],y=t("svg",{width:"16",height:"20",viewBox:"0 0 16 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",class:"h-5 w-4 text-gray-300"},[t("path",{d:"M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"})],-1),b={key:1,class:"mr-2 text-sm text-gray-700"},k={class:"py-2"},j={class:"max-w-7xl mx-auto"},A={class:"overflow-hidden shadow-sm md:rounded-lg"},B=t("h2",{class:"font-medium text-4xl text-gray-800 leading-tight p-6 lg:p-8 text-center lg:text-left"}," All Products ",-1),H={class:""},P={class:"mx-auto max-w-2xl py-8 pt-0 px-6 lg:max-w-7xl lg:px-8"},F={class:"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4"},L={class:"min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 hover:opacity-75 cursor-pointer"},N=["href"],V=["src","alt"],$={class:"mt-4 sm:flex justify-between block text-center sm:text-left sm:px-1"},C={class:"text-xl sm:text-md text-gray-700"},D=["href"],E=t("span",{class:"text-[11px] text-gray-600"},"From ",-1),z={class:"text-xl font-medium text-gray-900"},M=t("div",{class:"flex justify-center items-baseline gap-2"},[t("button",{class:"mt-1 border border-gray-500 py-2 w-1/2 sm:w-28 text-md text-gray-500 hover:text-gray-700"}," Add to cart ")],-1),K={__name:"AllProducts",props:{products:Object},setup(O){const i=_([{id:1,name:"Home",href:"#"},{id:2,name:"All Products",href:"#"}]);return(a,S)=>(s(),o(r,null,[c(x(p),{title:"All Products"}),c(m,null,{header:d(()=>[t("nav",u,[t("ol",f,[(s(!0),o(r,null,n(i.value,(e,h)=>(s(),o("li",{key:e.id},[h+1<i.value.length?(s(),o("div",v,[t("a",{href:e.href,class:"mr-2 text-sm font-bold text-gray-900"},l(e.name),9,w),y])):(s(),o("div",b,l(e.name),1))]))),128))])])]),main:d(()=>[g(l(a.$page.props.products[0])+" ",1),t("div",k,[t("div",j,[t("div",A,[B,t("div",H,[t("div",P,[t("div",F,[(s(!0),o(r,null,n(a.$page.props.products,e=>(s(),o("div",{key:e.id,class:"relative"},[t("div",L,[t("a",{href:a.route("products.show",e.id),class:"block"},[t("img",{src:e.images[0].path,alt:e.imageAlt,class:"h-full w-full object-cover object-center lg:h-full lg:w-full"},null,8,V)],8,N)]),t("div",$,[t("div",null,[t("h3",C,[t("a",{href:a.route("products.show",e.id)},l(e.title),9,D)]),E,t("span",z,l(e.price),1)]),M])]))),128))])])])])])])]),_:1})],64))}};export{K as default};
