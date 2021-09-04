/*
    const axios = require("axios").default;

    const options = {
      method: 'GET',
      url: `${HttpRequestsUrls.getStockFinancialsURL()}`,
      params: { symbol: 'FB', region: 'US' },
      headers: {
        'x-rapidapi-key': 'd5521624a8msh964b295244bd92bp1b86e0jsn6dee14943944',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
      }
    };

    let stock
    let financials
    const financialsResponse = await axios.request(options)
    financials = financialsResponse.data
    options.url = `${HttpRequestsUrls.getStockStatisticsURL()}`
    const statisticsResponse = await axios.request(options)
    stock = new Stock("FB", financials, statisticsResponse.data)
    dispatch(stocksActions.addNewStock(stock)) */
