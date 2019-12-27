/** 表格列的配置描述 */
export const columns = [
    {
        type: 'selection'
    },
    {
        prop: 'login_name',
        width: 130,
        label: '登录账号',
        'show-overflow-tooltip': true,
        sortable: true
    },
    {
        prop: 'dept',
        width: 130,
        label: '所属IP',
        'show-overflow-tooltip': true,
        sortable: true
    },
    {
        prop: 'zip',
        label: '操作类型',
        width: 120,
        sortable: true
    },
    {
        prop: '',
        width: 120,
        label: '运营商',
        sortable: true
    },
    {
        prop: '',
        label: '浏览器',
        width: 180,
        'show-overflow-tooltip': true,
        sortable: true
    },
    {
        prop: 'phone',
        label: '登录时长',
        width: 130,
        'show-overflow-tooltip': true,
        sortable: true
    },
    {
        prop: 'address',
        label: '登录地点',
        width: 200,
        'show-overflow-tooltip': true,
        sortable: true
    },
    {
        prop: 'create_time',
        label: '创建时间',
        width: 160,
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
    work_content: {
        title: '工作内容',
        value: '',
        type: 'textarea'
    },
};
