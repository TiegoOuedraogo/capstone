import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userToken, setUserToken] = useState(null);
    // ... other state related to authentication
    
    const login = (token) => {
        setIsLoggedIn(true);
        setUserToken(token);
        // ... other login logic
    };
    
    const logout = () => {
        setIsLoggedIn(false);
        setUserToken(null);
        // ... other logout logic
    };
    
    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, userToken }}>
            {children}
        </AuthContext.Provider>
    );
};
