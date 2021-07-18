import { useEffect, useState } from 'react'
import styles from '../styles/FutureGrowth.module.css'
import NumberUtils from '../utils/numberUtils'

const FutureGrowth = (props) => {

    const stock = props.stock

    const [years, setYears] = useState(5)
    const [annualGrowthRate, setAnnualGrowthRate] = useState(0.2)
    const [futureShares, setFutureShares] = useState(659610000)
    const [futureProfitMargin, setFutureProfitMargin] = useState(0.3)
    const [futurePE, setFuturePE] = useState(90)
    const [futureRevenue, setFutureRevenue] = useState(0)
    const [futureEarnings, setFutureEarnings] = useState(0)
    const [futureEPS, setFutureEPS] = useState(0)
    const [futurePrice, setFuturePrice] = useState(0)
    const [IRR, setIRR] = useState(0)

    function calculateValues() {
        setFutureShares(stock.getSharesOutstanding()*1.05)
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
            <div className={`${styles.stockNameContainer}`}>{stock.getStockName()}</div>
            <div className={`${styles.titleContainer}`}> Assumptions </div>
            <div>Years: {years}</div>
            <div>Growth Rate: {NumberUtils.numberToPercentage(annualGrowthRate)}</div>
            <div>Future Profit Margin: {NumberUtils.numberToPercentage(futureProfitMargin)}</div>
            <div>Future P/E Ratio: {futurePE}</div>
            <div className={`${styles.titleContainer}`}> Projections </div>
            <div>Future Revenue: {NumberUtils.numberToDollars(futureRevenue)}</div>
            <div>Future Earnings: {NumberUtils.numberToDollars(futureEarnings)}</div>
            <div>Future EPS: {NumberUtils.numberToDollars(futureEPS)}</div>
            <div>Future Price: {NumberUtils.numberToDollars(futurePrice)}</div>
            <div>IRR: {NumberUtils.numberToPercentage(IRR)}</div>
            <div className={`${styles.calculateButton}`} onClick={calculateValues}>Calculate</div>
        </div>
    )
}

module.exports = FutureGrowth