<template>
	<view>
		<view class="an_list">
			<view class="an_search">
				<text class="iconfont icon-chakan"></text>
				<input type="text" placeholder="请输入手机号或者名称">
			</view>
			<view class="an_li dis_flex aic" v-for="(item,index) in list" @tap="xz_fuc(item,$event)">
				<image class="an_li_tx" src="../../static/images/tx_m2.jpg"></image>
				<view class="an_li_name flex_1">{{item.name}}</view>
				<image v-if="item.active"  :data-idx="index" class="an_li_xz" src="../../static/images/danxuan1.png"></image>
				<image v-else class="an_li_xz" src="../../static/images/danxuan.png"></image>
			</view>
		</view>
		<view class="sub_box">
			<view class="sub_btn" @tap="sub">确认</view>
		</view>
	</view>
</template>

<script>
	import Vue from 'vue'
	import service from '../../service.js';
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				list:[
					{
						name:'pndas'
					},
					{
						name:'pndas'
					},
					{
						name:'pndas1'
					},
					{
						name:'pndas2'
					},
					{
						name:'pndas3'
					},
					{
						name:'pndas4'
					},
					{
						name:'pndas5'
					},
					{
						name:'pndas6'
					},
					{
						name:'pndas7'
					},
					{
						name:'pndas8'
					},
					{
						name:'pndas9'
					},
				]
			}
		},
		computed: {
			...mapState(['new_problem']),
		},
		methods: {
			...mapMutations(['setnew_problem']),
			sliderChange(e){
				console.log(e)
			},
			xz_fuc(item, index){
				if (item.active) {
					Vue.set(item, 'active', false); //为item添加不存在的属性，需要使用vue提供的Vue.set( object, key, value )方法。 
				} else {
					Vue.set(item, 'active', true);
				}
			},
			sub(){
				console.log(this.list)
				var arr=[]
				for(var i=0;i<this.list.length;i++){
					if(this.list[i].active){
						arr.push(this.list[i].name)
					}
				}
				console.log(arr)
				if(arr.length==0){
					uni.showToast({
						icon:'none',
						title:'请选择用户'
					})
					return
				}
				// return
				uni.navigateTo({
					url:'../fabu3/fabu3'
				})
			},
			jump(e) {
				service.jump(e)
			}
		}
	}
</script>

<style scoped>
	page{
		background: #fff;
		min-height: 100%;
	}
	.an_list{
		width: 100%;
		background: #fff;
		padding: 20upx 30upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		
	}
	.an_search{
		width: 100%;
		height: 73upx;
		background: #F6F7F9;
		border-radius: 10upx;
		display: flex;
		align-items: center;
		padding: 0 20upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	.an_search text{
		font-size: 35upx;
		margin-right: 10upx;
		color: #999;
	}
	.an_search input{
		flex: 1;
		font-size: 28upx;
		padding: 0 10upx;
	}
	
	.an_li{
		height: 132upx;
		width: 100%;
	}
	.an_li_tx{
		width: 88upx;
		height: 88upx;
		border-radius: 50%;
		margin-right: 34upx;
		flex:none;
	}
	.an_li_name{
		font-size: 30upx;
		color: #333;
	}
	.an_li_xz{
		width: 33upx;
		height: 33upx;
		margin-left: 20upx;
		flex:none;
	}
	.sub_box {
		width: 100%;
		height: 160upx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 0;
		z-index: 99;
		background: #fff;
	}
	
	.sub_btn {
		width: 603upx;
		height: 80upx;
		background: linear-gradient(90deg, #65AEE1, #326CFA);
		box-shadow: 0px 0px 7upx 0px rgba(67, 130, 243, 0.1);
		border-radius: 40px;
		font-size: 32upx;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
