import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
    console.log(isLoggedIn)

    // const isLogin = () => props.isLoggedIn ? <Link onClick={ e => { if (window.confirm('Вы уверены, что хотите выйти?')) props.logoutThunk()}} className="nav__link-signOut" to="/">Выйти</Link> : <Link className="nav__link-signIn" to="/login">Войти</Link>

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
                            <Link className="nav__link-signIn" to={isLoggedIn ? "/profile/my_orders" : "/login"}>Войти</Link>
                            <Link className="nav__link-placeAd" to={isLoggedIn ? "/profile/my_profile" : "/login"}><i className="fa fa-plus"/>  Разместить</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;