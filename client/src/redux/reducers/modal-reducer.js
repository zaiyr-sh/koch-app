const SET_OPEN_CARD_MODAL = 'modal/SET_OPEN_CARD_MODAL';
const SET_CLOSE_CARD_MODAL = 'modal/SET_CLOSE_CARD_MODAL';

let initialState = {
    card: {}
}

const modalReducer = (state = initialState, action) => {
    switch(action.type) {
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
        default:
            return state;
    }
}

export const setOpenCardModalActionCreator = (card) => ({type: SET_OPEN_CARD_MODAL, card});
export const closeCardActionCreator = () => ({type: SET_CLOSE_CARD_MODAL});

export default modalReducer;