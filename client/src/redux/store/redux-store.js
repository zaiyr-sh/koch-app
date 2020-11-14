import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

import cargoReducer from "../reducers/cargo-reducer";
import authReducer from "../reducers/auth-reducer";
import clientReducer from "../reducers/client-reducer";
import appReducer from "../reducers/app-reducer";
import registrationReducer from "../reducers/registration-reducer";

let reducers = combineReducers({
    app: appReducer,
    cargoPage: cargoReducer,
    authPage: authReducer,
    registrationPage: registrationReducer,
    clientPage: clientReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store

export default store;