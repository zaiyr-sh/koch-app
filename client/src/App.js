import React from 'react';
import {Route, Switch} from "react-router-dom";

import './App.css';
import Footer from "./components/Footer/Footer";
import FilterSection from "./components/FilterSection/FilterSection";
import Login from "./components/Login/Login";
import TransportSectionContainer from "./components/TransportSection/TransportSectionContainer";
import Profile from "./components/Profile/Profile";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import {connect} from "react-redux";
import {initializeAppThunkCreator} from "./redux/reducers/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import Error from "./components/common/Error/Error";

const App = () => {
    return (
        <>
            <NavbarContainer />
            <Switch>
                <Route exact path="/login" component={Login}/>
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
