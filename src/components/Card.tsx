/* eslint-disable prettier/prettier */
import React from "react"
import CTA from "./CTA"
import MonthlyAmountInfo from "./MonthlyAmountInfo"
import Products from "./Products"

const Card = () => {
    return (
        <div className="absolute top-[176px] left-[440px] w-560 h-511">
            <div className="container absolute left-0 top-0 w-560 h-511 bg-card-bg rounded-lg shadow-5xl">
                <Products />
                <MonthlyAmountInfo />
            </div>
            <CTA />
        </div>
    )
}

export default Card
