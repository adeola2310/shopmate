import React from "react";
import "./Title.scss";

type Title = {
    children: any;
    className?: string;
};

// @ts-ignore
const Title = ({children, className=""})=>{
    return(
        <h3 className={`title ${className}`}>{children}</h3>
    )
}

export default Title;
