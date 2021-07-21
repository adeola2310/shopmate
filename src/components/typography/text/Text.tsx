import React from "react";
import "./Text.scss";

type Text = {
    children: any;
    className: ""
}

// @ts-ignore
const Text = ({children, className})=>{
    return(
        <p className={`text text-${className}`}>{children}</p>
    )
}
export default Text
