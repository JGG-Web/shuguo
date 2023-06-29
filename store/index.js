import Vue from 'vue'
import Vuex from 'vuex'
import home from './moduies/home'
import cart from './moduies/cart.js'

// 安装插件
Vue.use(Vuex);

// 创建仓库
const store = new Vuex.Store({
	modules: {
		home,
		cart
	}
	
})

// 暴露
export default store