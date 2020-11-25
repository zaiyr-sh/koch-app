import {cargoesAPI} from "../../api/api";

const SET_CARGOES = 'client/SET_CARGOES';
const SET_NEW_CARGOES = 'client/SET_NEW_CARGOES';
const SET_EDIT_CARGO_FILTER = 'client/SET_EDIT_CARGO_FILTER';
const SET_CARGO_PLACES = 'client/SET_CARGO_PLACES';
const RESET_CARGO_FILTER = 'clint/RESET_CARGO_FILTER';

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
        from_weight: "",
        to_weight: "",
        from_volume: "",
        to_volume: "",
        from_price: "",
        to_price: ""
    },
    card: {},
    cities: "",
    regions: ""
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
        case SET_EDIT_CARGO_FILTER:
            return {
                ...state,
                filteredCargoes: {
                    ...state.filteredCargoes,
                    [action.nameField]: action.value
                }
            }
        case SET_CARGO_PLACES:
            return {
                ...state,
                cities: action.citiesResponse,
                regions: action.regionsResponse
            }
        case RESET_CARGO_FILTER:
            return {
                ...state,
                filteredCargoes: {
                    ...state.filteredCargoes,
                    from_region: "", from_city: "", to_region: "", to_city: "", from_weight: "", to_weight: "", from_volume: "", to_volume: "", from_price: "", to_price: ""
                }
            }
        default:
            return state;

    }
}

export const getCargoPlacesThunkCreator = () => async (dispatch) => {
    const citiesResponse = await cargoesAPI.getCargoCities();
    const regionsResponse = await cargoesAPI.getCargoRegions();
    dispatch(setCargoPlacesActionCreator(citiesResponse.data, regionsResponse.data))
}
const setCargoPlacesActionCreator = (citiesResponse, regionsResponse) => ({type: SET_CARGO_PLACES, citiesResponse, regionsResponse})
export const editPlaceSelectionActionCreator = (nameField, value) => ({type: SET_EDIT_CARGO_FILTER, nameField, value })
export const resetFilterCargoesActionCreator = () => ({type: RESET_CARGO_FILTER})

export const getCargoesThunkCreator = () => async (dispatch) => {
    const response = await cargoesAPI.getCargoes();
    dispatch(setCargoesActionCreator(response.data))
}
const setCargoesActionCreator = (cargoes) => ({type: SET_CARGOES, cargoes})

export const getNextCargoesThunkCreator = (offset) => async (dispatch, getState) => {
    let { from_region = "", from_city = "", to_region = "", to_city = "", from_weight = "", to_weight = "", from_volume = "", to_volume = "", from_price = "", to_price = "" } = getState().cargoPage.filteredCargoes;
    const response = await cargoesAPI.getNextCargoes(offset,  from_region, from_city, to_region, to_city, from_weight, to_weight, from_volume, to_volume, from_price, to_price );
    dispatch(setNewCargoesActionCreator(response.data))
}
const setNewCargoesActionCreator = (cargoes) => ({type: SET_NEW_CARGOES, cargoes})

export const getFilteredCargoesThunkCreator = () => async (dispatch, getState) => {
    let { from_region = "", from_city = "", to_region = "", to_city = "", from_weight = "", to_weight = "", from_volume = "", to_volume = "", from_price = "", to_price = "" } = getState().cargoPage.filteredCargoes;
    const response = await cargoesAPI.getFilteredCargoes(from_region, from_city, to_region, to_city, from_weight, to_weight, from_volume, to_volume, from_price, to_price );
    dispatch(setCargoesActionCreator(response.data))
}
export const editCargoFilterActionCreator = (nameField, value) => ({type: SET_EDIT_CARGO_FILTER, nameField, value })

export default cargoReducer;