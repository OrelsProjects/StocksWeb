import {
  SET_LOW_REVENUE_GROWTH,
  SET_MID_REVENUE_GROWTH,
  SET_HIGH_REVENUE_GROWTH,
  SET_LOW_SHARE_CHANGE,
  SET_MID_SHARE_CHANGE,
  SET_HIGH_SHARE_CHANGE,
  SET_LOW_PROFIT_MARGIN,
  SET_MID_PROFIT_MARGIN,
  SET_HIGH_PROFIT_MARGIN,
  SET_LOW_FCF_AS_REVENUE,
  SET_MID_FCF_AS_REVENUE,
  SET_HIGH_FCF_AS_REVENUE,
  SET_LOW_PE, SET_MID_PE,
  SET_HIGH_PE,
  SET_LOW_PRICE_TO_FCF,
  SET_MID_PRICE_TO_FCF,
  SET_HIGH_PRICE_TO_FCF,
  SET_LOW_DESIRED_ANNUAL_RETURN,
  SET_MID_DESIRED_ANNUAL_RETURN,
  SET_HIGH_DESIRED_ANNUAL_RETURN,
} from '../actions/stockToolAnalyzer';

const initialState = {
  lowRevenueGrowth: 0,
  midRevenueGrowth: 0,
  highRevenueGrowth: 0,

  lowShareChange: 0,
  midShareChange: 0,
  highShareChange: 0,

  lowProfitMargin: 0,
  midProfitMargin: 0,
  highProfitMargin: 0,

  lowFCFAsRevenue: 0,
  midFCFAsRevenue: 0,
  highFCFAsRevenue: 0,

  lowPE: 0,
  midPE: 0,
  highPE: 0,

  lowPriceToFCF: 0,
  midPriceToFCF: 0,
  highPriceToFCF: 0,

  lowDesiredAnnualReturn: 0,
  midDesiredAnnualReturn: 0,
  highDesiredAnnualReturn: 0,
};

const stockToolAnalyzerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOW_REVENUE_GROWTH: return { ...state, lowRevenueGrowth: action.value };
    case SET_MID_REVENUE_GROWTH: return { ...state, midRevenueGrowth: action.value };
    case SET_HIGH_REVENUE_GROWTH: return { ...state, highRevenueGrowth: action.value };

    case SET_LOW_SHARE_CHANGE: return { ...state, lowShareChange: action.value };
    case SET_MID_SHARE_CHANGE: return { ...state, midShareChange: action.value };
    case SET_HIGH_SHARE_CHANGE: return { ...state, highShareChange: action.value };

    case SET_LOW_PROFIT_MARGIN: return { ...state, lowProfitMargin: action.value };
    case SET_MID_PROFIT_MARGIN: return { ...state, midProfitMargin: action.value };
    case SET_HIGH_PROFIT_MARGIN: return { ...state, highProfitMargin: action.value };

    case SET_LOW_FCF_AS_REVENUE: return { ...state, lowFCFAsRevenue: action.value };
    case SET_MID_FCF_AS_REVENUE: return { ...state, midFCFAsRevenue: action.value };
    case SET_HIGH_FCF_AS_REVENUE: return { ...state, highFCFAsRevenue: action.value };

    case SET_LOW_PE: return { ...state, lowPE: action.value };
    case SET_MID_PE: return { ...state, midPE: action.value };
    case SET_HIGH_PE: return { ...state, highPE: action.value };

    case SET_LOW_PRICE_TO_FCF: return { ...state, lowPriceToFCF: action.value };
    case SET_MID_PRICE_TO_FCF: return { ...state, midPriceToFCF: action.value };
    case SET_HIGH_PRICE_TO_FCF: return { ...state, highPriceToFCF: action.value };

    case SET_LOW_DESIRED_ANNUAL_RETURN: return { ...state, lowDesiredAnnualReturn: action.value };
    case SET_MID_DESIRED_ANNUAL_RETURN: return { ...state, midDesiredAnnualReturn: action.value };
    case SET_HIGH_DESIRED_ANNUAL_RETURN: return { ...state, highDesiredAnnualReturn: action.value };

    default: return state;
  }
};

export default stockToolAnalyzerReducer;
