import React from 'react';
import {Link, Redirect} from "react-router-dom";

import "../Login/Login.css";
import Preregistration from "./Preregistration";

class Registration extends React.Component {

    state = {
        isChose: false
    }

    handleCloseRegistrationSection = () => {
        this.setState({isChose: false});
    }

    handleOpenRegistrationSection = (nameField, value) => {
        this.props.editRegistrationFieldHandler(nameField, value);
        this.setState({isChose: true});
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.registrationHandler()
    }

    render() {

        let {user, editRegistrationFieldHandler, isRegister} = this.props;

        if(isRegister) {
            return <Redirect to="/login"/>
        }

        return this.state.isChose ? (
            <section className="section-login">
                <div className="container">
                    <div className="login">
                        <div className="login__form">
                            <h2 className="login__title">Регистрация в Onoi.kg</h2>
                            <p className="login__description">Введите ваше имя, фамилию и номер, на который
                                мы отправим код подтверждения</p>
                            <form className="registration__form" onSubmit={this.onSubmit}>
                                <div className="registration__name">
                                    <input
                                        placeholder="Имя"
                                        className="registration__field-name"
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
                                        type="text"
                                        name="phone_number"
                                        value={user.phone_number}
                                        onChange={(e) => editRegistrationFieldHandler(e.target.name, e.target.value)}
                                    />
                                    {/*<NumberFormat className="login__field-phoneNumber" format="+996 (###) ###-###" allowEmptyFormatting mask="_"/>*/}
                                </div>
                                <div className="registration__password">
                                    <input
                                        placeholder="Пароль"
                                        className="registration__field-password"
                                        type="password"
                                        name="password"
                                        value={user.password}
                                        onChange={(e) => editRegistrationFieldHandler(e.target.name, e.target.value)}
                                    />
                                    {/*<NumberFormat className="login__field-phoneNumber" format="+996 (###) ###-###" allowEmptyFormatting mask="_"/>*/}
                                </div>
                                {/*<div className="registration__addNumber">*/}
                                {/*    <Link className="registration__button-addNumber" to="/reset" >Добавить номер</Link>*/}
                                {/*</div>*/}
                                <div className="registration__buttons">
                                    <Link onClick={this.handleCloseRegistrationSection} className="registration__button-signin" to="/login">Войти</Link>
                                    <button className="registration__button-signup">Зарегистрироваться</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        ) : <Preregistration handleOpenRegistrationSection={this.handleOpenRegistrationSection}/>
    }
}

export default Registration;