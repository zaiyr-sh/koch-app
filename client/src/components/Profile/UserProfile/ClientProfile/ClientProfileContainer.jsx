import React, {Component} from 'react';
import ClientProfile from "./ClientProfile";
import {connect} from "react-redux";
import {getClientProfileThunkCreator} from "../../../../redux/reducers/client-reducer";

class ClientProfileContainer extends Component {

    componentDidMount() {
        this.props.getClientProfile()
    }

    render() {
        return (
            <ClientProfile clientProfile={this.props.clientProfile}/>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientProfileContainer);