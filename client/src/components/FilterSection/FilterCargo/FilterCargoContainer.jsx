import React, {Component} from 'react';
import {connect} from "react-redux";

import FilterCargo from "./FilterCargo";

import {editCargoFilterThunkCreator, getFilteredCargoesThunkCreator} from "../../../redux/reducers/cargo-reducer";

class FilterCargoContainer extends Component {
    render() {
        return <FilterCargo
            filteredCargoes={this.props.filteredCargoes}
            editCargoFilterHandler={this.props.editCargoFilterHandler}
            getFilteredCargoes={this.props.getFilteredCargoes}
        />;
    }
}

const mapStateToProps = (state) => ({
    filteredCargoes: state.cargoPage.filteredCargoes,
})

const mapDispatchToProps = (dispatch) => {
    return {
        getFilteredCargoes: () => {
            dispatch(getFilteredCargoesThunkCreator())
        },
        editCargoFilterHandler: (nameField, value) => {
            dispatch(editCargoFilterThunkCreator(nameField, value))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterCargoContainer);