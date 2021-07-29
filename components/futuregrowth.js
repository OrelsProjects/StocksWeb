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
    const [minimumIRR, setMinimumIRR] = useState(15);
    const [IRR, setIRR] = useState(0);
    const [goodPrice, setGoodPrice] = useState(0);

    function calculateValues() {
        const currentRevenue = stock.getRevenue();
        const newFutureRevenue =
            currentRevenue * Math.pow(1 + annualGrowthRate / 100 / 1, 1 * years);
        const newFutureEarnings = newFutureRevenue * (futureProfitMargin / 100);
        const newFutureEPS = newFutureEarnings / futureShares;
        const newFuturePrice = newFutureEPS * futurePE;
        const newIRR = Math.pow(newFuturePrice / stock.getPrice(), 1 / years) - 1;
        // newIRR + 1 = Math.pow(newFuturePrice / stock.getPrice(), 1 / years)
        // Math.pow((newIRR+1), years) = newFuturePrice/price
        // newFuturePrice = Math.pow((newIRR+1), years) * price
        // const goodPrice = stock.getPrice() * Math.pow(minimumIRR / 100 + 1, years)
        const goodPrice = futurePrice / Math.pow(minimumIRR / 100 + 1, years)
        setFutureRevenue(newFutureRevenue);
        setFutureEarnings(newFutureEarnings);
        setFutureEPS(newFutureEPS);
        setFuturePrice(newFuturePrice);
        setIRR(newIRR);
        setGoodPrice(goodPrice);
    }

    function initInitialValues() {
        setFutureShares(stock.getSharesOutstanding())
        setFutureProfitMargin(stock.getProfitMargin())
        setFuturePE(stock.getForwardPE())
        setFutureShares(stock.getSharesOutstanding() * 1.05)
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

    function handleMinimumIRRChange(event) {
        setMinimumIRR(event.target.value);
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
    }, [])

    useEffect(() => {
        calculateValues()
    }, [futureShares, futureProfitMargin, futurePE, years, annualGrowthRate, futureShares, futurePE
        , minimumIRR])

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.stockNameContainer}`}>
                {stock.getStockName()}
            </div>
            <div>
                Price: {NumberUtils.numberToDollars(stock.getPrice())}
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
            <TextField
                id="minIRR"
                label="minimum IRR"
                type="number"
                onChange={handleMinimumIRRChange}
                value={minimumIRR}
            />
            <div className={`${styles.titleContainer}`}> Projections </div>
            <div>Future Revenue: {NumberUtils.numberToDollars(futureRevenue)}</div>
            <div>Future Earnings: {NumberUtils.numberToDollars(futureEarnings)}</div>
            <div>Future EPS: {NumberUtils.numberToDollars(futureEPS)}</div>
            <div>Future Price: {NumberUtils.numberToDollars(futurePrice)}</div>
            <div>IRR: {NumberUtils.numberToPercentage(IRR)}</div>
            <div>Good price: {NumberUtils.numberToDollars(goodPrice)}</div>
            <div className={`${styles.calculateButton}`} onClick={calculateValues}>
                Calculate
      </div>
        </div>
    );
};

module.exports = FutureGrowth;
