import { authAPI } from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET-USER-DATA';
const LOGIN_SUCCESS = 'auth/LOGIN-SUCCESS';
const LOGOUT_SUCCESS = 'auth/LOGOUT-SUCCESS';

let initialState = {
    isLoggedIn: false,
    user: {}
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case LOGIN_SUCCESS:
            return {
                isLoggedIn: true,
                user: action.user
            };
        case LOGOUT_SUCCESS:
            return {
                isLoggedIn: false,
                user: {}
            };
        default:
            return state;
    }
}

export const setAuthUserDataActionCreator = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {userId, email, login, isAuth} })
export const getAuthUserDataThunkCreator = () => async (dispatch) => {
    // let response = await authAPI.myUserData()
    // if (response.data.resultCode === 0) {
    //     let {id, email, login} = response.data.data; // destructuring
    //     dispatch(setAuthUserDataActionCreator(id, email, login, true));
    // }
}

export const loginThunkCreator = (phone_number, password) => async (dispatch) => {
    let response = await authAPI.login(phone_number, password);
    if(response && response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data));
        dispatch(loginSuccess(response.data))
    }
    if(!response) {
        let message = response.detail.length > 0 ? response.data.detail : "Some error"
        console.log(response)
        // dispatch(stopSubmit("login", {_error: message}));
    }
}

export const logoutThunkCreator = (phone_number, password) => async (dispatch) => {
    dispatch(logoutSuccess())
    localStorage.removeItem('user')
}

export const loginSuccess = (user) => { return { type: LOGIN_SUCCESS, user } }
export const logoutSuccess = (user) => { return { type: LOGOUT_SUCCESS } }

export default authReducer;