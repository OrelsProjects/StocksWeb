export const LOGIN = 'SET_USER';
export const LOGOUT = 'LOGOUT';

export const login = (user) => ({ type: LOGIN, user });

export const logout = () => ({ type: LOGOUT, user: null });
