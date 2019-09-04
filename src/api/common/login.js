import { request } from '@/utils/http';

const MODULE_API_NS = '/login';

export default {
    /** 登录 */
    login (params) {
        return request(`${MODULE_API_NS}/login`, 'POST', {
            query: params
        })
    },
    /** 退出 */
    logout (params) {
        return request(`${MODULE_API_NS}/logout`, {
            query: params
        })
    },
    /** 获取用户信息 */
    getInfo (params) {
        return request(`${MODULE_API_NS}/getInfo`, {
            query: params
        })
    },
    /** 更新用户信息 */
    modifyInfo (params) {
        return request(`${MODULE_API_NS}/modifyInfo`, {
            query: params
        })
    },
    /** 修改密码 */
    modifyPass (params) {
        return request(`${MODULE_API_NS}/modifyPass`, {
            query: params
        })
    }
}
