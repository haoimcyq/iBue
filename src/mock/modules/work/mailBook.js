import { mockRequest } from '@/mock/mockRequest';
import { API_WORK_MAILBOOK } from '@/config/apiTypes';

function generateList(len = 1) {
    let data = mockRequest({
        [`items|${len}`]: [
            {
                id: '@id',
                user_number: '@id',
                user_name: '@cname',
                depart: "@pick(['总经理办公室', '财务部', '后勤部', '保安部', '营运部', '客服部', '采购部', '技术部', '生产部', '女'])",
                phone: /^1[3-9]\*\*\*\*\*\d{4}$/,
                email: '@email',
                salary: '@integer(3500, 45000)',
                gender: "@pick(['男', '女'])",
                address: '@county',
                idcard_num: '@id',
                post: '@integer(111111, 888888)',
                entry_time: '@datetime',
                expire_time: '@datetime',
                create_time: '@datetime'
            }
        ]
    });
    return {
        items: data.items,
        num: data.items.length,
    };
}

mockRequest(`${API_WORK_MAILBOOK}/list`, 'post', opts => {
    let size = parseInt(opts.pageSize) || 20,
        page = parseInt(opts.currentPage) || 1,
        total = 1000000;

    let { items, num } = generateList(size);

    return {
        num,
        size,
        total,
        items,
    };
});

/** 获取信息 */
mockRequest(`${API_WORK_MAILBOOK}/getInfo`, 'get', opts => {

    return generateList()
});

// 删除用户
mockRequest(`${API_WORK_MAILBOOK}/remove`, 'post', opts => {
    return {
        //
    };
});

/** 新增 */
mockRequest(`${API_WORK_MAILBOOK}/add`, 'post', opts => {

    return {

    };
});

/** 修改 */
mockRequest(`${API_WORK_MAILBOOK}/modify`, 'post', opts => {

    return {};
});
