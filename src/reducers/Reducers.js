import { combineReducers } from 'redux'
import { mainViewReducer } from './mainViewReducer'
import { reducer as formReducer } from 'redux-form';

module.exports = combineReducers({
  mainViewReducer,
  form: formReducer
});
