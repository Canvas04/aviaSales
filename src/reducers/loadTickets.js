import { PUT_LOAD_TICKETS } from "../action";

const initialState = {
  tickets: [],
};

 const putLoadTickets = (state = initialState, action) => {
  switch (action.type) {
    case PUT_LOAD_TICKETS:
      return {...state,tickets:action.payload};
    default:
      return state;
  }
};
export default putLoadTickets;