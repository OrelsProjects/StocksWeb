import Financials from './financials'
import Statistics from './statistics'

export default class Stock {
    constructor(
        stockInfo,
        financials,
        statistics,
    ) {
        this.stockInfo = stockInfo
        this.financials = new Financials(financials)
        this.statistics = new Statistics(statistics)
    }


    getTTMEarnings() {
        return this.financials.getTTMEarnings()
    }

    getTTMPERatio() {
        return this.statistics.pe
    }

    getEps() {
        return this.statistics.eps
    }

    getRevenue() {
        return this.statistics.revenue
    }

    getPrice() {
        return this.financials.price
    }

    getSharesOutstanding() {
        return this.statistics.sharesOutstanding ? this.statistics.sharesOutstanding : this.getTTMEarnings() / this.getEps()
    }

    getProfitMargin() {
        return this.getTTMEarnings() / this.getRevenue()
    }

    getTotalDebt() {

    }

}