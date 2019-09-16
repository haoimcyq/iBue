<template>
    <section class="developing ibue-select-none">
        <h2>{{ getModuleHeading }}功能开发中...</h2>
    </section>
</template>

<script>
export default {
    name: 'Index',
    watch: {
        $route() {
            //
        }
    },
    computed: {
        getModuleHeading() {
            return this.$route.meta && this.$route.meta.title;
        },
    },
};
</script>

<style lang="scss" scoped>
    .developing {
    display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 400px;
    }
</style>
