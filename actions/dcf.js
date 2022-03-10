/* eslint-disable */
export const INITIATE_DCF_CALCULATION = 'INITIATE_DCF_CALCULATION';
export const SET_ASSUMPTIONS = 'SET_ASSUMPTIONS';
export const SET_WACC = 'SET_WACC';
export const SET_DISCOUNTED_FREE_CASH_FLOW = 'SET_DISCOUNTED_CASH_FLOW';

export const initiateDCF = (stock) => ({
    type: INITIATE_DCF_CALCULATION,
    stock,
});

export const setAssumptions = ({
    taxRate, perpetualGrowthRate, evToEbitda, currentPrice, sharesOutstanding, debt, cash, capex,
}) => (
    {
        type: SET_ASSUMPTIONS,
        assumptions: {
            taxRate, perpetualGrowthRate, evToEbitda, currentPrice, sharesOutstanding, debt, cash, capex,
        },
    });

export const setWacc = ({ riskFreeRate, beta, costOfDebt }) => ({
    type: SET_WACC,
    wacc: { riskFreeRate, beta, costOfDebt },
});

export const setDiscountedFreeCashflow = (values) => ({
    type: SET_DISCOUNTED_FREE_CASH_FLOW,
    discountedFreeCashflow: values,
});
