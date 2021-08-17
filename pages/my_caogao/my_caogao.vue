<template>
	<view>
		<view class="fabu_list">
			<view v-if="datas.length>0" class="fabu_li" v-for="(item,index) in datas" @tap="jump_fuc(item)"  :data-url="'/pages/fabu/fabu?id='+item.id">
				<view class="dis_flex_c ju_b">
					<view class="fabu_name" >
						<view class="oh2 " v-html="item.data.dy_title"></view>
					</view>
					<view class="fabu_time oh1" v-html="item.data.dy_explain"></view>
				</view>
				<view class="fabu_btn" @tap.stop="fabu_del(item,index)">删除草稿</view>
				
			</view>
			<view v-if="datas.length==0" class="zanwu">暂无数据</view>
		</view>
		
		<!-- <view class="fabu_btns" style="opacity: 0;position: relative;">
				<view><text class="iconfont icon-bianji1"></text> <text>|</text>发布</view>
		</view>
		<view class="fabu_btns">
				<view @tap="jump" data-url="/pages/fabu/fabu"><text class="iconfont icon-bianji1"></text> <text>|</text>发布</view>
		</view> -->
	</view>
</template>

<script>
	import service from '../../service.js';
	import {
		mapState,
		mapMutations
	} from 'vuex'
	var that
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
		onLoad(option) {
			that=this
			// #ifdef H5
			if(option.uids){
				this.setls_pro_yh(option.uids)
				this.uids = option.uids
			}
			this.uid = option.uid
			this.set_h5_uid(option.uid)
			// #endif
			this.onRetry()
		},
		mounted() {
			// #ifdef H5
			document.getElementsByTagName('uni-page-head')[0].style.display = 'none'
			// #endif
		},
		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage(res) {
		
			if (res.from === 'button') {
				console.log(res.target.dataset.type)
				// this.setData({
				// 	sharetype:'share'
				// })
			}
			
			return {
				// title: '',
				path: '/pages_goods/dati/dati?id=' + res.target.dataset.id,
				success: function(res) {
					console.log('成功', res)
				}
			}
		},
		onShow(){
			if(this.show_count>0){
				this.onRetry()
			}
			this.show_count++
		},
		onPullDownRefresh() {
			this.onRetry()
		},
		onReachBottom() {
			this.getdata()
		},
		methods: {
			...mapMutations(['setnew_problem', 'edit_problem', 'setls_prodata', 'setls_pro_yh', 'set_h5_uid']),
			test(){
				
			},
			onRetry(){
				this.page=1
				this.data_last=false
				this.getdata()
			},
			getdata(num) {
				var that = this
				if(that.data_last){
					return
				}
				var datas = {
					// #ifdef MP-WEIXIN
					token:that.loginDatas.userToken || '',
					// #endif
					// #ifndef MP-WEIXIN
					user_id:that.uid,
					// #endif
					page: that.page,
					size: that.size,
				}
			
				//selectSaraylDetailByUserCard
				var jkurl = '/user/draft/list'
				// #ifdef H5
				// console.log(service.adminurl)
				// jkurl =service.adminurl+'/research_papers.ResearchPapers/saveResearch'
				var adminurl=service.IPurl0+'admin/'
				jkurl=adminurl+'/research_papers.ResearchPapers/draftsIndex'
				// #endif
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
			
			
			// 取消发布
			fabu_del(item,index){
				var that =this
				uni.showModal({
				    title: '提示',
				    content: '是否删除该草稿',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
										var jkurl='/user/draft/del'
										var datas={
											// #ifdef MP-WEIXIN
											token:that.loginDatas.userToken || '',
											// #endif
											// #ifndef MP-WEIXIN
											user_id:that.uid,
											// #endif
											id:item.id
										}
										// #ifdef H5
										// console.log(service.adminurl)
										// jkurl =service.adminurl+'/research_papers.ResearchPapers/saveResearch'
										var adminurl=service.IPurl0+'admin/'
										jkurl=adminurl+'/research_papers.ResearchPapers/draftsDel'
										// #endif
										service.P_post(jkurl, datas).then(res => {
											
											that.btnkg = 0
											console.log(res)
											if (res.code == 1) {
												var datas = res.data
												console.log(typeof datas)
										
												if (typeof datas == 'string') {
													datas = JSON.parse(datas)
												}
												console.log(datas)
												uni.showToast({
													icon:'none',
													title:'操作成功'
												})
												that.datas.splice(index,1)
										
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
										
											that.btnkg = 0
											console.log(e)
											uni.showToast({
												icon: 'none',
												title: '操作失败'
											})
										})
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			jump(e){
				this.sm_ty=true
				service.jump(e)
			},
			jump_fuc(item){
				// #ifdef MP-WEIXIN
				uni.navigateTo({
					url:'/pages/fabu/fabu?id='+item.id
				})
				
				// #endif
				// #ifdef H5
				uni.navigateTo({
					url:'/pages/fabu/fabu?id='+item.id+'&uid='+that.uid
				})
				
				// #endif
			},
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
		align-items: center;
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
	.fabu_btn{
		width: 150upx;
		height: 60upx;
		color: rgba(61, 127, 255, 0.91);
		border:1px solid rgba(61, 127, 255, 0.91);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24upx;
		flex: none;
		margin-left: 15upx;
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
