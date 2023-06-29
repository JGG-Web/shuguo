import request from '../../utils/request.js'
const state = {
	// test: '测试数据',
	indexData: {}// 请求存储首页数据
}
const mutations = {
	// 修改首页的数据    当得到indexData参数，就会修改state里面的indexData
	changeIndexDataMutations(state, indexData) {
		state.indexData = indexData
	}
	
}
const actions = {
	// 发网络请求，拿首页数据
	async getIndexDataActions({commit}) {
		// 1.执行异步任务，发送网络请求
		const res = await request('/getIndexData') 
		commit('changeIndexDataMutations', res.indexData)
		
	}
	
}

const getters = {
	
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}