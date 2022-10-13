import Link from "next/link";
import { useCartContext } from "../../context/cartContext";
import { useTotalSumContext } from "../../context/totalSum";
import { v4 as uuidv4 } from 'uuid';
import { newOrder, useCoupon } from "../../auth";
import { useShopItemsContext } from "../../context/shopItemsContext";
import { useRouter } from 'next/router';

function Sidebar() {
    const { total } = useTotalSumContext();
    const { cartData, coupon } = useCartContext();
    const { shopItems } = useShopItemsContext();
    const router = useRouter();

    const getPrice = (cartItem) => {
        const shopItem = shopItems.find(shopItem => shopItem.id === cartItem.shop_item);
        return shopItem.attributes.price[0] + (cartItem.quantity * +shopItem.attributes.price.slice(1));
    }

    const createOrder = async () => {
        const orderId = uuidv4();
        console.log(coupon);
        console.log(...cartData.cartItems);
        // const data = {orderId, totalPrice: total, Item: [{size: "S", price: "123", quantity: 1, shop_item: 1}]}
        const data = {
            coupons: coupon?.id, orderId, totalPrice: total, Item: [...cartData.cartItems.map(cartItem => {
                const { id, ...item } = cartItem
                return ({ ...item, price: getPrice(cartItem)})
            })]
        }
        await newOrder(data);
        if(coupon) {
            await useCoupon(coupon);
        }
        router.push(`/checkout/${orderId}`);
    }

    return (
        <div className="col-xl-4 col-lg-3 col-12">
            <div className="cart-total">
                <div className="cart-subtotal">
                    <span className="cart-subtotal__title">Subtotal: </span>
                    <span className="cart-subtotal__price">{total}</span>
                </div>

                <div className="cart-total__calculate">Calculate shipping</div>

                <form className="cart-form">
                    <select className="cart-form__select">
                        <option value="UA">Ukraine</option>
                        <option value="USA">Usa</option>
                    </select>
                    <input type="text" className="cart-form__input" placeholder="state / country" />
                    <input type="text" className="cart-form__input" placeholder="town / city" />
                    <input type="text" className="cart-form__input" placeholder="postcode / zip" />
                    <button type="submit" className="cart-form__update">Update</button>
                </form>

                <div className="cart-subtotal__title">Total</div>

                <div className="cart-subtotal__price">{total}</div>

                <a className="cart-total__submit" onClick={async () => await createOrder()}>
                    <img src="/static/images/basket-icon.png" alt="" />
                    <span>proceed to checkout</span></a>
            </div>
        </div>
    );
}

export default Sidebar;