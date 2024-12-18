import {all} from 'redux-saga/effects'
import {countWatcher} from "./countSaga";
import {fetchUsersWatcher} from "./userSaga";
export function* rootWatchers() {
    yield all([countWatcher(), fetchUsersWatcher()])
}