import { authAPI } from "../../api/api";
import {getUserProfileThunkCreator, setUserOrdersActionCreator, setUserProfileActionCreator} from "./user-reducer";

const RESET_USER_DATA = 'auth/RESET_USER_DATA';
const SET_EDIT_LOGIN = 'auth/SET_EDIT_LOGIN';
const LOGIN_UNSUCCESS = 'auth/LOGIN_UNSUCCESS';

let initialState = {
    user: {
        phone_number: "",
        password: ""
    },
    loginError: ""
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case RESET_USER_DATA:
            return {
                ...state,
                user: {...state.user, phone_number: "", password: ""}
            };
        case SET_EDIT_LOGIN:
            return {
                ...state,
                user: {...state.user, [action.nameField]: action.value}
            }
        case LOGIN_UNSUCCESS:
            return {
                ...state,
                loginError: action.loginError
            }
        default:
            return state;
    }
}

export const loginThunkCreator = () => async (dispatch, getState) => {
    const { user } = getState().authPage;
    try {
        const response = await authAPI.login(user.phone_number, user.password);
        if(response && response.status === 200) {
            localStorage.setItem('user', JSON.stringify(response.data));
            dispatch(getUserProfileThunkCreator());
        }
    } catch (e) {
        dispatch(loginUnSuccessActionCreator());
    }
}
export const logoutThunkCreator = () => async (dispatch) => {
    localStorage.removeItem('user');
    dispatch(setUserProfileActionCreator({userProfile: {name: "", surname: "", phone_number: ""}}, false));
    dispatch(setUserOrdersActionCreator({userOrders: {}}));
    dispatch(resetUserProfileActionCreator());
}

export const editLoginActionCreator = (nameField, value) => ({type: SET_EDIT_LOGIN, nameField, value });
export const resetUserProfileActionCreator = () => ({type: RESET_USER_DATA});
export const loginUnSuccessActionCreator = (message = "Введен неверный логин или пароль") => ({type: LOGIN_UNSUCCESS, loginError: message});

export default authReducer;