import { menu } from '@/mock/menu';
import { dynamicMock } from '@/mock/mockRequest';
import { API_SYS_USER } from '@/config/apiTypes';

function mockTemplate({ mockRequest, Random }, size = 1) {
    let colors =
        "['#e70012','#231816','#284096','#ec6c00','#004098','#01b0ff','#5aa700','#fe3c00','#5375a5','#00873f','#0078d7','#0e3383','#3673b2']";

    return mockRequest({
        [`items|${size}`]: [
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
                    return Random.image(
                        '64x64',
                        this.background,
                        '#ffffff',
                        this.user_name.substring(0, 1),
                    );
                },
                roles: "@pick(['普通用户', '系统管理员'])",
                level_vip:
                    "@pick(['铜牌会员', '银牌会员', '金牌会员', '钻石会员', '至尊会员'])",
                birthday: '@date',
                last_login_time: '@datetime',
                ip: '@ip',
                create_time: '@now',
            },
        ],
    });
}

dynamicMock([
    {
        url: `${API_SYS_USER}/list`,
        callback: ({ options, mockRequest, Random }) => {
            let size = parseInt(options.pageSize) || 20;

            const { items } = mockTemplate({ mockRequest, Random });

            return {
                num: items.length,
                size,
                total: Random.natual(),
                items,
            };
        },
    },
    {
        url: `${API_SYS_USER}/modify`,
    },
    {
        url: `${API_SYS_USER}/remove`,
    },
    {
        url: `${API_SYS_USER}/add`,
    },
    {
        url: `${API_SYS_USER}/login`,
        callback: ({ Random }) => {
            return {
                access_token: Random.natural(),
                roles: [1],
                expires_in: 7200,
            };
        },
    },
    {
        url: `${API_SYS_USER}/logout`,
    },
    {
        url: `${API_SYS_USER}/getInfo`,
        method: 'get',
        callback: ({ mockRequest, Random }) => {
            let { items } = mockTemplate({ mockRequest, Random }, 1);
            items.roles = [...items.roles];
            return items;
        },
    },
    {
        url: `${API_SYS_USER}/getMenu`,
        callback: () => {
            return {
                routes: menu,
            };
        },
    },
]);
