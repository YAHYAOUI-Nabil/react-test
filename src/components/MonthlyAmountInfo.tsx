import React from "react"
import Detail from "./Detail"
import MonthlyAmount from "./MonthlyAmount"

const MonthlyAmountInfo = ({ totalAmount, monthlyInstallment, month, amount }) => {
    return (
        <div className="absolute left-[40px] top-[225px] w-[480px] h-[158px] rounded-lg box-border border border-solid border-[#E9EEF2]">
            <div className="absolute left-0 top-0 right-0 bottom-0 rounded-lg bg-white">
                <MonthlyAmount monthlyInstallment={monthlyInstallment} />
                <Detail totalAmount={totalAmount} month={month} amount={amount} />
            </div>
        </div>
    )
}

export default MonthlyAmountInfo
