import React, { createContext } from 'react';

export const AuthContex = createContext(null);


const AuthProvider = ({ children }) => {
    
    const authinfo = {
        
    }

    return (
        <AuthContex.Provider value={authinfo}>
            {children}
        </AuthContex.Provider>
       
    );
}

export default AuthProvider;
