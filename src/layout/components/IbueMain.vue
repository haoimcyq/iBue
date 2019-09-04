<template>
    <main :class="{ 'ibue-content-full': !!!showTabs }" class="ibue-layout-content">
        <el-scrollbar style="height: 100%" :native="false">
            <section class="ibue-content-box">
                <transition name="fade-transform" mode="out-in">
                    <keep-alive :include="cachedTags">
                        <router-view :key="key" />
                    </keep-alive>
                </transition>
            </section>
        </el-scrollbar>
    </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'IbueMain',
    computed: {
        ...mapGetters(['showTabs']),
        cachedTags() {
            return this.$store.state.tags.cachedTags;
        },
        key() {
            return this.$route.fullPath;
        }
    }
};
</script>