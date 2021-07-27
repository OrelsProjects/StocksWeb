
const HttpRequestsUrls = {
    getStockHistoricalDataURL: (ticker) =>
        `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=${ticker}&region=US`,
    getStockFinancialDataURL: (ticker) =>
        `https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/${ticker}/financial-data`,
    getStockFinancialsURL: () =>
        `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials`,
    getStockStatisticsURL: () =>
        `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-statistics`
}

module.exports = HttpRequestsUrls