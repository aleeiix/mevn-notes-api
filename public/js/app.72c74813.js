(function(e){function t(t){for(var o,r,i=t[0],c=t[1],s=t[2],l=0,f=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a={app:0},u=[];function i(e){return c.p+"js/"+({about:"about",home:"home",login:"login",notes:"notes"}[e]||e)+"."+{about:"91b19df4",home:"6e3823f3",login:"ce49517e",notes:"02569052"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={home:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about",home:"home",login:"login",notes:"notes"}[e]||e)+"."+{about:"31d6cfe0",home:"bcdfca02",login:"31d6cfe0",notes:"31d6cfe0"}[e]+".css",a=c.p+o,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===o||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete r[e],d.parentNode.removeChild(d),n(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var u=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",[n("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{href:"#"}},[e._v("NavBar")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/"}},[e._v("Home")]),n("b-nav-item",{attrs:{to:"/about"}},[e._v("About")]),e.isActive?e._e():n("b-nav-item",{attrs:{to:"/login"}},[e._v("Login")]),e.isActive?n("b-nav-item",{attrs:{to:"/notes"}},[e._v("Notes")]):e._e()],1),e.isActive?n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("em",[e._v("User")])]},proxy:!0}],null,!1,4258386881)},[n("b-dropdown-item",{on:{click:e.logout}},[e._v("Sign Out")])],1)],1):e._e()],1)],1)],1),n("router-view")],1)},a=[],u=n("5530"),i=n("2f62"),c={computed:Object(u["a"])({},Object(i["c"])(["isActive"])),methods:Object(u["a"])({},Object(i["b"])(["logout","getToken"])),created:function(){this.getToken()}},s=c,l=(n("034f"),n("2877")),f=Object(l["a"])(s,r,a,!1,null,null,null),d=f.exports,p=(n("45fc"),n("d3b7"),n("8c4f")),m=n("04e1"),v=n.n(m);o["default"].use(i["a"]);var b=new i["a"].Store({state:{token:localStorage.getItem("token")||null,user:null},getters:{isActive:function(e){return!!e.token},token:function(e){return e.token}},mutations:{setUser:function(e,t){e.token=t,e.user=t?v()(t):null}},actions:{getToken:function(e){var t=e.commit,n=localStorage.getItem("token");t("setUser",n||null)},saveUser:function(e,t){var n=e.commit;localStorage.setItem("token",t),n("setUser",t)},logout:function(e){var t=e.commit;localStorage.removeItem("token"),t("setUser",null),y.push({name:"Login"})}}});o["default"].use(p["a"]);var h=[{path:"/",name:"Home",component:function(){return n.e("home").then(n.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/notes",name:"Notes",component:function(){return n.e("notes").then(n.bind(null,"0841"))},meta:{requireAuth:!0}},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}}],g=new p["a"]({mode:"history",base:"/",routes:h});g.beforeEach((function(e,t,n){var o=e.matched.some((function(e){return e.meta.requireAuth}));o&&!b.state.token?n({name:"Login"}):n()}));var y=g,k=n("5f5b"),_=n("b1e0"),w=(n("f9e3"),n("2dd8"),n("bc3a")),O=n.n(w),j=n("a7fe"),S=n.n(j);o["default"].use(k["a"]),o["default"].use(_["a"]),O.a.defaults.baseURL="https://mevn-notes.herokuapp.com/api",o["default"].use(S.a,O.a),o["default"].config.productionTip=!1,new o["default"]({router:y,store:b,render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.72c74813.js.map