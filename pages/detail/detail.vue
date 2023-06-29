<template>
	<scroll-view>
		<view class="detail">
			<view class="header">
				{{goodsObj.name}}
			</view>
			<!-- 内容区域 -->
			<scroll-view class="detailScroll" scroll-y="true" >
				<image :src="goodsObj.listPicUrl" mode=""></image>
				<view class="tag">
					{{goodsObj.promTag}}
				</view>
				<view class="price">
					￥{{goodsObj.counterPrice}}/斤
				</view>
				<!-- 准备内容 -->
				<view class="list" style="margin-left: 5%;font-size: 28upx;line-height: 50upx;">
					<view>(1) {{goodsObj.simpleDesc}}</view>
					<view>(2) 下单即可当天发货</view>
					<view>(3) 质量有问题可包赔</view>
				</view>
			</scroll-view>
			
			<!-- 底部 -->
			<view class="footer">
				<view class="img">
					<image src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/detail-kefu-d10f0489d2.png?imageView&type=webp" mode=""></image>
				</view>
				<view class="btn">
					立即购买
				</view>
				<view class="btn cart" @click="addCart">
					加入购物车
				</view>
			</view>
			
			
		</view>
	</scroll-view>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default {
		data() {
			return {
				goodsObj: {}
				
			};
		},
		// 接收CateList传来的goodItem数据
		onLoad(options) {
			// this.goodsObj = JSON.parse(options.goodsItem)
			this.goodsObj = JSON.parse(decodeURIComponent(options.goodsItem))
			// console.log(this.goodsObj)
			
		},
		methods: {
			...mapMutations('cart', ['addGoodsItemMutation']),
			// 加入购物车
			addCart() {
				wx.showModal({
					title: '提示',
					content: '加入购物车成功！'
				})
				this.addGoodsItemMutation(this.goodsObj)
				
			}
		}
	}
</script>

<style lang="stylus">
	.detail {
		.header {
			height: 90rpx;
			width: 570rpx;
			line-height: 90rpx;
			margin: 0 auto;
			text-align: center;
			color: #f2a900;
		}
		.detailScroll {
			height: calc(100vh - 90rpx);
			image {
				width: 100%;
				height: 750rpx;
				
			}
			.tag {
				width: 90%;
				height: 100rpx;
				margin: 20rpx auto;
				text-align: center;
				color: #fff;
				font-size: 32rpx;
				background-color: #ffd700;
				border-radius: 10rpx;
				line-height: 100rpx;
			}
			.price {
				font-size: 50rpx;
				color: #ec2d1e;
				line-height: 70rpx;
				margin-left: 5%;
			}
		}
		
		.footer {
			display: flex;
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			background-color: #fff;
			border-top: 1px solid #ccc;
			.img {
				flex: 1;
				image {
					display: block;
					width: 40rpx;
					height: 60rpx;
					line-height: 60rpx;
					margin: 20rpx auto;
				}
			}
			.btn {
				flex: 2;
				border-left: 1px solid #ccc;
				&.cart {
					color: #ec2d1e;
					background-color: #ffd700;
				}
			}
		}
	}

</style>
