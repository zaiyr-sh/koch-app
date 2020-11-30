import {registrationAPI} from "../../api/api";

const SET_EDIT_USER = 'registration/SET_EDIT_USER';
const REGISTRATION_SUCCESS = 'registration/REGISTRATION_SUCCESS';
const RESET_REGISTRATION = 'registration/RESET_REGISTRATION';
const REGISTRATION_UNSUCCESS = 'registration/REGISTRATION_UNSUCCESS';
const SET_EDIT_DRIVER = 'registration/SET_EDIT_DRIVER';
const REGISTRATION_DRIVER_SUCCESS = 'registration/REGISTRATION_DRIVER_SUCCESS';
const REGISTRATION_DRIVER_UNSUCCESS = 'registration/REGISTRATION_DRIVER_UNSUCCESS';

let initialState = {
    user: {
        user_type: "",
        name: "",
        surname: "",
        phone_number: "",
        password: ""
    },
    driver: {
        user_id: "",
        carrying_capacity: "",
        vehicle_type: "",
        cargo_type: "",
        vehicle_passport: "",
        driver_license: "",
        id_passport: "",
    },
    isRegister: false,
    isDriverRegister: false,
    registrationDriverError: "",
    registrationError: ""
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
        case REGISTRATION_UNSUCCESS: {
            return {
                ...state,
                registrationError: action.registrationError
            }
        }
        case RESET_REGISTRATION: {
            return {
                ...state,
                user: {
                    ...state.user,
                    user_type: "", name: "", surname: "", phone_number: "", password: ""
                },
                driver: {
                    ...state.driver,
                    user_id: "", carrying_capacity: "", vehicle_type: "", cargo_type: "", vehicle_passport: "", driver_license: "", id_passport: "",
                },
                registrationError: "",
                isRegister: false
            }
        }
        case REGISTRATION_DRIVER_SUCCESS: {
            return {
                ...state,
                isDriverRegister: true
            }
        }
        case REGISTRATION_DRIVER_UNSUCCESS: {
            return {
                ...state,
                registrationDriverError: action.registrationDriverError
            }
        }
        case SET_EDIT_DRIVER: {
            return {
                ...state,
                driver: {...state.driver, [action.nameField]: action.value}
            }
        }
        default:
            return state;
    }
}

export const editRegistrationFieldActionCreator = (nameField, value) => ({type: SET_EDIT_USER, nameField, value });
export const registrationThunkCreator = () => async (dispatch, getState) => {
    const {name, surname, user_type, phone_number, password} = getState().registrationPage.user;
    try {
        const response = await registrationAPI.register(name, surname, user_type, phone_number, password);
        if (response.status === 201) {
            if(response.data.user_type === "driver"){
                localStorage.setItem('user_id', JSON.stringify(response.data.id));
            }
            dispatch(registrationSuccess());
            dispatch(resetRegistrationActionCreator());
        }
    } catch (e) {
        dispatch(registrationUnSuccess());
        dispatch(resetRegistrationActionCreator());
    }
}

const registrationSuccess = () => ({ type: REGISTRATION_SUCCESS });
const registrationUnSuccess = () => ({type: REGISTRATION_UNSUCCESS, registrationError: "ERROR"})

export const editRegistrationDriverFieldActionCreator = (nameField, value) => ({type: SET_EDIT_DRIVER, nameField, value });
export const registrationDriverThunkCreator = () => async (dispatch, getState) => {
    const {user_id, carrying_capacity, vehicle_type, cargo_type, vehicle_passport, driver_license, id_passport} = getState().registrationPage.driver;
    const data = new FormData()
    data.append('vehicle_passport', vehicle_passport)
    data.append('driver_license', driver_license)
    data.append('id_passport', id_passport)
    try {
        const response = await registrationAPI.registerDriver(user_id, carrying_capacity, vehicle_type, cargo_type, data.get('vehicle_passport'), data.get('driver_license'), data.get('id_passport'));
        if (response.status === 201) {
            dispatch(registrationDriverSuccess())
        }
    } catch (e) {
        dispatch(registrationDriverUnSuccess());
        dispatch(resetRegistrationActionCreator());
    }
}

const registrationDriverSuccess = () => ({ type: REGISTRATION_DRIVER_SUCCESS });
const registrationDriverUnSuccess = () => ({type: REGISTRATION_DRIVER_UNSUCCESS, registrationDriverError: "ERROR"})

export const resetRegistrationActionCreator = () => ({type: RESET_REGISTRATION});

export default registrationReducer;