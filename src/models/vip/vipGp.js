/** 表格列的配置描述 */
export const columns = [
    {
        type: 'index',
        sortable: true
    },
    {
        prop: 'user_name',
        label: '组名',
        sortable: true
    },
    {
        prop: 'phone',
        label: '人数',
        'show-overflow-tooltip': true,
        sortable: true
    },
    {
        prop: 'level_vip',
        label: '添加时间',
        sortable: true
    },
    {
        prop: 'points',
        label: '更新时间',
        sortable: true
    },
    {
        prop: 'email',
        label: '状态',
        sortable: true
    },
    {
        prop: 'create_time',
        label: '创建时间',
        sortable: true
    },
    {
        prop: 'action',
        label: '操作',
        width: 200,
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
                }, '编辑')
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
            { label: '一级', value: 1 },
            { label: '二级', value: 2 },
            { label: '三级', value: 3 },
            { label: '四级', value: 4 },
            { label: '五级', value: 5 },
            { label: '六级', value: 6 },
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
            { label: '一级', value: 1 },
            { label: '二级', value: 2 },
            { label: '三级', value: 3 },
            { label: '四级', value: 4 },
            { label: '五级', value: 5 },
            { label: '六级', value: 6 },
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
