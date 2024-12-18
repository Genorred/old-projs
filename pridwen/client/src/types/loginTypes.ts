export enum LoginActionsType {
    SUBMIT_LOGIN='SUBMIT_LOGIN'
}
 type SubmitType = LoginActionsType.SUBMIT_LOGIN
 interface SubmitLoginActionType{
    type: SubmitType
    payload?: LoginState
}
export type LoginActionType = SubmitLoginActionType
export interface LoginState{
    name: string
    password: string
}
export const initialValue:LoginState = {
    name: '',
    password: ''
}