<template>
	<view>
		<view class="an_list">
			<view class="an_search">
				<text class="iconfont icon-chakan"></text>
				<input type="text" placeholder="请输入手机号或者名称" v-model="keyword" confirm-type="search" @confirm="onRetry">
			</view>
			<view class="an_li dis_flex aic" v-for="(item,index) in datas" @tap="xz_fuc(item,$event)">
				<image class="an_li_tx" :src="item.head_portrait"></image>
				<view class="an_li_name flex_1">{{item.nickname}}</view>
				<image v-if="xuan_type(item)"  :data-idx="index" class="an_li_xz" src="../../static/images/danxuan1.png"></image>
				<image v-else class="an_li_xz" src="../../static/images/danxuan.png"></image>
			</view>
		</view>
		<view class="sub_box" style="opacity: 0;position: relative;">
			<view class="sub_btn" >确认</view>
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
				page:1,
				size:15,
				keyword:'',
				datas:[],
				ids:[]
			}
		},
		computed: {
			...mapState(['new_problem','ls_prodata','loginDatas']),
		},
		onLoad() {
			this.onRetry()
		},
		methods: {
			...mapMutations(['setnew_problem','setls_pro_yh']),
			sliderChange(e){
				console.log(e)
			},
			xz_fuc(item, index){
				for(var i=0;i<this.ids.length;i++){
					if(item.id==this.ids[i]){
						this.ids.splice(i,1)
						return
					}
				}
				this.ids.push(item.id)
				// if (item.active) {
				// 	// Vue.set(item, 'active', false); //为item添加不存在的属性，需要使用vue提供的Vue.set( object, key, value )方法。 
				// 	for(var i=0;i<this.ids.length;i++){
				// 		if(item.id==this.ids[i]){
				// 			this.ids.splice(i,1)
				// 		}
				// 	}
				// } else {
				// 	// Vue.set(item, 'active', true);
				// 	this.ids.push(item.id)
				// }
			},
			xuan_type(item){
				for(var i=0;i<this.ids.length;i++){
					if(item.id==this.ids[i]){
						return true
					}
				}
				return false
			},
			onRetry(){
				this.page=1
				this.getyh()
			},
			getyh(){
				var that =this
				var datas = {
					token:that.loginDatas.userToken,
					size:that.size,
					page:that.page,
					keyword:that.keyword,
				}
				//selectSaraylDetailByUserCard
				var jkurl = '/user/research/getUsrAll'
				
				// 单个请求
				service.P_get(jkurl, datas).then(res => {
					that.btn_kg=0
					console.log(res)
					// if (res.data.code == 1) {
					if (res.code == 1) {
						var datas = res.data
						console.log(typeof datas)
						
						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
						if(that.page==1){
							
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
					that.btn_kg=0
					console.log(e)
					uni.showToast({
						icon: 'none',
						title: '获取数据失败'
					})
				})
				
			},
			sub(){
				console.log(this.datas)
				// var arr=[]
				// for(var i=0;i<this.datas.length;i++){
				// 	if(this.datas[i].active){
				// 		arr.push(this.datas[i].id)
				// 	}
				// }
				// console.log(arr)
				var arr=this.ids
				if(arr.length==0){
					uni.showToast({
						icon:'none',
						title:'请选择用户'
					})
					return
				}
				arr=arr.join(',')
				this.setls_pro_yh(arr)
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
