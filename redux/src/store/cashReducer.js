const defaultValue = {
    cash: 0
}
export const ADD_CASH = 'ADD-CASH'
export const GET_CASH = 'GET-CASH'
export const ASYNC_INCREAMENT = 'ASYNC_INCREAMENT'
export const ASYNC_DECREAMENT = 'ASYNC_DECREAMENT'
export const cashReducer = (state = defaultValue, action) => {
    switch (action.type){
        case ADD_CASH:
            return({...state, cash: state.cash + 1})
        case GET_CASH:
            return({...state, cash: state.cash - 1})
        default:
            return state
    }
}
export const increamentCreator = () => ({type: ADD_CASH})
export const decreamentCreator = () => ({type: GET_CASH})
export const asyncIncreamentCreator = () => ({type: ASYNC_INCREAMENT})
export const asyncDecreamentCreator = () => ({type: ASYNC_DECREAMENT})
