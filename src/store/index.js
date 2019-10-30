import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

import demo from './module/demo';//引入其他vuex配置
const store = new Vuex.Store({
    strict: debug,	// 严格模式，是否能在mutation外修改state值，true → 不能修改，false → 可以修改

    state: {//用来数据共享数据存储
		showBottomNav : true,
        tip: '欢迎使用Vuex',
    },
    getters: {//用来对共享数据进行过滤操作
        tip: state => state.tip,
    },
    mutations: {//用来注册改变数据状态
		setShow(state,data){
			this.state.showBottomNav = data
		}
        // SET_TIP(state, data) {
        //     state.tip = data;
        // },
    },
    actions: {//解决异步改变共享数据

    },
    modules: {
        demo,
    }
});

export default store;
