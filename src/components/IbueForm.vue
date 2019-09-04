<template>
    <el-form ref="form" :model="formData">
        <el-row>
            <el-col v-for="(value, key, index) in formData" :key="index">
                <el-form-item :label="key" :prop="key">
                    <!-- Input 输入框 -->
                    <el-input
                            v-if="formOption[key].type && formOption[key].type === 'input'"
                            v-model="formData[key]"
                            v-bind="formOption[key].options"
                            @change="$emit('ibue-form-change', { key, value })"
                    ></el-input>
                    <!-- Select 选择器 -->
                    <el-select
                            v-else-if="formOption[key].type && formOption[key].type === 'select'"
                            v-model="formData[key]"
                            v-bind="formOption[key].options"
                            @change="$emit('ibue-form-change', { key, value })"
                    >
                        <el-option
                                v-for="item in formOption[key].options"
                                :key="item.value"
                                v-bind="formData[key].setting"
                        >
                        </el-option>
                    </el-select>
                    <!-- Radio 单选框 -->
                    <el-radio-group
                            v-else-if="formOption[key].type && formOption[key].type === 'radio'"
                            v-model="formData[key]"
                            v-bind="formOption[key].options"
                            @change="$emit('ibue-form-change', { key, value })"
                    >
                        <el-radio v-for="(item, index) in formOption[key].data" :key="index" :label="item.value">{{
                            item.label
                            }}</el-radio>
                    </el-radio-group>
                    <!-- Checkbox 多选框 -->
                    <el-checkbox-group
                            v-else-if="formOption[key].type && formOption[key].type === 'checkbox'"
                            v-model="formData[key]"
                            v-bind="formOption[key].options"
                            @change="$emit('ibue-form-change', { key, value })"
                    >
                        <el-checkbox v-for="(item, index) in formOption[key].data" :key="index" :label="item.value">{{
                            item.label
                            }}</el-checkbox>
                    </el-checkbox-group>
                    <!-- InputNumber 计数器 -->
                    <el-input-number
                            v-else-if="formOption[key].type && formOption[key].type === 'number'"
                            v-model="formData[key]"
                            v-bind="formOption[key].options"
                    ></el-input-number>
                    <!-- Cascader 级联选择器 -->
                    <el-cascader
                            v-else-if="formOption[key].type && formOption[key].type === 'cascader'"
                            v-model="formData[key]"
                            v-bind="formOption[key].options"
                            @change="$emit('ibue-form-change', { key, value })"
                    ></el-cascader>
                    <!-- Switch 开关 -->
                    <el-switch
                            v-else-if="formOption[key].type && formOption[key].type === 'switch'"
                            v-model="formData[key]"
                            v-bind="formOption[key].options"
                            @change="$emit('ibue-form-change', { key, value })"
                    ></el-switch>
                    <el-slider
                            v-else-if="formOption[key].type && formOption[key].type === 'slider'"
                            v-model="formData[key]"
                            v-bind="formOption[key].options"
                            @change="$emit('ibue-form-change', { key, value })"
                    ></el-slider>
                    <!-- DatePicker 日期选择器 -->
                    <el-date-picker
                            v-else-if="formOption[key].type && formOption[key].type === 'date'"
                            v-model="formData[key]"
                            v-bind="formOption[key].options"
                            @change="$emit('ibue-form-change', { key, value })"
                    ></el-date-picker>
                    <!-- TimePicker 时间选择器 -->
                    <el-time-picker
                            v-else-if="formOption[key].type && formOption[key].type === 'time'"
                            v-model="formData[key]"
                            v-bind="formOption[key].options"
                            @change="$emit('ibue-form-change', { key, value })"
                    ></el-time-picker>
                    <!-- Rate 评分 -->
                    <el-rate
                            v-else-if="formOption[key].type && formOption[key].type === 'rate'"
                            v-model="formData[key]"
                            v-bind="formOption[key].options"
                    ></el-rate>
                    <el-color-picker
                            v-else-if="formOption[key].type && formOption[key].type === 'color'"
                            v-model="formData[key]"
                            v-bind="formOption[key].options"
                    ></el-color-picker>
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
        }
    }
</script>

<style scoped>

</style>