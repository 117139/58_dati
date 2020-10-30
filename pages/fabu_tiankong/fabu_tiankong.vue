<template>
	<view>
		<view class="fbt_box">
			<view class="fbt_tit"><text style="color: #FE2222;">*</text>标题</view>
			<textarea value="" placeholder="请输入标题" v-model="problem"/>
		</view>
		<view class="fbt_btns dis_flex aic ju_c">
			<view class="fbt_btn" @tap="sub">确认</view>
		</view>
	</view>
</template>

<script>
	var that
	import service from '../../service.js';
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				problem:'',
				type:''
			}
		},
		onLoad(option) {
			that=this
			if(option.type){
				this.type=option.type
			}else{
				this.type=1
			}
			
		},
		methods: {
			...mapMutations(['setnew_problem','setnew_xz']),
			sub(){
				if(!this.problem){
					uni.showToast({
						icon:'none',
						title:'请输入标题'
					})
					return
				}
				var datas={
					problem: this.problem,
					"type": this.type, //问题类别1：单选题  2：多选题  3：填空题  4：排序题  5：滑动题
				}
				this.setnew_problem(datas)
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style scoped>
	page{
		height: 100vh;
		background: #fff;
	}
	.fbt_box{
		background: #fff;
		width: 100%;
		padding:0 30upx 30upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	.fbt_tit{
		font-size: 26upx;
		height: 70upx;
		display: flex;
		align-items: center;
	}
	.fbt_box textarea{
		width: 100%;
		height: 116upx;
		background: #FFFFFF;
		border: 1px solid #D8DADE;
		border-radius: 4upx;
		padding: 10upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		font-size: 28upx;
	}
	.fbt_btns{
		width: 100%;
		position: fixed;
		bottom: 50upx;
	}
	.fbt_btn{
		width: 529upx;
		height: 80upx;
		background: linear-gradient(90deg, #65AEE1, #326CFA);
		box-shadow: 0px 0px 7upx 0px rgba(67, 130, 243, 0.1);
		border-radius: 40upx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-size: 32upx;
	}
</style>
