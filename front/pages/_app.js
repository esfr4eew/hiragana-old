import 'bootstrap/dist/css/bootstrap.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/main.sass'
import { ShopItemsWrapper } from '../context/shopItemsContext';

function MyApp({ Component, pageProps }) {

  return (
      <ShopItemsWrapper>
        <Component {...pageProps} />
      </ShopItemsWrapper>
  )
}

export default MyApp
