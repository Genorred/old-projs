import {put, takeEvery} from 'redux-saga/effects'
import {
    ASYNC_DECREAMENT,
    ASYNC_INCREAMENT,
    asyncIncreamentCreator,
    decreamentCreator,
    increamentCreator
} from "../store/cashReducer";
const delay = (ms) => new Promise(res => setTimeout(res, ms))


function* increamentWorker() {
    yield delay(1000)
    yield put(increamentCreator())
}
function* decreamentWorker() {
    yield delay(1000)
    yield put(decreamentCreator())
}
export function* countWatcher() {
    yield takeEvery(ASYNC_INCREAMENT, increamentWorker)
    yield takeEvery(ASYNC_DECREAMENT, decreamentWorker)
}