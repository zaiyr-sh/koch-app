import React, {Component} from 'react';
import {connect} from "react-redux";

import FilterCargo from "./FilterCargo";
import {
    editCargoFilterActionCreator, editPlaceSelectionActionCreator, getCargoesThunkCreator,
    getFilteredCargoesThunkCreator, getPlacesThunkCreator, resetFilterCargoesActionCreator
} from "../../../redux/reducers/cargo-reducer";

class FilterCargoContainer extends Component {

    componentDidMount() {
        this.props.getPlaces();
    }

    render() {
        return <FilterCargo
            regions={this.props.regions}
            filteredCargoes={this.props.filteredCargoes}
            editCargoFilterHandler={this.props.editCargoFilterHandler}
            getFilteredCargoes={this.props.getFilteredCargoes}
            editPlaceSelectionHandler={this.props.editPlaceSelectionHandler}
            getCargoes={this.props.getCargoes}
            resetFilterCargoes={this.props.resetFilterCargoes}
        />;
    }
}

const mapStateToProps = (state) => ({
    regions: state.cargoPage.regions,
    filteredCargoes: state.cargoPage.filteredCargoes
})

const mapDispatchToProps = (dispatch) => {
    return {
        getCargoes: () => {
            dispatch(getCargoesThunkCreator());
        },
        getFilteredCargoes: () => {
            dispatch(getFilteredCargoesThunkCreator());
        },
        editCargoFilterHandler: (nameField, value) => {
            dispatch(editCargoFilterActionCreator(nameField, value));
        },
        getPlaces: () => {
            dispatch(getPlacesThunkCreator());
        },
        editPlaceSelectionHandler: (nameField, value) => {
            dispatch(editPlaceSelectionActionCreator(nameField, value));
        },
        resetFilterCargoes: () => {
            dispatch(resetFilterCargoesActionCreator());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterCargoContainer);