<template>
	<view class="fbt_ttt">
		<view class="fbt_box">
			<view class="fbt_tit"><text style="color: #FE2222;">*</text>标题</view>
			<textarea value="" placeholder="请输入标题" v-model="problem.title" />
			<view class="fbtimg_list dis_flex">
				<view v-if="problem.img.length>0" class="fbtimg_li" v-for="(item,index) in problem.img">
					<image :src="getimg(item)" :data-src="getimg(item)" mode="aspectFit" @tap="pveimg"></image>
					<image src="../../static/images/xz_jian.png" mode="aspectFit" class="del" @tap="imgdel" :data-idx="index"  data-type="-1"></image>
				</view>
				<view class="fbtimg_li" @tap="upimg" data-type="-1">
					<image src="../../static/images/upimg_03.jpg" mode="aspectFit"></image>
				</view>
			</view>
		</view>
		<view class="xz_tit">选项</view>
		<view class="xz_box">
			<view v-if="answer.length>0" class="xz_li" v-for="(item,index) in answer">
				<image src="../../static/images/xz_jian.png" mode="aspectFit" class="del" @tap="del_ans" :data-type="index"></image>
				<input class="flex_1" type="text" placeholder="输入选项" v-model="item.title">
				<!-- <block v-if="type!=4"> -->
					<image v-if="item.img.length>0" class="xz_img" :src="getimg(item.img[0])" mode="aspectFit" @tap="upimg" :data-type="index"></image>
					<image v-else class="xz_img" src="../../static/images/img_def.png" mode="aspectFit" @tap="upimg" :data-type="index"></image>
				<!-- </block> -->
			</view>
			<view class="xz_li">
				<view class="xz_add" @tap="xz_add()">
					<image src="../../static/images/xz_jia.png" mode="aspectFit" class="del" ></image>添加选项
				</view>
				
				<view class="xz_add_pl" @tap="jump" data-url="/pages/fabu_piliang/fabu_piliang">批量添加</view>
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
				"type": "1", //问题类别1：单选题  2：多选题  3：填空题  4：排序题  5：滑动题
				"answer": [],
				idx:-1,
				btnkg:0
			}
		},
		onLoad(option) {
			that=this
			if(option.type){
				this.type=option.type
			}else{
				this.type=1
			}
			if(this.type==1){
				uni.setNavigationBarTitle({
					title:'单选题'
				})
			}
			if(this.type==2){
				uni.setNavigationBarTitle({
					title:'多选题'
				})
			}
			if(this.type==4){
				uni.setNavigationBarTitle({
					title:'排序题'
				})
			}
			console.log(this.bj_prodata)
			if(this.bj_prodata.datas){
				this.problem=this.bj_prodata.datas.problem
				this.answer=this.bj_prodata.datas.answer
				this.type=this.bj_prodata.datas.type
				this.idx=this.bj_prodata.idx
			}
		},
		
		
		mounted() {  
			// document.getElementsByTagName('uni-page-head')[0].style.display = 'none'  
		},
		onShow(){
			console.log(this.new_xz)
			if(this.new_xz.length>0){
				for(var i=0;i<this.new_xz.length;i++){
					that.xz_add(that.new_xz[i])
				}
				this.setnew_xz()
			}
			
		},
		computed: {
			...mapState(['new_xz','bj_prodata','loginDatas']),
		},
		methods: {
			...mapMutations(['setnew_problem','setnew_xz','edit_problem']),
			del_ans(e){
				var that =this
				console.log(e.currentTarget.dataset.idx)
				if(that.answer.length==1){
					uni.showToast({
						icon:'none',
						title:'至少要有一个选项'
					})
					return
				}
				uni.showModal({
					title: '提示',
					content: '确定要删除该选项吗',
					success (res) {
						if (res.confirm) {
								that.answer.splice(e.currentTarget.dataset.idx,1)
							
						} else if (res.cancel) {
							console.log('用户点击取消')
						}
					}
				})
			},
			xz_add(str){
				var that =this
				if(!str){
					str=''
				}
				var newxz={
						"title": str,
						"img": []
					}
				that.answer.push(newxz)
			},
			sub(){
				var that =this
				if(!this.problem.title){
					uni.showToast({
						icon:'none',
						title:'请输入标题'
					})
					return
				}
				if(that.answer.length==0){
					uni.showToast({
						icon:'none',
						title:'请添加选项'
					})
					return
				}
				for(var i=0;i<that.answer.length;i++){
					/*if(that.type==4){
						if(!that.answer[i].title){
							uni.showToast({
								icon:'none',
								title:'请输入选项'
							})
							return
						}
					}else{*/
						if(!that.answer[i].title&&that.answer[i].img.length==0){
							uni.showToast({
								icon:'none',
								title:'请输入选项'
							})
							return
						}
					/*}*/
					
				}
				if(that.btnkg==1){
					
					return
				}
				that.btnkg=1
				// uni.showLoading({
				// 	title:'正在添加问题'
				// })
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
				// uni.hideLoading()
				uni.showToast({
					icon:'none',
					title:'操作成功'
				})
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
				if(e.currentTarget.dataset.type==-1){
					// 从相册选择1张图  标题
					uni.chooseImage({
						count: 9,
						sizeType: ['original', 'compressed'],
						sourceType: ['album'],
						success: function(res) {
							console.log(res)
							const tempFilePaths = res.tempFilePaths
							console.log(e)
							
							// return
							// #ifdef MP-WEIXIN
							that.upimg1(tempFilePaths,e.currentTarget.dataset.type, 0)
							// #endif
							// #ifndef MP-WEIXIN
							that.upimg1_h5(tempFilePaths,e.currentTarget.dataset.type, 0)
							// #endif
						}
					});
				}else{
					// 从相册选择1张图-答案
					uni.chooseImage({
						count: 1,
						sizeType: ['original', 'compressed'],
						sourceType: ['album'],
						success: function(res) {
							console.log(res)
							const tempFilePaths = res.tempFilePaths
							console.log(e)
							var idx=e.currentTarget.dataset.type
							// that.$set(that.answer[idx],'img',res.tempFilePaths)
							// #ifdef MP-WEIXIN
							that.upimg1(tempFilePaths,idx, 0)
							// #endif
							// #ifndef MP-WEIXIN
							that.upimg1_h5(tempFilePaths,idx, 0)
							// #endif
							return
							const imglen = that.answer[idx].img.length
							
							if (imglen == 9) {
								wx.showToast({
									icon: 'none',
									title: '最多可上传九张'
								})
								return
							}else{
								var newimgs=that.answer[idx].img.concat(res.tempFilePaths)
								that.$set(that.answer[idx],'img',newimgs)
							}
						
							
							return
							that.upimg1(tempFilePaths, 0)
									
						}
					});
				}
			},
			upimg1(imgs,type, i) {
				var that = this
				/*if(type==-1){
					const imglen = that.problem.img.length
					
					if (imglen == 9) {
						wx.showToast({
							icon: 'none',
							title: '最多可上传九张'
						})
						return
					}
				}*/
				uni.uploadFile({
					url: service.IPurl+'/upload/streamImg', //仅为示例，非真实的接口地址
					filePath: imgs[i],
					// filePath: '',
					name: 'file',
					formData: {
						type:1,
						// #ifdef MP-WEIXIN
						token: that.loginDatas.userToken,
						// #endif
					},
					success(res) {
						// console.log(res.data)
						var ndata = JSON.parse(res.data)
						if (ndata.code == 1) {
							console.log(imgs[i], i, ndata.msg)
							if(type==-1){
								
									var newimgs=that.problem.img.concat( ndata.msg)
									that.$set(that.problem,'img',newimgs)
									// var news1 =newimgs.length
									// if (news1 < 9 && i < imgs.length - 1) {
										i++
										if(i<imgs.length){
											that.upimg1(imgs,type, i)
										}
										
									// }
								
							}else{
								var idx_img=[ndata.msg]
								that.$set(that.answer[type],'img',idx_img)
								
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
			upimg1_h5(imgs,type, i) {
				var that = this
				 // var base64 = that.urlTobase64(imgs[i]);
				
				uni.request({
						url: imgs[i],
						method: 'GET',
						responseType: 'arraybuffer',
						success: (res) => {
								let base64 = wx.arrayBufferToBase64(res.data); //把arraybuffer转成base64
								console.log('base64')
								// console.log(base64)
								base64 = 'data:image/jpeg;base64,' + base64; //不加上这串字符，在页面无法显示
								// return base64
								var datas={
									file:base64,
									type:1,
								}
								var jkurl='/upload/base64Img'
								console.log('h5 upload')
								// 单个请求
								service.P_post(jkurl, datas).then(res => {
									that.btn_kg=0
									console.log(res)
									// var ndata = JSON.parse(res.data)
									if (res.code == 1) {
										console.log(imgs[i], i, res.msg)
										if(type==-1){
											
												var newimgs=that.problem.img.concat( res.msg)
												that.$set(that.problem,'img',newimgs)
												// var news1 =newimgs.length
												// if (news1 < 9 && i < imgs.length - 1) {
													i++
													if(i<imgs.length){
														that.upimg1_h5(imgs,type, i)
													}
													
												// }
											
										}else{
											var idx_img=[res.msg]
											that.$set(that.answer[type],'img',idx_img)
											
										}
										
										
										
									} else {
										uni.showToast({
											icon: "none",
											title: "上传失败"
										})
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
						fail: (err) => {
							console.log(err)
						}
				});
				
				
			},
			// 转base64码
			urlTobase64(url) {
				console.log('url')
				// console.log(url)
					uni.request({
							url: url,
							method: 'GET',
							responseType: 'arraybuffer',
							success: (res) => {
									let base64 = wx.arrayBufferToBase64(res.data); //把arraybuffer转成base64
									console.log('base64')
									console.log(base64)
									base64 = 'data:image/jpeg;base64,' + base64; //不加上这串字符，在页面无法显示
									return base64
							},
							fail: (err) => {
								console.log(err)
							}
					});
			},
			pveimg(e){
				service.pveimg(e)
			},
			getimg(img){
				return service.getimg(img)
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
		
		border-bottom: 1px solid #eee;
	}
	.xz_li .del{
		width: 37upx;
		height: 37upx;
	}
	.xz_li input{
		font-size: 28upx;
		padding: 0 10upx;
	}
	.xz_li .xz_img{
		width: 42upx;
		height:42upx;
	}
	.xz_add{
		font-size: 28upx;
		color: #5373FF;
		display: flex;
		align-items: center;
		cursor: pointer;
	}
	.xz_add .del{
		margin-right: 10upx;
	}
	.xz_add_pl{
		font-size: 28upx;
		color: #5373FF;
		cursor: pointer;
	}
</style>
