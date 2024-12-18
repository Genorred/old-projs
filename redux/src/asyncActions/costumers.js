import {addManyCostumersAction} from "../store/costumerReducer";

export const fetchingCostumers = () => {
    return  function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addManyCostumersAction(json)))
    }
}