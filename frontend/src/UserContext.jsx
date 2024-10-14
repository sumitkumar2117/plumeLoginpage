import { createContext, useState } from "react";


export const UserContext = createContext({});

export function UserContextProvider({children}){
    const [userID, setUserIDname] = useState(null);

    return(
        <UserContext.Provider value = {{userID, setUserIDname}}>
            {children}
        </UserContext.Provider>
    )
}