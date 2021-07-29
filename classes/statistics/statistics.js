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
        return this.statistics?.defaultKeyStatistics?.trailingEps.raw ?
            this.statistics?.defaultKeyStatistics?.trailingEps.raw : 0
    }

    getSharesOutstanding() {
        console.log(this.getEarnings() / this.statistics?.defaultKeyStatistics?.impliedSharesOutstanding?.raw)

        return this.statistics?.defaultKeyStatistics?.impliedSharesOutstanding?.raw ?
            this.statistics?.defaultKeyStatistics?.impliedSharesOutstanding?.raw : 0
    }

    getRevenue() {
        return this.statistics?.financialData?.totalRevenue.raw ?
            this.statistics?.financialData?.totalRevenue.raw : 0
    }

    getEarnings() {
        return this.getRevenue() * this.getProfitMargin()
    }

    getName() {
        return this.statistics?.quoteType?.longName ? this.statistics.quoteType.longName : "No name"
    }

    getProfitMargin() {
        return this.statistics?.defaultKeyStatistics?.profitMargins?.raw * 100
    }

    getForwardPE() {
        return this.statistics?.summaryDetail?.forwardPE?.raw
    }

    getEnterpriseValue() {
        return this.statistics?.defaultKeyStatistics?.enterpriseValue?.raw
    }

    getFreeCashFlow() {
        return this.statistics?.financialData?.freeCashflow?.raw
    }
}