import React, { createContext, useEffect, useState } from 'react';


export const USER_CONTEXT = createContext();

const UserProvider = ({ children }) => {

    const [refetch, setRefetch] = useState(false);
    const [token, setToken] = useState("");

    useEffect(() => {
        setToken(localStorage.getItem("accessToken"));
    }, [refetch])

    const value = {
        refetch, setRefetch, token
    }

    return (
        <USER_CONTEXT.Provider value={value}>
            {children}
        </USER_CONTEXT.Provider>
    );
};

export default UserProvider;