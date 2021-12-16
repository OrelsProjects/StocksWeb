export const CREATE = 'CREATE_PORTFOLIO';
export const ADD = 'ADD_PORTFOLIO';
export const DELETE = 'DELETE_PORTFOLIO';

export const createPortfolio = (portfolio) => ({
  type: CREATE,
  portfolio,
});

export const addPortfolio = (portfolio) => ({
  type: ADD,
  portfolio,
});

export const deletePortfolio = (portfolio) => ({
  type: DELETE,
  portfolio,
});
