<template>
    <aside class="ibue-layout-sidebar ibue-select-none" :class="[hasCollapse, getSidebarColor, getSidebarActiveColor]">
        <ibue-scrollbar>
            <div v-if="isEmptyMenu">没有发现菜单</div>
            <el-menu
                    :collapse="isCollapseSidebar"
                    :default-active="$route.path"
                    unique-opened
                    router
            >
                <ibue-sidebar-item :menu="menu" />
            </el-menu>
        </ibue-scrollbar>
    </aside>
</template>

<script>
import { mapGetters } from 'vuex';
import IbueSidebarItem from './IbueSidebarItem.vue';
import IbueScrollbar from '@/components/IbueScrollbar.vue';

export default {
    name: 'IbueSidebar',
    components: {
        IbueSidebarItem,
        IbueScrollbar
    },
    data() {
        return {

        };
    },
    computed: {
        /** 全局数据 */
        ...mapGetters(['menu', 'layout', 'isCollapseSidebar', 'topColor', 'sidebarColor']),
        /** 是否是空菜单 */
        isEmptyMenu() {
            return false;
        },
        getSidebarColor() {
            return `ibue-bg-${this.sidebarColor}`;
        },
        getSidebarActiveColor() {
            return `sidebar-menu-active-${this.topColor}`;
        },
        hasCollapse() {
          return this.isCollapseSidebar ? 'collapse' : ''
        }
    },
    mounted() {

    },
    destroyed() {

    },
    methods: {
        handleToggleSidebar() {
            this.$store.dispatch('setting/toggleSideBar');
        }
    }
};
</script>
