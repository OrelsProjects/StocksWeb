import React, { useState, useContext, createContext } from 'react'
import firebaseclient from './firebaseClient'
import 'firebase/auth'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    firebaseclient()
    const [user, setUser] = useState(null)

    return (<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>)
}

export const useAuth = () => useContext(AuthContext)