import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {Title} from '../shared/Title';
import {createEchartsOptions} from '../shared/createEchartsOptions';
import {px} from '../shared/px';

export const Chart5 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      color: ['#3597d4', '#3559a7', '#f6b044', '#ea5c5a', '#3ab059', '#fdfdfd'],
      legend: {
        left: px(12),
        top: px(4),
        orient: 'vertical',
        textStyle: {color: 'white'},
        itemWidth: px(6),
        itemHeight: px(6),
        itemGap: px(9)
      },
      xAxis: {show: false},
      yAxis: {show: false},
      series: [
        {
          left: px(30),
          top: px(4),
          type: 'pie',
          radius: ['75%', '90%'],
          avoidLabelOverlap: false,
          label: {
            show: true, position: 'inside', textStyle: {color: 'white', fontSize: px(7)},
            formatter(options) {
              return (options.value * 100).toFixed(0) + '%';
            }
          },
          labelLine: {show: false},
          itemStyle: {
            borderColor: '#0F113A',
            borderWidth: px(2)
          },
          data: [
            {value: 0.07, name: '安全监控'},
            {value: 0.10, name: '设施维护'},
            {value: 0.23, name: '消防工程'},
            {value: 0.28, name: '应急救援'},
            {value: 0.32, name: '设施操作'},
          ]
        }
      ]
    }));
  }, []);
  return (
    <div className="chartWrapper">
      <Title title="消防工作者统计"/>
      <div ref={divRef} className="chart"/>
    </div>
  );
};