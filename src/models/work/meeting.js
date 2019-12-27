/** 表格列的配置描述 */
export const columns = [
    {
        type: 'index',
        sortable: true
    },
    {
        prop: 'meeting_title',
        label: '会议标题',
        width: 240,
        sortable: true
    },
    {
        prop: 'meeting_address',
        label: '会议地点',
        width: 120,
        sortable: true
    },
    {
        prop: 'meeting_time',
        label: '会议时间',
        width: 320,
        sortable: true
    },
    {
        prop: 'meeting_content',
        label: '会议内容',
        width: 400,
        sortable: true
    },
    {
        prop: 'meeting_unit',
        label: '会议组织单位',
        width: 200,
        sortable: true
    },
    {
        prop: 'meeting_relative',
        width: 120,
        label: '联系人',
    },
    {
        prop: 'meeting_phone',
        label: '联系电话',
        width: 180,
        sortable: true
    },
    {
        prop: 'meeting_joiner',
        label: '出席人员',
        width: 180,
        sortable: true
    },
    {
        prop: 'meeting_level',
        label: '会议级别',
        width: 120,
        sortable: true
    },
    {
        prop: 'files',
        label: '附件',
        width: 120,
        sortable: true
    },
    {
        prop: 'create_time',
        label: '创建时间',
        width: 180,
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
    meeting_title: {
        title: '会议标题',
        value: ''
    },
    meeting_address: {
        title: '会议地点',
        value: ''
    },
    meeting_level: {
        title: '会议级别',
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
    meeting_time: {
        title: '会议时间',
        value: '',
        type: 'daterange'
    },
    meeting_unit: {
        title: '会议组织单位',
        value: '',
    },
    meeting_relative: {
        title: '联系人',
        value: ''
    },
    meeting_phone: {
        title: '联系电话',
        value: ''
    },
    meeting_joiner: {
        title: '出席人员',
        value: ''
    },
};

export const submitForm = {
    meeting_title: {
        title: '会议标题',
        value: ''
    },
    meeting_address: {
        title: '会议地点',
        value: ''
    },
    meeting_level: {
        title: '会议级别',
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
    meeting_time: {
        title: '会议时间',
        value: '',
        type: 'daterange'
    },
    meeting_unit: {
        title: '会议组织单位',
        value: '',
    },
    meeting_relative: {
        title: '联系人',
        value: ''
    },
    meeting_phone: {
        title: '联系电话',
        value: ''
    },
    meeting_joiner: {
        title: '出席人员',
        value: ''
    },
    meeting_content: {
        title: '会议内容',
        value: '',
        type: 'textarea'
    },
};
