import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

type Layout = {
    children: any
}

// @ts-ignore
const Layout = ({children})=>{
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>

    )
}

export default Layout;
