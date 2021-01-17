import React from 'react';
import {Route, Switch} from "react-router-dom";

import OrdersProfile from "./OrdersProfile/OrdersProfile";
import Footer from "../Footer/Footer";
import UserProfile from "./UserProfile/UserProfile";

const Profile = ({
                     userProfile,
                     userOrders,
                     editUserProfileHandler,
                     updateUserProfileHandler,
                     getNextOrders,
                     onOpenCardModal
                 }) => {
    return (
        <>
            <Switch>
                <Route path="/profile/my_orders" render={() =>
                    <OrdersProfile
                        getNextOrders={getNextOrders}
                        userOrders={userOrders}
                        onOpenCardModal={onOpenCardModal}
                    />
                }/>
                <Route path="/profile/my_profile" render={() => (
                    <>
                        <UserProfile
                            userProfile={userProfile}
                            editUserProfileHandler={editUserProfileHandler}
                            updateUserProfileHandler={updateUserProfileHandler}
                        />
                        <Footer/>
                    </>
                )}/>
            </Switch>
        </>
    );
};

export default Profile;