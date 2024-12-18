import {createStore, combineReducers, applyMiddleware} from "redux";
import {cashReducer} from "./cashReducer";
import {costumersReducer} from "./costumerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import {countWatcher} from "../saga/countSaga";
import {rootWatchers} from "../saga";
const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
cash: cashReducer,
    costumers: costumersReducer
})
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootWatchers)