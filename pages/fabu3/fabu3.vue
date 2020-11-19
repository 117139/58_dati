<template>
	<view>
		<view class="dy_times">
			<picker mode="date" :value="time" :end="time1" :start="now_time" @change="bindTimeChange" style="flex:1;">
				<view class="dy_time">
					<view>调研开始日期</view>
					<view @tap="visible=true" style="flex: 1;text-align: center;font-size: 28upx;">{{time?time:'开始时间'}}</view>
				</view>
			</picker>
			<picker mode="date" :value="time1" :start="time" @change="bindTimeChange1" style="flex:1;">
				<view class="dy_time">
					<view>调研结束日期</view>
					<view @tap="visible=true" style="flex: 1;text-align: center;font-size: 28upx;">{{time1?time1:'结束时间'}}</view>
				</view>
			</picker>
		</view>
		<view class="add_type">
			<view :class="add_type==1?'active':''" @tap="addType_fuc(1)">手动添加</view>
			<view :class="add_type==2?'active':''" @tap="addType_fuc(2)">随机添加</view>
		</view>
		<view v-if="add_type==1" class="times_boxs">
			<view class="time_li dis_flex aic" v-for="(item,index) in time_list">
				<picker mode="time" :value="item.start_time" :end="item.end_time" :data-idx="index" data-type="1" @change="bindDateChange"
				 style="flex:1;height: 100%;" class="dis_flex aic  ju_c">
					<view @tap="visible=true" style="flex: 1;text-align: center;font-size: 28upx;">{{item.start_time?item.start_time:'开始时间'}}</view>
				</picker>
				<view>-</view>
				<picker mode="time" :value="item.end_time" :start="item.start_time" :data-idx="index" data-type="2" @change="bindDateChange"
				 style="flex:1;height: 100%;" class="dis_flex aic ju_c">
					<view @tap="visible=true" style="flex: 1;text-align: center;font-size: 28upx;">{{item.end_time?item.end_time:'结束时间'}}</view>
				</picker>
			</view>
		</view>
		<view v-if="add_type==2" class="times_boxs">
			<view class="time_li dis_flex aic">
				<picker mode="time" :value="sj_time.start_time" :end="sj_time.end_time" :data-idx="-1" data-type="1" @change="bindDateChange"
				 style="flex:1;" class="dis_flex aic ju_c">
					<view @tap="visible=true" style="flex: 1;text-align: center;font-size: 28upx;">{{sj_time.start_time?sj_time.start_time:'开始时间'}}</view>
				</picker>
				<view>-</view>
				<picker mode="time" :value="sj_time.end_time" :start="sj_time.start_time" :data-idx="-1" data-type="2" @change="bindDateChange"
				 style="flex:1;" class="dis_flex aic ju_c">
					<view @tap="visible=true" style="flex: 1;text-align: center;font-size: 28upx;">{{sj_time.end_time?sj_time.end_time:'结束时间'}}</view>
				</picker>
			</view>
			<view class="dt_num">
				<view>答题次数</view>
				<input type="number" v-model="dt_num">
			</view>
		</view>
		<view class="shuoming dis_flex aic" @tap="sm_fuc">
			<text class="iconfont icon-duigou-copy" :class="sm_ty?'active':''"></text> 同意
			<view @tap.stop="jump" data-url="../about/about?type=sm" :data-login='false' :data-haslogin='hasLogin'>《申请调研者说明》</view>
		</view>
		<view class="btns">
			<view v-if="add_type==1" @tap="add_time"><text class="iconfont icon-bianji1"></text>添加时间</view>
			<view @tap="sub"><text class="iconfont icon-queding"></text>确认发布</view>
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
				// #ifdef h5
				uid:'',
				// #endif 
				time: '',
				time1: '',
				add_type: 1,    //1：手动添加  2：随机添加    调研时间类型
				time_list: [{
					"start_time": "",
					"end_time": ""
				}],
				sj_time: {
					"start_time": "",
					"end_time": ""
				},
				sm_ty: false,
				dt_num: 0,
				btnkg:0,
				now_time:new Date()
			}
		},
		onLoad(option) {
			// #ifdef H5
			
			this.uid=option.uid
			// #endif
		},
		
		mounted() {  
			document.getElementsByTagName('uni-page-head')[0].style.display = 'none'  
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin', 'userName', 'loginDatas' ,'ls_prodata', 'ls_pro_yh']),
		},
		methods: {
			...mapMutations(['clearls_pro']),
			bindTimeChange(e) {
				console.log(e)
				this.time = e.target.value
			},
			bindTimeChange1(e) {
				console.log(e)
				this.time1 = e.target.value
			},
			// 时间选择
			bindDateChange(e) {
				var that = this
				console.log(e)
				console.log(e.currentTarget.dataset.idx)
				console.log(e.currentTarget.dataset.type)
				var datas = e.currentTarget.dataset
				if (datas.idx == -1) {
					if (datas.type == 1) {
						that.$set(that.sj_time, 'start_time', e.target.value)

					} else {
						that.$set(that.sj_time, 'end_time', e.target.value)
					}
					return
				}
				if (datas.type == 1) {
					that.$set(that.time_list[datas.idx], 'start_time', e.target.value)

				} else {
					that.$set(that.time_list[datas.idx], 'end_time', e.target.value)
				}
			},
			addType_fuc(num) {
				this.add_type = num
			},
			sm_fuc() {
				this.sm_ty = !this.sm_ty
			},
			add_time() {
				var newtime = {
					"start_time": "",
					"end_time": ""
				}
				this.time_list.push(newtime)
			},
			sub() {
				var that =this
				var datas
				if(that.time_list.length==0){
					uni.showToast({
						icon: 'none',
						title: '请添加时间'
					})
					return
				}
				if(!that.sm_ty){
					uni.showToast({
						icon: 'none',
						title: '请先阅读并同意说明'
					})
					return
				}
				var times=JSON.stringify(that.time_list)
				if(that.add_type==1){
					
					datas = {
						// #ifdef MP-WEIXIN
						token:that.loginDatas.userToken,
						// #endif
						// #ifndef MP-WEIXIN
						id:that.uid,
						// #endif
						dy_title:that.ls_prodata.dy_title,
						dy_explain:that.ls_prodata.dy_explain,
						dy_addition_explain:that.ls_prodata.dy_addition_explain,
						dy_start_time:that.time,
						dy_end_time:that.time1,
						problem:JSON.stringify(that.ls_prodata.datas),
						uids:that.ls_pro_yh,
						dy_time_type:that.add_type,
						sd_time:times
					}
				}else{ //随机
					datas = {
						// #ifdef MP-WEIXIN
						token:that.loginDatas.userToken,
						// #endif
						// #ifndef MP-WEIXIN
						id:that.uid,
						// #endif
						dy_title:that.ls_prodata.dy_title,
						dy_explain:that.ls_prodata.dy_explain,
						dy_addition_explain:that.ls_prodata.dy_addition_explain,
						dy_start_time:that.time,
						dy_end_time:that.time1,
						problem:JSON.stringify(that.ls_prodata.datas),
						uids:that.ls_pro_yh,
						dy_time_type:that.add_type,
						sj_start_time:that.sj_time.start_time,
						sj_end_time:that.sj_time.end_time,
						sj_number:that.dt_num
					}
				}
				
				var jkurl = '/user/research/add'
				
				// #ifdef H5
				console.log(service.adminurl)
				// jkurl =service.adminurl+'/research_papers.ResearchPapers/saveResearch'
				var adminurl='https://datixcx.com.aa.800123456.top/admin/'
				jkurl=adminurl+'/research_papers.ResearchPapers/saveResearch'
				// #endif
				if(this.btnkg==1){
					return
				}
				this.btnkg=1
				uni.showLoading({
					title:'正在提交'
				})
				// 单个请求
				// service.P_get(jkurl, datas).then(res => {
				service.P_post(jkurl, datas).then(res => {
					that.btn_kg=0
					console.log(res)
					if (res.code == 1) {
						var datas = res.data
						console.log(typeof datas)
						
						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
						uni.showToast({
							icon: 'none',
							title: '发布成功，等待审核'
						})
						setTimeout(()=>{
							// #ifdef MP-WEIXIN
							uni.navigateBack({
								delta:3
							})
							// #endif
							// #ifdef H5
								window.open(adminurl+'/research_papers.ResearchPapers/index.html')
							// #endif
						},1000)
					} else {
						that.btnkg=0
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
					that.btnkg=0
					console.log(e)
					uni.showToast({
						icon: 'none',
						title: '获取数据失败'
					})
				})
				
				
			},
			jump(e) {
				this.sm_ty = true
				service.jump(e)
			}
		}
	}
</script>

<style scoped>
	page {
		background: #f7f7f7;
		height: 100%;
	}

	.dy_times {
		width: 100%;
		padding: 0 30upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		border-bottom: 6upx solid #f7f7f7;
		background: #fff;
	}

	.dy_time {
		width: 100%;
		height: 106upx;
		display: flex;
		align-items: center;
		font-size: 30upx;
		color: #333;
	}

	.add_type {
		padding-top: 30upx;
		background: #fff;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.add_type view {
		font-size: 28upx;
		color: #999;
		padding: 35upx 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		border-bottom: 3upx solid rgba(0, 0, 0, 0);
		cursor: pointer;
	}

	.add_type .active {
		color: #3D93F9;
		border-bottom: 3upx solid #3D93F9;
	}

	.times_boxs {
		width: 100%;
		padding: 30upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		margin-bottom: 5upx;
		background: #fff;
	}

	.time_li {
		width: 100%;
		height: 100upx;
		border-bottom: 1px solid #f7f7f7;
	}

	.btns {
		margin-top: 50upx;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.btns view {
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

	.btns text {
		margin-right: 30upx;
	}

	.shuoming {
		margin-top: 30upx;
		font-size: 26upx;
		color: #999;
		margin-bottom: 80upx;
		width: 100%;
		padding: 0 30upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.shuoming text {
		margin-right: 8upx;
		font-size: 26upx;
	}

	.shuoming .active {
		color: #4785F0;
	}

	.dt_num {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 100upx;
		font-size: 28upx;
		color: #333;
	}

	.dt_num input {
		text-align: right;
	}
</style>
