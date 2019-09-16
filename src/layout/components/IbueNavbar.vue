<template>
    <header class="ibue-layout-navbar ibue-select-none" :class="getTopColor">
        <aside class="ibue-navbar-brand" :class="[getBrandColor, isCollapseSidebar ? 'collapse' : '']">
            <span class="ibue-navbar-logo">
                <img :src="logo" />
                <span> iBue Admin Pro</span>
            </span>
            <span class="ibue-navbar-toggler iconfont" :class="isCollapseSidebar ? 'icon-menu-open' : 'icon-menu-close'" @click="handleToggleSidebar"></span>
        </aside>
        <nav class="ibue-navbar-header">
            <ul class="ibue-navbar-nav">
                <li v-for="(item, index) in menu" :key="index">
                    <router-link :to="item.path">
                        <i :class="item.icon"></i>
                        <span>{{ item.title }}</span>
                    </router-link>
                </li>
            </ul>
            <ul class="ibue-navbar-nav">
                <li @click="handleFullScreen">
                    <el-tooltip class="item" effect="dark" content="通知" placement="bottom-end">
                        <el-button :icon="isFullscreen ? 'icon-fullscreen-reset' : 'icon-fullscreen'"></el-button>
                    </el-tooltip>
                </li>
                <li @click.stop="handleToggleDrawer('message')">
                    <el-tooltip class="item" effect="dark" content="通知" placement="bottom-end">
                        <el-button icon="el-icon-message"></el-button>
                    </el-tooltip>
                </li>
                <li @click.stop="handleToggleDrawer('theme')">
                    <el-tooltip class="item" effect="dark" content="设置" placement="bottom-end">
                        <el-button icon="el-icon-setting"></el-button>
                    </el-tooltip>
                </li>
                <li @click="gotoProfile">
                    <div class="ibue-avatar">
                        <el-avatar size="medium" :src="avatar" style="border: 2px solid #ffffff;"></el-avatar>
                        <span class="username">admin</span>
                    </div>
                </li>
                <li class="ibue-exit-btn">
                    <el-tooltip class="item" effect="dark" content="退出登录" placement="bottom-end">
                        <el-button icon="el-icon-switch-button" @click="handleLogout"></el-button>
                    </el-tooltip>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import { mapGetters } from 'vuex';
import screenfull from 'screenfull';

export default {
    name: 'IbueNavbar',
    data() {
        return {
            logo: require('@/assets/logo.png'),
            isFullscreen: false,
            menu: [
                {
                    title: '演示',
                    icon: 'icon-todo',
                    path: '/demo'
                },
                {
                    title: '订单',
                    icon: 'icon-bill',
                    path: '/dashboardV1'
                },
                {
                    title: '库存',
                    icon: 'icon-stock',
                    path: '/dashboardV3'
                },
                {
                    title: '商家',
                    icon: 'icon-people',
                    path: '/dashboardV2'
                },
                {
                    title: '财务',
                    icon: 'icon-moneybag',
                    path: '/dashboardV4'
                },
                {
                    title: '采购',
                    icon: 'icon-shopping-car',
                    path: '/dashboardV5'
                },
                {
                    title: '供销',
                    icon: 'icon-version',
                    path: '/dashboardV6'
                },
                {
                    title: '推广',
                    icon: 'icon-send',
                    path: '/dashboardV7'
                }
            ],
            avatar: require('@/assets/avatar.jpg')
        };
    },
    created() {
        screenfull.on('change', () => {
            this.isFullscreen = screenfull.isFullscreen;
        });

        /** 通过$once来监听定时器，在beforeDestroy钩子可以被清除 */
        this.$once('hook:beforeDestroy', () => {
            screenfull.off('change', () => {
                this.screenfull = null;
            });
        });
    },
    computed: {
        ...mapGetters(['brandColor', 'topColor', 'isCollapseSidebar']),
        getTopColor() {
            return `ibue-bg-${this.topColor}`;
        },
        getBrandColor() {
            return `ibue-bg-${this.brandColor}`;
        }
    },
    methods: {
        /** 全屏 */
        handleFullScreen() {
            if (screenfull.enabled) {
                screenfull.toggle();
            }
        },
        /** 
         * @description 当前激活的tabName 
         * @param {String} tabName 当前激活的tabName
         */
        async handleToggleDrawer(tabName) {
            await this.$store.dispatch('setting/setDrawerTabsActive', tabName);
            this.$store.dispatch('setting/toggleDrawer', false);
        },
        gotoProfile() {
            this.$router.push({
                path: '/profile'
            });
        },
        handleToggleSidebar(tabName) {
            this.$store.dispatch('setting/toggleSideBar');
        },
        handleLogout() {
            this.$confirm('退出登录, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$store.dispatch('user/logout').then(response => {
                    this.$router.push('/login');
                });
            });
        }
    }
};
</script>
