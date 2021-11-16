import React from 'react';


export default class Purchase {
    constructor(purchase) {
        this.ticker = purchase.ticker;
        this.date = purchase.date;
        this.quantity = purchase.quantity;
        this.price = purchase.price;
    }
}