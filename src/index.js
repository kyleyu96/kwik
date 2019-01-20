import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import throttle from "lodash/throttle";
import rootReducer from "./reducers";
import "./index.css";
// import AppContainer from "./containers/AppContainer";
import App from "./components/App";

import { loadState, cleanState, saveState } from "./scripts/localStorage";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(
	rootReducer,
	loadState() ? cleanState(loadState()) : undefined,
	applyMiddleware(thunkMiddleware)
);

store.subscribe(throttle(() => saveState(cleanState(store.getState()))), 1000);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
);

registerServiceWorker();
