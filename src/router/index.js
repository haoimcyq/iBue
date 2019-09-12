import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';
import { createRoutes } from './createRoutes';
import pages from './pages';

Vue.use(VueRouter);

const constantRoutes = [...pages];

const createRouter = () =>
    new VueRouter({
        routes: constantRoutes
    });

const router = createRouter();

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach(async (to, from, next) => {
    if (store.getters.token) {
        if (to.path === '/login') {
            next({ path: '/' });
        } else {
            if (store.getters.roles.length === 0) {
                /** 使用命名空间在调用action时必须填写模块名称 */
                await store
                    .dispatch('user/getInfo')
                    .then(response => {
                        store.dispatch('user/setMenu').then(async response => {
                            await router.addRoutes(createRoutes(response.data.routes).concat([
                                {
                                    path: '*',
                                    redirect: '/404',
                                    component: () => import('@/pages/404')
                                }
                            ]));
                            next({ ...to, replace: true });
                        });
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } else {
                store.dispatch('tags/addTag', to);
                next();
            }
        }
    } else {
        if (to.path === '/login') {
            next();
        } else {
            next(`/login?redirect=${to.path}`);
        }
    }
});

router.afterEach((to, from) => {
    document.title = (to.meta && `iBue Pro -${to.meta.title}`) || 'iBue Pro';
});

/** 重置路由 */
export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher;
}

export default router;
