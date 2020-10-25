import {
  FETCH_REQUEST_ID,
  FETCH_RECEIVE_ID,
  FETCH_ERROR_ID,
  SEARCH_URL,
} from "../constants";
import {fetchTickets} from './loadTickets';

const requestId = () => {
  return {
    type: FETCH_REQUEST_ID,
  };
};
const receiveId = (payload) => {
    return {
        type: FETCH_RECEIVE_ID,
        payload
    }
}
const makeRequest  = () => {
  return fetch(SEARCH_URL);
}
export const fetchId = () => {
  return  (dispatch) => {
    dispatch(requestId());

    return makeRequest().then(
      (response) => response.json(),
      (error) => console.log("Something went wrong", error)
    )
    .then(json => {
      fetchTickets(json.searchId);
        dispatch(receiveId(json))
    })
  };
};
