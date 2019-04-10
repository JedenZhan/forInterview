import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './App.vue'
import router from './route/index.js'
import store from './store/store.js'


Vue.use(VueRouter) // 告诉Vue使用了Vue


new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#App')