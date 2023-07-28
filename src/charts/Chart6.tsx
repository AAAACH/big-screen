import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {Title} from '../shared/Title';
import {createEchartsOptions} from '../shared/createEchartsOptions';
import {px} from '../shared/px';

export const Chart6 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
    myChart.setOption(createEchartsOptions({
      legend: {
        bottom: 0,
        textStyle: {color: 'white'},
        itemWidth: px(6),
        itemHeight: px(6),
        itemGap: px(5)
      },
      color: colors,
      xAxis: {show: false},
      yAxis: {show: false},
      series: [
        {
          bottom: px(15),
          startAngle: -20,
          type: 'pie',
          radius: ['25%', '90%'],
          avoidLabelOverlap: false,
          label: {
            show: true, position: 'outside', textStyle: {color: 'white', fontSize: px(7)},
            distanceToLabelLine: 0,
            formatter(options) {
              return options.value * 100 + '%';
            }
          },
          labelLine: {show: true, length: 0},
          roseType: 'area',
          itemStyle: {
            shadowBlur: px(200),
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          data: [
            {value: 0.30, name: '出警'},
            {value: 0.36, name: '巡查'},
            {value: 0.24, name: '排障'},
            {value: 0.10, name: '演习'},
          ]
        }
      ]
    }));
  }, []);
  return (
    <div className="chartWrapper">
      <Title title="日常防火巡查记录"></Title>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};