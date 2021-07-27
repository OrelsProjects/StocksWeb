import Stock from './stock'

const Converter = {
    toFirestore: function (stock) {
        return {
            name: stock.getStockName(),
            ticker: stock.ticker,
            statistics: JSON.stringify(stock.statistics),
            financials: JSON.stringify(stock.financials)
        };
    },
    fromFirestore: function (snapshot, options) {
        const stock = snapshot.data(options);
        return new Stock(
            stock.id,
            stock.ticker,
            JSON.parse(stock.financials).financials,
            JSON.parse(stock.statistics).statistics
        );
    }
};

module.exports = Converter