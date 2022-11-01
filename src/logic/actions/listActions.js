const getData = (value) => {
  return {
    type: "SET_DATA",
    payload: {
      value,
    },
  };
};
