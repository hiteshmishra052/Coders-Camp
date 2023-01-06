import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider =({children}) =>{
    const [currentUser, setcurrentUser] = useState( JSON.parse( localStorage.getItem("user")) || null
    );

    const login = ()=>{
        //To do
        setcurrentUser({id:1,name:"John Doe",profilePic:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"})
    };

    useEffect(()=>{
       localStorage.setItem("user",JSON.stringify(currentUser));
    },[currentUser]);

    return (
        <AuthContext.Provider value={{currentUser, login }}>{children}</AuthContext.Provider>
    )
}