import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Comments from "../../components/product/Comments";
import Item from "../../components/product/Item";
import Recommend from "../../components/product/Recommend";
import { useRouter } from 'next/router'
import NewReply from "../../components/product/NewReply";
import { ReplyContextWrapper } from "../../context/replyContext";
import { useRef } from "react";

function Product() {
    const router = useRouter()
    const { id } = router.query
    const commentArea = useRef(null);

    return (
        <ReplyContextWrapper>
            <Header />
            <main>
                <div className="good-page">
                    <Item id={id} />
                    <Comments id={id} commentArea={commentArea}/>
                    <NewReply id={id} commentArea={commentArea}/>
                    <Recommend />
                </div>
            </main>
            <Footer />
        </ReplyContextWrapper>
    );
}

export default Product;