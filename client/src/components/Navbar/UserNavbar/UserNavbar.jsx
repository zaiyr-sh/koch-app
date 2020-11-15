import React from 'react';
import {Link, NavLink} from "react-router-dom";

const UserNavbar = ({logoutThunk}) => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__left">
                        <div className="header__user-left">
                            <NavLink className="nav__link-user" activeClassName="nav__link-activeUser" to="/profile/my_orders"><i className="fa fa-truck"/>  Мои заказы</NavLink>
                        </div>
                        <div className="header__user-left">
                            <NavLink className="nav__link-user" activeClassName="nav__link-activeUser" to="/profile/my_profile"><i className="fa fa-id-badge"/>  Профиль</NavLink>
                        </div>
                    </div>
                    <div className="header__right">
                        <div className="header__user-right"><Link onClick={ e => { if (window.confirm('Вы уверены, что хотите выйти?')) logoutThunk()}} className="nav__link-signOut" to="/">Выйти</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserNavbar;