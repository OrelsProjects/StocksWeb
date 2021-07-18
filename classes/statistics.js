export default class Statistics {
    constructor(
        statistics
    ) {
        if (!statistics) return
        this.pe = statistics.summaryDetail.trailingPE.raw
        this.eps = statistics.defaultKeyStatistics.trailingEps.raw
        this.sharesOutstanding = statistics.defaultKeyStatistics.sharesOutstanding.raw
        this.revenue = statistics.financialData.totalRevenue.raw
    }
}