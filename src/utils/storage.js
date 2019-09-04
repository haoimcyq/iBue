import QS from 'qs';

/**
 * 设置
 * @params key { String } key值
 * @params value { Object | String | Boolean | Number } value值
 * @params type { String } 存储类型
 */
export const setStorage = (key, value, type = 'session') => {
    let result = QS.stringify(value);

    if (type === 'session') {
        window.sessionStorage.setItem(key, result)
    } else {
        window.localStorage.setItem(key, result)
    }

    return result
};

/**
 * 获取
 * @params key { String } key值
 * @params type { String } 存储类型
 */
export const getStorage = (key, type = 'session') => {
    let result = null;

    if (type === 'session') {
        result = QS.parse(window.sessionStorage.getItem(key))
    } else {
        result = QS.parse(window.localStorage.getItem(key))
    }

    return result
};

/**
 * 获取
 * @params key { String } key值
 * @params type { String } 存储类型
 */
export const removeStorage = (key, type = 'session') => {
    if (type === 'session') {
        window.sessionStorage.removeItem(key)
    } else {
        window.localStorage.removeItem(key)
    }
};
