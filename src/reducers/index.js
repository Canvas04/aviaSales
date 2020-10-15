export const initialState = {
  checkboxes: {
    all: {
      id: 1,
      text: "все",
    },
    noStops: {
      id: 2,
      text: "без пересадок",
    },
    oneStop: {
      id: 3,
      text: "1 пересадка",
    },
    twoStops: {
      id: 4,
      text: "2 пересадки",
    },
    threeStops: {
      id: 5,
      text: "3 пересадки",
    },
  },
};
export function rootReducer(state = initialState) {
  return state;
}
