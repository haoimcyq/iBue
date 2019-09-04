<template>
    <section>
        <el-row :gutter="16">
            <el-col v-for="(item, index) in widget" :key="index" :sm="12" :md="6">
                <ibue-card class="ibue-widget ibue-mb-16">
                    <div class="ibue-widget-header ibue-mb-8">
                        <div>
                            <h5 class="ibue-my-0">{{ item.title }}</h5>
                            <h2 :class="item.color" class="ibue-my-0 ibue-font-weight-bold">${{ item.total }}</h2>
                        </div>
                        <span :class="[item.color, item.icon]" class="iconfont" style="font-size: 48px;"></span>
                    </div>
                    <el-progress :text-inside="true" :stroke-width="16" :percentage="item.percentage" :color="setProgress(item.color)"></el-progress>
                    <p class="ibue-text-dark ibue-mt-8 ibue-mb-0">hello world</p>
                </ibue-card>
            </el-col>
        </el-row>
        <el-row class="ibue-mb" :gutter="16">
            <el-col :sm="24" :md="16">
                <ibue-card>
                    <ibue-chart :options="options" height="500px" />
                </ibue-card>
            </el-col>
            <el-col :sm="24" :md="8">
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
    name: 'DashboardV4',
    components: { IbueChart },
    data() {
        let hours = [];

        for (let i = 0; i < 24; i++) {
            hours.push(i);
        }

        return {
            widget: [
                {
                    title: '应收账款',
                    icon: 'icon-product',
                    total: formatNum(randomNum(1000, 90000, 1)),
                    percentage: Number(randomNum(40, 100, 1)),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-success',
                    bg: 'ibue-bg-success'
                },
                {
                    title: '应付账款',
                    icon: 'icon-choiceness',
                    total: formatNum(randomNum(1000, 19000, 1)),
                    percentage: Number(randomNum(40, 100, 1)),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-danger',
                    bg: 'ibue-bg-danger'
                },
                {
                    title: '银行贷款',
                    icon: 'icon-present',
                    total: formatNum(randomNum(1000, 40000, 1)),
                    percentage: Number(randomNum(40, 100, 1)),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-warning',
                    bg: 'ibue-bg-warning'
                },
                {
                    title: '等待确认',
                    icon: 'icon-function',
                    total: formatNum(randomNum(8000, 59000, 1)),
                    percentage: Number(randomNum(40, 100, 1)),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-primary',
                    bg: 'ibue-bg-primary'
                }
            ],
            options1: {
                grid: {
                    left: 0,
                    right: 0,
                    bottom: 0
                },
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
                        data: [132, 200, 233, 523, 425, 231, 644, 466, 431, 123]
                    }
                ]
            },
            options: {
                title: {
                    text: 'iBue Pro'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    x: 'right',
                    data: ['iBue Pro 1', 'iBue Pro 2', 'iBue Pro 3']
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
                        data: hours
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: 'iBue Pro 1',
                        type: 'bar',
                        stack: '总量',
                        data: randomNum(100, 400, 24)
                    },
                    {
                        name: 'iBue Pro 2',
                        type: 'bar',
                        stack: '总量',
                        data: randomNum(100, 400, 24)
                    },
                    {
                        name: 'iBue Pro 3',
                        type: 'bar',
                        stack: '总量',
                        data: randomNum(100, 400, 24)
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
        setProgress(color) {
            let keyword = String(color).replace(/^ibue-text-/, '');

            return this.colors[keyword];
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
