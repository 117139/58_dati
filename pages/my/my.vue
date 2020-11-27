<template>
	<view class="content_wrap">
		<view class="head_box" :class="{'cur_H':PageScroll>10}" :style="style">
			个人中心
		</view>
		<view v-if="hasLogin" class="my_box">
			<image class="my_box_bg" src="/static/images/my_01.jpg"></image>
			<view class="user_box dis_flex aic">
				<image class="user_tx" :src="loginDatas.avatarurl"></image>
				<view class="flex_1">
					<view class="user_name">{{loginDatas.nickname}}</view>
					<view class="user_time" v-if="loginDatas.dy_status==3">调研者有效期：{{gettime(loginDatas.dy_start_status)}}--{{gettime(loginDatas.dy_end_status)}}</view>
					<view class="user_time" v-if="loginDatas.dy_status==2">调研者审核状态：待审核</view>
					<view class="user_time" v-if="loginDatas.dy_status==4">调研者审核状态：审核失败</view>
				</view>
			</view>
		</view>
		<view v-else class="my_box">
			<image class="my_box_bg" src="/static/images/my_01.jpg"></image>
			
			<view class="user_box dis_flex aic">
				<image class="user_tx" src="/static/images/logo.png"></image>
				<view class="flex_1">
					<view class="user_name" @tap="jump" data-url="../login/login" >登录/注册</view>
				</view>
			</view>
		</view>
		<view class="my_sq" v-if="loginDatas.dy_status==1||loginDatas.dy_status==4">
			<image src="/static/images/mysq_04.png" @tap="jump" data-url="../shenqin/shenqin?type=about" :data-login='false' :data-haslogin='hasLogin'></image>
		</view>
		<view class="my_list" >
			<view v-if="fabu_status()" class="my_li" @tap="jump" data-url="../my_fabu/my_fabu?type=about" :data-login='false' :data-haslogin='hasLogin'>
				<view class="my_icon"><text class="iconfont icon-fabu"></text></view>
				<view class="flex_1">我的发布</view>
				<text class="iconfont icon-next-m"></text>
			</view>
			<view class="my_li" @tap="jump" data-url="../about/about?type=about" :data-login='false' :data-haslogin='hasLogin'>
				<view class="my_icon"><text class="iconfont icon-guanyuwomen"></text></view>
				<view class="flex_1">关于我们</view>
				<text class="iconfont icon-next-m"></text>
			</view>
			<view class="my_li" @tap="jump" data-url="../about/about?type=yszc" :data-login='false' :data-haslogin='hasLogin'>
				<view class="my_icon"><text class="iconfont icon-yinsizhengce"></text></view>
				<view class="flex_1">隐私政策</view>
				<text class="iconfont icon-next-m"></text>
			</view>
			<view class="my_li" @tap="fk_show=true">
				<view class="my_icon"><text class="iconfont icon-lianxikefu"></text></view>
				<view class="flex_1">联系客服</view>
				<text class="iconfont icon-next-m"></text>
			</view>
			<view class="my_li" @tap="jump" data-url="../about/about?type=sm" :data-login='false' :data-haslogin='hasLogin'>
				<view class="my_icon"><text class="iconfont icon-shiyongshuoming"></text></view>
				<view class="flex_1">使用说明</view>
				<text class="iconfont icon-next-m"></text>
			</view>
			<view class="zzc_box" v-if="fk_show" @tap="fk_show=false">
				<view class="fk_box"  @tap.stop="">
					<view class="d1" @tap.stop="call" :data-tel="fj_data.relation_phone">{{fj_data.relation_phone}}</view>
					<view class="d2">客服小程序官方联系方式</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js';
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		data() {
			return {
				yhxy: false,
				datas_xy: {
					body: ''
				},
				btnkg: 0,
				time_zz:'你好',
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				datas: '',
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 500,
				PageScroll:'',
				fk_show:false
			};
		},
		onLoad() {
			var yhxy = uni.getStorageSync('yhxy')
			if (!yhxy) {
				this.yhxy = true
			}
			
			
		},
		onShow() {
			service.wxlogin()
		},
		onPageScroll(e){
			console.log(e)
			this.PageScroll=e.scrollTop
			
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin', 'userName','loginDatas','fj_data']),
			
			style0() {
				var StatusBar = this.StatusBar;
				var CustomBar = this.CustomBar;
				var padd_top = CustomBar
				var style = `padding-top:${padd_top}px;`;
				
				return style
			},
			style() {
				var StatusBar = this.StatusBar;
				var CustomBar = this.CustomBar;
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;

				return style
			},
			
			style2(){
				var StatusBar = this.StatusBar;
				var CustomBar = this.CustomBar;
				var style = `padding-top:${CustomBar}px;`;
				
				return style
			}
		},
		onPullDownRefresh() {
			console.log('下拉')
			this.getdata()
		},
		onReachBottom() {
			console.log('上拉')
		},
		methods: {
			...mapMutations(['login','logindata','logout','setplatform']),
			fabu_status(){
				var that =this
				if(that.loginDatas.dy_status==3){
					var now = Date.parse(new Date())
					console.log(now)
					console.log(that.loginDatas.dy_start_status*1000)
					console.log(that.loginDatas.dy_end_status*1000)
					console.log(1667567600000<now)
					console.log(that.loginDatas.dy_end_status*1000>now)
					console.log(1667567600000<now&&that.loginDatas.dy_end_status*1000>now)
					if(that.loginDatas.dy_start_status*1000<now&&that.loginDatas.dy_end_status*1000>now){
						return true
					}
				}
				return false
			},
			gettime(time){
				var time = new Date(time*1000);
				var year = time.getFullYear();
				var month = time.getMonth() + 1;
				var date = time.getDate();
				var hour = time.getHours();
				var minute = time.getMinutes();
				var second = time.getSeconds();
				month = month < 10 ? "0" + month : month;
				date = date < 10 ? "0" + date : date;
				hour = hour < 10 ? "0" + hour : hour;
				minute = minute < 10 ? "0" + minute : minute;
				second = second < 10 ? "0" + second : second;
				return  year+'-'+month+'-'+date
			},
			call(e){
				console.log(e)
				service.call(e)
			},
			bindLogin() {
				uni.navigateTo({
					url: '../login/login',
				});
			},
			jump(e) {
				var that = this
				
				if (that.btnkg == 1) {
					return
				} else {
					that.btnkg = 1
					setTimeout(function() {
						that.btnkg = 0
					}, 1000)
				}
				
				service.jump(e)
			},
			
		}
	}
</script>

<style scoped>
	.content_wrap{
		position: relative;
		min-height: 100vh;
		box-sizing: border-box;
		background: #EDEDED;
	}
	.cu_custom_box{
		z-index: 99999;
	}
	.index_bg{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 355upx;
		z-index: 0;
	}
	.head_box{
		position: fixed;
		width: 100%;
		top: 0;
		text-align: center;
		font-size: 32upx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		z-index: 99999;
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		transition: all .5s;
	}
	.cur_H{
		background: #fff;
		color: #333;
	}
	
	
	.my_box{
		width: 100%;
		height: 348upx;
		position: relative;
	}
	.my_box_bg{
		position: absolute;
		top: 0;
		width: 100%;
		height: 348upx;
		z-index: 0;
	}
	.user_box{
		position: absolute;
		top: 147upx;
		width: 100%;
		padding: 0 30upx;
		box-sizing: border-box;
	}
	.user_tx{
		width: 138upx;
		height: 138upx;
		border-radius: 50%;
		margin-right: 22upx;
	}
	.user_name{
		font-size: 42upx;
		line-height: 90upx;
		color: #fff;
	}
	.user_time{
		font-size: 22upx;
		color: #fff;
	}
	.my_sq{
		width: 100%;
		padding: 30upx;
		box-sizing: border-box;
		background: #fff;
		margin-bottom: 10upx;
	}
	.my_sq image{
		width: 100%;
		height: 108upx;
	}
	.my_list{
		width: 100%;
		padding: 0 30upx;
		box-sizing: border-box;
		background: #fff;
	}
	.my_li{
		width: 100%;
		height: 105upx;
		border-bottom: 1px solid #EDEDED;
		display: flex;
		align-items: center;
		color: #333;
	}
	.my_icon{
		width: 64upx;
		display: flex;
		align-items: center;
		font-size: 30upx;
		color: #666;
	}
	.my_li>.iconfont{
		font-size: 22upx;
		color: #999;
	}
	.zzc_box{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 999;
		background: rgba(0,0,0,.5);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.fk_box{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		
		width: 600upx;
		height: 302upx;
		background: #FFFFFF;
		border-radius: 20upx;
	}
	.fk_box .d1{
		font-size: 32upx;
		color: #444;
		margin: 25upx auto;
	}
	.fk_box .d2{
		font-size: 28upx;
		color: #666;
		margin: 25upx auto;
	}
</style>
