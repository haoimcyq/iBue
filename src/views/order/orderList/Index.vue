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
                @fetch-data="fetchData"
            >
                <header slot="header">
                    <section class="ibue-mb-24">
                        <el-radio-group v-model="order_status" size="medium">
                            <el-radio-button label="已付款"></el-radio-button>
                            <el-radio-button label="已取消"></el-radio-button>
                            <el-radio-button label="未付款"></el-radio-button>
                            <el-radio-button label="已发货"></el-radio-button>
                            <el-radio-button label="交易成功"></el-radio-button>
                            <el-radio-button label="交易关闭"></el-radio-button>
                        </el-radio-group>
                    </section>
                </header>
            </ibue-crud>
        </ibue-card>
    </section>
</template>

<script>
import {
    columns,
    options,
    pagination,
    searchForm,
    submitForm,
} from '@/models/order/orderList';
import OrderListService from '@/api/order/orderList';

export default {
    name: 'OrderList',
    data() {
        return {
            loading: true,
            columns,
            options,
            pagination,
            searchForm,
            submitForm,
            tableData: [],
            order_status: '已付款',
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData(pagination) {
            this.loading = true;
            OrderListService.list(pagination).then(response => {
                const { status, result } = response.data;

                if (status === 'OK') {
                    this.tableData = result.items;
                    this.pagination.total = result.total;
                }

                this.loading = false;
            });
        },
        handleSearch(data) {
            this.pagination = {
                pageSize: 20,
                currentPage: 1,
                total: 0,
            };
            this.tableData = [];
            this.fetchData(this.pagination, data);
        },
        handleSubmit(data, closeDialog) {
            closeDialog();
            this.$message({
                type: 'success',
                message: '成功修改!',
            });
        },
    },
};
</script>
