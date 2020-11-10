<template>
	<view class="content_wrap" :style="style0">
		<image class="index_bg" src="/static/images/index_01.jpg"></image>

		<view class="head_box" :class="{'cur_H':PageScroll>5}" :style="style">
			首页
		</view>
		<view class="dis_flex aic head_search" :class="{'cur_H':PageScroll>5}" :style="style1">
			<view class="dis_flex aic search_l">
				<text class="iconfont icon-chakan"></text>
				<input class="flex_1 search_int" placeholder="输入调研标题" v-model="search_key" confirm-type="search" @confirm="onRetry"></input>
			</view>
			<view class="search_r" @tap="paixu">排序
				<text v-if="sort==1" class="iconfont icon-xiaosanjiao"></text>
				<text v-if="sort==2" class="iconfont icon-xiaosanjiao-copy"></text>
			</view>
		</view>
		<view class="list_box dis_flex_c" :style="style2">
			<scroll-view class="flex_1" scroll-y="true" refresher-enabled='true' :refresher-triggered="triggered"
			 :refresher-threshold="100" @refresherpulling="onPulling" @refresherrefresh="onRefresh" @refresherrestore="onRestore"
			 @refresherabort="onAbort" @scrolltolower="getdata">
				<view>
					<view class="i_li dis_flex aift" v-for="item in datas" @tap="jump" :data-url="'/pages/dati/dati?id='+item.id">
						<image class="i_li_tx" :src="item.head_portrait" mode="aspectFill" lazy-load="true"></image>
						<view class="i_li_msg">
							<view class="d1">{{item.user_nickname}}</view>
							<view class="d2">{{item.research_start_time}}</view>
							<view class="d3">{{item.title}}</view>
						</view>
					</view>
					<view v-if="datas.length==0" class="zanwu">暂无数据</view>
					<view v-if="data_last" class="data_last">没有更多了~~~</view>
				</view>
			</scroll-view>

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
				btn_kg: 0,
				time_zz: '你好',
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				datas: [],
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 500,
				PageScroll: '',
				page: 1,
				size: 15,
				search_key: '',
				sort: 1,
				triggered: true, //设置当前下拉刷新状态
				data_last:false
			};
		},
		watch:{
			hasLogin(){
				this.btn_kg=0
				this.onRetry()
			}
		},
		onLoad() {
			var yhxy = uni.getStorageSync('yhxy')
			// if (!yhxy) {
			// 	this.yhxy = true
			// }
			this._freshing = false;
			// setTimeout(() => {
			// 	this.triggered = true;
			// }, 1000)
			// this.onRetry()
			this.onRetry()
		},
		onPageScroll(e) {
			console.log(e)
			this.PageScroll = e.scrollTop

		},
		onShareAppMessage() {
			
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin', 'userName', 'loginDatas']),
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
			style1() {
				var StatusBar = this.StatusBar;
				var CustomBar = this.CustomBar;
				var style = `top:${CustomBar}px;`;

				return style
			},
			style2() {
				var StatusBar = this.StatusBar;
				var CustomBar = this.CustomBar;
				var style = `top:${CustomBar+StatusBar+50}px;`;

				return style
			}
		},
		onPullDownRefresh() {
			console.log('下拉')
			this.onRetry()
		},
		onReachBottom() {
			console.log('上拉')
		},
		methods: {
			...mapMutations(['login', 'logindata', 'logout', 'setplatform','setfj_data']),
			onPulling(e) {
				console.log("onpulling", e);
			},
			onRefresh() {
				var that =this
				if (this._freshing) return;
				this._freshing = true;
				var datas = {
					token: that.loginDatas.userToken,
					page: 1,
					size: that.size,
					title: that.search_key,
					sort: that.sort
				}
				if(that.btn_kg==1){
					return
				}
				that.btn_kg=1
				//selectSaraylDetailByUserCard
				var jkurl = '/'
				uni.showLoading({
					title: '正在获取数据'
				})
				service.P_get(jkurl, datas).then(res => {
					this.triggered=false
					this._freshing =false
					that.btn_kg=0
					console.log(res)
					if (res.code == 1) {
						var datas = res.data
						console.log(typeof datas)
					
						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
						console.log(datas)
						if(res.resfj_data){
							that.setfj_data(res.resfj_data)
						}
						
							that.datas = datas
						
						that.page=2
					
					} else {
						if (res.msg) {
							uni.showToast({
								icon: 'none',
								title: res.msg
							})
						} else {
							uni.showToast({
								icon: 'none',
								title: '操作失败'
							})
						}
					}
				}).catch(e => {
					this.triggered=false
					this._freshing =false
					that.btn_kg=0
					console.log(e)
					uni.showToast({
						icon: 'none',
						title: '获取数据失败'
					})
				})
				// setTimeout(()=>{
				// 	this.triggered=false
				// 	this._freshing =false
				// },1000)
			},
			onRestore() {
				this.triggered = 'restore'; // 需要重置
				console.log("onRestore");
			},
			onAbort() {
				console.log("onAbort");
			},
			paixu() {
				if (this.sort == 1) {
					this.sort = 2
				} else if (this.sort == 2) {
					this.sort = 1
				}
				this.onRetry()
			},
			onRetry() {
				this.page = 1
				this.getdata()
			},
			xy_on() {
				this.yhxy = false
				uni.setStorageSync('yhxy', 'true')
			},
			xy_off() {
				if (plus.os.name.toLowerCase() === 'android') {
					plus.runtime.quit() // Android
				} else {
					plus.ios.import("UIApplication").sharedApplication().performSelector("exit"); // IOS
				}
			},
			getyxdata() {
				///api/info/list
				var that = this
				var data = {
					token: that.loginDatas.userToken,
					page: that.page,
					size: that.size,
					title: that.search_key,
					sort: that.sort
				}

				//selectSaraylDetailByUserCard
				var jkurl = '/'
				uni.showLoading({
					title: '正在获取数据'
				})
				var page_that=that.page
				service.P_get(jkurl, data,
					function(res) {

						if (res.code == 1) {
							var datas = res.data
							console.log(typeof datas)

							if (typeof datas == 'string') {
								datas = JSON.parse(datas)
							}
							console.log(datas)
							if(page_that==1){
								
								that.datas = datas
							}else{
								if(datas.length==0){
									that.data_last=true
									return
								}
								that.datas =that.datas.concat(datas) 
							}
							that.page++
			
						} else {
							if (res.msg) {
								uni.showToast({
									icon: 'none',
									title: res.msg
								})
							} else {
								uni.showToast({
									icon: 'none',
									title: '操作失败'
								})
							}
						}
					},
					function(err) {

						if (err.msg) {
							uni.showToast({
								icon: 'none',
								title: err.msg
							})
						} else {
							uni.showToast({
								icon: 'none',
								title: '操作失败'
							})
						}
					}
				)
			},

			getimg(img) {
				return service.getimg(img)
			},
			getdata(num) {
				var that = this
				
				if(that.data_last){
					return
				}
				var datas = {
					token: that.loginDatas.userToken || '',
					page: that.page,
					size: that.size,
					title: that.search_key,
					sort: that.sort
				}
				if(this.btn_kg==1){
					return
				}
				this.btn_kg=1
				//selectSaraylDetailByUserCard
				var jkurl = '/'
				uni.showLoading({
					title: '正在获取数据'
				})
				var page_that=that.page
				service.P_get(jkurl, datas).then(res => {
					that.btn_kg=0
					console.log(res)
					if (res.code == 1) {
						var datas = res.data
						console.log(typeof datas)
					
						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
						console.log(res)
						if(res.fj_data){
							that.setfj_data(res.fj_data)
						}
						if(page_that==1){
							
							that.datas = datas
						}else{
							if(datas.length==0){
								that.data_last=true
								return
							}
							that.datas =that.datas.concat(datas) 
						}
						that.page++
					
					} else {
						if (res.msg) {
							uni.showToast({
								icon: 'none',
								title: res.msg
							})
						} else {
							uni.showToast({
								icon: 'none',
								title: '操作失败'
							})
						}
					}
				}).catch(e => {
					that.btn_kg=0
					console.log(e)
					uni.showToast({
						icon: 'none',
						title: '获取数据失败'
					})
				})
				
			},
			jumpurl(e) {
				var that = this
				
				if (that.btn_kg == 1) {
					return
				} else {
					that.btn_kg = 1
					setTimeout(function() {
						that.btn_kg = 0
					}, 1000)
				}
				var datas = e.currentTarget.dataset
				console.log('../webview/webview?url=' + datas.url)
				uni.navigateTo({
					url: '../webview/webview'
				})
				uni.navigateTo({
					url: '../webview/webview?url=' + datas.url
				})
				// window.location.href = datas.url
			},
			jump(e) {
				var that = this
				if(!that.hasLogin){
					uni.navigateTo({
						url:'/pages/login/login'
					})
					return
				}
				if (that.btn_kg == 1) {
					return
				} else {
					that.btn_kg = 1
					setTimeout(function() {
						that.btn_kg = 0
					}, 1000)
				}

				service.jump(e)
			},
			dblogin() {
				var that = this
				if (!uni.getStorageSync('phone')) {
					// uni.reLaunch({
					// 	url:'../login/login'
					// })
					return
				}
				var account = uni.getStorageSync('phone')
				var password = uni.getStorageSync('password')
				console.log(account)
				const data = {
					phone: account,
					password: password
				}
				var jkurl = '/api/login/login'

				service.post(jkurl, data,
					function(res) {
						that.btn_kg = 0
						if (res.code == 1) {
							that.login(res.data.nickname);
							that.logindata(res.data.data)
							uni.setStorageSync('loginmsg', JSON.stringify(res.data.data))
							uni.setStorageSync('phone', account)
							var phone = uni.getStorageSync('phone')
							console.log(phone)
							uni.setStorageSync('password', password)




						} else {
							if (res.data.msg) {
								uni.showToast({
									icon: 'none',
									title: res.data.msg
								})
							} else {
								uni.showToast({
									icon: 'none',
									title: '请重新登录账号'
								})
							}
							setTimeout(() => {
								uni.hideToast()
								uni.navigateTo({
									url: '../login/login'
								})
							}, 2000)
						}
					},
					function(err) {
						that.btn_kg = 0
						if (err.data.msg) {
							uni.showToast({
								icon: 'none',
								title: err.data.msg
							})
						} else {
							uni.showToast({
								icon: 'none',
								title: '操作失败'
							})
						}
					}
				)
			}
		}
	}
</script>

<style scoped>
	.content_wrap {
		position: relative;
		min-height: 100vh;
		box-sizing: border-box;
	}

	.cu_custom_box {
		z-index: 99999;
	}

	.index_bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 355upx;
		z-index: 0;
	}

	.head_box {
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

	.cur_H {
		background: #fff;
		color: #333;
	}

	.head_search {
		width: 100%;
		padding: 10upx 30upx;
		box-sizing: border-box;
		z-index: 999;
		position: fixed;
		height: 92upx;
		transition: all .5s;
	}

	.search_l {
		flex: 1;
		height: 72upx;
		background: #FFFFFF;
		border-radius: 4upx;
		padding: 0 15upx;
		box-sizing: border-box;
	}

	.search_l text {
		margin-right: 8upx;
		color: #959595;
	}

	.search_int {
		min-width: 0;
		background: rgba(0, 0, 0, 0);
		font-size: 26upx;
		flex: 1;
	}

	.search_r {
		width: 130upx;
		height: 72upx;
		flex: none;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #fff;
		padding-left: 20upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.search_r text {
		font-size: 15upx;
		color: #fff;
		position: relative;
		top: 4upx;
	}

	.search_icon {
		width: 30upx;
		height: 30upx;
	}

	.cur_H .search_l {
		background: #eee;
	}

	.cur_H .search_r {
		color: #333;
	}

	.cur_H .search_r text {
		color: #333;
	}

	.list_box {
		position: fixed;
		z-index: 1;
		box-sizing: border-box;
		padding: 0 30upx;
		width: 100%;
		/* height: 100%; */
		bottom: 0;
	}

	.list_box scroll-view {
		height: 100%;
	}

	.i_li {
		width: 100%;
		min-height: 191upx;
		background: #FFFFFF;
		box-shadow: 0px 0px 10upx 0upx rgba(49, 49, 49, 0.1);
		border-radius: 4upx;
		padding: 20upx;
		box-sizing: border-box;
	}

	.i_li+.i_li {
		margin-top: 32upx;
	}

	.i_li_tx {
		width: 74upx;
		height: 74upx;
		border-radius: 50%;
		margin-right: 20upx;
		flex: none;
	}

	.i_li_msg .d1 {
		font-size: 32upx;
		color: #333;
		font-weight: bold;
		margin-bottom: 15upx;
	}

	.i_li_msg .d2 {
		font-size: 24upx;
		color: #999;
		margin-bottom: 15upx;
	}

	.i_li_msg .d3 {
		font-size: 28upx;
		color: #333;
	}
</style>
