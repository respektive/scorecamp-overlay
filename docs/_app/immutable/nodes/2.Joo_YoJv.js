import{s as H,n as T,c as ae,o as le}from"../chunks/scheduler.BfKkd2ys.js";import{S as M,i as N,e as S,s as j,t as L,c as w,a as E,d as p,f as U,b as D,o as _,p as A,g as R,h as u,j as C,u as O,v as B,w as W,n as P,q as J,l as q,m as K,x as F,k as X,y as ie}from"../chunks/index.NfPZ1jxX.js";import{d as oe,w as Y,i as ce}from"../chunks/entry.NL5J_i5o.js";function Z(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}async function ue(){return(await(await fetch("https://respektive.pw/scorecamp/")).json()).map(s=>({username:s.username,user_id:s.user_id,score_at_start:s.starting_ranked_score,current_score:s.ranked_score,gained_score:s.gained_score})).sort((s,l)=>l.gained_score-s.gained_score).map((s,l)=>({...s,rank:l+1}))}async function fe({depends:n}){return n("data:rankings"),{rankings:await ue()}}const Pe=Object.freeze(Object.defineProperty({__proto__:null,load:fe},Symbol.toStringTag,{value:"Module"}));function de(n){if(typeof window>"u"){const{subscribe:l}=Y(n);return{subscribe:l}}const e=Y(window.location.href),r=history.pushState,t=history.replaceState,s=()=>e.set(window.location.href);return history.pushState=function(){r.apply(this,arguments),s()},history.replaceState=function(){t.apply(this,arguments),s()},window.addEventListener("popstate",s),window.addEventListener("hashchange",s),{subscribe:oe(e,l=>new URL(l)).subscribe}}const _e=de();function me(n){let e,r,t,s,l,i=n[0].username+"",d,a,f,o,c,h=n[0].gained_score.toLocaleString("en-US")+"",g,y,$,V,v=n[0].rank+"",m;return{c(){e=S("div"),r=S("div"),t=j(),s=S("div"),l=S("p"),d=L(i),a=j(),f=S("hr"),o=j(),c=S("p"),g=L(h),y=j(),$=S("p"),V=L("#"),m=L(v),this.h()},l(b){e=w(b,"DIV",{class:!0,style:!0});var k=E(e);r=w(k,"DIV",{id:!0,style:!0,class:!0}),E(r).forEach(p),t=U(k),s=w(k,"DIV",{class:!0});var I=E(s);l=w(I,"P",{id:!0,class:!0});var z=E(l);d=D(z,i),z.forEach(p),a=U(I),f=w(I,"HR",{class:!0}),o=U(I),c=w(I,"P",{id:!0,class:!0});var Q=E(c);g=D(Q,h),Q.forEach(p),I.forEach(p),y=U(k),$=w(k,"P",{id:!0,class:!0});var G=E($);V=D(G,"#"),m=D(G,v),G.forEach(p),k.forEach(p),this.h()},h(){_(r,"id","avatar"),A(r,"background-image","url(https://a.ppy.sh/"+n[0].user_id+")"),_(r,"class","svelte-1rbm126"),_(l,"id","username"),_(l,"class","svelte-1rbm126"),_(f,"class","svelte-1rbm126"),_(c,"id","gained"),_(c,"class","svelte-1rbm126"),_(s,"class","stats svelte-1rbm126"),_($,"id","rank"),_($,"class","svelte-1rbm126"),_(e,"class","card svelte-1rbm126"),A(e,"--card-hue",n[0].gained_score/1e6%360)},m(b,k){R(b,e,k),u(e,r),u(e,t),u(e,s),u(s,l),u(l,d),u(s,a),u(s,f),u(s,o),u(s,c),u(c,g),u(e,y),u(e,$),u($,V),u($,m)},p(b,[k]){k&1&&A(r,"background-image","url(https://a.ppy.sh/"+b[0].user_id+")"),k&1&&i!==(i=b[0].username+"")&&C(d,i),k&1&&h!==(h=b[0].gained_score.toLocaleString("en-US")+"")&&C(g,h),k&1&&v!==(v=b[0].rank+"")&&C(m,v),k&1&&A(e,"--card-hue",b[0].gained_score/1e6%360)},i:T,o:T,d(b){b&&p(e)}}}function he(n,e,r){let{user:t}=e;return n.$$set=s=>{"user"in s&&r(0,t=s.user)},[t]}class pe extends M{constructor(e){super(),N(this,e,he,me,H,{user:0})}}function ge(n){let e,r,t,s=n[0].rank+"",l,i,d=n[0].username+"",a,f,o,c=n[0].gained_score.toLocaleString("en-US")+"",h,g,y,$=n[1].toLocaleString("en-US")+"",V;return{c(){e=S("div"),r=S("p"),t=L("#"),l=L(s),i=L(" - "),a=L(d),f=j(),o=S("p"),h=L(c),g=j(),y=S("span"),V=L($),this.h()},l(v){e=w(v,"DIV",{class:!0});var m=E(e);r=w(m,"P",{id:!0,class:!0});var b=E(r);t=D(b,"#"),l=D(b,s),i=D(b," - "),a=D(b,d),b.forEach(p),f=U(m),o=w(m,"P",{id:!0,class:!0});var k=E(o);h=D(k,c),g=U(k),y=w(k,"SPAN",{id:!0,class:!0});var I=E(y);V=D(I,$),I.forEach(p),k.forEach(p),m.forEach(p),this.h()},h(){_(r,"id","username"),_(r,"class","svelte-8qxyyi"),_(y,"id",n[1]>0?"positive":"negative"),_(y,"class","svelte-8qxyyi"),_(o,"id","score"),_(o,"class","svelte-8qxyyi"),_(e,"class","delta svelte-8qxyyi")},m(v,m){R(v,e,m),u(e,r),u(r,t),u(r,l),u(r,i),u(r,a),u(e,f),u(e,o),u(o,h),u(o,g),u(o,y),u(y,V)},p(v,[m]){m&1&&s!==(s=v[0].rank+"")&&C(l,s),m&1&&d!==(d=v[0].username+"")&&C(a,d),m&1&&c!==(c=v[0].gained_score.toLocaleString("en-US")+"")&&C(h,c)},i:T,o:T,d(v){v&&p(e)}}}function ve(n,e,r){let{main_user:t}=e,{compare_user:s}=e,l=s.gained_score-t.gained_score;return n.$$set=i=>{"main_user"in i&&r(2,t=i.main_user),"compare_user"in i&&r(0,s=i.compare_user)},[s,l,t]}class ne extends M{constructor(e){super(),N(this,e,ve,ge,H,{main_user:2,compare_user:0})}}function x(n){let e,r;return e=new ne({props:{main_user:n[0],compare_user:n[1][n[0].rank-2]}}),{c(){O(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){W(e,t,s),r=!0},p(t,s){const l={};s&1&&(l.main_user=t[0]),s&3&&(l.compare_user=t[1][t[0].rank-2]),e.$set(l)},i(t){r||(P(e.$$.fragment,t),r=!0)},o(t){q(e.$$.fragment,t),r=!1},d(t){F(e,t)}}}function ee(n){let e;return{c(){e=S("div"),this.h()},l(r){e=w(r,"DIV",{id:!0,class:!0}),E(e).forEach(p),this.h()},h(){_(e,"id","spacer"),_(e,"class","svelte-1sj613z")},m(r,t){R(r,e,t)},d(r){r&&p(e)}}}function te(n){let e,r;return e=new ne({props:{main_user:n[0],compare_user:n[1][n[0].rank]}}),{c(){O(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){W(e,t,s),r=!0},p(t,s){const l={};s&1&&(l.main_user=t[0]),s&3&&(l.compare_user=t[1][t[0].rank]),e.$set(l)},i(t){r||(P(e.$$.fragment,t),r=!0)},o(t){q(e.$$.fragment,t),r=!1},d(t){F(e,t)}}}function ke(n){let e,r,t,s,l,i,d;r=new pe({props:{user:n[0]}});let a=n[0].rank>1&&x(n),f=n[0].rank>1&&n[1][n[0].rank]&&ee(),o=n[1][n[0].rank]&&te(n);return{c(){e=S("div"),O(r.$$.fragment),t=j(),s=S("div"),a&&a.c(),l=j(),f&&f.c(),i=j(),o&&o.c(),this.h()},l(c){e=w(c,"DIV",{class:!0});var h=E(e);B(r.$$.fragment,h),t=U(h),s=w(h,"DIV",{class:!0});var g=E(s);a&&a.l(g),l=U(g),f&&f.l(g),i=U(g),o&&o.l(g),g.forEach(p),h.forEach(p),this.h()},h(){_(s,"class","deltas svelte-1sj613z"),_(e,"class","container svelte-1sj613z")},m(c,h){R(c,e,h),W(r,e,null),u(e,t),u(e,s),a&&a.m(s,null),u(s,l),f&&f.m(s,null),u(s,i),o&&o.m(s,null),d=!0},p(c,[h]){const g={};h&1&&(g.user=c[0]),r.$set(g),c[0].rank>1?a?(a.p(c,h),h&1&&P(a,1)):(a=x(c),a.c(),P(a,1),a.m(s,l)):a&&(J(),q(a,1,1,()=>{a=null}),K()),c[0].rank>1&&c[1][c[0].rank]?f||(f=ee(),f.c(),f.m(s,i)):f&&(f.d(1),f=null),c[1][c[0].rank]?o?(o.p(c,h),h&3&&P(o,1)):(o=te(c),o.c(),P(o,1),o.m(s,null)):o&&(J(),q(o,1,1,()=>{o=null}),K())},i(c){d||(P(r.$$.fragment,c),P(a),P(o),d=!0)},o(c){q(r.$$.fragment,c),q(a),q(o),d=!1},d(c){c&&p(e),F(r),a&&a.d(),f&&f.d(),o&&o.d()}}}function be(n,e,r){let{user:t}=e,{rankings:s}=e;return n.$$set=l=>{"user"in l&&r(0,t=l.user),"rankings"in l&&r(1,s=l.rankings)},[t,s]}class Se extends M{constructor(e){super(),N(this,e,be,ke,H,{user:0,rankings:1})}}function se(n,e,r){const t=n.slice();return t[1]=e[r],t[6]=r,t}function we(n){let e,r=Z(n[0]),t=[];for(let s=0;s<r.length;s+=1)t[s]=re(se(n,r,s));return{c(){e=S("table");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=w(s,"TABLE",{class:!0});var l=E(e);for(let i=0;i<t.length;i+=1)t[i].l(l);l.forEach(p),this.h()},h(){_(e,"class","svelte-glvni4")},m(s,l){R(s,e,l);for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(e,null)},p(s,l){if(l&1){r=Z(s[0]);let i;for(i=0;i<r.length;i+=1){const d=se(s,r,i);t[i]?t[i].p(d,l):(t[i]=re(d),t[i].c(),t[i].m(e,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=r.length}},i:T,o:T,d(s){s&&p(e),ie(t,s)}}}function Ee(n){let e,r;return e=new Se({props:{user:n[1],rankings:n[0]}}),{c(){O(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){W(e,t,s),r=!0},p(t,s){const l={};s&2&&(l.user=t[1]),s&1&&(l.rankings=t[0]),e.$set(l)},i(t){r||(P(e.$$.fragment,t),r=!0)},o(t){q(e.$$.fragment,t),r=!1},d(t){F(e,t)}}}function re(n){let e,r,t,s=n[6]+1+"",l,i,d,a,f=n[1].username+"",o,c,h,g,y=n[1].gained_score.toLocaleString()+"",$,V;return{c(){e=S("tr"),r=S("td"),t=L("#"),l=L(s),i=j(),d=S("td"),a=S("a"),o=L(f),h=j(),g=S("td"),$=L(y),V=j(),this.h()},l(v){e=w(v,"TR",{class:!0});var m=E(e);r=w(m,"TD",{class:!0});var b=E(r);t=D(b,"#"),l=D(b,s),b.forEach(p),i=U(m),d=w(m,"TD",{class:!0});var k=E(d);a=w(k,"A",{href:!0,class:!0});var I=E(a);o=D(I,f),I.forEach(p),k.forEach(p),h=U(m),g=w(m,"TD",{class:!0});var z=E(g);$=D(z,y),z.forEach(p),V=U(m),m.forEach(p),this.h()},h(){_(r,"class","rank svelte-glvni4"),_(a,"href",c="#"+n[1].username),_(a,"class","svelte-glvni4"),_(d,"class","user svelte-glvni4"),_(g,"class","score svelte-glvni4"),_(e,"class","svelte-glvni4")},m(v,m){R(v,e,m),u(e,r),u(r,t),u(r,l),u(e,i),u(e,d),u(d,a),u(a,o),u(e,h),u(e,g),u(g,$),u(e,V)},p(v,m){m&1&&f!==(f=v[1].username+"")&&C(o,f),m&1&&c!==(c="#"+v[1].username)&&_(a,"href",c),m&1&&y!==(y=v[1].gained_score.toLocaleString()+"")&&C($,y)},d(v){v&&p(e)}}}function ye(n){let e,r,t,s;const l=[Ee,we],i=[];function d(a,f){return a[1]?0:1}return e=d(n),r=i[e]=l[e](n),{c(){r.c(),t=X()},l(a){r.l(a),t=X()},m(a,f){i[e].m(a,f),R(a,t,f),s=!0},p(a,[f]){let o=e;e=d(a),e===o?i[e].p(a,f):(J(),q(i[o],1,1,()=>{i[o]=null}),K(),r=i[e],r?r.p(a,f):(r=i[e]=l[e](a),r.c()),P(r,1),r.m(t.parentNode,t))},i(a){s||(P(r),s=!0)},o(a){q(r),s=!1},d(a){a&&p(t),i[e].d(a)}}}function $e(n,e,r){let t,s,l,i;ae(n,_e,a=>r(4,i=a));let{data:d}=e;return le(()=>{const a=setInterval(()=>{ce("data:rankings")},6e4);return()=>{clearInterval(a)}}),n.$$set=a=>{"data"in a&&r(2,d=a.data)},n.$$.update=()=>{n.$$.dirty&16&&r(3,t=decodeURIComponent(i.hash.substring(1).toLowerCase())),n.$$.dirty&12&&r(1,s=t?d.rankings.find(a=>a.username.toLowerCase()===t):null),n.$$.dirty&4&&r(0,l=d.rankings)},[l,s,d,t,i]}class je extends M{constructor(e){super(),N(this,e,$e,ye,H,{data:2})}}export{je as component,Pe as universal};
