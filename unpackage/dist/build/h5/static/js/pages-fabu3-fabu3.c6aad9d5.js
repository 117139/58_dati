(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-fabu3-fabu3"],{"0b01":function(t,i,e){"use strict";var n=e("7dca"),a=e.n(n);a.a},"5f61":function(t,i,e){"use strict";e.r(i);var n=e("a1ac"),a=e("e5c6");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("0b01");var s,d=e("f0c5"),l=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"2a76e910",null,!1,n["a"],s);i["default"]=l.exports},"6e20":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,"uni-page-body[data-v-2a76e910]{background:#f7f7f7;height:100%}.dy_times[data-v-2a76e910]{width:100%;padding:0 %?30?%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-bottom:%?6?% solid #f7f7f7;background:#fff}.dy_time[data-v-2a76e910]{width:100%;height:%?106?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%;color:#333}.add_type[data-v-2a76e910]{padding-top:%?30?%;background:#fff;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around}.add_type uni-view[data-v-2a76e910]{font-size:%?28?%;color:#999;padding:%?35?% 0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-bottom:%?3?% solid transparent;cursor:pointer}.add_type .active[data-v-2a76e910]{color:#3d93f9;border-bottom:%?3?% solid #3d93f9}.times_boxs[data-v-2a76e910]{width:100%;padding:%?30?%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin-bottom:%?5?%;background:#fff}.time_li[data-v-2a76e910]{width:100%;height:%?100?%;border-bottom:1px solid #f7f7f7}.btns[data-v-2a76e910]{margin-top:%?50?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around}.btns uni-view[data-v-2a76e910]{width:%?303?%;height:%?83?%;background:-webkit-linear-gradient(left,rgba(61,127,255,.91),rgba(60,142,255,.91));background:linear-gradient(90deg,rgba(61,127,255,.91),rgba(60,142,255,.91));box-shadow:0 0 %?10?% 0 rgba(0,0,0,.18);border-radius:%?42?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?32?%;color:#fff}.btns uni-text[data-v-2a76e910]{margin-right:%?30?%}.shuoming[data-v-2a76e910]{margin-top:%?30?%;font-size:%?26?%;color:#999;margin-bottom:%?80?%;width:100%;padding:0 %?30?%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.shuoming uni-text[data-v-2a76e910]{margin-right:%?8?%;font-size:%?26?%}.shuoming .active[data-v-2a76e910]{color:#4785f0}.dt_num[data-v-2a76e910]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:100%;height:%?100?%;font-size:%?28?%;color:#333}.dt_num uni-input[data-v-2a76e910]{text-align:right}body.?%PAGE?%[data-v-2a76e910]{background:#f7f7f7}",""]),t.exports=i},"7dca":function(t,i,e){var n=e("6e20");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("be73b8e8",n,!0,{sourceMap:!1,shadowMode:!1})},a1ac:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"dy_times"},[e("v-uni-picker",{staticStyle:{flex:"1"},attrs:{mode:"date",value:t.time,end:t.time1,start:t.now_time},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.bindTimeChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"dy_time"},[e("v-uni-view",[t._v("调研开始日期")]),e("v-uni-view",{staticStyle:{flex:"1","text-align":"center","font-size":"28upx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.visible=!0}}},[t._v(t._s(t.time?t.time:"开始时间"))])],1)],1),e("v-uni-picker",{staticStyle:{flex:"1"},attrs:{mode:"date",value:t.time1,start:t.time},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.bindTimeChange1.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"dy_time"},[e("v-uni-view",[t._v("调研结束日期")]),e("v-uni-view",{staticStyle:{flex:"1","text-align":"center","font-size":"28upx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.visible=!0}}},[t._v(t._s(t.time1?t.time1:"结束时间"))])],1)],1)],1),e("v-uni-view",{staticClass:"add_type"},[e("v-uni-view",{class:1==t.add_type?"active":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.addType_fuc(1)}}},[t._v("手动添加")]),e("v-uni-view",{class:2==t.add_type?"active":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.addType_fuc(2)}}},[t._v("随机添加")])],1),1==t.add_type?e("v-uni-view",{staticClass:"times_boxs"},t._l(t.time_list,(function(i,n){return e("v-uni-view",{staticClass:"time_li dis_flex aic"},[e("v-uni-picker",{staticClass:"dis_flex aic  ju_c",staticStyle:{flex:"1",height:"100%"},attrs:{mode:"time",value:i.start_time,end:i.end_time,"data-idx":n,"data-type":"1"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.bindDateChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticStyle:{flex:"1","text-align":"center","font-size":"28upx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.visible=!0}}},[t._v(t._s(i.start_time?i.start_time:"开始时间"))])],1),e("v-uni-view",[t._v("-")]),e("v-uni-picker",{staticClass:"dis_flex aic ju_c",staticStyle:{flex:"1",height:"100%"},attrs:{mode:"time",value:i.end_time,start:i.start_time,"data-idx":n,"data-type":"2"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.bindDateChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticStyle:{flex:"1","text-align":"center","font-size":"28upx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.visible=!0}}},[t._v(t._s(i.end_time?i.end_time:"结束时间"))])],1)],1)})),1):t._e(),2==t.add_type?e("v-uni-view",{staticClass:"times_boxs"},[e("v-uni-view",{staticClass:"time_li dis_flex aic"},[e("v-uni-picker",{staticClass:"dis_flex aic ju_c",staticStyle:{flex:"1"},attrs:{mode:"time",value:t.sj_time.start_time,end:t.sj_time.end_time,"data-idx":-1,"data-type":"1"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.bindDateChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticStyle:{flex:"1","text-align":"center","font-size":"28upx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.visible=!0}}},[t._v(t._s(t.sj_time.start_time?t.sj_time.start_time:"开始时间"))])],1),e("v-uni-view",[t._v("-")]),e("v-uni-picker",{staticClass:"dis_flex aic ju_c",staticStyle:{flex:"1"},attrs:{mode:"time",value:t.sj_time.end_time,start:t.sj_time.start_time,"data-idx":-1,"data-type":"2"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.bindDateChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticStyle:{flex:"1","text-align":"center","font-size":"28upx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.visible=!0}}},[t._v(t._s(t.sj_time.end_time?t.sj_time.end_time:"结束时间"))])],1)],1),e("v-uni-view",{staticClass:"dt_num"},[e("v-uni-view",[t._v("答题次数")]),e("v-uni-input",{attrs:{type:"number"},model:{value:t.dt_num,callback:function(i){t.dt_num=i},expression:"dt_num"}})],1)],1):t._e(),e("v-uni-view",{staticClass:"shuoming dis_flex aic"},[t._v("注：每个时间间隔最低15分钟")]),e("v-uni-view",{staticClass:"shuoming dis_flex aic",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.sm_fuc.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"iconfont icon-duigou-copy",class:t.sm_ty?"active":""}),t._v("同意"),e("v-uni-view",{attrs:{"data-url":"../about/about?type=sm","data-login":!1,"data-haslogin":t.hasLogin},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.jump.apply(void 0,arguments)}}},[t._v("《申请调研者说明》")])],1),e("v-uni-view",{staticClass:"btns"},[1==t.add_type?e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.add_time.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"iconfont icon-bianji1"}),t._v("添加时间")],1):t._e(),e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.sub.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"iconfont icon-queding"}),t._v("确认发布")],1)],1)],1)},o=[]},ac4c:function(t,i,e){"use strict";var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("5530")),o=n(e("1cc4")),s=e("2f62"),d={data:function(){return{id:"",time:"",time1:"",add_type:1,time_list:[{start_time:"",end_time:""}],sj_time:{start_time:"",end_time:""},sm_ty:!1,dt_num:0,btnkg:0,now_time:new Date,qiyong_index:0,guding:[{type:"1",option:"",answer:[{img:[],title:"男",option:"A"},{img:[],title:"女",option:"B"}],problem:{img:[],title:"性别"}},{type:"3",option:"",problem:{title:"年龄"}},{type:"1",option:"",answer:[{img:[],title:"是",option:"A"},{img:[],title:"否",option:"B"}],problem:{img:[],title:"是否独生"}},{type:"1",option:"",answer:[{img:[],title:"农村",option:"A"},{img:[],title:"乡镇",option:"B"},{img:[],title:"城市",option:"C"}],problem:{img:[],title:"生源地"}},{type:"3",option:"",problem:{title:"专业"}},{type:"3",option:"",problem:{title:"年级"}},{type:"3",option:"",problem:{title:"职业"}},{type:"1",option:"",answer:[{img:[],title:"小学及以下",option:"A"},{img:[],title:"中学（含中职）",option:"B"},{img:[],title:"高中（含职高）",option:"C"},{img:[],title:"大学（含大专）",option:"D"},{img:[],title:"研究生及以上",option:"E"}],problem:{img:[],title:"受教育程度"}},{type:"1",option:"",answer:[{img:[],title:"小学及以下",option:"A"},{img:[],title:"中学（含中职）",option:"B"},{img:[],title:"高中（含职高）",option:"C"},{img:[],title:"大学（含大专）",option:"D"},{img:[],title:"研究生及以上",option:"E"}],problem:{img:[],title:"父亲受教育程度"}},{type:"1",option:"",answer:[{img:[],title:"小学及以下",option:"A"},{img:[],title:"中学（含中职）",option:"B"},{img:[],title:"高中（含职高）",option:"C"},{img:[],title:"大学（含大专）",option:"D"},{img:[],title:"研究生及以上",option:"E"}],problem:{img:[],title:"母亲受教育程度"}},{type:"3",option:"",problem:{title:"父亲职业"}},{type:"3",option:"",problem:{title:"母亲职业"}}]}},onLoad:function(t){this.id=t.id,this.qiyong_index=t.qiyong_index,this.uid=t.uid},mounted:function(){document.getElementsByTagName("uni-page-head")[0].style.display="none"},computed:(0,a.default)({},(0,s.mapState)(["hasLogin","forcedLogin","userName","loginDatas","ls_prodata","ls_pro_yh","h5_uid"])),methods:(0,a.default)((0,a.default)({},(0,s.mapMutations)(["clearls_pro"])),{},{bindTimeChange:function(t){console.log(t),this.time=t.target.value},bindTimeChange1:function(t){console.log(t),this.time1=t.target.value},bindDateChange:function(t){var i=this;console.log(t),console.log(t.currentTarget.dataset.idx),console.log(t.currentTarget.dataset.type);var e=t.currentTarget.dataset;-1!=e.idx?1==e.type?i.$set(i.time_list[e.idx],"start_time",t.target.value):i.$set(i.time_list[e.idx],"end_time",t.target.value):1==e.type?i.$set(i.sj_time,"start_time",t.target.value):i.$set(i.sj_time,"end_time",t.target.value)},addType_fuc:function(t){this.add_type=t},sm_fuc:function(){this.sm_ty=!this.sm_ty},add_time:function(){var t={start_time:"",end_time:""};this.time_list.push(t)},sub:function(){var t,i=this;if(0!=i.time_list.length)if(i.sm_ty){var e=JSON.stringify(i.time_list);t=1==i.add_type?{id:i.h5_uid,dy_title:i.ls_prodata.dy_title,dy_explain:i.ls_prodata.dy_explain,dy_addition_explain:i.ls_prodata.dy_addition_explain,dy_start_time:i.time,dy_end_time:i.time1,problem:JSON.stringify(i.ls_prodata.datas),uids:i.ls_pro_yh,dy_time_type:i.add_type,sd_time:e,draft_id:i.id,fixation:JSON.stringify(i.guding)}:{id:i.h5_uid,dy_title:i.ls_prodata.dy_title,dy_explain:i.ls_prodata.dy_explain,dy_addition_explain:i.ls_prodata.dy_addition_explain,dy_start_time:i.time,dy_end_time:i.time1,problem:JSON.stringify(i.ls_prodata.datas),uids:i.ls_pro_yh,dy_time_type:i.add_type,sj_start_time:i.sj_time.start_time,sj_end_time:i.sj_time.end_time,sj_number:i.dt_num,draft_id:i.id,fixation:JSON.stringify(i.guding)};var n="/user/research/add";console.log(o.default.adminurl);var a=o.default.IPurl0+"admin/";n=a+"/research_papers.ResearchPapers/saveResearch",1!=this.btnkg&&(this.btnkg=1,uni.showLoading({title:"正在提交"}),o.default.P_post(n,t).then((function(t){if(i.btn_kg=0,console.log(t),1==t.code){var e=t.data;console.log(typeof e),"string"==typeof e&&(e=JSON.parse(e)),uni.showToast({icon:"none",title:"发布成功，等待审核"}),setTimeout((function(){parent.parent_fuc()}),1e3)}else i.btnkg=0,t.msg?uni.showToast({icon:"none",title:t.msg}):uni.showToast({icon:"none",title:"操作失败"})})).catch((function(t){i.btnkg=0,console.log(t),uni.showToast({icon:"none",title:"获取数据失败"})})))}else uni.showToast({icon:"none",title:"请先阅读并同意说明"});else uni.showToast({icon:"none",title:"请添加时间"})},jump:function(t){this.sm_ty=!0,o.default.jump(t)}})};i.default=d},e5c6:function(t,i,e){"use strict";e.r(i);var n=e("ac4c"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a}}]);