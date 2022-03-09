/* eslint-disable */
import { INITIATE_DCF_CALCULATION, SET_ASSUMPTIONS, SET_DISCOUNTED_FREE_CASH_FLOW, SET_WACC } from '../actions/dcf';

const initialState = {
    dcf: []
};

const dcfReducer = (state = initialState, action) => {
    debugger;
    const dcf = state.dcf[state.dcf.length - 1] ? state.dcf[state.dcf.length - 1] : [];
    switch (action.type) {
        case INITIATE_DCF_CALCULATION:
            dcf.push({ ticker: action.ticker })
            return { ...state, dcf: dcf};
        case SET_ASSUMPTIONS:
            const assumptions = action.assumptions;
            dcf.assumptions = assumptions;
            let tempDCFAssumptions = state.dcf;
            tempDCFAssumptions[tempDCFAssumptions.length - 1] = dcf
            return { ...state, dcf: tempDCFAssumptions };
        case SET_DISCOUNTED_FREE_CASH_FLOW:
            const discountedFreeCashflow = action.discountedFreeCashflow;
            dcf.discountedFreeCashflow = discountedFreeCashflow;
            let tempDCFDiscounted = state.dcf;
            tempDCFDiscounted[tempDCFDiscounted.length - 1] = dcf
            return { ...state, dcf: tempDCFDiscounted };
        case SET_WACC:
            const wacc = action.wacc;
            dcf.wacc = wacc;
            let tempDCFWacc = state.dcf;
            tempDCFWacc[tempDCFWacc.length - 1] = dcf
            return { ...state, dcf: tempDCFWacc };
        default:
            return state;
    }
};

export default dcfReducer;
