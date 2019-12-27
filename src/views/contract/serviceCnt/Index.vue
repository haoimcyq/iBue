<template>
    <section>
        <ibue-card>
            <ibue-crud
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
            </ibue-crud>
        </ibue-card>
    </section>
</template>

<script>
    import { columns, options, pagination, searchForm, submitForm } from '@/models/work/employee';
    import employeeService from '@/api/work/employee';

    export default {
        name: 'Employee',
        data() {
            return {
                loading: true,
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
                employeeService.list(Object.assign({}, pagination, params)).then(response => {
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
            }
        }
    };
</script>
