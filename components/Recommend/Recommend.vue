<template>
	<view class="recommend">
		
		<!-- 1、轮播图 -->
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image src="https://www.adinnet.cn/uploads/UpFile/cea1e7ad-0e59-47a9-9597-23a8d019b6cd.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://img1.baidu.com/it/u=3137988892,4078242748&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://img0.baidu.com/it/u=394192952,1836718944&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=356" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		
		<!-- 2、3个小图标 数据： policyDescList -->
		<view class="policyList">
			<view class="policyItem" v-for="item in indexData.policyDescList" :key="item.desc">
				<image :src="item.icon" mode=""></image>
				<text class="desc">{{item.desc}}</text>
			</view>
		</view>
		
		<!-- 3、 8个导航图标  数据：kingKongMdule -->
		<view class="kingKongModule" v-if="indexData.kingKongModule.kingKongList">
			<view 
			class="kingKongItem" 
			v-for="item in indexData.kingKongModule.kingKongList" 
			:key="item.L1Id">
				<image class="kingKongImg" :src="item.picUrl" mode=""></image>
				<text class="kingKongDesc">{{item.text}}</text>
			</view>
		</view>
		
		<!-- 4、分类区 数据: categoryModule -->
		<view class="categoryList">
			<view 
			class="categoryItem" 
			v-for="item in indexData.categoryModule"
			:key="item.titlePicUrl">
				<!-- 大图 -->
				<image class="categoryImg" :src="item.titlePicUrl" mode=""></image>
				<!-- 滑块 -->
				<scroll-view class="categoryScroll" scroll-x="true" enable-flex>
					<view class="goodsItem" v-for="goodsItem in item.itemList" :key="goodsItem.id">
						<image class="goodsImg" :src="goodsItem.showPicUrl" mode=""></image>
						<view class="goodsText">
							{{goodsItem.name}}
						</view>
					</view>
					
				</scroll-view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				
			};
		},
		computed: {
			...mapState({
				indexData: state => state.home.indexData
			})
		}
	}
</script>

<style lang="stylus">
	.recommend {
		.swiper {
			height: 350rpx;
			image {
				width: 100%;
				height: 350rpx;
			}
			
		}
		.policyList {
			display: flex;
			margin: 10rpx 0;
			.policyItem {
				flex: 1;
				text-align: center;
				image {
					width: 40rpx;
					height: 40rpx;
					vertical-align: middle;
				}
				.desc {
					font-size: 26rpx;
				}
				
			}
		}
		.kingKongModule {
			display: flex;
			flex-wrap: wrap;
			// text-align: center;
			.kingKongItem {
				width: 20%;
				text-align: center;
				display: flex;
				flex-direction: column;
				margin: 10rpx 0;
				.kingKongImg {
					width: 100rpx;
					height: 100rpx;
					margin: 0 0 10rpx 25rpx;
				}
				.kingKongDesc {
					font-size: 26rpx;
				}
			}
			
		}
	    .categoryList {
			.categoryItem {
				margin: 10rpx 0;
				.categoryImg {
					height: 370rpx;
					width: 100%;
				}
				.categoryScroll {
					display: flex;
					white-space: nowrap;
					// 注意： 一定要给滑块设置高度，否则撑满全屏
					height: 300rpx;
					.goodsItem {
						height: 300rpx;
						margin: 0 5rpx;
						.goodsImg {
							width: 200rpx;
							height: 200rpx;
							background-color: #f5f5f5;
						}
						.goodsText {
							font-size: 26rpx;
							// 超出就要换两行
							white-space: pre-wrap;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
						}
						
					}
				}
			}
		}
	}

</style>
