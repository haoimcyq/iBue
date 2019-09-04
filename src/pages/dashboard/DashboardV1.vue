<template>
    <section>
        <el-row :gutter="16">
            <el-col v-for="(item, index) in widget" :key="index" :sm="12" :md="6">
                <ibue-card :class="item.bg" class="ibue-widget ibue-mb-16" :bordered="false">
                    <div class="ibue-widget-header">
                        <div>
                            <h5 class="ibue-my-0">{{ item.title }}</h5>
                            <h2 class="ibue-my-0 ibue-font-weight-bold">${{ item.total }}</h2>
                        </div>
                        <div class="ibue-widget-icon">
                            <span :class="[item.color, item.icon]" class="iconfont ibue-font-weight-bold"></span>
                        </div>
                    </div>
                    <div class="ibue-widget-chart">
                        <ibue-chart :options="initWidgetChart(item.color)" height="100px" />
                    </div>
                </ibue-card>
            </el-col>
        </el-row>
        <el-row class="ibue-mb-16" :gutter="16">
            <el-col :sm="24" :md="12">
                <ibue-card>
                    <header class="ibue-flex ibue-justify-content-between ibue-align-content-center ibue-mb-16">
                        <div><h4>iBue Pro</h4></div>
                        <el-button-group>
                            <el-button size="small">今日</el-button>
                            <el-button size="small">本周</el-button>
                            <el-button size="small">当月</el-button>
                            <el-button size="small">本季度</el-button>
                        </el-button-group>
                    </header>
                    <ibue-chart :options="options" height="400px" />
                </ibue-card>
            </el-col>
            <el-col :span="12">
                <ibue-card>
                    <header class="ibue-flex ibue-justify-content-between ibue-align-content-center ibue-mb-16">
                        <div><h4>iBue Pro</h4></div>
                        <el-button-group>
                            <el-button size="small">今日</el-button>
                            <el-button size="small">本周</el-button>
                            <el-button size="small">当月</el-button>
                            <el-button size="small">本季度</el-button>
                        </el-button-group>
                    </header>
                    <ibue-chart :options="options2" height="400px" />
                </ibue-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <ibue-card>
                    <header class="ibue-flex ibue-justify-content-between ibue-align-content-center ibue-mb-16">
                        <div><h4>iBue Pro</h4></div>
                        <el-button-group>
                            <el-button size="small">今日</el-button>
                            <el-button size="small">本周</el-button>
                            <el-button size="small">当月</el-button>
                            <el-button size="small">本季度</el-button>
                        </el-button-group>
                    </header>
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
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import IbueChart from '@/components/IbueChart.vue';
import { randomNum, formatNum } from '@/utils/utils';

export default {
    name: 'DashboardV1',
    components: { IbueChart },
    data() {
        let time = [], hours = [];

        for (let i = 1; i <= 12; i++) {
            time.push(i + '月');
        }

        for (let j = 0; j < 24; j++) {
            hours.push(j);
        }

        return {
            widget: [
                {
                    title: '今日销售额',
                    icon: 'icon-moneybag',
                    total: formatNum(randomNum(100, 600, 1)),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-danger',
                    bg: 'ibue-bg-danger'
                },
                {
                    title: '本周销售额',
                    icon: 'icon-moneybag',
                    total: formatNum(randomNum(600, 1500, 1)),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-primary',
                    bg: 'ibue-bg-primary'
                },
                {
                    title: '当月销售额',
                    icon: 'icon-moneybag',
                    total: formatNum(randomNum(2000, 7000, 1)),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-success',
                    bg: 'ibue-bg-success'
                },
                {
                    title: '本季度销售额',
                    icon: 'icon-moneybag',
                    total: formatNum(randomNum(8000, 20000, 1)),
                    trend: '111',
                    subtxt: '111',
                    color: 'ibue-text-warning',
                    bg: 'ibue-bg-warning'
                }
            ],
            options: {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    x: 'center',
                    y: 'bottom',
                    data: ['辅料合同', '面料合同', '加工合同', '经销合同']
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
                        data: randomNum(1000, 4000, 12)
                    },
                    {
                        name: '面料合同',
                        type: 'bar',
                        data: randomNum(1000, 4000, 12)
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
                        boundaryGap: false,
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
                        type: 'line',
                        symbol: 'none',
                        data: randomNum(1000, 4000, 24)
                    },
                    {
                        name: '面料合同',
                        type: 'line',
                        symbol: 'none',
                        data: randomNum(1000, 4000, 24)
                    }
                ]
            },
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
            ]
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
                                width: 8,
                                color: {
                                    type: 'linear',
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: 'rgba(255, 255, 255, .6)'
                                        },
                                        {
                                            offset: 0.5,
                                            color: 'rgba(255, 255, 255, .8)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(255, 255, 255, 1)'
                                        }
                                    ],
                                    globalCoord: false
                                },
                                shadowColor: 'rgba(0, 0, 0, .2)',
                                shadowBlur: 20,
                                shadowOffsetY: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgba(255, 255, 255, 0)',
                                borderWidth: 4,
                                borderColor: 'rgba(255, 255, 255, .8)'
                            }
                        },
                        smooth: true,
                        data: randomNum(100, 500, 10)
                    }
                ]
            };
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
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
