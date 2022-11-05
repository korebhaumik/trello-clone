import { combineReducers } from "redux";
import {
  utilsReducer,
  showReducer,
  // currentBoardReducer,
  // allBoardsReducer,
  boardIndexReducer,
} from "./utils";
import { catReducer, loadingReducer } from "./timepass";

const rootReducer = combineReducers({
  allBoards: utilsReducer,
  boardIndex: boardIndexReducer,
  // currentBoard: currentBoardReducer,
  catData: catReducer,
  showDrawer: showReducer,
  isLoading: loadingReducer,
});

export default rootReducer;
