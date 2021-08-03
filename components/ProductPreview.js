import React from 'react'
import Image from 'next/image'

export default function ProductPreview({ description, images, variants }) {
    const imgSrc = images[0].src
    , price = variants[0].price

    return (
        <div>
            <div>
                <Image src={imgSrc} alt="" width={100} height={100} layout="responsive" />
            </div>
            <div>
                {`${description} ${price} €`}
            </div>
        </div>
    )
}