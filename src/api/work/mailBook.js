import { request } from '@/utils/http';
import { API_WORK_MAILBOOK } from '@/config/apiTypes';

export default {
    /** 获取数据 */
    list(query) {
        return request(`${API_WORK_MAILBOOK}/list`, 'post', {
            query
        });
    },
    /** 新增 */
    add(query) {
        return request(`${API_WORK_MAILBOOK}/add`, 'post', {
            query
        });
    },
    /** 更新 */
    modify(query) {
        return request(`${API_WORK_MAILBOOK}/modify`, 'put', {
            query
        });
    },
    /** 删除 */
    remove(query) {
        return request(`${API_WORK_MAILBOOK}/delete`, 'delete', {
            query
        });
    },
    /** 获取用户信息 */
    getInfo(query) {
        return request(`${API_WORK_MAILBOOK}/getInfo`, 'get', {
            query
        });
    }
};
