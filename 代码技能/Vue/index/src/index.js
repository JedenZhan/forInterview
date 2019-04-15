import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import router from './route/index.js'
import store from './store/store.js'


Vue.use(VueRouter) // 告诉Vue使用了Vue
Vue.use(ElementUI)

new Vue({
    render: h => h(App),
    router,
    store // 注入到全局组件中, 保证所有子组件都可以使用store
}).$mount('#App')