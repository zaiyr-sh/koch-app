import React, {Component} from 'react';
import {connect} from "react-redux";

import CargoPlacement from "./CargoPlacement/CargoPlacement";
import {editCargoPlacementActionCreator} from "../../../redux/reducers/placement-reducer";
import {getPlacesThunkCreator} from "../../../redux/reducers/cargo-reducer";
import {getUserProfileThunkCreator} from "../../../redux/reducers/user-reducer";
import Preloader from "../../common/Preloader/Preloader";

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
                    />
                )
            case "driver":
                return (
                    <h1>DRIVER</h1>
                )
            default:
                return <></>
        }
    }

    render() {
        if(!this.props.user_type) return <Preloader/>;
        return this.checkUserType();
    }
}

const mapStateToProps = (state) => ({
    user_type: state.userPage.userProfile.user_type,
    cargo: state.placementPage.cargo,
    cities: state.cargoPage.cities,
    regions: state.cargoPage.regions,
})

const mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: () => {
            dispatch(getUserProfileThunkCreator())
        },
        editCargoPlacementHandler: (nameField, value) => {
            dispatch(editCargoPlacementActionCreator(nameField, value))
        },
        getPlaces: () => {
            dispatch(getPlacesThunkCreator())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderPlacementContainer);