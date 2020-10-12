import { combineReducers } from "redux";
import sortTabs from "./sortTabs";
const allReducers = combineReducers({
  tabs: sortTabs,
});

export default allReducers;
