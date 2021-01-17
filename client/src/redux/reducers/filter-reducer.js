const SET_DISPLAY = 'filter/SET_DISPLAY';

let initialState = {
    display: "cargo"
}

const filterReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DISPLAY:
            return {
                ...state,
                display: action.display
            }
        default:
            return state;
    }
}

export const editDisplayActionCreator = (display) => ({type: SET_DISPLAY, display});

export default filterReducer;