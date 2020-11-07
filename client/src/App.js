import React from 'react';
import {Route, Switch} from "react-router-dom";

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import TransportSection from "./components/TransportSection/TransportSection";
import Footer from "./components/Footer/Footer";
import FilterSection from "./components/FilterSection/FilterSection";
import Login from "./components/Login/Login";
import TransportSectionContainer from "./components/TransportSection/TransportSectionContainer";

const App = () => {
  return (
        <>
          <Navbar />
          <Switch>
            <Route path="/login" component={Login}/>
            <Route component={PrimaryContainer}/>
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
