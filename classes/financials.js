export default class Financials {
    constructor(
        financials
    ) {
        if (!financials) return
        this.financialsChart = financials.earnings.financialsChart
        this.balanceSheetHistory = financials.balanceSheetHistory
        this.balanceSheetHistoryQuarterly = financials.balanceSheetHistoryQuarterly
        this.price = financials.price.regularMarketPrice.raw
        this.marketCap = financials.price.marketCap.raw
    }
    toString() {
        return ""
    }

    getTTMEarnings() {
        const q1Earnings = this.financialsChart?.quarterly[0]?.earnings?.raw ?
            this.financialsChart.quarterly[0].earnings.raw : 0
        const q2Earnings = this.financialsChart?.quarterly[1]?.earnings.raw ?
            this.financialsChart.quarterly[1].earnings.raw : 0
        const q3Earnings = this.financialsChart?.quarterly[2]?.earnings.raw ?
            this.financialsChart.quarterly[2].earnings.raw : 0
        const q4Earnings = this.financialsChart?.quarterly[3]?.earnings.raw ?
            this.financialsChart.quarterly[3].earnings.raw : 0
        return q1Earnings + q2Earnings + q3Earnings + q4Earnings
    }

    getTTMPERatio() {
        return this.marketCap / this.getTTMEarnings()
    }

}