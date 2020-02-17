import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

const middlewares = [logger];

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(...middlewares),
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
	)
);

export default store;
