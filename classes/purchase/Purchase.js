export default class Purchase {
  constructor(purchase) {
    this.id = purchase.id;
    this.ticker = purchase.ticker;
    this.date = purchase.date;
    this.amount = purchase.amount;
    this.price = purchase.price;
  }
}
