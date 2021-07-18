import styles from '../styles/Home.module.css'
import { useDispatch, useSelector } from 'react-redux'
import * as stocksActions from '../actions/stocks'
import HttpRequestsUrls from '../utils/HttpRequestsUrls'
import Financials from '../classes/financials'
import Stock from '../classes/stock'
import StockProjection from '../containers/stockprojection'

export default function Home() {

  const dispatch = useDispatch()
  const stocks = useSelector(state => state.stocks)

  const fetchAndSetStocksInfo = async () => {
  }

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.getStockInfoButton}`} onClick={fetchAndSetStocksInfo}>Get Stock Info</div>
      <div className={`${styles.stockProjectionContainer}`}>
        <StockProjection />
      </div>
    </div>
  )
}
