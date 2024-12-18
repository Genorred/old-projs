import {put, takeEvery, call} from 'redux-saga/effects'
import {
    ADD_MANY_COSTUMERS,
    addManyCostumersAction,
    ASYNC_ADD_MANY_COSTUMERS,
    asyncAddManyCostumersAction
} from "../store/costumerReducer";
const fetchUsers = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
function* fetchUsersWorker() {
    const data = yield call(fetchUsers)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(addManyCostumersAction(json))
}
export function* fetchUsersWatcher() {
yield takeEvery(ASYNC_ADD_MANY_COSTUMERS, fetchUsersWorker)
}