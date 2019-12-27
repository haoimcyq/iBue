import Layout from '@/layout/Index.vue';

/** 组件加载 */
function loadingComponent(file) {
    return callback => {
        if (process.env.NODE_ENV === 'production') {
            return new Promise((resolve, reject) => {
                let component = import(`@/views/${file}.vue`);
                component
                    .then(res => {
                        resolve(res);
                    })
                    .catch(e => {
                        reject(import(`@/pages/Error.vue`));
                    });
            });
        } else {
            return require([`@/views/${file}.vue`], callback);
        }
    };
}

/** 创建路由 */
function generateRoutes(routes = []) {
    if (!Array.isArray(routes)) return [];

    return routes.map(route => {
        /** 创建路由组件 */
        if (route.component === 'Layout') {
            route.component = Layout;
        } else if (route.component.trim()) {
            route.component = loadingComponent(route.component);
        }

        if (route.meta) {
            if (route.meta.title === void 0) route.meta.title = '';
            if (!route.meta.icon) route.meta.icon = 'el-icon-collection-tag';
            if (route.meta.keepAlive === void 0) route.meta.keepAlive = true;
        } else {
            route.meta = {
                title: '',
                icon: 'icon-circle',
                keepAlive: false,
            };
        }

        if (route.children && route.children.length) {
            route.children = generateRoutes(route.children);
        }

        return route;
    });
}

/** 根据后台传递的数据生成前端路由 */
export function menusToRoutes(menu) {
    const routes = generateRoutes(menu);

    routes.concat([
        {
            path: '*',
            redirect: '/404',
            component: () => import('@/pages/404'),
        },
    ]);

    return routes;
}
