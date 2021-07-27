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
        return this.statistics?.defaultKeyStatistics?.trailingEps.raw  ? 
        this.statistics?.defaultKeyStatistics?.trailingEps.raw : 0
    }

    getSharesOutstanding() {
        return this.statistics?.defaultKeyStatistics?.sharesOutstanding.raw ?
        this.statistics?.defaultKeyStatistics?.sharesOutstanding.raw : 0
    }

    getRevenue() {
        return this.statistics?.financialData?.totalRevenue.raw ? 
        this.statistics?.financialData?.totalRevenue.raw : 0
    }

    getName() {
        return this.statistics?.quoteType?.longName ? this.statistics.quoteType.longName : "No name"
    }

    getProfitMargin(){
        return this.statistics?.defaultKeyStatistics?.profitMargins?.raw * 100
    }

    getForwardPE(){
        return this.statistics?.summaryDetail?.forwardPE?.raw
    }

}