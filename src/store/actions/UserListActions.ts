
import { ILoadingStateAction, IUserStateDeleteAction, IUserStateEditAction, IUserStatesAction, IUserStateSearchAction } from "../../model/payload/User";
import { IUserReponseApiPayload } from "../../model/payload/UserAPIPayload";
import { User } from "../../model/reducer/User";
import * as types from "./types"

export function fetchList(user: Array<User>): IUserStatesAction {
    return {
        type: types.FETCH_LIST,
        users: user
    };
}

export function addItem(user: User): IUserStateEditAction {
    return {
        type: types.ADD_ITEM,
        user: user
    }
}

export function deleteItem(id: number): IUserStateDeleteAction {
    return {
        type: types.DELETE_ITEM,
        id: id
    }
}

export function editItem(user: User): IUserStateEditAction {
    return {
        type: types.EDIT_ITEM,
        user: user
    }
}

export function searchItem(name: string): IUserStateSearchAction {
    return {
        type: types.SEARCH_ITEM,
        name: name,
        users: []
    }
}

export function loadPage(users: Array<User>): IUserStatesAction {
    return {
        type: types.LOAD_PAGE,
        users: users
    }
}

export function enableLoading(): ILoadingStateAction {
    return {
        type: types.ENABLE_LOADING
    }
}

export function disableLoading(): ILoadingStateAction {
    return {
        type: types.DISABLE_LOADING
    }
}

export function doFetchListUser(): IUserReponseApiPayload {
    return {
        type: types.GET_USER_LIST
    }
}

