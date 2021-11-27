export default class Portfolio {
  constructor(portfolio) {
    this.id = portfolio.id;
    this.name = portfolio.name;
    this.purchases = portfolio.purchases;
  }

  addStock(stock) {
    // todo add purchase
    return this;
  }
}
