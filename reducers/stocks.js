import { ADD_NEW_STOCK } from '../actions/stocks';

const initialState = {
  stocks: {},
};

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_STOCK:
      const stocksJson = { ...action.stock }
      stocksJson[action.stock.ticker] = action.stock
      return { ...state, stocks: stocksJson };
    default:
      return state;
  }
};

export default stocksReducer;
