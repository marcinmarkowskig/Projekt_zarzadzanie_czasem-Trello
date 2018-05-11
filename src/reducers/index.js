import { combineReducers } from 'redux';
import TrelloReducers from './reducers_trello';

const rootReducer = combineReducers({
  tables: TrelloReducers
});

export default rootReducer;
