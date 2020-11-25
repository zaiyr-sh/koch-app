import React from 'react';
import {Link} from "react-router-dom";

const UserRegistration = ({user, editRegistrationFieldHandler, onSubmit, handleCloseRegistrationSection}) => {
    return (
        <section className="section-login">
            <div className="container">
                <div className="login">
                    <div className="login__form">
                        <h2 className="login__title">Регистрация в Onoi.kg</h2>
                        <p className="login__description">Введите ваше имя, фамилию и номер, на который
                            мы отправим код подтверждения</p>
                        <form className="registration__form" onSubmit={onSubmit}>
                            <div className="registration__name">
                                <input
                                    placeholder="Имя"
                                    className="registration__field-name"
                                    required
                                    type="text"
                                    name="name"
                                    value={user.name}
                                    onChange={(e) => editRegistrationFieldHandler(e.target.name, e.target.value)}
                                />
                            </div>
                            <div className="registration__surname">
                                <input
                                    placeholder="Фамилия"
                                    className="registration__field-surname"
                                    required
                                    type="text"
                                    name="surname"
                                    value={user.surname}
                                    onChange={(e) => editRegistrationFieldHandler(e.target.name, e.target.value)}
                                />
                            </div>
                            <div className="registration__phoneNumber">
                                <input
                                    placeholder="Номер телефона"
                                    className="registration__field-phoneNumber"
                                    required
                                    type="text"
                                    name="phone_number"
                                    value={user.phone_number}
                                    onChange={(e) => editRegistrationFieldHandler(e.target.name, e.target.value)}
                                />
                            </div>
                            <div className="registration__password">
                                <input
                                    placeholder="Пароль"
                                    className="registration__field-password"
                                    required
                                    type="password"
                                    name="password"
                                    value={user.password}
                                    onChange={(e) => editRegistrationFieldHandler(e.target.name, e.target.value)}
                                />
                            </div>
                            {/*<div className="registration__addNumber">*/}
                            {/*    <Link className="registration__button-addNumber" to="/reset" >Добавить номер</Link>*/}
                            {/*</div>*/}
                            <div className="registration__buttons">
                                <Link onClick={handleCloseRegistrationSection} className="registration__button-signin" to="/login">Войти</Link>
                                <button className="registration__button-signup">Зарегистрироваться</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserRegistration;