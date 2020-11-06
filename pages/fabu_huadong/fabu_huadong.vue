<template>
	<view class="fbt_ttt">
		<view class="fbt_box">
			<view class="fbt_tit"><text style="color: #FE2222;">*</text>标题</view>
			<textarea value="" placeholder="请输入标题" v-model="problem.title" />
			<view class="fbtimg_list dis_flex">
				<view v-if="problem.img.length>0" class="fbtimg_li" v-for="(item,index) in problem.img">
					<image :src="item" :data-src="item" mode="aspectFit" @tap="pveimg"></image>
					<image src="../../static/images/xz_jian.png" mode="aspectFit" class="del" @tap="imgdel" :data-idx="index"  data-type="-1"></image>
				</view>
				<view class="fbtimg_li" @tap="upimg" data-type="-1">
					<image src="../../static/images/upimg_03.jpg" mode="aspectFit"></image>
				</view>
			</view>
		</view>
		<view class="xz_tit">选项</view>
		<view class="xz_box">
			<view class="xz_li">
				<view>最小数值</view>
				<input class="flex_1" type="number" placeholder="请输入" v-model="answer.min_num">
			</view>
			<view class="xz_li">
				<view>最小数值显示文本</view>
				<input class="flex_1" type="text" placeholder="请输入" v-model="answer.min_text">
			</view>
			<view class="xz_li">
				<view>最大数值</view>
				<input class="flex_1" type="number" placeholder="请输入" v-model="answer.max_num">
			</view>
			<view class="xz_li">
				<view>最大数值显示文本</view>
				<input class="flex_1" type="text" placeholder="请输入" v-model="answer.max_text">
			</view>
			<view class="xz_li">
				<view>请输入步长</view>
				<input class="flex_1" type="number" placeholder="请输入" v-model="answer.step_size">
			</view>
			
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
				id:'',
				problem: {
					"title": "",
					"img": []
				},
				"type": "5", //问题类别1：单选题  2：多选题  3：填空题  4：排序题  5：滑动题
				"answer": {
					"min_num": "0",
					"min_text": "不好",
					"max_num": "100",
					"max_text": "非常好",
					"step_size": "1"
				},
				idx:-1,
				btnkg:0
			}
		},
		onLoad(option) {
			that=this
			if(option.type){
				this.type=option.type
			}else{
				this.type=5
			}
			console.log(this.bj_prodata)
			if(this.bj_prodata.datas){
				this.problem=this.bj_prodata.datas.problem
				this.answer=this.bj_prodata.datas.answer
				this.type=this.bj_prodata.datas.type
				this.idx=this.bj_prodata.idx
			}
		},
		onShow(){},
		computed: {
			...mapState(['new_xz','bj_prodata']),
		},
		methods: {
			...mapMutations(['setnew_problem','setnew_xz','edit_problem']),
			
			sub(){
				var that =this
				if(!this.problem.title){
					uni.showToast({
						icon:'none',
						title:'请输入标题'
					})
					return
				}
				if(that.answer.min_num==''){
					uni.showToast({
						icon:'none',
						title:'请填写最小值'
					})
					return
				}
				if(!that.answer.min_text){
					uni.showToast({
						icon:'none',
						title:'请填写最小数值显示文本'
					})
					return
				}
				if(that.answer.max_num==''){
					uni.showToast({
						icon:'none',
						title:'请填写最大值'
					})
					return
				}
				if(!that.answer.max_text){
					uni.showToast({
						icon:'none',
						title:'请填写最大数值显示文本'
					})
					return
				}
				if(that.answer.step_size==''){
					uni.showToast({
						icon:'none',
						title:'请填写请输入步长'
					})
					return
				}
				
				var step_l=that.answer.max_num-that.answer.min_num
				var step_size=that.answer.step_size
				if( step_size<0 ||step_size==0 || step_l%step_size!=0){
					uni.showToast({
						icon:'none',
						title:'步长，取值必须大于 0，并且可被(最大值 - 最小值)整除'
					})
					return
				}
				if(that.btnkg==1){
					
					return
				}
				that.btnkg=1
				if(this.idx==-1){
					
					var datas={
						problem: this.problem,
						"type": this.type, //问题类别1：单选题  2：多选题  3：填空题  4：排序题  5：滑动题
						"answer": this.answer
					}
					console.log(datas)
					this.setnew_problem(datas)
				}else{
					var datas={
						problem: this.problem,
						"type": this.type, //问题类别1：单选题  2：多选题  3：填空题  4：排序题  5：滑动题
						"answer": this.answer
					}
					var edit_data={
						idx:that.idx,
						datas:datas,
					}
					this.edit_problem(edit_data)
				}
				
				// return
				setTimeout(()=>{
					uni.navigateBack({
						delta:1
					})
				},1000)
			},
			imgdel(e){
				var that =this
				console.log(e.currentTarget.dataset.idx)
				uni.showModal({
					title: '提示',
					content: '确定要删除这张图片吗',
					success (res) {
						if (res.confirm) {
							console.log('用户点击确定',e.currentTarget.dataset.type)
							if(e.currentTarget.dataset.type==-1){
								that.problem.img.splice(e.currentTarget.dataset.idx,1)
							}else{
								that.answer[e.currentTarget.dataset.type].img.splice(e.currentTarget.dataset.idx,1)
							}
						} else if (res.cancel) {
							console.log('用户点击取消')
						}
					}
				})
				
			},
			upimg(e) {
				var that = this
				console.log(e.currentTarget.dataset.type)
				
					// 从相册选择1张图
					uni.chooseImage({
						count: 9,
						sizeType: ['original', 'compressed'],
						sourceType: ['album'],
						success: function(res) {
							console.log(res)
							const tempFilePaths = res.tempFilePaths
							console.log(e)
							
								const imglen = that.problem.img.length
								
								if (imglen == 9) {
									wx.showToast({
										icon: 'none',
										title: '最多可上传九张'
									})
									return
								}else{
									var newimgs=that.problem.img.concat(res.tempFilePaths)
									that.$set(that.problem,'img',newimgs)
								}
								
							
							return
							that.upimg1(tempFilePaths, 0)
				
						}
					});
				
			},
			upimg1(imgs, i) {
				var that = this
				const imglen = that.problem.img.length
				var newlen = Number(imglen) + Number(i)
				if (imglen == 9) {
					wx.showToast({
						icon: 'none',
						title: '最多可上传九张'
					})
					return
				}
				var newdata = that.problem.img
				// console.log(i)
				// newdata.push(imgs[i])
				// that.imgb = newdata
				// var news1 = that.imgb.length
				// if (news1 < 9 && i < imgs.length - 1) {
				// 	i++
				// 	that.upimg1(imgs, i)
				// }
				// return
				// console.log(img1)
				uni.uploadFile({
					url: service.IPurl+'/api/upload', //仅为示例，非真实的接口地址
					filePath: imgs[i],
					name: 'file',
					formData: {
						token: that.loginDatas.token
					},
					success(res) {
						// console.log(res.data)
						var ndata = JSON.parse(res.data)
						if (ndata.code == 1) {
							console.log(imgs[i], i, ndata.data)
							var newdata = that.imgb
							console.log(i)
							newdata.push(ndata.data)
							that.imgb = newdata
							// i++
							// that.upimg(imgs, i)
							var news1 = that.imgb.length
							
							var news1 = that.imgb.length
							if (news1 < 9 && i < imgs.length - 1) {
								i++
								that.upimg1(imgs, i)
							}
						} else {
							uni.showToast({
								icon: "none",
								title: "上传失败"
							})
						}
					}
				})
			},
			pveimg(e){
				service.pveimg(e)
			},
			jump(e){
				service.jump(e)
			}
		}
	}
</script>

<style scoped>
	page{
		height: 100vh;
		background: #F3F3F3;
	}
	.fbt_ttt{
		padding-bottom: 180upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
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
		padding: 50upx 0;
		bottom: 0;
		z-index: 99;
		background: #F3F3F3;
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
	.fbtimg_list{
		margin-top: 15upx;
		flex-wrap: wrap;
	}
	.fbtimg_li{
		padding: 6upx;
		position: relative;
	}
	.fbtimg_li image{
		width: 125upx;
		height: 125upx;
	}
	.fbtimg_li .del{
		width: 30upx;
		height: 30upx;
		position: absolute;
		top: 0upx;
		right: 0upx;
	}
	.xz_tit{
		font-size: 24upx;
		color: #A8A8A8;
		width: 100%;
		padding: 0 30upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		height: 47upx;
		display: flex;
		align-items: center;
	}
	.xz_box{
		width: 100%;
		background: #fff;
		padding: 0 30upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	.xz_li{
		width: 100%;
		height: 97upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 28upx;
		color: #333;
		border-bottom: 1px solid #eee;
	}
	.xz_li .del{
		width: 37upx;
		height: 37upx;
	}
	.xz_li input{
		font-size: 28upx;
		padding: 0 10upx;
		text-align: right;
	}
	
	
</style>
