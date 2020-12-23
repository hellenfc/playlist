import { ADD_CONTENT, ADD_TOTAL, SUBTRACT_TOTAL, CLEAR_TOTAL } from "./types";
import { combineReducers } from "redux";

const playlistReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTENT:
      return [...state, action.payload];
    default:
      return state;
  }
}

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_TOTAL:
      
      return state + action.payload;
    case SUBTRACT_TOTAL:
      return state - action.payload;
    case CLEAR_TOTAL:
      console.log('action paylo', action.payload);
      return 0;
    default:
      return state;
  }
}

const playlistApp = combineReducers({
  playlistReducer,
  counterReducer
});

export default playlistApp;