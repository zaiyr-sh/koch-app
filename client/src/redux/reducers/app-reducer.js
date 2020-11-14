import {loginThunkCreator} from "./auth-reducer";
import {getUserProfileThunkCreator} from "./user-reducer";

const SET_INITIALIZING_SUCCESS = 'SET-INITIALIZING_SUCCESS';

let initialState = {
    initializing: false,
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZING_SUCCESS:
            return {
                ...state,
                initializing: true,
            };
        default:
            return state;
    }
}

export const setInitializingSuccess = () => ({ type: SET_INITIALIZING_SUCCESS})

export const initializeAppThunkCreator = () => (dispatch) => {
    let promise = dispatch(getUserProfileThunkCreator());

    // Promise.all([promise, somethingElse, ...]) - for several promises
    promise.then(() => {
        dispatch(setInitializingSuccess())
    });
}

export default appReducer;