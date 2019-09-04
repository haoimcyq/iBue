<template>
    <section>
        <el-row :gutter="16" class="ibue-mb-16">
            <el-col>
                <ibue-card>
                    <el-col :sm="24" :md="12">
                        <h2 class="ibue-mt-0">Hello iBue Pro!</h2>
                        <p>Hello Bms Pro</p>
                        <p>Hello Bms Pro</p>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-row :gutter="16">
                            <el-col v-for="(item, index) in widget" :key="index" :sm="8">
                                <ibue-card class="ibue-widget ibue-bd-none">
                                    <div class="ibue-widget-header">
                                        <div style="width: 100%;">
                                            <h6 class="ibue-my-0 ibue-text-right">iBue Pro {{ index + 1 }}</h6>
                                            <h4 :class="item.color" class="ibue-my-0 ibue-font-weight-bold ibue-text-right">
                                                ${{ item.total }}
                                            </h4>
                                        </div>
                                        <span
                                            :class="[item.color, item.icon]"
                                            class="iconfont"
                                            style="font-size: 48px;"
                                        ></span>
                                    </div>
                                    <ibue-chart :options="initWidgetChart(item.color)" height="80px" />
                                </ibue-card>
                            </el-col>
                        </el-row>
                    </el-col>
                </ibue-card>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col v-for="(item, index) in icons" :key="index" :sm="6" :md="3" class="ibue-mb-16">
                <ibue-card class="ibue-text-center">
                    <span :class="[item.icon, item.color]" class="iconfont" style="font-size: 42px;"></span>
                    <h5 class="ibue-mt-8 ibue-mb-0">{{ item.title }}</h5>
                </ibue-card>
            </el-col>
        </el-row>
        <el-row class="ibue-mb-16" :gutter="16">
            <el-col :sm="24" :md="12">
                <ibue-card>
                    <ibue-chart :options="options" height="400px" />
                </ibue-card>
            </el-col>
            <el-col :span="12">
                <ibue-card>
                    <ibue-chart :options="options2" height="400px" />
                </ibue-card>
            </el-col>
        </el-row>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import IbueChart from '@/components/IbueChart.vue';
import { randomNum, formatNum } from '@/utils/utils';

export default {
    name: 'DashboardV6',
    components: { IbueChart },
    data() {
        return {
            widget: [
                {
                    title: '1111111',
                    icon: 'icon-zuzhiqunzu',
                    total: formatNum(randomNum(100, 8000, 1)),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-info',
                    bg: 'ibue-bg-info'
                },
                {
                    title: '1111111',
                    icon: 'icon-yunyingguanli',
                    total: formatNum(randomNum(100, 8000, 1)),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-warning',
                    bg: 'ibue-bg-warning'
                },
                {
                    title: '1111111',
                    icon: 'icon-shebeiguanli',
                    total: formatNum(randomNum(100, 8000, 1)),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-danger',
                    bg: 'ibue-bg-danger'
                }
            ],
            icons: [
                { title: 'iBue Pro 1', icon: 'icon-bill', color: 'ibue-text-primary' },
                { title: 'iBue Pro 2', icon: 'icon-product', color: 'ibue-text-danger' },
                { title: 'iBue Pro 3', icon: 'icon-present', color: 'ibue-text-cyan' },
                { title: 'iBue Pro 4', icon: 'icon-sponsor', color: 'ibue-text-warning' },
                { title: 'iBue Pro 5', icon: 'icon-stock', color: 'ibue-text-purple' },
                { title: 'iBue Pro 6', icon: 'icon-function', color: 'ibue-text-success' },
                { title: 'iBue Pro 7', icon: 'icon-advice2', color: 'ibue-text-teal' },
                { title: 'iBue Pro 8', icon: 'icon-version', color: 'ibue-text-orange' }
            ],
            options1: {},
            options: {
                title: {
                    text: 'iBue Pro'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    x: 'right',
                    data: ['辅料合同', '面料合同', '加工合同', '经销合同']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: []
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '辅料合同',
                        type: 'bar',
                        data: [132, 200, 233, 523, 425, 231, 644, 466, 431, 123]
                    },
                    {
                        name: '面料合同',
                        type: 'bar',
                        data: [211, 204, 413, 243, 145, 561, 461, 124, 612, 234]
                    }
                ]
            },
            options2: {
                title: {
                    text: 'iBue Pro'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    x: 'right',
                    data: ['辅料合同', '面料合同', '加工合同', '经销合同']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: []
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '辅料合同',
                        type: 'line',
                        symbolSize: 12,
                        color: '#3888fa',
                        data: [132, 200, 233, 523, 425],
                        lineStyle: {
                            normal: {
                                width: 5,
                                color: {
                                    type: 'linear',
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: '#64b2fa'
                                        },
                                        {
                                            offset: 0.4,
                                            color: '#3888fa'
                                        },
                                        {
                                            offset: 1,
                                            color: '#3888fa'
                                        }
                                    ],
                                    globalCoord: false
                                },
                                shadowColor: 'rgba(56, 136, 250, .5)',
                                shadowBlur: 20,
                                shadowOffsetY: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#3888fa',
                                borderWidth: 4,
                                borderColor: '#3888fa'
                            }
                        },
                        smooth: true
                    },
                    {
                        name: '面料合同',
                        type: 'line',
                        symbolSize: 12,
                        color: '#3888fa',
                        data: [211, 204, 413, 243, 145],
                        lineStyle: {
                            normal: {
                                width: 5,
                                color: {
                                    type: 'linear',
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: '#64b2fa'
                                        },
                                        {
                                            offset: 0.4,
                                            color: '#3888fa'
                                        },
                                        {
                                            offset: 1,
                                            color: '#3888fa'
                                        }
                                    ],
                                    globalCoord: false
                                },
                                shadowColor: 'rgba(56, 136, 250, .5)',
                                shadowBlur: 20,
                                shadowOffsetY: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#3888fa',
                                borderWidth: 4,
                                borderColor: '#3888fa'
                            }
                        },
                        smooth: true
                    }
                ]
            }
        };
    },
    computed: {
        ...mapGetters(['colors'])
    },
    methods: {
        initWidgetChart(color) {
            let keyword = String(color).replace(/^ibue-text-/, '');

            return {
                grid: {
                    top: 16,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    containLabel: true
                },
                color: [this.colors[keyword]],
                xAxis: [
                    {
                        type: 'category',
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        data: []
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    }
                ],
                series: [
                    {
                        name: '辅料合同',
                        type: 'bar',
                        data: randomNum(100, 500, 20)
                    }
                ]
            };
        }
    }
};
</script>

<style lang="scss" scoped>
.ibue-widget {

    .ibue-widget-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .ibue-widget-icon {
        width: 48px;
        height: 48px;
        line-height: 48px;
        font-size: 24px;
        text-align: center;
        color: #222;
        background-color: #ffffff;
        border-radius: 50%;
    }
}
</style>
