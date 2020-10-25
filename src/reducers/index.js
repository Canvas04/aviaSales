import { combineReducers } from "redux";
import check from './check'
import  {loadId} from './loadSearchId';
import {loadTickets} from './loadTickets';

export default combineReducers({ check,loadId,loadTickets});

