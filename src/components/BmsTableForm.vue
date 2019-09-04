<template>
    <el-dialog
            :title="title"
            :visible.sync="dialogVisible"
            :width="width">
        <el-form :model="formData" status-icon ref="dialogForm" label-width="140px">
            <el-row :gutter="16">
                <el-col :span="item.span ? item.span : 12" v-for="(item, index) in formData" :key="index">
                    <el-form-item
                            :prop="'formModel.' + index + '.value'"
                            :rules="item.rules"
                            :label="item.label">
                        <!-- 输入框表单类型 -->
                        <el-input
                                v-if="item.type === 'text' || item.type === undefined"
                                type="text"
                                v-model="item.value"
                                :readonly="!!item.readonly"
                                :disabled="!!item.disabled"
                                :placeholder="item.placeholder ? item.placeholder : '请输入'">
                        </el-input>
                        <el-input
                                v-if="item.type === 'number'"
                                type="number"
                                v-model="item.value"
                                :readonly="!!item.readonly"
                                :disabled="!!item.disabled"
                                :placeholder="item.placeholder ? item.placeholder : '请输入'">
                        </el-input>
                        <!-- 下拉选择类型 -->
                        <el-select
                                v-else-if="item.type === 'select'"
                                v-model="item.value"
                                clearable
                                :placeholder="item.placeholder ? item.placeholder : '请选择'"
                                @change="handleChange(item.value, item.relation)">
                            <el-option
                                    v-for="(option, index) in item.option"
                                    :key="index"
                                    :label="option.name"
                                    :value="option.id"
                                    :disabled="!!item.disabled">
                            </el-option>
                        </el-select>
                        <!-- 文本域表单类型 -->
                        <el-input
                                v-else-if="item.type === 'textarea'"
                                type="textarea"
                                :readonly="!!item.readonly"
                                :disabled="!!item.disabled"
                                v-model="item.value"
                                :placeholder="item.placeholder ? item.placeholder : '请输入'">
                        </el-input>
                        <!-- radio表单类型 -->
                        <el-radio-group
                                v-else-if="item.type === 'radio'"
                                v-model="item.value"
                                :placeholder="item.placeholder ? item.placeholder : '请选择'">
                            <el-radio
                                    v-for="(option, index) in item.option"
                                    :key="index"
                                    :label="option.id"
                                    :value="'' + option.id"
                                    :disabled="!!item.disabled">
                                {{ option.name }}
                            </el-radio>
                        </el-radio-group>
                        <!-- checkbox表单类型 -->
                        <el-checkbox-group
                                v-else-if="item.type === 'checkbox'"
                                v-model="item.value"
                                :placeholder="item.placeholder ? item.placeholder : '请选择'">
                            <el-checkbox
                                    v-for="option in item.data"
                                    :label="option.id"
                                    :key="option.id"
                                    :disabled="!!item.disabled">
                                {{ option.name }}
                            </el-checkbox>
                        </el-checkbox-group>
                        <el-date-picker
                                v-else-if="item.type === 'date'"
                                v-model="item.value"
                                type="date"
                                :disabled="!!item.disabled"
                                :placeholder="item.placeholder ? item.placeholder : '请选择日期'">
                        </el-date-picker>
                        <el-date-picker
                                v-else-if="item.type === 'daterange'"
                                v-model="item.value"
                                type="daterange"
                                :disabled="!!item.disabled"
                                :placeholder="item.placeholder ? item.placeholder : '请选择日期'">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">{{ cancelBtnText }}</el-button>
            <el-button type="primary" @click="submitForm('dialogForm')">{{ submitBtnText }}</el-button>
        </span>
    </el-dialog>
</template>

<script>
    export default {
        name: "UiDialogForm",
        props: {
            title: {
                type: String,
                default: '新增'
            },
            width: {
                type: [String, Number],
                default: '70%'
            },
            visible: {
                type: Boolean,
                default: false
            },
            formOption: {
                type: Array
            },
            submitBtnText: {
                type: String,
                default: '确 定'
            },
            cancelBtnText: {
                type: String,
                default: '取 消'
            }
        },
        data () {
            return {
                formData: {
                    formModel: []
                },
                formModel: {},
                dialogVisible: false,
                dialogTitle: ''
            }
        },
        watch: {
            formOption: {
                handler () {
                    this.formData = this.formOption;
                }
            }
        },
        mounted () {
            this.formData = this.formOption;
            this.dialogVisible = this.visible;
            this.dialogTitle = this.title;
        },
        methods: {
            /** 提交表单数据 */
            submitForm (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {

                        const res = {}, check = {};

                        for (const item of this.formData.formModel) {

                            /** 别名 */
                            if (item.alias) {
                                res[item.alias] = item.value;
                            }

                            res[item.prop] = item.value;

                            /** 需要验证 */
                            if (item.check) {
                                if (item.alias) {
                                    check[item.alias] = item.value;
                                } else {
                                    check[item.prop] = item.value;
                                }
                            }

                        }

                        /* 让父组件接收到响应数据 */
                        this.$emit('submit', res, check);

                    } else {
                        return false;
                    }
                });
            },

            /* 重置表单状态 */
            resetForm () {
                if (this.$refs.dialogForm) {
                    this.$refs.dialogForm.resetFields();
                }
            },

            /* 展示模态框 */
            showDialog () {
                this.dialogVisible = true;
            },

            /* 关闭模态框 */
            closeDialog () {
                this.dialogVisible = false;
            },

            /* 传递选项 */
            handleChange (selection, relation) {
                this.$emit('selectOption', selection, relation)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .el-input {
        width: 100% !important;
    }

    .el-select {
        width: 100% !important;
    }
</style>
