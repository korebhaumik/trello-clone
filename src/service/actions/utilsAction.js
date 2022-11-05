import transitData from "../utils/store";

export const getData = () => {
  return {
    type: "GET_DATA",
    payload: {
      value: transitData,
    },
  };
};

export const setBoardIndex = () => {
  return {
    type: "SET_BOARD_INDEX",
  };
};

export const fetchData = () => {
  return {
    type: "FETCH_DATA",
    payload: {
      value: [],
      loading: true,
    },
  };
};
