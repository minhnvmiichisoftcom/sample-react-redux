import { User } from "../reducer/User";

export interface IUserStatesAction {
    type: string
    users: Array<User>
}

export interface IUserStateEditAction {
    type: string
    user: User
}

export interface IUserStateDeleteAction {
    type: string
    id: number
}

export interface IUserStateSearchAction {
    type: string
    name: string
    users: Array<User>
}

export interface ILoadingStateAction {
    type: string
}
