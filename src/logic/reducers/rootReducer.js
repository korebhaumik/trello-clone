import { combineReducers } from "redux";
import { utilsReducer, showReducer } from "./utils";
import { catReducer, loadingReducer } from "./timepass";

const rootReducer = combineReducers({
  globalData: utilsReducer,
  catData: catReducer,
  showDrawer: showReducer,
  isLoading: loadingReducer,
});

export default rootReducer;
