<template>
	<view>
		<button open-type="getUserInfo" @click="getUser" class="login-btn">登 录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			getUser() {
				// wx.getUserProfile 获取用户信息，开发者每次通过该接口获取用户个人信息均需要用户确认
				wx.getUserProfile({
					desc: '用于完善会员资料',
					success: res => {
						//用户信息
						// console.log(res)
						// 存储用户信息
						wx.setStorage({
							key: "userinfo",
							data: JSON.stringify(res.userInfo)
						})
						
						// 页面跳转，回到个人中心；把其他页面都关闭
						wx.reLaunch({
							url: '/pages/personal/personal'
						})
					}
				})
				
			}
		}
	}
</script>

<style lang="stylus">
	page {
		background-color: #f5f5f5;
	}
	
	.login-btn {
		margin: 430rpx auto;
		width: 40%;
		color: #ffffff;
		background-color: #f2a900;
		border-radius: 30rpx;
	}

</style>
