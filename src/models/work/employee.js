/** 表格列的配置描述 */
export const columns = [
    {
        type: 'index',
        sortable: true
    },
    {
        prop: 'user_number',
        label: '员工编号',
        width: 160,
        sortable: true
    },
    {
        prop: 'user_name',
        label: '姓名',
        width: 100,
        sortable: true
    },
    {
        prop: 'depart',
        label: '部门',
        width: 120,
        sortable: true
    },
    {
        prop: 'phone',
        label: '手机',
        width: 160,
        sortable: true
    },
    {
        prop: 'email',
        label: '邮箱',
        width: 200,
        sortable: true
    },
    {
        prop: 'salary',
        label: '薪资',
        sortable: true
    },
    {
        prop: 'gender',
        label: '性别',
        width: 100
    },
    {
        prop: 'address',
        label: '住址',
        width: 120,
        sortable: true
    },
    {
        prop: 'idcard_num',
        label: '身份证号',
        width: 170,
        showOverflowTooltip: true,
        sortable: true
    },
    {
        prop: 'post',
        label: '岗位',
        width: 120,
        showOverflowTooltip: true,
        sortable: true
    },
    {
        prop: 'entry_time',
        label: '入职时间',
        minWidth: 160,
        showOverflowTooltip: true,
        sortable: true
    },
    {
        prop: 'expire_time',
        label: '合同到期时间',
        minWidth: 160,
        showOverflowTooltip: true,
        sortable: true
    },
    {
        prop: 'create_time',
        label: '创建时间',
        minWidth: 160,
        showOverflowTooltip: true,
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
    work_progress: {
        title: '工作进度',
        value: ''
    },
};
