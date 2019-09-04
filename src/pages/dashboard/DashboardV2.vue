<template>
    <section>
        <el-row :gutter="16">
            <el-col :sm="24" :md="12">
                <el-row :gutter="16">
                    <template v-for="(item, index) in widget">
                        <el-col v-if="item.flex === 2" :key="index" :sm="12">
                            <ibue-card class="ibue-widget ibue-mb-16" style="height: 160px;">
                                <div class="ibue-widget-header">
                                    <div :class="item.bg" class="ibue-widget-icon">
                                        <span :class="[item.icon]" class="iconfont ibue-text-white"></span>
                                    </div>
                                    <div class="ibue-text-right">
                                        <h5 class="ibue-my-0">{{ item.title }}</h5>
                                        <h2 :class="item.color" class="ibue-my-0 ibue-font-weight-bold">{{ item.total }}</h2>
                                    </div>
                                </div>
                                <div class="ibue-widget-chart">
                                    <ibue-chart :options="initWidgetChart(item.color)" height="80px" />
                                </div>
                            </ibue-card>
                        </el-col>
                        <el-col v-if="item.flex === 3" :key="index" :sm="8">
                            <ibue-card :class="item.flex === 3 ? item.bg : ''" class="ibue-widget ibue-mb-16" :bordered="false" style="height: 180px;">
                                <div>
                                    <div class="ibue-widget-icon ibue-text-center ibue-bg-transparent ibue-my-16" style="width: 100%;">
                                        <span :class="[item.icon]" class="iconfont ibue-text-white" style="font-size: 64px;"></span>
                                    </div>
                                    <div class="ibue-text-center">
                                        <h5 class="ibue-text-white ibue-my-0">iBue Pro {{ index + 1 }}</h5>
                                        <h2 class="ibue-text-white ibue-my-0 ibue-font-weight-bold">${{ item.total }}</h2>
                                    </div>
                                </div>
                            </ibue-card>
                        </el-col>
                    </template>
                </el-row>
            </el-col>
            <el-col :sm="24" :md="12">
                <ibue-card class="ibue-mb-16">
                    <header class="ibue-flex ibue-justify-content-between ibue-align-content-center ibue-mb-16">
                        <div><h4>iBue Pro</h4></div>
                        <el-button-group>
                            <el-button size="small">今日</el-button>
                            <el-button size="small">本周</el-button>
                            <el-button size="small">当月</el-button>
                            <el-button size="small">本季度</el-button>
                        </el-button-group>
                    </header>
                    <ibue-chart :options="options2" height="444px" />
                </ibue-card>
            </el-col>
        </el-row>
        <el-row class="ibue-mb-16" :gutter="16">
            <el-col :sm="24">
                <ibue-card>
                    <ibue-chart :options="options" height="460px" />
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
    name: 'DashboardV2',
    components: { IbueChart },
    data() {
        let time = [];

        for (let i = 1; i <= 12; i++) {
            time.push(i + '月');
        }

        return {
            widget: [
                {
                    title: '普通会员',
                    icon: 'icon-product',
                    total: randomNum(1000, 6000, 1),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-danger',
                    bg: 'ibue-bg-danger',
                    bd: 'ibue-bd-l-color-danger',
                    flex: 2
                },
                {
                    title: '黄金会员',
                    icon: 'icon-choiceness',
                    total: randomNum(1000, 6000, 1),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-warning',
                    bd: 'ibue-bd-l-color-warning',
                    bg: 'ibue-bg-warning',
                    flex: 2
                },
                {
                    title: '钻石会员',
                    icon: 'icon-contract',
                    total: randomNum(1000, 6000, 1),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-primary',
                    bd: 'ibue-bd-l-color-primary',
                    bg: 'ibue-bg-primary',
                    flex: 2
                },
                {
                    title: '至尊会员',
                    icon: 'icon-stock',
                    total: randomNum(1000, 6000, 1),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-cyan',
                    bd: 'ibue-bd-l-color-cyan',
                    bg: 'ibue-bg-cyan',
                    flex: 2
                },
                {
                    title: '1111111',
                    icon: 'icon-choiceness',
                    total: formatNum(randomNum(100, 3000, 1)),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-warning',
                    bg: 'ibue-bg-warning',
                    flex: 3
                },
                {
                    title: '1111111',
                    icon: 'icon-contract',
                    total: formatNum(randomNum(100, 4000, 1)),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-primary',
                    bg: 'ibue-bg-primary',
                    flex: 3
                },
                {
                    title: '1111111',
                    icon: 'icon-stock',
                    total: formatNum(randomNum(100, 5000, 1)),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-cyan',
                    bg: 'ibue-bg-cyan',
                    flex: 3
                }
            ],
            options: {
                title: {
                    text: 'iBue Pro'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    x: 'right',
                    data: ['iBue Pro']
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
                        name: 'iBue Pro',
                        type: 'line',
                        symbolSize: 12,
                        lineStyle: {
                            normal: {
                                width: 5,
                                color: 'rgba(244, 67, 54, 1)'
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgba(244, 67, 54, 1)',
                                borderWidth: 4,
                                borderColor: 'rgba(244, 67, 54, 1)',
                                shadowColor: 'rgba(0, 0, 0, .2)',
                                shadowBlur: 10,
                                shadowOffsetY: 4
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
                                            color: 'rgba(244, 67, 54, .2)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(244, 67, 54, 0)'
                                        }
                                    ]
                                }
                            }
                        },
                        smooth: true,
                        data: randomNum(1000, 5000, 12)
                    }
                ]
            },
            options2: {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    x: 'center',
                    y: 'bottom',
                    data: ['辅料合同', '面料合同']
                },
                grid: {
                    top: '3%',
                    left: '3%',
                    right: '4%',
                    bottom: '10%',
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
                        color: '#00ACC1',
                        data: randomNum(100, 2000, 12),
                    },
                    {
                        name: '面料合同',
                        type: 'bar',
                        color: '#FF9800',
                        data: randomNum(100, 2000, 12)
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
                        type: 'line',
                        symbol: 'none',
                        lineStyle: {
                            normal: {
                                width: 4,
                                shadowColor: 'rgba(0, 0, 0, .24)'
                            }
                        },
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
        background-color: #ffffff;
        border-radius: 50%;

        span {
            font-size: 24px;
        }
    }

    .ibue-widget-chart {
        margin: -20px;
        margin-top: 0;
    }
}
</style>
