<template>
	<view class="indexContainer">
		<!-- 头部区域 -->
		<view class="header">
			<image class="logo" src="/static/images/logo.png" mode=""></image>
			<view class="search" @click="toSearch">
				<text class="iconfont icon-sousuotianchong"></text>
				<view class="searchText">搜索商品...</view>
				<!-- <input type="text" value="" placeholder="搜索商品..." placeholder-class="placeholder"> -->
				<!-- <text class="search-text">搜索商品...</text> -->
			</view>
			<!-- <button type="default" @click="toSearch">搜索</button> -->
		</view>
		<!-- 滑块区域 -->
		<scroll-view scroll-x="true" class="scrollNav" v-if="indexData" enable-flex>
			<view 
			class="navItem" 
			@click="changeIndex(-1, -1)"
			:class="{active:navIndex === -1}">
				推荐
			</view>
			<!-- v-if和v-for不能放在同一标签上 v-for优先级更高-->
			<view 
			class="navItem"
			:class="{active:navIndex === index}"
			@click="changeIndex(index, item.L1Id)"
			v-for="(item, index) in indexData.kingKongModule.kingKongList" 
			:key="item.L1Id">
			{{ item.text }}
			</view>
		</scroll-view>
 		<!-- 内容区 -->
		<scroll-view scroll-y="true">
			<!-- 推荐模块  跟其他模块互斥关系 v-if-->
			<Recommend v-if="navIndex === -1"></Recommend>
			
			<CateList v-else :L1Id="L1Id"></CateList>
			
		</scroll-view>
		
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	import Recommend from '../../components/Recommend/Recommend.vue'
	import CateList from '../../components/CateList/CateList.vue'
	// vuex
	import { mapActions, mapState } from 'vuex'
	
	export default {
		components: {
			Recommend,
			CateList
		},
		data() {
			return {
				// indexData: {},// 请求存储首页数据
				// 点谁谁高亮
				navIndex: -1,
				L1Id: -1
			}
		},
		computed: {
			// 也可以写成这样
			...mapState({
				indexData: (state) => state.home.indexData
			})
			
		},
		// 小程序 或 vue的生命周期都支持
		onLoad() {
			

		},
		created() {
			
		},
		
		mounted() {
			// 获取仓库里的测试数据
			this.getIndexDataActions()
			
			
			
		},
		methods: {
			...mapActions('home', ['getIndexDataActions']),
			
			async getIndexData() {
				const res = await request('/getIndexData')   //小程序请求
				this.indexData = res.indexData
				
			},
			changeIndex(index, L1Id) {
				this.navIndex = index
				this.L1Id = L1Id
			},
			
			// 跳转搜索页面
			toSearch() {
				wx.navigateTo({
					url: '/pages/search/search'
				})
			}

		}
	}
</script>

<style lang="stylus">
	.indexContainer {
		.header {
			display: flex;
			padding: 10rpx 5rpx;
			.logo {
				border-radius: 20rpx;
				width: 140rpx;
				height: 80rpx;
			}
			.search {
				position: relative;
				margin: 10rpx 16rpx;
				width: 820rpx;
				height: 60rpx;
				border-radius: 30rpx;
				background-color: #f5f5f5;
				
				.searchText {
					color: #f2a900;
					margin: 13rpx 70rpx;
					
				}
				
				input {
					width: 360rpx;
					height: 60rpx;
					// border: 1rpx solid #f2a900;
					margin-left: 60rpx;
					.placeholder {
						font-size: 26rpx;
						color: #f2a900;
					}
					font-size: 26rpx;
				}
				
				// .search-text {
				// 	margin-left: 70rpx;
				// 	line-height: 60rpx;
				// }
				
				.iconfont {
					position: absolute;
					font-size: 40rpx;
					top: 10rpx;
					left: 15rpx;
					
				}
			}
			button {
				width: 144rpx;
				height: 60rpx;
				text-align: center;
				line-height: 60rpx;
				font-size: 26rpx;
				margin-top: 10rpx;
				padding: 0 4rpx;
				color: #ffffff;
				background-color: #f2a900;
			}
		}
	    .scrollNav {
			display: flex;
			height: 80rpx;
			white-space: nowrap;
			.navItem {
				display: inline-block;
				height: 40rpx;
				padding: 10rpx;
				font-size: 26rpx;
				
			}
			.active {
				color: #f2a900;
				border-bottom: 3rpx solid #f2a900;
			}
		}
	}
	
	
</style>
