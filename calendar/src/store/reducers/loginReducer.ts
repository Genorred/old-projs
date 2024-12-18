import {ActionType, loginActionsType, loginState, setLoginAge, setLoginName} from "../../types/login";
const initialValue: loginState = {
    name: '',
    age: 0,
}
export const loginReducer = (state = initialValue, action: ActionType): loginState => {
    switch (action.type) {
        case loginActionsType.SET_LOGIN_NAME:
            return({...state, name: action.payload})
        case loginActionsType.SET_LOGIN_AGE:
            return({...state, age: action.payload})
        default:
            return (state)
    }
}
export const setAge = (payload: number): setLoginAge => ({
    type: loginActionsType.SET_LOGIN_AGE,
    payload: payload
})
export const setName = (payload: string): setLoginName => ({
    type: loginActionsType.SET_LOGIN_NAME,
    payload: payload
})