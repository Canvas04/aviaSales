import {
  FETCH_REQUEST_TICKETS,
  FETCH_RECEIVE_TICKETS,
  FETCH_FAILURE_TICKETS,
  TICKETS_URL,
} from "../constants";

export const fetchTickets = (id) => {
  return fetch(`${TICKETS_URL}=${id}`)
   
};

const requestTickets = () => {
  return {
    type: FETCH_REQUEST_TICKETS,
    isFetching: true,
  };
};

const receiveTickets = (payload) => {
  return {
    type: FETCH_RECEIVE_TICKETS,
    payload,
  };
};
const errorTickets = (error) => {
  return { type: FETCH_FAILURE_TICKETS, error };
};

export const getTickets = () => {
    return dispatch => {
        dispatch(requestTickets())
        return fetchTickets().then(res => res.json())
        .then(res => dispatch(receiveTickets(res.tickets)))
        .catch(error => dispatch(errorTickets(error.message)))
    }
}