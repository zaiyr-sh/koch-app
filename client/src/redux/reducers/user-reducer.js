import {authAPI} from "../../api/api";

const SET_USER = 'user/SET_USER';
const SET_EDIT_USER = 'user/SET_EDIT_USER';
const SET_USER_ORDERS = 'user/SET_USER_ORDERS';
const SET_NEW_ORDERS = 'user/SET_NEW_ORDERS';
const SET_USER_UPDATE_SUCCESS ='user/SET_USER_UPDATE_SUCCESS';

let initialState = {
    userProfile: {
        id: "",
        user_type: "",
        name: "",
        surname: "",
        phone_number: "",
        registered: false,
        checked: false
    },
    userOrders: {
        results: [],
        next: "",
        previous: "",
        count: 0,
    },
    isLoggedIn: false,
    isUpdated: false
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
        case SET_NEW_ORDERS:
            return {
                ...state,
                userOrders: {
                    ...state.userOrders,
                    results: [...state.userOrders.results, ...action.userOrders.results],
                    next: action.userOrders.next,
                    previous: action.userOrders.previous,
                    count: action.userOrders.count
                }
            }
        case SET_EDIT_USER:
            return {
                ...state,
                userProfile: {...state.userProfile, [action.nameField]: action.value}
            }
        case SET_USER_UPDATE_SUCCESS:
            return {
                ...state,
                isUpdated: action.isUpdated
            }
        default:
            return state;
    }
}

export const getUserOrdersThunkCreator = () => async (dispatch) => {
    const response = await authAPI.getUserOrders();
    dispatch(setUserOrdersActionCreator(response.data));
}
export const setUserOrdersActionCreator = (userOrders) => ({type: SET_USER_ORDERS, userOrders});

export const getUserProfileThunkCreator = () => async (dispatch) => {
    const response = await authAPI.getUserData();
    dispatch(setUserProfileActionCreator(response.data, true));
}
export const setUserProfileActionCreator = (userProfile, isLoggedIn) => ({type: SET_USER, userProfile, isLoggedIn});

export const editUserProfileActionCreator = (nameField, value) => ({type: SET_EDIT_USER, nameField, value });
export const updateUserProfileThunkCreator = () => async (dispatch, getState) => {
    const { userProfile } = getState().userPage;
    await authAPI.updateUserProfile(userProfile);
    dispatch(getUserProfileThunkCreator());
    dispatch(updateUserProfileSuccessActionCreator(true));
}
export const updateUserProfileSuccessActionCreator = (isUpdated) => ({type: SET_USER_UPDATE_SUCCESS, isUpdated});

export const getNextOrdersThunkCreator = (offset) => async (dispatch) => {
    const response = await authAPI.getNextOrders(offset);
    dispatch(setNewOrdersActionCreator(response.data));
}
const setNewOrdersActionCreator = (userOrders) => ({type: SET_NEW_ORDERS, userOrders});

export default userReducer;