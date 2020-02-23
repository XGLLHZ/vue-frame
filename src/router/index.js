import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'   //引入 web 首页
import adminRouters from './admin'   //引入管理系统路由
import webRouters from './web'   //引入 web 路由

//注册路由
Vue.use(Router)

export const routerMap = [
    {
        path: '/',
        name: 'index',
        component: index,
        redirect: 'index',
        children: [{
            path: '/index',
            name: 'index',
            component: index,
            meta: {
                requireAuth: false
            }
        }]
    }
]

const routers = [
    ...adminRouters,
    ...webRouters
]

const router = new Router({
    routes: routerMap.concat(routers)
});

export default router

