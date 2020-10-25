
import {
  FETCH_REQUEST_TICKETS,
  FETCH_RECEIVE_TICKETS,
  FETCH_FAILURE_TICKETS,
  TICKETS_URL,
} from "../constants";



export const fetchTickets = (id) => {
  if(id) {
    return fetch(`${TICKETS_URL}=${id}`);
  }else {
    return fetch(`${TICKETS_URL}=${localStorage.getItem('searchId')}`);
  }
  
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
    isFetching:false
  };
};
const errorTickets = (error) => {
  return { type: FETCH_FAILURE_TICKETS, error };
};

export const getTickets = () => {
  return (dispatch) => {
    dispatch(requestTickets());
    return fetchTickets()
      .then((response) =>
        response.json().then((json) => ({ status: response.status, json }))
      )
      .then(({ status, json }) => {
        if (status >= 400 && status <= 500) {

          dispatch(errorTickets(status));
        }else {
          
          dispatch(receiveTickets(json))
        }
      });
  };
};
