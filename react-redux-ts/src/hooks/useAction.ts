import {bindActionCreators} from "redux";
import * as userActionCreators from '../action-creators/user'
import {useDispatch} from "react-redux";
export const useAction = () => {
const dispatch = useDispatch()
    return bindActionCreators(userActionCreators, dispatch)
}