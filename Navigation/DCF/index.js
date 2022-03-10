import Router from 'next/router';

export function toWACCCalculation() {
  Router.push('wacc');
}

export function toResults() {
  Router.push('results');
}

export function toDiscountedFreeCashflow() {
  Router.push('discountedfreecashflow');
}

export function toAssumptions() {
  Router.push('assumptions');
}

export function toDCF() {
  Router.push('dcf');
}
