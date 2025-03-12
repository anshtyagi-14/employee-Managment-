import React, { createContext, useEffect, useState } from 'react';
import { GetLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext=createContext()

const Authprovider = ({children}) => {
    // localStorage.clear()

    const [userData,setUseraData]=useState(null)
    useEffect(()=>{
        setLocalStorage()
        const {empData,adminData}=GetLocalStorage()
        setUseraData({empData,adminData})}
    ,[])


    return (
        <div>
        <AuthContext.Provider value={userData}>
        {children}
        </AuthContext.Provider>
        </div>
    );
};

export default Authprovider;