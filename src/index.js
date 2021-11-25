import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './AppRouter';
import { Provider } from 'react-redux'
import Home from './Home';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
const store = createStore(reducers, applyMiddleware(ReduxThunk))


ReactDOM.render(

  <Provider store={store}>
    <Home />
    </Provider>
  ,
  document.getElementById('root')
);
