import{s as Se,e as oe,f as Ve,h as ie,r as Le,c as x,o as ke}from"../chunks/scheduler.DTn6sg0E.js";import{S as Ce,i as je,v as le,s as I,e as w,w as G,k as ze,d as f,f as y,c as v,a as q,l as $e,x as O,r as _,g as ee,h as i,y as A,u as Be,q as F,o as J,z as W,t as ce,b as he,j as He}from"../chunks/index.BrvKFv8V.js";import{I as Me,a as Ee,b as Re,g as Ge}from"../chunks/index.Ck7fa_ST.js";import{g as Oe}from"../chunks/entry.xM4ousmE.js";import{B as Ie,l as Ae}from"../chunks/loginSession.Bmowu5Lj.js";const{document:ye}=Ge;function Fe(t){let r;return{c(){r=ce("Google")},l(s){r=he(s,"Google")},m(s,a){ee(s,r,a)},d(s){s&&f(r)}}}function qe(t){let r,s;return{c(){r=w("p"),s=ce(t[1]),this.h()},l(a){r=v(a,"P",{class:!0});var d=q(r);s=he(d,t[1]),d.forEach(f),this.h()},h(){_(r,"class","text-danger")},m(a,d){ee(a,r,d),i(r,s)},p(a,d){d&2&&He(s,a[1])},d(a){a&&f(r)}}}function Je(t){let r;return{c(){r=ce("Register")},l(s){r=he(s,"Register")},m(s,a){ee(s,r,a)},d(s){s&&f(r)}}}function We(t){let r,s,a,d,Z='<h4 class="font-bold text-4xl mb-1 text-center">Welcome Back</h4> <p class="text-center font-normal text-xl">Login into your account</p>',j,T,c,z,D,K='<span class="uppercase text-sm px-3 bg-gray-100">or</span>',B,p,M,h,l,Q,S,b,U,X,P,E,n,$,H,ue,V,N,de,pe,te,fe,se,L,ae,me,ge;c=new Ie({props:{type:"button",variant:"outline",title:"Google Login Auth",id:"googleButton",$$slots:{default:[Fe]},$$scope:{ctx:t}}});function De(e){t[15](e)}let we={label:"Email",type:"email",id:t[3].id,field:t[9],required:!0,pattern:"^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",placeholder:"Enter your email",invalidText:t[3].valueMissing?"Email is required":t[3].typeMismatch?"Email not available":t[3].patternMismatch?"Email error syntax":"Nice",showMessage:!t[3].show};t[2].email!==void 0&&(we.value=t[2].email),h=new Me({props:we}),oe.push(()=>le(h,"value",De));function Pe(e){t[16](e)}let ve={label:"Name",type:"text",id:t[4].id,field:t[10],required:!0,pattern:"[a-zA-Z\\s]+",placeholder:"Enter your name",invalidText:t[4].valueMissing?"Name is required":t[4].typeMismatch?"Name not available":t[4].patternMismatch?"Name must be word":"Nice",showMessage:!t[4].show};t[2].name!==void 0&&(ve.value=t[2].name),b=new Me({props:ve}),oe.push(()=>le(b,"value",Pe));function Te(e){t[17](e)}let _e={label:"Password",field:t[11],min:8,max:30,id:"password",required:!0,placeholder:"Enter your password",invalidText:t[5].valueMissing?"Password is required":t[5].tooShort?"Password must has 8 character":t[5].patternMismatch?"Must contain at least one uppercase, lowercase, and number":"Nice",showMessage:!t[5].show};t[2].password!==void 0&&(_e.value=t[2].password),E=new Ee({props:_e}),oe.push(()=>le(E,"value",Te));function Ne(e){t[18](e)}let be={label:"Confirm Password",field:t[12],min:8,max:30,id:"password",required:!0,placeholder:"Input your password",invalidText:t[6].valueMissing?"Password is required":t[6].tooShort?"Password must has 8 character":t[6].patternMismatch?"Must contain at least one uppercase, lowercase, and number":t[14]()?"Confirm password not match with password":"",showMessage:!t[6].show};t[0]!==void 0&&(be.value=t[0]),N=new Ee({props:be}),oe.push(()=>le(N,"value",Ne));let m=t[1]&&qe(t);return L=new Ie({props:{type:"submit",variant:"outline",title:"Login Button",size:"lg",disable:!t[7].valid,classStyled:" w-full uppercase border-2 border-gray-500 mt-3",$$slots:{default:[Je]},$$scope:{ctx:t}}}),{c(){r=I(),s=w("div"),a=w("form"),d=w("div"),d.innerHTML=Z,j=I(),T=w("div"),G(c.$$.fragment),z=I(),D=w("div"),D.innerHTML=K,B=I(),p=w("div"),M=w("div"),G(h.$$.fragment),Q=I(),S=w("div"),G(b.$$.fragment),X=I(),P=w("div"),G(E.$$.fragment),$=I(),H=w("div"),ue=I(),V=w("div"),G(N.$$.fragment),pe=I(),te=w("div"),fe=I(),m&&m.c(),se=I(),G(L.$$.fragment),this.h()},l(e){ze("svelte-hn16rm",ye.head).forEach(f),r=y(e),s=v(e,"DIV",{class:!0});var Y=q(s);a=v(Y,"FORM",{id:!0,autocomplete:!0,class:!0});var u=q(a);d=v(u,"DIV",{class:!0,"data-svelte-h":!0}),$e(d)!=="svelte-1baxvts"&&(d.innerHTML=Z),j=y(u),T=v(u,"DIV",{class:!0});var k=q(T);O(c.$$.fragment,k),k.forEach(f),z=y(u),D=v(u,"DIV",{class:!0,"data-svelte-h":!0}),$e(D)!=="svelte-19irww5"&&(D.innerHTML=K),B=y(u),p=v(u,"DIV",{class:!0});var g=q(p);M=v(g,"DIV",{class:!0});var C=q(M);O(h.$$.fragment,C),C.forEach(f),Q=y(g),S=v(g,"DIV",{class:!0});var R=q(S);O(b.$$.fragment,R),R.forEach(f),X=y(g),P=v(g,"DIV",{class:!0});var ne=q(P);O(E.$$.fragment,ne),$=y(ne),H=v(ne,"DIV",{}),q(H).forEach(f),ne.forEach(f),ue=y(g),V=v(g,"DIV",{class:!0});var re=q(V);O(N.$$.fragment,re),pe=y(re),te=v(re,"DIV",{}),q(te).forEach(f),re.forEach(f),g.forEach(f),fe=y(u),m&&m.l(u),se=y(u),O(L.$$.fragment,u),u.forEach(f),Y.forEach(f),this.h()},h(){ye.title="Register",_(d,"class",""),_(T,"class","justify-self-center w-fit"),_(D,"class","relative z-10 text-center after:absolute after:top-3 after:left-0 after:w-full after:border after:border-gray-300 after:-z-10 w-full"),_(M,"class","h-fit"),_(S,"class","h-fit"),_(P,"class",""),_(V,"class",""),_(p,"class","grid gap-1"),_(a,"id","signIn"),_(a,"autocomplete","on"),a.noValidate=!0,_(a,"class","mt-3 grid gap-3 w-[28rem]"),_(s,"class","flex justify-center max-w-full")},m(e,o){ee(e,r,o),ee(e,s,o),i(s,a),i(a,d),i(a,j),i(a,T),A(c,T,null),i(a,z),i(a,D),i(a,B),i(a,p),i(p,M),A(h,M,null),i(p,Q),i(p,S),A(b,S,null),i(p,X),i(p,P),A(E,P,null),i(P,$),i(P,H),i(p,ue),i(p,V),A(N,V,null),i(V,pe),i(V,te),i(a,fe),m&&m.m(a,null),i(a,se),A(L,a,null),ae=!0,me||(ge=[Ve(t[8].call(null,a)),Be(a,"submit",t[13])],me=!0)},p(e,[o]){const Y={};o&2097152&&(Y.$$scope={dirty:o,ctx:e}),c.$set(Y);const u={};o&8&&(u.id=e[3].id),o&8&&(u.invalidText=e[3].valueMissing?"Email is required":e[3].typeMismatch?"Email not available":e[3].patternMismatch?"Email error syntax":"Nice"),o&8&&(u.showMessage=!e[3].show),!l&&o&4&&(l=!0,u.value=e[2].email,ie(()=>l=!1)),h.$set(u);const k={};o&16&&(k.id=e[4].id),o&16&&(k.invalidText=e[4].valueMissing?"Name is required":e[4].typeMismatch?"Name not available":e[4].patternMismatch?"Name must be word":"Nice"),o&16&&(k.showMessage=!e[4].show),!U&&o&4&&(U=!0,k.value=e[2].name,ie(()=>U=!1)),b.$set(k);const g={};o&32&&(g.invalidText=e[5].valueMissing?"Password is required":e[5].tooShort?"Password must has 8 character":e[5].patternMismatch?"Must contain at least one uppercase, lowercase, and number":"Nice"),o&32&&(g.showMessage=!e[5].show),!n&&o&4&&(n=!0,g.value=e[2].password,ie(()=>n=!1)),E.$set(g);const C={};o&64&&(C.invalidText=e[6].valueMissing?"Password is required":e[6].tooShort?"Password must has 8 character":e[6].patternMismatch?"Must contain at least one uppercase, lowercase, and number":e[14]()?"Confirm password not match with password":""),o&64&&(C.showMessage=!e[6].show),!de&&o&1&&(de=!0,C.value=e[0],ie(()=>de=!1)),N.$set(C),e[1]?m?m.p(e,o):(m=qe(e),m.c(),m.m(a,se)):m&&(m.d(1),m=null);const R={};o&128&&(R.disable=!e[7].valid),o&2097152&&(R.$$scope={dirty:o,ctx:e}),L.$set(R)},i(e){ae||(F(c.$$.fragment,e),F(h.$$.fragment,e),F(b.$$.fragment,e),F(E.$$.fragment,e),F(N.$$.fragment,e),F(L.$$.fragment,e),ae=!0)},o(e){J(c.$$.fragment,e),J(h.$$.fragment,e),J(b.$$.fragment,e),J(E.$$.fragment,e),J(N.$$.fragment,e),J(L.$$.fragment,e),ae=!1},d(e){e&&(f(r),f(s)),W(c),W(h),W(b),W(E),W(N),m&&m.d(),W(L),me=!1,Le(ge)}}}function Ze(t,r,s){let a,d,Z,j,T;const c=Re();x(t,c,n=>s(7,T=n));const z=c.field({onDirty:!0});x(t,z,n=>s(3,a=n));const D=c.field({onDirty:!0});x(t,D,n=>s(4,d=n));const K=c.field({onDirty:!0});x(t,K,n=>s(5,Z=n));const B=c.field({onDirty:!0});x(t,B,n=>s(6,j=n));let p="",M;const h=new Date;console.log(h),h.setSeconds(h.getSeconds()-600),console.log(h);let l={id:0,role:"customer",name:"",email:"",password:"",phone:""};async function Q(){if(s(1,M=""),!b()){console.log("Does not match");return}try{await S(l)}catch(n){n instanceof Error&&(s(1,M=n.message),console.log("Login error",M))}}ke(()=>{document.onfocus=n=>{n.target instanceof HTMLInputElement&&n.target.select()}});async function S(n){try{const $=await fetch("/auth/register",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});if(!$.ok)throw $.status==404?new Error("Sorry, that username is already in use"):new Error($.statusText);const H=await $.json();Ae.set(H.user),Oe("/")}catch($){if(console.log("Register error",$),$ instanceof Error)throw new Error($.message)}}const b=()=>l?(l.password||s(2,l.password="",l),l.password==p):!1;function U(n){t.$$.not_equal(l.email,n)&&(l.email=n,s(2,l))}function X(n){t.$$.not_equal(l.name,n)&&(l.name=n,s(2,l))}function P(n){t.$$.not_equal(l.password,n)&&(l.password=n,s(2,l))}function E(n){p=n,s(0,p)}return[p,M,l,a,d,Z,j,T,c,z,D,K,B,Q,b,U,X,P,E]}class xe extends Ce{constructor(r){super(),je(this,r,Ze,We,Se,{})}}export{xe as component};
