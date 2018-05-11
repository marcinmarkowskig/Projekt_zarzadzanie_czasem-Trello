import { combineReducers } from 'redux';
import TrelloReducers from './reducers_trello';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  tables: TrelloReducers,
  form: formReducer
});

export default rootReducer;
