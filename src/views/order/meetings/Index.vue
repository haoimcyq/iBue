<template>
  <section>
    <ibue-card class="ibue-mb-16">
      <header class="ibue-module-heading" slot="header">
        <h5>{{ getModuleHeading }}</h5>
      </header>
      <el-form ref="form" :model="form" label-width="80px">
        <el-row :gutter="16">
          <el-col :md="6">
            <el-form-item label="活动名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="6">
            <el-form-item label="活动名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="6">
            <el-form-item label="活动名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="6">
            <el-form-item class="ibue-action-col">
              <el-button>重置</el-button>
              <el-button type="primary" @click="onSubmit">搜索</el-button>
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
              <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :md="6">
              <el-form-item label="活动名称">
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
    <ibue-card>
      <header slot="header">
        <el-button size="small" type="primary" icon="el-icon-plus"
          >新增</el-button
        >
        <el-button size="small" type="danger" icon="el-icon-delete"
          >删除</el-button
        >
        <el-button size="small" type="warning" icon="el-icon-upload2"
          >导入</el-button
        >
        <el-button size="small" type="info" icon="el-icon-download"
          >导出</el-button
        >
      </header>
      <ibue-table
        :columns="columns"
        :data="data"
        :pagination="pagination"
      ></ibue-table>
    </ibue-card>
  </section>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      showMore: false,
      num: 1,
      form: {
        name: '',
      },
      pagination: {
        pageSize: 20,
        currentPage: 1,
        total: 10,
      },
      columns: [
        {
          type: 'selection',
        },
        {
          prop: 'name',
          label: '名称',
          formatter(row, column, cellValue, index) {
            return `${cellValue}${++index}`;
          },
        },
        {
          prop: 'user',
          label: '对象',
          sortable: true,
          formatter(row, column, cellValue, index) {
            return `${cellValue}${++index}`;
          },
        },
        {
          prop: 'begin_time',
          label: '开始时间',
        },
        {
          prop: 'end_time',
          label: '完成时间',
        },
        {
          prop: 'finish',
          label: '完成情况',
        },
        {
          prop: 'important',
          label: '重要性',
          render(h, params) {
            return h(
              'el-tag',
              {
                props: {
                  type: 'danger',
                  size: 'small',
                },
              },
              '紧急',
            );
          },
        },
        {
          prop: 'remark',
          label: '备注',
        },
        {
          prop: 'action',
          label: '操作',
          width: 200,
          render: (h, params) => {
            return h('div', [
              h(
                'el-button',
                {
                  props: {
                    type: 'text',
                    size: 'small',
                    icon: 'el-icon-view',
                  },
                },
                '查看',
              ),
              h(
                'el-button',
                {
                  props: {
                    type: 'text',
                    size: 'small',
                    icon: 'el-icon-edit',
                  },
                },
                '编辑',
              ),
              h(
                'el-button',
                {
                  props: {
                    type: 'text',
                    size: 'small',
                    icon: 'el-icon-delete',
                  },
                },
                '删除',
              ),
            ]);
          },
        },
      ],
      data: [
        {
          name: '任务',
          user: 'user',
          begin_time: '2019-09-04',
          end_time: '2019-10-04',
          finish: '进行中',
          remark: '',
        },
        {
          name: '任务',
          user: 'user',
          begin_time: '2019-09-04',
          end_time: '2019-10-04',
          finish: '进行中',
          remark: '',
        },
        {
          name: '任务',
          user: 'user',
          begin_time: '2019-09-04',
          end_time: '2019-10-04',
          finish: '进行中',
          remark: '',
        },
        {
          name: '任务',
          user: 'user',
          begin_time: '2019-09-04',
          end_time: '2019-10-04',
          finish: '进行中',
          remark: '',
        },
        {
          name: '任务',
          user: 'user',
          begin_time: '2019-09-04',
          end_time: '2019-10-04',
          finish: '进行中',
          remark: '',
        },
        {
          name: '任务',
          user: 'user',
          begin_time: '2019-09-04',
          end_time: '2019-10-04',
          finish: '进行中',
          remark: '',
        },
        {
          name: '任务',
          user: 'user',
          begin_time: '2019-09-04',
          end_time: '2019-10-04',
          finish: '进行中',
          remark: '',
        },
        {
          name: '任务',
          user: 'user',
          begin_time: '2019-09-04',
          end_time: '2019-10-04',
          finish: '进行中',
          remark: '',
        },
        {
          name: '任务',
          user: 'user',
          begin_time: '2019-09-04',
          end_time: '2019-10-04',
          finish: '进行中',
          remark: '',
        },
        {
          name: '任务',
          user: 'user',
          begin_time: '2019-09-04',
          end_time: '2019-10-04',
          finish: '进行中',
          remark: '',
        },
      ],
    };
  },
  created() {
    console.log(this.$route);
  },
  computed: {
    getModuleHeading() {
      return this.$route.meta && this.$route.meta.title;
    },
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
  },
};
</script>

<style scoped></style>
