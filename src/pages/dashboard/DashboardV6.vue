<template>
    <section>
        <el-row :gutter="16">
            <el-col v-for="(item, index) in widget" :key="index" :sm="12" :md="6">
                <ibue-card class="ibue-widget ibue-mb-16">
                    <div class="ibue-widget-header" :class="item.bg" style="margin: -16px; margin-bottom: 16px;">
                        <ibue-chart :options="initWidgetChart(item.color)" height="120px" />
                    </div>
                    <div class="ibue-flex">
                        <div class="ibue-flex-col-1 ibue-text-center">
                            <h3 :class="item.color" class="ibue-mb-0">{{ item.total }}</h3>
                            <h5>iBue Pro {{ index + 1 }}</h5>
                        </div>
                        <div class="ibue-flex-col-1 ibue-text-center">
                            <h3 :class="item.color" class="ibue-mb-0">{{ item.total2 }}</h3>
                            <h5>iBue Pro {{ index + 1 }}</h5>
                        </div>
                    </div>
                </ibue-card>
            </el-col>
        </el-row>
        <el-row class="ibue-mb-16" :gutter="16">
            <el-col :sm="24" :md="12">
                <ibue-card>
                    <ibue-chart :options="options" height="500px" />
                </ibue-card>
            </el-col>
            <el-col :span="12">
                <ibue-card>
                    <ibue-chart :options="options2" height="500px" />
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
            let time = [];

            for (let i = 1; i <= 12; i++) {
                time.push(i + '月');
            }

            return {
                widget: [
                    {
                        title: '1111111',
                        icon: 'icon-zuzhiqunzu',
                        total: formatNum(randomNum(1100, 18000, 1)),
                        total2: formatNum(randomNum(1100, 18000, 1)),
                        trend: '111',
                        subtxt: '111',
                        color: 'ibue-text-purple',
                        bg: 'ibue-bg-purple'
                    },
                    {
                        title: '1111111',
                        icon: 'icon-yunyingguanli',
                        total: formatNum(randomNum(1200, 18000, 1)),
                        total2: formatNum(randomNum(1030, 82000, 1)),
                        trend: '111',
                        subtxt: '111',
                        color: 'ibue-text-primary',
                        bg: 'ibue-bg-primary'
                    },
                    {
                        title: '1111111',
                        icon: 'icon-shebeiguanli',
                        total: formatNum(randomNum(1030, 28000, 1)),
                        total2: formatNum(randomNum(1030, 8000, 1)),
                        trend: '111',
                        subtxt: '111',
                        color: 'ibue-text-danger',
                        bg: 'ibue-bg-danger'
                    },
                    {
                        title: '1111111',
                        icon: 'icon-gongyezujian-yibiaopan',
                        total: formatNum(randomNum(1200, 18000, 1)),
                        total2: formatNum(randomNum(4100, 8000, 1)),
                        trend: '111',
                        subtxt: '111',
                        color: 'ibue-text-warning',
                        bg: 'ibue-bg-warning'
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
                            data: time
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
                            data: randomNum(1000, 5000, 12)
                        },
                        {
                            name: '面料合同',
                            type: 'bar',
                            data: randomNum(1000, 5000, 12)
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
                            data: time
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
                            data: randomNum(1000, 5000, 12),
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

                return {
                    grid: {
                        top: 30,
                        left: -30,
                        right: -30,
                        bottom: 0,
                        containLabel: true
                    },
                    color: ['rgba(255, 255, 255, .5)'],
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
                            name: 'iBue Pro',
                            type: 'line',
                            symbol: 'none',
                            color: '#ffffff',
                            lineStyle: {
                                normal: {
                                    width: 3,
                                    color: 'rgba(255, 255, 255, 1)'
                                }
                            },
                            areaStyle: {
                                normal: {
                                    color: 'rgba(255, 255, 255, .3)'
                                }
                            },
                            smooth: true,
                            data: randomNum(100, 500, 10)
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
