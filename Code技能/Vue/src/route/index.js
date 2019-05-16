// @ts-nocheck
import VueRouter from 'vue-router'

import Foo from '../components/Foo.vue'
import Bar from '../components/Bar.vue'
import Mine from '../components/Mine.vue'

const routes = [
    {
        path: '/foo',
        component: (Foo)
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
        path: '/mine/:id',
        component: Mine,
        beforeEnter: (to, from, next) => { // 单个路由守卫, 组件内路由守卫移步Mine组件
            console.log(to);
            next() // 必须执行, 否则不会跳转, 可以填false, 新的路由, 和error
        }
    }
]

const router = new VueRouter({
    // mode: 'history', // 可以使用html5 提供的history模式
    routes:　routes
})
// 全局路由守卫
router.beforeEach((from, to, next) => {
    console.log(from, to, next);
    next()
})
export default router