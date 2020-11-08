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

class App extends React.Component{

    componentDidMount(){
        this.props.initializeAppThunk();
    }

    render() {

        if (!this.props.initializing) return <Preloader />

        return (
            <>
                <NavbarContainer />
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/profile" component={Profile}/>
                    <Route component={PrimaryContainer}/>
                </Switch>
            </>
        );
    }
}

const PrimaryContainer = () => (
    <>
        <FilterSection />
        <TransportSectionContainer />
        <Footer />
    </>
)

let mapStateToProps = (state) => ({
    initializing: state.app.initializing
});

let mapDispatchToProps = (dispatch) => {
    return {
        initializeAppThunk: () => {
            dispatch(initializeAppThunkCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
