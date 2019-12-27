<template>
    <section>
        <ibue-card>
            <ibue-crud
                    ref="ibueCrud"
                    :loading="loading"
                    :columns="columns"
                    :options="options"
                    :data="tableData"
                    :pagination="pagination"
                    :search-form="searchForm"
                    :submit-form="submitForm"
                    @search="handleSearch"
                    @submit="handleSubmit"
                    @fetch-data="fetchData">
                <header slot="header">
                    <el-button type="primary" size="small" @click="handleAdd">新增</el-button>
                    <el-button size="small" @click="handleExport">导出</el-button>
                </header>
            </ibue-crud>
        </ibue-card>
    </section>
</template>

<script>
    import { columns, options, pagination, searchForm, submitForm } from '@/models/vip/vipRules';
    import vipFileService from '@/api/vip/vipFile';

    export default {
        name: 'VipFile',
        data() {
            return {
                loading: false,
                columns,
                options,
                pagination,
                searchForm,
                submitForm,
                tableData: []
            };
        },
        created() {
            this.fetchData()
        },
        methods: {
            fetchData(pagination, params) {
                this.loading = true;
                vipFileService.list(Object.assign({}, pagination, params)).then(response => {
                    const { code, data, total } = response.data;

                    if (code === 0) {
                        this.tableData = data;
                        this.pagination.total = total;
                    }

                    this.loading = false;
                });
            },
            handleSearch(data) {
                this.pagination = {
                    pageSize: 20,
                    currentPage: 1,
                    total: 0
                };
                this.tableData = [];
                this.fetchData(this.pagination, data);
            },
            handleSubmit(data, closeDialog) {
                closeDialog();
                this.$message({
                    type: 'success',
                    message: '成功修改!'
                });
            },
            handleExport() {
                this.$refs.ibueCrud.handleExport()
            },
            handleAdd() {
                this.$refs.ibueCrud.openDialog();
            }
        }
    };
</script>
