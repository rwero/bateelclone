import{C as _,p as u,a as h,b as m,L as b,c as v,d as g,P as f,e as k}from"./index.7d01eeb8.js";import{u as C}from"./data.42c2718e.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as n,o as O,e as j,a as o,R as i,g as t,f as D,p as S,j as x}from"./app.44c0e20c.js";const M=l=>(S("data-v-77e5112f"),l=l(),x(),l),P={class:"chart"},V={class:"chart-header"},I=M(()=>o("h2",null,"Commandes",-1)),L={class:"chart-btns"},$={__name:"VOrdersChart",setup(l){const a=C();_.register(u,h,m,b,v,g,f);let c=n({labels:Object.keys(a.ordersByDays).map(e=>e.split("--")[0].slice(5)).slice(0,30).reverse(),datasets:[{label:"",backgroundColor:"#3a57e8",borderColor:"#3a57e8",lineTension:.3,data:Object.keys(a.ordersByDays).map(e=>a.ordersByDays[e].length).slice(0,30).reverse()}]}),d=n({labels:Object.keys(a.ordersByDays).map(e=>e.split("--")[1].slice(0,3)).slice(0,7).reverse(),datasets:[{label:"",backgroundColor:"#3a57e8",borderColor:"#3a57e8",lineTension:.3,data:Object.keys(a.ordersByDays).map(e=>a.ordersByDays[e].length).slice(0,7).reverse()}]}),p=n({labels:Object.keys(a.ordersByMonths).map(e=>e.split("--")[1].slice(0,3)).reverse(),datasets:[{label:"",backgroundColor:"#3a57e8",borderColor:"#3a57e8",lineTension:.3,data:Object.keys(a.ordersByMonths).map(e=>a.ordersByMonths[e].length).reverse()}]}),s=n(d.value);return(e,r)=>(O(),j("div",P,[o("div",V,[I,o("div",L,[o("button",{onClick:r[0]||(r[0]=y=>i(s)?s.value=t(p):s=t(p))},"year"),o("button",{onClick:r[1]||(r[1]=y=>i(s)?s.value=t(c):s=t(c))},"month"),o("button",{onClick:r[2]||(r[2]=y=>i(s)?s.value=t(d):s=t(d))},"week")])]),D(t(k),{styles:{height:`${350}px`,position:"relative",padding:"1rem"},"chart-options":{responsive:!0,maintainAspectRatio:!1,scales:{y:{suggestedMin:0}},legend:{display:!1}},"chart-data":t(s),"chart-id":"chart-orders"},null,8,["chart-data"])]))}},N=B($,[["__scopeId","data-v-77e5112f"]]);export{N as default};