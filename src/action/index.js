export const PRESS_ALL = "PRESS_ALL";
export const PRESS_ONE = "PRESS_ONE";
export const LOAD_SEARCH_ID = "LOAD_SEARCH_ID";
export const PUT_SEARCH_ID = "PUT_SEARCH_ID";
export const LOAD_TICKETS = "LOAD_TICKETS";
export const PUT_LOAD_TICKETS = "PUT_LOAD_TICKETS";

export function pressAll() {
  return {
    type: PRESS_ALL,
  };
}

export function pressOne(id) {
  return {
    type: PRESS_ONE,
    id,
  };
}



