import Link from 'next/link';
import { useEffect, useState } from 'react';
import CartButton from '../CartButton';
import { useCartContext } from "../../context/cartContext"
import { editCart } from "../../auth";

function RecommendItem({ item }) {
    const { userId, cartData, setCartData } = useCartContext();
    const [itemInCart, setItemInCart] = useState(false);

    useEffect(() => {
        setItemInCart(cartData?.cartItems.find(elem => elem.shop_item == item.id))
    }, [cartData])

    const addToCart = async () => {
        const el = { size: item.attributes.sizes[0].sizeShirt, quantity: 1, shop_item: item.id };
        const cartItems = cartData.cartItems.concat(el);
        setCartData({ ...cartData, cartItems })
        setItemInCart(true);
        await editCart(userId, cartData.cartId, cartItems)
    }

    return (
        <div className="custom-carousel-item">
            <div className="category-item-container recommend-item-container">
                <div className="category-item recommend-item">
                    <Link href={`/products/${item.id}`}>
                        <div className="recomment-wrapper">
                            <div className="category-item__images">
                                <img src={process.env.NEXT_PUBLIC_API_HOST + item.attributes.logo.data.attributes.url} alt="car 1"
                                    className="category-item__image category-item__image--active" />
                            </div>

                            <div className="category-item__name">{item.attributes.name}</div>
                        </div>
                    </Link>
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
                    <div className="category-item__offer">
                        <div className="category-item__prices">
                            <div className="category-item__oldprice">{item.attributes.oldprice}</div>
                            <div className="category-item__price">{item.attributes.price}</div>
                        </div>
                        <CartButton itemInCart={itemInCart} addToCart={addToCart} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecommendItem;