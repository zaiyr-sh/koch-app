import React, {Component} from 'react';
import {connect} from "react-redux";

import {getCargoesThunkCreator} from "../../redux/reducers/cargo-reducer";
import TransportSection from "./TransportSection";
import {initializeAppThunkCreator} from "../../redux/reducers/app-reducer";
import Preloader from "../common/Preloader/Preloader";

class TransportSectionContainer extends Component {

    componentDidMount() {
        this.props.getCargoes();
        this.props.initializeAppThunk();
    }

    render() {
        if (!this.props.initializing) return <Preloader />
        return (
            <div>
                <TransportSection cargoes={this.props.cargoes} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initializing: state.app.initializing,
    cargoes: state.cargoPage.cargoes
})

const mapDispatchToProps = (dispatch) => {
    return {
        getCargoes: () => {
            dispatch(getCargoesThunkCreator())
        },
        initializeAppThunk: () => {
            dispatch(initializeAppThunkCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransportSectionContainer);