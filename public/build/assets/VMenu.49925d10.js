import{u as d}from"./data.42c2718e.js";import _ from"./IconUsers.77f8998e.js";import u from"./IconDashboard.09889c95.js";import f from"./IconOrders.5bccb06f.js";import v from"./IconSellers.e2864770.js";import I from"./IconSettings.e5f101b3.js";import h from"./IconDeliverers.45dada11.js";import{_ as g}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as b,o as n,e as c,a as o,F as C,I as S,g as i,n as V,c as D,P as O,J as k,p as w,j as y}from"./app.44c0e20c.js";const B=t=>(w("data-v-6ba173f1"),t=t(),y(),t),x={class:"menu-wrapper"},M={class:"menu"},P=B(()=>o("div",{class:"logo-wrapper"},"Bateel",-1)),j=["onClick"],F={class:"icon-wrapper"},U={components:{IconUsers:_,IconDashboard:u,IconOrders:f,IconSellers:v,IconSettings:I,IconDeliverers:h}},$=Object.assign(U,{__name:"VMenu",setup(t){const s=d(),p=b([{title:"Dashboard",comp:"VDashboard",icon:"IconDashboard"},{title:"Clients",comp:"VClients",icon:"IconUsers"},{title:"Orders",comp:"VOrders",icon:"IconOrders"},{title:"Products",comp:"VProducts",icon:"IconOrders"},{title:"Settings",comp:"VSettings",icon:"IconSettings"}]);function l(r){s.activeComponent=r.comp,s.menuOpen=window.screen.availWidth>600}return(r,a)=>(n(),c("div",x,[o("div",M,[P,(n(!0),c(C,null,S(p.value,(e,m)=>(n(),c("button",{class:V(["btn",{selected:e.comp===i(s).activeComponent}]),key:m,onClick:z=>l(e)},[o("div",F,[(n(),D(O(e.icon)))]),o("p",null,k(e.title),1)],10,j))),128))]),o("div",{class:"empty",onClick:a[0]||(a[0]=e=>i(s).menuOpen=!1)})]))}}),K=g($,[["__scopeId","data-v-6ba173f1"]]);export{K as default};