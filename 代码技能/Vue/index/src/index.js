import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './route/index.js'

Vue.use(VueRouter) // 告诉Vue使用了Vue

new Vue({
    render: h => h(App),
    router
}).$mount('#App')