/**
 * 管理系统路由
 */

import index from '@/views/admin/index'
import blogindex from '@/views/admin/blog/index'
import blogedit from '@/views/admin/blog/edit'
import typeindex from '@/views/admin/type/index'

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
        path: '/typeindex',
        name: 'typeindex',
        component: typeindex
    }
]

export default adminRouters

