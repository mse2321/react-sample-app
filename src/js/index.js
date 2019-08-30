import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import { helloSaga } from './sagas/sagas.js';

const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(helloSaga)
//const action = type = store.dispatch({ type })

const containerDestination = document.getElementById('root');
const createdStore = createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={createdStore}>
    <App />
  </Provider>,
  containerDestination
);
