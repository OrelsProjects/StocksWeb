import { ADD_NEW_STOCK } from '../actions/stocks';

const initialState = {
  stocks: [],
};

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_STOCK:
      return { ...state, stocks: action.stocks };
    default:
      return state;
  }
};

export default stocksReducer;
