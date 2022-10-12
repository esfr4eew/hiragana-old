import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/categories/Sidebar";
import Cards from "../components/categories/Cards"
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context";
import { useRouter } from 'next/router'

function Categories() {
    const { shopItems } = useContext(AppContext);
    const [items, setItems] = useState([]);
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        shopItems && popularitySort(shopItems);
    }, [shopItems, id])

    useEffect(() => {
        id !== undefined && shopItems && showCategory(id);
    }, [id])

    const showCategory = id => {
        const selectedItems = shopItems.filter(item => item.attributes.subcategory.data.attributes.category.data.id == id)
        setItems(selectedItems);
    }

    const showSubcategory = id => {
        const selectedItems = shopItems.filter(item => item.attributes.subcategory.data.id === id)
        setItems(selectedItems);
    }

    const popularitySort = (items) => {
        const sorted = items.sort((a, b) => {
            return a.attributes.popularity - b.attributes.popularity;
        });
        setItems([...sorted]);
    }
    
    const priceSortDesc = (items) => {
        const sorted = items.sort((a, b) => {
            return Number(a.attributes.price.slice(1)) - Number(b.attributes.price.slice(1));
        })
        console.log('re');
        setItems([...sorted]);
    }  
    
    const priceSortAsc = (items) => {
        const sorted = items.sort((a, b) => {
            return Number(b.attributes.price.slice(1)) - Number(a.attributes.price.slice(1));
        })
        setItems([...sorted])
    }

    return (
        <>
            <Header />
            <main className="main categories-main">
                <div className="container">
                    <div className="row">
                        <Sidebar queryId={id} showSubcategory={showSubcategory} />
                        <Cards items={items} sorts={{priceSortAsc, priceSortDesc, popularitySort}}/>
                    </div>
                </div>
            </main>
            <Footer />
        </>

    );
}

// export async function getServerSideProps() {
//     const { data } = await axios.get(process.env.NEXT_PUBLIC_API_HOST + '/api/moneyback?populate=*')

//     return { props: { data: data.data } }
// }

export default Categories;