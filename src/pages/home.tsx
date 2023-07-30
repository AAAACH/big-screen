import React from 'react';
import './home.scss';
import {Chart1} from '../components/Chart1';
import {Chart2} from '../components/Chart2';
import {Chart3} from '../components/Chart3';
import {Chart4} from '../components/Chart4';
import {Chart5} from '../components/Chart5';
import {Chart6} from '../components/Chart6';
import {Chart7} from '../components/Chart7';
import {Statistic} from '../components/Statistic';
import {Clock} from '../components/Clock';
import {Icon} from '../components/Icon';

export const Home = () => {
  return (
    <div className="home">
      <header>
        <Clock/>
        <span>消防隐患实时监控大屏</span>
        <div className="info">
          <Icon name="position"/> Nanjing
          <Icon name="weather"/> 26℃ cloudy
        </div>
      </header>
      <main>
        <section className="section1">
          <Chart1/>
          <Chart5/>
          <Chart2/>         
        </section>
        <section className="section2">
          <Statistic/>
          <Chart4/>
          <div className="ring">
            <div className="radar"/>
          </div>
          <span>数据实时监控中</span>
        </section>
        <section className="section3">
          <Chart6/>
          <Chart3/>
          <Chart7/>
        </section>
      </main>
      <p className="foot">© XF 2022-2023</p>
    </div>
  );
};
