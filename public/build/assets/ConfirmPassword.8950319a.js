import{J as d,o as m,c as l,w as t,d as a,u as o,H as c,a as e,n as u,K as p,E as f}from"./app.5a0d32e7.js";import{_,a as w}from"./PrimaryButton.99563dde.js";import{_ as b,a as h}from"./InputLabel.18a5d29f.js";import{_ as x}from"./TextInput.d0b349b3.js";import"./ApplicationLogo.b35e36c0.js";const g=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),V=["onSubmit"],v={class:"flex justify-end mt-4"},y=f(" Confirm "),H={__name:"ConfirmPassword",setup(C){const s=d({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return($,r)=>(m(),l(_,null,{default:t(()=>[a(o(c),{title:"Confirm Password"}),g,e("form",{onSubmit:p(i,["prevent"])},[e("div",null,[a(b,{for:"password",value:"Password"}),a(x,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=n=>o(s).password=n),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(h,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",v,[a(w,{class:u(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[y]),_:1},8,["class","disabled"])])],40,V)]),_:1}))}};export{H as default};