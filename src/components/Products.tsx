import React, { useState } from "react"
import products from "../../build/public/products.json"

const Products = () => {
    const [product, setProduct] = useState(products[0])
    console.log(product)
    return (
        <div className="absolute top-[18px] left-[149px] w-262 h-86 flex">
            <div
                className="absolute left-0 top-0 w-86 h-86 cursor-pointer"
                onClick={() => setProduct(products[1])}>
                <img src={products[1].image} alt={products[0].name} />
            </div>
            <div
                className="absolute left-[86px] top-[9px] w-[74px] h-[69px] cursor-pointer"
                onClick={() => setProduct(products[2])}>
                <img src={products[2].image} alt={products[0].name} />
            </div>
            <div
                className="absolute left-[175px] top-[9px] w-[69px] h-[69px] cursor-pointer"
                onClick={() => setProduct(products[0])}>
                <img src={products[0].image} alt={products[0].name} />
            </div>
        </div>
    )
}

export default Products
