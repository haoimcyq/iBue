import { mockRequest } from '@/mock/mockRequest';
import { API_WORK_EMPLOYEE } from '@/config/apiTypes';

function generateList(len = 1) {

    return mockRequest({
        [`data|${len}`]: [
            {
                id: '@id',
                user_number: '@id',
                user_name: '@cname',
                depart: '',
                phone: '',
                email: '@email',
                salary: '@integer(3500, 45000)',
                gender: '',
                address: '@county',
                idcard_num: '@id',
                post: '',
                entry_time: '@datetime',
                expire_time: '@datetime',
                create_time: '@datetime'
            }
        ]
    })
}

mockRequest(`${API_WORK_EMPLOYEE}/list`, 'post', opts => {
    let pageSize = parseInt(opts.pageSize) || 20,
        currentPage = parseInt(opts.currentPage) || 1,
        total = 187;

    let data = generateList(pageSize);

    return Object.assign({
        pageSize,
        currentPage,
        total
    }, data)
});

/** 获取信息 */
mockRequest(`${API_WORK_EMPLOYEE}/getInfo`, 'get', opts => {

    return generateList()
});

// 删除用户
mockRequest(`${API_WORK_EMPLOYEE}/remove`, 'post', opts => {
    return {
        //
    };
});

/** 新增 */
mockRequest(`${API_WORK_EMPLOYEE}/add`, 'post', opts => {

    return {

    };
});

/** 修改 */
mockRequest(`${API_WORK_EMPLOYEE}/modify`, 'post', opts => {

    return {};
});
