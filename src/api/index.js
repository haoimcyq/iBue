import { request } from '@/utils/http';

export function serializeApi(params) {
    let url = params,
        method = 'GET',
        paramsArray = params.split(/\s+/);

    if (paramsArray.length === 2) {
        method = paramsArray[1];
        url = paramsArray[0];
    }

    return function(data) {
        return request({
            url,
            method,
            data,
        });
    };
}
