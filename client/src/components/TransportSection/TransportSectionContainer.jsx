import React, {Component} from 'react';
import {connect} from "react-redux";

import {getCargoesThunkCreator} from "../../redux/reducers/cargo-reducer";
import TransportSection from "./TransportSection";
import {initializeAppThunkCreator} from "../../redux/reducers/app-reducer";
import Preloader from "../common/Preloader/Preloader";

class TransportSectionContainer extends Component {

    componentDidMount() {
        this.props.getCargoes();
    }

    render() {
        return (
            <div>
                <TransportSection cargoes={this.props.cargoes} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cargoes: state.cargoPage.cargoes
})

const mapDispatchToProps = (dispatch) => {
    return {
        getCargoes: () => {
            dispatch(getCargoesThunkCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransportSectionContainer);