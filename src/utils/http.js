import axios from 'axios';
import { cloneDeep } from 'lodash';
import router from '@/router/index';
import Cookies from 'js-cookie';
import { TIMEOUT } from '@/config/setting';
import QS from 'qs';

const instance = axios.create({
    baseURL: '',
    timeout: TIMEOUT,
});

instance.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded';

/** 请求拦截器 */
instance.interceptors.request.use(
    config => {
        config.headers.token = Cookies.get('token');
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

/**
 * 响应拦截器
 *
 * 常用状态码
 * 1xx：指示信息--表示请求已接收，继续处理
 * 2xx：成功--表示请求已被成功接收、理解、接受
 * 3xx：重定向--要完成请求必须进行更进一步的操作
 * 4xx：客户端错误--请求有语法错误或请求无法实现
 * 5xx：服务器端错误--服务器未能实现合法的请求
 */
instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                /** 401: 未登录 */
                case 401:
                    error.message = '未登录';
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath,
                        },
                    });
                    break;

                /** 403: token过期 禁止访问 */
                case 403:
                    error.message = '禁止访问';
                    break;

                /** 404: 请求不存在 */
                case 404:
                    error.message = '请求不存在';
                    break;

                /** 408: 请求超时 */
                case 408:
                    error.message = '请求超时';
                    break;

                /** 500: 服务器内部错误 */
                case 500:
                    error.message = '服务器内部错误';
                    break;

                /** 504: 网关错误 */
                case 504:
                    error.message = '网关错误';
                    break;

                /** 其他错误 */
                default:
                    error.message = '未知错误';
                    break;
            }

            return Promise.reject(error.response);
        }
    },
);

/**
 * @param {String} url [请求地址]
 * @param {String} method [请求方法]
 */
export function request(url, method = 'post') {
    return function(data, config = {}) {
        data = cloneDeep(data);
        config = cloneDeep(config);
        let query = {};

        data = QS.stringify(data);
        method = method && method.toLowerCase();

        if (['delete', 'get', 'head', 'options'].includes(method)) {
            query.params = data;
            query = Object.assign(query, config);
            config = null;
        }
        query = data;

        return new Promise((resolve, reject) => {
            instance[method] &&
                instance[method](url, query, config)
                    .then(({ data, status, statusText }) => {
                        resolve({ data, status, statusText });
                    })
                    .catch(error => {
                        const { response, message } = error;
                        let status = '',
                            statusText = '',
                            data = null;

                        if (response) {
                            status = response.status;
                            statusText = response.statusText;
                            data = response.data;
                        }
                        reject({
                            success: false,
                            data,
                            status,
                            statusText,
                            message,
                        });
                    });
        });
    };
}
