import {placementAPI} from "../../api/api";

const SET_EDIT_CARGO_PLACEMENT = 'placement/SET_EDIT_CARGO_PLACEMENT';
const RESET_PLACEMENT_CARGO = 'placement/RESET_PLACEMENT_CARGO';

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

export default placementReducer;