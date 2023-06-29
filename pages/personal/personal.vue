<template>
	<view class="personalColor">
		<view class="personal">
			<view class="header">
				<!-- 登录的状态 -->
				<template v-if="userInfo.avatarUrl">
					<image class="img" :src="userInfo.avatarUrl" mode=""></image>
					<text>{{userInfo.nickName}}</text>
					<button class="exit" @click="exit">退出登录</button>
				</template>

				<!-- 未登录的状态 -->
				<template v-else>
					<image class="img" src="/static/images/personal/personal.png" mode=""></image>
					<!-- <text class="login" @click="btnLogin">登录</text> -->
					<text>昵称</text>
					<!-- <button class="btn-logo" @click="btnLogin">登录</button> -->
					<button class="exit" @click="btnLogin">登录</button>
				</template>

			</view>
			
			<view class="facilitate">
				<!-- 我的收藏区域 -->
				
				<view class="collect my-box">
					<view class="box-name">
						我的收藏
					</view>
					<view class="box-content1">
						<view class="content1-text">
							暂无收藏，添加收藏更加找到你的商品~
						</view>
						<!-- <view class="">
							<button class="btn-collect">+添加收藏</button>
						</view> -->
						<button class="btn-collect">＋添加收藏</button>
					</view>
					
				</view>
				
				<!-- 我的功能区域 -->
				<view class="ability my-box">
					<view class="box-name">
						我的功能
						
					</view>
					<view class="content2-box">
						<view class="small-box">
							<image src="../../static/images/personal/我的地址.png" mode=""></image>
						    <text>我的地址</text>
						</view>
						<view class="small-box">
							<image src="../../static/images/personal/我的订单.png" mode=""></image>
						    <text>我的订单</text>
						</view>
						<view class="small-box">
							<image src="../../static/images/personal/我的收藏.png" mode=""></image>
						    <text>我的收藏</text>
						</view>
						<view class="small-box">
							<image src="../../static/images/personal/我的评价.png" mode=""></image>
						    <text>我的评价</text>
						</view>
						<view class="small-box">
							<image src="../../static/images/personal/领劵中心.png" mode=""></image>
						    <text>领劵中心</text>
						</view>
						<view class="small-box">
							<image src="../../static/images/personal/我的红包.png" mode=""></image>
						    <text>我的红包</text>
						</view>
						<view class="small-box">
							<image src="../../static/images/personal/我的代金劵.png" mode=""></image>
						    <text>我的代金券</text>
						</view>
						<view class="small-box">
							<image src="../../static/images/personal/余额充值.png" mode=""></image>
						    <text>余额充值</text>
						</view>
						
						
					</view>
				</view>
				
				<!-- 我的服务 -->
				<view class="service my-box">
					<view class="box-name">
						我的服务
					</view>
					<view class="content3-box">
						<view class="small-box">
							<image src="../../static/images/personal/配送会员卡.png" mode=""></image>
						    <text>配送会员卡</text>
						</view>
						<view class="small-box">
							<image src="../../static/images/personal/下单有礼.png" mode=""></image>
						    <text>下单有礼</text>
						</view>
						<view class="small-box">
							<image src="../../static/images/personal/客服中心.png" mode=""></image>
						    <text>客服中心</text>
						</view>
						<view class="small-box">
							<image src="../../static/images/personal/帮助与反馈.png" mode=""></image>
						    <text>帮助与反馈</text>
						</view>
					</view>
				</view>
				
				<!-- 合作加盟 -->
				<view class="collaborate my-box">
					<view class="box-name">
						合作加盟
					</view>
					<view class="content4-box">
						<view class="small-box">
							<image src="../../static/images/personal/商家入驻.png" mode=""></image>
						    <text>商家入驻</text>
						</view>
						
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {},

			};
		},
		mounted() {
			// 从本地存储获取数据
			wx.getStorage({
				key: "userinfo",
				success: (res) => {

					// if(res.data) return
					// console.log(res.data)
					this.userInfo = JSON.parse(res.data || null)
				}
			})
		},
		methods: {
			btnLogin() {
				// 关闭所有页面， 打开到应用内的某个页面
				wx.reLaunch({
					url: '/pages/login/login'
				})

			},
			// 退出登录要清空本地存储
			exit() {
				// wx.setStorage({
				// 	key: "userinfo",
				// 	data:""
				// })
				wx.removeStorage({
					key: "userinfo"
				})
				// 去往登录页
				wx.reLaunch({
					url: '/pages/login/login'
				})
			}
		}
	}
</script>

<style lang="stylus">
	
	.personalColor {
		background-color: #f5f5f5;
		.personal {
			.header {
				position: relative;
				display: flex;
				height: 300rpx;
				line-height: 200rpx;
				background-color: #eed7b5;

                .btn-logo {
					height: 90rpx;
					line-height: 90rpx;
					// background-color: #f2a900;
				}
				
				.img {
					height: 100rpx;
					width: 100rpx;
					vertical-align: middle;
					margin: 50rpx;
				}

				.exit {
					position: absolute;
					right: 0;
					height: 80rpx;
					line-height: 80rpx;
					color: #f2a900;
				}
				
				
			}
			
			.facilitate {
				width: 100%;
				padding-bottom: 1rpx;
				
				.my-box {
					width: 96%;
					margin: 20rpx auto;
					background-color: #ffffff;
					border-radius: 12rpx;
					padding-top: 10rpx;
					.box-name {
						font-weight: 600;
						margin: 0 20rpx;
					}
					
				}
				
				.collect {
					// height: 160rpx;
					padding-bottom: 10rpx;
					.box-content1 {
						display: flex;
						justify-content: space-between;
						// flex-direction: column;
						margin: 0 -20rpx 20rpx 20rpx;
						
						.content1-text {
							margin-top: 30rpx;
							font-size: 22rpx;
							color: #666666;
						}
						.btn-collect {
							width: 260rpx;
							height: 80rpx;
							line-height: 80rpx;
							font-weight: 600;
							font-size: 30rpx;
							color: #ffffff;
							text-align: center;
							background-color: #f2a900;
						}
						
					}
				}
				
				.ability {
					height: 360rpx;
					.content2-box {
						display: flex;
						flex-wrap: wrap;
						justify-content: space-around;
						margin-top: 10rpx;
						.small-box {
							text-align: center;
							width: 25%;
							display: flex;
							flex-direction: column;
							margin-top: 5rpx;
							margin-bottom: 5rpx;
							image {
								width: 50%;
								margin: 0 auto;
								height: 100rpx;
							}
							text {
								font-size: 26rpx;
							}
							
						}
					}
				}
				
				.service {
					height: 220rpx;
					.content3-box {
						display: flex;
						flex-wrap: wrap;
						justify-content: space-around;
						margin-top: 10rpx;
						.small-box {
							text-align: center;
							width: 25%;
							display: flex;
							flex-direction: column;
							margin-top: 5rpx;
							margin-bottom: 5rpx;
							image {
								width: 50%;
								margin: 0 auto;
								height: 100rpx;
							}
							text {
								font-size: 26rpx;
							}
							
						}
					}
				}
				
				.collaborate {
					height: 220rpx;
					// margin-bottom: 30rpx;
					.content4-box {
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;
						margin-top: 10rpx;
						.small-box {
							text-align: center;
							width: 25%;
							display: flex;
							flex-direction: column;
							margin-top: 5rpx;
							margin-bottom: 5rpx;
							image {
								width: 50%;
								margin: 0 auto;
								height: 100rpx;
							}
							text {
								font-size: 26rpx;
							}
							
						}
						
					}
				}
				
			}
			
			
		}
	}
</style>