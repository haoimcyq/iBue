<template>
    <aside class="ibue-layout-sidebar ibue-select-none" :class="[hasCollapse, `ibue-bg-${sidebarColor}`, `ibue-navbar-theme-${topColor}`]">
        <el-scrollbar style="height: 100%;">
            <div v-if="isEmptyMenu">没有发现菜单</div>
            <el-menu
                    :collapse="isCollapseSidebar"
                    :default-active="$route.path"
                    :background-color="menuBackground"
                    :text-color="menuText"
                    :active-text-color="activeText"
                    unique-opened
                    router
            >
                <ibue-sidebar-item :menu="menu" />
            </el-menu>
        </el-scrollbar>
    </aside>
</template>

<script>
import { mapGetters } from 'vuex';
import IbueSidebarItem from './IbueSidebarItem.vue';

export default {
    name: 'IbueSidebar',
    components: {
        IbueSidebarItem
    },
    data() {
        return {
            colors: {
                pink: '#e91e63',
                red: '#f44336',
                blue: '#0366d6',
                purple: '#673ab7',
                indigo: '#3f51b5',
                cyan: '#00ACC1',
                amber: '#ffa000',
                orange: '#ff5722',
                green: '#28a745',
                teal: '#00897b',
                brown: '#795548',
                dark: '#232f3f',
                white: '#ffffff',
                classic: '#273446'
            }
        };
    },
    computed: {
        /** 全局数据 */
        ...mapGetters(['menu', 'layout', 'theme', 'isCollapseSidebar', 'topColor', 'sidebarColor']),
        /** 是否是空菜单 */
        isEmptyMenu() {
            return false;
        },
        hasCollapse() {
            return this.isCollapseSidebar ? 'collapse' : ''
        },
        menuBackground() {
            return this.colors[this.sidebarColor]
        },
        menuText() {
            if (this.sidebarColor === 'white') {
                return this.colors.dark
            }

            return 'rgba(255, 255, 255, .76)'
        },
        activeText() {
            if (!['white', 'dark', 'classic'].includes(this.sidebarColor)) {
                return 'rgba(255, 255, 255, 1)'
            } else {
                return ['white', 'dark', 'classic'].includes(this.topColor) ? this.colors.blue : this.colors[this.topColor]
            }
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
