import Vue from 'vue';
import VueRouter from 'vue-router';
import nprogress from 'nprogress';
import store from '@/store/index';
import { menusToRoutes } from './generateRoutes';
import { pages } from './pages';

Vue.use(VueRouter);

const constantRoutes = [...pages];

const createRouter = () =>
    new VueRouter({
        routes: constantRoutes,
    });

const router = createRouter();

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach(async (to, from, next) => {
    nprogress.start();

    document.title = (to.meta && `iBue Pro -${to.meta.title}`) || 'iBue Pro';

    if (store.getters.token) {
        if (to.path === '/login') {
            next({ path: '/' });
            nprogress.done();
        } else {
            if (store.getters.roles.length === 0) {
                await store
                    .dispatch('user/getInfo')
                    .then(() => {
                        store.dispatch('user/setMenu').then(async response => {
                            await router.addRoutes(menusToRoutes(response));
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
            nprogress.done();
        }
    }
});

router.afterEach(() => {
    nprogress.done();
});

/** 重置路由 */
export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher;
}

export default router;
