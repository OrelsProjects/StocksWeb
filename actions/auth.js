export const LOGIN = "SET_USER"
export const LOGOUT = "LOGOUT"

export const login = (user) => {
    return { type: LOGIN, user }
}

export const logout = () => {
    return { type: LOGOUT, user: null }
}