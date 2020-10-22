import { takeEvery, put, call } from "redux-saga/effects";
import {connect} from 'react-redux';
import { LOAD_TICKETS, putLoadTickets } from "../action";
 

export const fetchSearchTickets = (id) => {
    const aviaSalesUrlTickets = `https://front-test.beta.aviasales.ru/tickets?searchId`;
  return fetch(`${aviaSalesUrlTickets}=${id}`).then(response => {
    console.log(response.json());
  }
    );
};


function* workerSearchTickets() {
    const tickets = yield call(fetchSearchTickets);

    yield put(putLoadTickets(tickets))
}

export function* watchSearchTickets() {
  yield takeEvery(LOAD_TICKETS, workerSearchTickets);
}

