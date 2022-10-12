import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/shipping/Banner";
import Thanks from "../components/shipping/Thanks"
import axios from "axios";

function Shipping({ data }) {
    const banner = { title: data.attributes.shippingTitle, description: data.attributes.description, src: data.attributes.imageRight.data.attributes.url }
    const thanks = { href: data.attributes.contactLink, src: data.attributes.imageDown.data.attributes.url }
    return (
        <>
            <Header />
            <main>
                <Banner banner={banner} />
                <Thanks thanks={thanks} />
            </main>
            <Footer />
        </>
    );
}

export async function getServerSideProps() {
    const { data } = await axios.get(process.env.NEXT_PUBLIC_API_HOST + '/api/shipping-page?populate=*')

    return { props: { data: data.data } }
}

export default Shipping;