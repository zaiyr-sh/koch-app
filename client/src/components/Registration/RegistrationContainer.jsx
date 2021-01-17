import React, {Component} from 'react';
import {connect} from "react-redux";

import Registration from "./Registration";
import {
    editRegistrationFieldActionCreator,
    registrationThunkCreator, resetRegistrationActionCreator
} from "../../redux/reducers/registration-reducer";

class RegistrationContainer extends Component {

    render() {
        return < Registration
            user_type={this.props.user_type}
            user={this.props.user}
            isRegister={this.props.isRegister}
            editRegistrationFieldHandler={this.props.editRegistrationFieldHandler}
            registrationHandler={this.props.registrationHandler}
            resetRegistration={this.props.resetRegistration}
            registrationError={this.props.registrationError}
        />;
    }
}

const mapStateToProps = (state) => ({
    user_type: state.registrationPage.user_type,
    user: state.registrationPage.user,
    isRegister: state.registrationPage.isRegister,
    registrationError: state.registrationPage.registrationError
})

const mapDispatchToProps = (dispatch) => {
    return {
        editRegistrationFieldHandler: (nameField, value) => {
            dispatch(editRegistrationFieldActionCreator(nameField, value));
        },
        registrationHandler: () => {
            dispatch(registrationThunkCreator());
        },
        resetRegistration: () => {
            dispatch(resetRegistrationActionCreator());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);