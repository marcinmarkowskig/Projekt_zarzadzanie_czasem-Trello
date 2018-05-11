import _ from 'lodash';
import { GET_USER_TABLES } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_USER_TABLES:
      return { ...state};
    default:
      return state;
  }
}
