import React from 'react'
import Image from 'next/image'

export default function Product({ description, image, price, id }) {
    const imgSrc = image.src
    return (
        <div>
            <div>
                <Image src={imgSrc} alt="" width={100} height={100} />
            </div>
            <div>
                {`${description} ${price} €`}
            </div>
            <button>Ajouter au panier</button>
        </div>
    )
}