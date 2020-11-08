import {authAPI, cargoesAPI} from "../../api/api";

const SET_CLIENT = 'client/SET_CARGOES';

let initialState = {
    clientProfile: [],
    isLoggedIn: false
}

const clientReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CLIENT:
            return {
                ...state,
                clientProfile: action.clientProfile,
                isLoggedIn: action.isLoggedIn
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

export default clientReducer;