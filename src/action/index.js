export const PRESS_ALL = "PRESS_ALL";
export const PRESS_ONE = "PRESS_ONE";
export const LOAD_SEARCH_ID = "LOAD_SEARCH_ID";
export const PUT_SEARCH_ID = 'PUT_SEARCH_ID';

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

export const loadSearchId = () => {
  return {
    type: LOAD_SEARCH_ID,
  };
};

export const putSearchId = (payload) => {
  return {
    type: PUT_SEARCH_ID,
    payload
  }
}