import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/createEchartsOptions';
// @ts-ignore
import china from '../geo/china.json';

export const Chart4 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    // @ts-ignore
    echarts.registerMap('CN', china);
    myChart.setOption(createEchartsOptions({
      color: ['#97cbce', '#3559a7', '#f6b044', '#ea5c5a', '#3ab059', '#fdfdfd'],
      xAxis: {show: false},
      yAxis: {show: false},
      series: [
        {
          type: 'map',
          mapType: 'CN',
          data: [
            {name: '江苏省', value: 1},
          ],
          label: {show: false, color: 'white'},
          itemStyle: {
            areaColor: 'rgba(56, 105, 112, 0.5)',
            borderColor: '#376c78',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#3597d4',
            },
          }
        },
      ]
    }));
  }, []);
  
  return (
    <>
      <div ref={divRef} className="chart"/>
      <p>该地图仅显示中国部分地区</p>
    </>
  );
};