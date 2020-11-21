import {authAPI} from "../../api/api";

const SET_USER = 'client/SET_USER';
const SET_EDIT_USER = 'client/SET_EDIT_USER';
const SET_USER_ORDERS = 'client/SET_USER_ORDERS';

let initialState = {
    userProfile: {
        name: "",
        surname: "",
        phone_number: ""
    },
    userOrders: [],
    isLoggedIn: false,
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                userProfile: action.userProfile,
                isLoggedIn: action.isLoggedIn
            }
        case SET_USER_ORDERS:
            return {
                ...state,
                userOrders: action.userOrders
            }
        case SET_EDIT_USER:
            return {
                ...state,
                userProfile: {...state.userProfile, [action.nameField]: action.value}
            }
        default:
            return state;

    }
}

export const getUserOrdersThunkCreator = () => async (dispatch) => {
    const response = await authAPI.getUserOrders();
    dispatch(setUserOrdersActionCreator(response.data))
}
const setUserOrdersActionCreator = (userOrders) => ({type: SET_USER_ORDERS, userOrders})

export const getUserProfileThunkCreator = () => async (dispatch) => {
    const response = await authAPI.getUserData();
    dispatch(setUserProfileActionCreator(response.data))
}
const setUserProfileActionCreator = (userProfile) => ({type: SET_USER, userProfile, isLoggedIn: true})

export const editUserProfileActionCreator = (nameField, value) => ({type: SET_EDIT_USER, nameField, value })
export const updateUserProfileThunkCreator = () => async (dispatch, getState) => {
    const { userProfile } = getState().userPage;
    await authAPI.updateUserProfile(userProfile);
    dispatch(getUserProfileThunkCreator());
}

export default userReducer;