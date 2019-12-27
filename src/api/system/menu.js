import { request } from '@/utils/http';

const MODULE_API_NS = '/sys/menu';

export default {
    /** 获取数据 */
    list(params) {
        return request(`${MODULE_API_NS}/list`, {
            query: params
        })
    },
    /** 新增 */
    add (params) {
        return request(`${MODULE_API_NS}/add`, {
            query: params
        })
    },
    /** 更新 */
    modify (params) {
        return request(`${MODULE_API_NS}/modify`, {
            query: params
        })
    },
    /** 删除 */
    delete (params) {
        return request(`${MODULE_API_NS}/delete`, {
            query: params
        })
    }
}
