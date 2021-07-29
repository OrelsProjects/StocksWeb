import Financials from '../financials/financials'
import Statistics from '../statistics/statistics'

export default class Stock {
    constructor(
        id,
        ticker,
        financials,
        statistics,
    ) {
        this.ticker = ticker
        this.financials = new Financials(financials)
        this.statistics = new Statistics(statistics)
    }


    getTTMEarnings() {
        return this.financials.getTTMEarnings()
    }

    getTTMPERatio() {
        return this.statistics.getPE() ? this.statistics.getPE() : 0
    }

    getEps() {
        return this.statistics.getEPS() ? this.statistics.getEPS() : 0
    }

    getRevenue() {
        return this.statistics.getRevenue() ? this.statistics.getRevenue() : 0
    }

    getPrice() {
        return this.financials.getPrice() ? this.financials.getPrice() : 0
    }

    getSharesOutstanding() {
        return this.statistics.getSharesOutstanding() ?
            this.statistics.getSharesOutstanding() : this.getTTMEarnings() / this.getEps()
    }

    getProfitMargin() {
        return this.statistics?.getProfitMargin() ?
            this.statistics?.getProfitMargin() : this.getTTMEarnings() / this.getRevenue()
    }

    getTotalDebt() {

    }

    getStockName() {
        return this.statistics.getName()
    }

    getForwardPE() {
        return this.statistics.getForwardPE() ? this.statistics.getForwardPE() : 20
    }

    getEnterpriseValue() {
        return this.statistics.getEnterpriseValue() ? this.statistics.getEnterpriseValue() : 0
    }

    getFreeCashFlow() {
        return this.statistics.getFreeCashFlow() ? this.statistics.getFreeCashFlow() : 1
    }

    getFreeCashFlowYield() {
        return 1 / (this.getEnterpriseValue() / this.getFreeCashFlow())
    }
}