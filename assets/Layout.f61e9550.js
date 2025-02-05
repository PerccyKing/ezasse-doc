import{_ as S,r as R,o as a,c as i,d as L,f as C,i as P,j as p,F as I,k as A,l as w,m as de,a as g,t as x,n as z,p as Y,q as T,w as N,s as ce,h,v as y,b as j,x as X,y as Te,z as J,A as Q,B as K,C as pe,D as _e,E,u as he,g as D,T as me,G as O,H as fe,I as q,J as G,K as xe,L as Be,M as Z,N as be,O as ge,e as Ne,P as ke,Q as De,R as U,S as ee,U as Ie,V as He,W as Me,X as Pe}from"./app.9a5637d6.js";const Ee=u=>/^mailto:/.test(u),Re=u=>/^tel:/.test(u),Ae={},Fe={class:"theme-default-content custom"};function Oe(u,n){const e=R("Content");return a(),i("div",Fe,[L(e)])}var ze=S(Ae,[["render",Oe],["__file","HomeContent.vue"]]);const We={key:0,class:"features"},Ve=C({__name:"HomeFeatures",setup(u){const n=P(),e=p(()=>de(n.value.features)?n.value.features:[]);return(s,r)=>e.value.length?(a(),i("div",We,[(a(!0),i(I,null,A(e.value,v=>(a(),i("div",{key:v.title,class:"feature"},[g("h2",null,x(v.title),1),g("p",null,x(v.details),1)]))),128))])):w("",!0)}});var Ue=S(Ve,[["__file","HomeFeatures.vue"]]);const je=["innerHTML"],Ke=["textContent"],qe=C({__name:"HomeFooter",setup(u){const n=P(),e=p(()=>n.value.footer),s=p(()=>n.value.footerHtml);return(r,v)=>e.value?(a(),i(I,{key:0},[s.value?(a(),i("div",{key:0,class:"footer",innerHTML:e.value},null,8,je)):(a(),i("div",{key:1,class:"footer",textContent:x(e.value)},null,8,Ke))],64)):w("",!0)}});var Ge=S(qe,[["__file","HomeFooter.vue"]]);const Xe=["href","rel","target","aria-label"],Ye=C({inheritAttrs:!1}),Je=C({...Ye,__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(u){const n=u,e=z(),s=Te(),{item:r}=Y(n),v=p(()=>X(r.value.link)),m=p(()=>Ee(r.value.link)||Re(r.value.link)),_=p(()=>{if(!m.value){if(r.value.target)return r.value.target;if(v.value)return"_blank"}}),t=p(()=>_.value==="_blank"),o=p(()=>!v.value&&!m.value&&!t.value),l=p(()=>{if(!m.value){if(r.value.rel)return r.value.rel;if(t.value)return"noopener noreferrer"}}),c=p(()=>r.value.ariaLabel||r.value.text),d=p(()=>{const $=Object.keys(s.value.locales);return $.length?!$.some(f=>f===r.value.link):r.value.link!=="/"}),b=p(()=>d.value?e.path.startsWith(r.value.link):!1),k=p(()=>o.value?r.value.activeMatch?new RegExp(r.value.activeMatch).test(e.path):b.value:!1);return($,f)=>{const B=R("RouterLink"),H=R("AutoLinkExternalIcon");return o.value?(a(),T(B,ce({key:0,class:{"router-link-active":k.value},to:h(r).link,"aria-label":c.value},$.$attrs),{default:N(()=>[y($.$slots,"before"),j(" "+x(h(r).text)+" ",1),y($.$slots,"after")]),_:3},16,["class","to","aria-label"])):(a(),i("a",ce({key:1,class:"external-link",href:h(r).link,rel:l.value,target:_.value,"aria-label":c.value},$.$attrs),[y($.$slots,"before"),j(" "+x(h(r).text)+" ",1),t.value?(a(),T(H,{key:0})):w("",!0),y($.$slots,"after")],16,Xe))}}});var M=S(Je,[["__file","AutoLink.vue"]]);const Qe={class:"hero"},Ze={key:0,id:"main-title"},et={key:1,class:"description"},tt={key:2,class:"actions"},at=C({__name:"HomeHero",setup(u){const n=P(),e=J(),s=Q(),r=p(()=>s.value&&n.value.heroImageDark!==void 0?n.value.heroImageDark:n.value.heroImage),v=p(()=>n.value.heroText===null?null:n.value.heroText||e.value.title||"Hello"),m=p(()=>n.value.heroAlt||v.value||"hero"),_=p(()=>n.value.tagline===null?null:n.value.tagline||e.value.description||"Welcome to your VuePress site"),t=p(()=>de(n.value.actions)?n.value.actions.map(({text:l,link:c,type:d="primary"})=>({text:l,link:c,type:d})):[]),o=()=>{if(!r.value)return null;const l=K("img",{src:pe(r.value),alt:m.value});return n.value.heroImageDark===void 0?l:K(_e,()=>l)};return(l,c)=>(a(),i("header",Qe,[L(o),v.value?(a(),i("h1",Ze,x(v.value),1)):w("",!0),_.value?(a(),i("p",et,x(_.value),1)):w("",!0),t.value.length?(a(),i("p",tt,[(a(!0),i(I,null,A(t.value,d=>(a(),T(M,{key:d.text,class:E(["action-button",[d.type]]),item:d},null,8,["class","item"]))),128))])):w("",!0)]))}});var nt=S(at,[["__file","HomeHero.vue"]]);const rt={class:"home"},ot=C({__name:"Home",setup(u){return(n,e)=>(a(),i("main",rt,[L(nt),L(Ue),L(ze),L(Ge)]))}});var st=S(ot,[["__file","Home.vue"]]);const lt=C({__name:"NavbarBrand",setup(u){const n=he(),e=J(),s=D(),r=Q(),v=p(()=>s.value.home||n.value),m=p(()=>e.value.title),_=p(()=>r.value&&s.value.logoDark!==void 0?s.value.logoDark:s.value.logo),t=()=>{if(!_.value)return null;const o=K("img",{class:"logo",src:pe(_.value),alt:m.value});return s.value.logoDark===void 0?o:K(_e,()=>o)};return(o,l)=>{const c=R("RouterLink");return a(),T(c,{to:v.value},{default:N(()=>[L(t),m.value?(a(),i("span",{key:0,class:E(["site-name",{"can-hide":_.value}])},x(m.value),3)):w("",!0)]),_:1},8,["to"])}}});var ut=S(lt,[["__file","NavbarBrand.vue"]]);const it=C({__name:"DropdownTransition",setup(u){const n=s=>{s.style.height=s.scrollHeight+"px"},e=s=>{s.style.height=""};return(s,r)=>(a(),T(me,{name:"dropdown",onEnter:n,onAfterEnter:e,onBeforeLeave:n},{default:N(()=>[y(s.$slots,"default")]),_:3}))}});var Le=S(it,[["__file","DropdownTransition.vue"]]);const ct=["aria-label"],vt={class:"title"},dt=["aria-label"],pt={class:"title"},_t={class:"navbar-dropdown"},ht={class:"navbar-dropdown-subtitle"},mt={key:1},ft={class:"navbar-dropdown-subitem-wrapper"},bt=C({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(u){const n=u,{item:e}=Y(n),s=p(()=>e.value.ariaLabel||e.value.text),r=O(!1),v=z();fe(()=>v.path,()=>{r.value=!1});const m=t=>{t.detail===0?r.value=!r.value:r.value=!1},_=(t,o)=>o[o.length-1]===t;return(t,o)=>(a(),i("div",{class:E(["navbar-dropdown-wrapper",{open:r.value}])},[g("button",{class:"navbar-dropdown-title",type:"button","aria-label":s.value,onClick:m},[g("span",vt,x(h(e).text),1),o[1]||(o[1]=g("span",{class:"arrow down"},null,-1))],8,ct),g("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":s.value,onClick:o[0]||(o[0]=l=>r.value=!r.value)},[g("span",pt,x(h(e).text),1),g("span",{class:E(["arrow",r.value?"down":"right"])},null,2)],8,dt),L(Le,null,{default:N(()=>[q(g("ul",_t,[(a(!0),i(I,null,A(h(e).children,l=>(a(),i("li",{key:l.text,class:"navbar-dropdown-item"},[l.children?(a(),i(I,{key:0},[g("h4",ht,[l.link?(a(),T(M,{key:0,item:l,onFocusout:c=>_(l,h(e).children)&&l.children.length===0&&(r.value=!1)},null,8,["item","onFocusout"])):(a(),i("span",mt,x(l.text),1))]),g("ul",ft,[(a(!0),i(I,null,A(l.children,c=>(a(),i("li",{key:c.link,class:"navbar-dropdown-subitem"},[L(M,{item:c,onFocusout:d=>_(c,l.children)&&_(l,h(e).children)&&(r.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(a(),T(M,{key:1,item:l,onFocusout:c=>_(l,h(e).children)&&(r.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[G,r.value]])]),_:1})],2))}});var gt=S(bt,[["__file","NavbarDropdown.vue"]]);const ve=u=>decodeURI(u).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),kt=(u,n)=>{if(n.hash===u)return!0;const e=ve(n.path),s=ve(u);return e===s},$e=(u,n)=>u.link&&kt(u.link,n)?!0:u.children?u.children.some(e=>$e(e,n)):!1,ye=u=>!X(u)||/github\.com/.test(u)?"GitHub":/bitbucket\.org/.test(u)?"Bitbucket":/gitlab\.com/.test(u)?"GitLab":/gitee\.com/.test(u)?"Gitee":null,Lt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},$t=({docsRepo:u,editLinkPattern:n})=>{if(n)return n;const e=ye(u);return e!==null?Lt[e]:null},yt=({docsRepo:u,docsBranch:n,docsDir:e,filePathRelative:s,editLinkPattern:r})=>{if(!s)return null;const v=$t({docsRepo:u,editLinkPattern:r});return v?v.replace(/:repo/,X(u)?u:`https://github.com/${u}`).replace(/:branch/,n).replace(/:path/,xe(`${Be(e)}/${s}`)):null},wt={key:0,class:"navbar-items"},St=C({__name:"NavbarItems",setup(u){const n=()=>{const o=Z(),l=he(),c=J(),d=D();return p(()=>{var B,H;const b=Object.keys(c.value.locales);if(b.length<2)return[];const k=o.currentRoute.value.path,$=o.currentRoute.value.fullPath;return[{text:(B=d.value.selectLanguageText)!=null?B:"unknown language",ariaLabel:(H=d.value.selectLanguageAriaLabel)!=null?H:"unkown language",children:b.map(F=>{var ne,re,oe,se,le,ue;const W=(re=(ne=c.value.locales)==null?void 0:ne[F])!=null?re:{},te=(se=(oe=d.value.locales)==null?void 0:oe[F])!=null?se:{},ae=`${W.lang}`,Se=(le=te.selectLanguageName)!=null?le:ae;let V;if(ae===c.value.lang)V=$;else{const ie=k.replace(l.value,F);o.getRoutes().some(Ce=>Ce.path===ie)?V=ie:V=(ue=te.home)!=null?ue:F}return{text:Se,link:V}})}]})},e=()=>{const o=D(),l=p(()=>o.value.repo),c=p(()=>l.value?ye(l.value):null),d=p(()=>l.value&&!X(l.value)?`https://github.com/${l.value}`:l.value),b=p(()=>d.value?o.value.repoLabel?o.value.repoLabel:c.value===null?"Source":c.value:null);return p(()=>!d.value||!b.value?[]:[{text:b.value,link:d.value}])},s=o=>be(o)?ge(o):o.children?{...o,children:o.children.map(s)}:o,v=(()=>{const o=D();return p(()=>(o.value.navbar||[]).map(s))})(),m=n(),_=e(),t=p(()=>[...v.value,...m.value,..._.value]);return(o,l)=>t.value.length?(a(),i("nav",wt,[(a(!0),i(I,null,A(t.value,c=>(a(),i("div",{key:c.text,class:"navbar-item"},[c.children?(a(),T(gt,{key:0,item:c},null,8,["item"])):(a(),T(M,{key:1,item:c},null,8,["item"]))]))),128))])):w("",!0)}});var we=S(St,[["__file","NavbarItems.vue"]]);const Ct=["title"],Tt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},xt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Bt=C({__name:"ToggleDarkModeButton",setup(u){const n=D(),e=Q(),s=()=>{e.value=!e.value};return(r,v)=>(a(),i("button",{class:"toggle-dark-button",title:h(n).toggleDarkMode,onClick:s},[q((a(),i("svg",Tt,v[0]||(v[0]=[Ne('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9)]),512)),[[G,!h(e)]]),q((a(),i("svg",xt,v[1]||(v[1]=[g("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1)]),512)),[[G,h(e)]])],8,Ct))}});var Nt=S(Bt,[["__file","ToggleDarkModeButton.vue"]]);const Dt=["title"],It=C({__name:"ToggleSidebarButton",emits:["toggle"],setup(u){const n=D();return(e,s)=>(a(),i("div",{class:"toggle-sidebar-button",title:h(n).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:s[0]||(s[0]=r=>e.$emit("toggle"))},s[1]||(s[1]=[g("div",{class:"icon","aria-hidden":"true"},[g("span"),g("span"),g("span")],-1)]),8,Dt))}});var Ht=S(It,[["__file","ToggleSidebarButton.vue"]]);const Mt=C({__name:"Navbar",emits:["toggle-sidebar"],setup(u){const n=D(),e=O(null),s=O(null),r=O(0),v=p(()=>r.value?{maxWidth:r.value+"px"}:{}),m=p(()=>n.value.darkMode);ke(()=>{const o=_(e.value,"paddingLeft")+_(e.value,"paddingRight"),l=()=>{var c;window.innerWidth<=719?r.value=0:r.value=e.value.offsetWidth-o-(((c=s.value)==null?void 0:c.offsetWidth)||0)};l(),window.addEventListener("resize",l,!1),window.addEventListener("orientationchange",l,!1)});function _(t,o){var d,b,k;const l=(k=(b=(d=t==null?void 0:t.ownerDocument)==null?void 0:d.defaultView)==null?void 0:b.getComputedStyle(t,null))==null?void 0:k[o],c=Number.parseInt(l,10);return Number.isNaN(c)?0:c}return(t,o)=>{const l=R("NavbarSearch");return a(),i("header",{ref_key:"navbar",ref:e,class:"navbar"},[L(Ht,{onToggle:o[0]||(o[0]=c=>t.$emit("toggle-sidebar"))}),g("span",{ref_key:"navbarBrand",ref:s},[L(ut)],512),g("div",{class:"navbar-items-wrapper",style:De(v.value)},[y(t.$slots,"before"),L(we,{class:"can-hide"}),y(t.$slots,"after"),m.value?(a(),T(Nt,{key:0})):w("",!0),L(l)],4)],512)}}});var Pt=S(Mt,[["__file","Navbar.vue"]]);const Et={class:"page-meta"},Rt={key:0,class:"meta-item edit-link"},At={key:1,class:"meta-item last-updated"},Ft={class:"meta-item-label"},Ot={class:"meta-item-info"},zt={key:2,class:"meta-item contributors"},Wt={class:"meta-item-label"},Vt={class:"meta-item-info"},Ut=["title"],jt=C({__name:"PageMeta",setup(u){const n=()=>{const t=D(),o=U(),l=P();return p(()=>{var H,F,W;if(!((F=(H=l.value.editLink)!=null?H:t.value.editLink)!=null?F:!0))return null;const{repo:d,docsRepo:b=d,docsBranch:k="main",docsDir:$="",editLinkText:f}=t.value;if(!b)return null;const B=yt({docsRepo:b,docsBranch:k,docsDir:$,filePathRelative:o.value.filePathRelative,editLinkPattern:(W=l.value.editLinkPattern)!=null?W:t.value.editLinkPattern});return B?{text:f!=null?f:"Edit this page",link:B}:null})},e=()=>{const t=D(),o=U(),l=P();return p(()=>{var b,k,$,f;return!((k=(b=l.value.lastUpdated)!=null?b:t.value.lastUpdated)!=null?k:!0)||!(($=o.value.git)!=null&&$.updatedTime)?null:new Date((f=o.value.git)==null?void 0:f.updatedTime).toLocaleString()})},s=()=>{const t=D(),o=U(),l=P();return p(()=>{var d,b,k,$;return((b=(d=l.value.contributors)!=null?d:t.value.contributors)!=null?b:!0)&&($=(k=o.value.git)==null?void 0:k.contributors)!=null?$:null})},r=D(),v=n(),m=e(),_=s();return(t,o)=>{const l=R("ClientOnly");return a(),i("footer",Et,[h(v)?(a(),i("div",Rt,[L(M,{class:"meta-item-label",item:h(v)},null,8,["item"])])):w("",!0),h(m)?(a(),i("div",At,[g("span",Ft,x(h(r).lastUpdatedText)+": ",1),L(l,null,{default:N(()=>[g("span",Ot,x(h(m)),1)]),_:1})])):w("",!0),h(_)&&h(_).length?(a(),i("div",zt,[g("span",Wt,x(h(r).contributorsText)+": ",1),g("span",Vt,[(a(!0),i(I,null,A(h(_),(c,d)=>(a(),i(I,{key:d},[g("span",{class:"contributor",title:`email: ${c.email}`},x(c.name),9,Ut),d!==h(_).length-1?(a(),i(I,{key:0},[j(", ")],64)):w("",!0)],64))),128))])])):w("",!0)])}}});var Kt=S(jt,[["__file","PageMeta.vue"]]);const qt={key:0,class:"page-nav"},Gt={class:"inner"},Xt={key:0,class:"prev"},Yt={key:1,class:"next"},Jt=C({__name:"PageNav",setup(u){const n=t=>t===!1?null:be(t)?ge(t):Ie(t)?t:!1,e=(t,o,l)=>{const c=t.findIndex(d=>d.link===o);if(c!==-1){const d=t[c+l];return d!=null&&d.link?d:null}for(const d of t)if(d.children){const b=e(d.children,o,l);if(b)return b}return null},s=P(),r=ee(),v=z(),m=p(()=>{const t=n(s.value.prev);return t!==!1?t:e(r.value,v.path,-1)}),_=p(()=>{const t=n(s.value.next);return t!==!1?t:e(r.value,v.path,1)});return(t,o)=>m.value||_.value?(a(),i("nav",qt,[g("p",Gt,[m.value?(a(),i("span",Xt,[L(M,{item:m.value},null,8,["item"])])):w("",!0),_.value?(a(),i("span",Yt,[L(M,{item:_.value},null,8,["item"])])):w("",!0)])])):w("",!0)}});var Qt=S(Jt,[["__file","PageNav.vue"]]);const Zt={class:"page"},ea={class:"theme-default-content"},ta=C({__name:"Page",setup(u){return(n,e)=>{const s=R("Content");return a(),i("main",Zt,[y(n.$slots,"top"),g("div",ea,[L(s)]),L(Kt),L(Qt),y(n.$slots,"bottom")])}}});var aa=S(ta,[["__file","Page.vue"]]);const na={class:"sidebar-item-children"},ra=C({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(u){const n=u,{item:e,depth:s}=Y(n),r=z(),v=Z(),m=p(()=>$e(e.value,r)),_=p(()=>({"sidebar-item":!0,"sidebar-heading":s.value===0,active:m.value,collapsible:e.value.collapsible})),t=O(!0),o=O(void 0);return e.value.collapsible&&(t.value=m.value,o.value=()=>{t.value=!t.value},v.afterEach(()=>{t.value=m.value})),(l,c)=>{var b;const d=R("SidebarItem",!0);return a(),i("li",null,[h(e).link?(a(),T(M,{key:0,class:E(_.value),item:h(e)},null,8,["class","item"])):(a(),i("p",{key:1,tabindex:"0",class:E(_.value),onClick:c[0]||(c[0]=(...k)=>o.value&&o.value(...k)),onKeydown:c[1]||(c[1]=He((...k)=>o.value&&o.value(...k),["enter"]))},[j(x(h(e).text)+" ",1),h(e).collapsible?(a(),i("span",{key:0,class:E(["arrow",t.value?"down":"right"])},null,2)):w("",!0)],34)),(b=h(e).children)!=null&&b.length?(a(),T(Le,{key:2},{default:N(()=>[q(g("ul",na,[(a(!0),i(I,null,A(h(e).children,k=>(a(),T(d,{key:`${h(s)}${k.text}${k.link}`,item:k,depth:h(s)+1},null,8,["item","depth"]))),128))],512),[[G,t.value]])]),_:1})):w("",!0)])}}});var oa=S(ra,[["__file","SidebarItem.vue"]]);const sa={key:0,class:"sidebar-items"},la=C({__name:"SidebarItems",setup(u){const n=z(),e=ee();return fe(()=>n.hash,s=>{const r=document.querySelector(".sidebar");if(!r)return;const v=document.querySelector(`.sidebar a.sidebar-item[href="${n.path}${s}"]`);if(!v)return;const m=r.getBoundingClientRect().top,_=r.getBoundingClientRect().height,t=v.getBoundingClientRect().top,o=v.getBoundingClientRect().height;t<m?v.scrollIntoView(!0):t+o>m+_&&v.scrollIntoView(!1)}),(s,r)=>h(e).length?(a(),i("ul",sa,[(a(!0),i(I,null,A(h(e),v=>(a(),T(oa,{key:v.link||v.text,item:v},null,8,["item"]))),128))])):w("",!0)}});var ua=S(la,[["__file","SidebarItems.vue"]]);const ia={class:"sidebar"},ca=C({__name:"Sidebar",setup(u){return(n,e)=>(a(),i("aside",ia,[L(we),y(n.$slots,"top"),L(ua),y(n.$slots,"bottom")]))}});var va=S(ca,[["__file","Sidebar.vue"]]);const da=C({__name:"Layout",setup(u){const n=U(),e=P(),s=D(),r=p(()=>e.value.navbar!==!1&&s.value.navbar!==!1),v=ee(),m=O(!1),_=f=>{m.value=typeof f=="boolean"?f:!m.value},t={x:0,y:0},o=f=>{t.x=f.changedTouches[0].clientX,t.y=f.changedTouches[0].clientY},l=f=>{const B=f.changedTouches[0].clientX-t.x,H=f.changedTouches[0].clientY-t.y;Math.abs(B)>Math.abs(H)&&Math.abs(B)>40&&(B>0&&t.x<=80?_(!0):_(!1))},c=p(()=>[{"no-navbar":!r.value,"no-sidebar":!v.value.length,"sidebar-open":m.value},e.value.pageClass]);let d;ke(()=>{d=Z().afterEach(()=>{_(!1)})}),Me(()=>{d()});const b=Pe(),k=b.resolve,$=b.pending;return(f,B)=>(a(),i("div",{class:E(["theme-container",c.value]),onTouchstart:o,onTouchend:l},[y(f.$slots,"navbar",{},()=>[r.value?(a(),T(Pt,{key:0,onToggleSidebar:_},{before:N(()=>[y(f.$slots,"navbar-before")]),after:N(()=>[y(f.$slots,"navbar-after")]),_:3})):w("",!0)]),g("div",{class:"sidebar-mask",onClick:B[0]||(B[0]=H=>_(!1))}),y(f.$slots,"sidebar",{},()=>[L(va,null,{top:N(()=>[y(f.$slots,"sidebar-top")]),bottom:N(()=>[y(f.$slots,"sidebar-bottom")]),_:3})]),y(f.$slots,"page",{},()=>[h(e).home?(a(),T(st,{key:0})):(a(),T(me,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:h(k),onBeforeLeave:h($)},{default:N(()=>[(a(),T(aa,{key:h(n).path},{top:N(()=>[y(f.$slots,"page-top")]),bottom:N(()=>[y(f.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});var _a=S(da,[["__file","Layout.vue"]]);export{_a as default};
