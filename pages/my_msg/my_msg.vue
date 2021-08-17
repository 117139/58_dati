<template>
	<view class="con_box">
		<block v-for="(item,index) in guding">
			<view class="my_msg_li dis_flex aic ju_b" v-if="item.type==3">
				<text>{{item.problem.title}}</text>
				<input class="flex_1" type="text" v-model="item.option" placeholder="请输入" />
			</view>
			<picker style="width: 100%;" v-if="item.type==1" :range="item.answer" range-key="title" @change="set_op"
				:data-idx="index">
				<view class="my_msg_li dis_flex aic ju_b">
					<text>{{item.problem.title}}</text>
					<view class="flex_1 tar">{{item.option_text?item.option_text:'请选择'}}</view>
					<text class="iconfont icon-next-m"></text>
				</view>
			</picker>
		</block>
		<view class="sub_box">
			<view class="sub_btn" @tap="sub_fuc">确认提交</view>
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
	var that
	export default {
		data() {
			return {
				guding: [{
					"type": "1",
					"option": "",
					"answer": [{
						"img": [],
						"title": "男",
						"option": "A"
					}, {
						"img": [],
						"title": "女",
						"option": "B"
					}],
					"problem": {
						"img": [],
						"title": "性别"
					}
				}, {
					"type": "3",
					"option": "",
					"problem": {
						"title": "年龄"
					}
				}, {
					"type": "1",
					"option": "",
					"answer": [{
						"img": [],
						"title": "是",
						"option": "A"
					}, {
						"img": [],
						"title": "否",
						"option": "B"
					}],
					"problem": {
						"img": [],
						"title": "是否独生"
					}
				}, {
					"type": "1",
					"option": "",
					"answer": [{
						"img": [],
						"title": "农村",
						"option": "A"
					}, {
						"img": [],
						"title": "乡镇",
						"option": "B"
					}, {
						"img": [],
						"title": "城市",
						"option": "C"
					}],
					"problem": {
						"img": [],
						"title": "生源地"
					}
				}, {
					"type": "3",
					"option": "",
					"problem": {
						"title": "专业"
					}
				}, {
					"type": "3",
					"option": "",
					"problem": {
						"title": "年级"
					}
				}, {
					"type": "3",
					"option": "",
					"problem": {
						"title": "职业"
					}
				}, {
					"type": "1",
					"option": "",
					"answer": [{
						"img": [],
						"title": "小学及以下",
						"option": "A"
					}, {
						"img": [],
						"title": "中学（含中职）",
						"option": "B"
					}, {
						"img": [],
						"title": "高中（含职高）",
						"option": "C"
					}, {
						"img": [],
						"title": "大学（含大专）",
						"option": "D"
					}, {
						"img": [],
						"title": "研究生及以上",
						"option": "E"
					}],
					"problem": {
						"img": [],
						"title": "受教育程度"
					}
				}, {
					"type": "1",
					"option": "",
					"answer": [{
						"img": [],
						"title": "小学及以下",
						"option": "A"
					}, {
						"img": [],
						"title": "中学（含中职）",
						"option": "B"
					}, {
						"img": [],
						"title": "高中（含职高）",
						"option": "C"
					}, {
						"img": [],
						"title": "大学（含大专）",
						"option": "D"
					}, {
						"img": [],
						"title": "研究生及以上",
						"option": "E"
					}],
					"problem": {
						"img": [],
						"title": "父亲受教育程度"
					}
				}, {
					"type": "1",
					"option": "",
					"answer": [{
						"img": [],
						"title": "小学及以下",
						"option": "A"
					}, {
						"img": [],
						"title": "中学（含中职）",
						"option": "B"
					}, {
						"img": [],
						"title": "高中（含职高）",
						"option": "C"
					}, {
						"img": [],
						"title": "大学（含大专）",
						"option": "D"
					}, {
						"img": [],
						"title": "研究生及以上",
						"option": "E"
					}],
					"problem": {
						"img": [],
						"title": "母亲受教育程度"
					}
				}, {
					"type": "3",
					"option": "",
					"problem": {
						"title": "父亲职业"
					}
				}, {
					"type": "3",
					"option": "",
					"problem": {
						"title": "母亲职业"
					}
				}],
			}
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin', 'userName', 'loginDatas']),
		},
		onLoad() {
			that = this
			// #ifndef H5
			this.guding=this.loginDatas.research_info
			// #endif
		},
		methods: {
			set_op(e) {
				console.log(e.detail.value)
				console.log(e.currentTarget.dataset.idx)
				var ans_idx = e.detail.value
				var idx = e.currentTarget.dataset.idx
				Vue.set(that.guding[idx], 'option', that.guding[idx].answer[ans_idx].option)
				Vue.set(that.guding[idx], 'option_text', that.guding[idx].answer[ans_idx].title)
			},
			sub_fuc() {
				var datas = {
					token: that.loginDatas.userToken,
					research_info: JSON.stringify(that.guding)
				}
				var jkurl = '/user/updateUserInfo'
				uni.showLoading({
					title: '正在提交'
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
							icon: 'none',
							title: '提交成功'
						})
						service.wxlogin(2)
						setTimeout(() => {
							uni.navigateBack({
								delta: 1
							})
						}, 1000)
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
			}
		}
	}
</script>

<style scoped>
	

	

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
</style>
