/** 表格列的配置描述 */
export const columns = [
    {
        type: 'index',
        sortable: true
    },
    {
        prop: 'delivery_people',
        label: '任务下达人',
        width: 120,
        sortable: true
    },
    {
        prop: 'report_people',
        label: '填报人',
        width: 120,
        sortable: true
    },
    {
        prop: 'delivery_time',
        label: '下达时间',
        width: 170,
        sortable: true
    },
    {
        prop: 'work_content',
        label: '工作内容',
        width: 300
    },
    {
        prop: 'plan_finish_time',
        label: '计划完成时间',
        width: 170,
        sortable: true
    },
    {
        prop: 'total_hours',
        label: '折合工时',
        'min-width': 120,
        'show-overflow-tooltip': true,
        sortable: true
    },
    {
        prop: 'work_progress',
        label: '工作进度',
        width: 220,
        sortable: true,
        render: (h, params, ctx) => {
            return h('el-progress', {
                props: {
                    percentage: params.row.work_progress,
                    'text-inside': false,
                    'stroke-width': 8
                },
            }, '')
        }
    },
    {
        prop: 'report_time',
        label: '填报时间',
        width: 170,
        'show-overflow-tooltip': true,
        sortable: true
    },
    {
        prop: 'work_level',
        label: '工作级别',
        width: 120,
        'show-overflow-tooltip': true,
        sortable: true
    },
    {
        prop: 'create_time',
        label: '创建时间',
        'min-width': 120,
        'show-overflow-tooltip': true,
        sortable: true
    },
    {
        prop: 'action',
        label: '操作',
        width: 200,
        fixed: 'right',
        align: 'right',
        render: (h, params, ctx) => {
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
                            ctx.injections.ibueCrud.openDialog(params.row);
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
                            ctx.injections.ibueCrud.openDialog(params.row);
                        }
                    }
                }, '填报')
            ]);
        }
    }
];

/** 表格参数 */
export const options = {
    showSearch: false,
    showToolbar: false,
    tooltipEffect: 'dark',
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
