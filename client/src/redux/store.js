import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";
import { applyMiddleware, compose, createStore } from "redux";
import createLogger from "redux-logger";
import thunk from 'redux-thunk';
import rootReducer from "./reducers";

const middleware = [
  createLogger(),
  thunk
];

// Set var for all the middleware + redux chrome extension
const enhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

// Create the store with the (reducer, initialState, compose)
const store = createStore(
  rootReducer,
  {},
  enhancers
);

// Make the history work with browserHistory
export const history = syncHistoryWithStore(browserHistory, store);

// Make the hot reload work with Redux
if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = rootReducer;
    store.replaceReducer(nextRootReducer);
  });
}

export { store };
