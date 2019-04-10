import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations.js'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: mutations
})

export default store

