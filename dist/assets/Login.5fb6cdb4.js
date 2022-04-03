var M=Object.defineProperty;var w=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var v=(e,o,s)=>o in e?M(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,h=(e,o)=>{for(var s in o||(o={}))k.call(o,s)&&v(e,s,o[s]);if(w)for(var s of w(o))E.call(o,s)&&v(e,s,o[s]);return e};import{c as N,a as L,u as P,b as $}from"./object.feea5c71.js";import{u as R,a as q,b as C,r as b,_ as S,d as i,o as F,c as D,e as d,f as r,t as _,w as I,g as T,h as G,F as H,i as O}from"./index.98177c14.js";const U=()=>{const{t:e}=R(),o=q(),s=C(),t=b(!1),p=b(!0),l=6,a=255,m=N({email:L().required(e("Required",{name:"Email"})).email(e("Valid email")),password:L().required(e("Required",{name:e("Password")})).min(l,e("Min",{name:e("Password"),min:l})).max(a,e("Max",{name:e("Password"),max:a}))}),{errors:c,handleSubmit:f,resetForm:n}=P({validationSchema:m}),{value:V}=$("password"),{value:A}=$("email"),B=f(async(u,g)=>{try{t.value=!0,await o.dispatch("auth/login",u)}catch({errors:y}){g.setErrors(y)}finally{t.value=!1}});return o.watch((u,g)=>g["auth/isLoggedIn"],u=>{u&&s.push({name:"home"})}),{onSubmit:B,email:A,password:V,errors:c,isActiveFocus:p,isButtonLoading:t}},W={name:"LoginForm",setup(){return h({},U())}},X={class:"flex items-center pb-5"},j={class:"auth-subform"};function x(e,o,s,t,p,l){const a=i("app-icon"),m=i("app-input"),c=i("app-button"),f=i("router-link");return F(),D(H,null,[d("div",X,[r(a,{icon:"lock-open",class:"w-6 h-6"}),d("h2",null,_(e.$t("Login")),1)]),d("form",{onSubmit:o[2]||(o[2]=G((...n)=>e.onSubmit&&e.onSubmit(...n),["prevent"])),class:"space-y-8"},[r(m,{isActiveFocus:e.isActiveFocus,label:"Email",type:"email",name:"email",modelValue:e.email,"onUpdate:modelValue":o[0]||(o[0]=n=>e.email=n),modelModifiers:{trim:!0},"error-message":e.errors.email},null,8,["isActiveFocus","modelValue","error-message"]),r(m,{label:"Password",type:"password",name:"password",modelValue:e.password,"onUpdate:modelValue":o[1]||(o[1]=n=>e.password=n),modelModifiers:{trim:!0},"error-message":e.errors.password},null,8,["modelValue","error-message"]),r(c,{isButtonLoading:e.isButtonLoading},{default:I(()=>[T(_(e.$t("Login")),1)]),_:1},8,["isButtonLoading"])],32),d("div",j,[r(f,{to:{name:"signup"},class:"text-sm hover:underline",textContent:_(e.$t("Signup"))},null,8,["textContent"])])],64)}var z=S(W,[["render",x]]);const J={name:"Login",components:{LoginForm:z}};function K(e,o,s,t,p,l){const a=i("login-form");return F(),O(a)}var ee=S(J,[["render",K]]);export{ee as default};
