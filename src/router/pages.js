import Layout from '@/layout/Index';

export const pages = [
    {
        path: '/login',
        name: '登录页',
        component: () => import('@/pages/Login'),
        meta: {
            title: '欢迎登录'
        }
    },
    {
        path: '/',
        redirect: '/demo',
        component: Layout,
        children: [
            {
                path: 'dashboardV1',
                name: 'DashboardV1',
                component: () => import('@/pages/dashboard/DashboardV1.vue'),
                meta: {
                    title: '订单'
                }
            },
            {
                path: 'demo',
                name: 'Demo',
                component: () => import('@/pages/Demo.vue'),
                meta: {
                    title: '演示'
                }
            },
            {
                path: 'dashboardV3',
                name: 'DashboardV3',
                component: () => import('@/pages/dashboard/DashboardV3.vue'),
                meta: {
                    title: '库存'
                }
            },
            {
                path: 'dashboardV2',
                name: 'DashboardV2',
                component: () => import('@/pages/dashboard/DashboardV2.vue'),
                meta: {
                    title: '商家'
                }
            },
            {
                path: 'dashboardV4',
                name: 'DashboardV4',
                component: () => import('@/pages/dashboard/DashboardV4.vue'),
                meta: {
                    title: '财务'
                }
            },
            {
                path: 'dashboardV5',
                name: 'DashboardV5',
                component: () => import('@/pages/dashboard/DashboardV5.vue'),
                meta: {
                    title: '采购'
                }
            },
            {
                path: 'dashboardV6',
                name: 'DashboardV6',
                component: () => import('@/pages/dashboard/DashboardV6.vue'),
                meta: {
                    title: '供销'
                }
            },
            {
                path: 'dashboardV7',
                name: 'DashboardV7',
                component: () => import('@/pages/dashboard/DashboardV7.vue'),
                meta: {
                    title: '推广'
                }
            },
            {
                path: 'dashboardV8',
                name: 'DashboardV8',
                component: () => import('@/pages/dashboard/DashboardV8.vue'),
                meta: {
                    title: '推广'
                }
            },
            {
                path: '/profile',
                name: 'Profile',
                component: () => import('@/pages/profile/Index.vue'),
                meta: {
                    title: '个人中心'
                }
            }
        ]
    },
    {
        path: '/404',
        component: () => import('@/pages/404'),
        name: '404',
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/403',
        component: () => import('@/pages/403'),
        name: '403',
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/500',
        component: () => import('@/pages/500'),
        name: '500',
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/authredirect',
        name: '授权页',
        component: () => import('@/pages/Auth'),
        meta: {
            keepAlive: true
        }
    }
]
