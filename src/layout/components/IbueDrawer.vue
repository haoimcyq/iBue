<template>
    <aside class="ibue-layout-drawer ibue-select-none" :class="{ collapse: isCollapseDrawer }">
        <div class="ibue-drawer-close">
            <span class="el-icon-close" @click="handleDrawerClose" title="关闭"></span>
        </div>
        <el-tabs v-model="activeName" type="card" @tab-click="handleTabClick">
            <el-tab-pane label="我的消息" name="message">
                <span slot="label"><i class="el-icon-message"></i> 我的消息</span>
                <el-scrollbar style="height: 100%" :native="false">
                    <ibue-card :bordered="false">
                        <ul class="ibue-message-list">
                            <li v-for="(item, index) in message" :key="index" class="ibue-my-16">
                                <div class="ibue-message-media">
                                    <el-avatar :src="item.avatar"></el-avatar>
                                </div>
                                <div class="ibue-message-content">
                                    <h3>{{ item.title }}</h3>
                                    <p class="ibue-text-overflow">{{ item.content }}</p>
                                </div>
                            </li>
                        </ul>
                    </ibue-card>
                </el-scrollbar>
            </el-tab-pane>
            <el-tab-pane label="个性换肤" name="theme">
                <span slot="label"><i class="iconfont icon-theme"></i> 个性换肤</span>
                <el-scrollbar style="height: 100%" :native="false">
                    <ibue-card class="theme-panel" :bordered="false">
                        <h6 class="ibue-mt-0 ibue-mb-16">主题</h6>
                        <div class="ibue-pb-16">
                            <el-radio-group v-model="themeRadio" @change="handleChangeTheme">
                                <el-radio label="light" class="ibue-mb-16">简约风格</el-radio>
                                <el-radio label="dark" class="ibue-mb-16">暗黑风格</el-radio>
                                <el-radio label="classic">经典风格</el-radio>
                            </el-radio-group>
                        </div>
                        <h6>Navbar背景</h6>
                        <ul class="ibue-thumbnail-list ibue-pb-16">
                            <li v-for="(item, index) in themes" :key="index">
                                <div
                                    :class="toggleThumbnailBg"
                                    class="layout-box"
                                    @click="handleChangeTopColor(item)"
                                >
                                    <span :class="item">header</span>
                                    <span :class="sidebarColor">sidebar</span>
                                    <span :class="brandColor">brand</span>
                                    <span v-if="topColor === item">
                                        <i class="iconfont icon-selected"></i>
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <h6>Brand背景</h6>
                        <ul class="ibue-thumbnail-list ibue-pb-16">
                            <li v-for="(item, index) in themes" :key="index">
                                <div
                                    :class="toggleThumbnailBg"
                                    class="layout-box"
                                    @click="handleChangeBrandColor(item)"
                                >
                                    <span :class="topColor">header</span>
                                    <span :class="sidebarColor">sidebar</span>
                                    <span :class="item">brand</span>
                                    <span v-if="brandColor === item">
                                        <i class="iconfont icon-selected"></i>
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <h6>Sidebar背景</h6>
                        <ul class="ibue-thumbnail-list ibue-pb-16">
                            <li v-for="(item, index) in themes" :key="index">
                                <div
                                    :class="toggleThumbnailBg"
                                    class="layout-box"
                                    @click="handleChangeAsideColor(item)"
                                >
                                    <span :class="topColor">header</span>
                                    <span :class="item">sidebar</span>
                                    <span :class="brandColor">brand</span>
                                    <span v-if="sidebarColor === item">
                                        <i class="iconfont icon-selected"></i>
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <h6>其他设置</h6>
                        <ul class="ibue-switch-list">
                            <li>
                                <p>隐藏选项卡栏</p>
                                <el-switch v-model="isShowTabs"> </el-switch>
                            </li>
                        </ul>
                    </ibue-card>
                </el-scrollbar>
            </el-tab-pane>
        </el-tabs>
    </aside>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'IbueDrawer',
    data() {
        return {
            activeName: '',
            themeRadio: '',
            isShowTabs: true,
            avatar: require('@/assets/avatar.jpg'),
            message: []
        };
    },
    created() {
        this.themeRadio = this.theme;
        this.isShowTabs = this.showTabs;

        for (let i = 0; i < 20; i++) {
            this.message.push({
                avatar: this.avatar,
                title: '好消息，请注意查收',
                content: '根据路边社报道，最近有一伙不明身份的外来人正在秘密'
            })
        }
    },
    computed: {
        ...mapGetters([
            'theme',
            'bgColors',
            'sidebarColor',
            'topColor',
            'brandColor',
            'isCollapseDrawer',
            'showTabs',
            'drawerTabsActive'
        ]),
        themes() {
            return [
                'pink',
                'red',
                'blue',
                'purple',
                'indigo',
                'cyan',
                'amber',
                'orange',
                'green',
                'teal',
                'brown',
                'dark',
                'white'
            ].map(v => `ibue-bg-${v}`);
        },
        toggleThumbnailBg() {
            if (this.theme === 'dark') {
                return 'darken'
            } else if (this.theme === 'classic') {
                return 'classic'
            } else {
                return 'lighten'
            }
        }
    },
    watch: {
        themeRadio(newVal, oldVal) {
            if (newVal !== oldVal) {

            }
        },
        isShowTabs(newVal) {
            this.$store.dispatch('setting/setShowTabs', newVal);
        },
        drawerTabsActive: {
            handler(val) {
                this.activeName = val;
            },
            immediate: true
        }
    },
    methods: {
        handleTabClick() {
            //
        },
        /** 修改侧边栏背景色 */
        handleChangeAsideColor(colorName) {
            this.$store.dispatch('setting/setSidebarColor', colorName);
        },
        /** 修改顶部背景色 */
        handleChangeTopColor(colorName) {
            this.$store.dispatch('setting/setTopColor', colorName);
        },
        /** 修改LOGO背景色 */
        handleChangeBrandColor(colorName) {
            this.$store.dispatch('setting/setBrandColor', colorName);
        },
        /** 关闭抽屉栏 */
        handleDrawerClose() {
            this.$store.dispatch('setting/toggleDrawer', true);
        },
        /** 切换主题 */
        handleChangeTheme(val) {
            this.$store.dispatch('setting/setTheme', val);

            switch (val) {
                case 'light':
                    this.$store.dispatch('setting/setSidebarColor', 'ibue-bg-white');
                    this.$store.dispatch('setting/setTopColor', 'ibue-bg-white');
                    this.$store.dispatch('setting/setBrandColor', 'ibue-bg-white');
                    break;
                case 'dark':
                    this.$store.dispatch('setting/setSidebarColor', 'ibue-bg-dark');
                    this.$store.dispatch('setting/setTopColor', 'ibue-bg-dark');
                    this.$store.dispatch('setting/setBrandColor', 'ibue-bg-dark');
                    break;
                case 'classic':
                    this.$store.dispatch('setting/setSidebarColor', 'ibue-bg-classic');
                    this.$store.dispatch('setting/setTopColor', 'ibue-bg-classic');
                    this.$store.dispatch('setting/setBrandColor', 'ibue-bg-dark');
                    break;
                default:
                    break;
            }

            /** 解决echarts主题切换 */
            window.location.reload();
        }
    }
};
</script>

<style lang="scss">
@import '../../styles/variables.scss';

.ibue-layout-drawer {
    .el-tabs--card > .el-tabs__header .el-tabs__nav {
        border: 0;
    }

    .el-tabs--card > .el-tabs__header {
        border: 0;
    }

    .el-tabs--card > .el-tabs__header .el-tabs__item {
        padding-left: 16px;
        padding-right: 16px;
        border: 0;

        &.is-closable:hover {
            padding-left: 16px;
            padding-right: 16px;
        }

        .el-icon-close {
            width: 14px;
        }
    }

    .el-tabs__item.is-active {
    }
}

.ibue-drawer-close {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    z-index: 10;

    &:hover {
        color: $ibue-color-danger;
    }
}

.theme-panel {

    > h3 {
        font-size: 16px;
        color: $ibue-color-dark;
        font-weight: 500;
        margin-bottom: 16px;
    }
}

.ibue-thumbnail-list {
    display: flex;
    flex-wrap: wrap;

    > li {
        flex: 0 0 25%;
        padding: 6px;

        > .layout-box {
            position: relative;
            width: 100%;
            height: 40px;
            border: 1px solid $border-color;
            background: #f3f4f5;

            &.darken {
                border-color: lighten($ibue-color-dark, 14%);
                background-color: darken($ibue-color-dark, 8%);
            }

            &.classic {
                border-color: lighten($ibue-color-dark, 14%);
                background-color: lighten($ibue-color-dark, 6%);
            }

            > span {
                position: absolute;
                display: block;
                text-indent: 9999px;

                &:nth-of-type(1) {
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 10px;
                }

                &:nth-of-type(2) {
                    top: 10px;
                    left: 0;
                    bottom: 0;
                    width: 20px;
                    background-color: #ffffff;
                }

                &:nth-of-type(3) {
                    top: 0;
                    left: 0;
                    width: 20px;
                    height: 10px;
                    z-index: 3;
                }

                &:nth-of-type(4) {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    text-indent: 0;
                    background-color: rgba($color: #ffffff, $alpha: .3);

                    i {
                        font-size: 24px;
                        color: $ibue-color-primary;
                    }
                }
            }
        }
    }
}

.ibue-switch-list {
    > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

.ibue-message-list {
    width: 100%;
    
    > li {
        display: flex;
        align-items: center;
        width: 100%;

        .ibue-message-media {
            display: flex;
            justify-content: center;
            flex: 0 0 48px;
        }

        .ibue-message-content {
            flex: 1;
            padding-left: 8px;

            h3 {
                font-size: 16px;
                margin-top: 0;
                margin-bottom: 4px;
            }

            p {
                width: 100%;
                font-size: 14px;
                margin: 0
            }
        }
    }
}
</style>
