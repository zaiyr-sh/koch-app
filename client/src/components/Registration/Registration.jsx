import React from 'react';
import {withAlert} from "react-alert";

import "../Login/Login.css";
import Preregistration from "./Preregistration";
import UserRegistration from "./UserRegistration/UserRegistration";
import {validatePassword, validatePersonName, validatePhoneNumber, verificationCode, validateNonEmptyLength} from "../../helpers/validation-helper";
import firebase from "../../firebase";

class Registration extends React.Component {

    state = {
        isChose: false,
        nameError: "",
        surnameError: "",
        phoneNumberError: "",
        passwordError: "",
        uidTokenError: ""
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.registrationError) {
            this.props.alert.error('Пользователь с таким номером уже зарегестрирован. Попробуйте заново!');
        }
        if (this.props.isRegister) {
            this.props.alert.success('Вы успешно зарегестрировались! Войдите в свой аккаунт.');
            this.props.resetRegistration();
            this.setState({nameError: "", surnameError: "", phoneNumberError: "", passwordError: ""});
        }
    }

    componentWillUnmount() {
        this.props.resetRegistration();
    }

    handleCloseRegistrationSection = () => {
        this.setState({isChose: false});
    }

    handleOpenRegistrationSection = (nameField, value) => {
        this.props.editRegistrationFieldHandler(nameField, value);
        this.setState({isChose: true});
    }

    onSubmit = e => {
        const isValid = this.validate();
        if (isValid) this.props.registrationHandler();
    }

    validate = () => {
        let nameError, surnameError, phoneNumberError, passwordError, uidTokenError;
        let {name, surname, phone_number, password, uid_token} = this.props.user;

        nameError = validatePersonName(name);
        surnameError = validatePersonName(surname);
        // phoneNumberError = validatePhoneNumber(phone_number);
        passwordError = validatePassword(password);
        uidTokenError = validateNonEmptyLength(uid_token);

        if (phoneNumberError || nameError || surnameError || passwordError || uidTokenError) {
            this.setState({phoneNumberError, nameError, surnameError, passwordError, uidTokenError});
            return false;
        }
        return true;
    }

    render() {
        let {user, editRegistrationFieldHandler} = this.props;
        let {isChose, nameError, surnameError, phoneNumberError, passwordError, uidTokenError} = this.state;

        return isChose ? (
            <UserRegistration
                user={user}
                editRegistrationFieldHandler={editRegistrationFieldHandler}
                // validate={this.validate}
                onSubmit={this.onSubmit}
                handleCloseRegistrationSection={this.handleCloseRegistrationSection}
                nameError={nameError}
                surnameError={surnameError}
                phoneNumberError={phoneNumberError}
                passwordError={passwordError}
                uidTokenError={uidTokenError}

            />
        ) : <Preregistration handleOpenRegistrationSection={this.handleOpenRegistrationSection}/>
    }
}

export default withAlert()(Registration);