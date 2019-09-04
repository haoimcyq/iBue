<template>
    <section>
        <!-- 表格 -->
        <el-table
                :key="key"
                ref="ibueTable"
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
                        width="55"
                        :key="index"
                >
                </el-table-column>
                <el-table-column
                        v-if="renderType(column) === 'index'"
                        type="index"
                        width="55"
                        :key="index"
                >
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
                        <slot :name="column.prop" :index="scope.$index" :row="scope.row" />
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
    </section>
</template>

<script>
    import Expand from './expand';

    export default {
        name: 'IbueTable',
        components: {
            Expand
        },
        provide() {
            return {
                tableRoot: this
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
        },
        data() {
            return {
                key: 1,
                paginationDef: {
                    pageSize: 0,
                    currentPage: 1,
                    total: 0,
                    paginationPageSizes: [20, 40, 60, 80, 100],
                    background: true,
                    paginationLayout: 'total, sizes, prev, pager, next, jumper',
                    paginationAlign: 'right',
                },
            };
        },
        created() {
            //
        },
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
                        {},
                        this.paginationDef,
                        this.pagination,
                    );
                },
                immediate: true,
            },
        },
        methods: {
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
            /** pageSize 改变时会触发 */
            handlePageSizeChange(val) {
                this.paginationDef.pageSize = val;
                this.$emit('size-change', val);
                this.fetchData(this.paginationDef);
            },
            /** currentPage 改变时会触发 */
            handlePageCurrentChange(val) {
                this.paginationDef.currentPage = val;
                this.$emit('current-change', val);
                this.fetchData(this.paginationDef);
            },
            /** 用户点击上一页按钮改变当前页后触发 */
            handlePagePrevClick(val) {
                this.paginationDef.currentPage = val;
                this.$emit('prev-click', val);
                this.fetchData(this.paginationDef);
            },
            /** 用户点击下一页按钮改变当前页后触发 */
            handlePageNextClick(val) {
                this.paginationDef.currentPage = val;
                this.$emit('next-click', val);
                this.fetchData(this.paginationDef);
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
            handleExportAction() {
                this.$emit('tools-export', 'val');
            },
            /** 刷新 */
            handleRefreshAction() {
                this.$emit('tools-refresh', 'val');
            }
        },
    };
</script>

<style scoped></style>
