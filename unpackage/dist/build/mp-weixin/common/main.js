(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"24e2":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=c(n("66fd")),r=c(n("1cc4")),u=n("2f62");function c(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={data:function(){return{btnkg:0,uuid1:""}},onLaunch:function(){var e=this;console.log("App Launch"),t.getSystemInfo({success:function(t){console.log(t),console.log(t.platform),e.setplatform(t.platform),o.default.prototype.StatusBar=t.statusBarHeight;var n=wx.getMenuButtonBoundingClientRect();n?(o.default.prototype.Custom=n,o.default.prototype.CustomBar=n.bottom+n.top-t.statusBarHeight):o.default.prototype.CustomBar=t.statusBarHeight+50}}),r.default.wxlogin()},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")},computed:i({},(0,u.mapState)(["hasLogin","forcedLogin","loginDatas","uuid"])),watch:{hasLogin:function(){var t=this;t.hasLogin&&setTimeout((function(){}),5e3)}},methods:i({},(0,u.mapMutations)(["login","logindata","logout","setplatform","setuuid"]))};e.default=l}).call(this,n("543d")["default"])},6358:function(t,e,n){},ac94:function(t,e,n){"use strict";n.r(e);var o=n("24e2"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=r.a},d39a:function(t,e,n){"use strict";var o=n("6358"),r=n.n(o);r.a},d49d:function(t,e,n){"use strict";(function(t){n("ddea");var e=c(n("66fd")),o=c(n("f622")),r=c(n("b84d")),u=c(n("9a62"));c(n("5ba4"));function c(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){n.e("colorui/components/cu-custom").then(function(){return resolve(n("9b9c"))}.bind(null,n)).catch(n.oe)};e.default.component("cu-custom",l),e.default.config.productionTip=!1,e.default.prototype.event=u.default,e.default.prototype.$store=r.default,o.default.mpType="app";var s=new e.default(i({store:r.default},o.default));t(s).$mount()}).call(this,n("543d")["createApp"])},f622:function(t,e,n){"use strict";n.r(e);var o=n("ac94");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("d39a");var u,c,a,i,f=n("f0c5"),l=Object(f["a"])(o["default"],u,c,!1,null,null,null,!1,a,i);e["default"]=l.exports}},[["d49d","common/runtime","common/vendor"]]]);