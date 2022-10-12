import { useEffect, useState } from "react";
import { removeCartItem } from "../../auth";

function CartItem({ item, removeItem }) {
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(0)
    // console.log(item);

    useEffect(() => {
        setPrice(+item.shop_item.data.attributes.price.slice(1) * quantity);
        setQuantity(item.quantity);
    }, [])

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1)
    }

    const increaseQuantity = () => setQuantity(quantity + 1);

    return (
        <div className="cart-item">
            <div className="cart-item__header">
                <div className="cart-good">
                    <div className="cart-good__img">
                        <img src={process.env.NEXT_PUBLIC_API_HOST + item.shop_item.data.attributes.logo.data.attributes.url} alt="osaka jdm" className="cart-good__image" />
                    </div>
                    <div className="cart-good__name">
                        <h1 className="cart-good__title">{item.shop_item.data.attributes.name}</h1>
                        <p className="cart-good__desc">
                            Size: {item.shop_item.data.attributes.sizes.find(size => size.sizeShirt === item.size).sizeLong}
                        </p>
                        <p className="cart-good__desc">
                            Material: {item.shop_item.data.attributes.material}
                        </p>
                    </div>
                </div>
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
                <div className="cart-price">
                    {item.shop_item.data.attributes.price[0] + (price * quantity)}
                </div>
            </div>
            <div className="cart-item__footer">
                <form className="cart-coupon">
                    <input type="text" className="cart-coupon__input" placeholder="COUPON CODE" />
                    <button type="submit" className="cart-coupon__submit">apply</button>
                </form>
                <button className="cart__action cart__favorites">add in favorites</button>
                <button className="cart__action  cart__remove" onClick={()=>removeItem(item.id)}>remove</button>
            </div>
        </div>
    );
}

export default CartItem;