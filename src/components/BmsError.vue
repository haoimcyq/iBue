<template>
    <section class="ibue-error">
        <img class="error-img" :src="errImg" />
        <p class="error-tips">{{ errTips }}</p>
        <router-link :to="errBack">
            <el-button>返回主页</el-button>
        </router-link>
    </section>
</template>

<script>
    export default {
        name: "BmsError",
        props: {
            errImg: {
                //
            },
            errTips: {
                //
            },
            errBack: {
                //
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ibue-error {
        //
        .error-img {
            //
        }

        .error-tips {
            //
        }
    }
</style>
