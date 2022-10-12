import { createContext, useContext,  useEffect,  useState } from "react";
import { auth } from "../auth";

const UserContext = createContext();

export const UserContextWrapper = ({children}) => {
    const [userData, setUserData] = useState(null);

    useEffect(()=>{
        async function checkUser(){
            const data = await auth();
            setUserData(data);
        }
        checkUser();
    },[])

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);