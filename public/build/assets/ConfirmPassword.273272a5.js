import{X as m,o as d,c as l,w as t,f as a,g as o,H as c,a as e,n as p,Y as f,K as u}from"./app.d9929a02.js";import{_,a as w}from"./PrimaryButton.3bfa17f7.js";import{_ as b,a as h}from"./InputLabel.044f3ccb.js";import{_ as g}from"./TextInput.4b89699c.js";import"./ApplicationLogo.7c8cd6fc.js";import"./_plugin-vue_export-helper.cdc0426e.js";const x=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),V=["onSubmit"],v={class:"flex justify-end mt-4"},y=u(" Confirm "),S={__name:"ConfirmPassword",setup(C){const s=m({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return($,r)=>(d(),l(_,null,{default:t(()=>[a(o(c),{title:"Confirm Password"}),x,e("form",{onSubmit:f(i,["prevent"])},[e("div",null,[a(b,{for:"password",value:"Password"}),a(g,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=n=>o(s).password=n),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(h,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",v,[a(w,{class:p(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[y]),_:1},8,["class","disabled"])])],40,V)]),_:1}))}};export{S as default};