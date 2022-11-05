import { updateBoardIndex } from "../logic/actions/listActions";

const catData =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    switch (action.type) {
      case "FETCH_DATA": {
        const fetching = async () => {
          try {
            const response = await fetch("https://catfact.ninja/fact");
            const output = await response.json();
            action.payload.value = output;
            await next(action);
            await dispatch({ type: "SET_LOADING", loading: false });
          } catch (error) {
            console.log(error);
          }
        };
        fetching();

        return;
      }
      default: {
        const state = next(action);
        return state;
      }
    }
  };

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    const state = next(action);
    // console.log("current action:-", action);
    // console.log("All states:-", getState());
    return state;
  };

const verifier =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    switch (action.type) {
      case "REMOVE_BOARD": {
        const currentIndex = action.payload.currentIndex;
        const boardIndex = action.payload.boardIndex;

        // console.log(
        //   "Current Index: ",
        //   currentIndex,
        //   "Board Index: ",
        //   boardIndex
        // );

        if (currentIndex <= boardIndex) {
          dispatch(updateBoardIndex(boardIndex - 1));
          const state = next(action);
          return state;
        }

        // const state = next(action);
        return next(action);
      }

      default:
        const state = next(action);
        return state;
    }
  };

const service = [verifier];
export default service;
