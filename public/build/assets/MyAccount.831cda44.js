import{A as e}from"./AccountLayout.42443969.js";import{o as l,c as a,w as d,a as s,t}from"./app.e338a48b.js";import"./AuthenticatedLayout.41f7efa0.js";import"./ApplicationLogo.85b46292.js";import"./TextInput.7cfff3a5.js";import"./XMarkIcon.b999a927.js";const i={class:"block block-dashboard-info"},n=s("div",{class:"block-title text-xl border-b border-gray-300 p-4"},[s("strong",null,"Account Information")],-1),r={class:"block-content grid md:grid-cols-2 grid-cols-1"},c={class:"box box-information mt-4"},b=s("div",{class:"box-title p-4 font-bold"}," Contact Information",-1),p={class:"box-content px-4"},u=s("div",{class:"box box-newsletter mt-4"},[s("div",{class:"box-title font-bold p-4"}," Newsletters"),s("div",{class:"box-content px-4"},[s("address",null," Newsletter not yet available. ")])],-1),x=s("div",{class:"block block-dashboard-addresses"},[s("div",{class:"block-title text-xl border-b border-gray-300 p-4 mt-8"},[s("strong",null,"Address Book")]),s("div",{class:"block-content grid md:grid-cols-2 grid-cols-1"},[s("div",{class:"box box-billing-address mt-4"},[s("div",{class:"box-title font-bold p-4"}," Default Billing Address "),s("div",{class:"box-content px-4"},[s("address",null," You have not set a default billing address. ")])]),s("div",{class:"box box-shipping-address mt-4"},[s("div",{class:"box-title font-bold p-4"}," Default Shipping Address"),s("div",{class:"box-content px-4"},[s("address",null," You have not set a default shipping address. ")])])])],-1),y={__name:"MyAccount",setup(_){return(o,m)=>(l(),a(e,null,{content:d(()=>[s("div",null,[s("div",i,[n,s("div",r,[s("div",c,[b,s("div",p,[s("p",null,t(o.$page.props.auth.user.first_name)+" "+t(o.$page.props.auth.user.last_name),1),s("p",null,t(o.$page.props.auth.user.email),1)])]),u])]),x])]),_:1}))}};export{y as default};