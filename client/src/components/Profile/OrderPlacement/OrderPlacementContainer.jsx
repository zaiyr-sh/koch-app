import React, {Component} from 'react';
import {connect} from "react-redux";

import CargoPlacement from "./CargoPlacement/CargoPlacement";
import {
    editCargoPlacementActionCreator,
    editTransportationPlacementActionCreator,
    placeCargoThunkCreator, placeTransportationThunkCreator
} from "../../../redux/reducers/placement-reducer";
import {getPlacesThunkCreator} from "../../../redux/reducers/cargo-reducer";
import {getUserProfileThunkCreator} from "../../../redux/reducers/user-reducer";
import Preloader from "../../common/Preloader/Preloader";
import TransportationPlacement from "./TransportationPlacement/TransportationPlacement";
import {Redirect} from "react-router-dom";

class OrderPlacementContainer extends Component {

    componentDidMount() {
        this.props.getUserProfile();
        this.props.getPlaces();
    }

    checkUserType = () => {
        switch (this.props.user_type) {
            case "client":
                return (
                    <CargoPlacement
                        cities={this.props.cities}
                        regions={this.props.regions}
                        editCargoPlacementHandler={this.props.editCargoPlacementHandler}
                        cargo={this.props.cargo}
                        placeCargoHandler={this.props.placeCargoHandler}
                        isPlaced={this.props.isPlaced}
                        placementSuccessActionCreator={this.props.placementSuccessActionCreator}
                    />
                )
            case "driver":
                return (
                    <TransportationPlacement
                        cities={this.props.cities}
                        regions={this.props.regions}
                        editTransportationPlacementHandler={this.props.editTransportationPlacementHandler}
                        transportation={this.props.transportation}
                        placeTransportationHandler={this.props.placeTransportationHandler}
                        isPlaced={this.props.isPlaced}
                        placementSuccessActionCreator={this.props.placementSuccessActionCreator}
                    />
                )
            default:
                return <></>
        }
    }

    render() {
        if(!this.props.isLoggedIn) return <Redirect to="/"/>;
        if(!this.props.user_type) return <Preloader/>;
        return this.checkUserType();
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.userPage.isLoggedIn,
    user_type: state.userPage.userProfile.user_type,
    cargo: state.placementPage.cargo,
    transportation: state.placementPage.transportation,
    cities: state.cargoPage.cities,
    regions: state.cargoPage.regions,
    isPlaced: state.placementPage.isPlaced
})

const mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: () => {
            dispatch(getUserProfileThunkCreator())
        },
        getPlaces: () => {
            dispatch(getPlacesThunkCreator())
        },
        editCargoPlacementHandler: (nameField, value) => {
            dispatch(editCargoPlacementActionCreator(nameField, value))
        },
        placeCargoHandler: () => {
            dispatch(placeCargoThunkCreator())
        },
        editTransportationPlacementHandler: (nameField, value) => {
            dispatch(editTransportationPlacementActionCreator(nameField, value))
        },
        placeTransportationHandler: () => {
            dispatch(placeTransportationThunkCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderPlacementContainer);