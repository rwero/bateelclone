import{j as k,k as w,P as x,u as s,o as d,b as g,Q as y,N as v,c,w as m,d as a,H as V,t as $,I as u,a as r,L as B,n as C,O as L,G as h}from"./app.220b0039.js";import{_ as N,a as P}from"./PrimaryButton.822abffb.js";import{_ as p,a as f}from"./InputLabel.898a14d3.js";import{_}from"./TextInput.5f1b488a.js";import"./ApplicationLogo.615aee50.js";const R=["value"],S={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(l,{emit:e}){const i=l,n=k({get(){return i.checked},set(t){e("update:checked",t)}});return(t,o)=>w((d(),g("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":o[0]||(o[0]=b=>y(n)?n.value=b:null),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,8,R)),[[x,s(n)]])}},U={key:0,class:"mb-4 font-medium text-sm text-green-600"},q=["onSubmit"],F={class:"mt-4"},j={class:"block mt-4"},D={class:"flex items-center"},E=r("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),H={class:"flex items-center justify-end mt-4"},M=h(" Forgot your password? "),z=h(" Log in "),T={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=v({email:"",password:"",remember:!1}),i=async()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(n,t)=>(d(),c(N,null,{default:m(()=>[a(s(V),{title:"Log in"}),l.status?(d(),g("div",U,$(l.status),1)):u("",!0),r("form",{onSubmit:L(i,["prevent"])},[r("div",null,[a(p,{for:"email",value:"Email"}),a(_,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":t[0]||(t[0]=o=>s(e).email=o),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(f,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",F,[a(p,{for:"password",value:"Password"}),a(_,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":t[1]||(t[1]=o=>s(e).password=o),required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(f,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",j,[r("label",D,[a(S,{name:"remember",checked:s(e).remember,"onUpdate:checked":t[2]||(t[2]=o=>s(e).remember=o)},null,8,["checked"]),E])]),r("div",H,[l.canResetPassword?(d(),c(s(B),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:m(()=>[M]),_:1},8,["href"])):u("",!0),a(P,{class:C(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[z]),_:1},8,["class","disabled"])])],40,q)]),_:1}))}};export{T as default};
