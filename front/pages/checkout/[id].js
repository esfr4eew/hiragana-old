import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CheckoutForm from "../../components/checkout/CheckoutForm";
import Order from "../../components/checkout/Order";
import axios from "axios";

function Checkout({ data }) {
    console.log(data);
    return (
        <>
            <Header />
            <main>
                <div className="checkout">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="checkout__title">BILLING DETAILS</h1>
                            </div>
                        </div>
                        <CheckoutForm />
                        {data && <Order total={data.attributes.totalPrice} products={data.attributes.Item}/>}

                        <div className="row">
                            <div className="col-sm-6 col-12">
                                <div className="order-confirm">
                                    <h1 className="checkout__title">PAYMENT METHOD</h1>
                                    <div className="order-confirm__header">
                                        <img src="/static/images/paypal.png" alt="paypal logo" />
                                        <a href="#" className="order-confirm__link">What is PayPal?</a>
                                    </div>
                                    <p className="order-confirm__desc">
                                        Make a payment using PayPal.
                                        <br />
                                        You can make a payment using you bank/credit card if you don’t have a PayPal account.
                                    </p>
                                    <a href="#" className="order-confirm__button">PROCEED TO PAYPAL</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export async function getServerSideProps({params}) {
    const { data } = await axios.get(process.env.NEXT_PUBLIC_API_HOST + `/api/orders?filters[orderId][$eq]=${params.id}&populate[0]=coupons&populate[1]=Item&populate[2]=Item.shop_item`)
    console.log(data.data);
    return { props: { data: data.data[0] } }
}

export default Checkout;