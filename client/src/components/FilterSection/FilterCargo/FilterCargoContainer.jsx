import React, {Component} from 'react';
import {connect} from "react-redux";

import FilterCargo from "./FilterCargo";

import {
    editCargoFilterActionCreator, editPlaceSelectionActionCreator, getCargoesThunkCreator,
    getCargoPlacesThunkCreator,
    getFilteredCargoesThunkCreator
} from "../../../redux/reducers/cargo-reducer";

class FilterCargoContainer extends Component {

    componentDidMount() {
        this.props.getCargoPlaces();
    }

    render() {
        return <FilterCargo
            cities={this.props.cities}
            regions={this.props.regions}
            filteredCargoes={this.props.filteredCargoes}
            editCargoFilterHandler={this.props.editCargoFilterHandler}
            getFilteredCargoes={this.props.getFilteredCargoes}
            editPlaceSelectionHandler={this.props.editPlaceSelectionHandler}
            getCargoes={this.props.getCargoes}
        />;
    }
}

const mapStateToProps = (state) => ({
    cities: state.cargoPage.cities,
    regions: state.cargoPage.regions,
    filteredCargoes: state.cargoPage.filteredCargoes
})

const mapDispatchToProps = (dispatch) => {
    return {
        getCargoes: () => {
            dispatch(getCargoesThunkCreator())
        },
        getFilteredCargoes: () => {
            dispatch(getFilteredCargoesThunkCreator())
        },
        editCargoFilterHandler: (nameField, value) => {
            dispatch(editCargoFilterActionCreator(nameField, value))
        },
        getCargoPlaces: () => {
            dispatch(getCargoPlacesThunkCreator())
        },
        editPlaceSelectionHandler: (nameField, value) => {
            dispatch(editPlaceSelectionActionCreator(nameField, value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterCargoContainer);