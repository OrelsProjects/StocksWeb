import { INITIATE_DCF_CALCULATION, SET_ASSUMPTIONS, SET_DISCOUNTED_FREE_CASH_FLOW, SET_WACC } from '../actions/dcf';

const initialState = {
    dcf: []
};

const authReducer = (state = initialState, action) => {
    const dcf = state.dcf[state.dcf.length - 1];
    switch (action.type) {
        case INITIATE_DCF_CALCULATION:
            return { ...state, dcf: state.dcf.push({ ticker: action.ticker }) };
        case SET_ASSUMPTIONS:
            const assumptions = action.assumptions;
            dcf.assumptions = { assumptions };
            return { ...state, dcf: dcf };
        case SET_DISCOUNTED_FREE_CASH_FLOW:
            const discountedFreeCashflow = action.discountedFreeCashflow;
            dcf.discountedFreeCashflow = { discountedFreeCashflow };
            return { ...state, dcf: dcf };
        case SET_WACC:
            const wacc = action.wacc;
            dcf.wacc = { wacc };
            return { ...state, dcf: dcf };
        default:
            return state;
    }
};

export default authReducer;
