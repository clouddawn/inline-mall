(function(){"use strict";var t={944:function(t,e,n){var r=n(6369),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("tab-bar",{staticClass:"app-tab-bar ignore"}),e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},i=[],a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tabbar"},[e("tab-bar-itme",{attrs:{link:"/home",activeColor:"red"},scopedSlots:t._u([{key:"tabbar-item-icon",fn:function(){return[e("img",{attrs:{src:n(9537),alt:""}})]},proxy:!0},{key:"tabbar-item-active-icon",fn:function(){return[e("img",{attrs:{src:n(996),alt:""}})]},proxy:!0},{key:"tabbar-item-text",fn:function(){return[e("div",[t._v("首页")])]},proxy:!0}])}),e("tab-bar-itme",{attrs:{link:"/category"},scopedSlots:t._u([{key:"tabbar-item-icon",fn:function(){return[e("img",{attrs:{src:n(4166),alt:""}})]},proxy:!0},{key:"tabbar-item-active-icon",fn:function(){return[e("img",{attrs:{src:n(1488),alt:""}})]},proxy:!0},{key:"tabbar-item-text",fn:function(){return[e("div",[t._v("分类")])]},proxy:!0}])}),e("tab-bar-itme",{attrs:{link:"/cart"},scopedSlots:t._u([{key:"tabbar-item-icon",fn:function(){return[e("img",{attrs:{src:n(720),alt:""}})]},proxy:!0},{key:"tabbar-item-active-icon",fn:function(){return[e("img",{attrs:{src:n(4150),alt:""}})]},proxy:!0},{key:"tabbar-item-text",fn:function(){return[e("div",[t._v("购物车")])]},proxy:!0}])}),e("tab-bar-itme",{attrs:{link:"/profile"},scopedSlots:t._u([{key:"tabbar-item-icon",fn:function(){return[e("img",{attrs:{src:n(8561),alt:""}})]},proxy:!0},{key:"tabbar-item-active-icon",fn:function(){return[e("img",{attrs:{src:n(5120),alt:""}})]},proxy:!0},{key:"tabbar-item-text",fn:function(){return[e("div",[t._v("我的")])]},proxy:!0}])})],1)},c=[],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tabbar-item",on:{click:t.itemClick}},[t.isActive?t._t("tabbar-item-active-icon"):t._t("tabbar-item-icon"),e("div",{staticClass:"tabbar-text",style:t.activeStyle},[t._t("tabbar-item-text")],2)],2)},u=[],l={name:"TabBarItme",data(){return{options:["首页首页首页首页首页","分类","购物车","我的"],currentIndex:0}},props:{link:String,activeColor:{type:String,default:"red"}},methods:{select(t){this.currentIndex=t},itemClick(){this.$router.push(this.link)}},computed:{isActive(){return this.$route.path.indexOf(this.link)>-1},activeStyle(){return this.isActive?{color:this.activeColor}:{}}}},f=l,d=n(1001),p=(0,d.Z)(f,s,u,!1,null,"4c0df596",null),m=p.exports,b={components:{TabBarItme:m},data(){return{}},mounted(){},methods:{select(t){this.currentIndex=t}}},h=b,v=(0,d.Z)(h,a,c,!1,null,"78fbe8fd",null),g=v.exports,y={components:{TabBar:g},data(){return{}}},x=y,k=(0,d.Z)(x,o,i,!1,null,null,null),_=k.exports,w=n(2631);r.ZP.use(w.Z);const C=w.Z.prototype.push;w.Z.prototype.push=function(t){return C.call(this,t).catch((t=>t))};const P=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:()=>Promise.all([n.e(165),n.e(519),n.e(209)]).then(n.bind(n,8845))},{path:"/cart",name:"Cart",component:()=>Promise.all([n.e(165),n.e(36)]).then(n.bind(n,1074))},{path:"/category",name:"Category",component:()=>Promise.all([n.e(165),n.e(519),n.e(792)]).then(n.bind(n,6338))},{path:"/profile",name:"Profile",component:()=>n.e(724).then(n.bind(n,8724))},{path:"/detail/:id",name:"Detail",component:()=>Promise.all([n.e(165),n.e(519),n.e(422)]).then(n.bind(n,5202))}],S=new w.Z({mode:"history",base:"/",routes:P});var Z=S,O=n(3822);const T="add_counter",L="add_to_cart";var j={[T](t,e){e.count++},[L](t,e){e.checked=!0,t.cartList.push(e)}},A={addCart({state:t,commit:e},n){return new Promise(((r,o)=>{let i=t.cartList.find((t=>t.id===n.id));i?(e(T,i),r("商品数量加1")):(e(L,n),r("商品已加入到购物车"))}))}},E={cartLength(t){return t.cartList.length},cartChekedList(t){return t.cartList.filter((t=>t.checked))}};r.ZP.use(O.ZP);const N={cartList:[]};var $=new O.ZP.Store({state:N,getters:E,mutations:j,actions:A,modules:{}}),B=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"toast"},[t._v(" "+t._s(t.message)+" ")])},I=[],D={name:"Toast",components:{},data(){return{isShow:!1,message:""}},mounted(){},methods:{show(t="默认内容",e=2500){this.message=t,this.isShow=!0,setTimeout((()=>{this.isShow=!1,this.message=""}),e)}}},F=D,M=(0,d.Z)(F,B,I,!1,null,"01b1b1c4",null),q=M.exports;const H={install:function(t){const e=t.extend(q),n=new e;n.$mount(document.createElement("div")),document.body.appendChild(n.$el),t.prototype.$toast=n}};var K=H,U=n(6112);r.ZP.config.productionTip=!1,r.ZP.prototype.$bus=new r.ZP,r.ZP.use(K),r.ZP.use(U.Z,{preLoad:1.3,attempt:3}),new r.ZP({router:Z,store:$,render:t=>t(_)}).$mount("#app")},4166:function(t,e,n){t.exports=n.p+"img/category.7181e1c2.svg"},1488:function(t,e,n){t.exports=n.p+"img/category_active.a33536c0.svg"},9537:function(t,e,n){t.exports=n.p+"img/home.cd35010f.svg"},996:function(t,e,n){t.exports=n.p+"img/home_active.1ba3ef5a.svg"},8561:function(t,e,n){t.exports=n.p+"img/profile.f85b0ca1.svg"},5120:function(t,e,n){t.exports=n.p+"img/profile_active.999a4310.svg"},720:function(t,e,n){t.exports=n.p+"img/shopcart.03205c0d.svg"},4150:function(t,e,n){t.exports=n.p+"img/shopcart_active.8521e9d3.svg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var a=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],i=t[l][2];for(var c=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(c=!1,i<a&&(a=i));if(c){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{36:"8e18fffb",165:"1ba126bb",209:"33160bb1",422:"33ebad06",519:"0c71bd1e",724:"8eedeede",792:"e8ad4722"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{36:"6f8c2eef",209:"002df32f",422:"d09d96a8",724:"56927dc4",792:"1d903cb3"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="testmall:";n.l=function(r,o,i,a){if(t[r])t[r].push(o);else{var c,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+i){c=f;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",e+i),c.src=r),t[r]=[o];var d=function(e,n){c.onerror=c.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||e,s=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=c,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=i,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===e))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===t||i===e)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),c=n.p+a;if(e(a,c))return o();t(r,c,o,i)}))},o={143:0};n.f.miniCss=function(t,e){var n={36:1,209:1,422:1,724:1,792:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(e),c=new Error,s=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,o[1](c)}};n.l(a,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,a=r[0],c=r[1],s=r[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var l=s(n)}for(e&&e(r);u<a.length;u++)i=a[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunktestmall"]=self["webpackChunktestmall"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(944)}));r=n.O(r)})();
//# sourceMappingURL=app.f10cad50.js.map