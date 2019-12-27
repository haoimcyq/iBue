import { mockRequest, Random } from '@/mock/mockRequest';
import { API_SYS_ROLE } from '@/config/apiTypes';

function generateList(len = 1) {
    let colors = "['#e70012','#231816','#284096','#ec6c00','#004098','#01b0ff','#5aa700','#fe3c00','#5375a5','#00873f','#0078d7','#0e3383','#3673b2']";

    return mockRequest({
        [`data|${len}`]: [
            {
                id: '@id',
                user_id: '@id',
                user_name: '@cname',
                login_name: '@name',
                phone: /^1[3-9]\*\*\*\*\*\d{4}$/,
                email: '@email',
                address: '@county(true)',
                zip: '@zip',
                background: `@pick(${colors})`,
                avatar: function() {
                    return Random.image('64x64', this.background, '#ffffff', this.user_name.substring(0, 1))
                },
                role: "@pick(['普通用户', '系统管理员'])",
                level_vip: "@pick(['铜牌会员', '银牌会员', '金牌会员', '钻石会员', '至尊会员'])",
                birthday: '@date',
                last_login_time: '@datetime',
                ip: '@ip',
                create_time: '@now',
            }
        ]
    })
}

mockRequest(`${API_SYS_ROLE}/list`, 'post', opts => {
    let pageSize = parseInt(opts.pageSize) || 20,
        currentPage = parseInt(opts.currentPage) || 1,
        total = 1000000;

    let data = generateList(pageSize);

    return Object.assign({
        pageSize,
        currentPage,
        total
    }, data)
});

// 删除用户
mockRequest(`${API_SYS_ROLE}/remove`, 'post', opts => {
    return {
        //
    };
});

/** 新增 */
mockRequest(`${API_SYS_ROLE}/add`, 'post', opts => {

    return {

    };
});

/** 修改 */
mockRequest(`${API_SYS_ROLE}/modify`, 'post', opts => {

    return {};
});
