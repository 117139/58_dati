(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-about-about"],{"17cb":function(t,e,i){"use strict";var n=i("5d63"),a=i.n(n);a.a},"1dbe":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".cu-custom[data-v-e236f4c4]{border-bottom:1px solid #dbdbdb}.xieyi_main[data-v-e236f4c4]{width:100%;padding:10px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-size:%?28?%;color:#444}",""]),t.exports=e},"5d63":function(t,e,i){var n=i("1dbe");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4972cf54",n,!0,{sourceMap:!1,shadowMode:!1})},"6bda":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530")),o=n(i("1cc4")),s=i("2f62"),u={data:function(){return{title:"隐私协议",type:0,datas:""}},onLoad:function(t){var e=this;console.log(t),"yszc"==t.type&&(e.type=t.type,e.title="隐私政策",uni.setNavigationBarTitle({title:"隐私政策"}),this.getdata("ysxy")),"about"==t.type&&(e.type=t.type,e.title="关于我们",uni.setNavigationBarTitle({title:"关于我们"}),console.log(e.fj_data)),"sm"==t.type&&(e.type=t.type,e.title="使用说明",uni.setNavigationBarTitle({title:"使用说明"}),this.getdata("sysm")),3==t.type&&(e.type=t.type,e.title="用户协议",this.getdata("yhxy")),4==t.type&&(e.type=t.type,e.title="自动续费服务规则")},computed:(0,a.default)({},(0,s.mapState)(["hasLogin","forcedLogin","userName","loginDatas","fj_data"])),methods:{getdata:function(t){var e=this,i={keyword:t},n="/getClause";uni.showLoading({title:"正在获取数据"}),o.default.P_get(n,i).then((function(t){if(e.btn_kg=0,console.log(t),1==t.code){var i=t.data;console.log(typeof i),"string"==typeof i&&(i=JSON.parse(i)),e.datas=i[0].content,console.log(i)}else t.msg?uni.showToast({icon:"none",title:t.msg}):uni.showToast({icon:"none",title:"操作失败"})})).catch((function(t){e.btn_kg=0,console.log(t),uni.showToast({icon:"none",title:"获取数据失败"})}))}}};e.default=u},"805d":function(t,e,i){"use strict";i.r(e);var n=i("6bda"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"9dc9":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content_wrap"},[t.datas&&t.datas.body?i("v-uni-view",{staticClass:"xieyi_main",domProps:{innerHTML:t._s(t.datas.body)}}):"about"==t.type?i("v-uni-view",{staticClass:"xieyi_main",domProps:{innerHTML:t._s(t.fj_data.about)}},[i("v-uni-view",{staticStyle:{"font-size":"45upx","font-weight":"bold","text-align":"center","margin-bottom":"40upx"}},[t._v("“答题小程序”关于我们")]),i("v-uni-view",{staticStyle:{"margin-bottom":"40upx"}},[t._v("欢迎您使用“答题小程序”软件及相关服务")]),i("v-uni-view",[t._v("用户须知：在此特别提醒各位用户认真阅读、充分理解本《软件许可及安装协议》（下称《协议》）——用户应认真阅读充分理解本《协议》中各条款。您的安装、使用、获取和登XXXapp等行为将视为对本《协议》的接受，并同意接受本《协议》各项条款的约束。\n\t\t本《协议》是您（下称“用户”）与公司之间关于用户安装、使用软件，注册、使用、管理软件；以及使用公司公司提供的相关服务所订立的协议。本《协议》描述公司与用户之间关于“软件”许可使用及服务相关方面的权利义务。“用户”是指通过公司提供的获取软件授权和XXX注册的途径获得软件产品及号码授权许可以及使用公司公司提供的相关服务的个人或组织。本《协议》可由公司随时更新，更新后的协议条款一旦公布即代替原来的协议条款，恕不再另行通知。用户可重新下载安装本软件或网站查阅最新\n\t\t版协议条款。在公司修改《协议》条款后，如果用户不接受修改后的款，请立即停止使用公司提供的软件和服务，用户继续使用公司提供的软件和服务将被视为已接受了修改后的协议。 除本《协议》有明确规定外，本《协议》并未对利用本“软件”使用的公司或合作单位的其他服务规定\n\t\t相关的服务条款。对于这些服务，一般有单独的服务条款加以规范，用户须在使用有关服务时另行了解与确认。单独的服务条款与本协议有冲突的地方，以单独的服务条款为准。如用户使用该服务，视为对相关服务条款的接受")]),i("v-uni-view",[t._v("本《协议》是您（下称“用户”）与公司之间关于用户安装、使用软件，注册、使用、管理软件；以及使用公司公司提供的相关服务所订立的协议。本《协议》描述公司与用户之间关于“软件”许可使用及服务相关方面的权利义务。“用户”是指通过公司提供的获取软件授权和XXX注册的途径获得软件产品及号码授权许可以及使用公司公司提供的相关服务的个人或组织。本《协议》可由公司随时更新，更新后的协议条款一旦公布即代替原来的协议条款，恕不再另行通知。用户可重新下载安装本软件或网站查阅最新\n\t\t版协议条款。在公司修改《协议》条款后，如果用户不接受修改后的款，请立即停止使用公司提供的软件和服务，用户继续使用公司提供的软件和服务将被视为已接受了修改后的协议。 除本《协议》有明确规定外，本《协议》并未对利用本“软件”使用的公司或合作单位的其他服务规定\n\t\t相关的服务条款。对于这些服务，一般有单独的服务条款加以规范，用户须在使用有关服务时另行了解与确认。单独的服务条款与本协议有冲突的地方，以单独的服务条款为准。如用户使用该服务，视为对相关服务条款的接受")])],1):"yszc"==t.type?i("v-uni-view",{staticClass:"xieyi_main"},[i("v-uni-view",{staticStyle:{"font-size":"45upx","font-weight":"bold","text-align":"center","margin-bottom":"40upx"}},[t._v("“答题小程序”隐私协议")]),i("v-uni-view",{staticStyle:{"margin-bottom":"40upx"}},[t._v("欢迎您使用“答题小程序”软件及相关服务")]),i("v-uni-view",[t._v("用户须知：在此特别提醒各位用户认真阅读、充分理解本《软件许可及安装协议》（下称《协议》）——用户应认真阅读充分理解本《协议》中各条款。您的安装、使用、获取和登XXXapp等行为将视为对本《协议》的接受，并同意接受本《协议》各项条款的约束。\n\t\t本《协议》是您（下称“用户”）与公司之间关于用户安装、使用软件，注册、使用、管理软件；以及使用公司公司提供的相关服务所订立的协议。本《协议》描述公司与用户之间关于“软件”许可使用及服务相关方面的权利义务。“用户”是指通过公司提供的获取软件授权和XXX注册的途径获得软件产品及号码授权许可以及使用公司公司提供的相关服务的个人或组织。本《协议》可由公司随时更新，更新后的协议条款一旦公布即代替原来的协议条款，恕不再另行通知。用户可重新下载安装本软件或网站查阅最新\n\t\t版协议条款。在公司修改《协议》条款后，如果用户不接受修改后的款，请立即停止使用公司提供的软件和服务，用户继续使用公司提供的软件和服务将被视为已接受了修改后的协议。 除本《协议》有明确规定外，本《协议》并未对利用本“软件”使用的公司或合作单位的其他服务规定\n\t\t相关的服务条款。对于这些服务，一般有单独的服务条款加以规范，用户须在使用有关服务时另行了解与确认。单独的服务条款与本协议有冲突的地方，以单独的服务条款为准。如用户使用该服务，视为对相关服务条款的接受")]),i("v-uni-view",[t._v("本《协议》是您（下称“用户”）与公司之间关于用户安装、使用软件，注册、使用、管理软件；以及使用公司公司提供的相关服务所订立的协议。本《协议》描述公司与用户之间关于“软件”许可使用及服务相关方面的权利义务。“用户”是指通过公司提供的获取软件授权和XXX注册的途径获得软件产品及号码授权许可以及使用公司公司提供的相关服务的个人或组织。本《协议》可由公司随时更新，更新后的协议条款一旦公布即代替原来的协议条款，恕不再另行通知。用户可重新下载安装本软件或网站查阅最新\n\t\t版协议条款。在公司修改《协议》条款后，如果用户不接受修改后的款，请立即停止使用公司提供的软件和服务，用户继续使用公司提供的软件和服务将被视为已接受了修改后的协议。 除本《协议》有明确规定外，本《协议》并未对利用本“软件”使用的公司或合作单位的其他服务规定\n\t\t相关的服务条款。对于这些服务，一般有单独的服务条款加以规范，用户须在使用有关服务时另行了解与确认。单独的服务条款与本协议有冲突的地方，以单独的服务条款为准。如用户使用该服务，视为对相关服务条款的接受")])],1):"sm"==t.type?i("v-uni-view",{staticClass:"xieyi_main"},[i("v-uni-view",{staticStyle:{"font-size":"45upx","font-weight":"bold","text-align":"center","margin-bottom":"40upx"}},[t._v("“答题小程序”使用说明")]),i("v-uni-view",{staticStyle:{"margin-bottom":"40upx"}},[t._v("欢迎您使用“答题小程序”软件及相关服务")]),i("v-uni-view",[t._v("用户须知：在此特别提醒各位用户认真阅读、充分理解本《软件许可及安装协议》（下称《协议》）——用户应认真阅读充分理解本《协议》中各条款。您的安装、使用、获取和登XXXapp等行为将视为对本《协议》的接受，并同意接受本《协议》各项条款的约束。\n\t\t本《协议》是您（下称“用户”）与公司之间关于用户安装、使用软件，注册、使用、管理软件；以及使用公司公司提供的相关服务所订立的协议。本《协议》描述公司与用户之间关于“软件”许可使用及服务相关方面的权利义务。“用户”是指通过公司提供的获取软件授权和XXX注册的途径获得软件产品及号码授权许可以及使用公司公司提供的相关服务的个人或组织。本《协议》可由公司随时更新，更新后的协议条款一旦公布即代替原来的协议条款，恕不再另行通知。用户可重新下载安装本软件或网站查阅最新\n\t\t版协议条款。在公司修改《协议》条款后，如果用户不接受修改后的款，请立即停止使用公司提供的软件和服务，用户继续使用公司提供的软件和服务将被视为已接受了修改后的协议。 除本《协议》有明确规定外，本《协议》并未对利用本“软件”使用的公司或合作单位的其他服务规定\n\t\t相关的服务条款。对于这些服务，一般有单独的服务条款加以规范，用户须在使用有关服务时另行了解与确认。单独的服务条款与本协议有冲突的地方，以单独的服务条款为准。如用户使用该服务，视为对相关服务条款的接受")]),i("v-uni-view",[t._v("本《协议》是您（下称“用户”）与公司之间关于用户安装、使用软件，注册、使用、管理软件；以及使用公司公司提供的相关服务所订立的协议。本《协议》描述公司与用户之间关于“软件”许可使用及服务相关方面的权利义务。“用户”是指通过公司提供的获取软件授权和XXX注册的途径获得软件产品及号码授权许可以及使用公司公司提供的相关服务的个人或组织。本《协议》可由公司随时更新，更新后的协议条款一旦公布即代替原来的协议条款，恕不再另行通知。用户可重新下载安装本软件或网站查阅最新\n\t\t版协议条款。在公司修改《协议》条款后，如果用户不接受修改后的款，请立即停止使用公司提供的软件和服务，用户继续使用公司提供的软件和服务将被视为已接受了修改后的协议。 除本《协议》有明确规定外，本《协议》并未对利用本“软件”使用的公司或合作单位的其他服务规定\n\t\t相关的服务条款。对于这些服务，一般有单独的服务条款加以规范，用户须在使用有关服务时另行了解与确认。单独的服务条款与本协议有冲突的地方，以单独的服务条款为准。如用户使用该服务，视为对相关服务条款的接受")])],1):t._e()],1)},o=[]},c412:function(t,e,i){"use strict";i.r(e);var n=i("9dc9"),a=i("805d");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("17cb");var s,u=i("f0c5"),c=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"e236f4c4",null,!1,n["a"],s);e["default"]=c.exports}}]);