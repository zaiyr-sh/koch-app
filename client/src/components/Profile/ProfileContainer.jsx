import React, {Component} from 'react';
import {connect} from "react-redux";

import Profile from "./Profile";
import {
    editUserProfileActionCreator, getNextOrdersThunkCreator, getUserOrdersThunkCreator,
    getUserProfileThunkCreator,
    updateUserProfileThunkCreator
} from "../../redux/reducers/user-reducer";
import {setOpenCardModalActionCreator} from "../../redux/reducers/modal-reducer";
import UserNavbar from "../Navbar/UserNavbar/UserNavbar";
import {logoutThunkCreator} from "../../redux/reducers/auth-reducer";

class ProfileContainer extends Component {

    componentDidMount() {
        this.props.getUserOrders();
        this.props.getUserProfile();
    }

    render() {
        return <>
                <UserNavbar logoutThunk={this.props.logoutThunk} isLoggedIn={this.props.isLoggedIn}/>;
                <Profile
                    userProfile={this.props.userProfile}
                    userOrders={this.props.userOrders}
                    editUserProfileHandler={this.props.editUserProfileHandler}
                    updateUserProfileHandler={this.props.updateUserProfileHandler}
                    getNextOrders={this.props.getNextOrders}
                    onOpenCardModal={this.props.onOpenCardModal}
                />
            </>;
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.userPage.isLoggedIn,
    userProfile: state.userPage.userProfile,
    userOrders: state.userPage.userOrders
})

const mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: () => {
            dispatch(getUserProfileThunkCreator())
        },
        getUserOrders: () => {
            dispatch(getUserOrdersThunkCreator())
        },
        getNextOrders:(offset) => {
          dispatch(getNextOrdersThunkCreator(offset))
        },
        editUserProfileHandler: (nameField, value) => {
            dispatch(editUserProfileActionCreator(nameField, value))
        },
        updateUserProfileHandler: () => {
            dispatch(updateUserProfileThunkCreator())
        },
        onOpenCardModal: (userCard) => {
            dispatch(setOpenCardModalActionCreator(userCard))
        },
        logoutThunk: () => {
            dispatch(logoutThunkCreator());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);