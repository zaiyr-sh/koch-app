import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

import cargoReducer from "../reducers/cargo-reducer";

let reducers = combineReducers({
    cargoPage: cargoReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;