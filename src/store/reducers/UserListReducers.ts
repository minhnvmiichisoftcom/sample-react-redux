import createReducer from "./createReducer";
import * as type from "../actions/types"
import { IUserStateDeleteAction, IUserStateEditAction, IUserStatesAction, IUserStateSearchAction } from "../../model/payload/User";
import { User, UserState } from "../../model/reducer/User";

const initialState: UserState = {
    users: []
}

export const userListReducers = createReducer(initialState, {
    [type.FETCH_LIST] (state: UserState, action: IUserStatesAction): UserState {
        return {
            ...state,
            users: action.users
        }
    },
    [type.ADD_ITEM] (state: UserState, action: IUserStateEditAction): UserState {
        let newUser = action.user
        let newList = state.users
        newList.push(newUser)
        return {
            ...state,
            users: newList
        } 
    },
    [type.DELETE_ITEM] (state: UserState, action: IUserStateDeleteAction): UserState {
        let newList = state.users.filter(item => item.id !== action.id)
        return {
            ...state,
            users: newList
        }
    },
    [type.EDIT_ITEM] (state: UserState, action: IUserStateEditAction): UserState {
        let userUpdate: User = state.users.find(user => user.id === action.user.id) as User;
        let index = state.users.indexOf(userUpdate)
        let newList = state.users
        newList[index] = action.user
        return {
            ...state,
            users: newList
        }
    },
    [type.SEARCH_ITEM] (state: UserState, action: IUserStateSearchAction): UserState {
        let newList = state.users.filter(user => user.name.includes(action.name))
        return {
            ...state,
            users: newList
        }
    },
    [type.LOAD_PAGE] (state: UserState, action: IUserStatesAction): UserState {
        return {
            ...state,
            users: state.users.concat(action.users)
        }
    },
    [type.GET_USER_LIST] (state: UserState) {
        return {
            ...state
        }
    }
})