export const menu = [
    {
        path: '/work',
        component: 'Layout',
        name: 'work',
        meta: {
            title: '行政办公',
            icon: 'icon-function',
            keepAlive: false,
        },
        children: [
            {
                path: 'todoList',
                component: 'work/todoList/Index',
                name: 'todoList',
                meta: {
                    title: '待办清单',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'dailyTask',
                component: 'work/dailyTask/Index',
                name: 'dailyTask',
                meta: {
                    title: '日常任务',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'meeting',
                component: 'work/meeting/Index',
                name: 'meeting',
                meta: {
                    title: '会议安排',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'employee',
                component: 'work/employee/Index',
                name: 'employee',
                meta: {
                    title: '员工管理',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'perform',
                component: 'work/perform/Index',
                name: 'perform',
                meta: {
                    title: '绩效考勤',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'mailBook',
                component: 'work/mailBook/Index',
                name: 'mailBook',
                meta: {
                    title: '通讯录',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
        ],
    },
    {
        path: '/goods',
        component: 'Layout',
        name: 'goods',
        meta: {
            title: '商品管理',
            icon: 'icon-goods',
            keepAlive: false,
        },
        children: [
            {
                path: 'goodsList',
                component: 'goods/goodsList/Index',
                name: 'goodsList',
                meta: {
                    title: '商品列表',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'goodsAdd',
                component: 'goods/goodsAdd/Index',
                name: 'goodsAdd',
                meta: {
                    title: '商品添加',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'category',
                component: 'goods/category/Index',
                name: 'category',
                meta: {
                    title: '分类管理',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
        ],
    },
    {
        path: '/order',
        component: 'Layout',
        name: 'order',
        meta: {
            title: '订单管理',
            icon: 'icon-dingdan',
            keepAlive: false,
        },
        children: [
            {
                path: 'orderList',
                component: 'order/orderList/Index',
                name: 'orderList',
                meta: {
                    title: '订单列表',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
        ],
    },
    {
        path: '/stock',
        component: 'Layout',
        name: 'stock',
        meta: {
            title: '库存管理',
            icon: 'icon-stock',
            keepAlive: false,
        },
        children: [
            {
                path: 'stockIn',
                component: 'stock/stockIn/Index',
                name: 'stockIn',
                meta: {
                    title: '入库管理',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'stockOut',
                component: 'stock/stockOut/Index',
                name: 'stockOut',
                meta: {
                    title: '出库管理',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'stockBegin',
                component: 'stock/stockBegin/Index',
                name: 'stockBegin',
                meta: {
                    title: '库存期初',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'quality',
                component: 'stock/quality/Index',
                name: 'quality',
                meta: {
                    title: '质检管理',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'supplyChain',
                component: 'stock/supplyChain/Index',
                name: 'supplyChain',
                meta: {
                    title: '供应链管理',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'stockEnd',
                component: 'stock/stockEnd/Index',
                name: 'stockEnd',
                meta: {
                    title: '期末盘点',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'stockRept',
                component: 'stock/stockRept/Index',
                name: 'stockRept',
                meta: {
                    title: '库存报表',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
        ],
    },
    {
        path: '/market',
        component: 'Layout',
        name: 'market',
        meta: {
            title: '供销管理',
            icon: 'icon-version',
            keepAlive: false,
        },
        children: [
            {
                path: 'marketList',
                component: 'market/marketList/Index',
                name: 'marketList',
                meta: {
                    title: '供销列表',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
        ],
    },
    {
        path: '/vip',
        component: 'Layout',
        name: 'vip',
        meta: {
            title: '会员管理',
            icon: 'icon-friend',
            keepAlive: false,
        },
        children: [
            {
                path: 'vipFile',
                component: 'vip/vipFile/Index',
                name: 'vipFile',
                meta: {
                    title: '会员档案',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'vipGp',
                component: 'vip/vipGp/Index',
                name: 'vipGp',
                meta: {
                    title: '会员分组',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'vipRules',
                component: 'vip/vipRules/Index',
                name: 'vipRules',
                meta: {
                    title: '会员规则',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
        ],
    },
    {
        path: '/finance',
        component: 'Layout',
        name: 'finance',
        meta: {
            title: '财务管理',
            icon: 'icon-moneybag',
            keepAlive: false,
        },
        children: [
            {
                path: 'reimburse',
                component: 'finance/reimburse/Index',
                name: 'reimburse',
                meta: {
                    title: '费用报销',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'invoice',
                component: 'finance/invoice/Index',
                name: 'invoice',
                meta: {
                    title: '发票管理',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'payment',
                component: 'finance/payment/Index',
                name: 'payment',
                meta: {
                    title: '付款管理',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'collection',
                component: 'finance/collection/Index',
                name: 'collection',
                meta: {
                    title: '收款管理',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'fund',
                component: 'finance/fund/Index',
                name: 'fund',
                meta: {
                    title: '资金管理',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'financeRept',
                component: 'finance/financeRept/Index',
                name: 'financeRept',
                meta: {
                    title: '财务报表',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
        ],
    },
    {
        path: '/customer',
        component: 'Layout',
        name: 'customer',
        meta: {
            title: '客户管理',
            icon: 'icon-people',
            keepAlive: false,
        },
        children: [
            {
                path: 'customerFile',
                component: 'customer/customerFile/Index',
                name: 'customerFile',
                meta: {
                    title: '客户档案',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'customerAdd',
                component: 'customer/customerAdd/Index',
                name: 'customerAdd',
                meta: {
                    title: '客户新建',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'complaints',
                component: 'customer/complaints/Index',
                name: 'complaints',
                meta: {
                    title: '客户投诉',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
        ],
    },
    {
        path: '/contract',
        component: 'Layout',
        name: 'contract',
        meta: {
            title: '合同管理',
            icon: 'icon-hetong',
            keepAlive: false,
        },
        children: [
            {
                path: 'incomeCnt',
                component: 'contract/incomeCnt/Index',
                name: 'incomeCnt',
                meta: {
                    title: '收入合同',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'serviceCnt',
                component: 'contract/serviceCnt/Index',
                name: 'serviceCnt',
                meta: {
                    title: '劳务合同',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'materialCnt',
                component: 'contract/materialCnt/Index',
                name: 'materialCnt',
                meta: {
                    title: '材料合同',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'cntRept',
                component: 'contract/cntRept/Index',
                name: 'cntRept',
                meta: {
                    title: '合同报表',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
        ],
    },
    {
        path: '/report',
        component: 'Layout',
        name: 'report',
        meta: {
            title: '报表统计',
            icon: 'icon-bar',
            keepAlive: false,
        },
        children: [
            {
                path: 'reptAnalyse',
                component: 'report/reptAnalyse/Index',
                name: 'reptAnalyse',
                meta: {
                    title: '报表分析',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
        ],
    },
    {
        path: '/spread',
        component: 'Layout',
        name: 'spread',
        meta: {
            title: '推广管理',
            icon: 'icon-send',
            keepAlive: false,
        },
        children: [
            {
                path: 'spdPlan',
                component: 'spread/spdPlan/Index',
                name: 'spdPlan',
                meta: {
                    title: '推广计划',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
        ],
    },
    {
        path: '/product',
        component: 'Layout',
        name: 'product',
        meta: {
            title: '生产管理',
            icon: 'icon-product',
            keepAlive: false,
        },
        children: [
            {
                path: 'bom',
                component: 'product/bom/Index',
                name: 'bom',
                meta: {
                    title: '物料清单',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'prtPlan',
                component: 'product/prtPlan/Index',
                name: 'prtPlan',
                meta: {
                    title: '生产计划',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'process',
                component: 'product/process/Index',
                name: 'process',
                meta: {
                    title: '流程管理',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'prtQuery',
                component: 'product/prtQuery/Index',
                name: 'prtQuery',
                meta: {
                    title: '生产查询',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'prtFile',
                component: 'product/prtFile/Index',
                name: 'prtFile',
                meta: {
                    title: '生产档案',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
        ],
    },
    {
        path: '/project',
        component: 'Layout',
        name: 'project',
        meta: {
            title: '项目管理',
            icon: 'icon-list',
            keepAlive: false,
        },
        children: [
            {
                path: 'projList',
                component: 'project/projList/Index',
                name: 'projList',
                meta: {
                    title: '项目列表',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
        ],
    },
    {
        path: '/system',
        redirect: '',
        component: 'Layout',
        name: 'system',
        meta: {
            title: '系统管理',
            icon: 'icon-system',
            keepAlive: false,
        },
        children: [
            {
                path: 'user',
                component: 'system/user/Index',
                name: 'user',
                meta: {
                    title: '用户管理',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'menu',
                component: 'system/menu/Index',
                name: 'menu',
                meta: {
                    title: '菜单管理',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'auth',
                component: 'system/auth/Index',
                name: 'auth',
                meta: {
                    title: '权限管理',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'role',
                component: 'system/role/Index',
                name: 'role',
                meta: {
                    title: '角色管理',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'dept',
                component: 'system/dept/Index',
                name: 'dept',
                meta: {
                    title: '部门管理',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'log',
                component: 'system/log/Index',
                name: 'log',
                meta: {
                    title: '日志管理',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'dict',
                component: 'system/dict/Index',
                name: 'dict',
                meta: {
                    title: '字典管理',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
            {
                path: 'watch',
                component: 'system/watch/Index',
                name: 'watch',
                meta: {
                    title: '系统监控',
                    icon: '',
                    keepAlive: false,
                },
                children: [],
            },
        ],
    },
];
