import { PUT_SEARCH_ID } from "../action";

const initialState = {
  id: null,
};

const putSearchId = (state = initialState, action) => {
  switch (action.type) {
    case PUT_SEARCH_ID:
      return { ...state, id: action.payload.searchId };
    default:
      return state;
  }
};
export default putSearchId;
