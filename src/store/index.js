import {applyMiddleware, createStore} from "redux"
import { rootReducer } from "./reducers";
import createSagaMiddleware from "redux-saga";
import apiSaga from "./sagas";

const initialiseSagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(initialiseSagaMiddleware))

initialiseSagaMiddleware.run(apiSaga);

export default store;