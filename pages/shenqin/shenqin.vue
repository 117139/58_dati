<template>
	<view class="wrap">
		<image class="sq_bg" src="/static/images/shenqin_02.jpg"></image>
		<view class="sq_box">
			<view class="sq_box1">
				<view class="sq_li dis_flex aic">
					<view>手机号</view>
					<input type="number" placeholder="请输入手机号" v-model="tel">
				</view>
				
				<view class="sq_li dis_flex aic">
					<view>时间</view>
					<picker mode="date" :value="time" :end="time1"  @change="bindTimeChange" style="flex:1;">
					<view @tap="visible=true" style="flex: 1;text-align: center;font-size: 28upx;">{{time?time:'开始时间'}}</view>
					</picker>
					<view>-</view>
					<picker mode="date" :value="time1" :start="time" @change="bindTimeChange1" style="flex:1;">
					<view @tap="visible=true" style="flex: 1;text-align: center;font-size: 28upx;">{{time1?time1:'结束时间'}}</view>
					</picker>
					<text class="iconfont icon-next-m"></text>
				</view>
				
				<view class="sq_li dis_flex aic">
					<view>仔细说明</view>
				</view>
				<view  class="sq_li dis_flex aic">
					<textarea v-model="content" placeholder="请输入申请说明" />
				</view>
				<view class="sq_tip">
					申请成功后等待管理员审核，审核成功后获得发布功能
				</view>
				<view class="shuoming dis_flex aic" @tap="sm_fuc">
					<text class="iconfont icon-duigou-copy" :class="sm_ty?'active':''"></text> 同意
					<view @tap.stop="jump" data-url="../about/about?type=sm" :data-login='false' :data-haslogin='hasLogin'>《申请调研者说明》</view>
				</view>
				<view class="dis_flex aic ju_c" style="width: 100%;">
					<view class="sq_btn" @tap="sub">确认申请</view>
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
				tel:'',
				time: '',
				time1:'',
				content:'',
				visible:'',
				
				sm_ty:false
			}
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin', 'userName']),
		},
		methods: {
			sm_fuc(){
				this.sm_ty=!this.sm_ty
			},
			bindTimeChange(e){
				console.log(e)
				this.time = e.target.value
			},
			bindTimeChange1(e){
				console.log(e)
				this.time1 = e.target.value
			},
			sub(){
				var that =this
				if (that.tel == '' || !(/^1\d{10}$/.test(that.tel))) {
					uni.showToast({
						icon: 'none',
						title: '手机号有误'
					})
					return
				}
				if(!that.time){
					uni.showToast({
						icon: 'none',
						title: '请选择开始时间'
					})
					return
				}
				if(!that.time1){
					uni.showToast({
						icon: 'none',
						title: '请选择结束时间'
					})
					return
				}
				if(!that.content){
					uni.showToast({
						icon: 'none',
						title: '请输入申请说明'
					})
					return
				}
				uni.showToast({
					icon: 'none',
					title: '操作成功'
				})
				setTimeout(()=>{
					uni.navigateBack()
				},1000)
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
		/* background: url(../../static/images/gl.jpg) top left / 100% auto no-repeat; */
		height: 100vh;
		overflow: hidden;
	}
	.sq_bg{
		width: 100%;
		height: 249upx;
		position: absolute;
		top: 0;
		z-index: 1;
	}
	.sq_box{
		position: relative;
		z-index: 2;
		width: 100%;
		padding: 140upx 30upx 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		height: 100vh;
	}
	.sq_box1{
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		box-shadow: 0px 0px 10upx 0px rgba(0, 0, 0, 0.1);
		border-radius: 4upx;
		padding: 30upx 25upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	.sq_li{
		min-height: 100upx;
		font-size: 32upx;
		color: #333;
		border-bottom: 1px solid #EDEDED;
		line-height: 40upx;
	}
	.sq_li input{
		font-size: 28upx;
		flex: 1;
		padding: 0 30upx;
		text-align: center;
	}
	.sq_li .icon-next-m{
		font-size: 28upx;
		color: #999;
	}
	.sq_li textarea{
		width: 100%;
		height: 149upx;
		background: #EDEDED;
		border-radius: 1px;
		padding: 20upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		font-size: 28upx;
	}
	.sq_tip{
		margin-top: 40upx;
		font-size: 26upx;
		color: #999;
		margin-bottom: 50upx;
	}
	.sq_btn{
		color: #fff;
		width: 529upx;
		height: 80upx;
		background: linear-gradient(90deg, #65AEE1, #326CFA);
		box-shadow: 0px 0px 7upx 0px rgba(67, 130, 243, 0.1);
		border-radius: 40upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.shuoming{
		font-size: 26upx;
		color: #999;
		margin-bottom: 80upx;
	}
	.shuoming text{
		margin-right: 8upx;
	}
	.shuoming .active{
		color: #4785F0;
	}
</style>
