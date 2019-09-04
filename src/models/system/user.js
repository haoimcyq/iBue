/** 表格列的配置描述 */
export const columns = [
    {
        prop: 'avatar',
        label: '头像',
        options: {
            width: 100
        },
        render: (h, params) => {
            return h('el-avatar', {
                props: {
                    src: params.row.avatar
                }
            });
        }
    },
    {
        prop: 'userName',
        label: '用户名'
    },
    {
        prop: 'email',
        label: '邮箱'
    },
    {
        prop: 'phone',
        label: '手机号码'
    },
    {
        prop: 'address',
        label: '地址'
    },
    {
        prop: 'createTime',
        label: '创建时间'
    },
    {
        prop: 'action',
        label: '操作',
        render: (h, params) => {
            return h('div', [
                h('el-button', {
                    props: {
                        type: 'default',
                        size: 'small'
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
                        size: 'small'
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
                        size: 'small'
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
    showToolbar: false
};

/** 分页 */
export const pagination = {
    pageSize: 10,
    currentPage: 1,
    total: 100
};

export default {
    
    addForm: {
        models: {
            name: {
                type: 'input',
                options: {
                    label: 'name',
                    value: 'hello world'
                }
            },
            age: {
                type: 'input',
                options: {
                    label: 'age',
                    value: 'hello world'
                }
            }
        }
    },
    editForm: {
        models: {
            name: {
                type: 'input',
                options: {
                    label: 'name',
                    value: 'hello world'
                }
            },
            age: {
                type: 'input',
                options: {
                    label: 'age',
                    value: 'hello world'
                }
            }
        }
    },
    search: {
        models: {}
    }
};
