import React, {Component} from 'react';
import {connect} from "react-redux";

import UserNavbar from "./UserNavbar";
import {logoutThunkCreator} from "../../../redux/reducers/auth-reducer";

class UserNavbarContainer extends Component {
    render() {
        return <UserNavbar logoutThunk={this.props.logoutThunk}/>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutThunk: () => {
            dispatch(logoutThunkCreator());
        }
    }
}

export default connect(null, mapDispatchToProps)(UserNavbarContainer);