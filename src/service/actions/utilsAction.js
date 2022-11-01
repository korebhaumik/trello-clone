import data from "../utils/store";

export const getData = () => {
  return {
    type: "GET_DATA",
    payload: {
      value: data,
    },
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
