/**
 * 管理系统路由
 */

import index from '@/views/admin/index'
import blogindex from '@/views/admin/blog/index'
import blogedit from '@/views/admin/blog/edit'
import bloginfo from '@/views/admin/blog/info'
import typeindex from '@/views/admin/type/index'
import logindex from '@/views/admin/log/index'

const adminRouters = [
    {
        path: '/system',
        name: 'index',
        component: index,
        // meta: {
        //     requireAuth: false
        // }
    },

    //博客管理部分
    {
        path: '/blogindex',
        name: 'blogindex',
        component: blogindex
    },
    {
        path: '/blogedit',
        name: 'blogedit',
        component: blogedit
    },
    {
        path: '/bloginfo',
        name: 'bloginfo',
        component: bloginfo
    },

    //分类管理
    {
        path: '/typeindex',
        name: 'typeindex',
        component: typeindex
    },

    //日志部分
    {
        path: '/logindex',
        name: 'logindex',
        component: logindex
    }

]

export default adminRouters

