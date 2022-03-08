import Router from 'next/router';

export function toWACCCalculation() {
    console.log("hei")
    Router.push('WACC');
}

export function toDiscountedFreeCashflow() {
    Router.push('DiscountedFreeCashflow');
}

export function toAssumptions() {
    Router.push('Assumptions');
}

export function toDCF() {
    Router.push('DCF');
}
