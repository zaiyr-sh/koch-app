import React, {Component} from 'react';
import Profile from "./Profile";
import {
    editUserProfileActionCreator, getUserOrdersThunkCreator,
    getUserProfileThunkCreator,
    updateUserProfileThunkCreator
} from "../../redux/reducers/user-reducer";
import {connect} from "react-redux";
import ClientProfile from "./UserProfile/ClientProfile/ClientProfile";

class ProfileContainer extends Component {

    componentDidMount() {
        this.props.getUserProfile()
        this.props.getUserOrders()
    }

    render() {
        return <Profile
            userType = {this.props.userProfile.user_type}
            userProfile={this.props.userProfile}
            userOrders={this.props.userOrders}
            editUserProfileHandler={this.props.editUserProfileHandler}
            updateUserProfileHandler={this.props.updateUserProfileHandler}
        />;
    }
}

const mapStateToProps = (state) => ({
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
        editUserProfileHandler: (nameField, value) => {
            dispatch(editUserProfileActionCreator(nameField, value))
        },
        updateUserProfileHandler: () => {
            dispatch(updateUserProfileThunkCreator())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);