export interface UserState {
    users: Array<User>
}

export interface User {
    id: number
    avatar: string
    name: string
    password: string
}