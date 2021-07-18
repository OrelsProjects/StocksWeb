import styles from '../styles/Home.module.css'
import { useDispatch, useSelector } from 'react-redux'
import * as stocksActions from '../actions/stocks'
import HttpRequestsUrls from '../utils/HttpRequestsUrls'
import Financials from '../classes/financials'
import Stock from '../classes/stock'
import StockProjection from '../containers/stockprojection'
import { useEffect, useState } from 'react'

export default function Home() {

  const axios = require("axios").default;

  const [showStockProjection, setShowStocksProjection] = useState(false)
  const [stock, setStock] = useState(new Stock("FB"))

  const dispatch = useDispatch()
  const stocks = useSelector(state => state.stocks)

  const getStockInfo = async () => {
    const options = {
      method: 'GET',
      url: `${HttpRequestsUrls.getStockFinancialsURL()}`,
      params: { symbol: 'DISCA', region: 'US' },
      headers: {
        'x-rapidapi-key': 'd5521624a8msh964b295244bd92bp1b86e0jsn6dee14943944',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
      }
    };


    let stock
    let financials
    const financialsResponse = await axios.request(options)
    financials = financialsResponse.data
    options.url = `${HttpRequestsUrls.getStockStatisticsURL()}`
    const statisticsResponse = await axios.request(options)
    stock = new Stock("Discovery", financials, statisticsResponse.data)
    console.log(stock)
    console.log(statisticsResponse)
    dispatch(stocksActions.addNewStock(stock))
    setStock(stock)
  }

  const handleShowStockProjection = () => {
    setShowStocksProjection(true)
  }

  const handleHideStockProjection = () => {
    setShowStocksProjection(false)
  }

  useEffect(async () => {
    getStockInfo()
  }, [])

  return (
    <div className={`${styles.container}`}>
      {!showStockProjection ?
        <div className={`${styles.getStockInfoButton}`} onClick={handleShowStockProjection}>Get Stock Info</div> : ""}
      {showStockProjection ? <div className={`${styles.stockProjectionContainer}`}>
        <StockProjection back={handleHideStockProjection} stock={stock} />
      </div> : ""}
    </div>
  )
}
