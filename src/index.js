import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import CreateUser from './components/create_user';
import GetUserTables from './components/get_user_tables';
import SignIn from './components/sign_in';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <CreateUser />
      <GetUserTables />
      <SignIn />
    </div>
  </Provider>
  , document.querySelector('.container'));
