import { useEffect, useState } from "react";
import Link from "next/link";
import { useCartContext } from "../../context/cartContext";

function CartItem({ item, removeCartItem, priceNodes, nodeIdx }) {
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(0)
    const { cartData, setCartData, userId } = useCartContext();
    // console.log(['cart item', item]);
    // console.log(['priceNodes', priceNodes]);

    useEffect(() => {
        if (item.shop_item) {
            setPrice(+item.shop_item.attributes.price.slice(1));
            setQuantity(item.quantity);
        }

    }, [item.shop_item])

    useEffect(() => {
        const cartItems = cartData.cartItems.map(el => {
            if (el.id === item.id) {
                return { ...el, quantity }
            }
            return el;
        })
        setCartData({ ...cartData, cartItems })
    }, [quantity])


    const decreaseQuantity = () => { if (quantity > 1) setQuantity(quantity - 1) };

    const increaseQuantity = () => setQuantity(quantity + 1);

    return (
        <>
            {item && item.shop_item && <div className="cart-item">
                <div className="cart-item__header">
                    <Link href={`/products/${item.shop_item.id}`}>
                        <div className="cart-good">
                            <div className="cart-good__img">
                                <img src={process.env.NEXT_PUBLIC_API_HOST + item.shop_item.attributes.logo.data.attributes.url} alt="osaka jdm" className="cart-good__image" />
                            </div>
                            <div className="cart-good__name">
                                <h1 className="cart-good__title">{item.shop_item.attributes.name}</h1>
                                <p className="cart-good__desc">
                                    Size: {item.shop_item.attributes.sizes.find(size => size.sizeShirt === item.size).sizeLong}
                                </p>
                                <p className="cart-good__desc">
                                    Material: {item.shop_item.attributes.material}
                                </p>
                            </div>
                        </div>
                    </Link>
                    <div className="cart-count">
                        <div className="good-form__quantity-group cart-count__group">
                            <button className="good-form__quantity-action good-form__subtraction" onClick={decreaseQuantity}>-</button>
                            <span className="good-form__quantity cart-count__quantity">{quantity}</span>
                            <button className="good-form__quantity-action good-form__addition" onClick={increaseQuantity}>+</button>
                        </div>
                        <div className="cart-count__info">
                            {price} per 1
                        </div>
                    </div>
                    <div className="cart-price" ref={el => priceNodes.current[nodeIdx] = el}>
                        {item.shop_item.attributes.price[0] + (price * quantity)}
                    </div>
                </div>
                <div className="cart-item__footer">
                    <form className="cart-coupon">
                        <input type="text" className="cart-coupon__input" placeholder="COUPON CODE" />
                        <button type="submit" className="cart-coupon__submit">apply</button>
                    </form>
                    {/* <button className="cart__action cart__favorites">add in favorites</button> */}
                    <button className="cart__action  cart__remove" onClick={async () => await removeCartItem(item)}>remove</button>
                </div>
            </div>}
        </>
    );
}

export default CartItem;