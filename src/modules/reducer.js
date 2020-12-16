import { ADD_CONTENT } from "./types";
import { combineReducers } from "redux";

const answerReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTENT:
      return [...state, action.payload];
    default:
      return state;
  }
}

const playlistApp = combineReducers({
  answerReducer,
});

export default playlistApp;