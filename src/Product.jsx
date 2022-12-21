import React from 'react'
import ProductOrder from './ProductOrder'
import ProductJSON from "./ProductJSON";

const Product = (props) => {
    return (
        <>
            {/* <div className="col-md-4">
            <img src={props.img}/>
            <h4>{props.name}</h4>
            <p>{props.desc}</p>
            <h4>{props.price}</h4>
        </div> */}

            <div className="container">
                <h2 className="pb-2 pt-3 border-bottom">Social Media</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    {
                        ProductJSON.map((item) =>
                            <div className="col-md-4">
                                <ProductOrder

                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Product
