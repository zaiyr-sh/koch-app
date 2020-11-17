import {cargoesAPI} from "../../api/api";

const SET_CARGOES = 'client/SET_CARGOES';
const SET_NEW_CARGOES = 'client/SET_NEW_CARGOES';
const SET_OPEN_CARD_MODAL = 'client/SET_OPEN_CARD_MODAL';
const SET_CLOSE_CARD_MODAL = 'client/SET_CLOSE_CARD_MODAL';
const SET_EDIT_CARGO_FILTER = 'client/SET_EDIT_CARGO_FILTER';

let initialState = {
    cargoes: {
        results: [],
        next: "",
        previous: "",
        count: 0,
    },
    filteredCargoes: {
        from_region: "",
        from_city: "",
        to_region: "",
        to_city: "",
        weight: "",
        volume: "",
        length: "",
        width: "",
        height: "",
        price: ""
    },
    card: {}
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
        case SET_OPEN_CARD_MODAL:
            return {
                ...state,
                card: action.card
            }
        case SET_CLOSE_CARD_MODAL:
            return {
                ...state,
                card: ""
            }
        case SET_EDIT_CARGO_FILTER:
            return {
                ...state,
                filteredCargoes: {
                    ...state.filteredCargoes,
                    [action.nameField]: action.value
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

export const getNextCargoesThunkCreator = (offset) => async (dispatch) => {
    const response = await cargoesAPI.getNextCargoes(offset);
    dispatch(setNewCargoesActionCreator(response.data))
}
const setNewCargoesActionCreator = (cargoes) => ({type: SET_NEW_CARGOES, cargoes})

export const getFilteredCargoesThunkCreator = () => async (dispatch, getState) => {
    let { from_region = "", from_city = "", to_region = "", to_city = "", weight = "", volume = "", length = "", width = "", height = "", price = "" } = getState().cargoPage.filteredCargoes;
    debugger
    const response = await cargoesAPI.getFilteredCargoes( from_region, from_city, to_region, to_city, weight, volume, length, width, height, price );
    dispatch(setCargoesActionCreator(response.data))
}
export const editCargoFilterThunkCreator = (nameField, value) => ({type: SET_EDIT_CARGO_FILTER, nameField, value })

export const setOpenCardModalActionCreator = (card) => ({type: SET_OPEN_CARD_MODAL, card})
export const closeOpenCardActionCreator = () => ({type: SET_CLOSE_CARD_MODAL})

export default cargoReducer;