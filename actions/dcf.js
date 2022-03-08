export const INITIATE_DCF_CALCULATION = 'INITIATE_DCF_CALCULATION';
export const SET_ASSUMPTIONS = 'SET_ASSUMPTIONS';
export const SET_WACC = 'SET_WACC';
export const SET_DISCOUNTED_FREE_CASH_FLOW = 'SET_DISCOUNTED_CASH_FLOW';



export const initiateDCF = ({ ticker }) => ({
    type: INITIATE_DCF_CALCULATION,
    assumptions: { ticker },
});

export const setAssumptions = ({ taxRate, discountRate, perpetualGrowthRate, evToEbitda, price, sharesOutstanding, debt, cash, capex }) => ({
    type: SET_ASSUMPTIONS,
    assumptions: { taxRate, discountRate, perpetualGrowthRate, evToEbitda, price, sharesOutstanding, debt, cash, capex },
});

export const setWacc = ({ riskFreeRate, equityRate, beta }) => ({
    type: SET_WACC,
    wacc: { riskFreeRate, equityRate, beta },
});

export const setDiscountedFreeCashflow = ({ ebit, ebitGrowth, da, daGrowth, capex, capexGrowth, changesInNWC, changesInNWCGrowth }) => ({
    type: SET_DISCOUNTED_FREE_CASH_FLOW,
    discountedFreeCashflow: { ebit, ebitGrowth, da, daGrowth, capex, capexGrowth, changesInNWC, changesInNWCGrowth }
})