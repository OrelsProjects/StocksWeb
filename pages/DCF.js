/* eslint-disable  */
import React, { useState, useEffect } from 'react';
import InputScreen from '../components/InputScreen';
import CircularProgress from '@mui/material/CircularProgress';
import Loading from '../containers/loading';
import Stock from '../classes/stock/stock';

import styles from '../styles/DCF.module.css';
import axios from 'axios';

import { toAssumptions } from '../Navigation/DCF'
import * as dcfActions from '../actions/dcf';
import { useDispatch } from 'react-redux';
import HttpRequestsUrls from '../utils/HttpRequestsUrls';


export default function DCF({ ticker }) {

  const dispatch = useDispatch()

  useEffect(async () => {
    console.log("lol");
    try {
      const options = {
        method: 'GET',
        url: `${HttpRequestsUrls.getStockFinancialsURL()}`,
        params: { symbol: `${ticker}`, region: 'US' },
        headers: {
          'x-rapidapi-key': 'd5521624a8msh964b295244bd92bp1b86e0jsn6dee14943944',
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        },
      };
      const financialsResponse = await axios.request(options);
      options.url = `${HttpRequestsUrls.getStockStatisticsURL()}`;
      const statisticsResponse = await axios.request(options);
      const financials = financialsResponse.data;
      const statistics = statisticsResponse.data;
      const stock = new Stock('', ticker, financials, statistics, financials.quoteType.shortName);
      dispatch(dcfActions.initiateDCF(stock))
      toAssumptions()
    } catch (ex) {
      console.log(ex)
    }
  })

  return (
    <div className={styles.container}>
      <Loading text={
        `Getting
        ${ticker}
        data...`
      }
      />
      {/* <InputScreen title='Select Ticker'
        subTitle=''
        subTitleLink=''
        inputsPlaceholders={['Ticker']}
        parametersNames={['ticker']}
        onClick={({parameters}) => {
          debugger;
          dispatch(dcfActions.initiateDCF(parameters.ticker))
          toAssumptions();
        }} /> */}
    </div>
  );
}

// module.exports = StockToolAnalyzer;
