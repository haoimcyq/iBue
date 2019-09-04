import Mock from 'mockjs';
import { SUCCESS_CODE, SUCCESS_MSG } from '@/config/setting';
import { guid } from '@/utils/utils';

/** 接口前缀 */
const MOCK_PATH = '/login';

/** 登录 */
Mock.mock(`${MOCK_PATH}/login`, opts => {
    let data = {
        token: guid(),
        roles: 1
    };

    return {
        code: SUCCESS_CODE,
        msg: SUCCESS_MSG,
        data
    };
});

/** 退出登录 */
Mock.mock(`${MOCK_PATH}/logout`, opts => {
    let data = null;

    return {
        code: SUCCESS_CODE,
        msg: SUCCESS_MSG,
        data
    };
});
