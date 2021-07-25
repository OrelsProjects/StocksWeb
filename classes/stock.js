import Financials from './financials'
import Statistics from './statistics'

export default class Stock {
    constructor(
        stockName,
        financials,
        statistics,
    ) {
        this.stockName = stockName ? stockName : ""
        this.financials = new Financials(financials)
        this.statistics = new Statistics(statistics)
    }


    getTTMEarnings() {
        return this.financials.getTTMEarnings()
    }

    getTTMPERatio() {
        return this.statistics.pe ? this.statistics.pe : 0
    }

    getEps() {
        return this.statistics.eps ? this.statistics.eps : 0
    }

    getRevenue() {
        return this.statistics.revenue ? this.statistics.revenue : 0
    }

    getPrice() {
        return this.financials.price ? this.financials.price : 0
    }

    getSharesOutstanding() {
        return this.statistics.sharesOutstanding ?
            this.statistics.sharesOutstanding : this.getTTMEarnings() / this.getEps()
    }

    getProfitMargin() {
        return this.getTTMEarnings() / this.getRevenue()
    }

    getTotalDebt() {

    }

    getStockName() {
        return this.statistics.name
    }

}