import{J as d,o as m,c as l,w as t,d as a,u as o,H as c,a as e,n as u,K as p,E as f}from"./app.d3f57c7d.js";import{_,a as w}from"./PrimaryButton.a716a28c.js";import{_ as b,a as h}from"./InputLabel.de6824ad.js";import{_ as x}from"./TextInput.2dabbb37.js";import"./ApplicationLogo.569d4d70.js";const g=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),V=["onSubmit"],v={class:"flex justify-end mt-4"},y=f(" Confirm "),H={__name:"ConfirmPassword",setup(C){const s=d({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return($,r)=>(m(),l(_,null,{default:t(()=>[a(o(c),{title:"Confirm Password"}),g,e("form",{onSubmit:p(i,["prevent"])},[e("div",null,[a(b,{for:"password",value:"Password"}),a(x,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=n=>o(s).password=n),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(h,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",v,[a(w,{class:u(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[y]),_:1},8,["class","disabled"])])],40,V)]),_:1}))}};export{H as default};