export default class Statistics {
    constructor(
        statistics
    ) {
        if (!statistics) return
        this.pe = statistics.summaryDetail?.trailingPE?.raw ? statistics.summaryDetail?.trailingPE?.raw : undefined
        this.eps = statistics.defaultKeyStatistics.trailingEps.raw
        this.sharesOutstanding = statistics.defaultKeyStatistics.sharesOutstanding.raw
        this.revenue = statistics.financialData.totalRevenue.raw
        this.name = statistics?.quoteType?.longName ? statistics.quoteType.longName : "No name"
    }
}