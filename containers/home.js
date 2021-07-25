import styles from '../styles/Home.module.css'
import { useDispatch, useSelector } from 'react-redux'
import * as stocksActions from '../actions/stocks'
import HttpRequestsUrls from '../utils/HttpRequestsUrls'
import { TextField, Button, InputAdornment } from "@material-ui/core"
import ShowChartIcon from '@material-ui/icons/ShowChart';
import Stock from '../classes/stock'
import StockProjection from './stockprojection'
import { useState } from 'react'
import Login from './login'
import firebase from 'firebase'

export default function Home() {

    const axios = require("axios").default;
    const dispatch = useDispatch()

    const [showStockProjection, setShowStocksProjection] = useState(false)
    const [ticker, setTicker] = useState("DISCA")
    const [stock, setStock] = useState(new Stock())
    const stocks = useSelector(state => state.stocks.stocks)
    const user = useSelector(state => state.auth.user)
    const db = firebase.firestore()

    const getStockInfo = async () => {
        console.log(user)
        db.collection('stocks').doc(user.uid).collection("checklists").get().then((res) => {
            const data = res.docs.map(doc => doc.data())
            console.log(data)
        })

    }

    const getStockInfoFromDatabase = async () => {

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
        let stock
        let financials
        const financialsResponse = await axios.request(options)
        financials = financialsResponse.data
        options.url = `${HttpRequestsUrls.getStockStatisticsURL()}`
        const statisticsResponse = await axios.request(options)
        stock = new Stock("", financials, statisticsResponse.data)
        console.log(stock)
        console.log(statisticsResponse)
        dispatch(stocksActions.addNewStock(stock))
        setStock(stock)
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
