import 'bootstrap/dist/css/bootstrap.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/main.sass'
import { AppWrapper } from '../context';

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp
