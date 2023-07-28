import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {Title} from '../shared/Title';
import {createEchartsOptions} from '../shared/createEchartsOptions';
import {px} from '../shared/px';

export const Chart7 = () => {
  const divRef = useRef(null);
  const data = [
    {value: 0.12, name: '农村地区'},
    {value: 0.16, name: '自建住宅'},
    {value: 0.24, name: '高层建筑'},
    {value: 0.26, name: '厂房仓储'},
    {value: 0.22, name: '小经营场所'},
  ];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      xAxis: {show: false},
      yAxis: {show: false},
      grid: {x: 0, x2: 0, y: 0, y2: 0, containLabel: true},
      legend: {
        orient: 'vertical',
        right: px(10),
        top: 'center',
        textStyle: {color: 'white'},
        itemWidth: px(6),
        itemHeight: px(6),
        itemGap: px(5),
        formatter(name) {
          const value = data.find(i => i.name === name)?.value * 100 + '%';
          return name + ' ' + value;
        }
      },
      series: [
        {
          center: ['35%', '52%'],
          type: 'pie',
          radius: '80%',
          label: {show: false},
          labelLine: {show: false},
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }));
  }, []);
  return (
    <div className="chartWrapper">
      <Title title="火灾场所统计"></Title>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};