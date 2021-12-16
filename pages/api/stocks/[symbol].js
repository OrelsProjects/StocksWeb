const axios = require('axios');
const HttpRequestsUrls = require('../../../utils/HttpRequestsUrls');
const Stock = require('../../../classes/stock/stock')



export default async function getStock(req, res) {
    try {
        const {ticker: symbol} = req.query;
        const options = {
            method: 'GET',
            url: `${HttpRequestsUrls.getStockFinancialsURL()}`,
            params: { symbol: `${symbol}`, region: 'US' },
            headers: {
              'x-rapidapi-key': 'd5521624a8msh964b295244bd92bp1b86e0jsn6dee14943944',
              'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
            },
          };
          const financialsResponse = await axios.request(options);
          options.url = `${HttpRequestsUrls.getStockStatisticsURL()}`;
          const statisticsResponse = await axios.request(options);
          const financials = financialsResponse.data;
          const statistics = statisticsResponse.data;
        res.status(200).send(JSON.stringify({ ticker: symbol, financials, statistics }));
    }
    catch (ex) {
        console.log(ex);
        res.status(500).send(ex);
    }
};