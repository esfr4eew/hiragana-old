import { createContext, useContext, useEffect, useState } from "react";
import { createRating, getRating, auth } from "../auth";

const RatingContext = createContext();

export const RatingContextWrapper = ({ children }) => {
    const [rating, setRating] = useState([]);

    useEffect(() => {
        async function fetchRating() {
            const rating = await getRating();
            setRating(rating);
        }
        fetchRating()

    }, [])

    return (
        <RatingContext.Provider value={{ rating, setRating }}>
            {children}
        </RatingContext.Provider>
    )
}

export const useRatingContext = () => useContext(RatingContext);