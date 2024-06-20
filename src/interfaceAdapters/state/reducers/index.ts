import { combineReducers } from "@reduxjs/toolkit";
import mainReducer from "./mainReducer";


const rootReducer = combineReducers({
  main: mainReducer,
});

export default rootReducer;
