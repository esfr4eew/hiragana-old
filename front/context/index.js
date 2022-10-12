import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AppContext = createContext();

export function AppWrapper({ children }) {
    const [shopItems, setShopItems] = useState(null);

    useEffect(() => {
        async function fetchShopItems() {
            let { data } = await axios.get(process.env.NEXT_PUBLIC_API_HOST + '/api/shop-items?populate[0]=logo&populate[1]=subcategory&populate[2]=subcategory.category&populate[3]=imageList&populate[4]=comments&populate[5]=description&populate[6]=sizes');
            setShopItems(data.data);
        }
        fetchShopItems();
    }, [])
    
    return (
        <AppContext.Provider value={{shopItems}}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}