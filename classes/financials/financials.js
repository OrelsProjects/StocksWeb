export default class Financials {
    constructor(
        financials
    ) {
        if (!financials) return
        this.financials = financials
    }
    toString() {
        return ""
    }

    getTTMEarnings() {
        const q1Earnings = getFinancialChart()?.quarterly[0]?.earnings?.raw ?
            getFinancialChart().quarterly[0].earnings.raw : 0
        const q2Earnings = getFinancialChart()?.quarterly[1]?.earnings.raw ?
            getFinancialChart().quarterly[1].earnings.raw : 0
        const q3Earnings = getFinancialChart()?.quarterly[2]?.earnings.raw ?
            getFinancialChart().quarterly[2].earnings.raw : 0
        const q4Earnings = getFinancialChart()?.quarterly[3]?.earnings.raw ?
            thgetFinancialChart().quarterly[3].earnings.raw : 0
        return q1Earnings + q2Earnings + q3Earnings + q4Earnings
    }

    getTTMPERatio() {
        return this.getMarketCap() / this.getTTMEarnings()
    }

    getFinancialChart() {
        return this.financials.earnings.financialsChart
    }

    getBalanceSheetHistory() {
        return this.financials.balanceSheetHistory
    }

    getBalanceSheetHistoryQuarterly() {
        return this.financials.balanceSheetHistoryQuarterly
    }

    getPrice() {
        return this.financials.price.regularMarketPrice.raw
    }

    getMarketCap() {
        return this.financials.price.marketCap.raw
    }

}