import React, {Component} from 'react';
import {connect} from "react-redux";

import {logoutThunkCreator} from "../../redux/reducers/auth-reducer";
import Navbar from "./Navbar";
import {initializeAppThunkCreator} from "../../redux/reducers/app-reducer";

class NavbarContainer extends Component {

    render() {
        return (
            <Navbar isLoggedIn={this.props.isLoggedIn}/>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.userPage.isLoggedIn
})

const mapDispatchToProps = (dispatch) => {
    return {
        logoutThunk: () => {
            dispatch(logoutThunkCreator());
        },
        initializeAppThunk: () => {
            dispatch(initializeAppThunkCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);