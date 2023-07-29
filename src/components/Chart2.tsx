import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/createEchartsOptions';
import {px} from '../shared/px';

export const Chart2 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      color: ['#3597d4', '#3559a7', '#f6b044', '#ea5c5a', '#3ab059', '#fdfdfd'],
      legend: {
        bottom: px(0),
        textStyle: {color: 'white'},
        itemWidth: px(6),
        itemHeight: px(6)
      },
      grid: {
        x: px(0),
        x2: px(8),
        y: px(8),
        y2: px(14),
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },
      series: [
        {
          name: '北京',
          type: 'line',
          data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07].reverse()
        },
        {
          name: '上海',
          type: 'line',
          data: [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08].reverse()
        },
        {
          name: '天津',
          type: 'line',
          data: [0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09].reverse()
        },
        {
          name: '重庆',
          type: 'line',
          data: [0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10].reverse()
        }
      ].map(obj => ({
        ...obj,
        symbol: 'circle',
        symbolSize: px(5),
        lineStyle: {width: px(1)}
      }))
    }));
  }, []);
  return (
    <div className="chartWrapper">
      <div className="title">消防出警统计</div>
      <div ref={divRef} className="chart"/>
    </div>
  );
};