<template>
	<view class="cateList">
		<!-- 轮播图 -->
		<swiper 
		class="swiper" 
		:indicator-dots="true" 
		:autoplay="true" 
		:interval="3000" 
		:duration="1000" 
		v-if="cateObj.category">
			<swiper-item v-for="(item, index) in cateObj.category.bannerUrlList" :key="index">
				<view class="swiper-item">
					<image :src="item" mode=""></image>
				</view>
			</swiper-item>
			
		</swiper>
		
		<!-- 两行标签 -->
		<view class="frontDesc">
			{{cateObj.category.frontDesc}}		
		</view>
		<view class="frontName">
			{{cateObj.category.frontName}}	
		</view>
		
		<!--商品列表 -->
		<view class="goodsList" v-if="cateObj.itemList">
			<view class="goodsItem" v-for="item in cateObj.itemList" :key="item.id" @click="toDetail(item)">
				<image :src="item.primaryPicUrl" mode=""></image>
				<view class="goodsDesc">
					{{item.name}}
				</view>
				<view class="goodsPrice">
					￥{{item.retailPrice}}/斤
				</view>
			</view>
			
			
			
		</view>
		
	</view>
</template>

<script>
	// 引入发数据请求的方法
	import request from '../../utils/request.js'
	export default {
		name:"CateList",
		props:['L1Id'],
		data() {
			return {
				cateList: []
				
			};
		},
		mounted() {
			this.getCateList()
		},
		methods:{
			async getCateList() {
				const res = await request('/getIndexCateList')
				// console.log(res)
				this.cateList = res.indexCateList
			},
			// 跳转到详情页面
			toDetail(goodsItem) {
				wx.navigateTo({
					// url: '/pages/detail/detail?goodsItem=' + JSON.stringify(goodsItem)
					url: '/pages/detail/detail?goodsItem=' + encodeURIComponent(JSON.stringify(goodsItem))
				})
			}
		},
		computed: {
			cateObj() {
				return this.cateList.find(item => item.category.parentId === this.L1Id)
				
			}
		}
	}
</script>

<style lang="stylus">
	.cateList {
		.swiper {
			height: 360rpx;
			.swiper-item {
				image {
					height: 360rpx;
					width: 100%;
				}
				
			}
			
		}
		
		.frontDesc {
			font-size: 40rpx;
			line-height: 80rpx;
			color: #f2a900;
			text-align: center;
			
		}
		.frontName {
			font-size: 30rpx;
			line-height: 40rpx;
			color: #f4b626;
			text-align: center;
			
		}
	
	    .goodsList {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			&::after {
				content: "";
				width: 344rpx;
			}
			.goodsItem {
				width: 344rpx;
				height: 480rpx;
				margin-top: 18rpx;
				image {
					width: 344rpx;
					height: 344rpx;
				}
				.goodsPrice {
					color: red;
					font-size: 36rpx;
				}
			}
			
		}
	}
	

</style>