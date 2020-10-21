import { takeEvery, put, call } from "redux-saga/effects";
import {LOAD_TICKETS,putLoadTickets} from '../action';

const aviaSalesUrlTickets = `https://front-test.beta.aviasales.ru/tickets?searchId=`
const fetchSearchTickets = () => {
    return fetch(aviaSalesUrlTickets)
}
