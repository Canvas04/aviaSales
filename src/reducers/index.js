import { combineReducers } from "redux";
import check from './check'
import putSearchId from './searchId';
import putLoadTickets from './loadTickets';

export default combineReducers({ check,putSearchId,putLoadTickets});

