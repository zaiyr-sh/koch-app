import React, {Component} from 'react';
import {connect} from "react-redux";

import FilterTransport from "./FilterTransport";
import {getPlacesThunkCreator} from "../../../redux/reducers/cargo-reducer";
import {
    editPlaceSelectionActionCreator,
    editTransportationFilterActionCreator,
    getFilteredTransportationsThunkCreator,
    getTransportationsThunkCreator,
    resetFilterTransportationActionCreator
} from "../../../redux/reducers/transportation-reducer";

class FilterTransportContainer extends Component {

    componentDidMount() {
        this.props.getPlaces();
    }

    render() {
        return <FilterTransport
            cities={this.props.cities}
            regions={this.props.regions}
            filteredTransportations={this.props.filteredTransportations}
            editPlaceSelectionHandler={this.props.editPlaceSelectionHandler}
            resetFilterTransportation={this.props.resetFilterTransportation}
            editTransportationFilterHandler={this.props.editTransportationFilterHandler}
            getTransportations={this.props.getTransportations}
            getFilteredTransportations={this.props.getFilteredTransportations}
        />;
    }
}

const mapStateToProps = (state) => ({
    cities: state.cargoPage.cities,
    regions: state.cargoPage.regions,
    filteredTransportations: state.transportationPage.filteredTransportations
})

const mapDispatchToProps = (dispatch) => {
    return {
        getTransportations: () => {
            dispatch(getTransportationsThunkCreator())
        },
        getFilteredTransportations: () => {
            dispatch(getFilteredTransportationsThunkCreator())
        },
        getPlaces: () => {
            dispatch(getPlacesThunkCreator())
        },
        editPlaceSelectionHandler: (nameField, value) => {
            dispatch(editPlaceSelectionActionCreator(nameField, value))
        },
        resetFilterTransportation: () => {
            dispatch(resetFilterTransportationActionCreator())
        },
        editTransportationFilterHandler: (nameField, value) => {
            dispatch(editTransportationFilterActionCreator(nameField, value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterTransportContainer);