import React, {Component} from 'react';
import ClientProfile from "./ClientProfile";
import {connect} from "react-redux";
import {
    editUserProfileActionCreator,
    getUserProfileThunkCreator,
    updateUserProfileThunkCreator
} from "../../../../redux/reducers/user-reducer";

class ClientProfileContainer extends Component {

    componentDidMount() {
        this.props.getUserProfile()
    }

    render() {
        return (
            <ClientProfile
                userProfile={this.props.userProfile}
                editUserProfileHandler={this.props.editUserProfileHandler}
                updateUserProfileHandler={this.props.updateUserProfileHandler}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    userProfile: state.userPage.userProfile
})

const mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: () => {
            dispatch(getUserProfileThunkCreator())
        },
        editUserProfileHandler: (nameField, value) => {
            dispatch(editUserProfileActionCreator(nameField, value))
        },
        updateUserProfileHandler: () => {
            dispatch(updateUserProfileThunkCreator())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientProfileContainer);