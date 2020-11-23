const SET_EDIT_CARGO_PLACEMENT = 'placement/SET_EDIT_CARGO_PLACEMENT';

let initialState = {
    cargo: {
        from_region: "",
        from_city: "",
        to_region: "",
        to_city: "",
        date_published: "",
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
    }
};

const placementReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_EDIT_CARGO_PLACEMENT:
            return {
                ...state,
                cargo: {...state.cargo, [action.nameField]: action.value}
            }
        default:
            return state;
    }
}

export const editCargoPlacementActionCreator = (nameField, value) => ({type: SET_EDIT_CARGO_PLACEMENT, nameField, value })

export default placementReducer;