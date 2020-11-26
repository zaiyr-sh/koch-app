import {placementAPI} from "../../api/api";

const SET_EDIT_CARGO_PLACEMENT = 'placement/SET_EDIT_CARGO_PLACEMENT';
const RESET_PLACEMENT_CARGO = 'placement/RESET_PLACEMENT_CARGO';
const SET_EDIT_TRANSPORTATION_PLACEMENT = 'placement/SET_EDIT_TRANSPORTATION_PLACEMENT';

let initialState = {
    cargo: {
        from_shipment_date: "",
        to_shipment_date: "",
        from_region: "",
        from_city: "",
        to_region: "",
        to_city: "",
        place_comment: "",
        cargo_comment: "",
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
    }
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
                    from_shipment_date: "", to_shipment_date: "", from_region: "", from_city: "", to_region: "", to_city: "", place_comment: "", cargo_comment: "", name: "", weight: "", volume: "", length: "", width: "", height: "", phone_number: "", price: "", sender_name: "", sender_surname: ""
                }
            }
        case SET_EDIT_TRANSPORTATION_PLACEMENT:
            return {
                ...state,
                transportation: {...state.transportation, [action.nameField]: action.value}
            }
        default:
            return state;
    }
}

export const editCargoPlacementActionCreator = (nameField, value) => ({type: SET_EDIT_CARGO_PLACEMENT, nameField, value })
export const placeCargoThunkCreator = () => async (dispatch, getState) => {
    const { cargo } = getState().placementPage;
    const response = await placementAPI.cargoPlacement(cargo);
    if(response && response.status === 201) {
        alert("Вы успешно опубликовали!");
        dispatch(resetPlacementCargoActionCreator);
    }
}
export const resetPlacementCargoActionCreator = () => ({type: RESET_PLACEMENT_CARGO})

export const editTransportationPlacementActionCreator = (nameField, value) => ({type: SET_EDIT_TRANSPORTATION_PLACEMENT, nameField, value })
export const placeTransportationThunkCreator = () => async (dispatch, getState) => {
    const { transportation } = getState().placementPage;
    const response = await placementAPI.transportationPlacement(transportation);
    if(response && response.status === 201) {
        alert("Вы успешно опубликовали!");
    }
}

export default placementReducer;