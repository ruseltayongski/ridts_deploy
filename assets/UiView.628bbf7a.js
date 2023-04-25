import{Q as R,h as j,i as W,j as t,d as J,r as v,c as p,ag as Q,A as q,l as e,R as z,k as o,p as A,B as _,N as b,m as n,v as l,T as w,_ as h,ah as D,ai as F,a8 as M,D as $,C as G,aj as H,ak as K,al as L,am as X,M as P,a7 as U,an as m,ac as S,ao as Y,U as Z,ap as ll,O as ol,P as el}from"./index.764f44e4.js";import{_ as x}from"./SectionTitle.vue_vue_type_script_setup_true_lang.17b74d36.js";const nl={},tl={class:"text-center py-24 text-gray-500 dark:text-slate-400"},al=t("p",null,"Nothing's here\u2026",-1),il=[al];function ul(C,O){return j(),W("div",tl,il)}const sl=R(nl,[["render",ul]]),c=C=>(ol("data-v-9f2b6e1d"),C=C(),el(),C),dl=c(()=>t("p",null,"This is sample modal",-1)),cl=c(()=>t("p",null,"Lorem ipsum dolor",-1)),rl=c(()=>t("p",null,"This is sample modal",-1)),fl=c(()=>t("p",null,"Lorem ipsum dolor",-1)),ml=c(()=>t("p",null,"This is sample modal",-1)),_l=c(()=>t("p",null,"Lorem ipsum dolor",-1)),bl={class:"text-center py-24 lg:py-12 text-gray-500 dark:text-slate-400"},pl={class:"space-y-12"},hl=c(()=>t("div",{class:"space-y-3"},[t("p",null,"Click to see in action")],-1)),gl=c(()=>t("div",{class:"space-y-3"},[t("p",null,"Click to see in action")],-1)),vl=c(()=>t("div",{class:"space-y-3"},[t("p",null,"Click to see in action")],-1)),wl=c(()=>t("h1",{class:"text-2xl text-gray-500 dark:text-slate-400"},"Notifications",-1)),xl={class:"flex items-center justify-center mt-6"},Cl=c(()=>t("b",null,"Info state",-1)),Bl=c(()=>t("b",null,"Success state",-1)),Vl=c(()=>t("b",null,"Warning state",-1)),kl=c(()=>t("b",null,"Danger state",-1)),yl=c(()=>t("b",null,"Contrast",-1)),$l={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2"},Sl=c(()=>t("div",{class:"space-y-3"},[t("p",null,"Card with title, icon & footer")],-1)),Ol=J({__name:"UiView",setup(C){const O=v(!1),N=v(!1),I=v(!1),T=v([]),f=p(()=>T.value.indexOf("outline")>-1),g=v([]),i=p(()=>g.value.indexOf("outline")>-1),u=p(()=>g.value.indexOf("small")>-1),s=p(()=>g.value.indexOf("disabled")>-1),d=p(()=>g.value.indexOf("rounded")>-1),B=v(["icon"]),V=p(()=>B.value.indexOf("outline")>-1),k=p(()=>B.value.indexOf("small")>-1),y=p(()=>B.value.indexOf("icon")>-1?ll:null),E=Q();return(Dl,a)=>(j(),q(z,null,{default:e(()=>[o(A,{modelValue:O.value,"onUpdate:modelValue":a[0]||(a[0]=r=>O.value=r),title:"Please confirm action","button-label":"Confirm","has-cancel":""},{default:e(()=>[dl,cl]),_:1},8,["modelValue"]),o(A,{modelValue:N.value,"onUpdate:modelValue":a[1]||(a[1]=r=>N.value=r),title:"Unhandled exception",button:"danger"},{default:e(()=>[rl,fl]),_:1},8,["modelValue"]),o(A,{modelValue:I.value,"onUpdate:modelValue":a[2]||(a[2]=r=>I.value=r),title:"Success",button:"success"},{default:e(()=>[ml,_l]),_:1},8,["modelValue"]),o(x,{first:""},{default:e(()=>[_("Dark mode")]),_:1}),o(w,null,{default:e(()=>[o(b,{class:"md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto"},{default:e(()=>[t("div",bl,[o(n,{label:"Toggle",color:"contrast",onClick:a[3]||(a[3]=r=>l(E).setDarkMode())})])]),_:1})]),_:1}),o(x,null,{default:e(()=>[_("Modal examples")]),_:1}),o(w,null,{default:e(()=>[t("div",pl,[o(b,{class:"cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto","is-hoverable":"",onClick:a[4]||(a[4]=r=>O.value=!0)},{footer:e(()=>[o(h,null,{default:e(()=>[o(n,{label:"Confirm",color:"info"}),o(n,{label:"Cancel",color:"info",outline:""})]),_:1})]),default:e(()=>[o(D,{title:"Please confirm action"},{default:e(()=>[o(n,{icon:l(F),color:"whiteDark",small:"","rounded-full":""},null,8,["icon"])]),_:1}),hl]),_:1}),o(b,{class:"cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto","is-hoverable":"",onClick:a[5]||(a[5]=r=>N.value=!0)},{footer:e(()=>[o(h,null,{default:e(()=>[o(n,{label:"Done",color:"danger"})]),_:1})]),default:e(()=>[o(D,{title:"Unhandled exception"}),gl]),_:1}),o(b,{class:"cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto","is-hoverable":"",onClick:a[6]||(a[6]=r=>I.value=!0)},{footer:e(()=>[o(n,{label:"Done",color:"success"})]),default:e(()=>[o(D,{title:"Success"}),vl]),_:1})])]),_:1}),o(x,{custom:""},{default:e(()=>[wl,t("div",xl,[o(M,{modelValue:T.value,"onUpdate:modelValue":a[7]||(a[7]=r=>T.value=r),type:"switch",name:"notifications-switch",options:{outline:"Outline"}},null,8,["modelValue"])])]),_:1}),o(w,null,{default:e(()=>[o($,{color:"info",icon:l(G),outline:l(f)},{right:e(()=>[o(n,{label:"Button",color:l(f)?"info":"white",outline:l(f),"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[Cl,_(". NotificationBar ")]),_:1},8,["icon","outline"]),o($,{color:"success",icon:l(H),outline:l(f)},{right:e(()=>[o(n,{label:"Button",color:l(f)?"success":"white",outline:l(f),"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[Bl,_(". NotificationBar ")]),_:1},8,["icon","outline"]),o($,{color:"warning",icon:l(K),outline:l(f)},{right:e(()=>[o(n,{label:"Button",color:l(f)?"warning":"white",outline:l(f),"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[Vl,_(". NotificationBar ")]),_:1},8,["icon","outline"]),o($,{color:"danger",icon:l(L),outline:l(f)},{right:e(()=>[o(n,{label:"Button",color:l(f)?"danger":"white",outline:l(f),"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[kl,_(". NotificationBar ")]),_:1},8,["icon","outline"]),o($,{color:"contrast",icon:l(X),outline:l(f)},{default:e(()=>[yl,_(". NotificationBar ")]),_:1},8,["icon","outline"])]),_:1}),o(x,null,{default:e(()=>[_("Buttons")]),_:1}),o(w,null,{default:e(()=>[o(b,null,{default:e(()=>[o(P,{label:"Settings"},{default:e(()=>[o(M,{modelValue:g.value,"onUpdate:modelValue":a[8]||(a[8]=r=>g.value=r),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",rounded:"Rounded",disabled:"Disabled"}},null,8,["modelValue"])]),_:1}),o(U),o(h,null,{default:e(()=>[o(n,{color:"lightDark",label:"Button",small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"contrast",label:"Button",small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"info",label:"Button",small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"success",label:"Button",small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"warning",label:"Button",small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"danger",label:"Button",small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"])]),_:1}),o(U),o(h,null,{default:e(()=>[o(n,{color:"lightDark",label:"Button",icon:l(m),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"contrast",label:"Button",icon:l(m),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"info",label:"Button",icon:l(m),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"success",label:"Button",icon:l(m),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"warning",label:"Button",icon:l(m),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"danger",label:"Button",icon:l(m),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"])]),_:1}),o(U),o(h,null,{default:e(()=>[o(n,{color:"lightDark",icon:l(m),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"contrast",icon:l(m),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"info",icon:l(m),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"success",icon:l(m),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"warning",icon:l(m),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"danger",icon:l(m),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"])]),_:1})]),_:1})]),_:1}),o(x,null,{default:e(()=>[_("Pills")]),_:1}),o(w,null,{default:e(()=>[o(b,null,{default:e(()=>[o(P,{label:"Settings"},{default:e(()=>[o(M,{modelValue:B.value,"onUpdate:modelValue":a[9]||(a[9]=r=>B.value=r),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",icon:"Icon"}},null,8,["modelValue"])]),_:1}),o(U),o(h,null,{default:e(()=>[o(S,{color:"contrast",label:"Contrast",small:l(k),outline:l(V),icon:l(y)},null,8,["small","outline","icon"]),o(S,{color:"info",label:"Info",small:l(k),outline:l(V),icon:l(y)},null,8,["small","outline","icon"]),o(S,{color:"success",label:"Success",small:l(k),outline:l(V),icon:l(y)},null,8,["small","outline","icon"]),o(S,{color:"warning",label:"Warning",small:l(k),outline:l(V),icon:l(y)},null,8,["small","outline","icon"]),o(S,{color:"danger",label:"Danger",small:l(k),outline:l(V),icon:l(y)},null,8,["small","outline","icon"])]),_:1})]),_:1})]),_:1}),o(x,null,{default:e(()=>[_("Cards")]),_:1}),o(w,null,{default:e(()=>[t("div",$l,[o(b,null,{footer:e(()=>[o(h,null,{default:e(()=>[o(n,{label:"Confirm",color:"info"}),o(n,{label:"Cancel",color:"info",outline:""})]),_:1})]),default:e(()=>[o(D,{title:"With title & icon"},{default:e(()=>[o(n,{icon:l(Y),color:"whiteDark","rounded-full":""},null,8,["icon"])]),_:1}),Sl]),_:1}),o(b,null,{footer:e(()=>[o(h,null,{default:e(()=>[o(n,{label:"Confirm",color:"info"}),o(n,{label:"Cancel",color:"info",outline:""})]),_:1})]),default:e(()=>[_(" Just body & footer ")]),_:1})]),o(Z,{icon:l(L),title:"Empty variation"},null,8,["icon"]),o(b,null,{default:e(()=>[o(sl)]),_:1})]),_:1})]),_:1}))}});const Il=R(Ol,[["__scopeId","data-v-9f2b6e1d"]]);export{Il as default};
