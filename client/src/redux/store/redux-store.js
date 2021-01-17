import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

import cargoReducer from "../reducers/cargo-reducer";
import authReducer from "../reducers/auth-reducer";
import appReducer from "../reducers/app-reducer";
import registrationReducer from "../reducers/registration-reducer";
import userReducer from "../reducers/user-reducer";
import filterReducer from "../reducers/filter-reducer";
import transportationReducer from "../reducers/transportation-reducer";
import placementReducer from "../reducers/placement-reducer";
import modalReducer from "../reducers/modal-reducer";

let reducers = combineReducers({
    app: appReducer,
    cargoPage: cargoReducer,
    transportationPage: transportationReducer,
    authPage: authReducer,
    registrationPage: registrationReducer,
    userPage: userReducer,
    filterPage: filterReducer,
    placementPage: placementReducer,
    modalPage: modalReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;