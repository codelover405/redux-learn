import React from 'react'
import Product from "./Product";

const   ProductOrder = () => {
    return (
        <>
            <Product  
                img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/6142201/1.jpg?2933"
                name="Cyxus"
                desc="Non-Slip Fitness Leisure Running Sneakers"
                price="$29" />

            <Product  
                img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/81/6142201/1.jpg?2933"
                name="Campus"
                desc=" Fitness Leisure Running Sneakers"
                price="$99" />
            <Product />
            <Product  
                img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(black)/product/83/6142201/1.jpg?2933"
                name="Air"np
                desc="Slip Fitness Leisure Running Sneakers"
                price="$49" />
            <Product />
        </>
    )
}

export default ProductOrder
