import{d as Ye,u as Pe,r as v,c as f,a as de,o as Le,g as ce,b as me,e as Ie,f as ne,w as q,h as Ue,i as w,j as F,k as u,l as n,m as i,_ as _e,n as h,p as Me,q as xe,t as I,F as te,s as Ce,v as T,x as Q,y as Fe,z as d,A as p,B as N,C as $e,D as Ae,E as Be,G as pe,H as Oe,I as Ne,J as Se,K as He,L as be,M as qe,N as je,O as Ge,P as Re,Q as Te,R as De,S as Ee,T as We,U as Ke,V as Je,W as ze,X as Qe,Y as J,Z as R,$ as Xe,a0 as re,a1 as Ze,a2 as ea,a3 as ue,a4 as z,a5 as aa,a6 as la,a7 as na,a8 as ta,a9 as da,aa as oa,ab as sa,ac as ia}from"./index.fa999ff2.js";import{_ as ra}from"./FormCheckRadioGroup.vue_vue_type_script_setup_true_lang.d06a262a.js";const ua={class:"modal-dialog modal-md relative w-auto pointer-events-none border-4 border-indigo-500/100"},ca={class:"modal-content border-none shadow-sm relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"},ma=u("div",{class:"modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"},[u("h5",{class:"text-xl font-medium leading-normal text-gray-800",id:"exampleModalLgLabel"}," Refer Patient "),u("button",{type:"button",class:"btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline","data-bs-dismiss":"modal","aria-label":"Close"})],-1),_a={class:"modal-body relative p-4"},ba={key:0,class:"p-3 bg-gray-100/50 dark:bg-slate-800"},pa={key:0},va=u("th",null,null,-1),fa=u("th",null,"Name",-1),ga=u("th",null,"Municipality",-1),ha=u("th",null,"Barangay",-1),ya=u("th",null,"Created",-1),wa=u("th",null,null,-1),Va={class:"border-b-0 lg:w-6 before:hidden"},ka={"data-label":"Name"},Ca={"data-label":"Company"},Ma={"data-label":"City"},xa={"data-label":"Created",class:"lg:w-1 whitespace-nowrap"},Da=["title"],Ya=u("br",null,null,-1),Pa={class:"text-gray-400 dark:text-slate-400"},La={class:"before:hidden lg:w-1 whitespace-nowrap"},Ua={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},Sa=Ye({__name:"TableClients",props:{checkable:Boolean,search_keyword:{type:String,default:null},form:{type:Object,default:null}},emits:["client-info"],setup($,{emit:E}){const X=$,D=Pe(),Y=v([]),_=v([]),Z=f(()=>Y.value),ee=v(!1),j=v(!1),C=v(10),M=v(0),a=v([]),A=de({client_id:0,client_name:""}),ve=f(()=>Z.value.slice(C.value*M.value,C.value*(M.value+1))),l=f(()=>Math.ceil(Z.value.length/C.value)),g=f(()=>M.value+1),W=f(()=>{const c=[];for(let r=0;r<l.value;r++)c.push(r);return c}),U=(c,r)=>{const b=[];return c.forEach(y=>{r(y)||b.push(y)}),b},S=(c,r)=>{c?a.value.push(r):a.value=U(a.value,b=>b.id===r.id)};de({name:"John Doe",email:"john.doe@example.com",phone:"",barangay:[{id:1,label:"Lahug"},{id:2,label:"Sambag II"},{id:3,label:"Day-as"}][0],subject:"",question:""});const V=v(0),P=v(0),G=v([]),x=v([]),oe=v(null),ae=v(null);Le(()=>{ge(),he(),fe(),oe.value=new Modal(ae.value)});const fe=async(c={})=>{if(!c.search){const b=await ce({userid:me().value});c={barangay_assignment:await Promise.all(b.map(async t=>t.id))}}const r=await Ie(c);Y.value=await Promise.all(r.map(async b=>({...b,fullname:b.firstname+" "+b.middlename+" "+b.lastname}))),_.value=Y.value},ge=async()=>{const c=await ce({userid:me().value});G.value=await Promise.all(c.map(async r=>({id:r.id,label:r.description})))},he=async()=>{const c=await ce({userid:me().value}),r=await Promise.all(c.map(async t=>t.id)),b=await ne(),y=await Promise.all(b.map(async t=>{if(!r.includes(t.id))return{id:t.id,label:t.description}}));x.value=y.filter(t=>typeof t=="object")},ye=async(c,r)=>{A.client_id=c,A.client_name=r,j.value=!0},K=async()=>{Y.value=Y.value.filter(c=>c.id!==A.client_id),await Be({id:A.client_id}),pe({group:"error",title:"Warning",text:A.client_name+" was successfully deleted"},2e3)},we=c=>{E("client-info",c)},le=f(()=>X.search_keyword);q(le,c=>{console.log("search keyword");let r=_.value.filter(b=>b.fullname.toLowerCase().includes(c.toLowerCase()));r.length>0?(Y.value=r,M.value=0):Y.value=[]});const Ve=f(()=>X.form);q(Ve,c=>{c.status=="updated"?Y.value.filter(r=>{r.id==c.id&&(r.firstname=c.firstname,r.middlename=c.middlename,r.lastname=c.lastname,r.client_barangay=c.client_barangay,r.muncity_description=c.muncity_description,r.fullname=c.firstname+" "+c.middlename+" "+c.lastname)}):Y.value.unshift(c)});const O=v(""),se=async()=>{var t;const c=G.value.filter(e=>e.id===V.value),r=x.value.filter(e=>e.id===P.value),b={Client:[ie.value.id],client_id:ie.value.id,code:p().format("YYYY")+"-"+D.userId+p().format("MMDDHHmmss")+String(Math.random()).substring(0,3).split(".").join(""),date_referred:p().format("YYYY-MM-DD HH:mm:ss"),referred_from:V.value,referred_from_address:c[0].label,referred_to:P.value,referred_to_address:r[0].label,referring_id:D.userId,referring_name:D.userFirstname+" "+D.userMiddlename+" "+D.userLastname,remarks:O.value,status:"referred",created_on:p().format("YYYY-MM-DD HH:mm:ss")},y=await Oe(b);b.Activity=[y.id],await Ne(b),(t=oe.value)==null||t.hide(),pe({group:"success",title:"success",text:"Client was successfully referred!"},2e3),O.value=""},ie=v({});return Ue(),(c,r)=>{const b=Se,y=He,t=be;return w(),F(te,null,[u("div",{class:"modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto","data-bs-backdrop":"static",ref_key:"el_refer_modal",ref:ae,id:"referModal","aria-labelledby":"exampleModalLgLabel","aria-modal":"true",role:"dialog"},[u("div",ua,[u("div",ca,[ma,u("div",_a,[n(t,{"is-form":"",onSubmit:Me(se,["prevent"])},{default:i(()=>[n(y,{label:"Referring Facility",class:"mt-6"},{default:i(()=>[n(b,{modelValue:V.value,"onUpdate:modelValue":r[0]||(r[0]=e=>V.value=e),options:G.value},null,8,["modelValue","options"])]),_:1}),n(y,{label:"Referred Facility",class:"mt-6"},{default:i(()=>[n(b,{modelValue:P.value,"onUpdate:modelValue":r[1]||(r[1]=e=>P.value=e),options:x.value},null,8,["modelValue","options"])]),_:1}),n(y,{label:"Remarks"},{default:i(()=>[n(b,{modelValue:O.value,"onUpdate:modelValue":r[2]||(r[2]=e=>O.value=e),type:"textarea"},null,8,["modelValue"])]),_:1}),n(_e,null,{default:i(()=>[n(h,{type:"submit",color:"success",label:"Refer"}),n(h,{type:"button",color:"info",outline:"",label:"Close","data-bs-dismiss":"modal"})]),_:1})]),_:1},8,["onSubmit"])])])])],512),n(xe,{modelValue:ee.value,"onUpdate:modelValue":r[6]||(r[6]=e=>ee.value=e),title:"Refer Client",button:"success","has-cancel":"","has-refer":"",onRefer:se},{default:i(()=>[n(y,{label:"Referring Facility",class:"mt-6"},{default:i(()=>[n(b,{modelValue:V.value,"onUpdate:modelValue":r[3]||(r[3]=e=>V.value=e),options:G.value},null,8,["modelValue","options"])]),_:1}),n(y,{label:"Referred Facility",class:"mt-6"},{default:i(()=>[n(b,{modelValue:P.value,"onUpdate:modelValue":r[4]||(r[4]=e=>P.value=e),options:x.value},null,8,["modelValue","options"])]),_:1}),n(y,{label:"Remarks"},{default:i(()=>[n(b,{modelValue:O.value,"onUpdate:modelValue":r[5]||(r[5]=e=>O.value=e),type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),n(xe,{modelValue:j.value,"onUpdate:modelValue":r[7]||(r[7]=e=>j.value=e),button:"danger","has-cancel":"","has-confirm":"",title:".",onConfirmDelete:K},{default:i(()=>[u("p",null,"Are you sure you want to delete "+I(A.client_name)+"?",1)]),_:1},8,["modelValue"]),a.value.length?(w(),F("div",ba,[(w(!0),F(te,null,Ce(a.value,e=>(w(),F("span",{key:e.id,class:"inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"},I(e.firstname+" "+e.middlename+" "+e.lastname),1))),128))])):T("",!0),u("table",null,[u("thead",null,[u("tr",null,[$.checkable?(w(),F("th",pa)):T("",!0),va,fa,ga,ha,ya,wa])]),u("tbody",null,[(w(!0),F(te,null,Ce(d(ve),e=>(w(),F("tr",{key:e.id},[$.checkable?(w(),Q(qe,{key:0,onChecked:s=>S(s,e)},null,8,["onChecked"])):T("",!0),u("td",Va,[n(Fe,{firstname:e.firstname+e.middlename+e.lastname,class:"w-24 h-24 mx-auto lg:w-6 lg:h-6"},null,8,["firstname"])]),u("td",ka,I(e.fullname),1),u("td",Ca,I(e.muncity_description),1),u("td",Ma,I(e.client_barangay),1),u("td",xa,[u("small",{class:"text-gray-500 dark:text-slate-400",title:e.created_on},I(d(p)(e.created_on).format("ll")),9,Da),Ya,u("small",Pa,I(d(p)(e.created_on).format("h:mm:ss a")),1)]),u("td",La,[n(_e,{type:"justify-start lg:justify-end","no-wrap":""},{default:i(()=>[n(h,{color:"info",icon:d(N),small:"","data-bs-toggle":"modal","data-bs-target":"#clientModal",onClick:s=>we(e.id)},null,8,["icon","onClick"]),n(h,{color:"danger",icon:d($e),small:"",onClick:s=>ye(e.id,e.firstname+" "+e.middlename+" "+e.lastname)},null,8,["icon","onClick"])]),_:2},1024)])]))),128))])]),u("div",Ua,[n(Ae,null,{default:i(()=>[n(_e,null,{default:i(()=>[(w(!0),F(te,null,Ce(d(W),e=>(w(),Q(h,{key:e,active:e===M.value,label:e+1,color:e===M.value?"lightDark":"whiteDark",small:"",onClick:s=>M.value=e},null,8,["active","label","color","onClick"]))),128))]),_:1}),u("small",null,"Page "+I(d(g))+" of "+I(d(l)),1)]),_:1})])],64)}}}),Ha=$=>(Ze("data-v-1edf4722"),$=$(),ea(),$),Ia={class:"modal-dialog modal-lg relative w-auto pointer-events-none"},Fa={class:"modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"},$a={class:"modal-body relative p-4"},Aa={class:"modal-dialog modal-md relative w-auto pointer-events-none border-4 border-indigo-500/100"},Ba={class:"modal-content border-none shadow-sm relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"},Oa=Ha(()=>u("div",{class:"modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"},[u("h5",{class:"text-xl font-medium leading-normal text-gray-800",id:"exampleModalLgLabel"}," Dose Schedule "),u("button",{type:"button",class:"btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),Na={class:"modal-body relative p-4"},qa=Ye({__name:"ClientView",emits:["loading-modal-open","loading-modal-close"],setup($,{emit:E}){const X=v(""),D=v([]),Y=v({}),_=Pe();f(()=>_.userFirstname+" "+_.userMiddlename+" "+_.userLastname),f(()=>_.history),f(()=>_.clients.slice(0,4));const Z=v(null),ee=v(null),j=v({}),C=v(""),M=v(!1),a=de({id:0,vaccine_id:"",firstname:"",middlename:"",lastname:"",birthdate:"",birthplace:"",sex:"",client_address:0,muncity_id:je().value,muncity_description:Ge().value,client_barangay:"",guardian_name:"",guardian_contact_number:"",guardian_alternate_number:"",guardian_address:0,guardian_barangay:"",bhw_name:"",bhw_contact_number:"",bhw_address:0,bhw_barangay:"",health_provider_name:"",health_provider_contact:"",health_provider_address:0,health_provider_barangay:"",remarks:"",is_active:!0,created_by:0,created_on:"",updated_on:""});Le(()=>{p().format("Y-MM-DD"),A(),ve(),Z.value=new Modal(ee.value)});const A=async()=>{const t=await ce({userid:me().value});D.value=await Promise.all(t.map(async e=>({id:e.id,label:e.description})))},ve=async()=>{const t=await Re();Y.value={id:t.id,label:t.description}},l=de({client_id:0,vaccine_type:"",given_1:"",given_2:"",given_3:"",given_administerred_1:"",given_administerred_2:"",given_administerred_3:"",scheduled_1:"",scheduled_2:"",scheduled_3:"",scheduled_administerred_1:"",scheduled_administerred_2:"",scheduled_administerred_3:"",status1:"",status2:"",status3:"",button_type1:"",button_type2:"",button_type3:"",updated_on:""}),g=de({bcg:"default",hepb:"default",pentavalent:"default",opv:"default",ipv:"default",pcv:"default",mcv:"default"}),W=v([]),U=f(()=>W.value.indexOf("outline")>-1),S=f(()=>W.value.indexOf("small")>-1),B=f(()=>W.value.indexOf("disabled")>-1),V=f(()=>W.value.indexOf("rounded")>-1),P=v(null),G=v(null),x=async t=>{var s;fe();const e=await ue({client_id:a.id,vaccine_type:t,status:1});if(console.log(e),l.client_id=a.id,l.vaccine_type=t,e.length>0){E("loading-modal-open"),C.value="Update",l.scheduled_1=e[0].scheduled_1,l.scheduled_2=e[0].scheduled_2,l.scheduled_3=e[0].scheduled_3;const m=await z({id:e[0].scheduled_administerred_1});l.scheduled_administerred_1=m.fname+" "+m.mname+" "+m.lname;const H=await z({id:e[0].scheduled_administerred_2});l.scheduled_administerred_2=H.fname+" "+H.mname+" "+H.lname;const k=await z({id:e[0].scheduled_administerred_3});l.scheduled_administerred_3=k.fname+" "+k.mname+" "+k.lname,l.given_1=e[0].given_1,l.given_2=e[0].given_2,l.given_3=e[0].given_3;const L=await z({id:e[0].given_administerred_1});l.given_administerred_1=L.fname+" "+L.mname+" "+L.lname;const o=await z({id:e[0].given_administerred_2});l.given_administerred_2=o.fname+" "+o.mname+" "+o.lname;const ke=await z({id:e[0].given_administerred_3});l.given_administerred_3=ke.fname+" "+ke.mname+" "+ke.lname,l.status1=e[0].status1,l.status2=e[0].status2,l.status3=e[0].status3,l.button_type1=e[0].button_type1,l.button_type2=e[0].button_type2,l.button_type3=e[0].button_type3,E("loading-modal-close")}else C.value="Submit";l.updated_on=p().format("YYYY-MM-DD HH:mm:ss"),P.value=new Modal(G.value),(s=P.value)==null||s.show()},oe=async()=>{var L;E("loading-modal-open");const t=await ne({barangay_id:a.client_address});a.client_barangay=t.description;const e=await ne({barangay_id:a.guardian_address});a.guardian_barangay=e.description;const s=await ne({barangay_id:a.bhw_address});a.bhw_barangay=s.description;const m=await ne({barangay_id:a.health_provider_address});a.health_provider_barangay=m.description,a.created_by=_.userId;let H="",k="";if(a.id)H="Client was successfully updated!",a.updated_on=p().format("YYYY-MM-DD HH:mm:ss"),await aa(a),k="updated";else{H="Client was successfully added!",a.created_on=p().format("YYYY-MM-DD HH:mm:ss");const o=await la(a);a.id=o.id,k="created"}j.value={id:a.id,firstname:a.firstname,middlename:a.middlename,lastname:a.lastname,fullname:a.firstname+" "+a.middlename+" "+a.lastname,client_barangay:a.client_barangay,status:k,client_address:a.client_address,muncity_description:a.muncity_description},console.log(j.value),ae(),(L=Z.value)==null||L.hide(),E("loading-modal-close"),pe({group:"success",title:"Success",text:H},2e3)},ae=async(t="")=>{a.vaccine_id="LLC # "+_.userId+"-"+p().format("YYYYMMDDHHmmss")+String(Math.random()).substring(0,3).split(".").join(""),a.id=0,t!="create"&&(a.vaccine_id=""),a.firstname="",a.middlename="",a.lastname="",a.birthdate="",a.birthplace="",a.sex="",a.client_address=0,a.client_barangay="",a.guardian_name="",a.guardian_contact_number="",a.guardian_alternate_number="",a.guardian_address=0,a.guardian_barangay="",a.bhw_name="",a.bhw_contact_number="",a.bhw_address=0,a.bhw_barangay="",a.health_provider_name="",a.health_provider_contact="",a.health_provider_address=0,a.health_provider_barangay="",a.remarks="",a.is_active=!0,a.created_by=0,a.created_on="",a.updated_on=""},fe=async()=>{l.given_1="",l.given_2="",l.given_3="",l.given_administerred_1="",l.given_administerred_2="",l.given_administerred_3="",l.scheduled_1="",l.scheduled_2="",l.scheduled_3="",l.scheduled_administerred_1="",l.scheduled_administerred_2="",l.scheduled_administerred_3="",l.status1="",l.status2="",l.status3="",l.button_type1="",l.button_type2="",l.button_type3=""},ge=async()=>{var s;(s=P.value)==null||s.hide();const t={client_id:l.client_id,vaccine_type:l.vaccine_type,scheduled_administerred_1:l.scheduled_1?_.userId:0,scheduled_administerred_2:l.scheduled_2?_.userId:0,scheduled_administerred_3:l.scheduled_3!=""?_.userId:0,given_administerred_1:l.given_1||l.given_administerred_1!=""?_.userId:0,given_administerred_2:l.given_2||l.given_administerred_2!=""?_.userId:0,given_administerred_3:l.given_3||l.given_administerred_3!=""?_.userId:0,updated_on:p(l.updated_on).format("YYYY-MM-DD HH:mm:ss"),Client:[l.client_id]};t.scheduled_1=l.scheduled_1?p(l.scheduled_1).format("YYYY-MM-DD"):null,t.scheduled_2=l.scheduled_2?p(l.scheduled_2).format("YYYY-MM-DD"):null,t.scheduled_3=l.scheduled_3?p(l.scheduled_3).format("YYYY-MM-DD"):null,t.given_1=l.given_1?p(l.given_1).format("YYYY-MM-DD"):null,t.given_2=l.given_2?p(l.given_2).format("YYYY-MM-DD"):null,t.given_3=l.given_3?p(l.given_3).format("YYYY-MM-DD"):null,t.created_on=p().format("YYYY-MM-DD HH:mm:ss"),console.log(t),console.log(C.value),C.value=="Update"?await na(t):await ta(t),g[l.vaccine_type]=await Promise.resolve(K(a.id,l.vaccine_type));let e="";e=`Congratulations!

`,e+="Baby "+a.firstname+" "+a.middlename+" "+a.lastname,l.vaccine_type=="bcg"?(e+=" is scheduled for BCG Vaccination on",e+=" "+p(t.scheduled_1).format("LL")+".",e+=` Please come on your schedule and bring the vaccination card when you visit the Health Center.

`,e+=`Ang bakuna nga BCG maga protekta sa mga bata batok sa sakit nga Tuberculosis o TB. Importante nga ang bata mabakunahan sa tukmang schedule arun siya ma depensahan batok sa maong sakit.

`):l.vaccine_type=="hepb"?(e+=" is scheduled for HEPA B Vaccination on",e+=" "+p(t.scheduled_1).format("LL")+".",e+=` Please come on your schedule and bring the vaccination card when you visit the Health Center.

`,e+=`

`):l.vaccine_type=="pentavalent"?(e+=" is scheduled for PENTAVALENT Vaccination on",e+=" "+p(t.scheduled_1).format("LL")+".",e+=` Please come on your schedule and bring the vaccination card when you visit the Health Center.

`,e+=`Ang Pentavalent Vaccine maga protektar sa bata batok sa sakit nga Diptheria, Tetanus, Hepa B, Pertussis, Pneumonia ug Meningitis.

`,e+=`Importante nga ang bata mabakunahan sa tukmang schedule ug makompleto ang 3 ka dose sa bakuna arun siya ma depensahan batok sa maong mga sakit.

`):l.vaccine_type=="opv"?(e+=" is scheduled for OPV Vaccination on",e+=" "+p(t.scheduled_1).format("LL")+".",e+=` Please come on your schedule and bring the vaccination card when you visit the Health Center.

`,e+=`Ang bakuna nga OPV kon Oral Polio Vaccine maga protektar sa bata batok sa sakit nga Polio.

`,e+=`Importante nga ang bata mabakunahan sa tukmang schedule ug makompleto ang 3 ka dose sa bakuna arun siya ma depensahan batok sa maong mga sakit.

`):l.vaccine_type=="ipv"?(e+=" is scheduled for IPV Vaccination on",e+=" "+p(t.scheduled_1).format("LL")+".",e+=` Please come on your schedule and bring the vaccination card when you visit the Health Center.

`,e+=`

`):l.vaccine_type=="pcv"?(e+=" is scheduled for PCV Vaccination on",e+=" "+p(t.scheduled_1).format("LL")+".",e+=` Please come on your schedule and bring the vaccination card when you visit the Health Center.

`,e+=`Ang bakuna nga PCV kon Pneumococcal Conjugate Vaccine maga protektar sa bata batok sa sakit nga Pneumonia ug Meningitis.

`,e+=`Importante nga ang bata mabakunahan sa tukmang schedule ug makompleto ang 3 ka dose sa bakuna arun siya ma depensahan batok sa maong mga sakit.

`):l.vaccine_type=="mcv"&&(e+=" is scheduled for MCV Vaccination on",e+=" "+p(t.scheduled_1).format("LL")+".",e+=` Please come on your schedule and bring the vaccination card when you visit the Health Center.

`,e+=`

`),e+="Ang bakuna luwas ug epektibo. Ang BAKUNADO ay PROTEKTADO!",da(a.bhw_contact_number+"@"+a.guardian_contact_number+"@"+e),pe({group:"success_dose",title:"Success",text:"Vaccine info was successfully updated!"},2e3)},he=async t=>{M.value=!0,ye(t)},ye=async t=>{C.value="Update";const e=await oa({id:t});console.log(e),a.id=e.id,a.bhw_address=e.bhw_address,a.bhw_contact_number=e.bhw_contact_number,a.bhw_name=e.bhw_name,a.birthdate=e.birthdate,a.birthplace=e.birthplace,a.client_address=e.client_address,a.client_barangay=e.client_barangay,a.created_by=e.created_by,a.guardian_address=e.guardian_address,a.guardian_barangay=e.guardian_barangay,a.guardian_alternate_number=e.guardian_alternate_number,a.guardian_contact_number=e.guardian_contact_number,a.guardian_name=e.guardian_name,a.health_provider_address=e.health_provider_address,a.health_provider_barangay=e.health_provider_barangay,a.health_provider_contact=e.health_provider_contact,a.health_provider_name=e.health_provider_name,a.remarks=e.remarks,a.is_active=e.is_active,a.firstname=e.firstname,a.lastname=e.lastname,a.middlename=e.middlename,a.sex=e.sex,a.vaccine_id=e.vaccine_id,a.created_on=e.created_on,a.updated_on=e.updated_on,g.pentavalent=await Promise.resolve(K(a.id,"pentavalent")),g.opv=await Promise.resolve(K(a.id,"opv")),g.pcv=await Promise.resolve(K(a.id,"pcv")),g.mcv=await Promise.resolve(we(a.id,"mcv")),g.bcg=await Promise.resolve(le(a.id,"bcg")),g.hepb=await Promise.resolve(le(a.id,"hepb")),g.ipv=await Promise.resolve(le(a.id,"ipv")),console.log(g)},K=async(t,e)=>{const s=await ue({client_id:t,vaccine_type:e,status:1});if(s.length>0){if(s[0].scheduled_3!="")return s[0].button_type3;if(s[0].scheduled_2!="")return s[0].button_type2;if(s[0].scheduled_1!="")return s[0].button_type1}else return""},we=async(t,e)=>{const s=await ue({client_id:t,vaccine_type:e,status:1});if(s.length>0){if(s[0].scheduled_2!="")return s[0].button_type2;if(s[0].scheduled_1!="")return s[0].button_type1}else return""},le=async(t,e)=>{const s=await ue({client_id:t,vaccine_type:e,status:1});if(s.length>0){if(s[0].scheduled_1!="")return s[0].button_type1}else return""},Ve=async t=>{X.value=t},O=()=>{C.value="Submit",M.value=!1,ae("create")},se=f(()=>l.given_1);q(se,t=>{console.log(t),l.given_administerred_1=_.userFirstname+" "+_.userMiddlename+" "+_.userLastname});const ie=f(()=>l.given_2);q(ie,t=>{console.log(t),l.given_administerred_2=_.userFirstname+" "+_.userMiddlename+" "+_.userLastname});const c=f(()=>l.given_3);q(c,t=>{console.log(t),l.given_administerred_3=_.userFirstname+" "+_.userMiddlename+" "+_.userLastname});const r=f(()=>l.scheduled_1);q(r,t=>{console.log(t),l.scheduled_administerred_1=_.userFirstname+" "+_.userMiddlename+" "+_.userLastname});const b=f(()=>l.scheduled_2);q(b,t=>{console.log(t),l.scheduled_administerred_2=_.userFirstname+" "+_.userMiddlename+" "+_.userLastname});const y=f(()=>l.scheduled_3);return q(y,t=>{console.log(t),l.scheduled_administerred_3=_.userFirstname+" "+_.userMiddlename+" "+_.userLastname}),Ue(),(t,e)=>{const s=Se,m=He,H=ra,k=sa,L=_e;return w(),F(te,null,[n(Te,{onSearchClient:Ve},{default:i(()=>[n(Ee,null,{default:i(()=>[n(De,{icon:d(We),title:"Clients for new born baby",main:""},{default:i(()=>[n(h,{onClick:O,type:"button",color:"info",label:"Create",icon:d(Ke),"data-bs-toggle":"modal","data-bs-target":"#clientModal"},null,8,["icon"])]),_:1},8,["icon"]),n(be,{class:"mb-6","has-table":""},{default:i(()=>[n(Sa,{onClientInfo:he,search_keyword:X.value,form:j.value,checkable:""},null,8,["search_keyword","form"])]),_:1})]),_:1})]),_:1}),u("div",{class:"modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto",ref_key:"el_client_modal",ref:ee,id:"clientModal","data-bs-backdrop":"static","aria-labelledby":"exampleModalLgLabel","aria-modal":"true",role:"dialog"},[u("div",Ia,[u("div",Fa,[u("div",$a,[n(De,{icon:d(Je),title:"Client Info",main:""},null,8,["icon"]),n(ze),n(be,{"is-form":"",onSubmit:Me(oe,["prevent"])},{default:i(()=>[n(m,{label:"Personal Information",class:"text-xl"},{default:i(()=>[n(m,{label:"Vaccine Card Number ID",class:"text-sm"},{default:i(()=>[n(s,{modelValue:a.vaccine_id,"onUpdate:modelValue":e[0]||(e[0]=o=>a.vaccine_id=o),icon:d(Qe),readonly:!0},null,8,["modelValue","icon"])]),_:1}),n(s,{modelValue:a.firstname,"onUpdate:modelValue":e[1]||(e[1]=o=>a.firstname=o),icon:d(J),class:"mt-7",placeholder:"Firstname",required:""},null,8,["modelValue","icon"])]),_:1}),n(m,null,{default:i(()=>[n(s,{modelValue:a.middlename,"onUpdate:modelValue":e[2]||(e[2]=o=>a.middlename=o),icon:d(J),placeholder:"Middlename",required:""},null,8,["modelValue","icon"]),n(s,{modelValue:a.lastname,"onUpdate:modelValue":e[3]||(e[3]=o=>a.lastname=o),icon:d(J),placeholder:"Lastname",required:""},null,8,["modelValue","icon"])]),_:1}),n(m,null,{default:i(()=>[n(m,{label:"Birthdate"},{default:i(()=>[n(s,{modelValue:a.birthdate,"onUpdate:modelValue":e[4]||(e[4]=o=>a.birthdate=o),type:"date",icon:d(R),required:""},null,8,["modelValue","icon"])]),_:1}),n(s,{modelValue:a.birthplace,"onUpdate:modelValue":e[5]||(e[5]=o=>a.birthplace=o),icon:d(Xe),class:"mt-8",placeholder:"Birthplace",required:""},null,8,["modelValue","icon"])]),_:1}),n(m,{label:"Sex"},{default:i(()=>[n(H,{modelValue:a.sex,"onUpdate:modelValue":e[6]||(e[6]=o=>a.sex=o),name:"sex",type:"radio",options:{male:"Male",female:"Female"}},null,8,["modelValue"])]),_:1}),n(m,{label:"Client Address"},{default:i(()=>[n(s,{modelValue:a.client_address,"onUpdate:modelValue":e[7]||(e[7]=o=>a.client_address=o),options:D.value},null,8,["modelValue","options"])]),_:1}),n(k),n(m,{label:"Name of Parents / Guardian"},{default:i(()=>[n(s,{modelValue:a.guardian_name,"onUpdate:modelValue":e[8]||(e[8]=o=>a.guardian_name=o),icon:d(J),placeholder:"Firstname Middlename Lastname",required:""},null,8,["modelValue","icon"])]),_:1}),n(m,null,{default:i(()=>[n(s,{modelValue:a.guardian_contact_number,"onUpdate:modelValue":e[9]||(e[9]=o=>a.guardian_contact_number=o),icon:d(re),placeholder:"Contact Number",required:""},null,8,["modelValue","icon"]),n(s,{modelValue:a.guardian_alternate_number,"onUpdate:modelValue":e[10]||(e[10]=o=>a.guardian_alternate_number=o),icon:d(re),placeholder:"Alternate Number",required:""},null,8,["modelValue","icon"])]),_:1}),n(m,{label:"Parent/Guardian Address"},{default:i(()=>[n(s,{modelValue:a.guardian_address,"onUpdate:modelValue":e[11]||(e[11]=o=>a.guardian_address=o),options:D.value,required:""},null,8,["modelValue","options"])]),_:1}),n(k),n(m,{label:"Name of BHW"},{default:i(()=>[n(s,{modelValue:a.bhw_name,"onUpdate:modelValue":e[12]||(e[12]=o=>a.bhw_name=o),icon:d(J),placeholder:"Firstname Middlename Lastname",required:""},null,8,["modelValue","icon"])]),_:1}),n(m,null,{default:i(()=>[n(m,{label:"BHW contact number"},{default:i(()=>[n(s,{modelValue:a.bhw_contact_number,"onUpdate:modelValue":e[13]||(e[13]=o=>a.bhw_contact_number=o),icon:d(re),placeholder:"Contact Number",required:""},null,8,["modelValue","icon"])]),_:1}),n(m,{label:"BHW Address"},{default:i(()=>[n(s,{modelValue:a.bhw_address,"onUpdate:modelValue":e[14]||(e[14]=o=>a.bhw_address=o),options:D.value,required:""},null,8,["modelValue","options"])]),_:1})]),_:1}),n(k),n(m,{label:"Name of Health Provider"},{default:i(()=>[n(s,{modelValue:a.health_provider_name,"onUpdate:modelValue":e[15]||(e[15]=o=>a.health_provider_name=o),icon:d(J),placeholder:"Firstname Middlename Lastname"},null,8,["modelValue","icon"])]),_:1}),n(m,null,{default:i(()=>[n(m,{label:"Health Provider Contact Number"},{default:i(()=>[n(s,{modelValue:a.health_provider_contact,"onUpdate:modelValue":e[16]||(e[16]=o=>a.health_provider_contact=o),icon:d(re),placeholder:"Contact Number"},null,8,["modelValue","icon"])]),_:1}),n(m,{label:"Health Provider Address"},{default:i(()=>[n(s,{modelValue:a.health_provider_address,"onUpdate:modelValue":e[17]||(e[17]=o=>a.health_provider_address=o),options:D.value},null,8,["modelValue","options"])]),_:1})]),_:1}),n(m,{label:"Remarks"},{default:i(()=>[n(s,{modelValue:a.remarks,"onUpdate:modelValue":e[18]||(e[18]=o=>a.remarks=o),type:"textarea",required:""},null,8,["modelValue"])]),_:1}),M.value?(w(),Q(k,{key:0})):T("",!0),M.value?(w(),Q(m,{key:1,label:"Vaccine Type"},{default:i(()=>[n(L,null,{default:i(()=>[n(h,{color:g.bcg,label:"BCG",icon:d(N),small:d(S),outline:d(U),disabled:d(B),"rounded-full":d(V),onClick:e[19]||(e[19]=o=>x("bcg"))},null,8,["color","icon","small","outline","disabled","rounded-full"]),n(h,{color:g.hepb,label:"HepB",icon:d(N),small:d(S),outline:d(U),disabled:d(B),"rounded-full":d(V),onClick:e[20]||(e[20]=o=>x("hepb"))},null,8,["color","icon","small","outline","disabled","rounded-full"]),n(h,{color:g.pentavalent,label:"Pentavalent",icon:d(N),small:d(S),outline:d(U),disabled:d(B),"rounded-full":d(V),onClick:e[21]||(e[21]=o=>x("pentavalent"))},null,8,["color","icon","small","outline","disabled","rounded-full"]),n(h,{color:g.opv,label:"OPV",icon:d(N),small:d(S),outline:d(U),disabled:d(B),"rounded-full":d(V),onClick:e[22]||(e[22]=o=>x("opv"))},null,8,["color","icon","small","outline","disabled","rounded-full"]),n(h,{color:g.ipv,label:"IPV",icon:d(N),small:d(S),outline:d(U),disabled:d(B),"rounded-full":d(V),onClick:e[23]||(e[23]=o=>x("ipv"))},null,8,["color","icon","small","outline","disabled","rounded-full"]),n(h,{color:g.pcv,label:"PCV",icon:d(N),small:d(S),outline:d(U),disabled:d(B),"rounded-full":d(V),onClick:e[24]||(e[24]=o=>x("pcv"))},null,8,["color","icon","small","outline","disabled","rounded-full"]),n(h,{color:g.mcv,label:"MCV",icon:d(N),small:d(S),outline:d(U),disabled:d(B),"rounded-full":d(V),onClick:e[25]||(e[25]=o=>x("mcv"))},null,8,["color","icon","small","outline","disabled","rounded-full"])]),_:1})]),_:1})):T("",!0),n(k),n(L,null,{default:i(()=>[n(h,{type:"submit",color:"info",label:C.value},null,8,["label"]),n(h,{type:"button",color:"info",outline:"",label:"Close","data-bs-dismiss":"modal","aria-label":"Close"})]),_:1})]),_:1},8,["onSubmit"])])])])],512),u("div",{class:"modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto",id:"vaccineeModal","data-bs-backdrop":"static",ref_key:"el_dose_modal",ref:G,"aria-labelledby":"exampleModalLgLabel","aria-modal":"true",role:"dialog"},[u("div",Aa,[u("div",Ba,[Oa,u("div",Na,[n(be,{"is-form":"",onSubmit:Me(ge,["prevent"])},{default:i(()=>[n(m,{label:"1st Dose",status:l.status1,button_type:l.button_type1},{default:i(()=>[n(m,{label:"Date Scheduled",help:l.scheduled_1?l.scheduled_administerred_1:""},{default:i(()=>[n(s,{id:"dt1",modelValue:l.scheduled_1,"onUpdate:modelValue":e[26]||(e[26]=o=>l.scheduled_1=o),type:"date",icon:d(R),placeholder:"Date Scheduled"},null,8,["modelValue","icon"])]),_:1},8,["help"]),n(m,{label:"Date Given",help:l.given_1?l.given_administerred_1:""},{default:i(()=>[n(s,{id:"dt2",modelValue:l.given_1,"onUpdate:modelValue":e[27]||(e[27]=o=>l.given_1=o),type:"date",icon:d(R),placeholder:"Date Given"},null,8,["modelValue","icon"])]),_:1},8,["help"])]),_:1},8,["status","button_type"]),l.vaccine_type=="mcv"||l.vaccine_type=="pentavalent"||l.vaccine_type=="opv"||l.vaccine_type=="pcv"?(w(),Q(m,{key:0,label:"2nd Dose",status:l.status2,button_type:l.button_type2},{default:i(()=>[n(m,{label:"Date Scheduled",help:l.scheduled_2?l.scheduled_administerred_2:""},{default:i(()=>[n(s,{id:"dt3",modelValue:l.scheduled_2,"onUpdate:modelValue":e[28]||(e[28]=o=>l.scheduled_2=o),type:"date",icon:d(R),placeholder:"Date Scheduled"},null,8,["modelValue","icon"])]),_:1},8,["help"]),n(m,{label:"Date Given",help:l.given_2?l.given_administerred_2:""},{default:i(()=>[n(s,{id:"dt4",modelValue:l.given_2,"onUpdate:modelValue":e[29]||(e[29]=o=>l.given_2=o),type:"date",icon:d(R),placeholder:"Date Given"},null,8,["modelValue","icon"])]),_:1},8,["help"])]),_:1},8,["status","button_type"])):T("",!0),l.vaccine_type=="pentavalent"||l.vaccine_type=="opv"||l.vaccine_type=="pcv"?(w(),Q(m,{key:1,label:"3rd Dose",status:l.status3,button_type:l.button_type3},{default:i(()=>[n(m,{label:"Date Scheduled",help:l.scheduled_3?l.scheduled_administerred_3:""},{default:i(()=>[n(s,{id:"dt5",modelValue:l.scheduled_3,"onUpdate:modelValue":e[30]||(e[30]=o=>l.scheduled_3=o),type:"date",icon:d(R),placeholder:"Date Scheduled"},null,8,["modelValue","icon"])]),_:1},8,["help"]),n(m,{label:"Date Given",help:l.given_3?l.given_administerred_3:""},{default:i(()=>[n(s,{id:"dt6",modelValue:l.given_3,"onUpdate:modelValue":e[31]||(e[31]=o=>l.given_3=o),type:"date",icon:d(R),placeholder:"Date Given"},null,8,["modelValue","icon"])]),_:1},8,["help"])]),_:1},8,["status","button_type"])):T("",!0),n(L,null,{default:i(()=>[n(h,{type:"submit",color:"info",label:C.value},null,8,["label"]),n(h,{type:"button",color:"info",outline:"",label:"Close","data-bs-dismiss":"modal","aria-label":"Close"})]),_:1})]),_:1},8,["onSubmit"])])])])],512)],64)}}});const Ra=ia(qa,[["__scopeId","data-v-1edf4722"]]);export{Ra as default};
