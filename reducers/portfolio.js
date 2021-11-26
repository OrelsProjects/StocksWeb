import { ADD_STOCK, CREATE, DELETE, ADD_PURCHASE } from '../actions/portfolio';

const initialState = {
  portfolio: null,
};

const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STOCK:
      return { ...state, portfolio: state.portfolio.addStock(action.stock) };
    case ADD_PURCHASE:
      return { ...state, portfolio: state.portfolio.addPurchase(action.stock) };
    case CREATE:
      return { ...state, portfolio: action.portfolio };
    case DELETE:
      return { ...state, portfolio: null };
    default:
      return state;
  }
};

export default portfolioReducer;
