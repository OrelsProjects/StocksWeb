import { useEffect, useState } from "react";
import styles from "../styles/FutureGrowth.module.css";
import NumberUtils from "../utils/numberUtils";
import { TextField, InputAdornment } from "@material-ui/core";

const FutureGrowth = (props) => {
    const stock = props.stock;

    const [years, setYears] = useState(5);
    const [annualGrowthRate, setAnnualGrowthRate] = useState(20);
    const [futureShares, setFutureShares] = useState(11111);
    const [futureProfitMargin, setFutureProfitMargin] = useState(10);
    const [futurePE, setFuturePE] = useState(90);
    const [futureRevenue, setFutureRevenue] = useState(0);
    const [futureEarnings, setFutureEarnings] = useState(0);
    const [futureEPS, setFutureEPS] = useState(0);
    const [futurePrice, setFuturePrice] = useState(0);
    const [IRR, setIRR] = useState(0);

    function calculateValues() {
        if(futureProfitMargin < 0) {
            alert('Future profit margin cannot be less than 0')
            return
        }
        const newFutureShares = stock.getSharesOutstanding() * 1.05;
        const currentRevenue = stock.getRevenue();
        const newFutureRevenue =
            currentRevenue * Math.pow(1 + annualGrowthRate / 100 / 1, 1 * years);
        const newFutureEarnings = newFutureRevenue * (futureProfitMargin / 100);
        const newFutureEPS = newFutureEarnings / newFutureShares;
        const newFuturePrice = newFutureEPS * futurePE;
        const newIRR = Math.pow(newFuturePrice / stock.getPrice(), 1 / years) - 1;
        setFutureShares(newFutureShares);
        setFutureRevenue(newFutureRevenue);
        setFutureEarnings(newFutureEarnings);
        setFutureEPS(newFutureEPS);
        setFuturePrice(newFuturePrice);
        setIRR(newIRR);
    }

    function initInitialValues() {
        setFutureShares(stock.getSharesOutstanding())
        setFutureProfitMargin(stock.getProfitMargin())
        setFuturePE(stock.getForwardPE())
    }

    function calculateFutureRevenue() {
        const currentRevenue = stock.getRevenue();
        const futureRevenue =
            currentRevenue * Math.pow(1 + annualGrowthRate / 100 / 1, 1 * years);
        setFutureRevenue(futureRevenue);
    }

    function calculateFutureEarnings() {
        const futureEarnings = futureRevenue * (futureProfitMargin / 100);
        setFutureEarnings(futureEarnings);
    }

    function calculateFutureEPS() {
        const futureEPS = futureEarnings / futureShares;
        setFutureEPS(futureEPS);
    }
    function calculateFuturePrice() {
        const futurePrice = futureEPS * futurePE;
        setFuturePrice(futurePrice);
    }
    function calculateFutureIRR() {
        const IRR = Math.pow(futurePrice / stock.getPrice(), 1 / years) - 1;
        setIRR(IRR);
    }

    function handleYearsChange(event) {
        setYears(event.target.value);
    }

    function handleGrowthRateChange(event) {
        setAnnualGrowthRate(event.target.value);
    }

    function handleProfitMarginChange(event) {
        setFutureProfitMargin(event.target.value);
    }

    function handleFutureSharesChange(event) {
        setFutureShares(event.target.value);
    }

    function handleFuturePEChange(event) {
        setFuturePE(event.target.value);
    }

    function handleOutsideClick() { }

    //   useEffect(() => {
    //     calculateFutureEarnings();
    //   }, [futureRevenue]);
    //   useEffect(() => {
    //     calculateFutureEPS();
    //   }, [futureEarnings]);
    //   useEffect(() => {
    //     calculateFuturePrice();
    //   }, [futureEPS]);
    //   useEffect(() => {
    //     calculateFutureIRR();
    //   }, [futurePrice]);

    useEffect(() => {
        initInitialValues()
        calculateValues()
    }, [])

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.stockNameContainer}`}>
                {stock.getStockName()}
            </div>
            <div className={`${styles.titleContainer}`}> Assumptions </div>
            <TextField
                id="ticker"
                label="Years"
                type="number"
                onChange={handleYearsChange}
                value={years}
            />
            <TextField
                id="growth"
                label="Growth Rate"
                type="number"
                onChange={handleGrowthRateChange}
                suffix="%"
                value={annualGrowthRate}
            />
            <TextField
                id="profit-margin"
                label="Profit Margin"
                type="number"
                onChange={handleProfitMarginChange}
                suffix="%"
                value={futureProfitMargin}
            />
            <TextField
                id="shares"
                label="Shares Outstanding"
                type="number"
                onChange={handleFutureSharesChange}
                value={futureShares}
            />
            <TextField
                id="pe"
                label="P/E Ratio"
                type="number"
                onChange={handleFuturePEChange}
                value={futurePE}
            />
            <div className={`${styles.titleContainer}`}> Projections </div>
            <div>Future Revenue: {NumberUtils.numberToDollars(futureRevenue)}</div>
            <div>Future Earnings: {NumberUtils.numberToDollars(futureEarnings)}</div>
            <div>Future EPS: {NumberUtils.numberToDollars(futureEPS)}</div>
            <div>Future Price: {NumberUtils.numberToDollars(futurePrice)}</div>
            <div>IRR: {NumberUtils.numberToPercentage(IRR)}</div>
            <div className={`${styles.calculateButton}`} onClick={calculateValues}>
                Calculate
      </div>
        </div>
    );
};

module.exports = FutureGrowth;
