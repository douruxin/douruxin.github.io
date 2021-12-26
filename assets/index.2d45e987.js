var I=Object.defineProperty,T=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var x=(e,t,s)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,v=(e,t)=>{for(var s in t||(t={}))H.call(t,s)&&x(e,s,t[s]);if(g)for(var s of g(t))O.call(t,s)&&x(e,s,t[s]);return e},b=(e,t)=>T(e,N(t));import{d as _,o as i,c as u,p as h,a as f,b as c,e as R,u as P,r as C,f as k,t as V,g as $,h as l,i as p,w as B,j as A,k as M,l as D,m as F,n as E,q as U,s as j,v as q,F as W,x as z,y as G,z as K,E as J,A as Q,B as X,C as Y,D as Z}from"./vendor.6ea1b91a.js";const ee=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}};ee();const te="modulepreload",w={},se="./",oe=function(t,s){return!s||s.length===0?t():Promise.all(s.map(n=>{if(n=`${se}${n}`,n in w)return;w[n]=!0;const o=n.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const r=document.createElement("link");if(r.rel=o?"stylesheet":te,o||(r.as="script",r.crossOrigin=""),r.href=n,document.head.appendChild(r),o)return new Promise((m,y)=>{r.addEventListener("load",m),r.addEventListener("error",y)})})).then(()=>t())};var ne="./assets/logo.03d6d6da.png";var d=(e,t)=>{const s=e.__vccOpts||e;for(const[n,o]of t)s[n]=o;return s};const ae=_({name:"HomeView"}),L=e=>(h("data-v-ca546c26"),e=e(),f(),e),re={class:"home-container page-container"},ce=L(()=>c("img",{class:"vue-element-plus-logo",alt:"Vue logo",src:ne},null,-1)),ie=L(()=>c("div",{class:"page-title"},"Vite2.x + Vue3.x + TypeScript + Element Plus",-1)),ue=[ce,ie];function _e(e,t,s,n,o,a){return i(),u("div",re,ue)}var de=d(ae,[["render",_e],["__scopeId","data-v-ca546c26"]]);const le={namespaced:!0,state:{name:"numFactory-module",count:1},mutations:{DOUBLE_COUNT(e){e.count*=2}},actions:{}},pe=R({state:{text:"This is Vuex Root.state.text"},getters:{},mutations:{},actions:{},modules:{numFactoryModule:le}}),S=Symbol("vue-store");function me(){return P(S)}const ve=_({name:"VuexView",setup(){const e=me(),t=C({text:k(()=>e.state.text),count:k(()=>e.state.numFactoryModule.count)}),s=()=>{e.commit("numFactoryModule/DOUBLE_COUNT")};return b(v({},V(t)),{double:s})}}),he={class:"vuex-container page-container"},fe=c("div",{class:"page-title"},"Vuex Test Page",-1),$e=A("double");function ye(e,t,s,n,o,a){const r=$("el-button");return i(),u("div",he,[fe,c("p",null,"store Root is: "+l(e.text),1),c("p",null,"store doubleCount is: "+l(e.count),1),p(r,{type:"primary",onClick:e.double},{default:B(()=>[$e]),_:1},8,["onClick"])])}var ge=d(ve,[["render",ye]]);const xe=_({name:"TestView",setup(){const e=M(0);return{count:e,increment:()=>{e.value+=1}}}}),be=e=>(h("data-v-7d0d1729"),e=e(),f(),e),Ce={class:"test-container page-container"},ke=be(()=>c("div",{class:"page-title"},"Unit Test Page",-1));function Ve(e,t,s,n,o,a){return i(),u("div",Ce,[ke,c("p",null,"count is: "+l(e.count),1),c("button",{onClick:t[0]||(t[0]=(...r)=>e.increment&&e.increment(...r))},"increment")])}var Ae=d(xe,[["render",Ve],["__scopeId","data-v-7d0d1729"]]);const Ee=[{path:"/",name:"Home",component:de},{path:"/vuex",name:"Vuex",component:ge},{path:"/axios",name:"Axios",component:()=>oe(()=>import("./Axios.c9408f6d.js"),["assets/Axios.c9408f6d.js","assets/Axios.b670c8b8.css","assets/vendor.6ea1b91a.js"])},{path:"/test",name:"Test",component:Ae}],we=D({history:F(),routes:Ee});const Le=e=>(h("data-v-3df4bd1d"),e=e(),f(),e),Se={class:"header"},Ie=Le(()=>c("i",{class:"icon el-icon-s-promotion"},null,-1)),Te=A(" GitHub"),Ne=[Ie,Te],He=_({setup(e){const t=E(),s=()=>{window.open("https://github.com/douruxin/douruxin.github.io")};return(n,o)=>(i(),u("div",Se,[c("div",{class:"title",onClick:o[0]||(o[0]=a=>U(t).push("/"))},"Vite2.x + Vue3.x + TypeScript Website"),c("div",{class:"go-github",onClick:s},Ne)]))}});var Oe=d(He,[["__scopeId","data-v-3df4bd1d"]]);const Re=_({name:"NavComp",setup(){const e=E(),t=C({navList:[{name:"Home",isActive:!1,path:"/"},{name:"Vuex",isActive:!1,path:"/vuex"},{name:"Axios",isActive:!1,path:"/axios"},{name:"Test",isActive:!1,path:"/test"}],navClick(n){e.push(n.path)}}),s=n=>{t.navList.forEach(o=>{const a=o;return a.isActive=a.path===n,a})};return j(()=>e.currentRoute.value,n=>{s(n.path)}),q(()=>{e.isReady().then(()=>{s(e.currentRoute.value.path)})}),v({},V(t))}}),Pe={class:"nav"},Be={class:"nav-list"},Me=["onClick"];function De(e,t,s,n,o,a){return i(),u("aside",Pe,[c("ul",Be,[(i(!0),u(W,null,z(e.navList,(r,m)=>(i(),u("li",{class:G(["nav-item flex-center",{active:r.isActive}]),key:m,onClick:y=>e.navClick(r)},l(r.name),11,Me))),128))])])}var Fe=d(Re,[["render",De],["__scopeId","data-v-13ace29f"]]);const Ue={class:"main-container"},je={class:"top"},qe={class:"bottom"},We={class:"left"},ze={class:"right"},Ge={class:"content"},Ke=_({setup(e){return(t,s)=>{const n=$("router-view");return i(),u("main",Ue,[c("div",je,[p(Oe)]),c("div",qe,[c("div",We,[p(Fe)]),c("div",ze,[c("div",Ge,[p(n)])])])])}}});var Je=d(Ke,[["__scopeId","data-v-dce7a80a"]]);const Qe=_({name:"App",components:{Main:Je}});function Xe(e,t,s,n,o,a){const r=$("Main");return i(),K(r)}var Ye=d(Qe,[["render",Xe]]);function Ze(e){return[J,Q,X,Y].forEach(t=>{e.use(t)}),e}const et=Z(Ye);Ze(et).use(we).use(pe,S).mount("#app");export{d as _};