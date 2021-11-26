export const CREATE = 'CREATE_PURCHASE';
export const ADD = 'ADD_PURCHASE';
export const DELETE = 'DELETE_PURCHASE';

export const createPurchase = (purchase) => ({
  type: CREATE,
  purchase,
});

export const addPurchase = (purchase) => ({
  type: ADD,
  purchase,
});

export const deletePurchase = (purchase) => ({
  type: DELETE,
  purchase,
});
