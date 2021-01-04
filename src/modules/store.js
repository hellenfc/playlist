import { createStore, applyMiddleware } from "redux";

// Logger with default options
import { logger } from "redux-logger";

import playlistApp from "./reducer";

export default createStore( playlistApp, applyMiddleware(logger))

