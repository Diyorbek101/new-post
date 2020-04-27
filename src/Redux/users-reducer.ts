import {users} from "../api/server-requests";
import { FollowUnfollow } from "./utilits/FoolowUnHelper";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./store";
const USERS = 'USERS';
const IS_LOADER = 'IS_LOADER';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const CURRENT_PAGE = 'CURRENT_PAGE';
const FOLLOW  = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';

type photosType = {
    small:string|null,
    large:string|null, 
}
// ---------
  export  type UserType = {
    name: string,
    id: number,
    status: string,
    photos: photosType,
    followed: boolean,
}; 
// ---------------
const initialState = {
    users: [] as Array<UserType>,
    isLoader: false,
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
};
type InitialState = typeof initialState;




const UsersReducer = (state = initialState, action:ActionTypes):InitialState => {
    switch (action.type) {
        case USERS:{
            return {
                ...state,
                users:action.user
            }
        }
        case IS_LOADER:{
            return {
                ...state,
                isLoader:action.isLoad
            }
        }  case SET_TOTAL_USERS_COUNT:{
            return {
                ...state,
                totalUsersCount:action.total
            }
        }case CURRENT_PAGE:{
            return {
                ...state,
                currentPage:action.page
            }
        }
       case FOLLOW:{
           return{
               ...state,
               users:FollowUnfollow(state,action,true),
           }
       }
        case UN_FOLLOW:{
           return{
               ...state,
               users:FollowUnfollow(state,action,false),
           }
       }
        default :
            return state;
    }
};

type ActionTypes = usersDataActionType
|setToralUsersCountActionType
|setCurrentPageActionType
|followActionsType
|UnFollowSetActionType|isLoaderActionType

type usersDataActionType = {
    type:typeof  USERS,
    user:Array<UserType>
}
const usersData = (user:Array<UserType>):usersDataActionType=>({type:USERS,user})
type isLoaderActionType = {
    type: typeof  IS_LOADER,
    isLoad:boolean,
}
const isLoader = (isLoad:boolean):isLoaderActionType=>({type:IS_LOADER,isLoad})
type setToralUsersCountActionType = {
    type:typeof SET_TOTAL_USERS_COUNT,
    total:number,
}
const setToralUsersCount = (total:number):setToralUsersCountActionType=>({type:SET_TOTAL_USERS_COUNT,total});
type setCurrentPageActionType = {
    type:typeof CURRENT_PAGE,
    page:number,

}
const setCurrentPage = (page:number):setCurrentPageActionType=>({type:CURRENT_PAGE,page})
type followActionsType = {
    type:typeof FOLLOW,
    id:number
}
const follow  = (id:number):followActionsType=>({type:FOLLOW,id})
 type UnFollowSetActionType = {
    type: typeof UN_FOLLOW,
    id:number
 }
const UnFollowSet  = (id:number):UnFollowSetActionType=>({type:UN_FOLLOW,id})

 
//  const  FollowInquiryApi = ()=>{}

export type ThunkType = ThunkAction < Promise < void > , AppStateType, unknown, ActionTypes >

export const FollowInquiry = (id:number):ThunkType=> async (dispatch)=>{
   let response  = await users.follow(id);
   if(response.data.resultCode ===0){
    dispatch(follow(id));
   }
}
export const UnFollowInquiry = (id:number):ThunkType=> async (dispatch)=>{
   let response  = await users.UnFollow(id);
   if(response.data.resultCode ===0){
    dispatch(UnFollowSet(id));
   }
}

export const TakeDataUsers = (currentPage:number,pageSize:number):ThunkType => async (dispatch) => {
    dispatch(isLoader(true));
    dispatch(setCurrentPage(currentPage))
    let usersDataApi = await users.users(currentPage,pageSize);
    dispatch(isLoader(false));
    dispatch(setToralUsersCount(usersDataApi.totalCount));
    dispatch(usersData(usersDataApi.items));
}
export default UsersReducer;