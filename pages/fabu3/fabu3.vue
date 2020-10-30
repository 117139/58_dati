<template>
	<view>
		<view class="dy_times">
			<view class="dy_time">
				<view>调研开始日期</view>
				<picker mode="date" :value="time" :end="time1" @change="bindTimeChange" style="flex:1;">
					<view @tap="visible=true" style="flex: 1;text-align: center;font-size: 28upx;">{{time?time:'开始时间'}}</view>
				</picker>
			</view>
			<view class="dy_time">
				<view>调研结束日期</view>
				<picker mode="date" :value="time1" :start="time" @change="bindTimeChange1" style="flex:1;">
					<view @tap="visible=true" style="flex: 1;text-align: center;font-size: 28upx;">{{time1?time1:'结束时间'}}</view>
				</picker>
			</view>
		</view>
		<view class="add_type">
			<view :class="add_type==0?'active':''" @tap="addType_fuc(0)">手动添加</view>
			<view :class="add_type==1?'active':''" @tap="addType_fuc(1)">随机添加</view>
		</view>
		<view v-if="add_type==0" class="times_boxs">
			<view class="time_li dis_flex aic" v-for="(item,index) in time_list">
				<picker mode="time" :value="item.start_time" :end="item.end_time" :data-idx="index" data-type="1" @change="bindDateChange" style="flex:1;">
					<view @tap="visible=true" style="flex: 1;text-align: center;font-size: 28upx;">{{item.start_time?item.start_time:'开始时间'}}</view>
				</picker>
				<view>-</view>
				<picker mode="time" :value="item.end_time" :start="item.start_time" :data-idx="index" data-type="2" @change="bindDateChange" style="flex:1;">
					<view @tap="visible=true" style="flex: 1;text-align: center;font-size: 28upx;">{{item.end_time?item.end_time:'结束时间'}}</view>
				</picker>
			</view>
		</view>
		<view v-if="add_type==1" class="times_boxs">
			<view class="time_li dis_flex aic">
				<picker mode="time" :value="sj_time.start_time" :end="sj_time.end_time" :data-idx="-1" data-type="1" @change="bindDateChange" style="flex:1;">
					<view @tap="visible=true" style="flex: 1;text-align: center;font-size: 28upx;">{{sj_time.start_time?sj_time.start_time:'开始时间'}}</view>
				</picker>
				<view>-</view>
				<picker mode="time" :value="sj_time.end_time" :start="sj_time.start_time" :data-idx="-1" data-type="2" @change="bindDateChange" style="flex:1;">
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
			<view v-if="add_type==0" @tap="add_time"><text class="iconfont icon-bianji1"></text>添加时间</view>
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
				time: '',
				time1: '',
				add_type: 0,
				time_list: [{
					"start_time": "",
					"end_time": ""
				}],
				sj_time:{
					"start_time": "",
					"end_time": ""
				},
				sm_ty: false,
				dt_num:0
			}
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin', 'userName']),
		},
		methods: {
			bindTimeChange(e) {
				console.log(e)
				this.time = e.target.value
			},
			bindTimeChange1(e) {
				console.log(e)
				this.time1 = e.target.value
			},
			// 时间选择
			bindDateChange(e){
				var that =this
				console.log(e)
				console.log(e.currentTarget.dataset.idx)
				console.log(e.currentTarget.dataset.type)
				var datas =e.currentTarget.dataset
				if(datas.idx==-1){
					if(datas.type==1){
						that.$set(that.sj_time,'start_time',e.target.value)
						
					}else{
						that.$set(that.sj_time,'end_time',e.target.value)
					}
					return
				}
				if(datas.type==1){
					that.$set(that.time_list[datas.idx],'start_time',e.target.value)
					
				}else{
					that.$set(that.time_list[datas.idx],'end_time',e.target.value)
				}
			},
			addType_fuc(num) {
				this.add_type = num
			},
			sm_fuc() {
				this.sm_ty = !this.sm_ty
			},
			add_time(){
				var newtime={
					"start_time": "",
					"end_time": ""
				}
				this.time_list.push(newtime)
			},
			sub() {
				uni.showToast({
					icon: 'none',
					title: '发布成功，等待审核'
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
	.dt_num{
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 100upx;
		font-size: 28upx;
		color: #333;
	}
	.dt_num input{
		text-align: right;
	}
</style>
