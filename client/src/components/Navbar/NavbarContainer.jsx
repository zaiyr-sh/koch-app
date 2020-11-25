import React, {Component} from 'react';
import {connect} from "react-redux";

import {logoutThunkCreator} from "../../redux/reducers/auth-reducer";
import Navbar from "./Navbar";
import {initializeAppThunkCreator} from "../../redux/reducers/app-reducer";

class NavbarContainer extends Component {

    componentDidMount(){
        this.props.initializeAppThunk();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.initializing !== prevProps.initializing) {
            this.props.initializeAppThunk();
        }
    }

    render() {
        return (
            <Navbar initializing={this.props.initializing}/>
        );
    }
}

const mapStateToProps = (state) => ({
    initializing: state.app.initializing
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