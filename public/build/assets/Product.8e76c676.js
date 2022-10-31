import{o as r,e as n,a as e,r as w,u as g,f as i,g as o,w as m,F as c,H as k,I as p,c as y,n as f,J as a,b as $,v as j,K as A,d as C}from"./app.d9929a02.js";import{_ as B}from"./AuthenticatedLayout.1bc59318.js";import{b as D,a as P}from"./functions.0fa17830.js";import{r as v}from"./StarIcon.ef846fe3.js";import{l as R,r as H,u as K,a as S,n as T}from"./tabs.46e00beb.js";import"./ApplicationLogo.7c8cd6fc.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./TextInput.4b89699c.js";import"./XMarkIcon.c7955abd.js";function V(_,x){return r(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z","clip-rule":"evenodd"})])}function z(_,x){return r(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"})])}const E={class:"flex transform text-left text-base transition md:my-8 md:px-4 max-w-7xl mx-auto"},M={class:"relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8"},N={class:"grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8"},W={class:"overflow-hidden rounded-lg col-span-6"},F=["src"],U=["src"],Y=e("div",{class:"hidden sm:block"},[e("h2",{class:"font-bold text-2xl mt-4 mb-2"}," A gift of Ajwa is a rare treat for date connoisseurs "),e("p",null," Known as the \u2018Holy Date\u2019, Ajwa dates have long held a special place within Arabic tradition. With their sweet, luscious taste and raisin-like texture, they are reminiscent of prunes, with a \uFB02esh which beautifully melts in the mouth. "),e("p",null," Ranging in colour from a delicate soft brown to almost black, Bateel's gourmet Ajwa dates are delicious and packed with nutrients. With each mouthful, you will be consuming a high level of vitamins, healthy fats, protein and carotenoids. You can improve your digestive health, boost heart health, reduce blood pressure and your risk of a stroke, all while enjoying the sweet, creamy \uFB02avour of these organic superfoods. "),e("p",null," Ajwa dates have been consumed in Arabia for more than 8000 years, given their irresistible \uFB02avour and superb nutrient content. At Bateel, we supply only the \uFB01nest Ajwa dates, providing a real treat for date connoisseurs. These enigmatic dates have become one of the most sought-after varieties in the world. ")],-1),q={class:"col-span-6 text-center sm:text-left"},I={class:"text-2xl font-bold text-gray-900 sm:pr-12"},J={"aria-labelledby":"information-heading",class:"mt-2"},L=e("h3",{id:"information-heading",class:"sr-only"}," Product information ",-1),O={class:"text-gray-700 text-sm mb-2"},G={class:"text-2xl text-gray-900"},Q=e("span",{class:"text-sm"}," per Kg",-1),X={class:"mt-2"},Z=e("h2",{class:"sr-only"},"Reviews",-1),ee={class:"flex items-center sm:justify-start justify-center"},te={class:"flex items-center"},se={class:"sr-only"},oe={href:"#",class:"ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"},ae={"aria-labelledby":"options-heading",class:"mt-4"},re=e("h3",{id:"options-heading",class:"sr-only"}," Product options ",-1),le={class:"mt-2"},ie=e("h2",null,"Kilograms",-1),ne={class:"mt-4"},de={class:"w-[150px] mx-auto sm:mx-0 flex items-start justify-between gap-4 group relative border rounded-md p-3 font-medium"},ce={class:""},ue=e("h2",{class:"font-bold text-lg mt-10"}," Delivery Details ",-1),pe=e("div",{class:"text-sm text-gray-700 mt-2"}," Ship to Algeria with approximate shipping fee of $28.00. Estimated delivery is between September 25 - September 28 . ",-1),he={class:"col-span-6"},me=e("h2",{class:"text-2xl font-bold"},"Add Review",-1),ge={class:"mt-4"},fe={class:"flex items-center"},ve={class:"mt-4"},_e=e("p",{class:"mt-2 text-sm text-gray-500"},"Brief description of your experience with this product.",-1),xe={class:"flex items-center justify-end mt-4"},we=["textContent"],ye={class:"w-full col-span-6"},be=e("h1",{class:"text-2xl font-bold"}," Customer Reviews ",-1),ke={class:"flex items-end gap-4 mt-3"},$e={class:"flex items-center"},je=A(),Ae={class:"text-gray-500 text-xs"},Ce={class:"font-bold text-xl"},Be={class:"text-gray-500"},De={class:"flex items-center mt-3 -translate-x-1"},Pe={class:"mt-3 text-gray-600"},Ne={__name:"Product",props:{product:Object},setup(_){const x=_,h=w(1),l=w({review:"",rating:5,product_id:g().props.value.product.id,update:!1});if(g().props.value.auth.user){let s=g().props.value.product.all_reviews.filter(d=>d.user_id==g().props.value.auth.user.id);console.log("reg  len ",s),s.length>0&&(l.value.review=s[0].review,l.value.rating=s[0].rating,l.value.update=!0,l.value.id=s[0].id)}console.log("rev : : ",l.value);const b=async()=>{if(g().props.value.auth.user==null){console.log("test"),alert("Please login to add review");return}const s=await C.post("/api/review",l.value);s.status==200?s.data.success?window.location.reload():alert("An arror happened"):alert("Error")};return(s,d)=>(r(),n(c,null,[i(o(k),{title:"Welcome"}),i(B,null,{main:m(()=>[e("div",null,[e("div",E,[e("div",M,[e("div",N,[e("div",W,[i(o(R),null,{default:m(()=>[i(o(H),{class:"mt-2"},{default:m(()=>[(r(!0),n(c,null,p(s.$page.props.product.images,(t,u)=>(r(),y(o(K),{key:u},{default:m(()=>[e("img",{src:t.path,alt:"",class:"object-cover object-center"},null,8,F)]),_:2},1024))),128))]),_:1}),i(o(S),{class:"grid grid-cols-4 gap-4 my-2.5 mx-1 sm:grid-cols-2 md:grid-cols-4"},{default:m(()=>[(r(!0),n(c,null,p(s.$page.props.product.images,(t,u)=>(r(),y(o(T),{as:"template",key:u},{default:m(()=>[e("img",{src:t.path,alt:"",class:f(["w-full   rounded-lg "," focus:outline-none focus:ring-2"])},null,8,U)]),_:2},1024))),128))]),_:1})]),_:1}),Y]),e("div",q,[e("h2",I,a(s.$page.props.product.title),1),e("section",J,[L,e("div",O,a(s.$page.props.product.description),1),e("div",G,[e("span",null,a(s.$page.props.product.price),1),Q]),e("div",X,[Z,e("div",ee,[e("div",te,[(r(),n(c,null,p([0,1,2,3,4],t=>i(o(v),{key:t,class:f([s.$page.props.product.stars>t?"text-yellow-400":"text-gray-200","h-5 w-5 flex-shrink-0"]),"aria-hidden":"true"},null,8,["class"])),64))]),e("p",se,a(s.$page.props.product.stars)+" out of 5 stars ",1),e("a",oe,a(s.$page.props.product.all_reviews.length)+" reviews",1)])])]),e("section",ae,[re,e("div",le,[ie,e("div",ne,[e("div",de,[e("button",{type:"button",onClick:d[0]||(d[0]=t=>h.value=h.value==1?1:h.value-1)},[i(o(V),{class:"w-5 h-5 hover:text-gray-700 text-gray-300 translate-y-[2px]"})]),e("span",ce,a(h.value),1),e("button",{type:"button",onClick:d[1]||(d[1]=t=>h.value+=1)},[i(o(z),{class:"w-5 h-5 hover:text-gray-700 text-gray-300 translate-y-[2px]"})])])])]),e("button",{onClick:d[2]||(d[2]=t=>o(D)(x.product,h.value)),class:"mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"}," Add to cart "),ue,pe])]),e("div",he,[me,e("div",ge,[e("div",fe,[(r(),n(c,null,p([0,1,2,3,4],t=>i(o(v),{key:t,class:f([l.value.rating>t?"text-yellow-400":"text-gray-200","h-5 w-5 flex-shrink-0"]),"aria-hidden":"true",onClick:u=>l.value.rating=t+1},null,8,["class","onClick"])),64))]),e("div",ve,[$(e("textarea",{id:"about",name:"about",rows:"5","onUpdate:modelValue":d[3]||(d[3]=t=>l.value.review=t),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-700",placeholder:"Your description"},null,512),[[j,l.value.review]])]),_e,e("div",xe,[e("button",{onClick:b,class:"flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700",textContent:a(l.value.review?"Update":"Add")},null,8,we)])])]),e("div",ye,[be,e("div",ke,[e("div",$e,[(r(),n(c,null,p([0,1,2,3,4],t=>i(o(v),{key:t,class:f([s.$page.props.product.stars>t?"text-yellow-400":"text-gray-200","h-5 w-5 flex-shrink-0"]),"aria-hidden":"true"},null,8,["class"])),64))]),je,e("span",Ae,a(s.$page.props.product.rating)+" Based on "+a(s.$page.props.product.all_reviews.length)+" review(s)",1)]),(r(!0),n(c,null,p(s.$page.props.product.all_reviews,t=>(r(),n("div",{class:"p-5 mt-4 border-b last:border-none",key:t.id},[e("h2",Ce,a(t.user.first_name)+" "+a(t.user.last_name),1),e("p",Be,a(o(P)(t.updated_at)),1),e("div",De,[(r(),n(c,null,p([0,1,2,3,4],u=>i(o(v),{key:u,class:f([t.rating>u?"text-yellow-400":"text-gray-200","h-5 w-5 flex-shrink-0"]),"aria-hidden":"true"},null,8,["class"])),64))]),e("p",Pe,a(t.review),1)]))),128))])])])])])]),_:1})],64))}};export{Ne as default};