<template>
    <section>
        <el-card>
            <template v-if="tableOptionDef.showSearch">
                showSearch
            </template>
            <!-- 工具 -->
            <template v-if="tableOptionDef.showToolbar">
                <header class="config-container table-tools">
                    <div class="tools-btns">
                        <!-- 新增 -->
                        <el-button
                            v-if="tableOptionDef.showAdd"
                            type="primary"
                            icon="el-icon-plus"
                            @click="handleAddAction"
                            >新增</el-button
                        >
                        <!-- 批量删除 -->
                        <el-button
                            v-if="tableOptionDef.showDelete"
                            type="danger"
                            icon="el-icon-delete"
                            @click="handleDeleteAction"
                            >批量删除</el-button
                        >
                    </div>
                    <div class="tools-action">
                    <!-- 过滤 -->
                    <el-tooltip
                        v-if="tableOptionDef.showToggleColumns"
                        class="item"
                        effect="dark"
                        content="过滤"
                        placement="top-start"
                    >
                        <el-button icon="el-icon-menu" circle @click="handleToggleColumnsAction"></el-button>
                    </el-tooltip>
                    <!-- 导出 -->
                    <el-tooltip
                        v-if="tableOptionDef.showExport"
                        class="item"
                        effect="dark"
                        content="导出"
                        placement="top-start"
                    >
                        <el-button icon="el-icon-document" circle @click="handleExportAction"></el-button>
                    </el-tooltip>
                    <!-- 刷新 -->
                    <el-tooltip
                        v-if="tableOptionDef.showRefresh"
                        class="item"
                        effect="dark"
                        content="刷新"
                        placement="top-start"
                    >
                        <el-button icon="el-icon-refresh" circle @click="handleRefreshAction"></el-button>
                    </el-tooltip>
                </div>
                </header>
            </template>
            <!-- 表格 -->
            <el-table
                :key="key"
                ref="ibueTable"
                v-loading="loading"
                :element-loading-text="tableOptionDef.loadingText"
                :element-loading-spinner="tableOptionDef.loadingSpinner"
                :element-loading-background="tableOptionDef.loadingBackground"
                :data="tableData"
                style="width: 100%;"
                v-bind="{}"
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
                <el-table-column v-if="tableOptionDef.showSelection" type="selection" width="55"> </el-table-column>
                <el-table-column v-if="tableOptionDef.showIndex" type="index" width="55"> </el-table-column>
                <template v-for="(column, index) in columns">
                    <el-table-column :key="index" :label="column.label" :prop="column.prop" v-bind="column.options || {}">
                        <template v-slot="scope">
                            <!-- 默认 -->
                            <span v-if="(!!!column.render && !!!column.slot) || (column.render && column.slot)">{{
                                column.formatter ? column.formatter(scope.row[column.prop]) : scope.row[column.prop]
                            }}</span>
                            <!-- render函数化组件 -->
                            <Expand
                                v-else-if="column.render && !!!column.slot"
                                :row="scope.row"
                                :index="scope.$index"
                                :render="column.render"
                            ></Expand>
                            <!-- solt 自定义列-->
                            <template v-else-if="!!!column.render && column.slot">
                                <slot
                                    :name="(typeof column.slot === 'string') ? column.slot : column.prop"
                                    :index="scope.$index"
                                    :row="scope.row"/>
                            </template>
                        </template>
                    </el-table-column>
                </template>
            </el-table>
            <!-- 分页 -->
            <template v-if="tableOptionDef.showPagination">
                <section class="pagination-container" :style="{ 'justify-content': paginationAlign }" style="display: flex; margin-top: 20px;">
                    <el-pagination
                        :page-size="paginationDef.pageSize"
                        :current-page="paginationDef.currentPage"
                        :total="paginationDef.total"
                        :page-sizes="tableOptionDef.paginationPageSizes"
                        :background="tableOptionDef.paginationBackground"
                        :layout="tableOptionDef.paginationLayout"
                        @size-change="handlePageSizeChange"
                        @current-change="handlePageCurrentChange"
                        @prev-click="handlePagePrevClick"
                        @next-click="handlePageNextClick"
                    />
                </section>
            </template>
        </el-card>
        <!-- 新增或者编辑弹出框 -->
        <el-dialog>
            <!-- <ibue-form :form-data="tableOptionDef.form.models"></ibue-form> -->
        </el-dialog>
        <!-- 过滤选择框 -->
        <!--<el-dialog
            title="多选"
            :visible.sync="filterDialogVisible"
            width="60%"
            :before-close="(filterDialogVisible = false)"
        >
            <el-checkbox-group v-model="checkboxResult" @change="handleFilterChange">
                <el-checkbox
                    v-for="(item, index) in checkboxColumns"
                    :key="index"
                    :label="item"
                    style="margin-bottom: 20px"
                >
                    {{ item }}
                </el-checkbox>
            </el-checkbox-group>
        </el-dialog>-->
    </section>
</template>

<script>
/** 单元格 */
import Expand from './expand';
/** 表单 */
import BmsForm from './BmsForm';
/** 工具函数 */
import deepCopy from '@/utils/deepCopy';
/** 导出 */
import exportFile from '@/utils/exportFile';

const TABLE_OPTIONS = {
    /** 是否显示分页 */
    showPagination: true,
    /** 是否显示搜索框 */
    showSearch: true,
    /** 新增按钮 */
    showAdd: true,
    /** 批量删除按钮 */
    showDelete: true,
    /** 字段切换 */
    showToggleColumns: true,
    /** 刷新按钮 */
    showRefresh: true,
    /** 导出按钮 */
    showExport: true,
    /** 是否显示工具栏 */
    showToolbar: true,
    /** 显示多选框 */
    showSelection: true,
    /** 显示该行的索引（从 1 开始计算） */
    showIndex: true,
    /** 显示可展开的按钮 */
    showExpand: false,
    /** 对齐方式 */
    paginationAlign: 'right',
    /** 每页数据量 */
    paginationPageSizes: [20, 40, 60, 80, 100],
    /** 布局 */
    paginationLayout: 'total, sizes, prev, pager, next, jumper',
    /* 背景 */
    paginationBackground: true,
    /** 显示在加载图标下方的加载文案 */
    loadingText: '拼命加载中',
    /** 自定义加载图标类名 */
    loadingSpinner: 'el-icon-loading',
    /** 遮罩背景色 */
    loadingBackground: 'rgba(0, 0, 0, 0.2)'
};

export default {
    name: 'BmsCrud',
    components: {
        Expand,
        BmsForm
    },
    provide() {
        return {
            tableRoot: this
        };
    },
    props: {
        /** 显示的结构化数据 */
        data: {
            type: Array,
            default: () => {
                return []
            }
        },
        /** 表格列的配置描述 */
        columns: {
            type: Array,
            default: () => {
                return []
            }
        },
        /** 分页 */
        pagination: {
            type: Object
        },
        /** 表格参数 */
        options: {
            type: Object
        }
    },
    data() {
        return {
            /** loading */
            loading: false,
            /** 数据 */
            tableData: [],
            /** 分页 */
            paginationDef: {
                /** 当前页 */
                currentPage: 1,
                /** 当前页数据量 */
                pageSize: 20,
                /** 总数 */
                total: 0
            },
            /** 表格操作表单配置 */
            form: {
                /** 新增标题 */
                dialogAddTitle: '新增',
                /** 编辑标题 */
                dialogEditTitle: '编辑',
                /** 表单模型 */
                models: {}
            },
            /** 表格搜索表单配置 */
            search: {
                /** 表单模型 */
                models: {}
            },
            /** 表格默认配置 */
            tableOptionDef: {},
            /** 为了保证table每次都会重渲 */
            key: 1
        };
    },
    created() {

    },
    computed: {
        paginationAlign() {
            return {
                left: 'flex-start',
                center: 'flex-center',
                right: 'flex-end'
            }[this.tableOptionDef.paginationAlign || 'right']
        }
    },
    watch: {
        data() {
            this.tableData = this.data;
        },
        options: {
            handler() {
                this.tableOptionDef = deepCopy(true, TABLE_OPTIONS, this.options);
            },
            immediate: true
        },
        pagination: {
            handler() {
                this.paginationDef = deepCopy(this.paginationDef, this.pagination)
            },
            immediate: true
        }
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        /**
         * 表格事件
         */
        /** 当用户手动勾选数据行的 Checkbox 时触发的事件 */
        handleSelect(selection, row) {
            this.$emit('table-select', selection, row);
        },
        /** 当用户手动勾选全选 Checkbox 时触发的事件 */
        handleSelectAll(selection) {
            this.$emit('table-select-all', selection);
        },
        /** 当选择项发生变化时会触发该事件 */
        handleSelectionChange(selection) {
            this.$emit('table-selection-change', selection);
        },
        /** 当单元格 hover 进入时会触发该事件 */
        handleCellMouseEnter(row, column, cell, event) {
            this.$emit('table-cell-mouse-enter', row, column, cell, event);
        },
        /** 当单元格 hover 退出时会触发该事件 */
        handleCellMouseLeave(row, column, cell, event) {
            this.$emit('table-cell-mouse-leave', row, column, cell, event);
        },
        /** 当某个单元格被点击时会触发该事件 */
        handleCellClick(row, column, cell, event) {
            this.$emit('table-cell-click', row, column, cell, event);
        },
        /** 当某个单元格被双击击时会触发该事件	*/
        handleCellDblclick(row, column, cell, event) {
            this.$emit('table-cell-dblclick', row, column, cell, event);
        },
        /** 当某一行被点击时会触发该事件 */
        handleRowClick(row, column, event) {
            this.$emit('table-row-click', row, column, event);
        },
        /** 当某一行被鼠标右键点击时会触发该事件 */
        handleRowContextmenu(row, column, event) {
            this.$emit('table-row-contextmenu', row, column, event);
        },
        /** 当某一行被双击时会触发该事件 */
        handleRowDblclick(row, column, event) {
            this.$emit('table-row-dblclick', row, column, event);
        },
        /** 当表格的排序条件发生变化的时候会触发该事件 */
        handleSortChange({ column, prop, order }) {
            this.$emit('table-sort-change', column, prop, order);
        },
        /** 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性 */
        handleCurrentChange(currentRow, oldCurrentRow) {
            this.$emit('table-current-change', currentRow, oldCurrentRow);
        },
        /** 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded） */
        handleExpandChange(row, expand) {
            this.$emit('table-expand-change', row, expand);
        },
        /** 当某一列的表头被点击时会触发该事件 */
        handleHeaderClick(column, event) {
            this.$emit('table-header-click', column, event);
        },
        /** 当某一列的表头被鼠标右键点击时触发该事件 */
        handleHeaderContextmenu(column, event) {
            this.$emit('table-header-dragend', column, event);
        },
        /** 当拖动表头改变了列的宽度的时候会触发该事件 */
        handleHeaderDragend(newWidth, oldWidth, column, event) {
            this.$emit('table-expand-change', newWidth, oldWidth, column, event);
        },

        /**
         * 分页事件
         */
        /** pageSize 改变时会触发 */
        handlePageSizeChange(val) {
            this.paginationDef.pageSize = val;
            this.$emit('page-size-change', val);
            this.fetchData(this.paginationDef);
        },
        /** currentPage 改变时会触发 */
        handlePageCurrentChange(val) {
            this.paginationDef.currentPage = val;
            this.$emit('page-current-change', val);
            this.fetchData(this.paginationDef);
        },
        /** 用户点击上一页按钮改变当前页后触发 */
        handlePagePrevClick(val) {
            this.paginationDef.currentPage = val;
            this.$emit('page-prev-click', val);
            this.fetchData(this.paginationDef);
        },
        /** 用户点击下一页按钮改变当前页后触发 */
        handlePageNextClick(val) {
            this.paginationDef.currentPage = val;
            this.$emit('page-next-click', val);
            this.fetchData(this.paginationDef);
        },

        /**
         * 工具栏
         */
        /** 新增 */
        handleAddAction() {
            this.$emit('tools-add', val);
        },
        /** 批量删除 */
        handleDeleteAction() {
            this.$emit('tools-delete', val);
        },
        /** 切换 */
        handleToggleColumnsAction() {
            this.$emit('tools-toggle-columns', val);
        },
        /** 导出 */
        handleExportAction() {
            this.$emit('tools-export', val);
        },
        /** 刷新 */
        handleRefreshAction() {
            this.$emit('tools-refresh', val);
        },

        /**
         * 辅助方法
         */
        /** 显示loading */
        showLoading() {
            this.tableLoading = true;
        },
        /** 隐藏loading */
        hideLoading() {
            this.tableLoading = false;
        },

        /** 加载数据 */
        fetchData() {

            this.$emit('fetch-data', 'fetch-data');
        }
    }
};
</script>

<style lang="scss" scoped>
.table-tools {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>
