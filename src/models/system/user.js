/** 表格列的配置描述 */
export const columns = [
    {
        type: 'selection'
    },
    {
        prop: 'avatar',
        label: '头像',
        width: 80,
        render: (h, params) => {
            return h('el-avatar', {
                props: {
                    src: params.row.avatar,
                    fit: 'fit'
                }
            });
        }
    },
    {
        prop: 'user_name',
        width: 120,
        label: '用户名',
        sortable: true
    },
    {
        prop: 'login_name',
        width: 130,
        label: '登录名',
        'show-overflow-tooltip': true,
        sortable: true
    },
    {
        prop: 'dept',
        width: 130,
        label: '所属部门',
        'show-overflow-tooltip': true,
        sortable: true
    },
    {
        prop: 'roles',
        width: 120,
        label: '角色',
        sortable: true
    },
    {
        prop: 'post',
        width: 120,
        label: '岗位',
        sortable: true
    },
    {
        prop: 'email',
        label: '邮箱',
        width: 180,
        'show-overflow-tooltip': true,
        sortable: true
    },
    {
        prop: 'phone',
        label: '手机号码',
        width: 130,
        'show-overflow-tooltip': true,
        sortable: true
    },
    {
        prop: 'address',
        label: '地址',
        width: 200,
        'show-overflow-tooltip': true,
        sortable: true
    },
    {
        prop: 'zip',
        label: '邮编',
        width: 120,
        'show-overflow-tooltip': true,
        sortable: true
    },
    {
        prop: 'last_login_time',
        label: '上次登录',
        width: 160,
        'show-overflow-tooltip': true,
        sortable: true
    },
    {
        prop: 'ip',
        label: 'IP',
        width: 140,
        'show-overflow-tooltip': true,
        sortable: true
    },
    {
        prop: 'status',
        label: '状态',
        width: 140,
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
