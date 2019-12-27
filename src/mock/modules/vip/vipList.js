import { mockRequest, Random } from '@/mock/mockRequest';
import { menu } from '@/mock/menu';
import { API_VIP_LIST } from '@/config/apiTypes';

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
                grade: '@integer(1, 5)',
                badge: function() {
                    return Random.image('50x20', '#fbd74f', '#9e7211', 'LV' + this.grade)
                },
                points: '@integer(1000, 20000)',
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

mockRequest(`${API_VIP_LIST}/list`, 'post', opts => {
    let pageSize = parseInt(opts.pageSize) || 20,
        currentPage = parseInt(opts.currentPage) || 1,
        total = 137668449;

    let data = generateList(pageSize);

    return Object.assign({
        pageSize,
        currentPage,
        total
    }, data)
});

/** 获取信息 */
mockRequest(`${API_VIP_LIST}/getInfo`, 'get', opts => {

    return generateList()
});

/** 获取菜单 */
mockRequest(`${API_VIP_LIST}/getMenu`, 'get', opts => {
    return {
        data: menu
    }
});

// 删除用户
mockRequest(`${API_VIP_LIST}/remove`, 'post', opts => {
    return {
        //
    };
});

/** 新增 */
mockRequest(`${API_VIP_LIST}/add`, 'post', opts => {

    return {

    };
});

/** 修改 */
mockRequest(`${API_VIP_LIST}/modify`, 'post', opts => {

    return {};
});
