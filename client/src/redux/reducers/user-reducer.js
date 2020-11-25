import {authAPI, cargoesAPI} from "../../api/api";

const SET_USER = 'user/SET_USER';
const SET_EDIT_USER = 'user/SET_EDIT_USER';
const SET_USER_ORDERS = 'user/SET_USER_ORDERS';
const SET_NEW_ORDERS = 'user/SET_NEW_ORDERS';
const SET_OPEN_USER_CARD_MODAL = 'user/SET_OPEN_USER_CARD_MODAL';
const SET_CLOSE_USER_CARD_MODAL = 'user/SET_CLOSE_USER_CARD_MODAL';

let initialState = {
    userProfile: {
        name: "",
        surname: "",
        phone_number: ""
    },
    userOrders: {},
    isLoggedIn: false,
    userCard: {}
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
        case SET_OPEN_USER_CARD_MODAL:
            return {
                ...state,
                userCard: action.userCard
            }
        case SET_CLOSE_USER_CARD_MODAL:
            return {
                ...state,
                userCard: ""
            }
        default:
            return state;

    }
}

export const getUserOrdersThunkCreator = () => async (dispatch) => {
    const response = await authAPI.getUserOrders();
    dispatch(setUserOrdersActionCreator(response.data));
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

export const getNextOrdersThunkCreator = (offset) => async (dispatch) => {
    const response = await authAPI.getNextOrders(offset);
    dispatch(setNewOrdersActionCreator(response.data))
}
const setNewOrdersActionCreator = (userOrders) => ({type: SET_NEW_ORDERS, userOrders})

export const setOpenUserCardModalActionCreator = (userCard) => ({type: SET_OPEN_USER_CARD_MODAL, userCard})
export const closeUserCardActionCreator = () => ({type: SET_CLOSE_USER_CARD_MODAL})

export default userReducer;