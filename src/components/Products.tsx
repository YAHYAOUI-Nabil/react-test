import React, { useState } from "react"
import products from "../../build/public/products.json"

const Products = ({ product, setProduct, setAmount, setMonth }) => {
    const handleClick0 = () => {
        setProduct(products[0])
        setAmount(Number(products[0].min_amount))
        setMonth(Number(products[0].min_tenure))
    }
    const handleClick1 = () => {
        setProduct(products[1])
        setAmount(Number(products[1].min_amount))
        setMonth(Number(products[1].min_tenure))
    }
    const handleClick2 = () => {
        setProduct(products[2])
        setAmount(Number(products[2].min_amount))
        setMonth(Number(products[2].min_tenure))
    }
    return (
        <div className="absolute top-[18px] left-[149px] w-262 h-86 flex">
            <div className="absolute left-0 top-0 w-86 h-86 cursor-pointer" onClick={handleClick1}>
                <img src={products[1].image} alt={products[1].name} />
            </div>
            <div
                className="absolute left-[86px] top-[9px] w-[74px] h-[69px] cursor-pointer"
                onClick={handleClick2}>
                <img src={products[2].image} alt={products[2].name} />
            </div>
            <div
                className="absolute left-[175px] top-[9px] w-[69px] h-[69px] cursor-pointer"
                onClick={handleClick0}>
                <img src={products[0].image} alt={products[0].name} />
            </div>
        </div>
    )
}

export default Products
