export default class Financials {
  constructor(
    financials,
  ) {
    if (!financials) return;
    this.financials = financials;
  }

  toString() {
    return '';
  }

  getTTMEarnings() {
    const q1Earnings = this.getFinancialChart()?.quarterly[0]?.earnings?.raw
      ? this.getFinancialChart().quarterly[0].earnings.raw : 0;
    const q2Earnings = this.getFinancialChart()?.quarterly[1]?.earnings.raw
      ? this.getFinancialChart().quarterly[1].earnings.raw : 0;
    const q3Earnings = this.getFinancialChart()?.quarterly[2]?.earnings.raw
      ? this.getFinancialChart().quarterly[2].earnings.raw : 0;
    const q4Earnings = this.getFinancialChart()?.quarterly[3]?.earnings.raw
      ? this.getFinancialChart().quarterly[3].earnings.raw : 0;
    return q1Earnings + q2Earnings + q3Earnings + q4Earnings;
  }

  getTTMPERatio() {
    return this.getMarketCap() / this.getTTMEarnings();
  }

  getFinancialChart() {
    return this.financials.earnings.financialsChart;
  }

  getBalanceSheetHistory() {
    return this.financials.balanceSheetHistory;
  }

  getCashflowStatmentHistory() {
    return this.financials.cashflowStatementHistory;
  }

  getIncomeStatementHistory() {
    return this.financials.incomeStatementHistory;
  }

  /**
   * Finds the income statement json according to quarter.
   * @param {*} quarter quarters are counted from 1 to 4.
   * @returns income statement json.
   */
  getIncomeStatementHistoryByQuarter(quarter = 1) {
    if (quarter < 1) {
      return this.getIncomeStatementHistory()?.incomeStatementHistory[0];
    }
    if (quarter > 4) {
      return this.getIncomeStatementHistory()?.incomeStatementHistory[3];
    }
    return this.getIncomeStatementHistory()?.incomeStatementHistory[4 - quarter];
  }

  /**
   * Finds the cashflow json according to quarter.
   * @param {*} quarter quarters are counted from 1 to 4.
   * @returns cashflow json.
   */
  getCashflowStatementHistoryByQuarter(quarter = 1) {
    if (quarter < 1) {
      return this.getCashflowStatmentHistory()?.cashflowStatements[0];
    }
    if (quarter > 4) {
      return this.getCashflowStatmentHistory()?.cashflowStatements[3];
    }
    return this.getCashflowStatmentHistory()?.cashflowStatements[4 - quarter];
  }

  /**
   * Finds the balancesheet json according to quarter.
   * @param {*} quarter quarters are counted from 1 to 4.
   * @returns balancesheet json.
   */
  getBalanceSheetHistoryByQuarter(quarter = 1) {
    if (quarter < 1) {
      return this.getBalanceSheetHistory()?.balanceSheetStatements[0];
    }
    if (quarter > 4) {
      return this.getBalanceSheetHistory()?.balanceSheetStatements[3];
    }
    return this.getBalanceSheetHistory()?.balanceSheetStatements[4 - quarter];
  }

  getCurrentYearsCashflow() {
    let accumulatedCash = 0;
    for (let i = 0; i < 4; i += 1) {
      accumulatedCash += this.getCashByQuarter(i);
    }
    return accumulatedCash;
  }

  getCashByQuarter(quarter = 1) {
    return this.getBalanceSheetHistoryByQuarter(quarter)?.cash?.raw
      ? this.getBalanceSheetHistoryByQuarter(quarter)?.cash?.raw : 0;
  }

  getCapexByQuarter(quarter = 1) { // capitalExpenditures
    return this.getCashflowStatementHistoryByQuarter(quarter)?.capitalExpenditures?.raw
      ? this.getCashflowStatementHistoryByQuarter(quarter)?.capitalExpenditures?.raw : 0;
  }

  getEbitByQuarter(quarter = 1) {
    return this.getIncomeStatementHistoryByQuarter(quarter)?.ebit?.raw
      ? this.getIncomeStatementHistoryByQuarter(quarter)?.ebit?.raw : 0;
  }

  getPrice() {
    return this?.financials?.price?.regularMarketPrice?.raw
      ? this.financials.price.regularMarketPrice.raw : -1;
  }

  getMarketCap() {
    return this.financials.price.marketCap.raw;
  }
}
