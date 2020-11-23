import {cargoTransportationAPI} from "../../api/api";

const SET_TRANSPORTATION = 'client/SET_TRANSPORTATION';


let initialState = {
    transportations: {
        results: [],
        next: "",
        previous: "",
        count: 0,
    }
}

const transportationReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TRANSPORTATION:
            return {
                ...state,
                transportations: action.transportations
            }
        default:
            return state;

    }
}

export const getTransportationsThunkCreator = () => async (dispatch) => {
    const response = await cargoTransportationAPI.getCargoTransportations();
    dispatch(setTransportationsActionCreator(response.data))
}
const setTransportationsActionCreator = (transportations) => ({type: SET_TRANSPORTATION, transportations})


export default transportationReducer;