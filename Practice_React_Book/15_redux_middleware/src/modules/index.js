import { combineReducers } from 'redux';
// import counter from './counter';
import counter from './counterThunk';
import post from './post';

export default combineReducers({
  counter,
  post
});