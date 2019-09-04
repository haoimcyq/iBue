<template>
    <el-form :inline="inline" :model="formData" ref="searchForm">
        <template v-for="(item, index) in formData">
            <el-form-item
                    :key="index"
                    :prop="'formModel.' + index + '.value'"
                    :label="item.label">
                <!-- 输入框表单类型 -->
                <el-input
                        v-if="item.type === 'text' || item.type === undefined"
                        v-model="item.value"
                        :disabled="!!item.disabled"
                        :placeholder="item.placeholder ? item.placeholder : '请输入'">
                </el-input>
                <!-- 下拉选择类型 -->
                <el-select
                        v-else-if="item.type === 'select'"
                        v-model="item.value"
                        clearable
                        :placeholder="item.placeholder ? item.placeholder : '请选择'">
                    <el-option
                            v-for="(option, index2) in item.option"
                            :key="index2"
                            :label="option.name"
                            :value="option.id"
                            :disabled="!!item.disabled">
                    </el-option>
                </el-select>
                <!-- 日期范围 -->
                <el-date-picker
                        v-else-if="item.type === 'daterange'"
                        v-model="item.value"
                        type="daterange"
                        :disabled="!!item.disabled"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :placeholder="item.placeholder ? item.placeholder : '请选择日期'">
                </el-date-picker>
                <!-- 日期 -->
                <el-date-picker
                        v-else-if="item.type === 'date'"
                        v-model="item.value"
                        type="date"
                        :disabled="!!item.disabled"
                        :placeholder="item.placeholder ? item.placeholder : '请选择日期'">
                </el-date-picker>
            </el-form-item>
        </template>
        <el-form-item label="">
            <el-button
                    type="primary"
                    icon="el-icon-search"
                    @click.native="handleSearch">
                {{ searchBtnText }}
            </el-button>
            <el-button
                    type="default"
                    icon="el-icon-delete"
                    @click.native="resetForm">
                清空
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "UiSearchForm",
        props: {
            inline: {
                type: Boolean,
                default: true
            },
            searchBtnText: {
                type: String,
                default: '搜索'
            },
            formOption: {
                type: Array
            }
        },
        data () {
            return {
                formData: {
                    formModel: []
                }
            }
        },
        watch: {
            //
        },
        mounted () {
            this.formData = this.formOption;
        },
        methods: {
            /* 搜索 */
            handleSearch () {
                /* 让父组件接收到响应数据 */
                const model = {};

                for (const item of this.formData.formModel) {
                    model[item.prop] = (item.value === void 0) ? '' : item.value;
                }

                this.$emit('search', model, this.formData.formModel);
            },

            /* 清空 */
            resetForm () {
                if (this.$refs.searchForm) {
                    this.$refs.searchForm.resetFields()
                }
            }
        }
    }
</script>

<style scoped>

</style>
