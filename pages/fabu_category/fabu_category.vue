<template>
	<view>
		<view class="dis_flex title_list">
			<view class="title_li" @tap='jump' data-type="3" data-url="/pages/fabu_duoxuan/fabu_duoxuan?type=1">
				<view class="title_li1">
					<image src="../../static/images/titile_icon1.png" mode="aspectFit"></image>
					单选题
				</view>
			</view>
			<view class="title_li" @tap='jump' data-type="3" data-url="/pages/fabu_duoxuan/fabu_duoxuan?type=2">
				<view class="title_li1">
					<image src="../../static/images/titile_icon2.png" mode="aspectFit"></image>
					多选题
				</view>
			</view>
			<view class="title_li" @tap='jump' data-type="3" data-url="/pages/fabu_tiankong/fabu_tiankong?type=3">
				<view class="title_li1">
					<image src="../../static/images/titile_icon3.png" mode="aspectFit"></image>
					填空题
				</view>
			</view>
			<view class="title_li" @tap='jump' data-type="3" data-url="/pages/fabu_duoxuan/fabu_duoxuan?type=4">
				<view class="title_li1">
					<image src="../../static/images/titile_icon4.png" mode="aspectFit"></image>
					排序题
				</view>
			</view>
			<view class="title_li" @tap='jump' data-type="3" data-url="/pages/fabu_huadong/fabu_huadong?type=5">
				<view class="title_li1">
					<image src="../../static/images/titile_icon5.png" mode="aspectFit"></image>
					滑动题
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
				
			}
		},
		mounted() {  
			// document.getElementsByTagName('uni-page-head')[0].style.display = 'none'  
		},
		methods: {
			jump(e){
				service.jump(e)
			}
		}
	}
</script>

<style scoped>
	body{
		background: #fff;
	}
	.title_list{
		width: 100%;
		padding: 15upx 15upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		flex-wrap: wrap;
	}
	.title_li{
		padding: 15upx;
	}
	.title_li1{
		width: 330upx;
		height: 80upx;
		background: #FFFFFF;
		box-shadow: 0px 0px 10upx 0px rgba(34, 23, 20, 0.1);
		border-radius: 11upx;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.title_li1:hover{
		box-shadow: 0px 0px 10upx 0px rgba(34, 23, 20, 0.2);
	}
	.title_li1 image{
		width: 36upx;
		height: 36upx;
		margin-right: 20upx;
	}
</style>
