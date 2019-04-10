import Vue from 'vue'
import VueRouter from 'vue-router'

import Foo from '../components/Foo.vue'
import Bar from '../components/Bar.vue'


const routes = [
    {
        path: '/foo',
        component: Foo
    },
    {
        path: '/bar',
        component: Bar
    },
    {
        path: '/',
        redirect: '/foo' // 路由重定向
    },
    // 动态路由匹配
    {
        path: '/mine/:id'
    }
]

const router = new VueRouter({
    routes
})

export default router