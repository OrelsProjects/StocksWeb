import React from 'react';
import Head from 'next/head';
import PortfolioComponent from '../containers/Portfolio';
import style from '../styles/Portfolio.module.css';

export default function Portfolio() {
  return (
    <div className={`${style.container}`}>
      <Head>
        <title>
          Portfolio
        </title>
      </Head>
      <PortfolioComponent />
    </div>
  );
}
