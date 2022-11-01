export const catReducer = (state = {}, actions) => {
  switch (actions.type) {
    case "FETCH_DATA": {
      state = actions.payload;

      //   console.log(state);
      console.log("h");
      return state;
    }
    case "SET_LOADING": {
      const loading = actions.loading;
      state = { ...state, loading };

      //   console.log(state);
      //   console.log("h");
      return state;
    }
    default: {
      return state;
    }
  }
};
export const loadingReducer = (state = false, actions) => {
  switch (actions.type) {
    // case "SET_LOADING": {
    //   state = actions.loading;

    //   //   console.log(state);
    //   //   console.log("h");
    //   return state;
    // }
    default: {
      return state;
    }
  }
};
