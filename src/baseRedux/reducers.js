import { combineReducers } from 'redux';
import { inputingReducer } from '../views/Input/InputRedux.js';
import { itemReducer } from '../views/List/ListRedux.js';
import { typeReducer } from '../views/Bottom/ButtomRedux.js';

export default combineReducers({
  list: itemReducer,
  type: typeReducer,
  inputing: inputingReducer,
});
