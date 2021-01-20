import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

export default store;