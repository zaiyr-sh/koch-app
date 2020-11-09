const SET_INITIALIZING_SUCCESS = 'SET-INITIALIZING_SUCCESS';

let initialState = {
    initializing: false,
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZING_SUCCESS:
            return {
                ...state, //если state будет расширяться (на будущее)
                initializing: true,
            };
        default:
            return state;
    }
}

export const setInitializingSuccess = () => ({ type: SET_INITIALIZING_SUCCESS})

export const initializeAppThunkCreator = () => (dispatch) => {
    // let promise = dispatch(getClientProfileThunkCreator());
    //
    // // Promise.all([promise, somethingElse, ...]) - если несколько промисов
    // promise.then(() => {
    //     dispatch(setInitializingSuccess())
    // });
    dispatch(setInitializingSuccess())
}

export default appReducer;