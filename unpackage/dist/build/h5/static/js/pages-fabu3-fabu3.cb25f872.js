(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-fabu3-fabu3"],{"512f":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-c8a343bc]{background:#f7f7f7;height:100%}.dy_times[data-v-c8a343bc]{width:100%;padding:0 %?30?%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-bottom:%?6?% solid #f7f7f7;background:#fff}.dy_time[data-v-c8a343bc]{width:100%;height:%?106?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%;color:#333}.add_type[data-v-c8a343bc]{padding-top:%?30?%;background:#fff;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around}.add_type uni-view[data-v-c8a343bc]{font-size:%?28?%;color:#999;padding:%?35?% 0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-bottom:%?3?% solid transparent;cursor:pointer}.add_type .active[data-v-c8a343bc]{color:#3d93f9;border-bottom:%?3?% solid #3d93f9}.times_boxs[data-v-c8a343bc]{width:100%;padding:%?30?%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin-bottom:%?5?%;background:#fff}.time_li[data-v-c8a343bc]{width:100%;height:%?100?%;border-bottom:1px solid #f7f7f7}.btns[data-v-c8a343bc]{margin-top:%?50?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around}.btns uni-view[data-v-c8a343bc]{width:%?303?%;height:%?83?%;background:-webkit-gradient(linear,left top,right top,from(rgba(61,127,255,.91)),to(rgba(60,142,255,.91)));background:-webkit-linear-gradient(left,rgba(61,127,255,.91),rgba(60,142,255,.91));background:linear-gradient(90deg,rgba(61,127,255,.91),rgba(60,142,255,.91));-webkit-box-shadow:0 0 %?10?% 0 rgba(0,0,0,.18);box-shadow:0 0 %?10?% 0 rgba(0,0,0,.18);-webkit-border-radius:%?42?%;border-radius:%?42?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?32?%;color:#fff}.btns uni-text[data-v-c8a343bc]{margin-right:%?30?%}.shuoming[data-v-c8a343bc]{margin-top:%?30?%;font-size:%?26?%;color:#999;margin-bottom:%?80?%;width:100%;padding:0 %?30?%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.shuoming uni-text[data-v-c8a343bc]{margin-right:%?8?%;font-size:%?26?%}.shuoming .active[data-v-c8a343bc]{color:#4785f0}.dt_num[data-v-c8a343bc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:100%;height:%?100?%;font-size:%?28?%;color:#333}.dt_num uni-input[data-v-c8a343bc]{text-align:right}body.?%PAGE?%[data-v-c8a343bc]{background:#f7f7f7}",""]),t.exports=e},"5f61":function(t,e,i){"use strict";i.r(e);var a=i("a8fa"),n=i("e5c6");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("b2a7");var o,d=i("f0c5"),c=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"c8a343bc",null,!1,a["a"],o);e["default"]=c.exports},a8fa:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"dy_times"},[i("v-uni-picker",{staticStyle:{flex:"1"},attrs:{mode:"date",value:t.time,end:t.time1,start:t.now_time},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindTimeChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"dy_time"},[i("v-uni-view",[t._v("调研开始日期")]),i("v-uni-view",{staticStyle:{flex:"1","text-align":"center","font-size":"28upx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.visible=!0}}},[t._v(t._s(t.time?t.time:"开始时间"))])],1)],1),i("v-uni-picker",{staticStyle:{flex:"1"},attrs:{mode:"date",value:t.time1,start:t.time},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindTimeChange1.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"dy_time"},[i("v-uni-view",[t._v("调研结束日期")]),i("v-uni-view",{staticStyle:{flex:"1","text-align":"center","font-size":"28upx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.visible=!0}}},[t._v(t._s(t.time1?t.time1:"结束时间"))])],1)],1)],1),i("v-uni-view",{staticClass:"add_type"},[i("v-uni-view",{class:1==t.add_type?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addType_fuc(1)}}},[t._v("手动添加")]),i("v-uni-view",{class:2==t.add_type?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addType_fuc(2)}}},[t._v("随机添加")])],1),1==t.add_type?i("v-uni-view",{staticClass:"times_boxs"},t._l(t.time_list,(function(e,a){return i("v-uni-view",{staticClass:"time_li dis_flex aic"},[i("v-uni-picker",{staticClass:"dis_flex aic  ju_c",staticStyle:{flex:"1",height:"100%"},attrs:{mode:"time",value:e.start_time,end:e.end_time,"data-idx":a,"data-type":"1"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindDateChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticStyle:{flex:"1","text-align":"center","font-size":"28upx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.visible=!0}}},[t._v(t._s(e.start_time?e.start_time:"开始时间"))])],1),i("v-uni-view",[t._v("-")]),i("v-uni-picker",{staticClass:"dis_flex aic ju_c",staticStyle:{flex:"1",height:"100%"},attrs:{mode:"time",value:e.end_time,start:e.start_time,"data-idx":a,"data-type":"2"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindDateChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticStyle:{flex:"1","text-align":"center","font-size":"28upx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.visible=!0}}},[t._v(t._s(e.end_time?e.end_time:"结束时间"))])],1)],1)})),1):t._e(),2==t.add_type?i("v-uni-view",{staticClass:"times_boxs"},[i("v-uni-view",{staticClass:"time_li dis_flex aic"},[i("v-uni-picker",{staticClass:"dis_flex aic ju_c",staticStyle:{flex:"1"},attrs:{mode:"time",value:t.sj_time.start_time,end:t.sj_time.end_time,"data-idx":-1,"data-type":"1"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindDateChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticStyle:{flex:"1","text-align":"center","font-size":"28upx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.visible=!0}}},[t._v(t._s(t.sj_time.start_time?t.sj_time.start_time:"开始时间"))])],1),i("v-uni-view",[t._v("-")]),i("v-uni-picker",{staticClass:"dis_flex aic ju_c",staticStyle:{flex:"1"},attrs:{mode:"time",value:t.sj_time.end_time,start:t.sj_time.start_time,"data-idx":-1,"data-type":"2"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindDateChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticStyle:{flex:"1","text-align":"center","font-size":"28upx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.visible=!0}}},[t._v(t._s(t.sj_time.end_time?t.sj_time.end_time:"结束时间"))])],1)],1),i("v-uni-view",{staticClass:"dt_num"},[i("v-uni-view",[t._v("答题次数")]),i("v-uni-input",{attrs:{type:"number"},model:{value:t.dt_num,callback:function(e){t.dt_num=e},expression:"dt_num"}})],1)],1):t._e(),i("v-uni-view",{staticClass:"shuoming dis_flex aic",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sm_fuc.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"iconfont icon-duigou-copy",class:t.sm_ty?"active":""}),t._v("同意"),i("v-uni-view",{attrs:{"data-url":"../about/about?type=sm","data-login":!1,"data-haslogin":t.hasLogin},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.jump.apply(void 0,arguments)}}},[t._v("《申请调研者说明》")])],1),i("v-uni-view",{staticClass:"btns"},[1==t.add_type?i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add_time.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"iconfont icon-bianji1"}),t._v("添加时间")],1):t._e(),i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sub.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"iconfont icon-queding"}),t._v("确认发布")],1)],1)],1)},s=[]},ac4c:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("5530")),s=a(i("1cc4")),o=i("2f62"),d={data:function(){return{time:"",time1:"",add_type:1,time_list:[{start_time:"",end_time:""}],sj_time:{start_time:"",end_time:""},sm_ty:!1,dt_num:0,btnkg:0,now_time:new Date}},onLoad:function(t){this.uid=t.uid},mounted:function(){document.getElementsByTagName("uni-page-head")[0].style.display="none"},computed:(0,n.default)({},(0,o.mapState)(["hasLogin","forcedLogin","userName","loginDatas","ls_prodata","ls_pro_yh"])),methods:(0,n.default)((0,n.default)({},(0,o.mapMutations)(["clearls_pro"])),{},{bindTimeChange:function(t){console.log(t),this.time=t.target.value},bindTimeChange1:function(t){console.log(t),this.time1=t.target.value},bindDateChange:function(t){var e=this;console.log(t),console.log(t.currentTarget.dataset.idx),console.log(t.currentTarget.dataset.type);var i=t.currentTarget.dataset;-1!=i.idx?1==i.type?e.$set(e.time_list[i.idx],"start_time",t.target.value):e.$set(e.time_list[i.idx],"end_time",t.target.value):1==i.type?e.$set(e.sj_time,"start_time",t.target.value):e.$set(e.sj_time,"end_time",t.target.value)},addType_fuc:function(t){this.add_type=t},sm_fuc:function(){this.sm_ty=!this.sm_ty},add_time:function(){var t={start_time:"",end_time:""};this.time_list.push(t)},sub:function(){var t,e=this;if(0!=e.time_list.length)if(e.sm_ty){var i=JSON.stringify(e.time_list);t=1==e.add_type?{id:e.uid,dy_title:e.ls_prodata.dy_title,dy_explain:e.ls_prodata.dy_explain,dy_addition_explain:e.ls_prodata.dy_addition_explain,dy_start_time:e.time,dy_end_time:e.time1,problem:JSON.stringify(e.ls_prodata.datas),uids:e.ls_pro_yh,dy_time_type:e.add_type,sd_time:i}:{id:e.uid,dy_title:e.ls_prodata.dy_title,dy_explain:e.ls_prodata.dy_explain,dy_addition_explain:e.ls_prodata.dy_addition_explain,dy_start_time:e.time,dy_end_time:e.time1,problem:JSON.stringify(e.ls_prodata.datas),uids:e.ls_pro_yh,dy_time_type:e.add_type,sj_start_time:e.sj_time.start_time,sj_end_time:e.sj_time.end_time,sj_number:e.dt_num};var a="/user/research/add";console.log(s.default.adminurl);var n="https://datixcx.com.aa.800123456.top/admin/";a=n+"/research_papers.ResearchPapers/saveResearch",1!=this.btnkg&&(this.btnkg=1,uni.showLoading({title:"正在提交"}),s.default.P_post(a,t).then((function(t){if(e.btn_kg=0,console.log(t),1==t.code){var i=t.data;console.log(typeof i),"string"==typeof i&&(i=JSON.parse(i)),uni.showToast({icon:"none",title:"发布成功，等待审核"}),setTimeout((function(){window.open(n+"/research_papers.ResearchPapers/index.html")}),1e3)}else e.btnkg=0,t.msg?uni.showToast({icon:"none",title:t.msg}):uni.showToast({icon:"none",title:"操作失败"})})).catch((function(t){e.btnkg=0,console.log(t),uni.showToast({icon:"none",title:"获取数据失败"})})))}else uni.showToast({icon:"none",title:"请先阅读并同意说明"});else uni.showToast({icon:"none",title:"请添加时间"})},jump:function(t){this.sm_ty=!0,s.default.jump(t)}})};e.default=d},b2a7:function(t,e,i){"use strict";var a=i("f5b6"),n=i.n(a);n.a},e5c6:function(t,e,i){"use strict";i.r(e);var a=i("ac4c"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},f5b6:function(t,e,i){var a=i("512f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("1cbfc806",a,!0,{sourceMap:!1,shadowMode:!1})}}]);