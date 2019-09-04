<template>
    <section>
        <el-row :gutter="16">
            <el-col v-for="(item, index) in widget" :key="index" :sm="12" :md="6">
                <ibue-card class="ibue-widget ibue-mb-16">
                    <div class="ibue-widget-header">
                        <div>
                            <h5 class="ibue-my-0">{{ item.title }}</h5>
                            <h2 class="ibue-my-0 ibue-font-weight-bold" :class="item.color">{{ item.total }}</h2>
                        </div>
                        <span :class="[item.color, item.icon]" class="iconfont" style="font-size: 48px;"></span>
                    </div>
                    <ibue-chart :options="initWidgetChart(item.color)" height="80px" />
                </ibue-card>
            </el-col>
        </el-row>
        <el-row class="ibue-mb-16" :gutter="0">
            <el-col :sm="24">
                <ibue-card>
                    <el-col :sm="16">
                        <ibue-chart :options="options2" height="520px" />
                    </el-col>
                    <el-col :sm="8">
                        <ul class="ibue-widget-list ibue-pl-24">
                            <li v-for="(item, index) in widget2" :key="index" class="ibue-mb-16">
                                <header class="header">
                                    <div class="dot"><span :class="item.bg"></span></div>
                                    <div>
                                        <h5 class="ibue-my-0">iBue Pro {{ index + 1 }}</h5>
                                        <h4 class="ibue-mt-0 ibue-font-weight-bold">${{ item.total }}</h4>
                                    </div>
                                </header>
                                <div class="ibue-mb-16" style="padding-left: 48px;">
                                    <el-progress :text-inside="true" :stroke-width="16" :percentage="item.percentage" :color="setProgress(item.color)"></el-progress>
                                </div>
                            </li>
                        </ul>
                    </el-col>
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
    name: 'DashboardV3',
    components: { IbueChart },
    data() {
        let time = [];

        for (let i = 1; i <= 12; i++) {
            time.push(i + '月');
        }

        return {
            widget: [
                {
                    title: '家具建材',
                    icon: 'icon-function',
                    total: randomNum(2000, 100000, 1),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-purple',
                    bg: 'ibue-bg-purple'
                },
                {
                    title: '生鲜水果',
                    icon: 'icon-product',
                    total: randomNum(2000, 100000, 1),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-primary',
                    bg: 'ibue-bg-primary'
                },
                {
                    title: '母婴玩具',
                    icon: 'icon-version',
                    total: randomNum(2000, 60000, 1),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-danger',
                    bg: 'ibue-bg-danger'
                },
                {
                    title: '图书音像',
                    icon: 'icon-choiceness',
                    total: randomNum(2000, 100000, 1),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-warning',
                    bg: 'ibue-bg-warning'
                },
                {
                    title: '电子设备',
                    icon: 'icon-moneybag',
                    total: randomNum(2000, 60000, 1),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-danger',
                    bg: 'ibue-bg-danger'
                },
                {
                    title: '医药保健',
                    icon: 'icon-present',
                    total: randomNum(2000, 100000, 1),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-cyan',
                    bg: 'ibue-bg-cyan'
                },
                {
                    title: '服装鞋类',
                    icon: 'icon-stock',
                    total: randomNum(2000, 60000, 1),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-success',
                    bg: 'ibue-bg-success'
                },
                {
                    title: '美妆护理',
                    icon: 'icon-contract',
                    total: randomNum(2000, 100000, 1),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-primary',
                    bg: 'ibue-bg-primary'
                }
            ],
            widget2: [
                {
                    title: '1111111',
                    icon: 'icon-function',
                    total: formatNum(randomNum(100, 8000, 1)),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-success',
                    bg: 'ibue-bg-success',
                    percentage: randomNum(20, 100, 1)
                },
                {
                    title: '1111111',
                    icon: 'icon-product',
                    total: formatNum(randomNum(100, 8000, 1)),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-warning',
                    bg: 'ibue-bg-warning',
                    percentage: randomNum(20, 100, 1)
                },
                {
                    title: '1111111',
                    icon: 'icon-version',
                    total: formatNum(randomNum(100, 8000, 1)),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-primary',
                    bg: 'ibue-bg-primary',
                    percentage: randomNum(20, 100, 1)
                },
                {
                    title: '1111111',
                    icon: 'icon-choiceness',
                    total: formatNum(randomNum(100, 8000, 1)),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-danger',
                    bg: 'ibue-bg-danger',
                    percentage: randomNum(20, 100, 1)
                },
                {
                    title: '1111111',
                    icon: 'icon-choiceness',
                    total: formatNum(randomNum(100, 8000, 1)),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-purple',
                    bg: 'ibue-bg-purple',
                    percentage: randomNum(20, 100, 1)
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
                    bottom: '8%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        splitLine: {
                            show: true
                        },
                        data: time
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        splitLine: {
                            show: true
                        }
                    }
                ],
                series: [
                    {
                        name: '辅料合同',
                        type: 'line',
                        symbol: 'none',
                        color: '#3888fa',
                        data: randomNum(1000, 8000, 12),
                        lineStyle: {
                            normal: {
                                width: 4,
                                color: '#FF9800'
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#FF9800',
                                borderWidth: 4,
                                borderColor: '#FF9800'
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: 'rgba(255, 152, 0, .2)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(255, 152, 0, 0)'
                                        }
                                    ]
                                }
                            }
                        },
                        smooth: true
                    },
                    {
                        name: '面料合同',
                        type: 'line',
                        symbol: 'none',
                        color: '#3888fa',
                        data: randomNum(1000, 5000, 12),
                        lineStyle: {
                            normal: {
                                width: 4,
                                color: '#2196f3'
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#2196f3',
                                borderWidth: 4,
                                borderColor: '#2196f3'
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: 'rgba(33, 150, 243, .2)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(33, 150, 243, 0)'
                                        }
                                    ]
                                }
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
        },
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

.ibue-widget-list {

    .header {
        display: flex;

        .dot {
            padding: 4px 16px;

            span {
                display: inline-block;
                width: 16px;
                height: 16px;
                border-radius: 50%;
            }
        }
    }
}
</style>
