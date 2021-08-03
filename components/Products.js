import React from 'react'
import ProductPreview from './ProductPreview'

export default function Products({ data }) {
    return (
        <>
            {   data && data.length > 0 ?
                data.map(product => (
                    <ProductPreview
                        key={product.id}
                        description={product.description}
                        images={product.images}
                        variants={product.variants}
                        id={product.id}
                    />
                )) : <div>Aucun produits</div>
            }
        </>
    )
}