import { mockRequest } from '@/mock/mockRequest';
import { API_WORK_MEETING } from '@/config/apiTypes';

function generateList(len = 1) {

    let data = mockRequest({
        [`items|${len}`]: [
            {
                id: '@id',
                meeting_title: '@cword(10,20)',
                meeting_address: '@county',
                meeting_time: '@datetime 至 @datetime',
                meeting_content: '@cword(30,100)',
                meeting_unit: '@cword(6,10)',
                meeting_relative: '@cname',
                meeting_phone: /^1[3-9]\*\*\*\*\*\d{4}$/,
                meeting_joiner: '@cname',
                meeting_level: '@integer(1, 6)',
                files: '',
                create_time: '@now',
            }
        ]
    });
    return {
        items: data.items,
        num: data.items.length,
    };
}

mockRequest(`${API_WORK_MEETING}/list`, 'post', opts => {
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
mockRequest(`${API_WORK_MEETING}/getInfo`, 'get', opts => {

    return generateList()
});

// 删除用户
mockRequest(`${API_WORK_MEETING}/remove`, 'post', opts => {
    return {
        //
    };
});

/** 新增 */
mockRequest(`${API_WORK_MEETING}/add`, 'post', opts => {

    return {

    };
});

/** 修改 */
mockRequest(`${API_WORK_MEETING}/modify`, 'post', opts => {

    return {};
});
