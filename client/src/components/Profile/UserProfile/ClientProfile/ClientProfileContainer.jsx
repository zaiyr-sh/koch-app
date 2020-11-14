import React, {Component} from 'react';
import ClientProfile from "./ClientProfile";
import {connect} from "react-redux";
import {
    editClientProfileActionCreator,
    getClientProfileThunkCreator,
    updateClientProfileHandlerThunkCreator
} from "../../../../redux/reducers/client-reducer";

class ClientProfileContainer extends Component {

    componentDidMount() {
        this.props.getClientProfile()
    }

    render() {
        return (
            <ClientProfile
                clientProfile={this.props.clientProfile}
                editClientProfileHandler={this.props.editClientProfileHandler}
                updateClientProfileHandler={this.props.updateClientProfileHandler}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    clientProfile: state.clientPage.clientProfile
})

const mapDispatchToProps = (dispatch) => {
    return {
        getClientProfile: () => {
            dispatch(getClientProfileThunkCreator())
        },
        editClientProfileHandler: (nameField, value) => {
            dispatch(editClientProfileActionCreator(nameField, value))
        },
        updateClientProfileHandler: () => {
            dispatch(updateClientProfileHandlerThunkCreator())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientProfileContainer);