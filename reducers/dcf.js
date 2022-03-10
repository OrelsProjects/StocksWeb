/* eslint-disable */
import { INITIATE_DCF_CALCULATION, SET_ASSUMPTIONS, SET_DISCOUNTED_FREE_CASH_FLOW, SET_WACC } from '../actions/dcf';

const initialState = {
};

const dcfReducer = (state = initialState, action) => {
    let dcf = { ...state };
    switch (action.type) {
        case INITIATE_DCF_CALCULATION:
            dcf = {}
            dcf.stock = action.stock
            return { ...state, dcf };
        case SET_ASSUMPTIONS:
            dcf.assumptions = action.assumptions;
            return { ...state, dcf };
        case SET_DISCOUNTED_FREE_CASH_FLOW:
            dcf.discountedFreeCashflow = action.discountedFreeCashflow;
            return { ...state, dcf };
        case SET_WACC:
            dcf.wacc = action.wacc;
            return { ...state, dcf }
        default:
            return state;
    }
};

export default dcfReducer;
