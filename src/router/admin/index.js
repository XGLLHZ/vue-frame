/**
 * 管理系统路由
 */

import index from '@/views/admin/index'
import blogindex from '@/views/admin/blog/index'
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
    {
        path: '/blogindex',
        name: 'blogindex',
        component: blogindex
    },
    {
        path: '/typeindex',
        name: 'typeindex',
        component: typeindex
    }
]

export default adminRouters

