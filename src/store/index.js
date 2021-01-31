import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import Saga from './sagas/rootSaga';
import Reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(Saga);

export default store;