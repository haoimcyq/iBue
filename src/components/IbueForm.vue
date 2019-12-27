<template>
    <el-form ref="searchForm" :model="formData">
        <el-row>
            <el-col v-for="(value, key, index) in formData" :xs="24" :sm="24" :md="12" :lg="8" :xl="6" :key="index">
                <el-form-item :label="key" :prop="key">
                    <!-- Input 输入框 -->
                    <el-input
                            v-if="renderInputType(formOption[key]) === 'input'"
                            v-model="formData[key]"
                            v-bind="formOption[key].options"
                            @change="$emit('change', { key, value })"
                            v-show="isShow(index)"
                    ></el-input>
                    <!-- Select 选择器 -->
                    <el-select
                            v-else-if="renderInputType(formOption[key]) === 'select'"
                            v-model="formData[key]"
                            v-bind="formOption[key].options"
                            @change="$emit('change', { key, value })"
                            v-show="isShow(index)"
                    >
                        <el-option
                                v-for="item in formOption[key].data"
                                :key="item.value"
                                v-bind="formData[key].subOptions"
                        >
                        </el-option>
                    </el-select>
                    <!-- Radio 单选框 -->
                    <el-radio-group
                            v-else-if="renderInputType(formOption[key]) === 'radio'"
                            v-model="formData[key]"
                            v-bind="formOption[key].options"
                            @change="$emit('change', { key, value })"
                            v-show="isShow(index)"
                    >
                        <el-radio v-for="(item, index) in formOption[key].data" :key="index" :label="item.value">{{
                            item.label
                            }}</el-radio>
                    </el-radio-group>
                    <!-- Checkbox 多选框 -->
                    <el-checkbox-group
                            v-else-if="renderInputType(formOption[key]) === 'checkbox'"
                            v-model="formData[key]"
                            v-bind="formOption[key].options"
                            @change="$emit('change', { key, value })"
                            v-show="isShow(index)"
                    >
                        <el-checkbox v-for="(item, index) in formOption[key].data" :key="index" :label="item.value">{{
                            item.label
                            }}</el-checkbox>
                    </el-checkbox-group>
                    <!-- InputNumber 计数器 -->
                    <el-input-number
                            v-else-if="renderInputType(formOption[key]) === 'number'"
                            v-model="formData[key]"
                            v-bind="formOption[key].options"
                            v-show="isShow(index)"
                    ></el-input-number>
                    <!-- Cascader 级联选择器 -->
                    <el-cascader
                            v-else-if="renderInputType(formOption[key]) === 'cascader'"
                            v-model="formData[key]"
                            v-bind="formOption[key].options"
                            @change="$emit('change', { key, value })"
                            v-show="isShow(index)"
                    ></el-cascader>
                    <!-- Switch 开关 -->
                    <el-switch
                            v-else-if="renderInputType(formOption[key]) === 'switch'"
                            v-model="formData[key]"
                            v-bind="formOption[key].options"
                            @change="$emit('change', { key, value })"
                            v-show="isShow(index)"
                    ></el-switch>
                    <el-slider
                            v-else-if="renderInputType(formOption[key]) === 'slider'"
                            v-model="formData[key]"
                            v-bind="formOption[key].options"
                            @change="$emit('change', { key, value })"
                            v-show="isShow(index)"
                    ></el-slider>
                    <!-- DatePicker 日期选择器 -->
                    <el-date-picker
                            v-else-if="renderInputType(formOption[key]) === 'date'"
                            v-model="formData[key]"
                            v-bind="formOption[key].options"
                            @change="$emit('change', { key, value })"
                            v-show="isShow(index)"
                    ></el-date-picker>
                    <!-- TimePicker 时间选择器 -->
                    <el-time-picker
                            v-else-if="renderInputType(formOption[key]) === 'time'"
                            v-model="formData[key]"
                            v-bind="formOption[key].options"
                            @change="$emit('change', { key, value })"
                            v-show="isShow(index)"
                    ></el-time-picker>
                    <!-- Rate 评分 -->
                    <el-rate
                            v-else-if="renderInputType(formOption[key]) === 'rate'"
                            v-model="formData[key]"
                            v-bind="formOption[key].options"
                            v-show="isShow(index)"
                    ></el-rate>
                    <el-color-picker
                            v-else-if="renderInputType(formOption[key]) === 'color'"
                            v-model="formData[key]"
                            v-bind="formOption[key].options"
                            v-show="isShow(index)"
                    ></el-color-picker>
                </el-form-item>
                <el-form-item class="ibue-action-col" v-if="index === 2">
                    <el-button type="primary" @click="handleSearch">搜索</el-button>
                    <el-button>重置</el-button>
                    <el-button @click="isShowMore = !isShowMore" type="text">
                        {{ showMore ? '收起' : '展开' }}
                        <i
                                :class="showMore ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"
                        ></i>
                    </el-button>
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>
</template>

<script>
    export default {
        name: "IbueForm",
        props: {
            formOption: {
                type: Object,
                default: () => {}
            },
            formData: {
                type: Object,
                default: () => {}
            }
        },
        data() {
            return {
                isShowMore: false
            }
        },
        methods: {
            /** 渲染类型 */
            renderInputType(column) {
                const type = ['input', 'select', 'radio', 'checkbox', 'number', 'cascader', 'switch', 'slider', 'date', 'time', 'rate', 'color'];

                for (let item of type) {
                    if (column.type === item) {
                        return item
                    }
                }

                return 'input';
            },
            isShow(index) {
                if (this.isShowMore) {
                    return true
                } else {
                    return index >= 2
                }
            },
            handleSearch() {
                //
            }
        }
    }
</script>

<style scoped>

</style>
