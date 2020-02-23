/**
 * web 路由
 */

const webRouters = [
    {
        path: '/spring',
        name: 'spring',
        component: () => import('@/views/web/spring/index')
    }
]

export default webRouters

