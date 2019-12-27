import { request } from '@/utils/http';
import { API_WORK_EMPLOYEE } from '@/config/apiTypes';

export default {
    /** 获取数据 */
    list(query) {
        return request(`${API_WORK_EMPLOYEE}/list`, 'post', {
            query
        });
    },
    /** 新增 */
    add(query) {
        return request(`${API_WORK_EMPLOYEE}/add`, 'post', {
            query
        });
    },
    /** 更新 */
    modify(query) {
        return request(`${API_WORK_EMPLOYEE}/modify`, 'put', {
            query
        });
    },
    /** 删除 */
    remove(query) {
        return request(`${API_WORK_EMPLOYEE}/delete`, 'delete', {
            query
        });
    },
    /** 获取用户信息 */
    getInfo(query) {
        return request(`${API_WORK_EMPLOYEE}/getInfo`, 'get', {
            query
        });
    }
};
