<template>
    <div class="menu-wrapper">
        <template v-for="item in menu">
            <el-menu-item v-if="!item.children.length" :key="item.path" :index="resolvePath(item.path)">
                <i v-if="item.meta && item.meta.icon" class="ibue-menu-icon iconfont" :class="item.meta.icon"></i>
                <span slot="title">{{ item.meta.title }}</span>
            </el-menu-item>
            <el-submenu v-else :key="item.path" :index="resolvePath(item.path)">
                <template slot="title">
                    <i v-if="item.meta && item.meta.icon" class="ibue-menu-icon iconfont" :class="item.meta.icon"></i>
                    <span slot="title">{{ item.meta.title }}</span>
                </template>
                <ibue-sidebar-item :menu="item.children" :base-path="resolvePath(item.path)" />
            </el-submenu>
        </template>
    </div>
</template>

<script>
export default {
    name: 'IbueSidebarItem',
    props: {
        menu: {
            type: Array
        },
        basePath: {
            type: String,
            default: ''
        }
    },
    data() {
        return {};
    },
    methods: {
        resolvePath(routePath) {
            if (this.basePath) {
                return this.basePath + '/' + routePath;
            } else {
                return routePath;
            }
        },
        /** 判断是不是合法的链接 */
        isExternal(url) {
            return /^((https?|ftp|file):\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(\/\w\.-]*)*\/?/.test(url);
        }
    }
};
</script>
