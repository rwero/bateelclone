import{o as f,e as h,a as e,r as _,m as y,k as P,f as m,w as L,g as l,M as V,b,v as g,F as $,I as U,J as p,N as M,d as B,L as I,u as N}from"./app.44c0e20c.js";import{A as R}from"./ApplicationLogo.06ef9f1d.js";import{g as T}from"./functions.0fa17830.js";import{r as A}from"./XMarkIcon.2e0939e6.js";import{r as q}from"./PhoneIcon.661ea15e.js";import"./_plugin-vue_export-helper.cdc0426e.js";function w(u,t){return f(),h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z","clip-rule":"evenodd"})])}var k="https://js.stripe.com/v3",F=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,S="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",O=function(){for(var t=document.querySelectorAll('script[src^="'.concat(k,'"]')),s=0;s<t.length;s++){var a=t[s];if(!!F.test(a.src))return a}return null},z=function(t){var s=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",a=document.createElement("script");a.src="".concat(k).concat(s);var i=document.head||document.body;if(!i)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return i.appendChild(a),a},G=function(t,s){!t||!t._registerWrapper||t._registerWrapper({name:"stripe-js",version:"1.41.0",startTime:s})},v=null,W=function(t){return v!==null||(v=new Promise(function(s,a){if(typeof window>"u"){s(null);return}if(window.Stripe&&t&&console.warn(S),window.Stripe){s(window.Stripe);return}try{var i=O();i&&t?console.warn(S):i||(i=z(t)),i.addEventListener("load",function(){window.Stripe?s(window.Stripe):a(new Error("Stripe.js not available"))}),i.addEventListener("error",function(){a(new Error("Failed to load Stripe.js"))})}catch(d){a(d);return}})),v},Z=function(t,s,a){if(t===null)return null;var i=t.apply(void 0,s);return G(i,a),i},j=Promise.resolve().then(function(){return W(null)}),C=!1;j.catch(function(u){C||console.warn(u)});var D=function(){for(var t=arguments.length,s=new Array(t),a=0;a<t;a++)s[a]=arguments[a];C=!0;var i=Date.now();return j.then(function(d){return Z(d,s,i)})};const H={class:"min-h-screen bg-gray-100"},K={class:"bg-white border-b border-gray-100"},J={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},Q={class:"flex justify-between h-16"},X={class:"flex"},Y={class:"shrink-0 flex items-center"},ee={key:0,class:"max-w-7xl mx-auto my-8 px-8"},te={class:"flex items-center justify-center gap-8 rounded-lg bg-indigo-600 px-8 py-4 font-medium text-white"},se=e("span",{class:"text-center"}," Orders are usually shipped within 24 hours of order acceptance (Monday to Friday) and expected to arrive within 10 working days. ",-1),oe={class:"max-w-7xl mx-auto mt-8 px-8"},ae={class:"grid md:grid-cols-7 grid-cols-1 gap-8"},de={class:"md:col-span-4 col-span-1 mb-8"},ne={class:""},ie={action:"#",method:"POST"},re={class:"overflow-hidden shadow-lg rounded-lg"},le={class:"bg-white p-6"},ce=e("h2",{class:"text-xl font-bold mb-4"},"Shipping Information",-1),ue={class:"grid grid-cols-6 gap-6"},me={class:"col-span-6 sm:col-span-3"},pe=e("label",{for:"first-name",class:"block text-sm font-medium text-gray-700"},"First name",-1),_e=["disabled","value"],fe={class:"col-span-6 sm:col-span-3"},he=e("label",{for:"last-name",class:"block text-sm font-medium text-gray-700"},"Last name",-1),be=["disabled","value"],ge={class:"col-span-6 sm:col-span-3"},ve=e("label",{for:"email-address",class:"block text-sm font-medium text-gray-700"},"Email address",-1),xe=["disabled","value"],ye={class:"col-span-6 sm:col-span-3"},we=e("label",{for:"company-website",class:"block text-sm font-medium text-gray-700"},"Phone number",-1),Se={class:"mt-1 flex rounded-md shadow-sm"},ke={class:"inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"},je=["disabled"],Ce={class:"col-span-6 sm:col-span-3"},Ee=e("label",{for:"country",class:"block text-sm font-medium text-gray-700"},"Country",-1),Pe=["disabled"],Le=e("option",null,"United States",-1),Ve=e("option",null,"Canada",-1),$e=e("option",null,"Mexico",-1),Ue=e("option",{selected:""},"Algeria",-1),Me=[Le,Ve,$e,Ue],Be={class:"col-span-6"},Ie=e("label",{for:"street-address",class:"block text-sm font-medium text-gray-700"},"Street address",-1),Ne=["disabled"],Re={class:"col-span-6 sm:col-span-6 lg:col-span-2"},Te=e("label",{for:"city",class:"block text-sm font-medium text-gray-700"},"City",-1),Ae=["disabled"],qe={class:"col-span-6 sm:col-span-3 lg:col-span-2"},Fe=e("label",{for:"region",class:"block text-sm font-medium text-gray-700"},"State / Province",-1),Oe=["disabled"],ze={class:"col-span-6 sm:col-span-3 lg:col-span-2"},Ge=e("label",{for:"postal-code",class:"block text-sm font-medium text-gray-700"},"ZIP / Postal code",-1),We=["disabled"],Ze=M('<div class="mt-6"><label for="about" class="block text-sm font-medium text-gray-700">Order Notes</label><div class="mt-1"><textarea id="about" name="about" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="you@example.com"></textarea></div><p class="mt-2 text-sm text-gray-500"> Notes about your order, e.g. special notes for delivery. </p></div>',1),De={class:"bg-white border-b border-t border-gray-300 pt-6 mt-6 pb-8"},He=e("h2",{class:"text-xl font-bold"},"Shipping Information",-1),Ke={class:"grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-between mt-6"},Je={class:"rounded-lg border-2 border-indigo-500 p-4"},Qe={class:"flex items-center justify-between"},Xe=e("span",{class:"font-bold"},"Standrad",-1),Ye=e("p",{class:"text-gray-500"},"4-10 business days",-1),et=e("p",{class:"mt-6 font-bold"},"$5.00",-1),tt={class:"rounded-lg border border-gray-300 p-4 hidden"},st={class:"flex items-center justify-between"},ot=e("span",{class:"font-bold"},"Express",-1),at=e("p",{class:"text-gray-500"},"2-5 business days",-1),dt=e("p",{class:"mt-6 font-bold"},"$16.00",-1),nt={class:"pt-6 pb-4"},it=e("h2",{class:"text-xl font-bold"},"Payment",-1),rt={class:"flex gap-8 items-center pt-6"},lt={class:"flex items-center justify-start gap-3"},ct=["disabled"],ut=e("label",{for:"cc",class:"text-gray-700"},"Credit Card",-1),mt=e("div",{class:"pt-6 pb-4"},[e("div",{id:"card-element"})],-1),pt={class:"md:col-span-3 col-span-1 mb-8"},_t={class:"rounded-lg bg-white border border-gray-100 p-4 shadow-lg"},ft=e("h2",{class:"text-xl font-bold pb-2 border-b border-gray-100 mb-4"},"Summary",-1),ht={class:"flow-root"},bt={role:"list",class:"-my-6 divide-y divide-gray-200"},gt={class:"h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"},vt=["src"],xt={class:"ml-4 flex flex-1 flex-col"},yt={class:"flex justify-between text-base font-medium text-gray-900"},wt=["href"],St={class:"ml-4"},kt={class:"flex flex-1 items-end justify-between text-sm"},jt={class:"text-gray-500"},Ct=e("div",{class:"flex"},[e("button",{type:"button",class:"font-medium text-indigo-600 hover:text-indigo-500"},"Remove")],-1),Et={class:"border-t border-gray-200 mt-6 pt-4"},Pt={class:"flex justify-between text-base font-medium text-gray-900 mb-2"},Lt=e("p",null,"Subtotal",-1),Vt=e("div",{class:"flex justify-between text-base font-medium text-gray-900 my-2"},[e("p",null,"Shipping"),e("p",null,"$5.00")],-1),$t={class:"flex justify-between text-base font-medium text-gray-900 my-2"},Ut=e("p",null,"Total",-1),Mt={class:"mt-6"},Bt=["textContent"],Ft={__name:"Checkout",setup(u){const t=_(!0),s=_([]),a=_({}),i=_({}),d=_(!1),o=y(()=>N().props.value.auth.user);console.log("dd user : ",o.value),P(async()=>{s.value=T(),a.value=await D("pk_test_51LtbdoAshxV8KD7KZ8tO9w1umHokBfUYESaAsZ16elCBhaqRC1ZBtWPjLUksI8R3jq1GKRfQoxMMUB2VdCUiZtEH00lfrnGVw7");const c=a.value.elements();i.value=c.create("card",{classes:{base:"bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 p-3 leading-8 transition-colors duration-200 ease-in-out"}}),i.value.mount("#card-element")});let x=y(()=>{let c=0;for(let r of s.value)c+=r.price*r.quantity;return c});const E=async()=>{d.value=!0;const{paymentMethod:c,error:r}=await a.value.createPaymentMethod("card",i.value,{billing_details:{name:o.value.first_name+" "+o.value.last_name,email:o.value.email,address:{line1:o.value.address,city:o.value.city,state:o.value.state,postal_code:o.value.zip_code}}});if(r)d.value=!1,console.error(r),alert(r.message);else{console.log("metode : ",c),o.value.payment_method_id=c.id,o.value.subtotal=x.value,o.value.delivery_fee=500,o.value.cart=JSON.stringify(s.value),console.log("user : ",o.value);const n=await B.post("/purchase",o.value);console.log("THE RESULT : ",n),d.value=!1,n.status==200&&(console.log("200"),s.value=[],localStorage.setItem("cart","[]"),window.location=route("orders.index"))}};return(c,r)=>(f(),h("div",null,[e("div",H,[e("nav",K,[e("div",J,[e("div",Q,[e("div",X,[e("div",Y,[m(l(I),{href:c.route("home.index")},{default:L(()=>[m(R,{class:"block h-9 w-auto"})]),_:1},8,["href"])])])])])]),t.value?(f(),h("header",ee,[e("div",te,[se,m(l(A),{class:"h-5 w-5 min-w-[1.25rem] cursor-pointer",onClick:r[0]||(r[0]=n=>t.value=!1)})])])):V("",!0),e("main",oe,[e("div",ae,[e("div",de,[e("div",ne,[e("form",ie,[e("div",re,[e("div",le,[ce,e("div",ue,[e("div",me,[pe,e("input",{disabled:d.value,type:"text",name:"first-name",id:"first-name",autocomplete:"given-name",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",value:c.$page.props.auth.user.first_name},null,8,_e)]),e("div",fe,[he,e("input",{disabled:d.value,type:"text",name:"last-name",id:"last-name",autocomplete:"family-name",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",value:c.$page.props.auth.user.last_name},null,8,be)]),e("div",ge,[ve,e("input",{disabled:d.value,type:"text",name:"email-address",id:"email-address",autocomplete:"email",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",value:c.$page.props.auth.user.email},null,8,xe)]),e("div",ye,[we,e("div",Se,[e("span",ke,[m(l(q),{class:"h-5 w-5"})]),e("input",{disabled:d.value,type:"text",name:"company-website",id:"company-website",class:"block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",placeholder:""},null,8,je)])]),e("div",Ce,[Ee,e("select",{disabled:d.value,id:"country",name:"country",autocomplete:"country-name",class:"mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"},Me,8,Pe)]),e("div",Be,[Ie,b(e("input",{disabled:d.value,type:"text",name:"street-address",id:"street-address",autocomplete:"street-address","onUpdate:modelValue":r[1]||(r[1]=n=>l(o).address=n),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"},null,8,Ne),[[g,l(o).address]])]),e("div",Re,[Te,b(e("input",{disabled:d.value,type:"text",name:"city",id:"city",autocomplete:"address-level2","onUpdate:modelValue":r[2]||(r[2]=n=>l(o).city=n),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"},null,8,Ae),[[g,l(o).city]])]),e("div",qe,[Fe,b(e("input",{disabled:d.value,type:"text",name:"region",id:"region",autocomplete:"address-level1","onUpdate:modelValue":r[3]||(r[3]=n=>l(o).state=n),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"},null,8,Oe),[[g,l(o).state]])]),e("div",ze,[Ge,b(e("input",{disabled:d.value,type:"text",name:"postal-code",id:"postal-code",autocomplete:"postal-code","onUpdate:modelValue":r[4]||(r[4]=n=>l(o).zip_code=n),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"},null,8,We),[[g,l(o).zip_code]])])]),Ze,e("div",De,[He,e("div",Ke,[e("div",Je,[e("div",Qe,[Xe,m(l(w),{class:"h-6 w-6 text-indigo-500"})]),Ye,et]),e("div",tt,[e("div",st,[ot,m(l(w),{class:"h-6 w-6 hidden"})]),at,dt])])]),e("div",nt,[it,e("div",rt,[e("div",lt,[e("input",{disabled:d.value,type:"radio",name:"payment",id:"cc",class:"focus:ring-0 border border-gray-300",checked:""},null,8,ct),ut])]),mt])])])])])]),e("div",pt,[e("div",_t,[ft,e("div",ht,[e("ul",bt,[(f(!0),h($,null,U(s.value,n=>(f(),h("li",{key:n.product_id,class:"flex py-6"},[e("div",gt,[e("img",{src:n.image.path,alt:"",class:"h-full w-full object-cover object-center"},null,8,vt)]),e("div",xt,[e("div",null,[e("div",yt,[e("h3",null,[e("a",{href:c.route("products.show",n.product_id)},p(n.title),9,wt)]),e("p",St,p(n.price),1)])]),e("div",kt,[e("p",jt,"Qty "+p(n.quantity),1),Ct])])]))),128))])]),e("div",Et,[e("div",Pt,[Lt,e("p",null,"$"+p(l(x)),1)]),Vt,e("div",$t,[Ut,e("p",null,"$"+p(l(x)+5),1)]),e("div",Mt,[e("button",{onClick:E,class:"flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700",textContent:p(d.value?"Processing...":"Confirm Order")},null,8,Bt)])])])])])])])]))}};export{Ft as default};