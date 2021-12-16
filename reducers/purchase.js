import { ADD as ADD_STOCK, CREATE, DELETE } from '../actions/purchase';

const initialState = {
  purchases: null,
};

const purchaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STOCK:
      return { ...state, user: action.user };
    case CREATE:
      return { ...state, user: action.purchase };
    case DELETE:
      return { ...state, purchase: null };
    default:
      return state;
  }
};

export default purchaseReducer;
