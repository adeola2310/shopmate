import React from "react";
import "./Header.scss";
import Title from "../typography/title/Title";


const Header = ()=>{
    return(
        <header className="header__wrapper">
            <div className="header__wrapper-details">
             <Title className="header__wrapper-logo">shopmate</Title>
                <form>
                    <input type="text" placeholder="search products..."/>
                </form>
                <p>Login or sIGNUP</p>
                 <p>cart</p>
            </div>

        </header>
    )
}
export default Header
