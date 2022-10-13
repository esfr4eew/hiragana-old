import 'bootstrap/dist/css/bootstrap.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/main.sass'
import { ShopItemsWrapper } from '../context/shopItemsContext';
import { CartContextWrapper } from "../context/cartContext"
import { TotalSumWrapper } from '../context/totalSum';

function MyApp({ Component, pageProps }) {

  return (
    <CartContextWrapper>
      <ShopItemsWrapper>
        <TotalSumWrapper>
          <Component {...pageProps} />
        </TotalSumWrapper>
      </ShopItemsWrapper>
    </CartContextWrapper>
  )
}

export default MyApp
