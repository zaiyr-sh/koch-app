import {cargoesAPI} from "../../api/api";

const SET_CARGOES = 'client/SET_CARGOES';
const SET_NEW_CARGOES = 'client/SET_NEW_CARGOES';

let initialState = {
    cargoes: {
        results: [],
        next: "",
        previous: "",
        count: 0
    }
}

const cargoReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CARGOES:
            return {
                ...state,
                cargoes: action.cargoes
            }
        case SET_NEW_CARGOES:
            return {
                ...state,
                cargoes: {
                    ...state.cargoes,
                    results: [...state.cargoes.results, ...action.cargoes.results],
                    next: action.cargoes.next,
                    previous: action.cargoes.previous,
                    count: action.cargoes.count
                }
            }
        default:
            return state;

    }
}

export const getCargoesThunkCreator = () => async (dispatch) => {
    const response = await cargoesAPI.getCargoes();
    dispatch(setCargoesActionCreator(response.data))
}
const setCargoesActionCreator = (cargoes) => ({type: SET_CARGOES, cargoes})

export const getNextCargoesThunkCreator = (offset = 0) => async (dispatch) => {
    const response = await cargoesAPI.getNextCargoes(offset);
    dispatch(setNewCargoesActionCreator(response.data))
}
const setNewCargoesActionCreator = (cargoes) => ({type: SET_NEW_CARGOES, cargoes})

export default cargoReducer;