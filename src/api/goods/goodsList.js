import { request } from '@/utils/http';

const MODULE_API_NS = '/goods/goodsList';

/**
 * RESTful API���
 * GET����ȡ
 * POST������
 * PUT������
 * DELETE��ɾ��
 */

export default {
    /** ��ȡ���� */
    list(params) {
        return request(`${MODULE_API_NS}/list`, 'GET', {
            query: params
        });
    },
    /** ���� */
    add(params) {
        return request(`${MODULE_API_NS}/add`, 'POST', {
            query: params
        });
    },
    /** ���� */
    modify(params) {
        return request(`${MODULE_API_NS}/modify`, 'PUT', {
            query: params
        });
    },
    /** ɾ�� */
    delete(params) {
        return request(`${MODULE_API_NS}/delete`, 'DELETE', {
            query: params
        });
    },
    /** ��ȡ�û���Ϣ */
    getInfo(params) {
        return request(`${MODULE_API_NS}/getInfo`, 'GET', {
            query: params
        });
    },
    /** �����û��˵� */
    getMenu(params) {
        return request(`${MODULE_API_NS}/getMenu`, 'GET', {
            query: params
        });
    }
};
