<template>
    <section>
        <el-row :gutter="16">
            <el-col v-for="(item, index) in widget" :key="index" :sm="12" :md="6">
                <ibue-card class="ibue-widget ibue-mb">
                    <div class="ibue-widget-header">
                        <div>
                            <h3 class="ibue-text-dark">iBue Pro {{ index + 1 }}</h3>
                            <h2 :class="item.color">${{ item.total }}</h2>
                        </div>
                        <span :class="[item.color, item.icon]" class="iconfont" style="font-size: 48px;"></span>
                    </div>
                    <ibue-chart :options="initWidgetChart(item.color)" height="100px" />
                </ibue-card>
            </el-col>
        </el-row>
        <el-row class="ibue-mb" :gutter="16">
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
                        color: 'ibue-text-purple',
                        bg: 'ibue-bg-purple'
                    },
                    {
                        title: '1111111',
                        icon: 'icon-yunyingguanli',
                        total: formatNum(randomNum(100, 8000, 1)),
                        trend: '111',
                        subtxt: '111',
                        color: 'ibue-text-primary',
                        bg: 'ibue-bg-primary'
                    },
                    {
                        title: '1111111',
                        icon: 'icon-shebeiguanli',
                        total: formatNum(randomNum(100, 8000, 1)),
                        trend: '111',
                        subtxt: '111',
                        color: 'ibue-text-danger',
                        bg: 'ibue-bg-danger'
                    },
                    {
                        title: '1111111',
                        icon: 'icon-gongyezujian-yibiaopan',
                        total: formatNum(randomNum(100, 8000, 1)),
                        trend: '111',
                        subtxt: '111',
                        color: 'ibue-text-warning',
                        bg: 'ibue-bg-warning'
                    },
                    {
                        title: '1111111',
                        icon: 'icon-icon_yingyongguanli',
                        total: formatNum(randomNum(100, 8000, 1)),
                        trend: '111',
                        subtxt: '111',
                        color: 'ibue-text-danger',
                        bg: 'ibue-bg-danger'
                    },
                    {
                        title: '1111111',
                        icon: 'icon-yuanquyunwei',
                        total: formatNum(randomNum(100, 8000, 1)),
                        trend: '111',
                        subtxt: '111',
                        color: 'ibue-text-cyan',
                        bg: 'ibue-bg-cyan'
                    },
                    {
                        title: '1111111',
                        icon: 'icon-peiwangyindao',
                        total: formatNum(randomNum(100, 8000, 1)),
                        trend: '111',
                        subtxt: '111',
                        color: 'ibue-text-success',
                        bg: 'ibue-bg-success'
                    },
                    {
                        title: '1111111',
                        icon: 'icon-gongnengdingyi',
                        total: formatNum(randomNum(100, 8000, 1)),
                        trend: '111',
                        subtxt: '111',
                        color: 'ibue-text-primary',
                        bg: 'ibue-bg-primary'
                    }
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
                        top: 30,
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
        color: #ffffff;

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
