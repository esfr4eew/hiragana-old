import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useCartContext } from "../../context/cartContext";
import { editCart, updateRating } from "../../auth";
import CartButton from "../CartButton";
import { useRatingContext } from "../../context/ratingContext";
import { useShopItemsContext } from "../../context/shopItemsContext";

function Card({ item }) {
    const [activeImageIndex, setActiveImageIdnex] = useState(0);
    const [k, setK] = useState(0);

    const len = item.attributes.imageList.data.length;
    const [itemInCart, setItemInCart] = useState(false);
    const { shopItems } = useShopItemsContext();
    const { userId, cartData, setCartData } = useCartContext();
    const { rating, setRating } = useRatingContext();
    const [stars, setStars] = useState(0);

    useEffect(() => {
        if (cartData) {
            setItemInCart(cartData.cartItems.find(elem => elem.shop_item == item.id))
        }

    }, [cartData])

    useEffect(() => {
        if (rating && rating.rating.length) {
            const currentRating = rating.rating.find(r => r.shop_item === item.id);
            setStars(currentRating?.ratingValue);
        }
    }, [rating])

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

    const addRating = async (num) => {
        setStars(num);
        const newArray = rating.rating.find(el => el.shop_item === item.id) ? rating.rating : rating.rating.concat({shop_item: item.id, ratingValue: num})
        const newState = { ...rating, rating: newArray.map(el => ({ ...el, ratingValue: el.shop_item === item.id ? num : el.ratingValue })) }
        setRating(newState)
        await updateRating(rating.id, newState.rating);
    }

    return (
        <div className="col-11 col-md-6 col-lg-4" key={item.id}>
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
                        </div>
                    </Link>
                    <div className="category-item__rating">
                        <div className="category-item__stars">
                            {[1, 2, 3, 4, 5].map((num, i) => {
                                return (
                                    <span className="category-item__star" key={num} onClick={() => addRating(num)}>
                                        <img src={`/static/images/${num <= stars ? "star-gold" : "star"}.png`} alt="" className="category-star-image" />
                                    </span>
                                )

                            })}
                            {/* <span className="category-item__star">
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
                                    </span> */}
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