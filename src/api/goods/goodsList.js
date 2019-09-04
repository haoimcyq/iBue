import { request } from '@/utils/http';

const MODULE_API_NS = '/goods/goodsList';

/**
 * RESTful API设计
 * GET：获取
 * POST：新增
 * PUT：更新
 * DELETE：删除
 */

export default {
    /** 获取数据 */
    list(params) {
        return request(`${MODULE_API_NS}/list`, 'GET', {
            query: params
        });
    },
    /** 新增 */
    add(params) {
        return request(`${MODULE_API_NS}/add`, 'POST', {
            query: params
        });
    },
    /** 更新 */
    modify(params) {
        return request(`${MODULE_API_NS}/modify`, 'PUT', {
            query: params
        });
    },
    /** 删除 */
    delete(params) {
        return request(`${MODULE_API_NS}/delete`, 'DELETE', {
            query: params
        });
    },
    /** 获取用户信息 */
    getInfo(params) {
        return request(`${MODULE_API_NS}/getInfo`, 'GET', {
            query: params
        });
    },
    /** 加载用户菜单 */
    getMenu(params) {
        return request(`${MODULE_API_NS}/getMenu`, 'GET', {
            query: params
        });
    }
};
