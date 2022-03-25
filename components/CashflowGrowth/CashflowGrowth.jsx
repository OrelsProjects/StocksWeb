/* eslint-disable */
import React, { useState, useEffect } from 'react';
import * as S from './styles';
import PropTypes from 'prop-types';

export default function CashflowGrowth({ stock }) {
    const [years, setYears] = useState(5);
    const [annualGrowthRate, setAnnualGrowthRate] = useState(10);
    const [annualOutstandingSharesChange, setAnnualOutstandingSharesChange] = useState(0)
    const [accumulated]
    const [futureShares, setFutureShares] = useState(11111);
    const [futureCashflowMargin, setFutureCashflowMargin] = useState(10);
    const [PriceToFCF, setFuturePriceToFCF] = useState(90);
    const [futureRevenue, setFutureCashflow] = useState(0);
    const [futureEarnings, setFutureEarnings] = useState(0);
    const [futureEPS, setFutureCPS] = useState(0);
    const [futurePrice, setFuturePrice] = useState(0);
    const [minimumIRR, setMinimumIRR] = useState(15);
    const [IRR, setIRR] = useState(0);
    const [goodPrice, setGoodPrice] = useState(0);
    const [priceProjected, setPriceProjected] = useState(0);
    const [freeCashFlowYield, setFreeCashFlowYield] = useState(0);
  
    function calculateValues() {
      const currentCashflow = stock.getCurrentYearsCash();
      const newFutureCashflow = currentCashflow * (1 + annualGrowthRate / 100 / 1) ** (1 * years);
      const newFutureCPS = newFutureCashflow / stock.getSharesOutstanding();
      const newFuturePrice = newFutureCPS * PriceToFCF;
      const newIRR = (newFuturePrice / priceProjected) ** (1 / years) - 1;
      const goodPrice = newFuturePrice / (minimumIRR / 100 + 1) ** years;
      setFutureCashflow(NumberUtils.numberToMillions(newFutureCashflow));
      setFutureEarnings(NumberUtils.numberToMillions(newFutureEarnings));
      setFutureCPS(newFutureCPS);
      setFuturePrice(newFuturePrice);
      setIRR(newIRR);
      setGoodPrice(goodPrice);
    }
  
    function initInitialValues() { 
      setFutureShares(stock.getSharesOutstanding());
      setFutureCashflowMargin(stock.getProfitMargin());
      setFuturePriceToFCF(stock.getForwardPE());
      setFutureShares(stock.getSharesOutstanding());
      setFreeCashFlowYield(stock.getFreeCashFlowYield());
      setPriceProjected(stock.getPrice());
    }
  
    function calculateFutureRevenue() {
      const currentRevenue = stock.getRevenue();
      const futureRevenue =
        currentRevenue * Math.pow(1 + annualGrowthRate / 100 / 1, 1 * years);
      setFutureCashflow(futureRevenue);
    }
  
    function calculateFutureEarnings() {
      const futureEarnings = futureRevenue * (futureCashflowMargin / 100);
      setFutureEarnings(futureEarnings);
    }
  
    function calculateFutureEPS() {
      const futureEPS = futureEarnings / futureShares;
      setFutureCPS(futureEPS);
    }
    function calculateFuturePrice() {
      const futurePrice = futureEPS * PriceToFCF;
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
      setFutureCashflowMargin(event.target.value);
    }
  
    function handleFutureSharesChange(event) {
      setFutureShares(event.target.value);
    }
  
    function handleFuturePEChange(event) {
      setFuturePriceToFCF(event.target.value);
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
    }, [futureShares, futureCashflowMargin, PriceToFCF, years, annualGrowthRate, futureShares, PriceToFCF,
      minimumIRR, priceProjected, annualOutstandingSharesChange]);
  
    return (
        <S.CashflowGrowth>

        </S.CashflowGrowth>
    );
}

CashflowGrowth.propTypes = {
    stock: PropTypes.object.isRequired,
};
