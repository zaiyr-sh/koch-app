import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";

const Navbar = (props) => {

    const isLogin = () => props.isLoggedIn ? <Link onClick={props.logoutThunk} className="nav__link-signOut" to="/">Выйти</Link> : <Link className="nav__link-signIn" to="/login">Войти</Link>

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
                            {isLogin()}
                            <a className="nav__link-placeAd" href="#"><i className="fa fa-plus"/>  Разместить</a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;