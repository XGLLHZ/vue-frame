/**
 * web 路由
 */

import info from '@/views/web/info'
import typelist from '@/views/web/typelist'

const webRouters = [
    {
        path: '/info',
        name: 'info',
        component: info
    },
    {
        path: '/typelist',
        name: 'typelist',
        component: typelist
    }
]

export default webRouters

