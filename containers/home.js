import { Button, InputAdornment, TextField } from "@material-ui/core"
import ShowChartIcon from '@material-ui/icons/ShowChart'
import firebase from 'firebase'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as stocksActions from '../actions/stocks'
import stockConverter from '../classes/stock/converter'
import Stock from '../classes/stock/stock'
import { collections } from '../constants'
import styles from '../styles/Home.module.css'
import HttpRequestsUrls from '../utils/HttpRequestsUrls'
import Loading from './loading'
import Login from './login'
import StockProjection from './stockprojection'

export default function Home() {

    const axios = require("axios").default;
    const dispatch = useDispatch()

    const [showStockProjection, setShowStocksProjection] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [ticker, setTicker] = useState("DISCA")
    const [stock, setStock] = useState(null)
    const stocks = useSelector(reducers => reducers.stocks.stocks)
    const db = firebase.firestore()

    const getStockInfo = async () => {
        try {
            setIsLoading(true)
            let stock = stocks.filter(it => it.stockTicker == ticker).length == 0 ?
                stocks.filter(it => it.stockTicker == ticker)[0] : null
            if (!stock)
                stock = await getStockInfoFromDatabase()
            if (!stock) {
                stock = await getStockInfoFromAPI()
                stock.id = await insertStockToDB(stock)
            }
            dispatch(stocksActions.addNewStock(stock))
            setStock(stock)
            setIsLoading(false)
        } catch (ex) {
            setIsLoading(false)
        }
    }

    const getStockInfoFromDatabase = async () => {
        const res = await db.collection(collections.stocks).withConverter(stockConverter)
            .where("ticker", "==", ticker).get()
        const data = res.docs.map(doc => doc.data())
        return data.length == 0 ? null : data[0]
    }

    const getStockInfoFromAPI = async () => {
        const options = {
            method: 'GET',
            url: `${HttpRequestsUrls.getStockFinancialsURL()}`,
            params: { symbol: `${ticker}`, region: 'US' },
            headers: {
                'x-rapidapi-key': 'd5521624a8msh964b295244bd92bp1b86e0jsn6dee14943944',
                'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
            }
        };
        const financialsResponse = await axios.request(options)
        options.url = `${HttpRequestsUrls.getStockStatisticsURL()}`
        const statisticsResponse = await axios.request(options)
        const financials = financialsResponse.data
        const statistics = statisticsResponse.data
        return new Stock("", ticker, financials, statistics)
    }

    
    /**
     * Inserts a new stock to the database.
     * @param {*} stock is the stock to insert.
     * @returns - New document's id.
     */
     const insertStockToDB = async (stock) => {
        try {
            const doc = db.collection(collections.stocks).doc()
            await doc.withConverter(stockConverter).set(stock)
            return doc.id
        } catch (ex) {
            alert('insertStockToDB:' + '\n' + ex.message)
        }
    }

    const handleGetStockInfo = () => {
        getStockInfo()
    }

    const handleHideStockProjection = () => {
        setShowStocksProjection(false)
    }

    const handleTickerChange = (event) => {
        setTicker(event.target.value)
    }

    useEffect(() => {
        if (stock) {
            setShowStocksProjection(true)
        }
    }, [stock])

    return (
        <div className={`${styles.container}`}>
            {/* <Login /> */}
            {isLoading ? <Loading /> : ""}
            {!showStockProjection ?
                <TextField id="ticker" label="Ticker" variant="filled"
                    type='string'
                    onChange={handleTickerChange}
                    InputLabelProps={{
                        classes: {
                            root: styles.textFieldRoot,
                            focused: styles.textFieldFocused,
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <ShowChartIcon />
                            </InputAdornment>
                        ),
                    }}
                /> : ""}
            {!showStockProjection ?
                <Button className={`${styles.getStockInfoButton}`} variant="contained" color="primary" onClick={handleGetStockInfo}>Get Stock Info</Button> : ""}
            {showStockProjection ? <div className={`${styles.stockProjectionContainer}`}>
                <StockProjection onBackClick={handleHideStockProjection} stock={stock} />
            </div> : ""}
        </div>
    )
}
