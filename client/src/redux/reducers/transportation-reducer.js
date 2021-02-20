import {cargoTransportationAPI} from "../../api/api";

const SET_TRANSPORTATION = 'transportation/SET_TRANSPORTATION';
const SET_EDIT_TRANSPORTATION_FILTER = 'transportation/SET_EDIT_TRANSPORTATION_FILTER';
const RESET_TRANSPORTATION_FILTER = 'transportation/RESET_TRANSPORTATION_FILTER';
const SET_NEW_TRANSPORTATIONS = 'transportation/SET_NEW_TRANSPORTATIONS';

let initialState = {
    transportations: {
        results: [],
        next: "",
        previous: "",
        count: 0,
    },
    filteredTransportations: {
        from_region: "",
        from_city: "",
        to_region: "",
        to_city: "",
        from_weight: "",
        to_weight: "",
        from_price: "",
        to_price: ""
    },
    regions: {
        count: 0,
        next: "",
        previous: "",
        results: [
            {
                id: 0,
                name: "",
                cities: []
            }
        ]
    }
}

const transportationReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TRANSPORTATION:
            return {
                ...state,
                transportations: action.transportations
            }
        case SET_NEW_TRANSPORTATIONS:
            return {
                ...state,
                transportations: {
                    ...state.transportations,
                    results: [...state.transportations.results, ...action.transportations.results],
                    next: action.transportations.next,
                    previous: action.transportations.previous,
                    count: action.transportations.count
                }
            }
        case SET_EDIT_TRANSPORTATION_FILTER:
            return {
                ...state,
                filteredTransportations: {
                    ...state.filteredTransportations,
                    [action.nameField]: action.value
                }
            }
        case RESET_TRANSPORTATION_FILTER:
            return {
                ...state,
                filteredTransportations: {
                    ...state.filteredTransportations,
                    from_region: "", from_city: "", to_region: "", to_city: "", from_weight: "", to_weight: "", from_price: "", to_price: ""
                }
            }
        default:
            return state;
    }
}

export const getTransportationsThunkCreator = () => async (dispatch) => {
    const response = await cargoTransportationAPI.getCargoTransportations();
    dispatch(setTransportationsActionCreator(response.data));
}
const setTransportationsActionCreator = (transportations) => ({type: SET_TRANSPORTATION, transportations});

export const editPlaceSelectionActionCreator = (nameField, value) => ({type: SET_EDIT_TRANSPORTATION_FILTER, nameField, value });
export const resetFilterTransportationActionCreator = () => ({type: RESET_TRANSPORTATION_FILTER});

export const editTransportationFilterActionCreator = (nameField, value) => ({type: SET_EDIT_TRANSPORTATION_FILTER, nameField, value });

export const getNextTransportationsThunkCreator = (offset) => async (dispatch, getState) => {
    let { from_region = "", from_city = "", to_region = "", to_city = "", from_weight = "", to_weight = "", from_price = "", to_price = "" } = getState().transportationPage.filteredTransportations;
    const response = await cargoTransportationAPI.getNextCargoTransportations(offset,  from_region, from_city, to_region, to_city, from_weight, to_weight, from_price, to_price );
    dispatch(setNewCargoesActionCreator(response.data));
}
const setNewCargoesActionCreator = (transportations) => ({type: SET_NEW_TRANSPORTATIONS, transportations});

export const getFilteredTransportationsThunkCreator = () => async (dispatch, getState) => {
    let { from_region = "", from_city = "", to_region = "", to_city = "", from_weight = "", to_weight = "", from_price = "", to_price = "" } = getState().transportationPage.filteredTransportations;
    const response = await cargoTransportationAPI.getFilteredCargoTransportations(from_region, from_city, to_region, to_city, from_weight, to_weight,  from_price, to_price );
    dispatch(setTransportationsActionCreator(response.data));
}

export default transportationReducer;