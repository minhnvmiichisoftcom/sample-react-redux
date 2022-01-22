import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./reducers"
import createSagaMiddleware from "@redux-saga/core";
import sagas from './sagas';

const middleware = [];
const sagaMiddleware = createSagaMiddleware();


middleware.push(sagaMiddleware);
const enhancers = [applyMiddleware(...middleware)];

const reducers = combineReducers(rootReducers)
const store = createStore(reducers, undefined, compose(...enhancers))

sagaMiddleware.run(sagas)
export default store