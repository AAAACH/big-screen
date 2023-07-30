import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/createEchartsOptions';
import {px} from '../shared/px';

export const Chart7 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = {
    1: [
      {value: 0.12, name: '农村地区'},
      {value: 0.16, name: '自建住宅'},
      {value: 0.24, name: '高层建筑'},
      {value: 0.26, name: '厂房仓储'},
      {value: 0.22, name: '小经营场所'},
    ],
    2: [
      {value: 0.22, name: '农村地区'},
      {value: 0.24, name: '自建住宅'},
      {value: 0.16, name: '高层建筑'},
      {value: 0.12, name: '厂房仓储'},
      {value: 0.26, name: '小经营场所'},
    ],
    3: [
      {value: 0.16, name: '农村地区'},
      {value: 0.22, name: '自建住宅'},
      {value: 0.26, name: '高层建筑'},
      {value: 0.24, name: '厂房仓储'},
      {value: 0.12, name: '小经营场所'},
    ]
  };
  const render = data => {
    myChart.current.setOption(createEchartsOptions({  
      color: ['#3597d4', '#3559a7', '#f6b044', '#ea5c5a', '#3ab059'],
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
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    render(data[1]);
    setInterval(() => {
      render(data[Math.ceil(Math.random() * 3)]);
    }, 1500);
  }, []);
  
  return (
    <div className="chartWrapper">
      <div className="title">火灾场所统计</div>
      <div ref={divRef} className="chart"/>
    </div>
  );
};