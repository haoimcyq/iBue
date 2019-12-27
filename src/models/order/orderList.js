/** 表格列的配置描述 */
export const columns = [
    {
        type: 'selection'
    },
    {
        prop: 'order_id',
        label: '订单编号',
        width: 160,
        sortable: true
    },
    {
        prop: 'user_name',
        label: '用户名',
        width: 120,
        sortable: true
    },
    {
        prop: 'title',
        label: '商品名称',
        width: 170,
        sortable: true
    },
    {
        prop: 'price',
        label: '单件商品金额',
        width: 140,
        align: 'right',
        sortable: true
    },
    {
        prop: 'quantity',
        label: '商品数量',
        width: 140,
        align: 'right',
        sortable: true
    },
    {
        prop: 'total_price',
        label: '商品总价',
        width: 140,
        align: 'right',
        sortable: true
    },
    {
        prop: 'payment',
        label: '实付金额',
        width: 140,
        align: 'right',
        sortable: true
    },
    {
        prop: 'payment_time',
        label: '支付时间',
        width: 160,
        sortable: true
    },
    {
        prop: 'postage',
        label: '运费',
        width: 140,
        align: 'right',
        sortable: true
    },
    {
        prop: 'order_user_name',
        label: '收货人',
        width: 140,
        sortable: true
    },
    {
        prop: 'order_phone',
        label: '联系电话',
        width: 140,
        sortable: true
    },
    {
        prop: 'order_address',
        label: '收货地址',
        width: 180,
        sortable: true
    },
    {
        prop: 'order_express',
        label: '快递方式',
        width: 140,
        sortable: true
    },
    {
        prop: 'order_invoice_name',
        label: '发票抬头',
        width: 160,
        sortable: true
    },
    {
        prop: 'order_invoice_definite',
        label: '发票明细',
        width: 160,
        sortable: true
    },
    {
        prop: 'order_invoice_type',
        label: '发票类型',
        width: 140,
        sortable: true
    },
    {
        prop: 'payment_type',
        label: '支付方式',
        width: 140,
        sortable: true
    },
    {
        prop: 'order_express_info',
        label: '物流信息',
        width: 140,
        sortable: true
    },
    {
        prop: 'order_status',
        label: '订单状态',
        width: 140,
        sortable: true
    },
    {
        prop: 'send_time',
        label: '发货时间',
        width: 170,
        sortable: true
    },
    {
        prop: 'close_time',
        label: '交易关闭时间',
        width: 170,
        sortable: true
    },
    {
        prop: 'end_time',
        label: '交易完成时间',
        width: 170,
        sortable: true
    },
    {
        prop: 'order_remark',
        label: '备注',
        width: 200,
        sortable: true
    },
    {
        prop: 'create_time',
        label: '创建时间',
        width: 180,
        'show-overflow-tooltip': true,
        sortable: true
    },
    {
        prop: 'action',
        label: '操作',
        width: 270,
        fixed: 'right',
        align: 'right',
        render: (h, params) => {
            return h('div', [
                h('el-button', {
                    props: {
                        type: 'default',
                        size: 'small',
                        icon: 'el-icon-view'
                    },
                    style: {
                        marginRight: '5px'
                    },
                    on: {
                        click: () => {
                            this.show(params.index)
                        }
                    }
                }, '查看'),
                h('el-button', {
                    props: {
                        type: 'primary',
                        size: 'small',
                        icon: 'el-icon-edit'
                    },
                    style: {
                        marginRight: '5px'
                    },
                    on: {
                        click: () => {
                            this.show(params.index)
                        }
                    }
                }, '编辑'),
                h('el-button', {
                    props: {
                        type: 'danger',
                        size: 'small',
                        icon: 'el-icon-delete'
                    },
                    on: {
                        click: () => {
                            this.remove(params.index)
                        }
                    }
                }, '删除')
            ]);
        }
    }
];

/** 表格参数 */
export const options = {
    showSearch: false,
    showToolbar: false,
    'tooltip-effect': 'dark',
    stripe: true
};

/** 分页 */
export const pagination = {
    pageSize: 20,
    currentPage: 1,
    total: 0
};

export const searchForm = {
    delivery_people: {
        title: '任务下达人',
        value: ''
    },
    report_people: {
        title: '填报人',
        value: ''
    },
    work_level: {
        title: '工作级别',
        value: '一级',
        type: 'select',
        data: [
            { label: '一级', value: '一级' },
            { label: '二级', value: '二级' },
            { label: '三级', value: '三级' },
            { label: '四级', value: '四级' },
            { label: '五级', value: '五级' },
            { label: '六级', value: '六级' },
        ]
    },
    report_time: {
        title: '填报时间',
        value: '',
        type: 'date'
    },
    plan_finish_time: {
        title: '计划完成时间',
        value: '',
        type: 'date'
    },
    total_hours: {
        title: '折合工时',
        value: ''
    },
    work_progress: {
        title: '工作进度',
        value: ''
    },
};

export const submitForm = {
    delivery_people: {
        title: '任务下达人',
        value: ''
    },
    report_people: {
        title: '填报人',
        value: ''
    },
    work_level: {
        title: '工作级别',
        value: '一级',
        type: 'select',
        data: [
            { label: '一级', value: '一级' },
            { label: '二级', value: '二级' },
            { label: '三级', value: '三级' },
            { label: '四级', value: '四级' },
            { label: '五级', value: '五级' },
            { label: '六级', value: '六级' },
        ]
    },
    report_time: {
        title: '填报时间',
        value: '',
        type: 'date'
    },
    plan_finish_time: {
        title: '计划完成时间',
        value: '',
        type: 'date'
    },
    total_hours: {
        title: '折合工时',
        value: ''
    },
    work_progress: {
        title: '工作进度',
        value: ''
    },
};
