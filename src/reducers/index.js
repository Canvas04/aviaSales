import {combineReducers} from 'redux';
import checkReducer from './checkboxes';

export const  rootReducer = combineReducers({
  checkboxes: checkReducer
})
