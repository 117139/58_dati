<script>
	import Vue from 'vue'
	import service from './service.js';
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				btnkg:0,
				uuid1:'',
			};
		},
		onLaunch: function() {
			var that =this
			console.log('App Launch')
			
			uni.getSystemInfo({
				success: function(e) {
					console.log(e);
					console.log(e.platform);
					that.setplatform(e.platform)
					// #ifndef MP
					console.log(e.statusBarHeight)
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif
			
					// #ifdef MP-WEIXIN || MP-QQ
					Vue.prototype.StatusBar = e.statusBarHeight;
					let capsule = wx.getMenuButtonBoundingClientRect();
					if (capsule) {
						Vue.prototype.Custom = capsule;
						// Vue.prototype.capsuleSafe = uni.upx2px(750) - capsule.left + uni.upx2px(750) - capsule.right;
						Vue.prototype.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					}
					// #endif		
				
			
					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})
			
			
			// service.wxlogin(2)
			// return
			// #ifdef MP-WEIXIN
			service.wxlogin()
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin','loginDatas', 'uuid']),
			
		},
		watch:{
			hasLogin(){
				var that=this
					if(that.hasLogin){
						setTimeout(function (){
								// that.dandian()
						},5000)
					}
				
			}
		},
		methods: {
				...mapMutations(['login','logindata','logout','setplatform','setuuid']),
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "static/css/iconfont.css";
	.hidden{
		display: none;
	}
	.zanwu{
		width: 100%;
		line-height: 240rpx;
		text-align: center;
		font-size: 28rpx;
		color: #999;
	}
	
	.dis_flex{
		display: flex;
	}
	.dis_flex_c{
		display: flex;
		flex-direction: column;
	}
	.aic{
		align-items: center;
	}
	.aift{
		align-items: flex-start;
	}
	.aife{
		align-items: flex-end;
	}
	.ju_a{
		justify-content: space-around;
	}
	.ju_b{
		justify-content: space-between;
	}
	.ju_c{
		justify-content: center;
	}
	.flex_1{
		flex: 1;
	}
	.oh1 {
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 1;
	    -webkit-box-orient: vertical;
	}
	
	.oh2 {
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
			 
	}
	view{
		word-break:break-all;
		
		word-wrap:break-word;   
	}
	.oh3 {
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 3;
	    -webkit-box-orient: vertical;
	}
	
	.oh4 {
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 4;
	    -webkit-box-orient: vertical;
	}
	.data_last{
		line-height: 100rpx;
		text-align: center;
		width: 100%;
		font-size: 24rpx;
		color: #666;
	}
	
	.con_box {
		width: 100%;
		padding: 10upx 30upx;
		box-sizing: border-box;
	}
	.con_box_tit{
		width: 100%;
		height: 80upx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 32upx;
		color: #333;
		font-weight: bold;
	}
	.my_msg_li {
		width: 100%;
		min-height: 100upx;
		border-bottom: 1px solid #F1F1F1;
		font-size: 28upx;
		color: #333;
	}
	
	.my_msg_li input {
		text-align: right;
	}
	
	.tar {
		text-align: right;
	}
	
	.my_msg_li .iconfont {
		font-size: 20upx;
		color: #333;
		margin-left: 8upx;
	}
</style>
