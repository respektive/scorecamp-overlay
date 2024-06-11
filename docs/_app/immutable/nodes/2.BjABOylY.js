import{n as U,x,y as pe,s as H,c as K,o as he}from"../chunks/scheduler.C0snAWPl.js";import{S as N,i as M,e as w,s as I,t as L,c as y,a as S,d as k,f as $,b as P,o as p,p as O,g as V,h as d,j as q,u as F,v as B,w as W,n as A,q as Q,l as T,m as X,x as G,k as ee,y as ge}from"../chunks/index.BQssWk23.js";import{d as ue,w as Y,i as ve}from"../chunks/entry.BJERGNGn.js";const fe=typeof window<"u";let ke=fe?()=>window.performance.now():()=>Date.now(),de=fe?t=>requestAnimationFrame(t):U;const z=new Set;function me(t){z.forEach(e=>{e.c(t)||(z.delete(e),e.f())}),z.size!==0&&de(me)}function be(t){let e;return z.size===0&&de(me),{promise:new Promise(n=>{z.add(e={c:t,f:n})}),abort(){z.delete(e)}}}function te(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}async function we(){return(await(await fetch("https://respektive.pw/scorecamp/")).json()).map(s=>({username:s.username,user_id:s.user_id,score_at_start:s.starting_ranked_score,current_score:s.ranked_score,gained_score:s.gained_score})).sort((s,a)=>a.gained_score-s.gained_score).map((s,a)=>({...s,rank:a+1}))}async function ye({depends:t}){return t("data:rankings"),{rankings:await we()}}const Ne=Object.freeze(Object.defineProperty({__proto__:null,load:ye},Symbol.toStringTag,{value:"Module"}));function Se(t){if(typeof window>"u"){const{subscribe:a}=Y(t);return{subscribe:a}}const e=Y(window.location.href),n=history.pushState,r=history.replaceState,s=()=>e.set(window.location.href);return history.pushState=function(){n.apply(this,arguments),s()},history.replaceState=function(){r.apply(this,arguments),s()},window.addEventListener("popstate",s),window.addEventListener("hashchange",s),{subscribe:ue(e,a=>new URL(a)).subscribe}}const Ee=Se();function re(t){return Object.prototype.toString.call(t)==="[object Date]"}function je(t){return--t*t*t*t*t+1}function Z(t,e){if(t===e||t!==t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const r=e.map((s,a)=>Z(t[a],s));return s=>r.map(a=>a(s))}if(n==="object"){if(!t||!e)throw new Error("Object cannot be null");if(re(t)&&re(e)){t=t.getTime(),e=e.getTime();const a=e-t;return i=>new Date(t+i*a)}const r=Object.keys(e),s={};return r.forEach(a=>{s[a]=Z(t[a],e[a])}),a=>{const i={};return r.forEach(f=>{i[f]=s[f](a)}),i}}if(n==="number"){const r=e-t;return s=>t+s*r}throw new Error(`Cannot interpolate ${n} values`)}function ne(t,e={}){const n=Y(t);let r,s=t;function a(i,f){if(t==null)return n.set(t=i),Promise.resolve();s=i;let l=r,o=!1,{delay:u=0,duration:c=400,easing:h=pe,interpolate:g=Z}=x(x({},e),f);if(c===0)return l&&(l.abort(),l=null),n.set(t=s),Promise.resolve();const v=ke()+u;let E;return r=be(j=>{if(j<v)return!0;o||(E=g(t,i),typeof c=="function"&&(c=c(t,i)),o=!0),l&&(l.abort(),l=null);const b=j-v;return b>c?(n.set(t=i),!1):(n.set(t=E(h(b/c))),!0)}),r.promise}return{set:a,update:(i,f)=>a(i(s,t),f),subscribe:n.subscribe}}const se={duration:2500,easing:je};function De(t){let e,n,r,s,a,i=t[0].username+"",f,l,o,u,c,h,g,v,E,j=t[0].rank+"",b;return{c(){e=w("div"),n=w("div"),r=I(),s=w("div"),a=w("p"),f=L(i),l=I(),o=w("hr"),u=I(),c=w("p"),h=L(t[2]),g=I(),v=w("p"),E=L("#"),b=L(j),this.h()},l(m){e=y(m,"DIV",{class:!0,style:!0});var _=S(e);n=y(_,"DIV",{id:!0,style:!0,class:!0}),S(n).forEach(k),r=$(_),s=y(_,"DIV",{class:!0});var D=S(s);a=y(D,"P",{id:!0,class:!0});var R=S(a);f=P(R,i),R.forEach(k),l=$(D),o=y(D,"HR",{class:!0}),u=$(D),c=y(D,"P",{id:!0,class:!0});var C=S(c);h=P(C,t[2]),C.forEach(k),D.forEach(k),g=$(_),v=y(_,"P",{id:!0,class:!0});var J=S(v);E=P(J,"#"),b=P(J,j),J.forEach(k),_.forEach(k),this.h()},h(){p(n,"id","avatar"),O(n,"background-image","url(https://a.ppy.sh/"+t[0].user_id+")"),p(n,"class","svelte-elt3cm"),p(a,"id","username"),p(a,"class","svelte-elt3cm"),p(o,"class","svelte-elt3cm"),p(c,"id","gained"),p(c,"class","svelte-elt3cm"),p(s,"class","stats svelte-elt3cm"),p(v,"id","rank"),p(v,"class","svelte-elt3cm"),p(e,"class","card svelte-elt3cm"),O(e,"--card-hue",t[1])},m(m,_){V(m,e,_),d(e,n),d(e,r),d(e,s),d(s,a),d(a,f),d(s,l),d(s,o),d(s,u),d(s,c),d(c,h),d(e,g),d(e,v),d(v,E),d(v,b)},p(m,[_]){_&1&&O(n,"background-image","url(https://a.ppy.sh/"+m[0].user_id+")"),_&1&&i!==(i=m[0].username+"")&&q(f,i),_&4&&q(h,m[2]),_&1&&j!==(j=m[0].rank+"")&&q(b,j),_&2&&O(e,"--card-hue",m[1])},i:U,o:U,d(m){m&&k(e)}}}function Le(t,e,n){let r,s;const a=ne(0,se),i=ue(a,o=>Math.round(o).toLocaleString("en-US"));K(t,i,o=>n(2,s=o));const f=ne(0,se);K(t,f,o=>n(1,r=o));let{user:l}=e;return t.$$set=o=>{"user"in o&&n(0,l=o.user)},t.$$.update=()=>{t.$$.dirty&1&&a.set(l.gained_score),t.$$.dirty&1&&f.set(l.gained_score/1e6%360)},[l,r,s,i,f]}class Pe extends N{constructor(e){super(),M(this,e,Le,De,H,{user:0})}}function Ae(t){let e,n,r,s=t[0].rank+"",a,i,f=t[0].username+"",l,o,u,c=t[0].gained_score.toLocaleString("en-US")+"",h,g,v,E=t[1].toLocaleString("en-US")+"",j,b;return{c(){e=w("div"),n=w("p"),r=L("#"),a=L(s),i=L(" - "),l=L(f),o=I(),u=w("p"),h=L(c),g=I(),v=w("span"),j=L(E),this.h()},l(m){e=y(m,"DIV",{class:!0});var _=S(e);n=y(_,"P",{id:!0,class:!0});var D=S(n);r=P(D,"#"),a=P(D,s),i=P(D," - "),l=P(D,f),D.forEach(k),o=$(_),u=y(_,"P",{id:!0,class:!0});var R=S(u);h=P(R,c),g=$(R),v=y(R,"SPAN",{id:!0,class:!0});var C=S(v);j=P(C,E),C.forEach(k),R.forEach(k),_.forEach(k),this.h()},h(){p(n,"id","username"),p(n,"class","svelte-8qxyyi"),p(v,"id",b=t[1]>0?"positive":"negative"),p(v,"class","svelte-8qxyyi"),p(u,"id","score"),p(u,"class","svelte-8qxyyi"),p(e,"class","delta svelte-8qxyyi")},m(m,_){V(m,e,_),d(e,n),d(n,r),d(n,a),d(n,i),d(n,l),d(e,o),d(e,u),d(u,h),d(u,g),d(u,v),d(v,j)},p(m,[_]){_&1&&s!==(s=m[0].rank+"")&&q(a,s),_&1&&f!==(f=m[0].username+"")&&q(l,f),_&1&&c!==(c=m[0].gained_score.toLocaleString("en-US")+"")&&q(h,c),_&2&&E!==(E=m[1].toLocaleString("en-US")+"")&&q(j,E),_&2&&b!==(b=m[1]>0?"positive":"negative")&&p(v,"id",b)},i:U,o:U,d(m){m&&k(e)}}}function Ie(t,e,n){let{main_user:r}=e,{compare_user:s}=e,a=0;return t.$$set=i=>{"main_user"in i&&n(2,r=i.main_user),"compare_user"in i&&n(0,s=i.compare_user)},t.$$.update=()=>{t.$$.dirty&5&&n(1,a=s.gained_score-r.gained_score)},[s,a,r]}class _e extends N{constructor(e){super(),M(this,e,Ie,Ae,H,{main_user:2,compare_user:0})}}function ae(t){let e,n;return e=new _e({props:{main_user:t[0],compare_user:t[1][t[0].rank-2]}}),{c(){F(e.$$.fragment)},l(r){B(e.$$.fragment,r)},m(r,s){W(e,r,s),n=!0},p(r,s){const a={};s&1&&(a.main_user=r[0]),s&3&&(a.compare_user=r[1][r[0].rank-2]),e.$set(a)},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){T(e.$$.fragment,r),n=!1},d(r){G(e,r)}}}function ie(t){let e;return{c(){e=w("div"),this.h()},l(n){e=y(n,"DIV",{id:!0,class:!0}),S(e).forEach(k),this.h()},h(){p(e,"id","spacer"),p(e,"class","svelte-1sj613z")},m(n,r){V(n,e,r)},d(n){n&&k(e)}}}function le(t){let e,n;return e=new _e({props:{main_user:t[0],compare_user:t[1][t[0].rank]}}),{c(){F(e.$$.fragment)},l(r){B(e.$$.fragment,r)},m(r,s){W(e,r,s),n=!0},p(r,s){const a={};s&1&&(a.main_user=r[0]),s&3&&(a.compare_user=r[1][r[0].rank]),e.$set(a)},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){T(e.$$.fragment,r),n=!1},d(r){G(e,r)}}}function $e(t){let e,n,r,s,a,i,f;n=new Pe({props:{user:t[0]}});let l=t[0].rank>1&&ae(t),o=t[0].rank>1&&t[1][t[0].rank]&&ie(),u=t[1][t[0].rank]&&le(t);return{c(){e=w("div"),F(n.$$.fragment),r=I(),s=w("div"),l&&l.c(),a=I(),o&&o.c(),i=I(),u&&u.c(),this.h()},l(c){e=y(c,"DIV",{class:!0});var h=S(e);B(n.$$.fragment,h),r=$(h),s=y(h,"DIV",{class:!0});var g=S(s);l&&l.l(g),a=$(g),o&&o.l(g),i=$(g),u&&u.l(g),g.forEach(k),h.forEach(k),this.h()},h(){p(s,"class","deltas svelte-1sj613z"),p(e,"class","container svelte-1sj613z")},m(c,h){V(c,e,h),W(n,e,null),d(e,r),d(e,s),l&&l.m(s,null),d(s,a),o&&o.m(s,null),d(s,i),u&&u.m(s,null),f=!0},p(c,[h]){const g={};h&1&&(g.user=c[0]),n.$set(g),c[0].rank>1?l?(l.p(c,h),h&1&&A(l,1)):(l=ae(c),l.c(),A(l,1),l.m(s,a)):l&&(Q(),T(l,1,1,()=>{l=null}),X()),c[0].rank>1&&c[1][c[0].rank]?o||(o=ie(),o.c(),o.m(s,i)):o&&(o.d(1),o=null),c[1][c[0].rank]?u?(u.p(c,h),h&3&&A(u,1)):(u=le(c),u.c(),A(u,1),u.m(s,null)):u&&(Q(),T(u,1,1,()=>{u=null}),X())},i(c){f||(A(n.$$.fragment,c),A(l),A(u),f=!0)},o(c){T(n.$$.fragment,c),T(l),T(u),f=!1},d(c){c&&k(e),G(n),l&&l.d(),o&&o.d(),u&&u.d()}}}function Re(t,e,n){let{user:r}=e,{rankings:s}=e;return t.$$set=a=>{"user"in a&&n(0,r=a.user),"rankings"in a&&n(1,s=a.rankings)},[r,s]}class Te extends N{constructor(e){super(),M(this,e,Re,$e,H,{user:0,rankings:1})}}function oe(t,e,n){const r=t.slice();return r[1]=e[n],r[7]=n,r}function qe(t){let e,n=te(t[0]),r=[];for(let s=0;s<n.length;s+=1)r[s]=ce(oe(t,n,s));return{c(){e=w("table");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){e=y(s,"TABLE",{class:!0});var a=S(e);for(let i=0;i<r.length;i+=1)r[i].l(a);a.forEach(k),this.h()},h(){p(e,"class","svelte-glvni4")},m(s,a){V(s,e,a);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(e,null)},p(s,a){if(a&1){n=te(s[0]);let i;for(i=0;i<n.length;i+=1){const f=oe(s,n,i);r[i]?r[i].p(f,a):(r[i]=ce(f),r[i].c(),r[i].m(e,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=n.length}},i:U,o:U,d(s){s&&k(e),ge(r,s)}}}function Ce(t){let e,n;return e=new Te({props:{user:t[1],rankings:t[0]}}),{c(){F(e.$$.fragment)},l(r){B(e.$$.fragment,r)},m(r,s){W(e,r,s),n=!0},p(r,s){const a={};s&2&&(a.user=r[1]),s&1&&(a.rankings=r[0]),e.$set(a)},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){T(e.$$.fragment,r),n=!1},d(r){G(e,r)}}}function ce(t){let e,n,r,s=t[7]+1+"",a,i,f,l,o=t[1].username+"",u,c,h,g,v=t[1].gained_score.toLocaleString()+"",E,j;return{c(){e=w("tr"),n=w("td"),r=L("#"),a=L(s),i=I(),f=w("td"),l=w("a"),u=L(o),h=I(),g=w("td"),E=L(v),j=I(),this.h()},l(b){e=y(b,"TR",{class:!0});var m=S(e);n=y(m,"TD",{class:!0});var _=S(n);r=P(_,"#"),a=P(_,s),_.forEach(k),i=$(m),f=y(m,"TD",{class:!0});var D=S(f);l=y(D,"A",{href:!0,class:!0});var R=S(l);u=P(R,o),R.forEach(k),D.forEach(k),h=$(m),g=y(m,"TD",{class:!0});var C=S(g);E=P(C,v),C.forEach(k),j=$(m),m.forEach(k),this.h()},h(){p(n,"class","rank svelte-glvni4"),p(l,"href",c="#"+t[1].username),p(l,"class","svelte-glvni4"),p(f,"class","user svelte-glvni4"),p(g,"class","score svelte-glvni4"),p(e,"class","svelte-glvni4")},m(b,m){V(b,e,m),d(e,n),d(n,r),d(n,a),d(e,i),d(e,f),d(f,l),d(l,u),d(e,h),d(e,g),d(g,E),d(e,j)},p(b,m){m&1&&o!==(o=b[1].username+"")&&q(u,o),m&1&&c!==(c="#"+b[1].username)&&p(l,"href",c),m&1&&v!==(v=b[1].gained_score.toLocaleString()+"")&&q(E,v)},d(b){b&&k(e)}}}function Ue(t){let e,n,r,s;const a=[Ce,qe],i=[];function f(l,o){return l[1]?0:1}return e=f(t),n=i[e]=a[e](t),{c(){n.c(),r=ee()},l(l){n.l(l),r=ee()},m(l,o){i[e].m(l,o),V(l,r,o),s=!0},p(l,[o]){let u=e;e=f(l),e===u?i[e].p(l,o):(Q(),T(i[u],1,1,()=>{i[u]=null}),X(),n=i[e],n?n.p(l,o):(n=i[e]=a[e](l),n.c()),A(n,1),n.m(r.parentNode,r))},i(l){s||(A(n),s=!0)},o(l){T(n),s=!1},d(l){l&&k(r),i[e].d(l)}}}function Ve(t,e,n){let r,s,a,i;K(t,Ee,o=>n(4,i=o));let{data:f}=e;const l=60*1e3;return he(()=>{const o=setInterval(()=>{ve("data:rankings")},l);return()=>{clearInterval(o)}}),t.$$set=o=>{"data"in o&&n(2,f=o.data)},t.$$.update=()=>{t.$$.dirty&16&&n(3,r=decodeURIComponent(i.hash.substring(1).toLowerCase())),t.$$.dirty&12&&n(1,s=r?f.rankings.find(o=>o.username.toLowerCase()===r):null),t.$$.dirty&4&&n(0,a=f.rankings)},[a,s,f,r,i]}class Me extends N{constructor(e){super(),M(this,e,Ve,Ue,H,{data:2})}}export{Me as component,Ne as universal};