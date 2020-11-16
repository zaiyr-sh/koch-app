import React from 'react';
import {Route, Switch} from "react-router-dom";

import './App.css';
import Footer from "./components/Footer/Footer";
import FilterSection from "./components/FilterSection/FilterSection";
import TransportSectionContainer from "./components/TransportSection/TransportSectionContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Error from "./components/common/Error/Error";
import RegistrationContainer from "./components/Registration/RegistrationContainer";
import LoginContainer from "./components/Login/LoginContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import CardModalContainer from "./components/Modals/CardModalContainer";

const App = () => {
    return (
        <>
            <NavbarContainer />
            <Switch>
                <Route exact path="/login" component={LoginContainer}/>
                <Route path="/registration" render={() => <RegistrationContainer />}/>
                <Route path="/profile" component={ProfileContainer}/>
                <Route exact path="/" component={PrimaryContainer}/>
                <Route path="*" component={Error}/>
            </Switch>
            <CardModalContainer />
        </>
    );
}

const PrimaryContainer = () => (
    <>
        <FilterSection />
        <TransportSectionContainer />
        <Footer />
    </>
)


export default App;
