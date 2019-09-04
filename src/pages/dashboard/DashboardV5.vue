<template>
    <section>
        <section style="margin-left: -16px; margin-right: -16px; margin-top: -16px;">
            <div class="ibue-bg-primary" style="width: 100%; height: 520px;">
                <ibue-chart :options="options3" height="520px" />
            </div>
        </section>
        <el-row :gutter="16" style="margin-top: -120px;">
            <el-col v-for="(item, index) in widget" :key="index" :sm="12" :md="6">
                <ibue-card class="ibue-widget ibue-mb-16">
                    <div class="ibue-text-center ibue-mb-16">
                        <i :class="[item.color, item.icon]" class="iconfont ibue-font-weight-bold" style="font-size: 80px;"></i>
                    </div>
                    <div class="ibue-widget-header">
                        <div class="ibue-text-center" style="width: 100%;">
                            <h5 class="ibue-my-0">iBue Pro {{ index + 1 }}</h5>
                            <h2 class="ibue-my-0 ibue-font-weight-bold">${{ item.total }}</h2>
                        </div>
                    </div>
                    <ibue-chart :options="initWidgetChart(item.color)" height="180px" />
                </ibue-card>
            </el-col>
        </el-row>
        <el-row :gutter="16" style="margin-top: -120px;">
            <el-col v-for="(item, index) in widget" :key="index" :sm="12" :md="6">
                <ibue-card class="ibue-widget ibue-mb-16 ibue-bd-none" :class="item.bg">
                    <header class="ibue-widget-header">
                        <div class="ibue-widget-header ibue-text-white">
                            <div class="ibue-text-center" style="width: 100%;">
                                <h6 class="ibue-my-0">iBue Pro {{ index + 1 }}</h6>
                            </div>
                        </div>
                        <el-progress type="circle" :percentage="65" :stroke-width="12" color="#ffffff"></el-progress>
                    </header>
                </ibue-card>
            </el-col>
        </el-row>
        <el-row class="ibue-mb-16" :gutter="16">
            <el-col :sm="24">
                <ibue-card>
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column label="日期">
                            <template slot-scope="scope">
                                <i class="el-icon-time"></i>
                                <span style="margin-left: 10px">{{ scope.row.date }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="产品名称">
                            <template slot-scope="scope">
                                <span>{{ scope.row.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="本周统计">
                            <template slot-scope="scope">
                                <el-progress :percentage="scope.row.week"></el-progress>
                            </template>
                        </el-table-column>
                        <el-table-column label="本月统计">
                            <template slot-scope="scope">
                                <el-progress :percentage="scope.row.month" color="#4caf50"></el-progress>
                            </template>
                        </el-table-column>
                        <el-table-column label="本季度统计">
                            <template slot-scope="scope">
                                <el-progress :percentage="scope.row.season" color="#f44336"></el-progress>
                            </template>
                        </el-table-column>
                    </el-table>
                </ibue-card>
            </el-col>
        </el-row>
        <el-row class="ibue-mb" :gutter="16">
            <el-col :sm="24" :md="12">
                <ibue-card>
                    <ibue-chart :options="options" height="460px" />
                </ibue-card>
            </el-col>
            <el-col :span="12">
                <ibue-card>
                    <ibue-chart :options="options2" height="460px" />
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
    name: 'DashboardV5',
    components: { IbueChart },
    data() {
        let time = [];

        for (let i = 1; i <= 12; i++) {
            time.push(i + '月');
        }

        let hours = [];

        for (let i = 0; i < 24; i++) {
            hours.push(i);
        }

        return {
            widget: [
                {
                    title: '1111111',
                    icon: 'icon-advice2',
                    total: formatNum(randomNum(100, 8000, 1)),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-warning',
                    bg: 'ibue-bg-warning'
                },
                {
                    title: '1111111',
                    icon: 'icon-function',
                    total: formatNum(randomNum(100, 8000, 1)),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-primary',
                    bg: 'ibue-bg-primary'
                },
                {
                    title: '1111111',
                    icon: 'icon-bill',
                    total: formatNum(randomNum(100, 8000, 1)),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-danger',
                    bg: 'ibue-bg-danger'
                },
                {
                    title: '1111111',
                    icon: 'icon-version',
                    total: formatNum(randomNum(100, 8000, 1)),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-cyan',
                    bg: 'ibue-bg-cyan'
                }
            ],
            tableData: [
                {
                    date: '2016-05-02',
                    name: 'iBue Pro 1',
                    week: Number(randomNum(10, 100, 1)),
                    month: Number(randomNum(10, 100, 1)),
                    season: Number(randomNum(10, 100, 1))
                },
                {
                    date: '2016-05-04',
                    name: 'iBue Pro 2',
                    week: Number(randomNum(10, 100, 1)),
                    month: Number(randomNum(10, 100, 1)),
                    season: Number(randomNum(10, 100, 1))
                },
                {
                    date: '2016-05-01',
                    name: 'iBue Pro 3',
                    week: Number(randomNum(10, 100, 1)),
                    month: Number(randomNum(10, 100, 1)),
                    season: Number(randomNum(10, 100, 1))
                },
                {
                    date: '2016-05-03',
                    name: 'iBue Pro 4',
                    week: Number(randomNum(10, 100, 1)),
                    month: Number(randomNum(10, 100, 1)),
                    season: Number(randomNum(10, 100, 1))
                },
                {
                    date: '2016-05-03',
                    name: 'iBue Pro 5',
                    week: Number(randomNum(10, 100, 1)),
                    month: Number(randomNum(10, 100, 1)),
                    season: Number(randomNum(10, 100, 1))
                },
                {
                    date: '2016-05-03',
                    name: 'iBue Pro 6',
                    week: Number(randomNum(10, 100, 1)),
                    month: Number(randomNum(10, 100, 1)),
                    season: Number(randomNum(10, 100, 1))
                },
                {
                    date: '2016-05-01',
                    name: 'iBue Pro 7',
                    week: Number(randomNum(10, 100, 1)),
                    month: Number(randomNum(10, 100, 1)),
                    season: Number(randomNum(10, 100, 1))
                },
                {
                    date: '2016-05-03',
                    name: 'iBue Pro 8',
                    week: Number(randomNum(10, 100, 1)),
                    month: Number(randomNum(10, 100, 1)),
                    season: Number(randomNum(10, 100, 1))
                },
                {
                    date: '2016-05-03',
                    name: 'iBue Pro 9',
                    week: Number(randomNum(10, 100, 1)),
                    month: Number(randomNum(10, 100, 1)),
                    season: Number(randomNum(10, 100, 1))
                },
                {
                    date: '2016-05-03',
                    name: 'iBue Pro 10',
                    week: Number(randomNum(10, 100, 1)),
                    month: Number(randomNum(10, 100, 1)),
                    season: Number(randomNum(10, 100, 1))
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
                        name: '辅料合同',
                        type: 'bar',
                        data: randomNum(1000, 8000, 24)
                    },
                    {
                        name: '面料合同',
                        type: 'bar',
                        data: randomNum(1000, 8000, 24)
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
            },
            options3: {
                title: {
                    text: 'iBue Pro',
                    top: 16,
                    left: 16,
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '-4%',
                    right: '-4%',
                    bottom: '-4%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
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
                        name: 'iBue Pro',
                        type: 'line',
                        symbolSize: 0,
                        color: '#1E88E5',
                        data: [200, 300, 260, 340, 400, 320, 200, 300, 260, 400, 500, 360],
                        lineStyle: {
                            normal: {
                                width: 5,
                                color: '#ffffff',
                                shadowColor: 'rgba(0, 0, 0, .8)',
                                shadowBlur: 10,
                                shadowOffsetY: 8
                            }
                        },
                        areaStyle: {           
                            normal: {
                                color: '#0D47A1'
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
                        data: randomNum(100, 500, 36)
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

    .ibue-widget-body {
        display: flex;

        .ibue-widget-chart {
            flex: 0 0 50%;
            margin: 0;
        }
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

    .ibue-widget-chart {
        margin: -20px;
        margin-top: 0;
    }
}
</style>
