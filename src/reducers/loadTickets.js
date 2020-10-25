import {
  FETCH_REQUEST_TICKETS,
  FETCH_RECEIVE_TICKETS,
  FETCH_FAILURE_TICKETS,
} from "../constants";

const inititialState = {
  tickets: [],
};
export const loadTickets = (state = inititialState, action) => {
  switch (action.type) {
      case FETCH_RECEIVE_TICKETS:
          return {...state,tickets: action.payload};
          default :
          return state
  }
};
