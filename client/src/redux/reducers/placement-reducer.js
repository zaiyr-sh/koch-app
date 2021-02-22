import {placementAPI} from "../../api/api";

const SET_EDIT_CARGO_PLACEMENT = 'placement/SET_EDIT_CARGO_PLACEMENT';
const RESET_PLACEMENT_CARGO = 'placement/RESET_PLACEMENT_CARGO';
const SET_EDIT_TRANSPORTATION_PLACEMENT = 'placement/SET_EDIT_TRANSPORTATION_PLACEMENT';
const PLACEMENT_SUCCESS = 'placement/PLACEMENT_SUCCESS';
const PLACEMENT_UNSUCCESS = 'placement/PLACEMENT_UNSUCCESS';
const RESET_PLACEMENT_TRANSPORTATION = 'placement/RESET_PLACEMENT_TRANSPORTATION';

let initialState = {
    cargo: {
        from_shipment_date: "",
        to_shipment_date: "",
        from_region: "",
        from_city: "",
        to_region: "",
        to_city: "",
        from_place_comment: "",
        to_place_comment: "",
        name: "",
        weight: "",
        volume: "",
        length: "",
        width: "",
        height: "",
        phone_number: "",
        price: "",
        sender_name: "",
        sender_surname: ""
    },
    transportation: {
        from_shipment_date: "",
        to_shipment_date: "",
        from_region: "",
        from_city: "",
        to_region: "",
        to_city: "",
        vehicle_comment: "",
        price: "",
        weight: "",
        volume: ""
    },
    isPlaced: false,
    placementError: ""
};

const placementReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_EDIT_CARGO_PLACEMENT:
            return {
                ...state,
                cargo: {...state.cargo, [action.nameField]: action.value}
            }
        case RESET_PLACEMENT_CARGO:
            return {
                ...state,
                cargo: {
                    ...state.cargo,
                    from_shipment_date: "", to_shipment_date: "", from_region: "", from_city: "", to_region: "", to_city: "", from_place_comment: "",
                    to_place_comment: "", cargo_comment: "", name: "", weight: "", volume: "", length: "", width: "", height: "", phone_number: "", price: "", sender_name: "", sender_surname: ""
                }
            }
        case SET_EDIT_TRANSPORTATION_PLACEMENT:
            return {
                ...state,
                transportation: {...state.transportation, [action.nameField]: action.value}
            }
        case PLACEMENT_SUCCESS:
            return {
                ...state,
                isPlaced: action.isPlaced
            }
        case PLACEMENT_UNSUCCESS: {
            return {
                ...state,
                placementError: action.placementError
            }
        }
        case RESET_PLACEMENT_TRANSPORTATION:
            return {
                ...state,
                transportation: {
                    ...state.transportation, from_shipment_date: "", to_shipment_date: "", from_region: "", from_city: "", to_region: "", to_city: "", vehicle_comment: "", price: "", weight: "", volume: ""
                },
                placementError: "",
                isPlaced: false
            }
        default:
            return state;
    }
}

export const placementSuccessActionCreator = (isPlaced) => ({type: PLACEMENT_SUCCESS, isPlaced});
const placementUnsuccessActionCreator = () => ({type: PLACEMENT_UNSUCCESS, placementError: "ERROR"});

export const editCargoPlacementActionCreator = (nameField, value) => ({type: SET_EDIT_CARGO_PLACEMENT, nameField, value });
export const placeCargoThunkCreator = () => async (dispatch, getState) => {
    const { cargo } = getState().placementPage;
    const response = await placementAPI.cargoPlacement(cargo);
    if(response && response.status === 201) {
        dispatch(placementSuccessActionCreator(true));
        dispatch(resetPlacementCargoActionCreator());
    }
}
export const resetPlacementCargoActionCreator = () => ({type: RESET_PLACEMENT_CARGO});

export const editTransportationPlacementActionCreator = (nameField, value) => ({type: SET_EDIT_TRANSPORTATION_PLACEMENT, nameField, value });
export const placeTransportationThunkCreator = () => async (dispatch, getState) => {
    const { transportation } = getState().placementPage;
    try {
        const response = await placementAPI.transportationPlacement(transportation);
        if(response && response.status === 201) {
            dispatch(placementSuccessActionCreator(true));
            dispatch(resetPlacementTransportationActionCreator());
        }
    } catch (e) {
        dispatch(placementUnsuccessActionCreator());
        dispatch(resetPlacementTransportationActionCreator());
    }
}
export const resetPlacementTransportationActionCreator = () => ({type: RESET_PLACEMENT_TRANSPORTATION});

export default placementReducer;