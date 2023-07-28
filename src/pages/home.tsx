import React from 'react';
import './home.scss';
import {Chart1} from '../charts/Chart1';
import {Chart2} from '../charts/Chart2';
import {Chart3} from '../charts/Chart3';
import {Chart4} from '../charts/Chart4';
import {Chart5} from '../charts/Chart5';
import {Chart6} from '../charts/Chart6';
import {Chart7} from '../charts/Chart7';

export const Home = () => {
  return (
    <div className="home">
      <header></header>
      <main>
        <section className="section1">
          <Chart1/>
          <Chart5/>
          <Chart2/>         
        </section>
        <section className="section2">
          <Chart4/>
        </section>
        <section className="section3">
          <Chart6/>
          <Chart3/>
          <Chart7/>
        </section>
      </main>
    </div>
  );
};
