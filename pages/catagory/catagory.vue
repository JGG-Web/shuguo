<template>
	<view class="category">
		<!-- 搜索 -->
		<view class="header">
			<view class="search" @click="toSearch">
				商品搜索
			</view>
			
		</view>
		
		<!-- 内容区域 -->
		<view class="content">
			<!-- 左侧导航栏-->
			<view class="left">
				<scroll-view class="navScroll" scroll-y="true">
					<view 
					class="navItem" 
					:class="{active: index === navIndex}" 
					v-for="(item, index) in categoryDatas.categoryDatas"
					:key="item.id"
					@click="btnActive(index)">
						{{item.name}}
					</view>
					
				</scroll-view>
			</view>
			<!-- 右侧内容区域 -->
			<view class="right">
				<scroll-view class="contentScroll" scroll-y="true">
						<!-- 大图 -->
						<image class="cateImg" :src="cateObj.imgUrl" mode=""></image>
						<!-- 列表 -->
						<view class="goodsList">
							<view class="goodsItem" v-for="(item, index) in cateObj.subCateList" :key="item.id">
								<image class="goodsImg" :src="item.wapBannerUrl" mode=""></image>
								<view class="goodsName">
									{{item.name}}
							    </view>
								
							</view>
							
							
						</view>
					
					
				</scroll-view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	export default {
		data() {
			return {
				categoryDatas: [],
				navIndex: 0
				
			};
		},
		computed: {
			// 计算属性得来
			cateObj() {
				// console.log(this.navIndex)
				if(this.categoryDatas.categoryDatas) {
					// console.log(this.categoryDatas.categoryDatas[this.navIndex])
					return this.categoryDatas.categoryDatas[this.navIndex]
				}
				
				
			}
		},
		mounted() {
			this.getCategory()
		},
		methods: {
			async getCategory() {
				const res = await request("/getCategoryDatas");
				// console.log(res)
				this.categoryDatas = res;
				
			},
			// 点击高亮
			btnActive(index) {
				this.navIndex = index
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
	.category {
		.header {
			padding: 20rpx 0;
			.search {
				width: 95%;
				height: 60rpx;
				color: #f2a900;
				line-height: 60rpx;
				font-size: 30rpx;
				margin: 0 auto;
				text-align: center;
				background-color: #efefef;
				border-radius: 30rpx;
			}
			
		}
		
		.content {
			display: flex;
			// 动态计算高度   高度100等份 100vh  - (20rpx *2 + search 60rpx +2rpx(边框))
			height: calc(100vh - 102rpx);
			border-top: 2rpx solid #ffd700;
			.left {
				width: 20%;
				height: 100%;
			    border-right: 2rpx solid #f2a900;
				.navScroll {
					// 加了高度就可以滚动
					height: calc(100vh - 102rpx);
					.navItem {
						position: relative;
						height: 80rpx;
						font-size: 27rpx;
						text-align: center;
						line-height: 80rpx;
						// 父级引用
						&.active::before {
							position: absolute;
							left: 10rpx;
							top: 22rpx;
							content: "";
							width: 2rpx;
							height: 40rpx;
							background-color: #f2a900;
						}
					}
					
				}
		        
			}
			.right {
				width: 80%;
				height: calc(100vh - 102rpx);
				.contentScroll {
					height: 100%
					.cateImg {
						display: block;
						margin: 10rpx auto;
						width: 520rpx;
						height: 200rpx;
						// object-fit: contain;
						
					}
					.goodsList {
						display: flex;
						flex-wrap: wrap;
						.goodsItem {
							width: 33.33%;
							height: 200rpx;
							text-align: center;
							.goodsImg {
								width: 77%;
								height: 140rpx;
								// object-fit: cover;
							}
							.goodsName {
								font-size: 24rpx;						
								
							}
							
						}
					}
				}
			}
		}
	}

</style>
