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
                            <Link to="/" className="header__logo-link">ONOI</Link>
                        </div>
                        <div className="header__logo-location">
                            Кыргызстан
                        </div>
                    </div>

                    <div className="header__right">
                        <nav className="nav">
                            <Link className="nav__link-lang" to="/g">ru</Link>
                            <Link className="nav__link-signIn" to="/login">Войти</Link>
                            <a className="nav__link-placeAd" href="#"><i className="fa fa-plus"/>  Разместить</a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;