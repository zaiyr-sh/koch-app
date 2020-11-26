import { authAPI } from "../../api/api";

const SET_USER_DATA = 'auth/SET-USER-DATA';
const LOGIN_SUCCESS = 'auth/LOGIN-SUCCESS';
const LOGIN_UNSUCCESS = 'auth/LOGIN_UNSUCCESS';
const LOGOUT_SUCCESS = 'auth/LOGOUT-SUCCESS';
const SET_EDIT_LOGIN = 'auth/SET_EDIT_LOGIN';

let initialState = {
    isLoggedIn: false,
    user: {
        phone_number: "",
        password: ""
    }
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
        case LOGIN_UNSUCCESS:
            return {
                isLoggedIn: false,
                user: {}
            }
        case LOGOUT_SUCCESS:
            return {
                isLoggedIn: false,
                user: {}
            };
        default:
            return state;
    }
}

export const editLoginActionCreator = (nameField, value) => ({type: SET_EDIT_LOGIN, nameField, value })

export const loginThunkCreator = () => async (dispatch, getState) => {
    const { user } = getState().authPage;
    try {
        const response = await authAPI.login(user.phone_number, user.password);
        if(response && response.status === 200) {
            localStorage.setItem('user', JSON.stringify(response.data));
            dispatch(loginSuccess(response.data));
        }
    } catch (e) {
        dispatch(loginUnsuccess());
        alert("Введены неправильные данные!");
    }
    
}

export const logoutThunkCreator = () => async (dispatch) => {
    dispatch(logoutSuccess());
    localStorage.removeItem('user');
}

export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, user });
export const loginUnsuccess = () => ({ type: LOGIN_UNSUCCESS });
export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });

export default authReducer;