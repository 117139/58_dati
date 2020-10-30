<template>
	<view class="content_wrap" :style="style0">
		<image class="index_bg" src="/static/images/index_01.jpg"></image>
		
		<view class="head_box" :class="{'cur_H':PageScroll>10}" :style="style">
			首页
		</view>
		<view class="dis_flex aic head_search"  :class="{'cur_H':PageScroll>10}" :style="style1">
			<view class="dis_flex aic search_l">
				<text class="iconfont icon-chakan"></text>
				<input class="flex_1 search_int" placeholder="输入调研标题"></input>
			</view>
			<view class="search_r">排序<text class="iconfont icon-xiaosanjiao"></text></view>
		</view>
		<view class="list_box" :style="style2">
			<view class="i_li dis_flex aift" v-for="item in 40" @tap="jump" data-url="/pages/dati/dati">
				<image class="i_li_tx" src="/static/images/tx_m2.jpg" mode="aspectFill" lazy-load="true"></image>
				<view class="i_li_msg">
					<view class="d1">1号研究者</view>
					<view class="d2">2020-09-23 12：00：00</view>
					<view class="d3">北京大学生的就业时间与高等教育改革调研研 究与分分析。</view>
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
				PageScroll:''
			};
		},
		onLoad() {
			var yhxy = uni.getStorageSync('yhxy')
			if (!yhxy) {
				this.yhxy = true
			}
			
			
		},
		onPageScroll(e){
			console.log(e)
			this.PageScroll=e.scrollTop
			
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin', 'userName']),
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
			style1(){
				var StatusBar = this.StatusBar;
				var CustomBar = this.CustomBar;
				var style = `top:${CustomBar}px;`;
				
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
					keyword: 'Privacy_agreement'
				}
			
				//selectSaraylDetailByUserCard
				var jkurl = '/api/info/list'
				uni.showLoading({
					title: '正在获取数据'
				})
				service.get(jkurl, data,
					function(res) {
			
						if (res.data.code == 1) {
							var datas = res.data.data
							console.log(typeof datas)
			
							if (typeof datas == 'string') {
								datas = JSON.parse(datas)
							}
							// console.log(datas)
							that.datas_xy = datas
			
			
						} else {
							if (res.data.msg) {
								uni.showToast({
									icon: 'none',
									title: res.data.msg
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
			},
			
			getimg(img){
				return service.getimg(img)
			},
			getdata(){
				///api/info/list
				var that =this
				var data = {
					keyword:'banner,'
				}
				//selectSaraylDetailByUserCard
				var jkurl = '/api/info/list'
				uni.showLoading({
					title: '正在获取数据'
				})
				service.get(jkurl, data,
					function(res) {
						
						if (res.data.code == 1) {
							var datas = res.data.data
							console.log(typeof datas)
							
							if (typeof datas == 'string') {
								datas = JSON.parse(datas)
							}
							console.log(datas)
							that.datas = datas
				
				
						} else {
							if (res.data.msg) {
								uni.showToast({
									icon: 'none',
									title: res.data.msg
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
			},
			jumpurl(e){
				var that = this
				
				if (that.btnkg == 1) {
					return
				} else {
					that.btnkg = 1
					setTimeout(function() {
						that.btnkg = 0
					}, 1000)
				}
				var datas = e.currentTarget.dataset
				console.log('../webview/webview?url='+datas.url)
				uni.navigateTo({
					url:'../webview/webview'
				})
				uni.navigateTo({
					url:'../webview/webview?url='+datas.url
				})
				// window.location.href = datas.url
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
			dblogin(){
				var that =this
				if(!uni.getStorageSync('phone')){
					// uni.reLaunch({
					// 	url:'../login/login'
					// })
					return
				}
				var account=uni.getStorageSync('phone')
				var password=uni.getStorageSync('password')
				console.log(account)
				const data = {
					phone: account,
					password: password
				}
				var jkurl='/api/login/login'
				
				service.post(jkurl, data,
					function(res) {
						that.btnkg=0
						if (res.data.code == 1) {
							that.login(res.data.data.nickname);
							that.logindata(res.data.data)
							uni.setStorageSync('loginmsg', JSON.stringify(res.data.data))
							uni.setStorageSync('phone', account)
							var phone=uni.getStorageSync('phone')
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
							setTimeout(()=>{
								uni.hideToast()
								uni.navigateTo({
									url:'../login/login'
								})
							},2000)
						}
					},
					function(err) {
						that.btnkg=0
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
	.content_wrap{
		position: relative;
		min-height: 100vh;
		box-sizing: border-box;
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
	
	.head_search{
		width: 100%;
		padding: 10upx 30upx;
		box-sizing: border-box;
		z-index: 999;
		position: fixed;
		height: 92upx;
		transition: all .5s;
	}
	.search_l{
		flex: 1;
		height: 72upx;
		background: #FFFFFF;
		border-radius: 4upx;
		padding: 0 15upx;
		box-sizing: border-box;
	}
	.search_l text{
		margin-right: 8upx;
		color: #959595;
	}
	.search_int{
		min-width: 0;
		background: rgba(0,0,0,0);
		font-size: 26upx;
		flex: 1;
	}
	.search_r{
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
	.search_r text{
		font-size: 15upx;
		color: #fff;
		position: relative;
		top: 4upx;
	}
	.search_icon{
		width: 30upx;
		height: 30upx;
	}
	.cur_H .search_l{
		background: #eee;
	}
	.cur_H .search_r{
		color: #333;
	}
	.cur_H .search_r text{
		color: #333;
	}
	.list_box{
		position: relative;
		z-index: 1;
		box-sizing: border-box;
		padding: 0 30upx;
		width: 100%;
	}
	.i_li{
		width: 100%;
		min-height: 191upx;
		background: #FFFFFF;
		box-shadow: 0px 0px 10upx 0upx rgba(49, 49, 49, 0.1);
		border-radius: 4upx;
		padding: 20upx;
		box-sizing: border-box;
	}
	.i_li+.i_li{
		margin-top: 32upx;
	}
	.i_li_tx{
		width: 74upx;
		height: 74upx;
		border-radius: 50%;
		margin-right: 20upx;
	}
	.i_li_msg .d1{
		font-size: 32upx;
		color: #333;
		font-weight: bold;
		margin-bottom: 15upx;
	}
	.i_li_msg .d2{
		font-size: 24upx;
		color: #999;
		margin-bottom: 15upx;
	}
	.i_li_msg .d3{
		font-size: 28upx;
		color: #333;
	}
</style>
