(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fabu_huadong/fabu_huadong"],{1313:function(e,t,n){"use strict";var o=n("f2ea"),a=n.n(o);a.a},"23dc":function(e,t,n){"use strict";n.r(t);var o=n("d7d2"),a=n.n(o);for(var s in o)"default"!==s&&function(e){n.d(t,e,(function(){return o[e]}))}(s);t["default"]=a.a},"64b6":function(e,t,n){"use strict";n.r(t);var o=n("9f59"),a=n("23dc");for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);n("1313");var i,r=n("f0c5"),c=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"5f39b7d0",null,!1,o["a"],i);t["default"]=c.exports},6589:function(e,t,n){"use strict";(function(e){n("ddea");o(n("66fd"));var t=o(n("64b6"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"9f59":function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return o}));var a=function(){var e=this,t=e.$createElement,n=(e._self._c,e.__map(e.problem.img,(function(t,n){var o=e.__get_orig(t),a=e.problem.img.length>0?e.getimg(t):null,s=e.problem.img.length>0?e.getimg(t):null;return{$orig:o,m0:a,m1:s}})));e.$mp.data=Object.assign({},{$root:{l0:n}})},s=[]},d7d2:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;s(n("66fd"));var o=s(n("1cc4")),a=n("2f62");function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={data:function(){return{id:"",problem:{title:"",img:[]},type:"5",answer:{min_num:"",min_text:"",max_num:"",max_text:"",step_size:"1"},idx:-1,btnkg:0}},onLoad:function(e){this,e.type?this.type=e.type:this.type=5,console.log(this.bj_prodata),this.bj_prodata.datas&&(this.problem=this.bj_prodata.datas.problem,this.answer=this.bj_prodata.datas.answer,this.type=this.bj_prodata.datas.type,this.idx=this.bj_prodata.idx)},mounted:function(){},onShow:function(){},computed:r({},(0,a.mapState)(["new_xz","bj_prodata"])),methods:r(r({},(0,a.mapMutations)(["setnew_problem","setnew_xz","edit_problem"])),{},{min_num_fuc:function(e){console.log(e.detail.value)},max_num_fuc:function(e){console.log(e.detail.value)},sub:function(){var t=this;if(this.problem.title)if(""!=t.answer.min_num)if(t.answer.min_text)if(""!=t.answer.max_num)if(t.answer.max_text)if(""!=t.answer.step_size){var n=t.answer.max_num-t.answer.min_num,o=t.answer.step_size;if(o<0||0==o||n%o!=0)e.showToast({icon:"none",title:"步长，取值必须大于 0，并且可被(最大值 - 最小值)整除"});else if(1!=t.btnkg){if(t.btnkg=1,-1==this.idx){var a={problem:this.problem,type:this.type,answer:this.answer};console.log(a),this.setnew_problem(a)}else{a={problem:this.problem,type:this.type,answer:this.answer};var s={idx:t.idx,datas:a};this.edit_problem(s)}e.showToast({icon:"none",title:"操作成功"}),setTimeout((function(){e.navigateBack({delta:1})}),1e3)}}else e.showToast({icon:"none",title:"请填写请输入步长"});else e.showToast({icon:"none",title:"请填写最大数值显示文本"});else e.showToast({icon:"none",title:"请填写最大值"});else e.showToast({icon:"none",title:"请填写最小数值显示文本"});else e.showToast({icon:"none",title:"请填写最小值"});else e.showToast({icon:"none",title:"请输入标题"})},imgdel:function(t){var n=this;console.log(t.currentTarget.dataset.idx),e.showModal({title:"提示",content:"确定要删除这张图片吗",success:function(e){e.confirm?(console.log("用户点击确定",t.currentTarget.dataset.type),-1==t.currentTarget.dataset.type?n.problem.img.splice(t.currentTarget.dataset.idx,1):n.answer[t.currentTarget.dataset.type].img.splice(t.currentTarget.dataset.idx,1)):e.cancel&&console.log("用户点击取消")}})},upimg:function(t){var n=this;console.log(t.currentTarget.dataset.type),-1==t.currentTarget.dataset.type?e.chooseImage({count:9,sizeType:["original","compressed"],sourceType:["album"],success:function(e){console.log(e);var o=e.tempFilePaths;console.log(t),n.upimg1(o,t.currentTarget.dataset.type,0)}}):e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(e){console.log(e);var o=e.tempFilePaths;console.log(t);var a=t.currentTarget.dataset.type;n.upimg1(o,a,0)}})},upimg1:function(t,n,a){var s=this;e.uploadFile({url:o.default.IPurl+"/upload/streamImg",filePath:t[a],name:"file",formData:{type:1,token:s.loginDatas.userToken},success:function(o){var i=JSON.parse(o.data);if(1==i.code)if(console.log(t[a],a,i.msg),-1==n){var r=s.problem.img.concat(i.msg);s.$set(s.problem,"img",r),a++,a<t.length&&s.upimg1(t,n,a)}else{var c=[i.msg];s.$set(s.answer[n],"img",c)}else e.showToast({icon:"none",title:"上传失败"})}})},upimg1_h5:function(t,n,a){var s=this;e.request({url:t[a],method:"GET",responseType:"arraybuffer",success:function(i){var r=wx.arrayBufferToBase64(i.data);console.log("base64"),r="data:image/jpeg;base64,"+r;var c={file:r,type:1},l="/upload/base64Img";console.log("h5 upload"),o.default.P_post(l,c).then((function(o){if(s.btn_kg=0,console.log(o),1==o.code)if(console.log(t[a],a,o.msg),-1==n){var i=s.problem.img.concat(o.msg);s.$set(s.problem,"img",i),a++,a<t.length&&s.upimg1_h5(t,n,a)}else{var r=[o.msg];s.$set(s.answer[n],"img",r)}else e.showToast({icon:"none",title:"上传失败"})})).catch((function(t){s.btn_kg=0,console.log(t),e.showToast({icon:"none",title:"获取数据失败"})}))},fail:function(e){console.log(e)}})},pveimg:function(e){o.default.pveimg(e)},getimg:function(e){return o.default.getimg(e)},jump:function(e){o.default.jump(e)}})};t.default=l}).call(this,n("543d")["default"])},f2ea:function(e,t,n){}},[["6589","common/runtime","common/vendor"]]]);