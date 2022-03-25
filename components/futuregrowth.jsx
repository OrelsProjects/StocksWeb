/* eslint-disable */
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
  const [priceSetByUser, setPriceSetByUser] = useState(0);

  const [freeCashFlowYield, setFreeCashFlowYield] = useState(0);
  const [cashflowMargin, setCashflowMargin] = useState(5);
  const [cashflowPerShare, setCashflowPerShare] = useState(0);
  const [futureCashflow, setFutureCashflow] = useState(0);
  const [accumulatedCash, setAccumulatedCash] = useState(0);
  const [intrinsicValue, setIntrinsicValue] = useState(0); // sum all cashflows without regarding the share change. maybe regard debt
  const [fcfPriceProjected, setFCFPriceProjected] = useState(0);
  const [priceToFCF, setPriceToFCF] = useState(10);

  function calculateAccumulatedCash() {
    let currentRevenue = stock.getRevenue();
    let accumulatedCashflow = 0;
    for (let i = 0; i < years; i += 1) {
      accumulatedCashflow += currentRevenue * (cashflowMargin / 100);
      currentRevenue = currentRevenue * (1 + annualGrowthRate / 100);
    }
    setAccumulatedCash(accumulatedCashflow);
    return accumulatedCashflow
  }

  function calculateIntrisicValue(accumulatedCash){
    const cash = stock.getCashAndCashEquivalents();
    const debt = stock.getDebt();
    const netDebt = debt - cash;
    debugger;
    const cashValue = accumulatedCash - netDebt;
    setIntrinsicValue(cashValue);
  }

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
    const newFuturePrice = newFutureEPS * futurePE;
    const newFutureCashflow = newFutureRevenue * (cashflowMargin / 100);
    const newCashflowPerShare = newFutureCashflow / stock.getSharesOutstanding();
    const newFutureCashflowPrice = newCashflowPerShare * priceToFCF;
    const newIRR = (newFuturePrice / priceSetByUser) ** (1 / years) - 1;
    const goodPrice = newFuturePrice / (minimumIRR / 100 + 1) ** years;
    setFutureRevenue(NumberUtils.numberToMillions(newFutureRevenue));
    setFutureEarnings(NumberUtils.numberToMillions(newFutureEarnings));
    setFutureEPS(newFutureEPS);
    setFuturePrice(newFuturePrice);
    setFCFPriceProjected(newFutureCashflowPrice);
    setIRR(newIRR);
    setGoodPrice(goodPrice);

    setFutureCashflow(newFutureCashflow);
    setCashflowPerShare(newCashflowPerShare);
    const accumulateCash = calculateAccumulatedCash();
    calculateIntrisicValue(accumulateCash);
  }

  function initInitialValues() {
    setFutureShares(stock.getSharesOutstanding());
    setFutureProfitMargin(stock.getProfitMargin());
    setFuturePE(stock.getForwardPE());
    setFutureShares(stock.getSharesOutstanding());
    setFreeCashFlowYield(stock.getFreeCashFlowYield());
    setPriceSetByUser(stock.getPrice());
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

  function handleCashflowMarginChange(event) {
    setCashflowMargin(event.target.value);
  }

  function handlePriceToFCFChange(event) {
    setPriceToFCF(event.target.value);
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
    setPriceSetByUser(event.target.value);
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
    minimumIRR, priceSetByUser, annualOutstandingSharesChange, cashflowMargin, priceToFCF]);

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
        id="cashflowGrowth"
        label="Cashflow Margin"
        type="number"
        onChange={handleCashflowMarginChange}
        suffix="%"
        value={cashflowMargin}
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
        id="Price"
        label="Price to FCF"
        type="number"
        onChange={handlePriceToFCFChange}
        suffix="%"
        value={priceToFCF}
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
        id="minIRR"
        label="minimum IRR"
        type="number"
        onChange={handleMinimumIRRChange}
        value={minimumIRR}
      />
      <TextField
        id="outstandingSharesChange"
        label="Outstanding Shares Reduction"
        type="number"
        onChange={handleAnnualOutstandingSharesChange}
        value={annualOutstandingSharesChange}
      />
      <TextField
        id="priceProjected"
        label="Price Projceted"
        type="number"
        onChange={handlePriceProjectedChange}
        value={priceSetByUser}
      />
      <div className={`${styles.titleContainer}`}> Projections </div>
      <div>
        Future Revenue:
        {`${NumberUtils.numberToDollars(futureRevenue)}M`}
      </div>
      <div>
        Future Cashflows:
        {`${NumberUtils.numberToMillions(futureCashflow)}M`}
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
      </div>
      <div>
        Future Cashflow Per Share:
        {NumberUtils.numberToDollars(cashflowPerShare)}
      </div>
      <div>
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
      <div>
        Future Cashflow Price:
        {NumberUtils.numberToDollars(fcfPriceProjected)}
      </div>
      <div>
        IRR:
        {NumberUtils.numberToPercentage(IRR)}
      </div>
      <div>
        Good price:
        {NumberUtils.numberToDollars(goodPrice)}
      </div>
      <div>
        Intrinsic Value:
        {`${NumberUtils.numberToDollars(NumberUtils.numberToMillions(intrinsicValue))}M`}
      </div>
      <div className={`${styles.calculateButton}`} onClick={calculateValues}>
        Calculate
      </div> */}
    </div>
  );
};

module.exports = FutureGrowth;
