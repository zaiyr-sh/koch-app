import React from 'react';
import {Link, Redirect} from "react-router-dom";

import "./Login.css";

const Login = ({ editLoginHandler, isLoggedIn, user, loginError, loginHandler }) => {

    if(isLoggedIn) {
        return <Redirect to="/"/>
    }

    const onSubmit = e => {
        e.preventDefault();
        loginHandler();
    }

    return (
        <section className="section__login">
            <div className="container">
                <div className="login">
                    <div className="login__form">
                        <h2 className="login__title">Войдите в свой аккаунт</h2>
                        <form className="login__form" onSubmit={onSubmit}>
                            <div className="login__phoneNumber">
                                <input
                                    placeholder="Номер телефона"
                                    className="login__field-phoneNumber"
                                    required
                                    title="Пожалуйста, заполните поле."
                                    type="text"
                                    name="phone_number"
                                    value={user.phone_number}
                                    onChange={(e) => editLoginHandler(e.target.name, e.target.value)}
                                />
                            </div>
                            <div className="login__password">
                                <input
                                    placeholder="Пароль"
                                    className="login__field-password"
                                    required
                                    type="password"
                                    name="password"
                                    value={user.password}
                                    onChange={(e) => editLoginHandler(e.target.name, e.target.value)}
                                />
                            </div>
                            <p className="error__description">
                                {loginError}
                            </p>
                            {/*<div className="login__resetPassword">*/}
                            {/*    <Link className="login__button-resetPassword" to="/reset" >Забыл пароль</Link>*/}
                            {/*</div>*/}
                            <div className="login__buttons">
                                <Link className="login__button-registration" to="/registration">Регистрация</Link>
                                <button className="login__button-signin">Войти</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;