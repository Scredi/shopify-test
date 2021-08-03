import { getProducts, getProduct } from '../api/shopify'
import Product from '../../components/Product'

export default function ProductPage({ product }) {
  const handleAddToCart = (id) => {
    // On recup l'id du cart crée à l'init de l'app depuis le context ou un store redux afin d'y ajouter son produit
    console.log(id)
  }

  return (
      <div>
        <Product
          description={product.description}
          price={product.variants[0].price}
          image={product.images[0]}
          id={product.id}
          addToCart={handleAddToCart}
        />
      </div>
  )
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.slug); // Fetch product
  //const infos = await client.shop.fetchInfo(); // Fetch shop Info if you think about SEO and title and ... to your page
  //const policies = await client.shop.fetchPolicies(); // fetch shop policy if you have any 
  return {
    props: {
      // infos: JSON.parse(JSON.stringify(infos)),
      // policies: JSON.parse(JSON.stringify(policies)),
      product
    }
  }
}

export async function getStaticPaths() {
    let paths = []
    const products = await getProducts()
    const createPath = item => ({ params: { slug: item.handle } })
    paths = products.map(createPath)
    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
}