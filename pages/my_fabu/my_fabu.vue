<template>
	<view>
		<view class="fabu_list">
			<view class="fabu_li" v-for="(item,index) in 2" @tap="jump"  data-url="/pages/fabu_xq/fabu_xq">
				<view class="oh2 fabu_name">北京大学生的就业时间与高等教育改革调研研燕究与分分析。</view>
				<view class="fabu_time">2020-09-23 12：00：00</view>
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
				
			}
		},
		methods: {
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
