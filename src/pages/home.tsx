import React from 'react';
import './home.scss';
import {Chart1} from '../charts/Chart1';
import {Chart2} from '../charts/Chart2';
import {Chart3} from '../charts/Chart3';
import {Chart4} from '../charts/Chart4';
import {Chart5} from '../charts/Chart5';
import {Chart6} from '../charts/Chart6';

export const Home = () => {
  return (
    <div className="home">
      <header></header>
      <main>
        <section className="section1">
          <Chart1/>
          <Chart2/>
          <Chart3/>          
        </section>
        <section className="section2">
          <Chart4/>
        </section>
        <section className="section3">
          <Chart5/>
          <Chart6/>
        </section>
      </main>
    </div>
  );
};
