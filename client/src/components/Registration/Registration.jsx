import React from 'react';

import "../Login/Login.css";

const Registration = ({ registration, editRegistrationFieldHandler }) => {

    return (
        <section className="section-login">
            <div className="container">
                <div className="login">
                    <div className="login__form">
                        <h2 className="login__title">Регистрация в Onoi.kg</h2>
                        <p className="login__description">Введите ваше имя, фамилию и номер, на который
                            мы отправим код подтверждения</p>
                        <form className="registration__form">
                            <div className="registration__name">
                                <input
                                    placeholder="Имя"
                                    className="registration__field-name"
                                    type="text"
                                    name="name"
                                    onChange={(e) => editRegistrationFieldHandler(e.target.name, e.target.value)}
                                />
                            </div>
                            <div className="registration__surname">
                                <input
                                    placeholder="Фамилия"
                                    className="registration__field-surname"
                                    type="text"
                                    name="surname"
                                    onChange={(e) => editRegistrationFieldHandler(e.target.name, e.target.value)}
                                />
                            </div>
                            <div className="registration__phoneNumber">
                                <input
                                    placeholder="Номер телефона"
                                    className="registration__field-phoneNumber"
                                    type="text"
                                    name="phone_number"
                                    onChange={(e) => editRegistrationFieldHandler(e.target.name, e.target.value)}
                                />
                                {/*<NumberFormat className="login__field-phoneNumber" format="+996 (###) ###-###" allowEmptyFormatting mask="_"/>*/}
                            </div>
                            {/*<div className="registration__addNumber">*/}
                            {/*    <Link className="registration__button-addNumber" to="/reset" >Добавить номер</Link>*/}
                            {/*</div>*/}
                            <div className="registration__buttons">
                                <button className="registration__button-signup">Зарегистрироваться</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Registration;