import { createCart } from './api/shopify'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// Avec redux ou le Context, on pourra créer un cart à l'init de l'app, pour recuperer son id sur les autres pages sans faire un autre call à createCart.
// Ou partir du localStorage ?

// MyApp.getInitialProps = async () => {
//   const cart = await createCart();
//   return {
//     cart
//   }
// }

export default MyApp
