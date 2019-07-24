import { combineReducers } from "redux";
import repos from "./repoReducer";
import authors from "./authorReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";

const rootReducer = combineReducers({
  repos,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
