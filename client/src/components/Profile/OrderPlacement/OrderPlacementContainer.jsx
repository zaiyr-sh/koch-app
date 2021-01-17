import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

import CargoPlacement from "./CargoPlacement/CargoPlacement";
import {
    editCargoPlacementActionCreator,
    editTransportationPlacementActionCreator,
    placeCargoThunkCreator,
    placementSuccessActionCreator,
    placeTransportationThunkCreator,
    resetPlacementCargoActionCreator, resetPlacementTransportationActionCreator
} from "../../../redux/reducers/placement-reducer";
import {getPlacesThunkCreator} from "../../../redux/reducers/cargo-reducer";
import {getUserProfileThunkCreator} from "../../../redux/reducers/user-reducer";
import Preloader from "../../common/Preloader/Preloader";
import TransportationPlacement from "./TransportationPlacement/TransportationPlacement";
import DriverRegistration from "../../Registration/DriverRegistration/DriverRegistration";
import {
    editRegistrationDriverFieldActionCreator, editRegistrationDriverImageFieldActionCreator, getTypesThunkCreator,
    registrationDriverThunkCreator, resetRegistrationActionCreator
} from "../../../redux/reducers/registration-reducer";

class OrderPlacementContainer extends Component {

    componentDidMount() {
        this.props.getUserProfile();
        this.props.getPlaces();
        this.props.getTypes();
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
                        placementSuccess={this.props.placementSuccess}
                        resetPlacementCargoHandler={this.props.resetPlacementCargoHandler}
                    />
                )
            case "driver":
                if (this.props.registered) {
                    return <TransportationPlacement
                        cities={this.props.cities}
                        regions={this.props.regions}
                        editTransportationPlacementHandler={this.props.editTransportationPlacementHandler}
                        transportation={this.props.transportation}
                        placeTransportationHandler={this.props.placeTransportationHandler}
                        isPlaced={this.props.isPlaced}
                        placementSuccess={this.props.placementSuccess}
                        placementError={this.props.placementError}
                        resetPlacementTransportationHandler={this.props.resetPlacementTransportationHandler}
                    />
                } else {
                    return <DriverRegistration
                        driver={this.props.driver}
                        cargoTypes={this.props.cargoTypes}
                        editRegistrationDriverFieldHandler={this.props.editRegistrationDriverFieldHandler}
                        editRegistrationDriverImageFieldHandler={this.props.editRegistrationDriverImageFieldHandler}
                        registrationDriver={this.props.registrationDriver}
                        isDriverRegister={this.props.isDriverRegister}
                        resetRegistration={this.props.resetRegistration}
                    />
                }
            default:
                return <></>
        }
    }

    render() {
        if (!this.props.isLoggedIn) return <Redirect to="/"/>;
        if (!this.props.user_type) return <Preloader/>;
        return this.checkUserType();
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.userPage.isLoggedIn,
    user_type: state.userPage.userProfile.user_type,
    registered: state.userPage.userProfile.registered,
    cargo: state.placementPage.cargo,
    transportation: state.placementPage.transportation,
    cities: state.cargoPage.cities,
    regions: state.cargoPage.regions,
    isPlaced: state.placementPage.isPlaced,
    driver: state.registrationPage.driver,
    cargoTypes: state.registrationPage.cargoTypes,
    isDriverRegister: state.registrationPage.isDriverRegister,
    registrationDriverError: state.registrationPage.registrationDriverError,
    placementError: state.placementPage.placementError
})

const mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: () => {
            dispatch(getUserProfileThunkCreator());
        },
        getPlaces: () => {
            dispatch(getPlacesThunkCreator());
        },
        editCargoPlacementHandler: (nameField, value) => {
            dispatch(editCargoPlacementActionCreator(nameField, value));
        },
        placeCargoHandler: () => {
            dispatch(placeCargoThunkCreator());
        },
        editTransportationPlacementHandler: (nameField, value) => {
            dispatch(editTransportationPlacementActionCreator(nameField, value));
        },
        placeTransportationHandler: () => {
            dispatch(placeTransportationThunkCreator());
        },
        placementSuccess: (isPlaced) => {
            dispatch(placementSuccessActionCreator(isPlaced));
        },
        editRegistrationDriverFieldHandler: (nameField, value) => {
            dispatch(editRegistrationDriverFieldActionCreator(nameField, value));
        },
        editRegistrationDriverImageFieldHandler: (nameField, imgBase64, img) => {
            dispatch(editRegistrationDriverImageFieldActionCreator(nameField, imgBase64, img));
        },
        registrationDriver: () => {
            dispatch(registrationDriverThunkCreator());
        },
        getTypes: () => {
            dispatch(getTypesThunkCreator());
        },
        resetRegistration: () => {
            dispatch(resetRegistrationActionCreator());
        },
        resetPlacementCargoHandler: () => {
            dispatch(resetPlacementCargoActionCreator());
        },
        resetPlacementTransportationHandler: () => {
            dispatch(resetPlacementTransportationActionCreator());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderPlacementContainer);