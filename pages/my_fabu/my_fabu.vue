<template>
	<view>
		<view class="fabu_list">
			<view class="fabu_li" v-for="(item,index) in datas" @tap="jump"  :data-url="'/pages/fabu_xq/fabu_xq?id='+item.id">
				<view class="oh2 fabu_name" v-html="item.title"></view>
				<view class="fabu_time" v-html="item.create_time"></view>
			</view>
		</view>
		<view class="fabu_btns">
				<view @tap="jump" data-url="/pages/fabu/fabu"><text class="iconfont icon-bianji1"></text> <text>|</text>发布</view>
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
				page:1,
				size:15,
				datas:[],
				btn_kg:0,
				data_last:false,
				show_count:0
			}
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin', 'userName', 'loginDatas']),
		},
		onLoad() {
			this.onRetry()
		},
		onShow(){
			if(this.show_count>0){
				this.onRetry()
			}
			this.show_count++
		},
		methods: {
			onRetry(){
				this.page=1
				this.getdata()
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
				}
			
				//selectSaraylDetailByUserCard
				var jkurl = '/user/myIssue'
				uni.showLoading({
					title: '正在获取数据'
				})
				if(that.btn_kg==1){
					return
				}
				that.btn_kg=1
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
			
			jump(e){
				this.sm_ty=true
				service.jump(e)
			}
		}
	}
</script>

<style scoped>
	.fabu_list{
		width: 100%;
		padding: 20upx 30upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		
	}
	.fabu_li{
		width: 100%;
		min-height: 160upx;
		background: #FFFFFF;
		box-shadow: 0px 0px 10upx 0px rgba(0, 0, 0, 0.1);
		border-radius: 4upx;
		margin-bottom: 30upx;
		padding: 20upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.fabu_name{
		margin-bottom: 27upx;
		font-size: 30upx;
		color: #333;
		font-weight: bold;
	}
	.fabu_time{
		font-size: 24upx;
		color: #999;
	}
	.fabu_btns{
		width: 100%;
		padding: 20upx;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 0;
		z-index: 99;
	}
	.fabu_btns view{
		width: 303upx;
		height: 83upx;
		background: linear-gradient(90deg, rgba(61, 127, 255, 0.91), rgba(60, 142, 255, 0.91));
		box-shadow: 0px 0px 10upx 0px rgba(0, 0, 0, 0.18);
		border-radius: 42upx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 32upx;
		color: #fff;
	}
	.fabu_btns text{
		margin-right: 20upx;
		color: #fff;
		font-size: 32upx;
	}
</style>
