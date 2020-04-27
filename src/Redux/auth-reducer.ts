import {authApi} from "../api/server-requests";
import {stopSubmit} from "redux-form";
const DATA = 'DATA';
const CAPTCHA_URL = 'CAPTCHA_URL';
type InitialStateType  = {
    id: number|null,
    email: string |null
    login: string |null
    isAuth: boolean
    captcha:null|string
}
const initialState:InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captcha:null,
};
const AuthReducer = (state = initialState, action:AuthReducerType):InitialStateType => {
    switch (action.type) {
        case DATA:
        case CAPTCHA_URL:{
            return {
                ...state,
                ...action.payload,
            }
        }
        default :
            return state;
    }
};



type receivingDataActionTypePayload= {
    id: number|null,
    email: string |null,
    login: string |null,
    isAuth: boolean,
}
type receivingDataActionType = {
    type:typeof DATA, 
    payload:receivingDataActionTypePayload

}
const receivingData = (id:number|null, email:string|null, login:string|null, isAuth:boolean):receivingDataActionType => ({
    type: DATA, 
    payload: {id, email, login, isAuth}});

type captchaUrlActionType = {
    type: typeof CAPTCHA_URL,
     payload: {captcha:string}
}
const captchaUrl = (captcha:string):captchaUrlActionType => ({type: CAPTCHA_URL, payload: {captcha}});


const SecurityCaptcha = ()=> async (dispatch:any)=>{
    const response = await authApi.SecurityCaptcha();
    if (response){
        dispatch(captchaUrl(response.data.url));
    }
}
export const RequestinApi = () => async (dispatch:any) => {
    let response = await authApi.authRequest();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(receivingData(id, email, login, true));
    }
};
type AuthReducerType  = receivingDataActionType|captchaUrlActionType;
export const authLoginPost = (email:string,password:string,rememberMe:boolean,captcha:string)=> async (dispatch:any)=>{
    let responce =  await  authApi.authLoginPost(email,password,rememberMe,captcha);
    if (responce.data.resultCode ===0){
        dispatch(RequestinApi());
    } else {
        if (responce.data.resultCode ===10){
        dispatch(SecurityCaptcha())
        }
        let messages = responce.data.messages.length >0 ? responce.data.messages[0]:'some Errors';
      dispatch( stopSubmit('SignIn',{_error:messages}));
    }
};
export const LoginDelete = () => async (dispatch:any) => {
    let res = await authApi.authLoginDelete();
    if (res.data.resultCode === 0) {
      dispatch(receivingData(null,null,null,false,));
    }
};
export default AuthReducer;