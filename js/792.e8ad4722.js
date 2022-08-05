"use strict";(self["webpackChunktestmall"]=self["webpackChunktestmall"]||[]).push([[792],{3532:function(t,e,a){a.d(e,{Z:function(){return l}});var r=function(){var t=this,e=t._self._c;return e("div",{ref:"tabControl",staticClass:"tab-control"},t._l(t.titles,(function(a,r){return e("div",{key:r,staticClass:"tab-control-item",class:{active:r===t.currentIndex},on:{click:function(e){return t.changeIndex(r)}}},[e("span",[t._v(" "+t._s(a)+" ")])])})),0)},s=[],i={name:"TabControl",components:{},props:{titles:{type:Array,default(){return[]}},tabSticky:{type:Boolean,default:!1}},data(){return{currentIndex:0}},mounted(){setInterval((()=>{}),1e3)},methods:{changeIndex(t){this.currentIndex=t,this.$emit("tabClick",t)}}},n=i,o=a(1001),c=(0,o.Z)(n,r,s,!1,null,"1b2e16ae",null),l=c.exports},6338:function(t,e,a){a.r(e),a.d(e,{default:function(){return B}});var r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"category"}},[e("nav-bar",{staticClass:"nav-bar"},[e("div",{attrs:{slot:"center"},slot:"center"},[t._v("商品分类")])]),e("div",{staticClass:"content"},[e("tab-menu",{attrs:{categories:t.categories},on:{selectItem:t.selectItem}}),e("scroll",{ref:"scroll",attrs:{id:"tab-content",data:[t.categoryData]}},[e("div",[e("tab-content-category",{attrs:{subcategories:t.showSubcategory}}),e("tab-control",{attrs:{titles:["综合","新品","销量"]},on:{itemClick:t.tabClick}}),e("goods-list",{attrs:{goods:t.showCategoryDetail}})],1)])],1)],1)},s=[],i=a(6836),n=function(){var t=this,e=t._self._c;return e("scroll",{attrs:{id:"tab-menu"}},[e("div",{staticClass:"menu-list"},t._l(t.categories,(function(a,r){return e("div",{key:r,staticClass:"menu-list-item",class:{active:r===t.currentIndex},on:{click:function(e){return t.itemClick(r)}}},[t._v(" "+t._s(a.title)+" ")])})),0)])},o=[],c=a(8032),l={name:"TabMenu",components:{Scroll:c.Z},props:{categories:Array},data(){return{currentIndex:0}},methods:{itemClick(t){this.currentIndex=t,this.$emit("selectItem",t)}}},u=l,g=a(1001),h=(0,g.Z)(u,n,o,!1,null,"36798b5c",null),d=h.exports,y=function(){var t=this,e=t._self._c;return e("div",[t.subcategories.list?e("grid-view",{attrs:{cols:3,lineSpace:15,"v-margin":20}},t._l(t.subcategories.list,(function(a,r){return e("div",{key:r,staticClass:"item"},[e("a",{attrs:{href:a.link}},[e("img",{staticClass:"item-img",attrs:{src:a.image,alt:""}}),e("div",{staticClass:"item-text"},[t._v(t._s(a.title))])])])})),0):t._e()],1)},m=[],p=function(){var t=this,e=t._self._c;return e("div",{ref:"gridView",staticClass:"grid-view"},[t._t("default")],2)},f=[],b={name:"GridView",props:{cols:{type:Number,default:2},hMargin:{type:Number,default:8},vMargin:{type:Number,default:8},itemSpace:{type:Number,default:8},lineSpace:{type:Number,default:8}},mounted:function(){setTimeout(this._autoLayout,20)},updated:function(){this._autoLayout()},methods:{_autoLayout:function(){let t=this.$refs.gridView,e=t.children;t.style.padding=`${this.vMargin}px ${this.hMargin}px`;let a=(t.clientWidth-2*this.hMargin-(this.cols-1)*this.itemSpace)/this.cols;for(let r=0;r<e.length;r++){let t=e[r];t.style.width=a+"px",(r+1)%this.cols!==0&&(t.style.marginRight=this.itemSpace+"px"),r>=this.cols&&(t.style.marginTop=this.lineSpace+"px")}}}},v=b,_=(0,g.Z)(v,p,f,!1,null,"58a324f6",null),C=_.exports,x={name:"TabContentCategory",components:{GridView:C},props:{subcategories:{type:Object,default(){return[]}}}},I=x,D=(0,g.Z)(I,y,m,!1,null,"05cca9d1",null),k=D.exports,w=a(3532),S=a(733),Z=a(7707);function T(){return(0,Z.W)({url:"/category"})}function $(t){return(0,Z.W)({url:"/subcategory",params:{maitKey:t}})}function M(t,e){return(0,Z.W)({url:"/subcategory/detail",params:{miniWallkey:t,type:e}})}var N=a(8301),W=a(1034),L={name:"Category",components:{NavBar:i.Z,TabMenu:d,TabControl:w.Z,Scroll:c.Z,TabContentCategory:k,GoodsList:S.Z},mixins:[W.Bt],data(){return{categories:[],categoryData:{},currentIndex:-1}},created(){this._getCategory(),this.$bus.$on("imgLoad",(()=>{this.$refs.scroll.refresh()}))},computed:{showSubcategory(){return-1===this.currentIndex?{}:this.categoryData[this.currentIndex].subcategories},showCategoryDetail(){return-1===this.currentIndex?[]:this.categoryData[this.currentIndex].categoryDetail[this.currentType]}},methods:{_getCategory(){T().then((t=>{this.categories=t.data.category.list,console.log(t);for(let e=0;e<this.categories.length;e++)this.categoryData[e]={subcategories:{},categoryDetail:{pop:[],new:[],sell:[]}};this._getSubcategories(0)}))},_getSubcategories(t){this.currentIndex=t;const e=this.categories[t].maitKey;$(e).then((e=>{this.categoryData[t].subcategories=e.data,this.categoryData={...this.categoryData},this._getCategoryDetail(N.p6),this._getCategoryDetail(N.uX),this._getCategoryDetail(N.AE)}))},_getCategoryDetail(t){const e=this.categories[this.currentIndex].miniWallkey;M(e,t).then((e=>{this.categoryData[this.currentIndex].categoryDetail[t]=e,this.categoryData={...this.categoryData}}))},selectItem(t){this._getSubcategories(t)}}},V=L,A=(0,g.Z)(V,r,s,!1,null,"63831e44",null),B=A.exports}}]);
//# sourceMappingURL=792.e8ad4722.js.map