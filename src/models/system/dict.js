/** 表格列的配置描述 */
export const columns = [
    {
        type: 'selection'
    },
    {
        prop: 'user_name',
        label: '字典主键',
        sortable: true
    },
    {
        prop: 'user_name',
        label: '字典名称',
        sortable: true
    },
    {
        prop: 'user_name',
        label: '字典类型',
        sortable: true
    },
    {
        prop: 'login_name',
        label: '类型编码',
        'show-overflow-tooltip': true,
        sortable: true
    },
    {
        prop: 'role',
        label: '字典描述',
        sortable: true
    },
    {
        prop: 'work',
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
        width: 270,
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
                }, '填报'),
                h('el-button', {
                    props: {
                        type: 'danger',
                        size: 'small',
                        icon: 'el-icon-delete'
                    },
                    on: {
                        click: () => {
                            const self = ctx.injections.ibueCrud;

                            self.handleDelete((tips) => {
                                tips({
                                    type: 'success',
                                    message: `ID: ${params.row.id} 的记录已成功删除!`
                                })
                            });
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
