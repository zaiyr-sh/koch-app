import React from 'react';
import {Link, Redirect} from "react-router-dom";

import "../Login/Login.css";
import Preregistration from "./Preregistration";
import ClientRegistration from "./ClientRegistration/ClientRegistration";
import DriverRegistration from "./DriverRegistration/DriverRegistration";

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

    handleUserType = (user, editRegistrationFieldHandler) => {
        switch (user.user_type) {
            case "client":
                return (
                    <ClientRegistration
                        user={user}
                        editRegistrationFieldHandler={editRegistrationFieldHandler}
                        onSubmit={this.onSubmit}
                        handleCloseRegistrationSection={this.handleCloseRegistrationSection}
                    />
                )
            case "driver":
                return (
                    <DriverRegistration
                        user={user}
                        editRegistrationFieldHandler={editRegistrationFieldHandler}
                        onSubmit={this.onSubmit}
                        handleCloseRegistrationSection={this.handleCloseRegistrationSection}
                    />
                )
        }
    }

    render() {

        let {user, editRegistrationFieldHandler, isRegister } = this.props;

        if(isRegister) {
            if (window.confirm('Вы успешно зарегестрировались! Войдите в свой аккаунт.')) return <Redirect to="/login"/>;
        }

        return this.state.isChose ? (
            this.handleUserType(user, editRegistrationFieldHandler)
        ) : <Preregistration handleOpenRegistrationSection={this.handleOpenRegistrationSection}/>
    }
}

export default Registration;