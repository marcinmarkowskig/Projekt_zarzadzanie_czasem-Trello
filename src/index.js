import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import CreateUser from './components/create_user';
import GetUserTables from './components/get_user_tables';
import SignIn from './components/sign_in';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
     <div>
       <Switch>
         <Route path="/create-user" component={CreateUser} />
         <Route path="/get-user-tables" component={GetUserTables} />
         <Route path="/" component={SignIn}/>
       </Switch>
     </div>
   </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
