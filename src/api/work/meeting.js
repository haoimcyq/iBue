import { request } from '@/utils/http';
import { API_WORK_MEETING } from '@/config/apiTypes';

export default {
    /** 获取数据 */
    list(query) {
        return request(`${API_WORK_MEETING}/list`, 'post', {
            query
        });
    },
    /** 新增 */
    add(query) {
        return request(`${API_WORK_MEETING}/add`, 'post', {
            query
        });
    },
    /** 更新 */
    modify(query) {
        return request(`${API_WORK_MEETING}/modify`, 'put', {
            query
        });
    },
    /** 删除 */
    remove(query) {
        return request(`${API_WORK_MEETING}/delete`, 'delete', {
            query
        });
    },
    /** 获取用户信息 */
    getInfo(query) {
        return request(`${API_WORK_MEETING}/getInfo`, 'get', {
            query
        });
    }
};
