import { createContext, useContext,  useEffect,  useState } from "react";
import { getRating } from "../auth";

const RatingContext = createContext();

export const RatingContextWrapper = ({children}) => {
    const [rating, setRating] = useState([]);

    useEffect(()=>{
        async function fetchRating(){
            const rating = await getRating();
            const edited = {id: rating[0].id, rating: rating[0].attributes.rating.map(item => ({...item, shop_item: item.shop_item.data.id}))}
            setRating(edited);;
        }
        fetchRating();
    },[])

    return (
        <RatingContext.Provider value={{ rating, setRating }}>
            {children}
        </RatingContext.Provider>
    )
}

export const useRatingContext = () => useContext(RatingContext);