/* eslint-disable prettier/prettier */
import React, { useState } from "react"
import CTA from "./CTA"
import Inputs from "./Inputs"
import MonthlyAmountInfo from "./MonthlyAmountInfo"
import Products from "./Products"
import products from "../../build/public/products.json"

const Card = () => {
    const [product, setProduct] = useState(products[0])
    const [month, setMonth] = useState(Number(product.min_tenure))
    const [amount, setAmount] = useState(Number(product.min_amount))
    let totalAmount = amount * (1 + Number(product.interest) / 100)
    let monthlyInstallment = totalAmount / month

    return (
        <div className="absolute top-[176px] left-[440px] w-560 h-511">
            <div className="container absolute left-0 top-0 w-560 h-511 bg-card-bg rounded-lg shadow-5xl">
                <Products
                    product={product}
                    setProduct={setProduct}
                    setMonth={setMonth}
                    setAmount={setAmount}
                />
                <Inputs
                    month={month}
                    setMonth={setMonth}
                    amount={amount}
                    setAmount={setAmount}
                    minMonth={Number(product.min_tenure)}
                    maxMonth={Number(product.max_tenure)}
                    minAmount={Number(product.min_amount)}
                    maxAmount={Number(product.max_amount)}
                />
                <MonthlyAmountInfo
                    totalAmount={totalAmount}
                    monthlyInstallment={monthlyInstallment}
                    month={month}
                    amount={amount}
                />
                <CTA />
            </div>
        </div>
    )
}

export default Card
