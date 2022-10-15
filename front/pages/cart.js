import Footer from "../components/Footer";
import Header from "../components/Header";
import CartItems from "../components/cart/CartItems"
import Sidebar from "../components/cart/Sidebar";
import { useEffect } from "react";
import { useCartContext } from "../context/cartContext";
import { TotalSumWrapper } from "../context/totalSum";

function Cart() {
    const { cartData } = useCartContext();

    return (
        <div>
            <Header />
            <main>
                {cartData && cartData.cartItems.length ? <div className="cart">
                    <div className="container">
                        <div className="row">
                            <CartItems />
                            <Sidebar />
                        </div>
                    </div>
                </div> : <div className="container">Корзина пуста</div>}
            </main>
            <Footer />
        </div>
    );
}

export default Cart;