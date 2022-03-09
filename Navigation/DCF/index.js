import Router from 'next/router';

export function toWACCCalculation() {
  Router.push('WACC');
}

export function toDiscountedFreeCashflow() {
  Router.push('DiscountedFreeCashflow');
}

export function toAssumptions() {
  Router.push('DCF/Assumptions');
}

export function toDCF() {
  Router.push('DCF');
}
