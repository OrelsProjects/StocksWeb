import { useEffect, useState } from 'react'
import styles from '../styles/FutureGrowth.module.css'

const FutureGrowth = (props) => {

    const stock = props.stock

    const [years, setYears] = useState(5)
    const [annualGrowthRate, setAnnualGrowthRate] = useState(0.1)
    const [futureShares, setFutureShares] = useState(659610000)
    const [futureProfitMargin, setFutureProfitMargin] = useState(0.327)
    const [futurePE, setFuturePE] = useState(15)
    const [futureRevenue, setFutureRevenue] = useState(0)
    const [futureEarnings, setFutureEarnings] = useState(0)
    const [futureEPS, setFutureEPS] = useState(0)
    const [futurePrice, setFuturePrice] = useState(0)
    const [IRR, setIRR] = useState(0)

    function calculateValues() {
        // setFutureShares(stock.getSharesOutstanding())
        calculateFutureRevenue()
    }

    function calculateFutureRevenue() {
        const currentRevenue = stock.getRevenue()
        const futureRevenue = currentRevenue * (Math.pow((1 + annualGrowthRate / 1), (1 * years)))
        setFutureRevenue(futureRevenue)
    }

    function calculateFutureEarnings() {
        const futureEarnings = futureRevenue * futureProfitMargin
        setFutureEarnings(futureEarnings)
    }

    function calculateFutureEPS() {
        const futureEPS = futureEarnings / futureShares
        setFutureEPS(futureEPS)
    }
    function calculateFuturePrice() {
        const futurePrice = futureEPS * futurePE
        setFuturePrice(futurePrice)
    }
    function calculateFutureIRR() {
        const IRR = Math.pow((futurePrice / stock.getPrice()), (1 / years)) - 1
        setIRR(IRR)
    }



    useEffect(() => {
        calculateFutureEarnings()
    }, [futureRevenue])
    useEffect(() => {
        calculateFutureEPS()
    }, [futureEarnings])
    useEffect(() => {
        calculateFuturePrice()
    }, [futureEPS])
    useEffect(() => {
        calculateFutureIRR()
    }, [futurePrice])

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.titleContainer}`}>{stock.getStockName()}</div>
            <div>Future Revenue: {futureRevenue}</div>
            <div>Future Earnings: {futureEarnings}</div>
            <div>Future EPS: {futureEPS}</div>
            <div>Future Price: {futurePrice}</div>
            <div>IRR: {IRR}</div>
            <div className={`${styles.calculateButton}`} onClick={calculateValues}>Calculate</div>
        </div>
    )
}

module.exports = FutureGrowth