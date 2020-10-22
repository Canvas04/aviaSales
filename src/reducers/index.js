import { combineReducers } from "redux";
import check from './check'
import putSearchId from './searchId';
import {loadTickets} from './loadTickets';

export default combineReducers({ check,putSearchId,loadTickets});

