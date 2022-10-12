import Footer from "../components/Footer";
import Header from "../components/Header";
import CartItems from "../components/cart/CartItems"
import Sidebar from "../components/cart/Sidebar";

function Cart() {
    return (
        <>
        <Header />
        <main>
            <div className="cart">
                <div className="container">
                    <div className="row">
                        <CartItems />
                        <Sidebar />
                    </div>
                </div>
            </div>
        </main>
        <Footer />
        </>
    );
}

export default Cart;