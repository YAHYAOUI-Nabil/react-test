import React from "react"

const MonthlyAmount = () => {
    return (
        <div className="absolute left-[32px] top-[24px] right-[32px] h-[38px]">
            <div className="absolute left-0 top-[7px] right-[192px] h-6 flex flex-col items-start p-0 gap-2.5">
                <p className="w-[224px] h-6 font-work not-italic font-normal text-xl leading-[120%] flex items-center text-[#1E2A32] flex-none order-none self-stretch flex-grow-0">
                    Monthly amount
                </p>
            </div>
            <div className="absolute left-[288px] top-0 right-0 h-[38px] flex flex-col items-start p-0 gap-2.5">
                <p className="w-[128px] h-[38px] font-rubik not-italic font-medium text-[32px] leading-[120%] flex text-right text-[#0079FF] flex-none order-none self-stretch flex-grow-0">
                    $521
                </p>
            </div>
        </div>
    )
}

export default MonthlyAmount
