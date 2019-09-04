<template>
    <section :class="toggleTheme" class="ibue-layout-container">
        <ibue-navbar />
        <section class="ibue-layout-wrapper">
            <ibue-sidebar />
            <section class="ibue-layout-main">
                <ibue-tabs v-if="showTabs" />
                <ibue-main />
            </section>
            <ibue-drawer />
        </section>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import IbueMain from './components/IbueMain.vue';
import IbueNavbar from './components/IbueNavbar.vue';
import IbueSidebar from './components/sidebar/IbueSidebar.vue';
import IbueTabs from './components/IbueTabs.vue';
import IbueDrawer from './components/IbueDrawer.vue';
import { getScreen } from '@/utils/utils';

export default {
    name: 'Index',
    components: {
        IbueMain,
        IbueNavbar,
        IbueSidebar,
        IbueTabs,
        IbueDrawer
    },
    data() {
        return {

        };
    },
    computed: {
        ...mapGetters(['theme', 'showTabs']),
        /** 主题切换 */
        toggleTheme() {
            return `ibue-theme-${this.theme}`
        }
    },
    mounted() {
        /** 屏幕检测 */
        this.$store.dispatch('setting/toggleScreen', getScreen());

        window.addEventListener('resize', this.getScreen, false);

        /** 通过$once来监听定时器，在beforeDestroy钩子可以被清除 */
        this.$once('hook:beforeDestroy', () => {
            window.removeEventListener('resize', this.getScreen, false)
        });
    },
    methods: {
        getScreen() {
            setTimeout(() => {
                this.$store.dispatch('setting/toggleScreen', getScreen())
            }, 0);
        }
    }
};
</script>
