import Mock from 'mockjs';
import { Notification } from 'element-ui';

const Random = Mock.Random;

function format(str) {
    if (!String(str)) return {};

    let obj = {};

    String(str).replace(/([^?&=]+)=([^?&=]*)/g, (rs, $1, $2) => {
        let key = decodeURIComponent($1),
            val = decodeURIComponent($2);
        val = String(val);
        obj[key] = val;

        return rs;
    });

    return obj;
}

/** 统一模拟请求方法 */
export function mockRequest(url, method = 'POST', callback) {
    if (typeof url === 'object') {
        return Mock.mock(url);
    } else {
        if (typeof method === 'function') {
            callback = method;
            method = 'post';
        }
        Mock.mock(url, method.toLowerCase(), options => {
            let result = (callback && callback(format(options.body))) || {};

            Notification.success({
                title: 'Mock请求',
                message: `${options.type && options.type.toUpperCase()} ${
                    options.url
                }`,
            });

            return {
                request_id: Random.integer(),
                errors: [],
                status: 'OK',
                result,
            };
        });
    }
}

export function dynamicMock(apis) {
    for (const api of apis) {
        mockRequest(api.url, api.method, options => {
            if (typeof api.callback === 'function') {
                return api.callback({
                    options,
                    mockRequest,
                    Random,
                });
            }

            return true;
        });
    }
}

export default Mock;
