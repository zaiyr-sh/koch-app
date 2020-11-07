import React from 'react';
import {Link} from "react-router-dom";
import NumberFormat from 'react-number-format';

import "./Login.css";

const Login = () => {
    return (
        <section className="section-login">
            <div className="container">
                <div className="login">
                    <div className="login__form">
                        <h2 className="login__title">Войдите в свой аккаунт</h2>
                        <div className="login__phoneNumber">
                            <NumberFormat className="login__field-phoneNumber" format="+996 (###) ###-###" allowEmptyFormatting mask="_"/>
                        </div>
                        <div className="login__password">
                            <input placeholder="Пароль" className="login__field-password" type="password"/>
                        </div>
                        <div className="login__resetPassword">
                            <Link className="login__button-resetPassword" to="/reset" >Забыл пароль</Link>
                        </div>
                        <div className="login__buttons">
                            <a className="login__button-registration" href="/registration">Регистрация</a>
                            <a className="login__button-signin" href="/account">Войти</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;