import React from 'react';
import {connect} from "react-redux";
import {Route, Switch} from "react-router-dom";

import {initializeAppThunkCreator} from "./redux/reducers/app-reducer";
import Footer from "./components/Footer/Footer";
import CargoSectionContainer from "./components/CargoSection/CargoSectionContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Error from "./components/common/Error/Error";
import RegistrationContainer from "./components/Registration/RegistrationContainer";
import LoginContainer from "./components/Login/LoginContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import CardModalContainer from "./components/Modals/CardModalContainer";
import FilterSectionContainer from "./components/FilterSection/FilterSectionContainer";
import TransportSectionContainer from "./components/TransportationSection/TransportationSectionContainer";
import OrderPlacementContainer from "./components/Profile/OrderPlacement/OrderPlacementContainer";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        return (
            <>
                <NavbarContainer/>
                <Switch>
                    <Route path="/login" component={LoginContainer}/>
                    <Route path="/registration" component={RegistrationContainer}/>
                    <Route path="/placement" component={OrderPlacementContainer}/>
                    <Route path="/profile" component={ProfileContainer}/>
                    <Route exact path="/" component={PrimaryContainer}/>
                    <Route path="*" component={Error}/>
                </Switch>
                <CardModalContainer/>
            </>
        );
    }
}

const PrimaryContainer = () => (
    <>
        <FilterSectionContainer />
        <CargoSectionContainer />
        <TransportSectionContainer />
        <Footer />
    </>
)

const mapDispatchToProps = (dispatch) => {
    return {
        initializeApp: () => {
            dispatch(initializeAppThunkCreator())
        }
    }
}

export default connect(null, mapDispatchToProps)(App);