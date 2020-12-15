import { createStore, applyMiddleware } from "redux";

// Logger with default options
import { createLogger } from "redux-logger";
import { logger } from "redux-logger";

import playlistApp from "./reducer";

export default createStore( playlistApp, applyMiddleware(logger))

// const loggerMiddleware = createLogger();

//export default function configureStore(initialState) {
//  console.log('logger', logger)
//  return createStore(quizApp, initialState, applyMiddleware(logger));
//}
