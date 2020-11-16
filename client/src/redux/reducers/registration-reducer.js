const SET_USER_DATA = 'auth/SET-USER-DATA';
const REGISTRATION_FIRST_STAGE_SUCCESS = 'registration/REGISTRATION_FIRST_STAGE_SUCCESS';

let initialState = {
    user: {
        name: "",
        surname: "",
        phone_number: ""
    }
};

const registrationReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case REGISTRATION_FIRST_STAGE_SUCCESS:
            return {
                ...state,
                ...state.user,
                name: action.name,
                surname: action.surname,
                phone_number: action.phone_number
            };
        default:
            return state;
    }
}

export const setAuthUserDataActionCreator = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {userId, email, login, isAuth} })
export const getAuthUserDataThunkCreator = () => async (dispatch) => {
    // let response = await authAPI.myUserData()
    // if (response.data.resultCode === 0) {
    //     let {id, email, login} = response.data.data; // destructuring
    //     dispatch(setAuthUserDataActionCreator(id, email, login, true));
    // }
}

export const registrationFirstStageThunkCreator = (name, surname, phone_number) => ({ type: REGISTRATION_FIRST_STAGE_SUCCESS, name, surname, phone_number })

export default registrationReducer;