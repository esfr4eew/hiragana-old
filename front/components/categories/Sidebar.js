import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

function Sidebar({ queryId, showSubcategory }) {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
            const { data } = await axios.get('http://localhost:1337/api/categories?populate[0]=subcategories&populate[1]=subcategories.shop_items')
            setCategories(data.data);
        }

        fetchCategories();
    }, [])
    return (
        <aside className="col-5 col-md-3">
            {categories.length > 0 && categories.map(category => {
                return (
                    <Link href={"/categories?id=" + category.id} key={category.id}>
                    <details className="sidebar-category" open={queryId == category.id}>
                        <summary className="sidebar-category__name">{category.attributes.name}</summary>
                        <div className="sidebar-list">
                            {category.attributes.subcategories.data.map(subcategory => {
                                return (
                                    <button className="sidebar-list__item" key={subcategory.id} onClick={() => showSubcategory(subcategory.id)}>
                                        <span className="sidebar-list__name">{subcategory.attributes.name}</span> - <span
                                            className="sidebar-list__amount">{subcategory.attributes.shop_items.data.length}</span>
                                    </button>
                                )
                            })}
                        </div>
                    </details>
                    </Link>
                )
            })}
        </aside>
    );
}

export default Sidebar;