import {registrationAPI, typesAPI} from "../../api/api";

const SET_EDIT_USER = 'registration/SET_EDIT_USER';
const REGISTRATION_SUCCESS = 'registration/REGISTRATION_SUCCESS';
const RESET_REGISTRATION = 'registration/RESET_REGISTRATION';
const REGISTRATION_UNSUCCESS = 'registration/REGISTRATION_UNSUCCESS';
const SET_EDIT_DRIVER = 'registration/SET_EDIT_DRIVER';
const SET_EDIT_IMAGE_DRIVER = 'registration/SET_EDIT_IMAGE_DRIVER';
const REGISTRATION_DRIVER_SUCCESS = 'registration/REGISTRATION_DRIVER_SUCCESS';
const REGISTRATION_DRIVER_UNSUCCESS = 'registration/REGISTRATION_DRIVER_UNSUCCESS';
const SET_CARGO_TYPES = 'registration/SET_CARGO_TYPES';

let initialState = {
    user: {
        user_type: "",
        name: "",
        surname: "",
        phone_number: "",
        password: "",
        uid_token: ""
    },
    driver: {
        carrying_capacity: "",
        vehicle_type: "",
        cargo_type: "",
        vehicle_passport: {
            base64Img: "",
            img: ""
        },
        driver_license: {
            base64Img: "",
            img: ""
        },
        id_passport: {
            base64Img: "",
            img: ""
        }
    },
    cargoTypes: {
        count: 0,
        next: "",
        previous: "",
        results: []
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
                    user_id: "", carrying_capacity: "", vehicle_type: "", cargo_type: "", vehicle_passport: {base64Img: "", img: ""}, driver_license: {base64Img: "", img: ""}, id_passport: {base64Img: "", img: ""},
                },
                registrationError: "",
                isRegister: false,
                isDriverRegister: false,
                registrationDriverError: "",
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
        case SET_EDIT_IMAGE_DRIVER: {
            return {
                ...state,
                driver: {
                    ...state.driver,
                    [action.nameField]: {
                        base64Img: action.base64Img,
                        img: action.img
                    }
                }
            }
        }
        case SET_CARGO_TYPES:
            return {
                ...state,
                cargoTypes: action.cargoTypes,
            }
        default:
            return state;
    }
}

export const editRegistrationFieldActionCreator = (nameField, value) => ({type: SET_EDIT_USER, nameField, value });
export const registrationThunkCreator = () => async (dispatch, getState) => {
    const {name, surname, user_type, phone_number, password, uid_token} = getState().registrationPage.user;
    try {
        const response = await registrationAPI.register(name, surname, user_type, phone_number, password, uid_token);
        if (response.status === 201) {
            dispatch(registrationSuccess());
            dispatch(resetRegistrationActionCreator());
        }
    } catch (e) {
        dispatch(registrationUnSuccess());
        dispatch(resetRegistrationActionCreator());
    }
}
const registrationSuccess = () => ({ type: REGISTRATION_SUCCESS });
const registrationUnSuccess = () => ({type: REGISTRATION_UNSUCCESS, registrationError: "ERROR"});

export const editRegistrationDriverFieldActionCreator = (nameField, value) => ({type: SET_EDIT_DRIVER, nameField, value });
export const editRegistrationDriverImageFieldActionCreator = (nameField, base64Img, img) => ({type: SET_EDIT_IMAGE_DRIVER, nameField, base64Img, img });
export const registrationDriverThunkCreator = () => async (dispatch, getState) => {
    const {carrying_capacity, vehicle_type, cargo_type, vehicle_passport, driver_license, id_passport} = getState().registrationPage.driver;
    const data = new FormData();
    data.append('carrying_capacity', carrying_capacity)
    data.append('vehicle_type', vehicle_type)
    data.append('cargo_type', cargo_type)
    data.append('vehicle_passport', vehicle_passport.img)
    data.append('driver_license', driver_license.img)
    data.append('id_passport', id_passport.img)
    try {
        const response = await registrationAPI.registerDriver(data);
        if (response.status === 201) {
            dispatch(registrationDriverSuccess());
            dispatch(resetRegistrationActionCreator());
        }
    } catch (e) {
        dispatch(registrationDriverUnSuccess());
        dispatch(resetRegistrationActionCreator());
    }
}
const registrationDriverSuccess = () => ({ type: REGISTRATION_DRIVER_SUCCESS });
const registrationDriverUnSuccess = () => ({type: REGISTRATION_DRIVER_UNSUCCESS, registrationDriverError: "ERROR"});

export const resetRegistrationActionCreator = () => ({type: RESET_REGISTRATION});

export const getTypesThunkCreator = () => async (dispatch) => {
    const cargoTypesResponse = await typesAPI.getCargoTypes();
    dispatch(setPlacesActionCreator(cargoTypesResponse.data));
}
const setPlacesActionCreator = (cargoTypes) => ({type: SET_CARGO_TYPES, cargoTypes});

export default registrationReducer;