import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__left">
                        <div className="header__logo">
                            ONOI
                        </div>
                        <div className="header__logo-location">
                            Кыргызстан
                        </div>
                    </div>

                    <div className="header__right">
                        <nav className="nav">
                            <a className="nav__link-lang" href="#">ru</a>
                            <a className="nav__link-signIn" href="#">Войти</a>
                            <a className="nav__link-placeAd" href="#"><i className="fa fa-plus"/>  Разместить</a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;