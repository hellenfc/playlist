import { ADD_CONTENT, ADD_TOTAL, SUBTRACT_TOTAL, CLEAR_TOTAL } from "./types";

// actions
const addContent = (content) => {
  return {
    type: ADD_CONTENT,
    payload: content,
  };
};

const addTotal = (value) => {
  return {
    type: ADD_TOTAL,
    payload: value,
  };
};

const subtractTotal = (value) => {
  return {
    type: SUBTRACT_TOTAL,
    payload: value,
  };
};

const clearTotal = () => {
  return {
    type: CLEAR_TOTAL,
  };
};

export { addContent, addTotal, subtractTotal, clearTotal, };
