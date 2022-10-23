/* eslint-disable prettier/prettier */
import Card from "@components/Card"
import Title from "@components/Title"
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

const App = () => {
    return (
        <div className="relative w-1464 h-1697 flex-col justify-center items-center">
            <Title />
            <Card />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
