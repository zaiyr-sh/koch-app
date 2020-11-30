import React from 'react';
import { withAlert  } from "react-alert";

import "../Login/Login.css";
import Preregistration from "./Preregistration";
import UserRegistration from "./UserRegistration/UserRegistration";
import DriverRegistration from "./DriverRegistration/DriverRegistration";

class Registration extends React.Component {

    state = {
        isChose: false,
        nameError: "",
        surnameError: "",
        phoneNumberError: "",
        passwordError: ""
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.registrationError) {
            this.props.alert.error('Пользователь с таким номером уже зарегестрирован. Попробуйте заново!');
        }

        if(this.props.isRegister) {
            this.props.alert.success('Вы успешно зарегестрировались! Войдите в свой аккаунт.');
            this.props.resetRegistration();
        }
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
            passwordError = "Пароль должен быть от 8 символов длиной, содержать одну латинскую букву и число";
        }

        if (phoneNumberError || nameError || surnameError || passwordError) {
            this.setState({ phoneNumberError, nameError, surnameError, passwordError });
            return false;
        }
        return true;
    }

    render() {
        let {user, editRegistrationFieldHandler} = this.props;
        let {isChose, nameError, surnameError, phoneNumberError, passwordError} = this.state;

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

export default withAlert()(Registration);