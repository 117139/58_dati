<template>
	<view>
		<block v-if="datas.length>0">
			<view class="fabu_int">
				<view>{{title}}</view>
			</view>
			<view v-if="explain" class="fabu_int">
				<view>{{explain}}</view>
			</view>
			<view v-if="addition_explain" class="fabu_int">
				<view>{{addition_explain}}</view>
			</view>
			
			<view class="fabu_int">
				<view class="dis_flex_c aic">
					答题时间
				<text style="margin-top: 30upx;font-size: 30upx; line-height: 40upx;font-weight: 400;">
					<text v-for="(item,index) in dt_time" >
						{{item.start_time}}-{{item.end_time}}{{index!=dt_time.length-1?'、':''}}    
					</text>
				</text>
				</view>
				
			</view>
			<view class="problem_list">
			
				<view class="problem_li" v-for="(item,index) in datas">
					<view class="problem_msg">
						<view class="problem_tit">
							{{index+1}}.{{item.problem.title}}
							<text>({{item.type==1?'单选题':item.type==2?'多选题':item.type==3?'填空题':item.type==4?'排序题':"滑动题"}})</text>
						</view>
						<view v-if="item.problem.problem_img.length>0" class="ans_file">
							
							<image v-for="(item1,index) in item.problem.problem_img" :src="getimg(item1)" @tap="pveimg" mode="aspectFit" lazy-load="true" 
							:data-src="getimg(item1)"></image>
						</view>
						<!-- 单选 -->
						<view class="ans_list" v-if="item.type==1">
							<view class="ans_li" v-for="(item1,idx1) in item.answer" @tap="danxuan(item,$event)" :data-idx="item1.option">
								<view class="ans_tit dis_flex">
									<view class="ans_xzicon">
										<image v-if="item.jieguo==item1.option" src="../../static/images/danxuan1.png"></image>
										<image v-else src="../../static/images/danxuan.png"></image>
									</view>
									<view class="ans_xztext">
										<view class="ans_v_text">{{item1.answer.title}}</view>
										<view v-if="item1.answer.img.length>0" class="ans_file">
											<image :src="getimg(item1.answer.img[0])" @tap.stop="pveimg" mode="aspectFit" lazy-load="true" :data-src="getimg(item1.answer.img[0])"></image>
										</view>
									</view>
								</view>
							</view>
						</view>
						<!-- 多选 -->
						<view class="ans_list" v-if="item.type==2">
							<view class="ans_li" v-for="(item1,idx1) in item.answer" @tap="duoxuan(item,$event)" :data-idx="item1.option">
								<view class="ans_tit dis_flex">
									<view class="ans_xzicon">
										<image v-if="getduoxuan(item,item1.option)" :data-index="index" :data-idx="idx1" src="../../static/images/duoxuan1.png"></image>
										<image v-else src="../../static/images/duoxuan.png"></image>
									</view>
									<view class="ans_xztext">
										<view class="ans_v_text">{{item1.answer.title}}</view>
										<view v-if="item1.answer.img.length>0" class="ans_file">
											<image :src="getimg(item1.answer.img[0])" @tap.stop="pveimg" mode="aspectFit" lazy-load="true" :data-src="getimg(item1.answer.img[0])"></image>
										</view>
									</view>
								</view>
							</view>
						</view>
						<!-- 填空 -->
						<view class="ans_list" v-if="item.type==3">
							<textarea v-model="item.jieguo" :data-index="index" @input="tiankong_fuc" placeholder="请输入" maxlength="-1"></textarea>
						</view>
						<!-- 排序 -->
						<view class="ans_list" v-if="item.type==4">
							<view class="ans_li" v-for="(item1,idx1) in item.answer">
								<view class="ans_tit dis_flex">
			
									<view class="ans_xztext">
										<view class="ans_v_text">{{item1.answer.title}}</view>
										<view v-if="item1.answer.img.length>0" class="ans_file">
											<image :src="getimg(item1.answer.img[0])" @tap.stop="pveimg" mode="aspectFit" lazy-load="true" :data-src="getimg(item1.answer.img[0])"></image>
										</view>
									</view>
									<view v-if="idx1!=0" class="ans_xzicon" @click="px_up(item,idx1)">
										<text class="iconfont icon-shangyi"></text>
									</view>
									<view v-if="idx1!=item.answer.length-1" class="ans_xzicon" @click="px_down(item,idx1)">
										<text class="iconfont icon-xiayi"></text>
									</view>
								</view>
							</view>
						</view>
						<!-- 滑动题 -->
						<view class="ans_list" v-if="item.type==5">
							<view class="hd_box">
								<view class="hd_text dis_flex aic ju_b">
									<view>{{item.answer[0].min_text}}（{{item.answer[0].min_num}}）</view>
									<view>{{item.answer[0].max_text}}（{{item.answer[0].max_num}}）</view>
								</view>
								<slider value="0" :min='item.answer[0].min_num' :max="item.answer[0].max_num" @change="sliderChange" 
								:data-idx="index"
								activeColor="linear-gradient(-89deg, #65AEE1, #326CFA)"
								 backgroundColor="#ECEBF1" block-color="#8A6DE9" block-size="10" :step="item.answer[0].step_size" />
								<view class="step_d">
									<view class="step_d_li" v-for="(item_hd,index_hd) in get_hd(item.answer[0].min_num,item.answer[0].max_num)"><text>{{item_hd}}</text></view>
								<!-- 	<view class="step_d_li"><text>{{(item.answer[0].max_num-item.answer[0].min_num)*0.2}}</text></view>
									<view class="step_d_li"><text>{{(item.answer[0].max_num-item.answer[0].min_num)*0.4}}</text></view>
									<view class="step_d_li"><text>{{(item.answer[0].max_num-item.answer[0].min_num)*0.6}}</text></view>
									<view class="step_d_li"><text>{{(item.answer[0].max_num-item.answer[0].min_num)*0.8}}</text></view>
									<view class="step_d_li"><text>{{item.answer[0].max_num}}</text></view> -->
								</view>
							</view>
							<view style="margin-top: 10upx;font-size: 24upx;">当前选择：{{item.jieguo?item.jieguo:item.answer[0].min_num}}</view>
						</view>
			
					</view>
				</view>
			
			</view>
			<view class="sub_box">
				<view class="sub_btn" @tap="sub">确认提交</view>
			</view>
		</block>
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
				id: '',
				title: '',
				explain: '',
				addition_explain: '',
				datas: [],
				isTx:'',
				dt_time:[]
			}
		},
		onLoad(option) {
			this.id = option.id
			this.getdata()
		},
		onShow() {
			console.log(this.new_problem)
		},
		computed: {
			...mapState(['hasLogin','new_problem', 'loginDatas']),

		},
		watch:{
			hasLogin(newval,oldval){
				console.log(newval)
				if(newval==true){
					this.btn_kg=0
					this.getdata()
				}
			}
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
				var that = this
				console.log(e.detail.value)
				var idxs = e.currentTarget.dataset.idx
				Vue.set(that.datas[idxs], 'jieguo', e.detail.value)
				console.log(that.datas)
			},
			//单选
			danxuan(item, index) {
				Vue.set(item, 'jieguo', index.currentTarget.dataset.idx); //为item添加不存在的属性，需要使用vue提供的Vue.set( object, key, value )方法
				console.log(this.datas)

			},
			//多选
			duoxuan(item, index) {
				var jgarr = item.jieguo || []
				var datas = index.currentTarget.dataset
				var isdx = jgarr.indexOf(datas.idx + '');
				// console.log(isdx)
				if (isdx != -1) {
					jgarr.splice(isdx, 1)
				} else {
					jgarr.push(datas.idx + '')
				}
				Vue.set(item, 'jieguo', jgarr); //为item添加不存在的属性，需要使用vue提供的Vue.set( object, key, value )方法
				console.log(this.datas)
			},
			getduoxuan(item, idx1) {

				if (!item.jieguo) {
					return false
				} else {
					var jgarr = item.jieguo
					console.log(jgarr)
					console.log(idx1)
					var idx1 = idx1 + ''
					// var idx=datas.currentTarget.dataset.idx
					var isdx = jgarr.indexOf(idx1);
					console.log(isdx)
					if (isdx != -1) {
						return true
					} else {
						return false
					}

				}
			},
			tiankong_fuc(e){
				var that =this
				console.log(e.currentTarget.dataset)
				var datas =e.currentTarget.dataset
				console.log(e.detail.value)
				Vue.set(that.datas[datas.index], 'jieguo', e.detail.value);
			},
			px_up(item, idx) {
				var newarr = item.answer
				var temp = JSON.parse(JSON.stringify(newarr[idx]));
				// newarr[idx] =newarr[idx-1];
				// newarr[idx-1] = temp;
				console.log('px_up')
				var idx_1 = idx * 1 - 1
				Vue.set(item.answer, idx, newarr[idx - 1])
				Vue.set(item.answer, idx_1, temp)
				var jieguo = []
				for (var i = 0; i < item.answer.length; i++) {
					jieguo.push(item.answer[i].option)
				}
				Vue.set(item, 'jieguo', jieguo)
			},
			px_down(item, idx) {
				var newarr = item.answer
				var temp = JSON.parse(JSON.stringify(newarr[idx]));
				// newarr[idx] =newarr[idx+1];
				// newarr[idx+1] = temp;

				// console.log('datas')
				// console.log(item)
				// console.log(idx)
				console.log('px_down')
				var idx_1 = idx * 1 + 1
				Vue.set(item.answer, idx, newarr[idx + 1])
				Vue.set(item.answer, idx_1, temp)
				var jieguo = []
				for (var i = 0; i < item.answer.length; i++) {
					jieguo.push(item.answer[i].option)
				}
				Vue.set(item, 'jieguo', jieguo)
				console.log(item)
			},
			sub() {
				var that =this
				if(!that.hasLogin){
					uni.navigateTo({
						url:'/pages/login/login'
					})
					return
				}
				var answer_list=[]
				for(var i=0;i<that.datas.length;i++){
					if(!that.datas[i].jieguo){
						
						if(that.datas[i].type==4){
							var jieguo=[]
							for (var j = 0; j < that.datas[i].answer.length; j++) {
								jieguo.push(that.datas[i].answer[j].option)
							}
							Vue.set(that.datas[i], 'jieguo', jieguo)
						}else if(that.datas[i].type==5){
							Vue.set(that.datas[i], 'jieguo', that.datas[i].answer[0].min_num)
						}else{
							uni.showToast({
								icon:'none',
								title:'请先写填写问题'
							})
							return
						}
						
					}
					if(that.datas[i].type==2||that.datas[i].type==4){
						answer_list.push({
							id:that.datas[i].id,
							option:that.datas[i].jieguo.join(',')
						})
					}else{
						answer_list.push({
							id:that.datas[i].id,
							option:that.datas[i].jieguo
						})
					}
				}
				console.log(that.datas)
				console.log(answer_list)
				var datas={
					token:that.loginDatas.userToken,
					answer:JSON.stringify(answer_list),
					id:that.id,
				}
				var jkurl='/subResearch'
				uni.showModal({
					title: '请仔细确认，提交后不可修改',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							uni.showLoading({
								title:'正在提交'
							})
							service.P_post(jkurl, datas).then(res => {
								that.btn_kg = 0
								console.log(res)
								if (res.code == 1) {
									var datas = res.data
									console.log(typeof datas)

									if (typeof datas == 'string') {
										datas = JSON.parse(datas)
									}
								uni.showToast({
									icon:'none',
									title:'提交成功'
								})
								setTimeout(()=>{
									uni.navigateBack({
										delta:1
									})
								},1000)
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
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})

			},
			getdata() {
				var that = this
				var datas = {
					token: that.loginDatas.userToken || '',
					id: that.id
				}

				//selectSaraylDetailByUserCard
				var jkurl = '/researchDetails'
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
						that.datas = datas.problem
						that.dt_time=datas.dtTimeData
						that.isTx=datas.isTx
						if(datas.isTx==1){
							uni.showToast({
								icon:'none',
								title:'当前不在调研时间段'
							})
						}
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
			jump(e) {
				service.jump(e)
			},
			getimg(img){
				return service.getimg(img)
			},
			pveimg(e){
				service.pveimg(e)
			}
		}
	}
</script>

<style scoped>
	.fabu_int {
		width: 100%;

		padding: 15upx 30upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		background: #FFFFFF;

	}

	.fabu_int view {
		width: 100%;

		padding: 30upx 40upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		background: #FFFFFF;
		box-shadow: 0px 0px 10upx 0px rgba(0, 0, 0, 0.1);
		border-radius: 4upx;
		text-align: center;
		font-size: 34upx;
		color: #333;
		font-weight: bold;
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
		padding: 20upx;
		box-sizing: border-box;
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
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: absolute;
		bottom: -40upx;
	}

	.step_d_li {
		width: 2px;
		font-size: 24upx;
		color: #111;
		position: relative;
		padding-top: 19upx;
		text-align: center;
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
		height: 9upx;
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
