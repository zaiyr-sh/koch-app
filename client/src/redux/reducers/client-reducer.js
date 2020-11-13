import {authAPI} from "../../api/api";

const SET_CLIENT = 'client/SET_CARGOES';
const SET_EDIT_CLIENT = 'client/SET_EDIT_CLIENT'

let initialState = {
    clientProfile: [],
    isLoggedIn: false,
}

const clientReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CLIENT:
            return {
                ...state,
                clientProfile: action.clientProfile,
                isLoggedIn: action.isLoggedIn
            }
        case SET_EDIT_CLIENT:
            return {
                ...state,
                clientProfile: {...state.clientProfile, [action.nameField]: action.value}
            }
        default:
            return state;

    }
}

export const getClientProfileThunkCreator = () => async (dispatch) => {
    const response = await authAPI.getUserData();
    dispatch(setClientProfileActionCreator(response.data))
}
const setClientProfileActionCreator = (clientProfile) => ({type: SET_CLIENT, clientProfile, isLoggedIn: true})

export const editClientProfileActionCreator = (nameField, value) => ({type: SET_EDIT_CLIENT, nameField, value })
export const updateClientProfileHandlerThunkCreator = () => async (dispatch, getState) => {
    const { clientProfile } = getState().clientPage;
    await authAPI.updateClientProfile(clientProfile);
    dispatch(getClientProfileThunkCreator());
}

export default clientReducer;