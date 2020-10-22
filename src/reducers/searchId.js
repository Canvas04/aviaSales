import { PUT_SEARCH_ID } from "../action";
import { fetchSearchTickets } from "../saga/loadTickets";

const initialState = {
  id: null,
};

const putSearchId = (state = initialState, action) => {
  switch (action.type) {
    case PUT_SEARCH_ID:
      fetchSearchTickets(action.payload.searchId)
      return { ...state, id: action.payload.searchId };
    default:
      return state;
  }
};
export default putSearchId;
