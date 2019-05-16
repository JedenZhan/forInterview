// store在这里创建, 是根文件
import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations.js'
import actions from './actions.js'
Vue.use(Vuex) // 要在newVuex.Store之前调用use

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations,
    actions
})

export default store