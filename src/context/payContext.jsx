import React, { createContext, useState } from 'react';

// @ts-ignore
const MyContext = createContext();

const ContextProvider = ({children})=>{
const [pay, setpay] = useState(false)
return (
    <MyContext.Provider value={{pay,setpay}}>
        {children}
    </MyContext.Provider>
)
}

export {ContextProvider,MyContext}