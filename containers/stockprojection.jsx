import React, { useEffect, useState } from 'react';
import { ArrowBack } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Head from 'next/head';
import styles from '../styles/StockProjection.module.css';
import * as stocksActions from '../actions/stocks';
import FutureGrowth from '../components/futuregrowth';
import Stock from '../classes/stock/stock';
import HttpRequestsUrls from '../utils/HttpRequestsUrls';

const StockProjection = ({ ticker, onBackClick }) => {
  const stocks = useSelector((reducers) => reducers.stocks.stocks);
  const [stock, setStock] = useState(null);
  const dispatch = useDispatch();

  const getStockInfoFromAPI = async (ticker) => {
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
    return new Stock('', ticker, financials, statistics, financials.quoteType.shortName);
  };

  useEffect(async () => {
    if (ticker && !stocks[ticker]) {
      const stock = await getStockInfoFromAPI(ticker.toString().toUpperCase());
      dispatch(stocksActions.addNewStock(stock));
      setStock(stock);
    }
  }, [ticker]);

  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>{stock ? stock.name : 'Loading...'}</title>
      </Head>
      <div className={`${styles.backArrow}`} onClick={onBackClick}>
        <ArrowBack style={{ color: '#dfdfdf' }} />
      </div>
      <div className={`${styles.modulesContainer}`}>
        <div className={`${styles.futureGrowthContainer}`}>
          {stock ? <FutureGrowth stock={stock} /> : ''}
        </div>
      </div>
    </div>
  );
};

module.exports = StockProjection;

StockProjection.propTypes = {
  stock: PropTypes.objectOf.isRequired,
  onBackClick: PropTypes.func.isRequired,
};
