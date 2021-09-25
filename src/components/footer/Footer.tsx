import React from "react";
import "./Footer.scss";
import Title from "../typography/title/Title";
import Text from "../typography/text/Text";

const Footer = ()=>{
    return (
        <footer className="footer__wrapper">
            <div className="footer__wrapper-details">
            <div className="footer__wrapper-list">
                <Title className="footer__wrapper-title">Follow us</Title>
                <Text className="footer__wrapper-p">facebook</Text>
                <Text className="footer__wrapper-p">twitter</Text>
                <Text className="footer__wrapper-p">instagram</Text>
            </div>
            <div className="footer__wrapper-list">
                <Title className="footer__wrapper-title">what's in store</Title>
                <Text className="footer__wrapper-p">women's wear</Text>
                <Text className="footer__wrapper-p">men's wear</Text>
                <Text className="footer__wrapper-p">a-z buy</Text>
                <Text className="footer__wrapper-p">a-z buy</Text>
            </div>
            <div className="footer__wrapper-list">
                <Title className="footer__wrapper-title">questions</Title>
                <Text className="footer__wrapper-p">faq</Text>
                <Text className="footer__wrapper-p">facebook</Text>
                <Text className="footer__wrapper-p">facebook</Text>
            </div>
            <div className="footer__wrapper-list">
                <Title className="footer__wrapper-title">categories</Title>
                <Text className="footer__wrapper-p">women</Text>
                <Text className="footer__wrapper-p">men</Text>
                <Text className="footer__wrapper-p">facebook</Text>
            </div>

            </div>
            <div className="footer__wrapper-end">
                <p>copyright, {new Date().getFullYear()}</p>
            </div>

        </footer>
    )
}

export default Footer;
