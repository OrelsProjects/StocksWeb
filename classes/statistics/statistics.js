export default class Statistics {
    constructor(
        statistics
    ) {
        if (!statistics) return
        this.statistics = statistics
    }

    getPE() {
        return this.statistics.summaryDetail?.trailingPE?.raw ?
            this.statistics.summaryDetail?.trailingPE?.raw : null
    }

    getEPS() {
        return this.statistics.defaultKeyStatistics.trailingEps.raw
    }

    getSharesOutstanding() {
        return this.statistics.defaultKeyStatistics.sharesOutstanding.raw
    }

    getRevenue() {
        return this.statistics.financialData.totalRevenue.raw
    }

    getName() {
        return this.statistics?.quoteType?.longName ? this.statistics.quoteType.longName : "No name"
    }

}