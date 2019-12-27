<template>
    <section>
        <header class="ibue-mb-32">
            <el-form
                ref="searchForm"
                :model="searchFormData"
                label-width="100px"
            >
                <el-row :gutter="24">
                    <el-col
                        v-for="(value, key, index) in searchFormData"
                        :xs="24"
                        :sm="24"
                        :md="12"
                        :lg="8"
                        :xl="6"
                        :key="index"
                        v-show="isShow(index)"
                    >
                        <el-form-item
                            :label="searchForm[key].title || key"
                            :prop="key"
                        >
                            <!-- Input 输入框 -->
                            <el-input
                                v-if="
                                    renderInputType(searchForm[key]) === 'input'
                                "
                                v-model="searchFormData[key]"
                                v-bind="searchForm[key].options"
                                @change="$emit('change', { key, value })"
                            ></el-input>
                            <!-- Select 选择器 -->
                            <el-select
                                v-else-if="
                                    renderInputType(searchForm[key]) ===
                                        'select'
                                "
                                v-model="searchFormData[key]"
                                v-bind="searchForm[key].options"
                                style="width: 100%"
                                @change="$emit('change', { key, value })"
                            >
                                <el-option
                                    v-for="item in searchForm[key].data"
                                    :key="item.value"
                                    v-bind="item"
                                >
                                </el-option>
                            </el-select>
                            <!-- Radio 单选框 -->
                            <el-radio-group
                                v-else-if="
                                    renderInputType(searchForm[key]) === 'radio'
                                "
                                v-model="searchFormData[key]"
                                v-bind="searchForm[key].options"
                                @change="$emit('change', { key, value })"
                            >
                                <el-radio
                                    v-for="(item, index) in searchForm[key]
                                        .data"
                                    :key="index"
                                    :label="item.value"
                                    >{{ item.label }}</el-radio
                                >
                            </el-radio-group>
                            <!-- Checkbox 多选框 -->
                            <el-checkbox-group
                                v-else-if="
                                    renderInputType(searchForm[key]) ===
                                        'checkbox'
                                "
                                v-model="searchFormData[key]"
                                v-bind="searchForm[key].options"
                                @change="$emit('change', { key, value })"
                            >
                                <el-checkbox
                                    v-for="(item, index) in searchForm[key]
                                        .data"
                                    :key="index"
                                    :label="item.value"
                                    >{{ item.label }}</el-checkbox
                                >
                            </el-checkbox-group>
                            <!-- InputNumber 计数器 -->
                            <el-input-number
                                v-else-if="
                                    renderInputType(searchForm[key]) ===
                                        'number'
                                "
                                v-model="searchFormData[key]"
                                v-bind="searchForm[key].options"
                            ></el-input-number>
                            <!-- Cascader 级联选择器 -->
                            <el-cascader
                                v-else-if="
                                    renderInputType(searchForm[key]) ===
                                        'cascader'
                                "
                                v-model="searchFormData[key]"
                                v-bind="searchForm[key].options"
                                @change="$emit('change', { key, value })"
                            ></el-cascader>
                            <!-- Switch 开关 -->
                            <el-switch
                                v-else-if="
                                    renderInputType(searchForm[key]) ===
                                        'switch'
                                "
                                v-model="searchFormData[key]"
                                v-bind="searchForm[key].options"
                                @change="$emit('change', { key, value })"
                            ></el-switch>
                            <el-slider
                                v-else-if="
                                    renderInputType(searchForm[key]) ===
                                        'slider'
                                "
                                v-model="searchFormData[key]"
                                v-bind="searchForm[key].options"
                                @change="$emit('change', { key, value })"
                            ></el-slider>
                            <!-- DatePicker 日期选择器 -->
                            <el-date-picker
                                v-else-if="
                                    renderInputType(searchForm[key]) === 'date'
                                "
                                :type="searchForm[key].type || 'date'"
                                v-model="searchFormData[key]"
                                v-bind="searchForm[key].options"
                                style="width: 100%"
                                @change="$emit('change', { key, value })"
                            ></el-date-picker>
                            <!-- TimePicker 时间选择器 -->
                            <el-time-picker
                                v-else-if="
                                    renderInputType(searchForm[key]) === 'time'
                                "
                                v-model="searchFormData[key]"
                                v-bind="searchForm[key].options"
                                @change="$emit('change', { key, value })"
                            ></el-time-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                        <el-button type="primary" @click="handleSearch"
                            >搜索</el-button
                        >
                        <el-button @click="handleResetForm('searchForm')"
                            >重置</el-button
                        >
                        <el-button
                            @click="isShowMore = !isShowMore"
                            type="text"
                        >
                            {{ isShowMore ? '收起' : '展开' }}
                            <i
                                :class="
                                    isShowMore
                                        ? 'el-icon-arrow-up'
                                        : 'el-icon-arrow-down'
                                "
                            ></i>
                        </el-button>
                    </el-col>
                </el-row>
            </el-form>
        </header>
        <div v-if="$slots.header" style="margin-bottom: 8px">
            <slot name="header"></slot>
        </div>
        <!-- 表格 -->
        <el-table
            :key="key"
            ref="ibueTable"
            id="ibueTable"
            v-loading="loading"
            :data="data"
            style="width: 100%;"
            v-bind="options"
            @select="handleSelect"
            @select-all="handleSelectAll"
            @selection-change="handleSelectionChange"
            @cell-mouse-enter="handleCellMouseEnter"
            @cell-mouse-leave="handleCellMouseLeave"
            @cell-click="handleCellClick"
            @cell-dblclick="handleCellDblclick"
            @row-click="handleRowClick"
            @row-contextmenu="handleRowContextmenu"
            @row-dblclick="handleRowDblclick"
            @sort-change="handleSortChange"
            @current-change="handleCurrentChange"
            @expand-change="handleExpandChange"
            @header-click="handleHeaderClick"
            @header-contextmenu="handleHeaderContextmenu"
            @header-dragend="handleHeaderDragend"
        >
            <template v-for="(column, index) in columns">
                <el-table-column
                    v-if="renderType(column) === 'selection'"
                    type="selection"
                    :width="55"
                    :key="index"
                >
                </el-table-column>
                <el-table-column
                    v-if="renderType(column) === 'index'"
                    type="index"
                    :width="55"
                    :key="index"
                >
                    <template slot-scope="scope">
                        <span style="white-space: nowrap">{{
                            (paginationDef.currentPage - 1) *
                                paginationDef.pageSize +
                                scope.$index +
                                1
                        }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    v-if="renderType(column) === 'normal'"
                    :key="index"
                    v-bind="column"
                ></el-table-column>
                <el-table-column
                    v-if="renderType(column) === 'render'"
                    :key="index"
                    v-bind="column"
                >
                    <template v-slot="scope">
                        <Expand
                            :row="scope.row"
                            :index="scope.$index"
                            :render="column.render"
                        ></Expand>
                    </template>
                </el-table-column>
                <el-table-column
                    v-if="renderType(column) === 'slot'"
                    :key="index"
                    v-bind="column"
                >
                    <template v-slot="scope">
                        <slot
                            :name="column.prop"
                            :index="scope.$index"
                            :row="scope.row"
                        />
                    </template>
                </el-table-column>
            </template>
        </el-table>
        <!-- 分页 -->
        <section
            class="pagination-container"
            :style="{ 'justify-content': paginationAlign }"
            style="display: flex; margin-top: 20px;"
        >
            <el-pagination
                :page-size="paginationDef.pageSize"
                :current-page="paginationDef.currentPage"
                :total="paginationDef.total"
                :page-sizes="paginationDef.paginationPageSizes"
                :background="paginationDef.paginationBackground"
                :layout="paginationDef.paginationLayout"
                @size-change="handlePageSizeChange"
                @current-change="handlePageCurrentChange"
                @prev-click="handlePagePrevClick"
                @next-click="handlePageNextClick"
            />
        </section>
        <el-dialog title="dialog" :visible.sync="dialogVisible">
            <el-form
                ref="submitForm"
                :model="submitFormData"
                label-width="100px"
            >
                <el-row :gutter="24">
                    <el-col
                        v-for="(value, key, index) in submitFormData"
                        :xs="24"
                        :sm="24"
                        :md="12"
                        :key="index"
                    >
                        <el-form-item
                            :label="submitForm[key].title || key"
                            :prop="key"
                        >
                            <!-- Input 输入框 -->
                            <el-input
                                v-if="
                                    renderInputType(submitForm[key]) === 'input'
                                "
                                v-model="submitFormData[key]"
                                v-bind="submitForm[key].options"
                                @change="$emit('change', { key, value })"
                            ></el-input>
                            <!-- Select 选择器 -->
                            <el-select
                                v-else-if="
                                    renderInputType(submitForm[key]) ===
                                        'select'
                                "
                                v-model="submitFormData[key]"
                                v-bind="submitForm[key].options"
                                style="width: 100%"
                                @change="$emit('change', { key, value })"
                            >
                                <el-option
                                    v-for="item in submitForm[key].data"
                                    :key="item.value"
                                    v-bind="item"
                                >
                                </el-option>
                            </el-select>
                            <!-- Textarea 输入框 -->
                            <el-input
                                v-else-if="
                                    renderInputType(submitForm[key]) ===
                                        'textarea'
                                "
                                type="textarea"
                                v-model="submitFormData[key]"
                                v-bind="submitForm[key].options"
                                @change="$emit('change', { key, value })"
                            ></el-input>
                            <!-- Radio 单选框 -->
                            <el-radio-group
                                v-else-if="
                                    renderInputType(submitForm[key]) === 'radio'
                                "
                                v-model="submitFormData[key]"
                                v-bind="submitForm[key].options"
                                @change="$emit('change', { key, value })"
                            >
                                <el-radio
                                    v-for="(item, index) in searchForm[key]
                                        .data"
                                    :key="index"
                                    :label="item.value"
                                    >{{ item.label }}</el-radio
                                >
                            </el-radio-group>
                            <!-- Checkbox 多选框 -->
                            <el-checkbox-group
                                v-else-if="
                                    renderInputType(submitForm[key]) ===
                                        'checkbox'
                                "
                                v-model="submitFormData[key]"
                                v-bind="submitForm[key].options"
                                @change="$emit('change', { key, value })"
                            >
                                <el-checkbox
                                    v-for="(item, index) in submitForm[key]
                                        .data"
                                    :key="index"
                                    :label="item.value"
                                    >{{ item.label }}</el-checkbox
                                >
                            </el-checkbox-group>
                            <!-- InputNumber 计数器 -->
                            <el-input-number
                                v-else-if="
                                    renderInputType(submitForm[key]) ===
                                        'number'
                                "
                                v-model="submitFormData[key]"
                                v-bind="submitForm[key].options"
                            ></el-input-number>
                            <!-- Cascader 级联选择器 -->
                            <el-cascader
                                v-else-if="
                                    renderInputType(submitForm[key]) ===
                                        'cascader'
                                "
                                v-model="submitFormData[key]"
                                v-bind="submitForm[key].options"
                                @change="$emit('change', { key, value })"
                            ></el-cascader>
                            <!-- Switch 开关 -->
                            <el-switch
                                v-else-if="
                                    renderInputType(submitForm[key]) ===
                                        'switch'
                                "
                                v-model="submitFormData[key]"
                                v-bind="submitForm[key].options"
                                @change="$emit('change', { key, value })"
                            ></el-switch>
                            <el-slider
                                v-else-if="
                                    renderInputType(submitForm[key]) ===
                                        'slider'
                                "
                                v-model="submitFormData[key]"
                                v-bind="submitForm[key].options"
                                @change="$emit('change', { key, value })"
                            ></el-slider>
                            <!-- DatePicker 日期选择器 -->
                            <el-date-picker
                                v-else-if="
                                    renderInputType(submitForm[key]) === 'date'
                                "
                                v-model="submitFormData[key]"
                                v-bind="submitForm[key].options"
                                style="width: 100%"
                                @change="$emit('change', { key, value })"
                            ></el-date-picker>
                            <!-- TimePicker 时间选择器 -->
                            <el-time-picker
                                v-else-if="
                                    renderInputType(submitForm[key]) === 'time'
                                "
                                v-model="submitFormData[key]"
                                v-bind="submitForm[key].options"
                                @change="$emit('change', { key, value })"
                            ></el-time-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <span slot="footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleSubmit"
                    >确 定</el-button
                >
            </span>
        </el-dialog>
    </section>
</template>

<script>
import Expand from './expand';
import FileSaver from 'file-saver';
import XLSX from 'xlsx';

export default {
    name: 'IbueCrud',
    components: {
        Expand,
    },
    provide() {
        return {
            ibueCrud: this,
        };
    },
    props: {
        columns: Array,
        pagination: Object,
        options: Object,
        loading: {
            type: Boolean,
            default: false,
        },
        data: Array,
        searchForm: Object,
        submitForm: Object,
    },
    data() {
        return {
            key: 1,
            paginationDef: {
                pageSize: 20,
                currentPage: 1,
                total: 0,
                paginationPageSizes: [20, 40, 60, 80, 100],
                background: true,
                paginationLayout: 'total, sizes, prev, pager, next, jumper',
                paginationAlign: 'right',
            },
            searchFormData: {},
            isShowMore: false,
            submitFormData: {},
            dialogVisible: false,
            action: 1,
        };
    },
    created() {},
    computed: {
        paginationAlign() {
            return {
                left: 'flex-start',
                center: 'flex-center',
                right: 'flex-end',
            }[this.paginationDef.paginationAlign || 'right'];
        },
    },
    watch: {
        pagination: {
            handler() {
                this.paginationDef = Object.assign(
                    this.paginationDef,
                    this.pagination,
                );
            },
            deep: true,
            immediate: true,
        },
        searchForm: {
            handler() {
                let obj = {};
                for (let key in this.searchForm) {
                    obj[key] =
                        this.searchForm[key].value === void 0
                            ? ''
                            : this.searchForm[key].value;
                }
                this.searchFormData = Object.assign({}, obj);
            },
            deep: true,
            immediate: true,
        },
        submitForm: {
            handler() {
                let obj = {};
                for (let key in this.submitForm) {
                    obj[key] =
                        this.submitForm[key].value === void 0
                            ? ''
                            : this.submitForm[key].value;
                }
                this.submitFormData = Object.assign({}, obj);
            },
            deep: true,
            immediate: true,
        },
    },
    methods: {
        /**
         * 增删改查
         */
        /** 渲染类型 */
        renderInputType(column) {
            const type = [
                'input',
                'textarea',
                'select',
                'radio',
                'checkbox',
                'number',
                'cascader',
                'switch',
                'slider',
                'time',
                'rate',
                'color',
            ];

            if (type.includes(column.type)) {
                return column.type;
            }

            if (
                [
                    'date',
                    'year',
                    'month',
                    'dates',
                    'week',
                    'datetime',
                    'datetimerange',
                    'daterange',
                    'monthrange',
                ].includes(column.type)
            ) {
                return 'date';
            }

            return 'input';
        },
        isShow(index) {
            if (this.isShowMore) {
                return true;
            } else {
                return index <= 1;
            }
        },
        /** 点击搜索 */
        handleSearch() {
            this.$emit('search', this.searchFormData);
        },
        handleResetForm(formName) {
            this.$refs[formName].resetFields();
        },
        handleDelete(callback) {
            this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(() => {
                callback && callback(this.$message);
            });
        },
        handleSubmit() {
            this.$emit('submit', this.submitFormData, this.closeDialog);
        },

        /** 渲染类型 */
        renderType(column) {
            if (column.type === 'index') {
                return 'index';
            } else if (column.type === 'selection') {
                return 'selection';
            } else if (column.render) {
                return 'render';
            } else if (column.slot) {
                return 'slot';
            } else {
                return 'normal';
            }
        },
        /**
         * 表格事件
         */
        /** 当用户手动勾选数据行的 Checkbox 时触发的事件 */
        handleSelect(selection, row) {
            this.$emit('select', selection, row);
        },
        /** 当用户手动勾选全选 Checkbox 时触发的事件 */
        handleSelectAll(selection) {
            this.$emit('select-all', selection);
        },
        /** 当选择项发生变化时会触发该事件 */
        handleSelectionChange(selection) {
            this.$emit('selection-change', selection);
        },
        /** 当单元格 hover 进入时会触发该事件 */
        handleCellMouseEnter(row, column, cell, event) {
            this.$emit('cell-mouse-enter', row, column, cell, event);
        },
        /** 当单元格 hover 退出时会触发该事件 */
        handleCellMouseLeave(row, column, cell, event) {
            this.$emit('cell-mouse-leave', row, column, cell, event);
        },
        /** 当某个单元格被点击时会触发该事件 */
        handleCellClick(row, column, cell, event) {
            this.$emit('cell-click', row, column, cell, event);
        },
        /** 当某个单元格被双击击时会触发该事件	*/
        handleCellDblclick(row, column, cell, event) {
            this.$emit('cell-dblclick', row, column, cell, event);
        },
        /** 当某一行被点击时会触发该事件 */
        handleRowClick(row, column, event) {
            this.$emit('row-click', row, column, event);
        },
        /** 当某一行被鼠标右键点击时会触发该事件 */
        handleRowContextmenu(row, column, event) {
            this.$emit('row-contextmenu', row, column, event);
        },
        /** 当某一行被双击时会触发该事件 */
        handleRowDblclick(row, column, event) {
            this.$emit('row-dblclick', row, column, event);
        },
        /** 当表格的排序条件发生变化的时候会触发该事件 */
        handleSortChange({ column, prop, order }) {
            this.$emit('sort-change', column, prop, order);
        },
        /** 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性 */
        handleCurrentChange(currentRow, oldCurrentRow) {
            this.$emit('current-change', currentRow, oldCurrentRow);
        },
        /** 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded） */
        handleExpandChange(row, expand) {
            this.$emit('expand-change', row, expand);
        },
        /** 当某一列的表头被点击时会触发该事件 */
        handleHeaderClick(column, event) {
            this.$emit('header-click', column, event);
        },
        /** 当某一列的表头被鼠标右键点击时触发该事件 */
        handleHeaderContextmenu(column, event) {
            this.$emit('header-dragend', column, event);
        },
        /** 当拖动表头改变了列的宽度的时候会触发该事件 */
        handleHeaderDragend(newWidth, oldWidth, column, event) {
            this.$emit('expand-change', newWidth, oldWidth, column, event);
        },

        /**
         * 分页事件
         */
        /** 请求数据 */
        fetchData() {
            this.$emit(
                'fetch-data',
                {
                    pageSize: this.paginationDef.pageSize,
                    currentPage: this.paginationDef.currentPage,
                    total: this.paginationDef.total,
                },
                this.searchFormData,
            );
        },
        /** pageSize 改变时会触发 */
        handlePageSizeChange(val) {
            this.paginationDef.pageSize = val;
            this.$emit('size-change', val);
            this.fetchData();
        },
        /** currentPage 改变时会触发 */
        handlePageCurrentChange(val) {
            this.paginationDef.currentPage = val;
            this.$emit('current-change', val);
            this.fetchData();
        },
        /** 用户点击上一页按钮改变当前页后触发 */
        handlePagePrevClick(val) {
            this.paginationDef.currentPage = val;
            this.$emit('prev-click', val);
            this.fetchData();
        },
        /** 用户点击下一页按钮改变当前页后触发 */
        handlePageNextClick(val) {
            this.paginationDef.currentPage = val;
            this.$emit('next-click', val);
            this.fetchData();
        },

        /**
         * 工具栏
         */
        /** 新增 */
        handleAddAction() {
            this.$emit('tools-add', 'val');
        },
        /** 批量删除 */
        handleDeleteAction() {
            this.$emit('tools-delete', 'val');
        },
        /** 切换 */
        handleToggleColumnsAction() {
            this.$emit('tools-toggle-columns', 'val');
        },
        /** 导出 */
        handleExport(name = '模拟数据') {
            var wb = XLSX.utils.table_to_book(
                document.querySelector('#ibueTable'),
            );
            var wbout = XLSX.write(wb, {
                bookType: 'xlsx',
                bookSST: true,
                type: 'array',
            });
            try {
                FileSaver.saveAs(
                    new Blob([wbout], { type: 'application/octet-stream' }),
                    `${name}.xlsx`,
                );
            } catch (e) {
                if (typeof console !== 'undefined') console.log(e, wbout);
            }
            return wbout;
        },
        /** 导入 */
        handleImport() {
            //
        },
        /** 刷新 */
        handleRefreshAction() {
            this.$emit('tools-refresh', 'val');
        },

        /**
         * 提交数据
         */
        /**
         * action: 1代表新增 2代表修改 3代表查看
         */
        openDialog(action, params = null) {
            if (typeof action === 'number') {
                this.action = action;
            } else {
                params = action;
            }
            if (params) {
                for (let key in this.submitFormData) {
                    this.submitFormData[key] = params[key];
                }
            }
            this.dialogVisible = true;
        },
        closeDialog() {
            this.handleResetForm('submitForm');
            this.dialogVisible = false;
        },
    },
};
</script>

<style scoped></style>
