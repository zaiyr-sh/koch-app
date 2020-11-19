import {registrationAPI} from "../../api/api";

const SET_EDIT_USER = 'registration/SET_EDIT_USER';
const REGISTRATION_SUCCESS = 'registration/REGISTRATION_SUCCESS';

let initialState = {
    user: {
        user_type: "",
        name: "",
        surname: "",
        phone_number: "",
        password: ""
    },
    isRegister: false
};

const registrationReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_EDIT_USER:
            return {
                ...state,
                user: {...state.user, [action.nameField]: action.value}
            }
        case REGISTRATION_SUCCESS: {
            return {
                ...state,
                isRegister: true
            }
        }
        default:
            return state;
    }
}

export const editRegistrationFieldActionCreator = (nameField, value) => ({type: SET_EDIT_USER, nameField, value });
export const registrationThunkCreator = () => async (dispatch, getState) => {
    const {name, surname, user_type, phone_number, password} = getState().registrationPage.user;
    const response = await registrationAPI.register(name, surname, user_type, phone_number, password);
    debugger
    if (response.status === 201) {
        dispatch(registrationSuccess())

    }
}

export const registrationSuccess = () => ({ type: REGISTRATION_SUCCESS })

export default registrationReducer;