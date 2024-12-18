export enum userActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}
export interface UserState {
    users: any[],
    loading: boolean,
    error: null | string
}
interface fetchUserSuccessAction  {
    type: userActionTypes.FETCH_USERS_SUCCESS,
    payload: any[]
}
interface fetchUserErrorAction  {
    type: userActionTypes.FETCH_USERS_ERROR,
    payload: string
}
interface fetchUserAction  {
    type: userActionTypes.FETCH_USERS
}
export type UserAction = fetchUserSuccessAction | fetchUserErrorAction | fetchUserAction