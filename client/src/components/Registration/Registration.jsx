import React from 'react';
import {Redirect} from "react-router-dom";

import "../Login/Login.css";
import Preregistration from "./Preregistration";
import UserRegistration from "./UserRegistration/UserRegistration";

class Registration extends React.Component {

    state = {
        isChose: false,
        nameError: "",
        surnameError: "",
        phoneNumberError: "",
        passwordError: ""
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
        const isValid = this.validate();
        if (isValid) {
            this.props.registrationHandler();
            this.setState({nameError: "", surnameError: "", phoneNumberError: "", passwordError: ""});
        }
    }

    validate = () => {
        let nameError = "";
        let surnameError = "";
        let phoneNumberError = "";
        let passwordError = "";
        let {name, surname, phone_number, password } = this.props.user;

        if (/\d/.test(name) || (name.length <= 1)) {
            nameError = "Поле должно быть от 2 и выше символов длиной и не содержать чисел";
        }
        if (/\d/.test(surname) || (surname.length <= 1)) {
            surnameError = "Поле должно быть от 2 и выше символов длиной и не содержать чисел";
        }
        if (/[a-zA-Z]/g.test(phone_number) || (phone_number.length !== 10)) {
            phoneNumberError = "Неправильно введенный формат номера телефона";
        }
        if (!(/[a-zA-Z]/g.test(password) && /\d/.test(password)) || (password.length <= 8)) {
            passwordError = "Пароль должен быть от 8 символов длиной, и содержать один символ, и число";
        }

        if (phoneNumberError || nameError || surnameError || passwordError) {
            this.setState({ phoneNumberError, nameError, surnameError, passwordError });
            return false;
        }
        return true;
    }

    render() {

        let {user, editRegistrationFieldHandler, isRegister } = this.props;

        let {isChose, nameError, surnameError, phoneNumberError, passwordError} = this.state;

        if(isRegister) {
            if (window.confirm('Вы успешно зарегестрировались! Войдите в свой аккаунт.')) return <Redirect to="/login"/>;
        }

        return isChose ? (
            <UserRegistration
                user={user}
                editRegistrationFieldHandler={editRegistrationFieldHandler}
                onSubmit={this.onSubmit}
                handleCloseRegistrationSection={this.handleCloseRegistrationSection}
                nameError={nameError}
                surnameError={surnameError}
                phoneNumberError={phoneNumberError}
                passwordError={passwordError}
            />
        ) : <Preregistration handleOpenRegistrationSection={this.handleOpenRegistrationSection}/>
    }
}

export default Registration;