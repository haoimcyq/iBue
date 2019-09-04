<template>
    <nav class="ibue-layout-tabs ibue-select-none">
        <div class="ibue-tabs-nav">
            <el-tabs v-model="current" type="card" :closable="true" @tab-click="handleGoRouter" @edit="handleTabsEdit">
                <el-tab-pane
                    v-for="tag in visitedTags"
                    :key="tag.fullPath"
                    :label="tag.meta.title"
                    :name="tag.fullPath"
                >
                    <span slot="label"><i class="iconfont" :class="tag.meta.icon"></i> {{ tag.meta.title }}</span>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div class="ibue-tabs-dropdown">
            <el-dropdown @command="handleCommand" trigger="click">
                <span class="el-dropdown-link"><i class="el-icon-arrow-down el-icon--right"></i> </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="(item, index) in contentmenuList" :key="index" :command="item.command">{{
                        item.name
                    }}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'IbueTabs',
    components: {},
    data() {
        return {
            current: '库存',
            tags: []
        };
    },
    computed: {
        ...mapGetters(['visitedTags']),
        contentmenuList() {
            return [{ name: '关闭其他', command: 'closeOther' }, { name: '关闭全部', command: 'closeAll' }];
        }
    },
    watch: {
        $route(to, from) {
            this.current = to.fullPath;
        }
    },
    methods: {
        /**
         * @description 接收点击关闭控制上选项的事件
         */
        handleCommand(command) {
            const tag = this.visitedTags.find(tag => tag.fullPath === this.current);

            switch (command) {
                case 'closeOther':
                    this.$store.dispatch('tags/delOtherTag', tag);
                    break;
                case 'closeAll':
                    this.$store.dispatch('tags/delAllTag');
                    this.$router.push('/');
                    break;
                default:
                    this.$message.error('操作失败');
                    break;
            }
        },
        /**
         * @description 接收点击 tab 标签的事件
         */
        handleGoRouter(tab, event) {
            const tag = this.visitedTags.find(tag => tag.fullPath === tab.name);

            if (tag) {
                this.$router.push(tag);
            }
        },
        /**
         * @description 点击 tab 上的删除按钮触发这里 首页的删除按钮已经隐藏 因此这里不用判断是 index
         */
        async handleTabsEdit(tagName, action) {
            let index = 0,
                tag = {};

            for (const [i, v] of this.visitedTags.entries()) {
                if (v.fullPath === tagName) {
                    tag = v;
                    index = i;
                    break;
                }
            }
            if (action === 'remove') {
                await this.$store.dispatch('tags/delTag', tag);
                let len = this.visitedTags.length;
                let go = index;

                if (index >= len) {
                    go = index - 1;
                }

                const last = this.visitedTags[go];
                if (last) {
                    this.$router.push(last);
                }
            }
        }
    }
};
</script>
