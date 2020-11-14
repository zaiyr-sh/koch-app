import React from 'react';
import {Route, Switch} from "react-router-dom";
import "./Profile.css";
import OrdersProfile from "./OrdersProfile/OrdersProfile";
import Footer from "../Footer/Footer";
import UserNavbarContainer from "../Navbar/UserNavbar/UserNavbarContainer";
import ClientProfile from "./UserProfile/ClientProfile/ClientProfile";
import DriverProfile from "./UserProfile/DriverProfile/DriverProfile";

const Profile = ({ userType, userProfile, editUserProfileHandler, updateUserProfileHandler }) => {

    const checkType = () => {
        switch (userType) {
            case "client":
                return (
                    <Route path="/profile/my_profile" component={() =>
                        <ClientProfile
                            userProfile={userProfile}
                            editUserProfileHandler={editUserProfileHandler}
                            updateUserProfileHandler={updateUserProfileHandler}
                        />
                    }/>
                )
            case "driver":
                return (
                    <Route path="/profile/my_profile" component={() =>
                        <DriverProfile
                            userProfile={userProfile}
                            editUserProfileHandler={editUserProfileHandler}
                            updateUserProfileHandler={updateUserProfileHandler}
                        />
                    }/>
                )
        }
    }

    return (
        <>
            <UserNavbarContainer />
            <Switch>
                <Route path="/profile/my_orders" component={OrdersProfile}/>
                {checkType()}
            </Switch>
            <Footer />
        </>
    );
};

export default Profile;