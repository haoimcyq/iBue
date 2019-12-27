<template>
    <section>
        <ibue-card class="ibue-mb-16">
            <el-form ref="form" :model="form" label-width="80px" class="searchForm">
                <el-row :gutter="16">
                    <el-col :md="6">
                        <el-form-item label="商品标题">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="商品价格">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="评分">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item class="ibue-action-col">
                            <el-button type="primary" @click="onSubmit">搜索</el-button>
                            <el-button>重置</el-button>
                            <el-button @click="showMore = !showMore" type="text">
                                {{ showMore ? '收起' : '展开' }}
                                <i
                                        :class="showMore ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"
                                ></i>
                            </el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
                <template v-if="showMore">
                    <el-row :gutter="16">
                        <el-col :md="6">
                            <el-form-item label="库存">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :md="6">
                            <el-form-item label="商品状态">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :md="6">
                            <el-form-item label="活动名称">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </template>
            </el-form>
        </ibue-card>
        <el-row :gutter="16">
            <el-col v-for="(item, index) in goodsData" :key="index" :sm="12" :md="6">
                <ibue-card class="ibue-product-card ibue-mb-16">
                    <div class="media">
                        <el-image :src="item.image" :alt="item.title" draggable="false" fit="fit">
                            <div slot="placeholder" class="image-slot">
                                <i class="el-icon-picture-outline"></i>
                            </div>
                        </el-image>
                    </div>
                    <div>
                        <h4 class="ibue-text-overflow ibue-mt-16">{{ item.title }}</h4>
                        <p>{{ item.details }}</p>
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
                    :current-page="pagination.currentPage"
                    :page-sizes="[20, 40, 60, 80, 100, 200]"
                    :page-size="pagination.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="pagination.total">
            </el-pagination>
        </div>
    </section>
</template>

<script>
    import goodsList from '@/api/goods/goodsList';

    export default {
        name: "Index",
        data() {
            return {
                showMore: false,
                form: {
                    name: '',
                },
                value: 20,
                goodsData: [],
                pagination: {
                    currentPage: 1,
                    pageSize: 20,
                    total: 0
                }
            }
        },
        created() {
            this.fetchData(this.pagination)
        },
        computed: {

        },
        methods: {
            fetchData(pagination) {
                goodsList.list(pagination).then(response => {
                    const { status, result } = response.data;

                    if (status === "OK") {
                        this.goodsData = result.items;
                        this.pagination.total = result.total;
                    }
                })
            },
            handleSizeChange(val) {
                this.pagination.pageSize = val;
                this.fetchData(this.pagination);
            },
            handleCurrentChange(val) {
                this.pagination.currentPage = val;
                this.fetchData(this.pagination)
            },
            onSubmit() {
                this.fetchData(this.pagination)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ibue-product-card {

        .media {
            display: flex;
            justify-content: center;
            align-items: center;
            background: #f5f6f7;
            min-height: 120px;
            margin: -24px;
            margin-bottom: auto;
        }

        .image-slot {

            i {
                font-size: 64px;
                color: #888888;
            }
        }
    }
</style>
