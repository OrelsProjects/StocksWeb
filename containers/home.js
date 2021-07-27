import styles from '../styles/Home.module.css'
import { useDispatch, useSelector } from 'react-redux'
import * as stocksActions from '../actions/stocks'
import HttpRequestsUrls from '../utils/HttpRequestsUrls'
import { TextField, Button, InputAdornment } from "@material-ui/core"
import ShowChartIcon from '@material-ui/icons/ShowChart';
import Stock from '../classes/stock/stock'
import stockConverter from '../classes/stock/converter'
import StockProjection from './stockprojection'
import { useState } from 'react'
import Login from './login'
import firebase from 'firebase'
import { collections } from '../constants'

export default function Home() {

    const axios = require("axios").default;
    const dispatch = useDispatch()

    const [showStockProjection, setShowStocksProjection] = useState(false)
    const [ticker, setTicker] = useState("DISCA")
    const [stock, setStock] = useState(new Stock())
    const stocks = useSelector(reducers => reducers.stocks.stocks)
    const user = useSelector(reducers => reducers.auth.user)
    const db = firebase.firestore()

    const getStockInfo = async () => {
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
        debugger;
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

    const getStockInfoFromDatabase = async () => {
        const res = await db.collection(collections.stocks).withConverter(stockConverter)
            .where("ticker", "==", ticker).get()
        const data = res.docs.map(doc => doc.data())
        return data.length == 0 ? null : data
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

    const handleShowStockProjection = () => {
        getStockInfo()
        // setShowStocksProjection(true)
    }

    const handleHideStockProjection = () => {
        setShowStocksProjection(false)
    }

    const handleTickerChange = (event) => {
        setTicker(event.target.value)
    }

    return (
        <div className={`${styles.container}`}>
            <Login />
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
                <Button className={`${styles.getStockInfoButton}`} variant="contained" color="primary" onClick={handleShowStockProjection}>Get Stock Info</Button> : ""}
            {showStockProjection ? <div className={`${styles.stockProjectionContainer}`}>
                <StockProjection back={handleHideStockProjection} stock={stock} />
            </div> : ""}
        </div>
    )
}
