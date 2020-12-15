import { ADD_CONTENT } from "./types";

// actions
const addContent = (content) => {
  return {
    type: ADD_CONTENT,
    payload: content,
  };
};

export { addContent, };
