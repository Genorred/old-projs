import axios from "axios";
import {type} from "os";
import {UserAction, userActionTypes} from "../types/user";
import {Dispatch} from "redux";

export const fetchUsers =() =>{
    return async (dispatch: Dispatch<UserAction>) => {

            try{
                dispatch({
                    type: userActionTypes.FETCH_USERS
                })
                const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                console.log('kjj')

                dispatch({
                    type: userActionTypes.FETCH_USERS_SUCCESS,
                    payload: response.data
                })
            }catch (e) {
                dispatch(
                    {
                        type: userActionTypes.FETCH_USERS_ERROR,
                        payload: 'error happened'
                    }
                )
            }

    }
}