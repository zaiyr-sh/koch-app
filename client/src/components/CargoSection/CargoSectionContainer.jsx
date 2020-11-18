import React, {Component} from 'react';
import {connect} from "react-redux";

import {
    getCargoesThunkCreator,
    getNextCargoesThunkCreator,
    setOpenCardModalActionCreator
} from "../../redux/reducers/cargo-reducer";
import CargoSection from "./CargoSection";

class CargoSectionContainer extends Component {

    componentDidMount() {
        this.props.getCargoes();
    }

    render() {
        return (
            <div>
                <CargoSection
                    cargoes={this.props.cargoes}
                    getNextCargoes={this.props.getNextCargoes}
                    onOpenCardModal={this.props.setOpenCardModal}
                />
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
        },
        getNextCargoes(offset) {
            dispatch(getNextCargoesThunkCreator(offset))
        },
        setOpenCardModal(card) {
            dispatch(setOpenCardModalActionCreator(card))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CargoSectionContainer);