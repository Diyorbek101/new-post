import {RequestinApi} from "./auth-reducer";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
let initialState = {
    initialized: false,
};
type InitialState = typeof initialState; 
const appReducer = (state = initialState, action:any):InitialState => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state;
    }
};
type initializedSuccessActionTypes = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = ():initializedSuccessActionTypes => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch:any) => {
    let promise = dispatch(RequestinApi());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    });
};

export default appReducer;