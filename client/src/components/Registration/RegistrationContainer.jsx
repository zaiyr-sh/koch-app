import React, {Component} from 'react';
import {connect} from "react-redux";

import Registration from "./Registration";
import {editRegistrationFieldActionCreator, registrationThunkCreator} from "../../redux/reducers/registration-reducer";

class RegistrationContainer extends Component {

    render() {
        return < Registration
            user={this.props.user}
            isRegister={this.props.isRegister}
            editRegistrationFieldHandler={this.props.editRegistrationFieldHandler}
            registrationHandler={this.props.registrationHandler}
        />;
    }
}

const mapStateToProps = (state) => ({
    user: state.registrationPage.user,
    isRegister: state.registrationPage.isRegister
})

const mapDispatchToProps = (dispatch) => {
    return {
        editRegistrationFieldHandler: (nameField, value) => {
            dispatch(editRegistrationFieldActionCreator(nameField, value))
        },
        registrationHandler: () => {
            dispatch(registrationThunkCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);;