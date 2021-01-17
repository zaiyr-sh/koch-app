import React, {Component} from 'react';
import {connect} from "react-redux";

import {
    getCargoesThunkCreator,
    getNextCargoesThunkCreator
} from "../../redux/reducers/cargo-reducer";
import CargoSection from "./CargoSection";
import {setOpenCardModalActionCreator} from "../../redux/reducers/modal-reducer";

class CargoSectionContainer extends Component {

    componentDidMount() {
        this.props.getCargoes();
    }

    render() {
        return this.props.display === "cargo" ? (
            <CargoSection
                cargoes={this.props.cargoes}
                getNextCargoes={this.props.getNextCargoes}
                onOpenCardModal={this.props.setOpenCardModal}
            />
        ) : <></>;
    }
}

const mapStateToProps = (state) => ({
    cargoes: state.cargoPage.cargoes,
    display: state.filterPage.display
})

const mapDispatchToProps = (dispatch) => {
    return {
        getCargoes: () => {
            dispatch(getCargoesThunkCreator());
        },
        getNextCargoes(offset) {
            dispatch(getNextCargoesThunkCreator(offset));
        },
        setOpenCardModal(card) {
            dispatch(setOpenCardModalActionCreator(card));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CargoSectionContainer);