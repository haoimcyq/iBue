import { request } from '@/utils/http';
import { API_SYS_ROLE } from '@/config/apiTypes';

export default {
    /** 获取数据 */
    list(query) {
        return request(`${API_SYS_ROLE}/list`, 'post', { query });
    },
    /** 新增 */
    add(query) {
        return request(`${API_SYS_ROLE}/add`, 'post', { query });
    },
    /** 更新 */
    modify(query) {
        return request(`${API_SYS_ROLE}/modify`, 'put', { query });
    },
    /** 删除 */
    remove(query) {
        return request(`${API_SYS_ROLE}/delete`, 'delete', { query });
    }
}
