import Layout from '@/layout/Index.vue';

/* 页面组件懒加载 */
function lazyLoading(file) {
    return () => {
        return import(`@/views/${file}.vue`);
    };
}

/** 根据后台传递的数据生成前端路由 */
export function createRoutes(routes = []) {
    if (!Array.isArray(routes)) return;

    return routes.map(route => {
        /** 创建路由组件 */
        if (route.component === 'Layout') {
            route.component = Layout;
        } else if (route.component.trim()) {
            route.component = lazyLoading(route.component);
        }

        if (route.meta) {
            if (route.meta.title === void 0) route.meta.title = '';
            if (!route.meta.icon) route.meta.icon = '';
            if (route.meta.keepAlive === void 0) route.meta.keepAlive = true;
        } else {
            route.meta = {
                title: '',
                icon: 'icon-circle',
                keepAlive: false
            };
        }

        if (route.children && route.children.length) {
            route.children = createRoutes(route.children);
        }

        return route;
    });
}
