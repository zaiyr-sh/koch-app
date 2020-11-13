import React from 'react';
import {Route, Switch} from "react-router-dom";

import './App.css';
import Footer from "./components/Footer/Footer";
import FilterSection from "./components/FilterSection/FilterSection";
import Login from "./components/Login/Login";
import TransportSectionContainer from "./components/TransportSection/TransportSectionContainer";
import Profile from "./components/Profile/Profile";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Error from "./components/common/Error/Error";
import RegistrationContainer from "./components/Registration/RegistrationContainer";

const App = () => {
    return (
        <>
            <NavbarContainer />
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route path="/registration" render={() => <RegistrationContainer />}/>
                <Route path="/profile" component={Profile}/>
                <Route exact path="/" component={PrimaryContainer}/>
                <Route path="*" component={Error}/>
            </Switch>
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
