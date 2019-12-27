import { mockRequest } from '@/mock/mockRequest';
import { API_WORK_TODO_LIST } from '@/config/apiTypes';

function generateList(len = 1) {

    let data = mockRequest({
        [`items|${len}`]: [
            {
                id: '@id',
                delivery_people: '@cname',
                delivery_time: '@datetime',
                plan_finish_time: '@datetime',
                total_hours: '@integer(24, 200)',
                work_content: '@cword(10,30)',
                work_progress: '@integer(0, 100)',
                report_people: '@cname',
                report_time: '@datetime',
                work_level: '@integer(1, 6)',
                create_time: '@now',
            }
        ]
    });
    return {
        items: data.items,
        num: data.items.length,
    };
}

mockRequest(`${API_WORK_TODO_LIST}/list`, 'post', opts => {
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
mockRequest(`${API_WORK_TODO_LIST}/getInfo`, 'get', opts => {

    return generateList()
});

// 删除用户
mockRequest(`${API_WORK_TODO_LIST}/remove`, 'post', opts => {
    return {
        //
    };
});

/** 新增 */
mockRequest(`${API_WORK_TODO_LIST}/add`, 'post', opts => {

    return {

    };
});

/** 修改 */
mockRequest(`${API_WORK_TODO_LIST}/modify`, 'post', opts => {

    return {};
});
