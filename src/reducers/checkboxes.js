const initialState = {
  checkboxes: {
    all: {
      id: 1,
      text: "все",
      checked: false,
    },
    noStops: {
      id: 2,
      text: "без пересадок",
      checked: false,
    },
    oneStop: {
      id: 3,
      text: "1 пересадка",
      checked: false,
    },
    twoStops: {
      id: 4,
      text: "2 пересадки",
      checked: false,
    },
    threeStops: {
      id: 5,
      text: "3 пересадки",
      checked: false,
    },
  },
};
export default function checkReducer(state = initialState, action) {
  switch (action.type) {
    case "PRESS_ALL":
      const { checkboxes } = initialState;
      return getFiniteValue(checkboxes);

    default:
      return state;
  }
}

function getFiniteValue(obj) {
  function getProp(o) {
    for (let prop in o) {
      if (typeof o[prop] === "object") {
        getProp(o[prop]);
      } else {
        o.checked = true;
      }
    }
    return o;
  }
  return getProp(obj);
}
