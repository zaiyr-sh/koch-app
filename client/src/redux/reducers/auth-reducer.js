import { authAPI } from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET-USER-DATA';
const LOGIN_SUCCESS = 'auth/LOGIN-SUCCESS';
const LOGOUT_SUCCESS = 'auth/LOGOUT-SUCCESS';
const SET_EDIT_LOGIN = 'auth/SET_EDIT_LOGIN';

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
        case SET_EDIT_LOGIN:
            return {
                ...state,
                user: {...state.user, [action.nameField]: action.value}
            }
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

export const editLoginActionCreator = (nameField, value) => ({type: SET_EDIT_LOGIN, nameField, value })

export const loginThunkCreator = () => async (dispatch, getState) => {
    const { user } = getState().authPage;
    let response = await authAPI.login(user.phone_number, user.password);
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