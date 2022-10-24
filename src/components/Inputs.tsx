import React from "react"
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md"

const Inputs = ({
    month,
    setMonth,
    amount,
    setAmount,
    minMonth,
    maxMonth,
    minAmount,
    maxAmount,
}) => {
    const handleChangeMonth = (e) => {
        setMonth(e.target.value)
    }
    const handleChangeAmount = (e) => {
        setAmount(e.target.value)
    }
    const handleLeftClick = () => {
        if (month > minMonth) {
            setMonth(month - 1)
        }
    }
    const handleRightClick = () => {
        if (month < maxMonth) {
            setMonth(month + 1)
        }
    }

    return (
        <div className="absolute left-10 top-[120px] w-[480px] h-[81px]">
            <div className="absolute left-0 top-0 w-[272px] h-[81px]">
                <div className="absolute left-0 top-0 w-[91px] h-[21px] flex flex-row items-center p-0 gap-1">
                    <div className="w-[91px] h-[21px] flex flex-col p-0 gap-2.5 items-start flex-none order-none grow-0">
                        <p className="w-[91px] h-[21px] flex-none order-none grow-0 self-start font-work not-italic text-sm leading-[150%] font-normal text-[#1E2A32]">
                            Loan amount
                        </p>
                    </div>
                </div>
                <div className="absolute left-0 top-6 right-0 bottom-0">
                    <div className="absolute left-0 top-0 right-0 bottom-0 h-[56px] rounded border border-solid border-[#E9EEF2] box-border">
                        <div className="absolute left-3 top-[calc(50%-24px/2)] w-6 h-6 flex flex-row items-center p-0">
                            <p className=" w-6 h-6 flex-none order-none flex-grow-0">$</p>
                        </div>
                        <div className="absolute left-11 top-[calc(50%-29px/2+0.5px)] w-[264px] h-[29px] flex flex-col items-start p-0 gap-2.5">
                            <input
                                type="number"
                                value={amount}
                                min={minAmount}
                                max={maxAmount}
                                onChange={handleChangeAmount}
                                className="w-[200px] h-[29px] flex-none order-none flex-grow-0 self-stretch text-[#4D6475] font-rubik not-italic text-2xl leading-[120%] font-medium"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute left-[288px] top-0 w-[192px] h-[81px]">
                <div className="absolute left-0 top-0 w-[128px] h-[21px] flex flex-row items-center p-0 gap-1">
                    <div className="w-[128px] h-[21px] flex flex-col p-0 gap-2.5 items-start flex-none order-none flex-grow-0">
                        <p className="w-[128px] h-[21px] flex-none order-none flex-grow-0 self-start font-work not-italic text-sm leading-[150%] font-normal text-[#1E2A32]">
                            Number of Months
                        </p>
                    </div>
                </div>
                <div className="absolute left-0 top-6 right-0 bottom-0">
                    <div className="absolute left-0 top-0 right-0 bottom-0 h-[56px] rounded border border-solid border-[#E9EEF2] box-border">
                        <div className="absolute left-0 top-0 bottom-0 w-12">
                            <div className="absolute left-[25%] top-[28.57%] right-[25%] bottom-[28.57%] flex flex-row items-center p-0">
                                <button
                                    className="absolute left-[33.33%] top-[calc(50%-24px/2)] right-[33.33%] bottom-[20.83%] w-6 h-6 flex-none order-none flex-grow-0 text-[#708797]"
                                    onClick={handleLeftClick}>
                                    <MdArrowBackIosNew />
                                </button>
                            </div>
                        </div>

                        <div className="absolute left-[58px] right-[58px] top-[calc(50%-24px/2)] h-6 flex flex-col items-start p-0 gap-2.5">
                            <input
                                type="number"
                                max={maxMonth}
                                min={minMonth}
                                value={month}
                                onChange={handleChangeMonth}
                                className="w-[76px] h-6 flex-none order-none flex-grow-0 self-stretch text-[#708797] font-work not-italic text-base leading-[150%] font-normal text-center"
                            />
                        </div>

                        <div className="absolute right-0 top-0 bottom-0 w-12">
                            <div className="absolute left-[25%] top-[28.57%] right-[25%] bottom-[28.57%] flex flex-row items-center p-0">
                                <button
                                    className="absolute left-[33.33%] top-[calc(50%-24px/2)] right-[33.33%] bottom-[20.83%] w-6 h-6 flex-none order-none flex-grow-0 text-[#708797]"
                                    onClick={handleRightClick}>
                                    <MdArrowForwardIos />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inputs
