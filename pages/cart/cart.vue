<template>
	<view class="cart">
		<view class="cartList">
			<view class="cartItem" v-for="(item, index) in cartList" :key="item.id">
				<!-- 选中or不选中 -->
				<text 
				class="iconfont icon-xuanzhong" 
				:class="{selected: item.isSelected}"
				@click="changeSelected(!item.isSelected, index)"></text>
				<!-- 商品信息 -->
				<view class="goodsItem">
					<image :src="item.listPicUrl" mode=""></image>
					<view class="goodsInfo">
						<view class="name">
							{{item.name}}
						</view>
						<view class="price">
							￥{{item.retailPrice}}/斤
						</view>
					</view>
					
				</view>
				
				<!-- 数量控制 -->
				<view class="countCtrl">
					<text class="sub" @click="changeCount(false, index)">-</text>
					<text class="count">{{item.count}}</text>
					<text class="add" @click="changeCount(true, index)">+</text>
				</view>
			</view>
			
		</view>
	    
		<!-- 底部 -->
	    <view class="footer">
			
			<view class="img">
				<text 
				class="iconfont icon-xuanzhong" 
				:class="{selected: isAllSelected}"
				@click="changeAllSelected(!isAllSelected)"></text>
				<text>已选 {{totalCount}}</text>
			</view>
			<!-- 数据顺便保留两位小数 -->
			<view class="btn btnColor">合计：￥ {{totalPrice.toFixed(2)}}</view>
			<view class="btn order">下单</view>
	    </view>
	</view>
</template>

<script>
	import {mapState, mapMutations, mapGetters} from 'vuex'
	export default {
		data() {
			return {
				
			};
		},
		mounted() {
			// this.$store.data.cart.cartList
			
		},
		computed: {
			...mapState({
				cartList: state => state.cart.cartList
			}),
			
			...mapGetters('cart', ['isAllSelected', 'totalCount', 'totalPrice']),
			
			
		},
		methods: {
			...mapMutations('cart', ['changeCountMustation', 'changeSelectedMustation', 'changeAllSelectedMustation']),
			// 点击加减
			changeCount(isAdd, index) {
				this.changeCountMustation({isAdd, index})
				// console.log(this.totalPrice)
			},
			// 修改选中状态
			changeSelected(isSelected, index) {
				this.changeSelectedMustation({isSelected, index})
				
			},
			// 全选和全不选
			changeAllSelected(isAllSelected) {
				this.changeAllSelectedMustation(isAllSelected)
			}
		}
	}
</script>

<style lang="stylus">
	.cart {
		background-color: #f5f5f5;
		height: 100%;
		.cartList {
			.cartItem {
				position: relative;
				height: 172rpx;
				width: 100%;
				margin-top: 20rpx;
				background-color: #fff;
				padding: 20rpx;
				display: flex;
				.iconfont {
					font-size: 40rpx;
					line-height: 172rpx;
					&.selected {
						color: #dd1a21;
					}
				}
				.goodsItem {
					display: flex;
					image {
						width: 172rpx;
						height: 172rpx;
						background-color: #ccc;
						margin: 0 40rpx;
					}
					.goodsInfo {
						.name {
							font-size: 26rpx;
							margin: 10rpx;
						}
						.price {
							color: #ec2d1e;
							
						}
					}
				}
				
				.countCtrl {
					position: absolute;
					right: 60rpx;
					bottom: 30rpx;
					text {
						border: 1px solid #ddd;
						padding: 8rpx 28rpx;
						&:nth-child(2) {
							border: none;
							border-top: 1rpx solid #ddd;
							border-bottom: 1rpx solid #ddd;
						}
					}
				}
				
			}
			
		}
		
		
		.footer {
			display: flex;
			justify-content: space-between;
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			height: 100rpx;
			line-height: 100rpx;
			border-top: 1px solid #eee;
			background-color: #fff;
			text-align: center;
			
			.iconfont {
				// font-size: 40rpx;
				// line-height: 172rpx;
				&.selected {
					color: #dd1a21;
				}
			}
			
			
			
			
			
			
			.btn {
				flex: 1;
				display: block;
				height: 100%;
				border-left: 1px solid #eee;
				text-align: center;
				&.order {
					
					// background-color: #dd1a21;
					background-color: #f2a900;
					color: #fff;
					
				}
				&.btnColor {
					color: #dd1a21;
				}
			}
			
		}
			
			
	}

</style>
