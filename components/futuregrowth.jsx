import React, { useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import styles from '../styles/FutureGrowth.module.css';
import NumberUtils from '../utils/numberUtils';

const FutureGrowth = ({ stock }) => {
  const [years, setYears] = useState(5);
  const [annualGrowthRate, setAnnualGrowthRate] = useState(10);
  const [annualOutstandingSharesChange, setAnnualOutstandingSharesChange] = useState(0)
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
  const [priceProjected, setPriceProjected] = useState(0);
  const [freeCashFlowYield, setFreeCashFlowYield] = useState(0);

  function calculateValues() {
    const currentRevenue = stock.getRevenue();
    const newOutstandingShares =
      stock.getSharesOutstanding() * (1 - annualOutstandingSharesChange / 100 / 1) ** years
    setFutureShares(newOutstandingShares)
    debugger;
    const newFutureRevenue = currentRevenue * (1 + annualGrowthRate / 100 / 1) ** (1 * years);
    const newFutureEarnings = newFutureRevenue * (futureProfitMargin / 100);
    const newFutureEPS = newFutureEarnings / futureShares;
    let newFuturePrice = 0;
    if (newFutureEPS < 0 || futurePE < 0) {
      newFuturePrice = 0;
    } else {
      newFuturePrice = newFutureEPS * futurePE;
    }
    const newIRR = (newFuturePrice / priceProjected) ** (1 / years) - 1;
    const goodPrice = newFuturePrice / (minimumIRR / 100 + 1) ** years;
    setFutureRevenue(NumberUtils.numberToMillions(newFutureRevenue));
    setFutureEarnings(NumberUtils.numberToMillions(newFutureEarnings));
    setFutureEPS(newFutureEPS);
    setFuturePrice(newFuturePrice);
    setIRR(newIRR);
    setGoodPrice(goodPrice);
  }

  function initInitialValues() {
    setFutureShares(stock.getSharesOutstanding());
    setFutureProfitMargin(stock.getProfitMargin());
    setFuturePE(stock.getForwardPE());
    setFutureShares(stock.getSharesOutstanding());
    setFreeCashFlowYield(stock.getFreeCashFlowYield());
    setPriceProjected(stock.getPrice());
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

  function handleAnnualOutstandingSharesChange(event) {
    if (event.target.value > 100) {
      setAnnualOutstandingSharesChange(100)
    } else {
      setAnnualOutstandingSharesChange(event.target.value)
    }
  }

  function handlePriceProjectedChange(event) {
    setPriceProjected(event.target.value);
  }

  useEffect(() => {
    initInitialValues();
  }, []);

  useEffect(() => {
    calculateValues();
    debugger;
    console.log(IRR)
    console.log(parseFloat(minimumIRR))
  }, [futureShares, futureProfitMargin, futurePE, years, annualGrowthRate, futureShares, futurePE,
    minimumIRR, priceProjected, annualOutstandingSharesChange]);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.stockInfo} ${styles.section}`}>
        <div className={`${styles.stockNameContainer}`}>
          {stock.getStockName()}
        </div>
        <div className={`${styles.stockInfoText}`}>
          Price:
        {' '}
          {NumberUtils.numberToDollars(stock.getPrice())}
        </div>
        <div className={`${styles.stockInfoText}`}>
          Current FCF Yield:
        {' '}
          {NumberUtils.numberToPercentage(freeCashFlowYield)}
        </div>
      </div>
      <div className={`${styles.assumptions} ${styles.section}`}>
        <div className={`${styles.sectionTitle}`}> Assumptions </div>
        <TextField
          className={`${styles.inputContainer}`}
          id="ticker"
          label="Years"
          type="number"
          variant="outlined"
          onChange={handleYearsChange}
          value={years}
        />
        <TextField
          className={`${styles.inputContainer}`}
          id="growth"
          label="Growth Rate"
          type="number"
          variant="outlined"
          onChange={handleGrowthRateChange}
          suffix="%"
          value={annualGrowthRate}
        />
        <TextField
          className={`${styles.inputContainer}`}
          id="profit-margin"
          label="Profit Margin"
          type="number"
          variant="outlined"
          onChange={handleProfitMarginChange}
          suffix="%"
          value={futureProfitMargin}
        />
        <TextField
          className={`${styles.inputContainer}`}
          id="shares"
          label="Shares Outstanding"
          type="number"
          variant="outlined"
          onChange={handleFutureSharesChange}
          value={futureShares}
        />
        <TextField
          className={`${styles.inputContainer}`}
          id="pe"
          label="P/E Ratio"
          type="number"
          variant="outlined"
          onChange={handleFuturePEChange}
          value={futurePE}
        />
        <TextField
          className={`${styles.inputContainer}`}
          id="minIRR"
          label="minimum IRR"
          type="number"
          variant="outlined"
          onChange={handleMinimumIRRChange}
          value={minimumIRR}
        />
        <TextField
          className={`${styles.inputContainer}`}
          id="outstandingSharesChange"
          label="Outstanding Shares Reduction"
          type="number"
          variant="outlined"
          onChange={handleAnnualOutstandingSharesChange}
          value={annualOutstandingSharesChange}
        />
        <TextField
          className={`${styles.inputContainer}`}
          id="priceProjected"
          label="Price Projceted"
          type="number"
          variant="outlined"
          onChange={handlePriceProjectedChange}
          value={priceProjected}
        />
      </div>
      <div className={`${styles.projections} ${styles.section}`}>
        <div className={`${styles.sectionTitle}`}> Projections </div>
        {/* <div >
          Future Revenue:
        {`${NumberUtils.numberToDollars(futureRevenue)}M`}
        </div>
        <div>
          Future Earnings:
        {`${NumberUtils.numberToDollars(futureEarnings)}M`}
        </div>
        <div>
          Future EPS:
        {NumberUtils.numberToDollars(futureEPS)}
        </div> */}
        <div className={`${styles.projectionTitle}`}>
          Future Price:
        {NumberUtils.numberToDollars(futurePrice)}
        </div>
        <div className={`${styles.projectionTitle}`}>
          IRR:
          <div className={`${IRR < parseFloat(minimumIRR) / 100 ? styles.badValue : styles.goodValue}`}>
            {NumberUtils.numberToPercentage(IRR)}
          </div>
        </div>
        <div className={`${styles.projectionTitle}`}>
          Good price:
          <div className={
            `${goodPrice <= stock.getPrice() ? styles.badValue : styles.goodValue}`}
          >
            {NumberUtils.numberToDollars(goodPrice)}
          </div>
        </div>
      </div>
      {/* <div className={`${styles.calculateButton}`} onClick={calculateValues}>
        Calculate
      </div> */}
    </div>
  );
};

module.exports = FutureGrowth;
