<template>
    <section class="ibue-error-page">
        <ibue-error :errImg="errImg" :errTips="errTips"  />
    </section>
</template>

<script>
    export default {
        name: "403",
        components: {
            BmsError: () => import('@/components/BmsError')
        },
        data () {
            return {
                errImg: '',
                errTips: '',
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ibue-error-page {
        //
    }
</style>
