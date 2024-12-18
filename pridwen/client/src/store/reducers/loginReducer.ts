import {initialValue, LoginActionsType, LoginActionType, LoginState} from "../../types/loginTypes";

const loginReducer = (state = initialValue, action: LoginActionType): LoginState => {
    switch (action.type){
        case LoginActionsType.SUBMIT_LOGIN:
            return({...state, ...action.payload})
        default:
            return state
    }
}
export default loginReducer