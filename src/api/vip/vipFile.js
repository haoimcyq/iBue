import { request } from '@/utils/http';
import { API_VIP_LIST } from '@/config/apiTypes';

export default {
    /** 获取数据 */
    list(query) {
        return request(`${API_VIP_LIST}/list`, 'post', {
            query
        });
    },
    /** 新增 */
    add(query) {
        return request(`${API_VIP_LIST}/add`, 'post', {
            query
        });
    },
    /** 更新 */
    modify(query) {
        return request(`${API_VIP_LIST}/modify`, 'put', {
            query
        });
    },
    /** 删除 */
    remove(query) {
        return request(`${API_VIP_LIST}/delete`, 'delete', {
            query
        });
    },
    /** 获取用户信息 */
    getInfo(query) {
        return request(`${API_VIP_LIST}/getInfo`, 'get', {
            query
        });
    }
};
