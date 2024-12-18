export enum loginActionsType{
    SET_LOGIN_NAME = 'SET_LOGIN_NAME',
    SET_LOGIN_AGE = 'SET_LOGIN_AGE'
}
export interface setLoginName {
    type : loginActionsType.SET_LOGIN_NAME,
    payload: string
}
export interface setLoginAge {
    type: loginActionsType.SET_LOGIN_AGE,
    payload: number
}
export type ActionType = setLoginName | setLoginAge
export interface loginState {
    name: string,
    age: number
}