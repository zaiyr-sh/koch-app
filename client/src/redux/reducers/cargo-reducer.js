import {cargoesAPI} from "../../api/api";

const SET_CARGOES = 'client/SET_CARGOES';

let initialState = {
    cargoes: [],
}

const cargoReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CARGOES:
            return {
                ...state,
                cargoes: action.cargoes
            }
        default:
            return state;

    }
}

export const getCargoesThunkCreator = () => async (dispatch) => {
    const response = await cargoesAPI.getCargoes();
    dispatch(setCargoesActionCreator(response.data.results))
}
const setCargoesActionCreator = (cargoes) => ({type: SET_CARGOES, cargoes})

export default cargoReducer;