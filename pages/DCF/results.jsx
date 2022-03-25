/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/DCFResults.module.css';
import moment from 'moment';

export default function Results() {

    // const [years, setYears] = useState({})

    const stock = useSelector((reducers) => reducers.dcf.stock);
    const assumptions = useSelector((reducers) => reducers.dcf.assumptions);
    const wacc = useSelector((reducers) => reducers.dcf.wacc);
    const discountedFreeCashflow = useSelector((reducers) => reducers.dcf.discountedFreeCashflow);

    function XNPV(rate, values, dates) {
        var result = 0;
        for (var i = 0; i < values.length; i++) {
            result += values[i] / Math.pow(1 + rate, moment(dates[i]).diff(moment(dates[0]), 'days') / 365);
        }
        return result;
    }

    function calculateWacc() {
        const marketCap = parseInt(assumptions.currentPrice) * parseInt(assumptions.sharesOutstanding);
        const debt = parseInt(assumptions.debt);
        const marginOfSafety = 2 // equityRiskPremium = 10(s&p return) - riskFreeRate - [marginOfSafety]'
        const equityRiskPremium = (10 - parseInt(wacc.riskFreeRate) - marginOfSafety) / 100;
        const costOfEquity = (parseInt(wacc.riskFreeRate) + (parseInt(equityRiskPremium) * parseInt(wacc.beta))) / 100;
        const afterTaxCostOfDebt = parseInt(wacc.costOfDebt) * (1 - (parseInt(assumptions.taxRate) / 100));
        const weightedAverageCostOfCapital = (costOfEquity * marketCap) + (afterTaxCostOfDebt * debt)
        return weightedAverageCostOfCapital;
    }

    function calculateTerminalValueAverage(discountRate, finalUnleveredFCF) {
        const perpetualGrowth = (finalUnleveredFCF * (1 + (parseInt(assumptions.perpetualGrowthRate) / 100)) / (discountRate - (parseInt(assumptions.perpetualGrowthRate) / 100)))
        return (parseInt(assumptions.evToEbitda) + perpetualGrowth) / 2
    }


    function isLeapYear(date) {
        const year = date.getFullYear();
        if ((year & 3) != 0) return false;
        return ((year % 100) != 0 || (year % 400) == 0);
    }
    function getDayOfYear(date = new Date()) {
        const dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        const mn = date.getMonth();
        const dn = date.getDate();
        let dayOfYear = dayCount[mn] + dn;
        if (mn > 1 && isLeapYear(date)) { dayOfYear += 1; }
        return dayOfYear;
    };

    function calculateYearsFraction() { // Need recalculation
        let currentYear = (new Date()).getFullYear;
        let day = getDayOfYear();
        debugger;
        let currentYearFraction = day / 365;
        return [currentYearFraction, 1, 1, 1, 1];
    }

    function calculateTransactionCFPerYear() {
        let transactionCFPerYear = [];
        let yearsFractions = calculateYearsFraction();
        for (let i = 0; i < 5; i += 1) {
            const taxRate = (parseInt(assumptions.taxRate) / 100);
            const ebit = discountedFreeCashflow.ebit[i];
            const cashTaxes = taxRate * ebit;
            const da = discountedFreeCashflow.da[i];
            const capex = discountedFreeCashflow.capex[i];
            const changesInNWC = discountedFreeCashflow.changesInNWC[i];
            const unleveredFreeCashflow = ebit - cashTaxes + da - capex - changesInNWC;
            transactionCFPerYear[i] = yearsFractions[i] * unleveredFreeCashflow;
        }
        return transactionCFPerYear;
    }

    // Assuming 5 years
    function getLastYearUnlevedFCF() {
        const maxLength = 4;
        const taxRate = (parseInt(assumptions.taxRate) / 100);
        const ebit = discountedFreeCashflow.ebit[maxLength];
        const cashTaxes = taxRate * ebit;
        const da = discountedFreeCashflow.da[maxLength];
        const capex = discountedFreeCashflow.capex[maxLength];
        const changesInNWC = discountedFreeCashflow.changesInNWC[maxLength];
        const unleveredFreeCashflow = ebit - cashTaxes + da - capex - changesInNWC;
        return unleveredFreeCashflow;
    }

    function getYearsDates(yearsCount = 5) {
        const now = new Date();
        const years = [now];
        for (let i = 0; i < yearsCount - 1; i += 1) {
            now.setFullYear(now.getFullYear() + 1)
            years.push(now)
        }
        return years;
    }

    function calculateIntrisicEnterpriseValue(discountRate) {

        let enterpriseValue = XNPV(discountRate, calculateTransactionCFPerYear(), getYearsDates());
        return enterpriseValue
    }

    useEffect(() => {
        debugger;
        const weightedAverageCostOfCapital = calculateWacc(); // Discount Rate
        const terminalValueAverage = calculateTerminalValueAverage(weightedAverageCostOfCapital, getLastYearUnlevedFCF());
        const transactionCF = terminalValueAverage;
        const enterpriseValueIntrinsic = calculateIntrisicEnterpriseValue(weightedAverageCostOfCapital);
        const equityValue = enterpriseValueIntrinsic + parseInt(assumptions.cash) - parseInt(assumptions.debt);
        const newPrice = equityValue / parseInt(assumptions.sharesOutstanding);
        debugger;
    })

    return (<div />);
}
