import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form';
import AuthReducer from "./auth-reducer";
import ProfileRedcer from "./Profle-reducer";
import UsersReducer from "./users-reducer";
import appReducer from "./apps-reducer";
const rootReducer = combineReducers({
    auth:AuthReducer,
    form: formReducer,
    usersData:UsersReducer,
    appReducer:appReducer,
    ProfileRedcer: ProfileRedcer,
});

export  type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType> 
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));
export default  store;