<template>
	<view>
		<view class="fabu_int">
			<input type="text" placeholder="请输入调研标题" v-model="dy_title">
		</view>
		<view class="fabu_int">
			<input type="text" placeholder="请输入调研提示或调研说明" v-model="dy_explain">
		</view>
		<view class="fabu_int">
			<input type="text" placeholder="请输入调研附加说明" v-model="dy_addition_explain">
		</view>
		<view class="problem_list">

			<view class="problem_li" v-for="(item,index) in datas">
				<view class="problem_msg">
					<view class="problem_tit">
						{{index+1}}.{{item.problem.title}}
						<text>({{item.type==1?'单选题':item.type==2?'多选题':item.type==3?'填空题':item.type==4?'排序题':"滑动题"}})</text>
					</view>
					
					<view v-if="item.problem.img.length>0" class="ans_file">
						
						<image v-for="(item1,index) in item.problem.img" :src="item1" @tap="pveimg" :data-src="item1"></image>
					</view>
					<!-- 单选 -->
					<view class="ans_list" v-if="item.type==1">
						<view class="ans_li" v-for="(item1,idx1) in item.answer">
							<view class="ans_tit dis_flex">
								<view class="ans_xzicon">
									<image src="../../static/images/danxuan.png"></image>
								</view>
								<view class="ans_xztext">{{item1.title}}</view>
							</view>
							<view v-if="item1.img.length>0" class="ans_file">
								<view class="ans_xzicon"> </view>
								<image :src="item1.img[0]"></image>
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
								<view class="ans_xztext">{{item1.title}}</view>
							</view>
							<view v-if="item1.img.length>0" class="ans_file">
								<view class="ans_xzicon"> </view>
								<image :src="item1.img[0]"></image>
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
									{{item1.title}}
								</view>
								<view class="ans_xzicon">
									<text class="iconfont icon-shangyi"></text>
								</view>
								<view class="ans_xzicon">
									<text class="iconfont icon-xiayi"></text>
								</view>
							</view>
							<view v-if="item1.img.length>0" class="ans_file">
								<image :src="item1.img[0]"></image>
								<view class="ans_xzicon"> </view>
								<view class="ans_xzicon"> </view>
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
							<slider value="0" :min='item.answer.min_num' :max="item.answer.max_num" @change="sliderChange" activeColor="linear-gradient(-89deg, #65AEE1, #326CFA)"
							 backgroundColor="#ECEBF1" block-color="#8A6DE9" block-size="10" :step="item.answer.step_size" />
							<view class="step_d">
								<view class="step_d_li"><text>{{item.answer.min_num}}</text></view>
								<view class="step_d_li"><text>{{(item.answer.max_num-item.answer.min_num)*0.2}}</text></view>
								<view class="step_d_li"><text>{{(item.answer.max_num-item.answer.min_num)*0.4}}</text></view>
								<view class="step_d_li"><text>{{(item.answer.max_num-item.answer.min_num)*0.6}}</text></view>
								<view class="step_d_li"><text>{{(item.answer.max_num-item.answer.min_num)*0.8}}</text></view>
								<view class="step_d_li"><text>{{item.answer.max_num}}</text></view>
							</view>
						</view>

					</view>

				</view>
				<view class="problem_cz">
					<view @click="pro_edit(item,index)"><text class="iconfont icon-bianji"></text>编辑</view>
					<text>|</text>
					<view @click="px_up(item,index)"><text class="iconfont icon-shangyi"></text>上移</view>
					<text>|</text>
					<view @click="px_down(item,index)"><text class="iconfont icon-xiayi"></text>下移</view>
					<text>|</text>
					<view @click="pro_del(index)"><text class="iconfont icon-del"></text>删除</view>
				</view>
			</view>

			<!-- <view class="problem_li">
				<view class="problem_msg">
					<view class="problem_tit">
						2.在紧急情况下为伤员止血时，须先用压迫法止血后再根据出血情况改用其他止血法。<text>(多选题)</text>
					</view>
					<view class="ans_list">
						<view class="ans_li" v-for="(item,idx) in 8">
							<view class="ans_tit dis_flex">
								<view class="ans_xzicon">
									<image src="../../static/images/duoxuan.png"></image>
								</view>
								<view class="ans_xztext">风云，风云伙食费</view>
							</view>
						</view>
					</view>
				</view>
				<view class="problem_cz">
					<view><text class="iconfont icon-bianji"></text>编辑</view>
					<text>|</text>
					<view><text class="iconfont icon-shangyi"></text>上移</view>
					<text>|</text>
					<view><text class="iconfont icon-xiayi"></text>下移</view>
					<text>|</text>
					<view><text class="iconfont icon-del"></text>删除</view>
				</view>
			</view>
			
			<view class="problem_li">
				<view class="problem_msg">
					<view class="problem_tit">
						3.在紧急情况下为伤员止血时，须先用压迫法止血后再根据出血情况改用其他止血法。<text>(填空题)</text>
					</view>
					<view class="ans_list">
						<textarea></textarea>
					</view>
				</view>
				<view class="problem_cz">
					<view><text class="iconfont icon-bianji"></text>编辑</view>
					<text>|</text>
					<view><text class="iconfont icon-shangyi"></text>上移</view>
					<text>|</text>
					<view><text class="iconfont icon-xiayi"></text>下移</view>
					<text>|</text>
					<view><text class="iconfont icon-del"></text>删除</view>
				</view>
			</view>
			
			<view class="problem_li">
				<view class="problem_msg">
					<view class="problem_tit">
						4.在紧急情况下为伤员止血时，须先用压迫法止血后再根据出血情况改用其他止血法。<text>(排序题)</text>
					</view>
					<view class="ans_list">
						<view class="ans_li" v-for="(item,idx) in 8">
							<view class="ans_tit dis_flex">
								
								<view class="ans_xztext">
                  檀中穴檀中穴檀中穴檀中穴檀中穴檀中穴檀中穴檀中穴
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
				</view>
				<view class="problem_cz">
					<view><text class="iconfont icon-bianji"></text>编辑</view>
					<text>|</text>
					<view><text class="iconfont icon-shangyi"></text>上移</view>
					<text>|</text>
					<view><text class="iconfont icon-xiayi"></text>下移</view>
					<text>|</text>
					<view><text class="iconfont icon-del"></text>删除</view>
				</view>
			</view>
			
			<view class="problem_li">
				<view class="problem_msg">
					<view class="problem_tit">
						5.在紧急情况下为伤员止血时，须先用压迫法止血后再根据出血情况改用其他止血法。<text>(滑动题)</text>
					</view>
					<view class="ans_list">
						<view class="hd_box">
							<view class="hd_text dis_flex aic ju_b">
								<view>好（0）</view>
								<view>不好（100）</view>
							</view>
							<slider value="50" min='0' max="100" @change="sliderChange" activeColor="linear-gradient(-89deg, #65AEE1, #326CFA)" 
							backgroundColor="#ECEBF1" block-color="#8A6DE9" block-size="10"  step="10"/>
							<view class="step_d">
								<view class="step_d_li"><text>0</text></view>
								<view class="step_d_li"><text>20</text></view>
								<view class="step_d_li"><text>40</text></view>
								<view class="step_d_li"><text>60</text></view>
								<view class="step_d_li"><text>80</text></view>
								<view class="step_d_li"><text>100</text></view>
							</view>
						</view>
						
					</view>
				</view>
				<view class="problem_cz">
					<view><text class="iconfont icon-bianji"></text>编辑</view>
					<text>|</text>
					<view><text class="iconfont icon-shangyi"></text>上移</view>
					<text>|</text>
					<view><text class="iconfont icon-xiayi"></text>下移</view>
					<text>|</text>
					<view><text class="iconfont icon-del"></text>删除</view>
				</view>
			</view> -->
		</view>
		<view class="sub_box">
			<view class="sub_btn" @tap="sub">确认</view>
		</view>
		<view style="width: 100%;height: 160upx;"></view>
		<view class="xz_add_btn" @tap="jump" data-url="/pages/fabu_category/fabu_category">
			<text class="iconfont icon-tianjia"></text>添加题目
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
				dy_title:'',
				dy_explain:'',
				dy_addition_explain:'',
				datas:[],
				datas_ceshi: [{
						problem: {
							title: '在紧急情况下为伤员止血时，须先用压迫法止血后再根据出血情况改用其他止血法。',
							img: []
						},
						type: 1,
						answer: [{
								title: '风云风云风云风云',
								img: [
									'../../static/images/danxuan.png'
								]
							},
							{
								title: '风云风云风云风云',
								img: [
									'../../static/images/danxuan.png'
								]
							},
							{
								title: '风云风云风云风云',
								img: [
									'../../static/images/danxuan.png'
								]
							},
							{
								title: '风云风云风云风云',
								img: [
									'../../static/images/danxuan.png'
								]
							},
						]
					},
					{
						problem: {
							title: '在紧急情况下为伤员止血时，须先用压迫法止血后再根据出血情况改用其他止血法。',
							img: []
						},
						type: 2,
						answer: [{
								title: '风云风云风云风云',
								img: []
							},
							{
								title: '风云风云风云风云',
								img: []
							},
							{
								title: '风云风云风云风云',
								img: []
							},
							{
								title: '风云风云风云风云',
								img: []
							},
						]
					},
					{
						problem: {
							title: '在紧急情况下为伤员止血时，须先用压迫法止血后再根据出血情况改用其他止血法。',
							img: []
						},
						type: 3,

					},
					{
						problem: {
							title: '在紧急情况下为伤员止血时，须先用压迫法止血后再根据出血情况改用其他止血法。',
							img: []
						},
						type: 4,
						answer: [{
								title: '风云风云风云风云',
								img: []
							},
							{
								title: '风云风云风云风云',
								img: []
							},
							{
								title: '风云风云风云风云',
								img: []
							},
							{
								title: '风云风云风云风云',
								img: []
							},
						]
					},
					{
						problem: {
							title: '在紧急情况下为伤员止血时，须先用压迫法止血后再根据出血情况改用其他止血法。',
							img: []
						},
						type: 5,
						"answer": {
							"min_num": "0",
							"min_text": "不好",
							"max_num": "100",
							"max_text": "非常好",
							"step_size": "1"
						}
					},
				]
			}
		},
		onUnload() {
			this.setnew_problem('')
			this.edit_problem('')
			this.clearls_pro('')
		},
		onShow() {
			var that =this
			console.log(this.new_problem)
			if(this.new_problem.problem){
				this.datas.push(this.new_problem)
				this.setnew_problem('')
			}
			
			if(that.bj_prodata&&that.bj_prodata.datas){
				var newdata=JSON.parse(JSON.stringify(this.bj_prodata.datas))
				console.log('newdata')
				console.log(this.bj_prodata)
				console.log(newdata)
				var edit_idx=this.bj_prodata.idx
				Vue.set(that.datas, edit_idx, newdata)
				// that.datas[edit_idx]=newdata
				console.log(that.datas)
				this.edit_problem('')
			}
		},
		computed: {
			...mapState(['new_problem','bj_prodata']),
		},
		methods: {
			...mapMutations(['setnew_problem','edit_problem','setls_prodata']),
			pveimg(e){
				service.pveimg(e)
			},
			sliderChange(e) {
				console.log(e)
			},
			px_up(item,idx){
				if(idx==0){
					return
				}
				var that =this
				// var newarr=item.answer
				var temp = JSON.parse(JSON.stringify(item));
				// newarr[idx] =newarr[idx-1];
				// newarr[idx-1] = temp;
				console.log('px_up')
				var idx_1=idx*1-1
				Vue.set(that.datas, idx, that.datas[idx-1])
				Vue.set(that.datas, idx_1, temp)
				
			},
			px_down(item,idx){
				if(idx==this.datas.length-1){
					return
				}
				var that =this
				// var newarr=item.answer
				var temp = JSON.parse(JSON.stringify(item));
				// newarr[idx] =newarr[idx+1];
				// newarr[idx+1] = temp;
				
				// console.log('datas')
				// console.log(item)
				// console.log(idx)
				console.log('px_down')
				var idx_1=idx*1+1
				Vue.set(that.datas, idx, that.datas[idx+1])
				Vue.set(that.datas, idx_1, temp)
				
			},
			pro_edit(item,idx){
				var that =this
				console.log(item.type)
				var edit_data={
					idx:idx,
					datas:item,
				}
				that.edit_problem(edit_data)
				if(item.type==3){
					uni.navigateTo({
						url:'/pages/fabu_tiankong/fabu_tiankong?type=3'
					})
				}else if(item.type==5){
					uni.navigateTo({
						url:'/pages/fabu_huadong/fabu_huadong?type=5'
					})
				}else{
					uni.navigateTo({
						url:'/pages/fabu_duoxuan/fabu_duoxuan?type='+item.type
					})
				}
			},
			pro_del(idx){
				var that =this
				uni.showModal({
					title: '提示',
					content:'是否确认删除此题？',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							uni.showToast({
								icon:'none',
								title:'操作成功'
							})
							that.datas.splice(idx,1)
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			sub() {
				var that =this
				console.log(this.datas)
				if(!that.dy_title){
					uni.showToast({
						icon:'none',
						title:'请输入调研标题'
					})
					return
				}	
				if(!that.dy_explain){
					uni.showToast({
						icon:'none',
						title:'请输入调研说明'
					})
					return
				}	
				if(!that.dy_addition_explain){
					uni.showToast({
						icon:'none',
						title:'请输入调研附加说明'
					})
					return
				}	
				if(that.datas.length==0){
					uni.showToast({
						icon:'none',
						title:'请添加问题'
					})
					return
				}
				var ls_data ={
					dy_title:that.dy_title,
					dy_explain:that.dy_explain,
					dy_addition_explain:that.dy_addition_explain,
					datas:that.datas,
				}
				this.setls_prodata(ls_data)
				uni.showModal({
					title: '请仔细确认发布内容，发布后不可修改',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							// #ifdef MP-WEIXIN
							uni.navigateTo({
								url: '../fabu2/fabu2'
							})
							// #endif
							// #ifndef MP-WEIXIN
							uni.navigateTo({
								url: '../fabu3/fabu3'
							})
							// #endif
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})

			},
			jump(e) {
				service.jump(e)
			}
		}
	}
</script>

<style scoped>
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
		position: fixed;
		bottom: 0;
		z-index: 800;
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
		/* position: fixed;
		bottom: 0; */
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
