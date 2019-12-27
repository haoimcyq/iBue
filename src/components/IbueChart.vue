<template>
    <div ref="chartElem" :style="setStyle"></div>
</template>

<script>
import { mapGetters } from 'vuex';
import echarts from 'echarts';
import { getChartTheme } from '@/config/modern';
/** 主题 */
echarts.registerTheme('modern', getChartTheme());

export default {
    name: 'IbueChart',
    props: {
        width: {
            default: '100%'
        },
        height: {
            default: '300px'
        },
        options: {
            type: Object
        }
    },
    computed: {
        ...mapGetters(['isCollapseSidebar', 'isCollapseDrawer', 'theme']),
        setStyle() {
            return {
                width: this.width,
                height: this.height
            };
        }
    },
    data() {
        this.chart = null;

        return {};
    },
    watch: {
        isCollapseSidebar() {
            this.updateChart()
        },
        isCollapseDrawer() {
            this.updateChart()
        },
        theme() {
            if (this.chart) {
                echarts.registerTheme('modern', getChartTheme());
                this.chart.clear();
                this.chart.dispose();
                this.chart = null;
                this.init();
            }
        },
        options: {
            handler(newVal, oldVal) {
                if (this.chart) {
                    if (newVal) {
                        this.chart.setOption(newVal);
                    } else {
                        this.chart.setOption(oldVal);
                    }
                } else {
                    this.init();
                }
            },
            deep: true
        }
    },
    mounted() {
        this.init();
        window.addEventListener('resize', this.resizeHandler);
    },
    beforeDestroy() {
        if (!this.chart) return;
        window.removeEventListener('resize', this.resizeHandler);
        this.chart.clear();
        this.chart.dispose();
        this.chart = null;
    },
    methods: {
        /** 初始化 */
        init() {
            this.$nextTick(() => {
                let chart = echarts.init(this.$refs.chartElem, 'modern');
                this.chart = chart;
                this.chart.setOption(this.options);
            });
        },
        resizeHandler() {
            if (this.chart) {
                this.chart.resize();
            }
        },
        updateChart() {
            setTimeout(() => {
                this.resizeHandler();
            }, 500);
        }
    }
};
</script>

<style scoped></style>
