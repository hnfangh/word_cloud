webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},n,!1,function(t){a("Pe99")},null,null).exports,i=a("/ocq"),l={name:"wordcloud",data:function(){return{textarea:"",pic:"",pageTitle:"Flask Vue Word Cloud"}},methods:{onSubmit:function(){var t=this,e={word:this.textarea};this.axios.post("/word/cloud/generate",e).then(function(e){t.pic=e.data,console.log(e.data)}).catch(function(t){console.log(t.data.res)})},onDownload:function(){var t="data:image/png;base64,"+this.pic,e=document.createElement("a");e.href=t,e.setAttribute("download","wordcloud"),e.click()}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("小词云")]),t._v(" "),a("div",{attrs:{id:"word-text-area"}},[a("el-input",{attrs:{type:"textarea",rows:10,placeholder:"请输入内容"},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}}),t._v(" "),a("div",{attrs:{id:"word-img"}},[a("el-image",{attrs:{src:"data:image/png;base64,"+t.pic,fit:t.fit}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])])],1),t._v(" "),a("div",{attrs:{id:"word-operation"}},[a("el-row",[a("el-button",{attrs:{type:"primary",round:""},on:{click:t.onSubmit}},[t._v("生成词云")]),t._v(" "),a("el-button",{attrs:{type:"success",round:""},on:{click:t.onDownload}},[t._v("下载图片")])],1)],1)],1)])},staticRenderFns:[]},c=a("VU/8")(l,s,!1,null,null,null).exports;o.default.use(i.a);var u=new i.a({routes:[{path:"/",name:"WordCloud",component:c}]}),d=a("zL8q"),p=a.n(d),v=(a("tvR6"),a("mtWM"));o.default.use(p.a),o.default.prototype.axios=v.a,o.default.config.productionTip=!1,new o.default({el:"#app",router:u,components:{App:r},template:"<App/>"})},Pe99:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.dbb692bc4a7dae04c730.js.map