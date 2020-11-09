import React from 'react';
import {Route, Switch} from "react-router-dom";
import "./Profile.css";
import UserNavbar from "../Navbar/UserNavbar/UserNavbar";
import OrdersProfile from "./OrdersProfile/OrdersProfile";
import ClientProfileContainer from "./UserProfile/ClientProfile/ClientProfileContainer";
import DriverProfile from "./UserProfile/DriverProfile/DriverProfile";

const Profile = () => {
    return (
        <>
            <UserNavbar />
            <Switch>
                <Route path="/profile/my_orders" component={OrdersProfile}/>
                {/*<Route path="/profile/my_profile" component={ClientProfileContainer}/>*/}
                <Route path="/profile/my_profile" component={DriverProfile}/>
            </Switch>
        </>
    );
};

export default Profile;