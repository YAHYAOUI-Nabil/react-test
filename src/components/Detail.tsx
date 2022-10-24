import React from "react"

const Detail = ({ month, amount, totalAmount }) => {
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]
    let m = new Date().getMonth() + month
    const year = new Date().getFullYear() + Math.floor(m / 12)
    const monthName = monthNames[m % 12]
    return (
        <div className="absolute left-0 bottom-0 right-0 h-[80px]">
            <div className="absolute left-0 bottom-0 right-0 top-0 bg-[#F4F8FA]">
                <div className="absolute inset-x-8 top-6 h-[32px] flex-col p-0 gap-[10px] items-start">
                    <p className="w-[416px] h-8 text-[#1C1E1F] font-work not-italic font-normal text-xs leading-4 flex-none self-stretch order-none grow-0">
                        You&lsquo;re planning {month} <strong>monthly deposits</strong> to reach
                        your
                        <strong> ${amount}</strong> goal by{" "}
                        <strong>
                            {monthName} {year}.
                        </strong>
                        The total amount loaned will be <strong>${totalAmount.toFixed(2)}</strong>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Detail
