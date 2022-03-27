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

  const [andrewsPrice, setAndrewsPrice] = useState(0);

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

  function calculateIntrisicValue(accumulatedCash) {
    const cash = stock.getCashAndCashEquivalents();
    const debt = stock.getDebt();
    const netDebt = debt - cash;
    debugger;
    const cashValue = accumulatedCash - netDebt;
    setIntrinsicValue(cashValue);
  }

  function calculateAndrewsPrice(currentFCF, growthRate5Years, discountRate, multiple, years) {
    let yearsCashflows = [];
    let yearsPV = []; // The money left after the shareholders take their [discountRate] amount of money
    // First 5 years
    for (let i = 0; i < years; i += 1) {
      yearsCashflows[i] = currentFCF * ((1 + growthRate5Years) ** (i + 1))
      yearsPV[i] = yearsCashflows[i] / ((1 + discountRate) ** (i + 1))
    }

    const accumulatedPVs = yearsPV.reduce((partialSum, a) => partialSum + a, 0);
    const lastYearsMarketCap = yearsCashflows[yearsCashflows.length - 1] * multiple;
    const lastYearsPV = lastYearsMarketCap / ((1 + discountRate) ** (years));
    const ev = accumulatedPVs + lastYearsPV + stock.getDebt() - stock.getCashAndCashEquivalents();
    const price = ev / stock.getSharesOutstanding();
    setAndrewsPrice(price);
    return price;
  }

  function calculateValues() {
    const currentRevenue = stock.getRevenue();
    const newOutstandingShares =
      stock.getSharesOutstanding() * (1 - annualOutstandingSharesChange / 100 / 1) ** years
    setFutureShares(newOutstandingShares)
    const newFutureRevenue = currentRevenue * (1 + annualGrowthRate / 100 / 1) ** (1 * years);
    const newFutureEarnings = newFutureRevenue * (futureProfitMargin / 100);
    const newFutureEPS = newFutureEarnings / futureShares;
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
    calculateAndrewsPrice(stock.getFreeCashFlow(), annualGrowthRate, minimumIRR, priceToFCF, years);
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
    initInitialValues();
  }, []);

  useEffect(() => {
    calculateValues();
  }, [futureShares, futureProfitMargin, futurePE, years, annualGrowthRate, futureShares, futurePE,
    minimumIRR, priceSetByUser, annualOutstandingSharesChange, cashflowMargin, priceToFCF]);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.stockNameContainer}`}>
        {stock.getStockName()}
      </div>
      <div>
        Price:
        {' '}
        {NumberUtils.numberToDollars(stock.getPrice())}
      </div>
      <div>
        Current FCF Yield:
        {' '}
        {NumberUtils.numberToPercentage(freeCashFlowYield)}
      </div>
      <div>
        Market Cap:
        {' '}
        {`${NumberUtils.numberToMillions(stock.getMarketCap())}M`}
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
      </div>
      <div>
        Future Cashflow Per Share:
        {NumberUtils.numberToDollars(cashflowPerShare)}
      </div>
      <div>
        Future Price:
        {NumberUtils.numberToDollars(futurePrice)}
      </div>
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
      <div>
        Andrews Price:
        {`${NumberUtils.numberToDollars(andrewsPrice)}`}
      </div>
      <div className={`${styles.calculateButton}`} onClick={calculateValues}>
        Calculate
      </div>
    </div>
  );
};

module.exports = FutureGrowth;
