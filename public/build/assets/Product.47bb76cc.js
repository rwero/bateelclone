import{o as a,e as l,a as e,r as x,u as b,f as i,g as o,w as m,F as d,H as k,I as u,c as w,n as g,J as r,b as $,v as j,K as A,d as C}from"./app.44c0e20c.js";import{_ as B}from"./AuthenticatedLayout.8b5d5a03.js";import{b as D,a as R}from"./functions.0fa17830.js";import{r as f}from"./StarIcon.52b11846.js";import{l as H,r as K,u as P,a as S,n as T}from"./tabs.3426fed2.js";import"./ApplicationLogo.06ef9f1d.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./TextInput.dee31e47.js";import"./XMarkIcon.2e0939e6.js";function V(_,v){return a(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z","clip-rule":"evenodd"})])}function z(_,v){return a(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"})])}const E={class:"flex transform text-left text-base transition md:my-8 md:px-4 max-w-7xl mx-auto"},M={class:"relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8"},N={class:"grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8"},W={class:"overflow-hidden rounded-lg col-span-6"},F=["src"],Y=["src"],q=e("div",{class:"hidden sm:block"},[e("h2",{class:"font-bold text-2xl mt-4 mb-2"}," A gift of Ajwa is a rare treat for date connoisseurs "),e("p",null," Known as the \u2018Holy Date\u2019, Ajwa dates have long held a special place within Arabic tradition. With their sweet, luscious taste and raisin-like texture, they are reminiscent of prunes, with a \uFB02esh which beautifully melts in the mouth. "),e("p",null," Ranging in colour from a delicate soft brown to almost black, Bateel's gourmet Ajwa dates are delicious and packed with nutrients. With each mouthful, you will be consuming a high level of vitamins, healthy fats, protein and carotenoids. You can improve your digestive health, boost heart health, reduce blood pressure and your risk of a stroke, all while enjoying the sweet, creamy \uFB02avour of these organic superfoods. "),e("p",null," Ajwa dates have been consumed in Arabia for more than 8000 years, given their irresistible \uFB02avour and superb nutrient content. At Bateel, we supply only the \uFB01nest Ajwa dates, providing a real treat for date connoisseurs. These enigmatic dates have become one of the most sought-after varieties in the world. ")],-1),I={class:"col-span-6 text-center sm:text-left"},J={class:"text-2xl font-bold text-gray-900 sm:pr-12"},L={"aria-labelledby":"information-heading",class:"mt-2"},O=e("h3",{id:"information-heading",class:"sr-only"}," Product information ",-1),U={class:"text-gray-700 text-sm mb-2"},G={class:"text-2xl text-gray-900"},Q=e("span",{class:"text-sm"}," per Kg",-1),X={class:"mt-2"},Z=e("h2",{class:"sr-only"},"Reviews",-1),ee={class:"flex items-center sm:justify-start justify-center"},te={class:"flex items-center"},se={class:"sr-only"},oe={href:"#",class:"ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"},ae={"aria-labelledby":"options-heading",class:"mt-4"},re=e("h3",{id:"options-heading",class:"sr-only"}," Product options ",-1),ie={class:"mt-2"},le=e("h2",null,"Kilograms",-1),ne={class:"mt-4"},de={class:"w-[150px] mx-auto sm:mx-0 flex items-start justify-between gap-4 group relative border rounded-md p-3 font-medium"},ce={class:""},ue=e("h2",{class:"font-bold text-lg mt-10"}," Delivery Details ",-1),pe=e("div",{class:"text-sm text-gray-700 mt-2"}," Ship to Algeria with approximate shipping fee of $28.00. Estimated delivery is between September 25 - September 28 . ",-1),he={class:"col-span-6"},me=e("h2",{class:"text-2xl font-bold"},"Add Review",-1),ge={class:"mt-4"},fe={class:"flex items-center"},_e={class:"mt-4"},ve=e("p",{class:"mt-2 text-sm text-gray-500"},"Brief description of your experience with this product.",-1),xe={class:"flex items-center justify-end mt-4"},we=["disabled"],ye={class:"w-full col-span-6"},be=e("h1",{class:"text-2xl font-bold"}," Customer Reviews ",-1),ke={class:"flex items-end gap-4 mt-3"},$e={class:"flex items-center"},je=A(),Ae={class:"text-gray-500 text-xs"},Ce={class:"font-bold text-xl"},Be={class:"text-gray-500"},De={class:"flex items-center mt-3 -translate-x-1"},Re={class:"mt-3 text-gray-600"},Ne={__name:"Product",props:{product:Object},setup(_){const v=_,p=x(1),h=x({review:"",rating:5,product_id:b().props.value.product.id});console.log("rev : : ",h.value),x({});const y=async()=>{const s=await C.post("/api/review",h.value);console.log("res ",s),s.status==200?window.location.reload():alert("Error")};return(s,n)=>(a(),l(d,null,[i(o(k),{title:"Welcome"}),i(B,null,{main:m(()=>[e("div",null,[e("div",E,[e("div",M,[e("div",N,[e("div",W,[i(o(H),null,{default:m(()=>[i(o(K),{class:"mt-2"},{default:m(()=>[(a(!0),l(d,null,u(s.$page.props.product.images,(t,c)=>(a(),w(o(P),{key:c},{default:m(()=>[e("img",{src:t.path,alt:"",class:"object-cover object-center"},null,8,F)]),_:2},1024))),128))]),_:1}),i(o(S),{class:"grid grid-cols-4 gap-4 my-2.5 mx-1 sm:grid-cols-2 md:grid-cols-4"},{default:m(()=>[(a(!0),l(d,null,u(s.$page.props.product.images,(t,c)=>(a(),w(o(T),{as:"template",key:c},{default:m(()=>[e("img",{src:t.path,alt:"",class:g(["w-full   rounded-lg "," focus:outline-none focus:ring-2"])},null,8,Y)]),_:2},1024))),128))]),_:1})]),_:1}),q]),e("div",I,[e("h2",J,r(s.$page.props.product.title),1),e("section",L,[O,e("div",U,r(s.$page.props.product.description),1),e("div",G,[e("span",null,r(s.$page.props.product.price),1),Q]),e("div",X,[Z,e("div",ee,[e("div",te,[(a(),l(d,null,u([0,1,2,3,4],t=>i(o(f),{key:t,class:g([s.$page.props.product.stars>t?"text-yellow-400":"text-gray-200","h-5 w-5 flex-shrink-0"]),"aria-hidden":"true"},null,8,["class"])),64))]),e("p",se,r(s.$page.props.product.stars)+" out of 5 stars ",1),e("a",oe,r(s.$page.props.product.all_reviews.length)+" reviews",1)])])]),e("section",ae,[re,e("div",ie,[le,e("div",ne,[e("div",de,[e("button",{type:"button",onClick:n[0]||(n[0]=t=>p.value=p.value==1?1:p.value-1)},[i(o(V),{class:"w-5 h-5 hover:text-gray-700 text-gray-300 translate-y-[2px]"})]),e("span",ce,r(p.value),1),e("button",{type:"button",onClick:n[1]||(n[1]=t=>p.value+=1)},[i(o(z),{class:"w-5 h-5 hover:text-gray-700 text-gray-300 translate-y-[2px]"})])])])]),e("button",{onClick:n[2]||(n[2]=t=>o(D)(v.product,p.value)),class:"mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"}," Add to cart "),ue,pe])]),e("div",he,[me,e("div",ge,[e("div",fe,[(a(),l(d,null,u([0,1,2,3,4],t=>i(o(f),{key:t,class:g([h.value.rating>t?"text-yellow-400":"text-gray-200","h-5 w-5 flex-shrink-0"]),"aria-hidden":"true",onClick:c=>h.value.rating=t+1},null,8,["class","onClick"])),64))]),e("div",_e,[$(e("textarea",{id:"about",name:"about",rows:"5","onUpdate:modelValue":n[3]||(n[3]=t=>h.value.review=t),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",placeholder:"Your description"},null,512),[[j,h.value.review]])]),ve,e("div",xe,[e("button",{onClick:y,disabled:!s.$page.props.auth.user,class:"flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"}," Add ",8,we)])])]),e("div",ye,[be,e("div",ke,[e("div",$e,[(a(),l(d,null,u([0,1,2,3,4],t=>i(o(f),{key:t,class:g([s.$page.props.product.stars>t?"text-yellow-400":"text-gray-200","h-5 w-5 flex-shrink-0"]),"aria-hidden":"true"},null,8,["class"])),64))]),je,e("span",Ae,r(s.$page.props.product.rating)+" Based on "+r(s.$page.props.product.all_reviews.length)+" review(s)",1)]),(a(!0),l(d,null,u(s.$page.props.product.all_reviews,t=>(a(),l("div",{class:"p-5 mt-4 border-b last:border-none",key:t.id},[e("h2",Ce,r(t.user.first_name)+" "+r(t.user.last_name),1),e("p",Be,r(o(R)(t.created_at)),1),e("div",De,[(a(),l(d,null,u([0,1,2,3,4],c=>i(o(f),{key:c,class:g([t.rating>c?"text-yellow-400":"text-gray-200","h-5 w-5 flex-shrink-0"]),"aria-hidden":"true"},null,8,["class"])),64))]),e("p",Re,r(t.review),1)]))),128))])])])])])]),_:1})],64))}};export{Ne as default};
