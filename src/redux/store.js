import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

export const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(...middlewares),
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
	)
);

export const persistor = persistStore(store);

export default { store, persistor };
