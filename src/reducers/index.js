import { combineReducers } from "redux";
import sortTabs from "./sortTabs";
import stateCheck from './check';

const allReducers = combineReducers({
  tabs: sortTabs,
  check: stateCheck
});

export default allReducers;
