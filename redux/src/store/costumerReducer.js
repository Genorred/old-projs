const defaultValue = {
    costumers: []
}
const ADD_COSTUMER = 'ADD-COSTUMER'
const REMOVE_COSTUMER = 'REMOVE-COSTUMER'
export const ADD_MANY_COSTUMERS = 'ADD_MANY_COSTUMERS'
export const ASYNC_ADD_MANY_COSTUMERS = 'ASYNC_ADD_MANY_COSTUMERS'
export const costumersReducer = (state = defaultValue, action) => {
    switch (action.type){
        case ADD_MANY_COSTUMERS:
            return{...state, costumers: action.payload}
        case ADD_COSTUMER:
            return{...state, costumers: [...state.costumers, action.payload]}
        case REMOVE_COSTUMER:
            return{...state, costumers: state.costumers.filter(costumer => costumer.id !== action.payload.id)}
        default:
            return state
    }
}

export const addCostumerAction = (payload) => ({type: ADD_COSTUMER, payload})
export const addManyCostumersAction = (payload) => ({type: ADD_MANY_COSTUMERS, payload})
export const asyncAddManyCostumersAction = (payload) => ({type: ASYNC_ADD_MANY_COSTUMERS, payload})
export const removeCostumerAction = (payload) => ({type: REMOVE_COSTUMER, payload})
