import Vue from 'vue'

const state = {
	cartList: [{
			"isSelected": true,
			"count": 2,
			"id": 1535004,
			"primaryPicUrl": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4290b4c0-8bfc-44f2-aaa0-35e94726c92e%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686745407&t=c54c62807cd601cbb6474eb36f5a2b3f",
			"counterPrice": 2.99,
			"retailPrice": 3.99,
			"promTag": "今日特惠",
			"name": "沃柑新鲜水果",
			"listPicUrl": "https://img2.baidu.com/it/u=2549699305,1855271580&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666",
			"simpleDesc": "果肉饱满，口感清甜"
		},
		{
			"isSelected": false,
			"count": 1,
			"id": 1536001,
			"primaryPicUrl": "https://img2.baidu.com/it/u=3186096945,775818758&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
			"counterPrice": 3.99,
			"retailPrice": 4.99,
			"promTag": "今日特惠",
			"name": "当季新鲜芒果",
			"listPicUrl": "https://img0.baidu.com/it/u=948350024,2036925802&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
			"simpleDesc": "甜蜜多汁，果香四溢"
		},
		{
			"isSelected": true,
			"count": 3,
			"id": 1562007,
			"primaryPicUrl": "http://t14.baidu.com/it/u=529608104,2212901129&fm=224&app=112&f=JPEG?w=500&h=500",
			"counterPrice": 7.99,
			"retailPrice": 8.99,
			"promTag": "今日特惠",
			"name": "现摘广西小香蕉",
			"listPicUrl": "https://img30.360buyimg.com/popWareDetail/jfs/t1/84948/8/19634/143587/6146d17fE75286a7e/600a7e51d62e9818.jpg",
			"simpleDesc": "口感清甜，个头匀称"
		},
		{
			"isSelected": true,
			"count": 1,
			"id": 1565039,
			"primaryPicUrl": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Ftfscom%2Fi3%2F3418178767%2FTB1GTrIleGSBuNjSspbXXciipXa_%21%210-item_pic.jpg_400x400.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686745700&t=ec67a811ec131dc8199948d0803483ea",
			"counterPrice": 6.99,
			"retailPrice": 7.99,
			"promTag": "今日特惠",
			"name": "海南金芒果",
			"listPicUrl": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F9269e4e5-abe8-47ff-96d9-770824f52c40%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686745721&t=73b0a1eca4b3038b4d0b77453084ebf5",
			"simpleDesc": "果子新鲜，口感细腻"
		},


	]
}

const mutations = {
	// 修改数据  添加
	addGoodsItemMutation(state, goodsItem) {
		const item = state.cartList.find(item => item.id === goodsItem.id)
		if (item) {
			item.count += 1
		} else {
			Vue.set(goodsItem, 'count', 1);
			Vue.set(goodsItem, 'isSelected', true)
			state.cartList.unshift(goodsItem)
		}

	},
	// 添加、删除商品
	changeCountMustation(state, {
		isAdd,
		index
	}) {
		// 加
		if (isAdd) {
			state.cartList[index].count += 1
		} else {
			if (state.cartList[index].count > 1) {
				state.cartList[index].count -= 1
			} else {
				// 提示框
				wx.showModal({
					title: '提示',
					content: '确定要删除该商品吗？',
					success(res) {
						if (res.confirm) {
							// 删除
							state.cartList.splice(index, 1)
						}
					}
				})

				// state.cartList[index].count === 0
			}
		}

	},


	// 修改选中状态
	changeSelectedMustation(state, {
		isSelected,
		index
	}) {
		state.cartList[index].isSelected = isSelected
	},
	// 修改全选和全不选
	changeAllSelectedMustation(state, isSelected) {
		state.cartList.forEach(item => {
			item.isSelected = isSelected
		})
	}
}

const actions = {

}

// 计算属性
const getters = {
	// 计算属性   是否全选中  全为真，则为真；只要一个是false，就为false 用every方法
	isAllSelected(state) {
		return state.cartList.every(item => item.isSelected === true)
	},
	// 总数量
	totalCount(state) {
		return state.cartList.reduce((pre, item) => {
			return pre += item.isSelected ? item.count : 0

		}, 0)
	},

	// 总价格
	totalPrice(state) {
		return state.cartList.reduce((pre, item) => {
			return pre += item.isSelected ? item.count * item.retailPrice : 0
		}, 0)
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
}