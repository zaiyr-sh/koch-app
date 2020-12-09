import React, {Component} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import { withAlert  } from "react-alert";

import Profile from "./Profile";
import {
    editUserProfileActionCreator, getNextOrdersThunkCreator, getUserOrdersThunkCreator,
    getUserProfileThunkCreator, updateUserProfileSuccessActionCreator,
    updateUserProfileThunkCreator
} from "../../redux/reducers/user-reducer";
import {setOpenCardModalActionCreator} from "../../redux/reducers/modal-reducer";
import UserNavbar from "../Navbar/UserNavbar/UserNavbar";
import {logoutThunkCreator} from "../../redux/reducers/auth-reducer";
import {
    editRegistrationDriverFieldActionCreator,
    registrationDriverThunkCreator
} from "../../redux/reducers/registration-reducer";

class ProfileContainer extends Component {

    componentDidMount() {
        this.props.getUserOrders();
        this.props.getUserProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.isUpdated) {
            this.props.alert.success('Ваши данные успешно сохранены!');
            this.props.updateUserProfileSuccess(false);
        }
    }

    render() {
        // if(this.props.userProfile.user_type === "driver") {
        //     return <DriverRegistration
        //         driver={this.props.driver}
        //         editRegistrationDriverFieldHandler={this.props.editRegistrationDriverFieldHandler}
        //         registrationDriver={this.props.registrationDriver}
        //     />
        // }
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
    userOrders: state.userPage.userOrders,
    isUpdated: state.userPage.isUpdated,
    driver: state.registrationPage.driver
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
        },
        updateUserProfileSuccess: (isUpdated) => {
            dispatch(updateUserProfileSuccessActionCreator(isUpdated))
        },
        editRegistrationDriverFieldHandler: (nameField, value) => {
            dispatch(editRegistrationDriverFieldActionCreator(nameField, value))
        },
        registrationDriver: () => {
            dispatch(registrationDriverThunkCreator())
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAlert()
)(ProfileContainer);