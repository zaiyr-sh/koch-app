import React, {Component} from 'react';
import Login from "./Login";
import {editLoginActionCreator, loginThunkCreator} from "../../redux/reducers/auth-reducer";
import {connect} from "react-redux";

class LoginContainer extends Component {
    render() {
        return <Login
            user={this.props.user}
            isLoggedIn={this.props.isLoggedIn}
            editLoginHandler={this.props.editLoginHandler}
            loginHandler={this.props.loginHandler}
        />;
    }
}

const mapStateToProps = (state) => ({
    user: state.authPage.user,
    isLoggedIn: state.authPage.isLoggedIn
})

const mapDispatchToProps = (dispatch) => {
    return {
        loginHandler: () => {
            dispatch(loginThunkCreator());
        },
        editLoginHandler: (nameField, value) => {
            dispatch(editLoginActionCreator(nameField, value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);