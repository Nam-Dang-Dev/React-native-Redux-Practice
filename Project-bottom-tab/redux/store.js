import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import AllReducer from './reducers';
import saga from 'redux-saga';
import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware();
export default createStore(
  AllReducer,
  applyMiddleware(sagaMiddleware, createLogger()),
);

sagaMiddleware.run(rootSaga);
