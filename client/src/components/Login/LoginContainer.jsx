import React, {Component} from 'react';
import {connect} from "react-redux";

import Login from "./Login";
import {
    editLoginActionCreator,
    loginThunkCreator, loginUnSuccessActionCreator,
    resetUserProfileActionCreator
} from "../../redux/reducers/auth-reducer";

class LoginContainer extends Component {

    componentWillUnmount() {
        this.props.resetUserProfileHandler();
        this.props.loginUnSuccessHandler("")
    }

    render() {
        return <Login
            user={this.props.user}
            isLoggedIn={this.props.isLoggedIn}
            loginError={this.props.loginError}
            editLoginHandler={this.props.editLoginHandler}
            loginHandler={this.props.loginHandler}
            resetUserProfileHandler={this.props.resetUserProfileHandler}
            loginUnSuccessHandler={this.props.loginUnSuccessHandler}
        />;
    }
}

const mapStateToProps = (state) => ({
    user: state.authPage.user,
    isLoggedIn: state.userPage.isLoggedIn,
    loginError: state.authPage.loginError
})

const mapDispatchToProps = (dispatch) => {
    return {
        loginHandler: () => {
            dispatch(loginThunkCreator());
        },
        editLoginHandler: (nameField, value) => {
            dispatch(editLoginActionCreator(nameField, value));
        },
        resetUserProfileHandler: () => {
            dispatch(resetUserProfileActionCreator());
        },
        loginUnSuccessHandler: (message) => {
            dispatch(loginUnSuccessActionCreator(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);