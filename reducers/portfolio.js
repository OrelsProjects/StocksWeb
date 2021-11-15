import { ADD as ADD_STOCK, CREATE, DELETE } from '../actions/portfolio';

const initialState = {
    portfolio: null,
};

const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_STOCK:
            return { ...state, user: action.user };
        case CREATE:
            return { ...state, user: action.portfolio };
        case DELETE:
            return { ...state, portfolio: null }
        default:
            return state;
    }
};

export default portfolioReducer;
