<template>
    <section class="ibue-pp-32">
        <el-row :gutter="32">
            <el-col v-for="(item, index) in demos" :key="index" :sm="12" :md="8" :lg="6" class="ibue-mb-32">
                <div class="ibue-pp-32 ibue-select-none">
                    <img :src="computer" draggable="false" />
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <h1><span :class="(theme === 'dark' || theme === 'classic') ? 'ibue-text-white' : ''">更多精彩主题，尽在</span>&nbsp;<b class="ibue-text-primary">iBue Pro</b></h1>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import { mapGetters } from 'vuex';
export default {
    name: 'Demo',
    data() {
        return {
            computer: require('@/assets/computer.png'),
            demos: []
        }
    },
    computed: {
        ...mapGetters(['theme'])
    },
    created() {
        for(let i = 0; i < 16; i++) {
            this.demos.push(this.computer)
        }
    }
}
</script>

<style lang="scss" scoped>
img {
    display: block;
    width: 100%;
}
</style>