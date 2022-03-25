export default class Statistics {
  constructor(
    statistics,
  ) {
    if (!statistics) return;
    this.statistics = statistics;
  }

  getPE() {
    return this.statistics.summaryDetail?.trailingPE?.raw
      ? this.statistics.summaryDetail?.trailingPE?.raw : null;
  }

  getEPS() {
    return this.statistics?.defaultKeyStatistics?.trailingEps.raw
      ? this.statistics?.defaultKeyStatistics?.trailingEps.raw : 0;
  }

  getSharesOutstanding() {
    return this.statistics?.defaultKeyStatistics?.impliedSharesOutstanding?.raw
      ? this.statistics?.defaultKeyStatistics?.impliedSharesOutstanding?.raw : 0;
  }

  getRevenue() {
    return this.statistics?.financialData?.totalRevenue.raw
      ? this.statistics?.financialData?.totalRevenue.raw : 0;
  }

  getEarnings() {
    return this.getRevenue() * this.getProfitMargin();
  }

  getName() {
    return this.statistics?.quoteType?.longName ? this.statistics.quoteType.longName : 'No name';
  }

  getProfitMargin() {
    return this.statistics?.defaultKeyStatistics?.profitMargins?.raw * 100;
  }

  getForwardPE() {
    return this.statistics?.summaryDetail?.forwardPE?.raw;
  }

  getBeta() {
    return this.statistics?.defaultKeyStatistics?.beta?.raw;
  }

  getEnterpriseValue() {
    return this.statistics?.defaultKeyStatistics?.enterpriseValue?.raw;
  }

  getCashAndCashEquivalents() {
    return this.statistics?.financialData?.totalCash?.raw
      ? this.statistics?.financialData?.totalCash?.raw : 0;
  }

  getDebt() {
    return this.statistics?.financialData?.totalDebt?.raw
      ? this.statistics?.financialData?.totalDebt?.raw : 0;
  }

  getFreeCashFlow() {
    return this.statistics?.financialData?.freeCashflow?.raw;
  }
}
