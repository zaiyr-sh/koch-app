import {getUserProfileThunkCreator} from "./user-reducer";

const SET_INITIALIZING_SUCCESS = 'app/SET-INITIALIZING_SUCCESS';

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

export const setInitializingSuccessActionCreator = () => ({ type: SET_INITIALIZING_SUCCESS});
export const initializeAppThunkCreator = () => (dispatch) => {
    let promise = dispatch(getUserProfileThunkCreator());
    promise.then(() => {
        dispatch(setInitializingSuccessActionCreator());
    });
}

export default appReducer;