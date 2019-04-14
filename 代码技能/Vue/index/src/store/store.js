import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations.js'

Vue.use(Vuex) // 要在newVuex.Store之前调用use

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: mutations
})

export default store

