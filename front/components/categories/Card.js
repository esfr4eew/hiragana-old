import Link from "next/link";
import { useState, useEffect } from "react";
import { useCartContext } from "../../context/cartContext";
import { editCart } from "../../auth";
import CartButton from "../CartButton";

function Card({ item }) {
    const [activeImageIndex, setActiveImageIdnex] = useState(0);
    const [k, setK] = useState(0);
    const len = item.attributes.imageList.data.length;
    const [itemInCart, setItemInCart] = useState(false);
    const { userId, cartData, setCartData } = useCartContext();

    useEffect(() => {
        if (cartData) {
            setItemInCart(cartData.cartItems.find(elem => elem.shop_item == item.id))
        }

    }, [cartData])

    const prevImage = () => {
        setK(k - 1);
        setActiveImageIdnex(Math.abs((k - 1) % len))
    };

    const nextImage = () => {
        setK(k + 1);
        setActiveImageIdnex(Math.abs((k + 1) % len));
    }

    const addToCart = async () => {
        const el = { size: item.attributes.sizes[0].sizeShirt, quantity: 1, shop_item: item.id };
        const cartItems = cartData.cartItems.concat(el);
        setCartData({ ...cartData, cartItems })
        setItemInCart(true);
        await editCart(userId, cartData.cartId, cartItems)
    }

    return (
        <div className="col-12 col-md-6 col-lg-4" key={item.id}>
            <div className="category-item">
                <div className="category-item-container">
                    <Link href={`/products/${item.id}`}>
                        <div>
                            <div className="category-item__images">
                                {item.attributes.imageList.data.map((data, i) => {
                                    return (
                                        <img src={process.env.NEXT_PUBLIC_API_HOST + data.attributes.url} alt="car" className={`category-item__image ${i === activeImageIndex ? "category-item__image--active" : ""}`} key={data.id} />
                                    )
                                })}
                            </div>

                            <div className="category-item__name">{item.attributes.name}</div>

                            <div className="category-item__rating">
                                <div className="category-item__stars">
                                    <span className="category-item__star">
                                        <img src="/static/images/star.png" alt="" className="" />
                                    </span>
                                    <span className="category-item__star">
                                        <img src="/static/images/star.png" alt="" className="" />
                                    </span>
                                    <span className="category-item__star">
                                        <img src="/static/images/star.png" alt="" className="" />
                                    </span>
                                    <span className="category-item__star">
                                        <img src="/static/images/star.png" alt="" className="" />
                                    </span>
                                    <span className="category-item__star">
                                        <img src="/static/images/star.png" alt="" className="" />
                                    </span>
                                </div>
                                <span className="category-item__stat">({item.attributes.rating})</span>
                            </div>
                        </div>
                    </Link>
                    <div className="category-item__offer">
                        <div className="category-item__prices">
                            <div className="category-item__oldprice">{item.attributes.oldprice}</div>
                            <div className="category-item__price">{item.attributes.price}</div>
                        </div>
                        <CartButton itemInCart={itemInCart} addToCart={addToCart} />
                    </div>
                </div>

                <div className="category-item__controls">
                    <button className="category-item__control" onClick={prevImage}>
                        <img src="/static/images/card-arrow-left.png" alt="prev slide arrow" />
                    </button>
                    <button className="category-item__control" onClick={nextImage}>
                        <img src="/static/images/card-arrow-right.png" alt="next slide arrow" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;