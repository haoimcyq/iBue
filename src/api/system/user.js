import { request } from '@/utils/http';
import { API_SYS_USER } from '@/config/apiTypes';

export default {
    list: request(`${API_SYS_USER}/list`),
    add: request(`${API_SYS_USER}/add`),
    modify: request(`${API_SYS_USER}/modify`),
    remove: request(`${API_SYS_USER}/remove`),
    getInfo: request(`${API_SYS_USER}/getInfo`, 'GET'),
    getMenu: request(`${API_SYS_USER}/getMenu`),
    login: request(`${API_SYS_USER}/login`),
    logout: request(`${API_SYS_USER}/logout`),
    changePassword: request(`${API_SYS_USER}/changePassword`),
};
