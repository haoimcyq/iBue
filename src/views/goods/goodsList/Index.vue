<template>
    <section>
        <el-row :gutter="16">
            <el-col v-for="(item, index) in goodsData" :key="index" :sm="12" :md="6">
                <ibue-card class="ibue-product-card ibue-mb-16">
                    <div class="media">
                        <img :src="item.image" :alt="item.title" draggable="false">
                    </div>
                    <div>
                        <h4 class="ibue-text-overflow ibue-mt-16">{{ item.title }}</h4>
                        <p>{{ item.content }}</p>
                    </div>
                    <div>
                        <h4 class="ibue-text-danger">${{ item.price }}</h4>
                    </div>
                    <div>
                        <div>
                            <el-rate
                                    v-model="item.rate"
                                    disabled
                                    show-score
                                    text-color="#ff9900"
                                    score-template="{value}"
                            >
                            </el-rate>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </ibue-card>
            </el-col>
        </el-row>
        <div class="ibue-flex ibue-justify-content-end">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[20, 30, 40, 50]"
                    :page-size="20"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total">
            </el-pagination>
        </div>
    </section>
</template>

<script>
    import GoodsList from '@/api/goods/goodsList';

    export default {
        name: "Index",
        data() {
            return {
                value: 20,
                goodsData: [],
                currentPage: 1,
                pageSize: 20,
                total: 0
            }
        },
        created() {
            this.fetchData()
        },
        methods: {
            fetchData() {
                GoodsList.list({
                    currentPage: this.currentPage,
                    pageSize: this.pageSize
                }).then(response => {
                    const { code, data } = response.data;

                    if (code === 0) {
                        this.goodsData = data;
                        this.total = response.data.total;
                    }
                })
            },
            handleSizeChange(val) {
                this.pageSize = val
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.fetchData()
            },
        }
    }
</script>

<style lang="scss" scoped>
    .ibue-product-card {
        //
        .media {
            width: 100%;
            min-height: 120px;

            img {
                display: block;
                width: 100%;
                object-fit: cover;
            }
        }
    }
</style>
