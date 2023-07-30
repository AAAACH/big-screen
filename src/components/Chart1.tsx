import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/createEchartsOptions';

export const Chart1 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = {
    1: [20, 15, 25, 10, 15, 10],
    2: [25, 10, 15, 20, 10, 15],
    3: [15, 20, 10, 15, 25, 10]
  };
  const render = data => {
    myChart.current.setOption(createEchartsOptions({
      color: ['#3559a7'],
      xAxis: {
        data: ['A类火灾', 'B类火灾', 'C类火灾', 'D类火灾', 'E类火灾', 'F类火灾'],
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        },
      },
      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        }
      },
      series: [{
        type: 'bar',
        data: data
      }]
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
      <div className="title">火警情况统计</div>
      <div ref={divRef} className="chart"/>
    </div>
  );
};