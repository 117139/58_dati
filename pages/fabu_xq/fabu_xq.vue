<template>
	<view>
		<view class="hx10"></view>
		<view class="fabu_list">
			<view class="fabu_li">
				<view class=" fabu_name">{{title}}</view>
				<view class="fabu_time">{{create_time}}</view>
			</view>
			<view class="dynum_box">
				<view>{{participation_man?participation_man:0}}人参与</view>
				<view>调研次数：{{research_number?research_number:0}}次</view>
			</view>
		</view>
		<view class="down_btns">
			<view @tap="down_fuc">下载统计</view>
		</view>
		<view class="down_tip">注：详细内容下载统计后查看</view>
		<view class="hx10" style="margin-top: 50upx;"></view>
		<view class="fabu_msg">发布信息</view>
		<view class="fabu_int">
			<input style="color: #333;" type="text" :disabled="true" :value="title">
		</view>
		<view v-if="explain" class="fabu_int">
			<input style="color: #333;" type="text" :disabled="true" :value="explain">
		</view>
		<view  v-if="addition_explain" class="fabu_int">
			<input style="color: #333;" type="text" :disabled="true" :value="addition_explain">
		</view>
		<view class="problem_list">
			<view class="problem_li" v-for="(item,index) in datas">
				<view class="problem_msg">
					<view class="problem_tit">
						{{index+1}}.{{item.problem.title}}
						<text>({{item.type_value}})</text>
					</view>
					<view v-if="item.problem.problem_img.length>0" class="ans_file">
						<image v-for="(item1,index) in item.problem.problem_img" :src="getimg(item1)" @tap="pveimg" mode="aspectFit" lazy-load="true"
						 :data-src="getimg(item1)"></image>
					</view>
					<!-- 单选 -->
					<view class="ans_list" v-if="item.type==1">
						<view class="ans_li" v-for="(item1,idx1) in item.answer">
							<view class="ans_tit dis_flex">
								<view class="ans_xzicon">
									<image src="../../static/images/danxuan.png"></image>
								</view>
								<view class="ans_xztext">
									<view class="ans_v_text">{{item1.answer.title}}</view>
									<view v-if="item1.answer.img.length>0" class="ans_file">
										<image :src="getimg(item1.answer.img[0])" @tap="pveimg" mode="aspectFit" lazy-load="true" :data-src="getimg(item1.answer.img[0])"></image>
									</view>
								</view>
							</view>
							
						</view>
					</view>
					<!-- 多选 -->
					<view class="ans_list" v-if="item.type==2">
						<view class="ans_li" v-for="(item1,idx1) in item.answer">
							<view class="ans_tit dis_flex">
								<view class="ans_xzicon">
									<image src="../../static/images/duoxuan.png"></image>
								</view>
								<view class="ans_xztext">
									<view class="ans_v_text">{{item1.answer.title}}</view>
									<view v-if="item1.answer.img.length>0" class="ans_file">
										<image :src="getimg(item1.answer.img[0])" @tap="pveimg" mode="aspectFit" lazy-load="true" :data-src="getimg(item1.answer.img[0])"></image>
									</view>
								</view>
							</view>
							<view v-if="item1.answer.img.length>0" class="ans_file">
								<view class="ans_xzicon"> </view>
								<image :src="getimg(item1.answer.img[0])" @tap="pveimg" mode="aspectFit" lazy-load="true" :data-src="getimg(item1.answer.img[0])"></image>
							</view>
						</view>
					</view>
					<!-- 填空 -->
					<view class="ans_list" v-if="item.type==3">
						<textarea></textarea>
					</view>
					<!-- 排序 -->
					<view class="ans_list" v-if="item.type==4">
						<view class="ans_li" v-for="(item1,idx1) in item.answer">
							<view class="ans_tit dis_flex">

								<view class="ans_xztext">
									<view class="ans_v_text">{{item1.answer.title}}</view>
									<view v-if="item1.answer.img.length>0" class="ans_file">
										<image :src="getimg(item1.answer.img[0])" @tap="pveimg" mode="aspectFit" lazy-load="true" :data-src="getimg(item1.answer.img[0])"></image>
									</view>
								</view>
								<view class="ans_xzicon">
									<text class="iconfont icon-shangyi"></text>
								</view>
								<view class="ans_xzicon">
									<text class="iconfont icon-xiayi"></text>
								</view>
							</view>
						</view>
					</view>
					<!-- 滑动题 -->
					<view class="ans_list" v-if="item.type==5">
						<view class="hd_box">
							<view class="hd_text dis_flex aic ju_b">
								<view>{{item.answer.min_text}}（{{item.answer.min_num}}）</view>
								<view>{{item.answer.max_text}}（{{item.answer.max_num}}）</view>
							</view>
							<slider value="0" :min='item.answer.min_num' :max="item.answer.max_num" @change="sliderChange" :data-idx="index" activeColor="linear-gradient(-89deg, #65AEE1, #326CFA)"
							 backgroundColor="#ECEBF1" block-color="#8A6DE9" block-size="10" :step="item.answer.step_size" />
							<view class="step_d">
								<view class="step_d_li" style="left: 0;"><text>{{item.answer.min_num}}</text></view>
								<!-- <view class="step_d_li" v-for="(item_hd,index_hd) in get_hd(item.answer.min_num,item.answer.max_num)"><text>{{item_hd}}</text></view> -->
								<view  v-if="item.jleft1>item.answer.min_num &&item.jleft1<item.answer.max_num " class="step_d_li" :style="'left:'+ item.jleft"><text>{{item.jleft1?item.jleft1:0}}</text></view>
								<view class="step_d_li" style="right: 0;"><text>{{item.answer.max_num}}</text></view>
							</view>
						</view>

					</view>

				</view>

			</view>

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
				datas: [],
				title: '',
				explain: '',
				addition_explain: '',
				participation_man: '', //已经参与调研的人数
				research_number: '', //调研次数（提交调研的次数）
				create_time: '', //发布时间
			}
		},
		onLoad(option) {
			if (option.id) {
				this.id = option.id
				this.getdata()
			}
		},
		onShow() {
			console.log(this.new_problem)
		},
		computed: {
			...mapState(['new_problem', 'loginDatas']),
		},
		methods: {
			...mapMutations(['setnew_problem']),
			get_hd(min_num,max_num){
				// var arr=[
				// 	min_num,
				// 	min_num,
				// 	min_num,
				// 	min_num,
				// 	min_num,
				// 	max_num,
				// ]
				// arr[1]=((max_num-min_num)*0.2+min_num*1).toFixed(2)
				// arr[2]=((max_num-min_num)*0.4+min_num*1).toFixed(2)
				// arr[3]=((max_num-min_num)*0.6+min_num*1).toFixed(2)
				// arr[4]=((max_num-min_num)*0.8+min_num*1).toFixed(2)
				var arr=[]
				for( var i=min_num;i<=max_num;i++){
					arr.push(i)
				}
				return arr
			},
			sliderChange(e) {
				var that =this
				console.log(e)
				var idxs = e.currentTarget.dataset.idx
				Vue.set(that.datas[idxs], 'jleft1', e.detail.value)
				var jleft1=e.detail.value
				var item=that.datas[idxs]
				
				var jieguo=jleft1-item.answer.min_num
				console.log(jieguo)
				var zum=item.answer.max_num-item.answer.min_num
				console.log(zum)
				var leftnum =jieguo / zum
				console.log(leftnum)
				leftnum=leftnum*100
				leftnum=leftnum+'%'
				Vue.set(that.datas[idxs], 'jleft',leftnum)
				console.log(that.datas[idxs])
			},
			down_fuc() {
				// return
				var that = this
				uni.showLoading({
					title: '正在拉取数据'
				})
				console.log(service.IPurl + '/user/getExcel?id=' + that.id + '&token=' + that.loginDatas.userToken)
				var now = Date.parse(new Date())
				uni.downloadFile({
					url: service.IPurl + '/user/getExcel?id=' + that.id + '&token=' + that.loginDatas.userToken, //仅为示例，并非真实的资源
					// filePath: wx.env.USER_DATA_PATH + '/' + now + '.xlsx',
					success: (res) => {
						if (res.statusCode === 200) {
							console.log('下载成功');
							console.log(res);
							uni.hideLoading()
							// uni.showToast({
							// 	icon: 'none',
							// 	title: '保存成功'
							// })
							var filePath = res.tempFilePath;
							wx.openDocument({
								filePath: filePath,
								showMenu: true,
								success: function(res) {
									console.log('打开文档成功')
								},
								fail: function(res) {
									console.log(res);
								},
								complete: function(res) {
									console.log(res);
								}
							})
							// uni.saveFile({
							//      tempFilePath: res.tempFilePath,
							//      success: function (res) {
							// 			uni.hideLoading()
							// 			uni.showToast({
							// 				icon:'none',
							// 				title:'保存成功'
							// 			})
							// 			console.log(res)
							//        // var savedFilePath = res.savedFilePath;
							//      }
							//    });
						}
					}
				});
			},
			getdata() {
				var that = this
				var datas = {
					token: that.loginDatas.userToken || '',
					id: that.id
				}

				//selectSaraylDetailByUserCard
				var jkurl = '/user/issueDetails'
				uni.showLoading({
					title: '正在获取数据'
				})
				service.P_get(jkurl, datas).then(res => {
					that.btn_kg = 0
					console.log(res)
					if (res.code == 1) {
						var datas = res.data
						console.log(typeof datas)

						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
						that.title = datas.title
						that.explain = datas.explain
						that.addition_explain = datas.addition_explain
						that.participation_man = datas.participation_man
						that.research_number = datas.research_number
						that.create_time = datas.create_time
						that.datas = datas.problem
						console.log(datas)


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
					that.btn_kg = 0
					console.log(e)
					uni.showToast({
						icon: 'none',
						title: '获取数据失败'
					})
				})

			},
			sub() {
				uni.showModal({
					title: '请仔细确认发布内容，发布后不可修改',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							uni.navigateTo({
								url: '../fabu2/fabu2'
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})

			},
			jump(e) {
				service.jump(e)
			},
			pveimg(e) {
				service.pveimg(e)
			},
			getimg(img){
				return service.getimg(img)
			},
		}
	}
</script>

<style scoped>
	.fabu_list {
		width: 100%;
		padding: 20upx 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;

	}

	.fabu_li {
		width: 100%;
		min-height: 160upx;
		background: #FFFFFF;
		border-radius: 4upx;
		margin-bottom: 20upx;
		padding: 20upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.fabu_name {
		margin-bottom: 27upx;
		font-size: 30upx;
		color: #333;
		font-weight: bold;
	}

	.fabu_time {
		font-size: 24upx;
		color: #999;
	}

	.dynum_box {
		width: 100%;
		padding: 0 30upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		/* height: 100upx; */
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 28upx;
		color: #666;
		margin-bottom: 20upx;
	}

	.down_btns {
		width: 100%;
		padding: 30upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.down_btns view {
		width: 529upx;
		height: 80upx;
		background: linear-gradient(90deg, #65AEE1, #326CFA);
		box-shadow: 0px 0px 7upx 0px rgba(67, 130, 243, 0.1);
		border-radius: 40upx;
		font-size: 32upx;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.down_tip {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26upx;
		color: #999;
	}

	.fabu_msg {
		margin-top: 20upx;
		margin-bottom: 20upx;
		width: 100%;
		height: 100upx;
		padding: 0 30upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		font-weight: bold;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #eee;
	}

	.fabu_int {
		width: 100%;
		height: 94upx;
		border-bottom: 1px solid #EDEDED;
		padding: 0 30upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.fabu_int input {
		width: 100%;
		font-size: 32upx;
		color: #999;
	}

	.problem_list {
		width: 100%;
	}

	.problem_li {
		border-bottom: 9upx solid #ddd;
	}

	.problem_msg {
		width: 100%;
		padding: 0 30upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		padding-top: 30upx;
	}

	.problem_tit {
		font-size: 28upx;
		color: #333;
		margin-bottom: 20upx;
		font-weight: bold;
	}

	.problem_tit text {
		color: #5885DE;
	}

	.ans_list {
		width: 100%;
		padding-bottom: 20upx;
		border-bottom: 1px solid #F3F3F3;
	}

	.ans_li {
		width: 100%;
	}

	.ans_tit {
		width: 100%;
		align-items: flex-start;
		padding-bottom: 18upx;
		line-height: 35upx;
		margin-top: 19upx;

	}

	.ans_xzicon {
		width: 70upx;
		height: 35upx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex: none;
	}

	.ans_xzicon image {
		width: 28upx;
		height: 28upx;
	}

	.ans_xzicon text {
		color: #4C7CDB;
		font-size: 34upx;
	}

	.ans_xztext {
		flex: 1;
		font-size: 30upx;
		line-height: 35upx;
		color: #333;
	}
	.ans_v_text{
		margin-bottom: 15upx;
	}
	.ans_file {
		display: flex;
		flex-wrap: wrap;
		margin-top: 15upx;
	}

	.ans_file image {

		width: 158upx;
		height: 158upx;
		margin-right: 15upx;
		margin-bottom: 15upx;
	}

	.ans_list textarea {
		width: 100%;
		height: 224upx;
		background: #EAEAEA;
	}

	.hd_box {
		width: 100%;
		position: relative;
		margin-top: 50upx;
		margin-bottom: 50upx;
	}

	.hd_box slider {
		width: 100%;
		margin: 0;
		position: relative;
		z-index: 10;
	}

	.hd_text {
		width: 100%;
		position: absolute;
		top: -30upx;
		font-size: 26upx;
		color: #111;
	}

	.step_d {
		width: 100%;
		/* display: flex;
		align-items: center;
		justify-content: space-between; */
		/* position: relative; */
		/* bottom: -40upx; */
	}
	
	.step_d_li {
		width: 2px;
		font-size: 24upx;
		color: #111;
		position: absolute;
		padding-top: 19upx;
		text-align: center;
		top: 20upx;
	}
	
	.step_d_li text {
		width: 3em;
		margin-left: -1.5em;
		text-align: center;
		display: flex;
		justify-content: center;
	}
	
	.step_d_li::before {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		width: 2upx;
		height: 19upx;
		background: #C4C4C4;
		z-index: 0;
	}

	.problem_cz {
		width: 100%;
		height: 86upx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 26upx;
		color: #333;
	}

	.problem_cz view {
		width: 180upx;
		text-align: center;
	}

	.problem_cz text {
		color: #666666;
		margin-right: 8upx;
		font-size: 28upx;
	}

	.hx10 {
		width: 100%;
		height: 15upx;
		background: #ddd;
	}

	.sub_box {
		width: 100%;
		height: 160upx;
		display: flex;
		align-items: center;
		justify-content: center;
		/* position: fixed;
		bottom: 0; */
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

	.xz_add_btn {
		width: 215upx;
		height: 83upx;
		background: linear-gradient(90deg, rgba(61, 127, 255, 0.91), rgba(60, 142, 255, 0.91));
		box-shadow: 0px 0px 10upx 0px rgba(0, 0, 0, 0.18);
		border-radius: 42upx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 300upx;
		right: 30upx;
		z-index: 300;
		font-size: 32upx;
		color: #fff;
	}

	.xz_add_btn text {
		font-size: 38upx;
		color: #fff;
		margin-right: 4upx;
		cursor: pointer;
	}
</style>
