import{d as He,u as Oe,r as g,c as h,a as ie,o as Se,g as fe,b as ge,e as Ne,f as de,w as R,h as y,i as H,j as c,k as t,l as i,_ as ee,m as w,n as Ae,p as Le,t as I,F as oe,q as Pe,s as X,v as d,x as f,y as T,z as Te,A as Z,B as Be,C as Re,D as Ee,E as Ge,G as je,H as qe,I as he,J as Ke,K as We,L as Ie,M as $e,N as pe,O as Je,P as ze,Q as Qe,R as Xe,S as Ue,T as Ze,U as ea,V as aa,W as na,X as la,Y as ta,Z as da,$ as oa,a0 as ia,a1 as z,a2 as q,a3 as sa,a4 as me,a5 as ra,a6 as ua,a7 as be,a8 as Q,a9 as ca,aa as _a,ab as ma,ac as ba,ad as D,ae as fa,af as ga,ag as pa}from"./index.f94705c9.js";import{_ as ha}from"./FormCheckRadioGroup.vue_vue_type_script_setup_true_lang.6eb5b58e.js";const va={class:"modal-dialog modal-md relative w-auto pointer-events-none border-4 border-indigo-500/100"},ya={class:"modal-content border-none shadow-sm relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"},wa=c("div",{class:"modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"},[c("h5",{class:"text-xl font-medium leading-normal text-gray-800",id:"exampleModalLgLabel"}," Refer Patient "),c("button",{type:"button",class:"btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Va={class:"modal-body relative p-4"},ka={key:0,class:"p-3 bg-gray-100/50 dark:bg-slate-800"},Ca={key:1},xa=c("thead",null,[c("tr",null,[c("th",null,"Name"),c("th",null,"Municipality"),c("th",null,"Barangay"),c("th",null,"Created"),c("th")])],-1),Da={"data-label":"Name"},Ma={"data-label":"Company"},Pa={"data-label":"City"},Aa={"data-label":"Created",class:"lg:w-1 whitespace-nowrap"},Ya=["title"],La=c("br",null,null,-1),Ua={class:"text-gray-400 dark:text-slate-400"},Ha={class:"before:hidden lg:w-1 whitespace-nowrap"},Oa=c("b",null,"Info state",-1),Sa={key:3,class:"flex flex-row mt-2 p-10"},Ba=["src"],Ia=c("p",{class:"text-xl ml-2"},"Processing...",-1),$a={key:4,class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},Fa=He({__name:"TableClients",props:{checkable:Boolean,search_keyword:{type:String,default:null},form:{type:Object,default:null}},emits:["client-info","client-data"],setup(K,{emit:B}){const W=K,U=Oe(),k=g([]),m=g([]),ae=h(()=>k.value),ne=g(!1),E=g(!1),A=g(10),Y=g(0),a=g([]),$=ie({client_id:0,client_name:""}),se=h(()=>ae.value.slice(A.value*Y.value,A.value*(Y.value+1))),l=h(()=>Math.ceil(ae.value.length/A.value)),v=h(()=>Y.value+1),J=h(()=>{const _=[];for(let r=0;r<l.value;r++)_.push(r);return _});ie({name:"John Doe",email:"john.doe@example.com",phone:"",barangay:[{id:1,label:"Lahug"},{id:2,label:"Sambag II"},{id:3,label:"Day-as"}][0],subject:"",question:""});const C=g(0),x=g(0),L=g([]),N=g([]),le=g(null),O=g(null);Se(()=>{re(),ye(),ve(),le.value=new Modal(O.value)});const ve=async(_={})=>{if(!_.search){const p=await fe({userid:ge().value});_={barangay_assignment:await Promise.all(p.map(async V=>V.id))}}const r=await Ne(_);k.value=await Promise.all(r.map(async p=>({...p,sex:p.sex.charAt(0).toUpperCase()+p.sex.slice(1),fullname:p.firstname+" "+p.middlename+" "+p.lastname}))),m.value=k.value,B("client-data",k.value)},re=async()=>{const _=await fe({userid:ge().value});L.value=await Promise.all(_.map(async r=>({id:r.id,label:r.description})))},ye=async()=>{const _=await fe({userid:ge().value}),r=await Promise.all(_.map(async V=>V.id)),p=await de(),M=await Promise.all(p.map(async V=>{if(!r.includes(V.id))return{id:V.id,label:V.description}}));N.value=M.filter(V=>typeof V=="object")},we=async(_,r)=>{$.client_id=_,$.client_name=r,E.value=!0},Ve=async()=>{k.value=k.value.filter(_=>_.id!==$.client_id),await qe({id:$.client_id}),he({group:"error",title:"Warning",text:$.client_name+" was successfully deleted"},2e3)},ke=_=>{B("client-info",_)},G=h(()=>W.search_keyword);R(G,_=>{console.log("search keyword");let r=m.value.filter(p=>p.fullname.toLowerCase().includes(_.toLowerCase()));r.length>0?(k.value=r,Y.value=0):k.value=[]});const Ce=h(()=>W.form);R(Ce,_=>{_.status=="updated"?k.value.filter(r=>{r.id==_.id&&(r.firstname=_.firstname,r.middlename=_.middlename,r.lastname=_.lastname,r.client_barangay=_.client_barangay,r.muncity_description=_.muncity_description,r.fullname=_.firstname+" "+_.middlename+" "+_.lastname)}):(k.value.unshift(_),W.search_keyword&&m.value.unshift(_))});const S=g(""),ue=async()=>{var V;const _=L.value.filter(s=>s.id===C.value),r=N.value.filter(s=>s.id===x.value),p={Client:[ce.value.id],client_id:ce.value.id,code:f().format("YYYY")+"-"+U.userId+f().format("MMDDHHmmss")+String(Math.random()).substring(0,3).split(".").join(""),date_referred:f().format("YYYY-MM-DD HH:mm:ss"),referred_from:C.value,referred_from_address:_[0].label,referred_to:x.value,referred_to_address:r[0].label,referring_id:U.userId,referring_name:U.userFirstname+" "+U.userMiddlename+" "+U.userLastname,remarks:S.value,status:"referred",created_on:f().format("YYYY-MM-DD HH:mm:ss")},M=await Ke(p);p.Activity=[M.id],await We(p),(V=le.value)==null||V.hide(),he({group:"success",title:"success",text:"Client was successfully referred!"},2e3),S.value=""},ce=g({}),xe=g([]),De=h(()=>xe.value.indexOf("outline")>-1);return(_,r)=>{const p=Ie,M=$e,V=pe;return y(),H(oe,null,[c("div",{class:"modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto","data-bs-backdrop":"static",ref_key:"el_refer_modal",ref:O,id:"referModal","aria-labelledby":"exampleModalLgLabel","aria-modal":"true",role:"dialog"},[c("div",va,[c("div",ya,[wa,c("div",Va,[t(V,{"is-form":"",onSubmit:Ae(ue,["prevent"])},{default:i(()=>[t(M,{label:"Referring Facility",class:"mt-6"},{default:i(()=>[t(p,{modelValue:C.value,"onUpdate:modelValue":r[0]||(r[0]=s=>C.value=s),options:L.value},null,8,["modelValue","options"])]),_:1}),t(M,{label:"Referred Facility",class:"mt-6"},{default:i(()=>[t(p,{modelValue:x.value,"onUpdate:modelValue":r[1]||(r[1]=s=>x.value=s),options:N.value},null,8,["modelValue","options"])]),_:1}),t(M,{label:"Remarks"},{default:i(()=>[t(p,{modelValue:S.value,"onUpdate:modelValue":r[2]||(r[2]=s=>S.value=s),type:"textarea"},null,8,["modelValue"])]),_:1}),t(ee,null,{default:i(()=>[t(w,{type:"submit",color:"success",label:"Refer"}),t(w,{type:"button",color:"info",outline:"",label:"Close","data-bs-dismiss":"modal"})]),_:1})]),_:1},8,["onSubmit"])])])])],512),t(Le,{modelValue:ne.value,"onUpdate:modelValue":r[6]||(r[6]=s=>ne.value=s),title:"Refer Client",button:"success","has-cancel":"","has-refer":"",onRefer:ue},{default:i(()=>[t(M,{label:"Referring Facility",class:"mt-6"},{default:i(()=>[t(p,{modelValue:C.value,"onUpdate:modelValue":r[3]||(r[3]=s=>C.value=s),options:L.value},null,8,["modelValue","options"])]),_:1}),t(M,{label:"Referred Facility",class:"mt-6"},{default:i(()=>[t(p,{modelValue:x.value,"onUpdate:modelValue":r[4]||(r[4]=s=>x.value=s),options:N.value},null,8,["modelValue","options"])]),_:1}),t(M,{label:"Remarks"},{default:i(()=>[t(p,{modelValue:S.value,"onUpdate:modelValue":r[5]||(r[5]=s=>S.value=s),type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),t(Le,{modelValue:E.value,"onUpdate:modelValue":r[7]||(r[7]=s=>E.value=s),button:"danger","has-cancel":"","has-confirm":"",title:".",onConfirmDelete:Ve},{default:i(()=>[c("p",null,"Are you sure you want to delete "+I($.client_name)+"?",1)]),_:1},8,["modelValue"]),a.value.length?(y(),H("div",ka,[(y(!0),H(oe,null,Pe(a.value,s=>(y(),H("span",{key:s.id,class:"inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"},I(s.firstname+" "+s.middlename+" "+s.lastname),1))),128))])):X("",!0),d(se).length>0?(y(),H("table",Ca,[xa,c("tbody",null,[(y(!0),H(oe,null,Pe(d(se),s=>(y(),H("tr",{key:s.id},[c("td",Da,I(s.fullname),1),c("td",Ma,I(s.muncity_description),1),c("td",Pa,I(s.client_barangay),1),c("td",Aa,[c("small",{class:"text-gray-500 dark:text-slate-400",title:s.created_on},I(d(f)(s.created_on).format("ll")),9,Ya),La,c("small",Ua,I(d(f)(s.created_on).format("h:mm:ss a")),1)]),c("td",Ha,[t(ee,{type:"justify-start lg:justify-end","no-wrap":""},{default:i(()=>[t(w,{color:"info",icon:d(T),small:"","data-bs-toggle":"modal","data-bs-target":"#clientModal",onClick:_e=>ke(s.id)},null,8,["icon","onClick"]),t(w,{color:"danger",icon:d(Te),small:"",onClick:_e=>we(s.id,s.firstname+" "+s.middlename+" "+s.lastname)},null,8,["icon","onClick"])]),_:2},1024)])]))),128))])])):k.value.length<=0&&d(G)?(y(),Z(Ee,{key:2,color:"info",icon:d(Re),outline:d(De)},{default:i(()=>[Oa,Be(". No client found! ")]),_:1},8,["icon","outline"])):(y(),H("div",Sa,[c("img",{src:d(Ge),alt:"loading_gif",class:"w-10 h-10"},null,8,Ba),Ia])),k.value.length>0?(y(),H("div",$a,[t(je,null,{default:i(()=>[t(ee,null,{default:i(()=>[(y(!0),H(oe,null,Pe(d(J),s=>(y(),Z(w,{key:s,active:s===Y.value,label:s+1,color:s===Y.value?"lightDark":"whiteDark",small:"",onClick:_e=>Y.value=s},null,8,["active","label","color","onClick"]))),128))]),_:1}),c("small",null,"Page "+I(d(v))+" of "+I(d(l)),1)]),_:1})])):X("",!0)],64)}}}),Na=K=>(ra("data-v-ffe97dff"),K=K(),ua(),K),Ta={class:"flex gap-4"},Ra={class:"md:block"},Ea={class:"modal-dialog modal-lg relative w-auto pointer-events-none"},Ga={class:"modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"},ja={class:"modal-body relative p-4"},qa={class:"modal-dialog modal-md relative w-auto pointer-events-none border-4 border-indigo-500/100"},Ka={class:"modal-content border-none shadow-sm relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"},Wa=Na(()=>c("div",{class:"modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"},[c("h5",{class:"text-xl font-medium leading-normal text-gray-800",id:"exampleModalLgLabel"}," Dose Schedule "),c("button",{type:"button",class:"btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),Ja={class:"modal-body relative p-4"},za=He({__name:"ClientView",emits:["loading-modal-open","loading-modal-close"],setup(K,{emit:B}){const W=g(""),U=g([]),k=g({}),m=Oe();h(()=>m.userFirstname+" "+m.userMiddlename+" "+m.userLastname),h(()=>m.history),h(()=>m.clients.slice(0,4));const ae=g(null),ne=g(null),E=g({}),A=g(""),Y=g(!1),a=ie({id:0,vaccine_id:"",firstname:"",middlename:"",lastname:"",birthdate:"",birthplace:"",sex:"",client_address:0,muncity_id:Je().value,muncity_description:ze().value,client_barangay:"",guardian_name:"",guardian_contact_number:"",guardian_alternate_number:"",guardian_address:0,guardian_barangay:"",bhw_name:"",bhw_contact_number:"",bhw_address:0,bhw_barangay:"",health_provider_name:"",health_provider_contact:"",health_provider_address:0,health_provider_barangay:"",remarks:"",is_active:!0,created_by:0,created_on:"",updated_on:""});Se(()=>{f().format("Y-MM-DD"),$(),se(),ae.value=new Modal(ne.value)});const $=async()=>{const u=await fe({userid:ge().value});U.value=await Promise.all(u.map(async e=>({id:e.id,label:e.description})))},se=async()=>{const u=await Qe();k.value={id:u.id,label:u.description}},l=ie({client_id:0,vaccine_type:"",given_1:"",given_2:"",given_3:"",given_administerred_1:"",given_administerred_2:"",given_administerred_3:"",scheduled_1:"",scheduled_2:"",scheduled_3:"",scheduled_administerred_1:"",scheduled_administerred_2:"",scheduled_administerred_3:"",status1:"",status2:"",status3:"",button_type1:"",button_type2:"",button_type3:"",updated_on:""}),v=ie({bcg:"default",hepb:"default",pentavalent:"default",opv:"default",ipv:"default",pcv:"default",mcv:"default"}),J=g([]),F=h(()=>J.value.indexOf("outline")>-1),C=h(()=>J.value.indexOf("small")>-1),x=h(()=>J.value.indexOf("disabled")>-1),L=h(()=>J.value.indexOf("rounded")>-1),N=g(null),le=g(null),O=async u=>{var e;try{ye();const n=await be({client_id:a.id,vaccine_type:u,status:1});if(console.log(n),l.client_id=a.id,l.vaccine_type=u,n.length>0){B("loading-modal-open"),A.value="Update",l.scheduled_1=n[0].scheduled_1,l.scheduled_2=n[0].scheduled_2,l.scheduled_3=n[0].scheduled_3;const b=await Q({id:n[0].scheduled_administerred_1});l.scheduled_administerred_1=b.fname+" "+b.mname+" "+b.lname;const j=await Q({id:n[0].scheduled_administerred_2});l.scheduled_administerred_2=j.fname+" "+j.mname+" "+j.lname;const P=await Q({id:n[0].scheduled_administerred_3});l.scheduled_administerred_3=P.fname+" "+P.mname+" "+P.lname,l.given_1=n[0].given_1,l.given_2=n[0].given_2,l.given_3=n[0].given_3;const o=await Q({id:n[0].given_administerred_1});l.given_administerred_1=o.fname+" "+o.mname+" "+o.lname;const te=await Q({id:n[0].given_administerred_2});l.given_administerred_2=te.fname+" "+te.mname+" "+te.lname;const Me=await Q({id:n[0].given_administerred_3});l.given_administerred_3=Me.fname+" "+Me.mname+" "+Me.lname,l.status1=n[0].status1,l.status2=n[0].status2,l.status3=n[0].status3,l.button_type1=n[0].button_type1,l.button_type2=n[0].button_type2,l.button_type3=n[0].button_type3,B("loading-modal-close")}else A.value="Submit";l.updated_on=f().format("YYYY-MM-DD HH:mm:ss"),N.value=new Modal(le.value),(e=N.value)==null||e.show()}catch(n){console.error(n),alert("There was something wrong, will restart your page."),window.location.reload()}},ve=async()=>{var u;try{B("loading-modal-open");const e=await de({barangay_id:a.client_address});a.client_barangay=e.description;const n=await de({barangay_id:a.guardian_address});a.guardian_barangay=n.description;const b=await de({barangay_id:a.bhw_address});a.bhw_barangay=b.description;const j=await de({barangay_id:a.health_provider_address});a.health_provider_barangay=j.description,a.created_by=m.userId;let P="",o="";if(a.id)P="Client was successfully updated!",a.updated_on=f().format("YYYY-MM-DD HH:mm:ss"),await ca(a),o="updated";else{P="Client was successfully added!",a.created_on=f().format("YYYY-MM-DD HH:mm:ss");const te=await _a(a);a.id=te.id,o="created"}E.value={id:a.id,firstname:a.firstname,middlename:a.middlename,lastname:a.lastname,fullname:a.firstname+" "+a.middlename+" "+a.lastname,client_barangay:a.client_barangay,status:o,client_address:a.client_address,muncity_description:a.muncity_description},console.log(E.value),re(),(u=ae.value)==null||u.hide(),B("loading-modal-close"),he({group:"success",title:"Success",text:P},2e3)}catch(e){console.error(e),alert("There was something wrong, will restart your page."),window.location.reload()}},re=async(u="")=>{a.vaccine_id="LLC # "+m.userId+"-"+f().format("YYYYMMDDHHmmss")+String(Math.random()).substring(0,3).split(".").join(""),a.id=0,u!="create"&&(a.vaccine_id=""),a.firstname="",a.middlename="",a.lastname="",a.birthdate="",a.birthplace="",a.sex="",a.client_address=0,a.client_barangay="",a.guardian_name="",a.guardian_contact_number="",a.guardian_alternate_number="",a.guardian_address=0,a.guardian_barangay="",a.bhw_name="",a.bhw_contact_number="",a.bhw_address=0,a.bhw_barangay="",a.health_provider_name="",a.health_provider_contact="",a.health_provider_address=0,a.health_provider_barangay="",a.remarks="",a.is_active=!0,a.created_by=0,a.created_on="",a.updated_on=""},ye=async()=>{l.given_1="",l.given_2="",l.given_3="",l.given_administerred_1="",l.given_administerred_2="",l.given_administerred_3="",l.scheduled_1="",l.scheduled_2="",l.scheduled_3="",l.scheduled_administerred_1="",l.scheduled_administerred_2="",l.scheduled_administerred_3="",l.status1="",l.status2="",l.status3="",l.button_type1="",l.button_type2="",l.button_type3=""},we=async()=>{var u;try{(u=N.value)==null||u.hide();const e={client_id:l.client_id,vaccine_type:l.vaccine_type,scheduled_administerred_1:l.scheduled_1?m.userId:0,scheduled_administerred_2:l.scheduled_2?m.userId:0,scheduled_administerred_3:l.scheduled_3!=""?m.userId:0,given_administerred_1:l.given_1||l.given_administerred_1!=""?m.userId:0,given_administerred_2:l.given_2||l.given_administerred_2!=""?m.userId:0,given_administerred_3:l.given_3||l.given_administerred_3!=""?m.userId:0,updated_on:f(l.updated_on).format("YYYY-MM-DD HH:mm:ss"),Client:[l.client_id]};e.scheduled_1=l.scheduled_1?f(l.scheduled_1).format("YYYY-MM-DD"):null,e.scheduled_2=l.scheduled_2?f(l.scheduled_2).format("YYYY-MM-DD"):null,e.scheduled_3=l.scheduled_3?f(l.scheduled_3).format("YYYY-MM-DD"):null,e.given_1=l.given_1?f(l.given_1).format("YYYY-MM-DD"):null,e.given_2=l.given_2?f(l.given_2).format("YYYY-MM-DD"):null,e.given_3=l.given_3?f(l.given_3).format("YYYY-MM-DD"):null,e.created_on=f().format("YYYY-MM-DD HH:mm:ss"),console.log(e),console.log(A.value),A.value=="Update"?await ma(e):await ba(e),v[l.vaccine_type]=await Promise.resolve(G(a.id,l.vaccine_type));let n="";n=`Congratulations!

`,n+="Baby "+a.firstname+" "+a.middlename+" "+a.lastname,l.vaccine_type=="bcg"?(n+=" is scheduled for BCG Vaccination on",n+=" "+f(e.scheduled_1).format("LL")+".",n+=` Please come on your schedule and bring the vaccination card when you visit the Health Center.

`,n+=`Ang bakuna nga BCG maga protekta sa mga bata batok sa sakit nga Tuberculosis o TB. Importante nga ang bata mabakunahan sa tukmang schedule arun siya ma depensahan batok sa maong sakit.

`,n+="Ang bakuna luwas ug epektibo. Ang BAKUNADO ay PROTEKTADO!",e.scheduled_1&&(e.given_1||D(a.bhw_contact_number+"@"+a.guardian_contact_number+"@"+n))):l.vaccine_type=="hepb"?(n+=" is scheduled for HEPA B Vaccination on",n+=" "+f(e.scheduled_1).format("LL")+".",n+=` Please come on your schedule and bring the vaccination card when you visit the Health Center.

`,n+=`

`,n+="Ang bakuna luwas ug epektibo. Ang BAKUNADO ay PROTEKTADO!",e.scheduled_1&&(e.given_1||D(a.bhw_contact_number+"@"+a.guardian_contact_number+"@"+n))):l.vaccine_type=="pentavalent"?(n+=" is scheduled for PENTAVALENT Vaccination on",e.scheduled_3?n+=" "+f(e.scheduled_3).format("LL")+".":e.scheduled_2?n+=" "+f(e.scheduled_2).format("LL")+".":n+=" "+f(e.scheduled_1).format("LL")+".",n+=` Please come on your schedule and bring the vaccination card when you visit the Health Center.

`,n+=`Ang Pentavalent Vaccine maga protektar sa bata batok sa sakit nga Diptheria, Tetanus, Hepa B, Pertussis, Pneumonia ug Meningitis.

`,n+=`Importante nga ang bata mabakunahan sa tukmang schedule ug makompleto ang 3 ka dose sa bakuna arun siya ma depensahan batok sa maong mga sakit.

`,n+="Ang bakuna luwas ug epektibo. Ang BAKUNADO ay PROTEKTADO!",e.scheduled_3?e.given_3||D(a.bhw_contact_number+"@"+a.guardian_contact_number+"@"+n):e.scheduled_2?e.given_2||D(a.bhw_contact_number+"@"+a.guardian_contact_number+"@"+n):e.scheduled_1&&(e.given_1||D(a.bhw_contact_number+"@"+a.guardian_contact_number+"@"+n))):l.vaccine_type=="opv"?(n+=" is scheduled for OPV Vaccination on",e.scheduled_3?n+=" "+f(e.scheduled_3).format("LL")+".":e.scheduled_2?n+=" "+f(e.scheduled_2).format("LL")+".":n+=" "+f(e.scheduled_1).format("LL")+".",n+=` Please come on your schedule and bring the vaccination card when you visit the Health Center.

`,n+=`Ang bakuna nga OPV kon Oral Polio Vaccine maga protektar sa bata batok sa sakit nga Polio.

`,n+=`Importante nga ang bata mabakunahan sa tukmang schedule ug makompleto ang 3 ka dose sa bakuna arun siya ma depensahan batok sa maong mga sakit.

`,n+="Ang bakuna luwas ug epektibo. Ang BAKUNADO ay PROTEKTADO!",e.scheduled_3?e.given_3||D(a.bhw_contact_number+"@"+a.guardian_contact_number+"@"+n):e.scheduled_2?e.given_2||D(a.bhw_contact_number+"@"+a.guardian_contact_number+"@"+n):e.scheduled_1&&(e.given_1||D(a.bhw_contact_number+"@"+a.guardian_contact_number+"@"+n))):l.vaccine_type=="ipv"?(n+=" is scheduled for IPV Vaccination on",n+=" "+f(e.scheduled_1).format("LL")+".",n+=` Please come on your schedule and bring the vaccination card when you visit the Health Center.

`,n+=`

`,n+="Ang bakuna luwas ug epektibo. Ang BAKUNADO ay PROTEKTADO!",e.scheduled_1&&(e.given_1||D(a.bhw_contact_number+"@"+a.guardian_contact_number+"@"+n))):l.vaccine_type=="pcv"?(n+=" is scheduled for PCV Vaccination on",e.scheduled_3?n+=" "+f(e.scheduled_3).format("LL")+".":e.scheduled_2?n+=" "+f(e.scheduled_2).format("LL")+".":n+=" "+f(e.scheduled_1).format("LL")+".",n+=` Please come on your schedule and bring the vaccination card when you visit the Health Center.

`,n+=`Ang bakuna nga PCV kon Pneumococcal Conjugate Vaccine maga protektar sa bata batok sa sakit nga Pneumonia ug Meningitis.

`,n+=`Importante nga ang bata mabakunahan sa tukmang schedule ug makompleto ang 3 ka dose sa bakuna arun siya ma depensahan batok sa maong mga sakit.

`,n+="Ang bakuna luwas ug epektibo. Ang BAKUNADO ay PROTEKTADO!",e.scheduled_3?e.given_3||D(a.bhw_contact_number+"@"+a.guardian_contact_number+"@"+n):e.scheduled_2?e.given_2||D(a.bhw_contact_number+"@"+a.guardian_contact_number+"@"+n):e.scheduled_1&&(e.given_1||D(a.bhw_contact_number+"@"+a.guardian_contact_number+"@"+n))):l.vaccine_type=="mcv"&&(n+=" is scheduled for MCV Vaccination on",e.scheduled_2?n+=" "+f(e.scheduled_2).format("LL")+".":n+=" "+f(e.scheduled_1).format("LL")+".",n+=` Please come on your schedule and bring the vaccination card when you visit the Health Center.

`,n+=`

`,n+="Ang bakuna luwas ug epektibo. Ang BAKUNADO ay PROTEKTADO!",e.scheduled_2?e.given_2||D(a.bhw_contact_number+"@"+a.guardian_contact_number+"@"+n):e.scheduled_1&&(e.given_1||D(a.bhw_contact_number+"@"+a.guardian_contact_number+"@"+n))),he({group:"success_dose",title:"Success",text:"Vaccine info was successfully updated!"},2e3)}catch(e){console.error(e),alert("There was something wrong, will restart your page."),window.location.reload()}},Ve=async u=>{Y.value=!0,ke(u)},ke=async u=>{A.value="Update";const e=await fa({id:u});console.log(e),a.id=e.id,a.bhw_address=e.bhw_address,a.bhw_contact_number=e.bhw_contact_number,a.bhw_name=e.bhw_name,a.birthdate=e.birthdate,a.birthplace=e.birthplace,a.client_address=e.client_address,a.client_barangay=e.client_barangay,a.created_by=e.created_by,a.guardian_address=e.guardian_address,a.guardian_barangay=e.guardian_barangay,a.guardian_alternate_number=e.guardian_alternate_number,a.guardian_contact_number=e.guardian_contact_number,a.guardian_name=e.guardian_name,a.health_provider_address=e.health_provider_address,a.health_provider_barangay=e.health_provider_barangay,a.health_provider_contact=e.health_provider_contact,a.health_provider_name=e.health_provider_name,a.remarks=e.remarks,a.is_active=e.is_active,a.firstname=e.firstname,a.lastname=e.lastname,a.middlename=e.middlename,a.sex=e.sex,a.vaccine_id=e.vaccine_id,a.created_on=e.created_on,a.updated_on=e.updated_on,v.pentavalent=await Promise.resolve(G(a.id,"pentavalent")),v.opv=await Promise.resolve(G(a.id,"opv")),v.pcv=await Promise.resolve(G(a.id,"pcv")),v.mcv=await Promise.resolve(Ce(a.id,"mcv")),v.bcg=await Promise.resolve(S(a.id,"bcg")),v.hepb=await Promise.resolve(S(a.id,"hepb")),v.ipv=await Promise.resolve(S(a.id,"ipv")),console.log(v)},G=async(u,e)=>{const n=await be({client_id:u,vaccine_type:e,status:1});if(n.length>0){if(n[0].scheduled_3!="")return n[0].button_type3;if(n[0].scheduled_2!="")return n[0].button_type2;if(n[0].scheduled_1!="")return n[0].button_type1}else return""},Ce=async(u,e)=>{const n=await be({client_id:u,vaccine_type:e,status:1});if(n.length>0){if(n[0].scheduled_2!="")return n[0].button_type2;if(n[0].scheduled_1!="")return n[0].button_type1}else return""},S=async(u,e)=>{const n=await be({client_id:u,vaccine_type:e,status:1});if(n.length>0){if(n[0].scheduled_1!="")return n[0].button_type1}else return""},ue=async u=>{W.value=u},ce=()=>{A.value="Submit",Y.value=!1,re("create")},xe=h(()=>l.given_1);R(xe,u=>{console.log(u),l.given_administerred_1=m.userFirstname+" "+m.userMiddlename+" "+m.userLastname});const De=h(()=>l.given_2);R(De,u=>{console.log(u),l.given_administerred_2=m.userFirstname+" "+m.userMiddlename+" "+m.userLastname});const _=h(()=>l.given_3);R(_,u=>{console.log(u),l.given_administerred_3=m.userFirstname+" "+m.userMiddlename+" "+m.userLastname});const r=h(()=>l.scheduled_1);R(r,u=>{console.log(u),l.scheduled_administerred_1=m.userFirstname+" "+m.userMiddlename+" "+m.userLastname});const p=h(()=>l.scheduled_2);R(p,u=>{console.log(u),l.scheduled_administerred_2=m.userFirstname+" "+m.userMiddlename+" "+m.userLastname});const M=h(()=>l.scheduled_3);R(M,u=>{console.log(u),l.scheduled_administerred_3=m.userFirstname+" "+m.userMiddlename+" "+m.userLastname});const V=()=>{B("loading-modal-open")},s=()=>{setTimeout(function(){B("loading-modal-close")},1e3)},_e=g({"Vaccine ID":"vaccine_id",Fullname:"fullname","Birth Date":"birthdate","Birth Place":"birthplace",Sex:"sex","Guardian Name":"guardian_name","Guardian Contact #":"guardian_contact_number","Guardian Alternate Number":"guardian_alternate_number","Guardian Address":"guardian_barangay","BHW Name":"bhw_name","BHW Contact #":"bhw_contact_number","BHW Address":"bhw_barangay","Health Provider Name":"health_provider_name","Health Provider Contact #":"health_provider_contact","Health Provider Address":"health_provider_barangay",Municipality:"muncity_description",Barangay:"client_barangay","Created On":"created_on"}),Ye=g([]),Fe=async u=>{console.log(u),Ye.value=u};return(u,e)=>{const n=Ie,b=$e,j=ha,P=ga;return y(),H(oe,null,[t(Xe,{onSearchClient:ue},{default:i(()=>[t(Ze,{class:"mt-8 lg:mt-0"},{default:i(()=>[t(Ue,{icon:d(ea),title:"Clients for new born baby",main:""},{default:i(()=>[c("div",Ta,[c("div",Ra,[t(d(aa),{class:"w-full md:w-40 inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-yellow-600 dark:border-yellow-500 ring-yellow-300 dark:ring-yellow-700 bg-yellow-600 dark:bg-yellow-500 text-white hover:bg-yellow-700 hover:border-yellow-700 hover:dark:bg-yellow-600 hover:dark:border-yellow-600 py-2 px-3",data:Ye.value,fields:_e.value,"before-generate":s,"before-finish":V,worksheet:"Clients",name:"clients.xls"},{default:i(()=>[t(na,{path:d(la)},null,8,["path"]),Be(" Download Excel ")]),_:1},8,["data","fields"]),t(w,{class:"w-full md:w-40",onClick:ce,type:"button",color:"info",label:"Create",icon:d(ta),"data-bs-toggle":"modal","data-bs-target":"#clientModal"},null,8,["icon"])])])]),_:1},8,["icon"]),t(pe,{class:"mb-6","has-table":""},{default:i(()=>[t(Fa,{onClientInfo:Ve,onClientData:Fe,search_keyword:W.value,form:E.value,checkable:""},null,8,["search_keyword","form"])]),_:1})]),_:1})]),_:1}),c("div",{class:"modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto",ref_key:"el_client_modal",ref:ne,id:"clientModal","data-bs-backdrop":"static","aria-labelledby":"exampleModalLgLabel","aria-modal":"true",role:"dialog"},[c("div",Ea,[c("div",Ga,[c("div",ja,[t(Ue,{icon:d(da),title:"Client Info",main:""},null,8,["icon"]),t(oa),t(pe,{"is-form":"",onSubmit:Ae(ve,["prevent"])},{default:i(()=>[t(b,{label:"Personal Information",class:"text-xl"},{default:i(()=>[t(b,{label:"Vaccine Card Number ID",class:"text-sm"},{default:i(()=>[t(n,{modelValue:a.vaccine_id,"onUpdate:modelValue":e[0]||(e[0]=o=>a.vaccine_id=o),icon:d(ia),readonly:!0},null,8,["modelValue","icon"])]),_:1}),t(n,{modelValue:a.firstname,"onUpdate:modelValue":e[1]||(e[1]=o=>a.firstname=o),icon:d(z),class:"mt-7",placeholder:"Firstname",required:""},null,8,["modelValue","icon"])]),_:1}),t(b,null,{default:i(()=>[t(n,{modelValue:a.middlename,"onUpdate:modelValue":e[2]||(e[2]=o=>a.middlename=o),icon:d(z),placeholder:"Middlename",required:""},null,8,["modelValue","icon"]),t(n,{modelValue:a.lastname,"onUpdate:modelValue":e[3]||(e[3]=o=>a.lastname=o),icon:d(z),placeholder:"Lastname",required:""},null,8,["modelValue","icon"])]),_:1}),t(b,null,{default:i(()=>[t(b,{label:"Birthdate"},{default:i(()=>[t(n,{modelValue:a.birthdate,"onUpdate:modelValue":e[4]||(e[4]=o=>a.birthdate=o),type:"date",icon:d(q),required:""},null,8,["modelValue","icon"])]),_:1}),t(n,{modelValue:a.birthplace,"onUpdate:modelValue":e[5]||(e[5]=o=>a.birthplace=o),icon:d(sa),class:"mt-8",placeholder:"Birthplace",required:""},null,8,["modelValue","icon"])]),_:1}),t(b,{label:"Sex"},{default:i(()=>[t(j,{modelValue:a.sex,"onUpdate:modelValue":e[6]||(e[6]=o=>a.sex=o),name:"sex",type:"radio",options:{male:"Male",female:"Female"}},null,8,["modelValue"])]),_:1}),t(b,{label:"Client Address"},{default:i(()=>[t(n,{modelValue:a.client_address,"onUpdate:modelValue":e[7]||(e[7]=o=>a.client_address=o),options:U.value},null,8,["modelValue","options"])]),_:1}),t(P),t(b,{label:"Name of Parents / Guardian"},{default:i(()=>[t(n,{modelValue:a.guardian_name,"onUpdate:modelValue":e[8]||(e[8]=o=>a.guardian_name=o),icon:d(z),placeholder:"Firstname Middlename Lastname",required:""},null,8,["modelValue","icon"])]),_:1}),t(b,null,{default:i(()=>[t(n,{modelValue:a.guardian_contact_number,"onUpdate:modelValue":e[9]||(e[9]=o=>a.guardian_contact_number=o),icon:d(me),placeholder:"Contact Number",required:""},null,8,["modelValue","icon"]),t(n,{modelValue:a.guardian_alternate_number,"onUpdate:modelValue":e[10]||(e[10]=o=>a.guardian_alternate_number=o),icon:d(me),placeholder:"Alternate Number",required:""},null,8,["modelValue","icon"])]),_:1}),t(b,{label:"Parent/Guardian Address"},{default:i(()=>[t(n,{modelValue:a.guardian_address,"onUpdate:modelValue":e[11]||(e[11]=o=>a.guardian_address=o),options:U.value,required:""},null,8,["modelValue","options"])]),_:1}),t(P),t(b,{label:"Name of BHW"},{default:i(()=>[t(n,{modelValue:a.bhw_name,"onUpdate:modelValue":e[12]||(e[12]=o=>a.bhw_name=o),icon:d(z),placeholder:"Firstname Middlename Lastname",required:""},null,8,["modelValue","icon"])]),_:1}),t(b,null,{default:i(()=>[t(b,{label:"BHW contact number"},{default:i(()=>[t(n,{modelValue:a.bhw_contact_number,"onUpdate:modelValue":e[13]||(e[13]=o=>a.bhw_contact_number=o),icon:d(me),placeholder:"Contact Number",required:""},null,8,["modelValue","icon"])]),_:1}),t(b,{label:"BHW Address"},{default:i(()=>[t(n,{modelValue:a.bhw_address,"onUpdate:modelValue":e[14]||(e[14]=o=>a.bhw_address=o),options:U.value,required:""},null,8,["modelValue","options"])]),_:1})]),_:1}),t(P),t(b,{label:"Name of Health Provider"},{default:i(()=>[t(n,{modelValue:a.health_provider_name,"onUpdate:modelValue":e[15]||(e[15]=o=>a.health_provider_name=o),icon:d(z),placeholder:"Firstname Middlename Lastname"},null,8,["modelValue","icon"])]),_:1}),t(b,null,{default:i(()=>[t(b,{label:"Health Provider Contact Number"},{default:i(()=>[t(n,{modelValue:a.health_provider_contact,"onUpdate:modelValue":e[16]||(e[16]=o=>a.health_provider_contact=o),icon:d(me),placeholder:"Contact Number"},null,8,["modelValue","icon"])]),_:1}),t(b,{label:"Health Provider Address"},{default:i(()=>[t(n,{modelValue:a.health_provider_address,"onUpdate:modelValue":e[17]||(e[17]=o=>a.health_provider_address=o),options:U.value},null,8,["modelValue","options"])]),_:1})]),_:1}),t(b,{label:"Remarks"},{default:i(()=>[t(n,{modelValue:a.remarks,"onUpdate:modelValue":e[18]||(e[18]=o=>a.remarks=o),type:"textarea",required:""},null,8,["modelValue"])]),_:1}),Y.value?(y(),Z(P,{key:0})):X("",!0),Y.value?(y(),Z(b,{key:1,label:"Vaccine Type"},{default:i(()=>[t(ee,null,{default:i(()=>[t(w,{color:v.bcg,label:"BCG",icon:d(T),small:d(C),outline:d(F),disabled:d(x),"rounded-full":d(L),onClick:e[19]||(e[19]=o=>O("bcg"))},null,8,["color","icon","small","outline","disabled","rounded-full"]),t(w,{color:v.hepb,label:"HepB",icon:d(T),small:d(C),outline:d(F),disabled:d(x),"rounded-full":d(L),onClick:e[20]||(e[20]=o=>O("hepb"))},null,8,["color","icon","small","outline","disabled","rounded-full"]),t(w,{color:v.pentavalent,label:"Pentavalent",icon:d(T),small:d(C),outline:d(F),disabled:d(x),"rounded-full":d(L),onClick:e[21]||(e[21]=o=>O("pentavalent"))},null,8,["color","icon","small","outline","disabled","rounded-full"]),t(w,{color:v.opv,label:"OPV",icon:d(T),small:d(C),outline:d(F),disabled:d(x),"rounded-full":d(L),onClick:e[22]||(e[22]=o=>O("opv"))},null,8,["color","icon","small","outline","disabled","rounded-full"]),t(w,{color:v.ipv,label:"IPV",icon:d(T),small:d(C),outline:d(F),disabled:d(x),"rounded-full":d(L),onClick:e[23]||(e[23]=o=>O("ipv"))},null,8,["color","icon","small","outline","disabled","rounded-full"]),t(w,{color:v.pcv,label:"PCV",icon:d(T),small:d(C),outline:d(F),disabled:d(x),"rounded-full":d(L),onClick:e[24]||(e[24]=o=>O("pcv"))},null,8,["color","icon","small","outline","disabled","rounded-full"]),t(w,{color:v.mcv,label:"MCV",icon:d(T),small:d(C),outline:d(F),disabled:d(x),"rounded-full":d(L),onClick:e[25]||(e[25]=o=>O("mcv"))},null,8,["color","icon","small","outline","disabled","rounded-full"])]),_:1})]),_:1})):X("",!0),t(P),t(ee,null,{default:i(()=>[t(w,{type:"submit",color:"info",label:A.value},null,8,["label"]),t(w,{type:"button",color:"info",outline:"",label:"Close","data-bs-dismiss":"modal","aria-label":"Close"})]),_:1})]),_:1},8,["onSubmit"])])])])],512),c("div",{class:"modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto",id:"vaccineeModal","data-bs-backdrop":"static",ref_key:"el_dose_modal",ref:le,"aria-labelledby":"exampleModalLgLabel","aria-modal":"true",role:"dialog"},[c("div",qa,[c("div",Ka,[Wa,c("div",Ja,[t(pe,{"is-form":"",onSubmit:Ae(we,["prevent"])},{default:i(()=>[t(b,{label:"1st Dose",status:l.status1,button_type:l.button_type1},{default:i(()=>[t(b,{label:"Date Scheduled",help:l.scheduled_1?l.scheduled_administerred_1:""},{default:i(()=>[t(n,{id:"dt1",modelValue:l.scheduled_1,"onUpdate:modelValue":e[26]||(e[26]=o=>l.scheduled_1=o),type:"date",icon:d(q),placeholder:"Date Scheduled"},null,8,["modelValue","icon"])]),_:1},8,["help"]),t(b,{label:"Date Given",help:l.given_1?l.given_administerred_1:""},{default:i(()=>[t(n,{id:"dt2",modelValue:l.given_1,"onUpdate:modelValue":e[27]||(e[27]=o=>l.given_1=o),type:"date",icon:d(q),placeholder:"Date Given"},null,8,["modelValue","icon"])]),_:1},8,["help"])]),_:1},8,["status","button_type"]),l.vaccine_type=="mcv"||l.vaccine_type=="pentavalent"||l.vaccine_type=="opv"||l.vaccine_type=="pcv"?(y(),Z(b,{key:0,label:"2nd Dose",status:l.status2,button_type:l.button_type2},{default:i(()=>[t(b,{label:"Date Scheduled",help:l.scheduled_2?l.scheduled_administerred_2:""},{default:i(()=>[t(n,{id:"dt3",modelValue:l.scheduled_2,"onUpdate:modelValue":e[28]||(e[28]=o=>l.scheduled_2=o),type:"date",icon:d(q),placeholder:"Date Scheduled"},null,8,["modelValue","icon"])]),_:1},8,["help"]),t(b,{label:"Date Given",help:l.given_2?l.given_administerred_2:""},{default:i(()=>[t(n,{id:"dt4",modelValue:l.given_2,"onUpdate:modelValue":e[29]||(e[29]=o=>l.given_2=o),type:"date",icon:d(q),placeholder:"Date Given"},null,8,["modelValue","icon"])]),_:1},8,["help"])]),_:1},8,["status","button_type"])):X("",!0),l.vaccine_type=="pentavalent"||l.vaccine_type=="opv"||l.vaccine_type=="pcv"?(y(),Z(b,{key:1,label:"3rd Dose",status:l.status3,button_type:l.button_type3},{default:i(()=>[t(b,{label:"Date Scheduled",help:l.scheduled_3?l.scheduled_administerred_3:""},{default:i(()=>[t(n,{id:"dt5",modelValue:l.scheduled_3,"onUpdate:modelValue":e[30]||(e[30]=o=>l.scheduled_3=o),type:"date",icon:d(q),placeholder:"Date Scheduled"},null,8,["modelValue","icon"])]),_:1},8,["help"]),t(b,{label:"Date Given",help:l.given_3?l.given_administerred_3:""},{default:i(()=>[t(n,{id:"dt6",modelValue:l.given_3,"onUpdate:modelValue":e[31]||(e[31]=o=>l.given_3=o),type:"date",icon:d(q),placeholder:"Date Given"},null,8,["modelValue","icon"])]),_:1},8,["help"])]),_:1},8,["status","button_type"])):X("",!0),t(ee,null,{default:i(()=>[t(w,{type:"submit",color:"info",label:A.value},null,8,["label"]),t(w,{type:"button",color:"info",outline:"",label:"Close","data-bs-dismiss":"modal","aria-label":"Close"})]),_:1})]),_:1},8,["onSubmit"])])])])],512)],64)}}});const Za=pa(za,[["__scopeId","data-v-ffe97dff"]]);export{Za as default};
