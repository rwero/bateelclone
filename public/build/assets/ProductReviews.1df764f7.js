import{A as n}from"./AccountLayout.f9531ced.js";import{a as d}from"./functions.0fa17830.js";import{r as i}from"./ExclamationTriangleIcon.ed8f084a.js";import{o as s,c as p,w as m,a as t,e as a,f as x,g as l,F as u,I as h,J as r}from"./app.d9929a02.js";import"./AuthenticatedLayout.1bc59318.js";import"./ApplicationLogo.7c8cd6fc.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./TextInput.4b89699c.js";import"./XMarkIcon.c7955abd.js";const _={class:"block block-dashboard-info"},f=t("div",{class:"block-title text-xl p-4"},[t("strong",null,"My Product Reviews")],-1),y={key:0,class:"flex items-center justify-start gap-4 bg-indigo-600 rounded-md w-full text-white px-4 py-3"},g=t("div",null," You Have submitted 0 reviews ",-1),w={key:1,class:"overflow-scroll"},b={class:"min-w-full"},v=t("thead",{class:"border-b"},[t("tr",null,[t("th",{class:"text-sm font-bold text-gray-900 px-6 py-4 text-left"},"Image"),t("th",{class:"text-sm font-bold text-gray-900 px-6 py-4 text-left"},"Name"),t("th",{class:"text-sm font-bold text-gray-900 px-6 py-4 text-left"},"Review"),t("th",{class:"text-sm font-bold text-gray-900 px-6 py-4 text-left"},"Stars"),t("th",{class:"text-sm font-bold text-gray-900 px-6 py-4 text-left"},"Date")])],-1),k=["onClick"],B={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"},C=["src"],D={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"},N={class:"px-6 py-4 max-w-10 text-sm font-medium text-gray-900"},P={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"},R={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"},Y={__name:"ProductReviews",setup($){const c=o=>{window.location=route("products.show",o)};return(o,A)=>(s(),p(n,null,{content:m(()=>[t("div",null,[t("div",_,[f,o.$page.props.reviews.length==0?(s(),a("div",y,[t("div",null,[x(l(i),{class:"h-6 w-6"})]),g])):(s(),a("div",w,[t("table",b,[v,t("tbody",null,[(s(!0),a(u,null,h(o.$page.props.reviews,e=>(s(),a("tr",{class:"border-b hover:cursor-pointer hover:bg-gray-100",onClick:F=>c(e.product.id)},[t("td",B,[t("img",{src:e.product.images[0].path,class:"w-14 h-14 rounded-md",alt:""},null,8,C)]),t("td",D,r(e.product.title),1),t("td",N,r(e.review),1),t("td",P,r(e.rating),1),t("td",R,r(l(d)(e.created_at)),1)],8,k))),256))])])]))])])]),_:1}))}};export{Y as default};