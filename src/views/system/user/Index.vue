<template>
    <section>
        <ibue-crud :columns="columns" :options="options" :data="tableData" :pagination="pagination" @fetch-data="fetchData"></ibue-crud>
    </section>
</template>

<script>
import { columns, options, pagination } from '@/models/system/user';
import User from '@/api/system/user';

export default {
    name: 'User',
    data() {
        return {
            columns,
            options,
            pagination,
            tableData: []
        };
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            User.list().then(response => {
                const { code, data } = response.data;

                if (code === 0) {
                    this.tableData = data;
                }
            })
        },
        fetchData(val) {

        }
    }
};
</script>

<style scoped></style>
