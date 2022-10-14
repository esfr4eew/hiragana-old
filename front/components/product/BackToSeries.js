import Link from "next/link";
import { useEffect, useState } from "react";
import { useShopItemsContext } from "../../context/shopItemsContext";

function BackToSeries({ id }) {
    const { shopItems } = useShopItemsContext();
    const [ href, setHref ] = useState('');

    useEffect(() => {
        // if(shopItems) {
        //     const url = shopItems.find(item => item.id == id).attributes.subcategory.data.attributes.category.data.id;
        //     setHref(url);
        // }
        const url = shopItems && shopItems.find(item => item.id == id).attributes.subcategory.data.attributes.category.data.id;
        setHref(url);
    }, [shopItems])
    
    return (
        <Link href={`/categories?id=${href}`}>
            <button className="to-series-button">back to series {href}</button>
        </Link>
    );
}

export default BackToSeries;