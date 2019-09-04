import Mock from 'mockjs';
import { SUCCESS_CODE, SUCCESS_MSG } from '@/config/setting';
import { formatQuery } from '@/mock/formatQuery';

/** 侧边栏菜单数据 */
import menu from '../../../public/data/menu';

/** 接口前缀 */
const MOCK_PATH = '/sys/user';

/**
 * 返回结果
 * {
 *   "status":  0,
 *   "message":  "获取轮播图信息失败",
 *   "data": [],
 *   "request_url": "/url/xxx/xxx"
 * }
 */

/** 创建列表数据 */
let dataList = (len => {
    let list = [];

    for (let i = 0; i < len; i++) {
        list.push(
            Mock.mock({
                id: '@id',
                userName: '@cname',
                phone: /^1[3-9]\d{9}$/,
                email: '@email',
                address: '@city',
                createTime: "@date('yyyy-MM-dd hh:mm:ss')",
                avatar: "@image('64x64', '@color', '#fff', '@word')",
                role: 'admin'
            })
        );
    }

    return list;
})(200);

/** 获取列表数据 */
Mock.mock(`${MOCK_PATH}/list`, 'get', opts => {
    opts = formatQuery(opts.body);

    let data = [],
        keyword = opts.keyword || '',
        pageSize = Number(opts.pageSize) || 20,
        currentPage = Number(opts.currentPage) || 1,
        total = dataList.length;

    if (keyword) {
        for (let item of dataList) {
            if (opts) {
                data.push(item);
            }
        }
    } else {
        data = dataList;
    }

    /** 分页 */
    data = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return {
        code: SUCCESS_CODE,
        message: SUCCESS_MSG,
        data,
        pageSize,
        currentPage,
        total
    };
});

/** 获取信息 */
Mock.mock(`${MOCK_PATH}/getInfo`, 'get', opts => {
    let id = parseInt(opts.id);
    let info = {};

    for (let i = 0; i < dataList.length; i++) {
        if (dataList[i].id === id) {
            info = dataList[i];
            break;
        }
    }

    return {
        code: SUCCESS_CODE,
        message: SUCCESS_MSG,
        data: info
    };
});

/** 获取菜单 */
Mock.mock(`${MOCK_PATH}/getMenu`, 'get', opts => {
    return {
        code: SUCCESS_CODE,
        message: SUCCESS_MSG,
        data: menu
    };
});

// 删除用户
Mock.mock(`${MOCK_PATH}/delete`, 'post', opts => {
    opts.data.forEach(id => {
        for (var i = 0; i < dataList.length; i++) {
            if (dataList[i].id === id) {
                dataList.splice(i, 1);
            }
        }
    });

    return {
        code: SUCCESS_CODE,
        message: SUCCESS_MSG
    };
});

/** 新增 */
Mock.mock(`${MOCK_PATH}/add`, 'post', opts => {
    dataList.unshift({
        id: '@id',
        name: opts.data.name,
        phone: opts.data.phone,
        email: opts.data.email,
        address: opts.data.address,
        createTime: '@now'
    });

    return {
        code: SUCCESS_CODE,
        message: SUCCESS_MSG
    };
});

/** 修改 */
Mock.mock(`${MOCK_PATH}/modify`, 'post', opts => {
    dataList.forEach(info => {
        if (info.id === opts.data.id) {
            info.name = opts.data.name;
            info.phone = opts.data.phone;
            info.email = opts.data.email;
            info.address = opts.data.address;
        }
    });

    return {
        code: SUCCESS_CODE,
        message: SUCCESS_MSG
    };
});
