import React from 'react';
import {Redirect} from "react-router-dom";

import "../Login/Login.css";
import Preregistration from "./Preregistration";
import UserRegistration from "./UserRegistration/UserRegistration";

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

        let {user, editRegistrationFieldHandler, isRegister } = this.props;

        if(isRegister) {
            if (window.confirm('Вы успешно зарегестрировались! Войдите в свой аккаунт.')) return <Redirect to="/login"/>;
        }

        return this.state.isChose ? (
            <UserRegistration
                user={user}
                editRegistrationFieldHandler={editRegistrationFieldHandler}
                onSubmit={this.onSubmit}
                handleCloseRegistrationSection={this.handleCloseRegistrationSection}
            />
        ) : <Preregistration handleOpenRegistrationSection={this.handleOpenRegistrationSection}/>
    }
}

export default Registration;