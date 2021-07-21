import React from "react"

type Button = {
    children: any;
}

// @ts-ignore
const Button = ({children})=>{
    return (
        <button>{children}</button>
    )
}

export default Button;
