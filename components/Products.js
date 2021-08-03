import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProductLink = ({ handle, children }) => (
    <Link href={`/product/${handle}`}>
        <a>{children}</a>
    </Link>
)

export default function Products({ data }) {
    return (
        <>
            {   data && data.length > 0 ?
                data.map(product => (
                <div key={product.id}>
                    <ProductLink handle={product.handle}>
                        <div>
                            <Image src={product.images[0].src} alt="" width={100} height={100} layout="responsive" />
                        </div>
                        <div>
                            {`${product.description} ${product.variants[0].price} €`}
                        </div>
                    </ProductLink>
                </div>
                )) : <div>Aucun produits</div>
            }
        </>
    )
}