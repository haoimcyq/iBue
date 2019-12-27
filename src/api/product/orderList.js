import { request } from '@/utils/http';
import { API_ORDER_LIST } from '@/config/apiTypes';

export default {
    /** 获取数据 */
    list(query) {
        return request(`${API_ORDER_LIST}/list`, 'post', {
            query
        });
    },
    /** 新增 */
    add(query) {
        return request(`${API_ORDER_LIST}/add`, 'post', {
            query
        });
    },
    /** 更新 */
    modify(query) {
        return request(`${API_ORDER_LIST}/modify`, 'post', {
            query
        });
    },
    /** 删除 */
    remove(query) {
        return request(`${API_ORDER_LIST}/delete`, 'post', {
            query
        });
    }
};
