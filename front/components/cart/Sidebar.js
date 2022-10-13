import Link from "next/link";
import { useCartContext } from "../../context/cartContext";
import { useTotalSumContext } from "../../context/totalSum";

function Sidebar() {
    const { total } = useTotalSumContext();
    const { cartData } = useCartContext();
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
                        <option value="Ukraine">Ukraine</option>
                        <option value="Usa">Usa</option>
                    </select>
                    <input type="text" className="cart-form__input" placeholder="state / county" />
                    <input type="text" className="cart-form__input" placeholder="town / city" />
                    <input type="text" className="cart-form__input" placeholder="postcode / zip" />
                    <button type="submit" className="cart-form__update">Update</button>
                </form>

                <div className="cart-subtotal__title">Total</div>

                <div className="cart-subtotal__price">{total}</div>

                <Link href="/checkout">
                    <a className="cart-total__submit">
                        <img src="/static/images/basket-icon.png" alt="" />
                        <span>proceed to checkout</span></a>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;