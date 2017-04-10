import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import { routerMiddleware } from "react-router-redux";
import history from "../_shared/history";
import rootEpic from "./epics";
import { createEpicMiddleware } from "redux-observable";

const middleware = routerMiddleware(history);
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(middleware),
        applyMiddleware(createEpicMiddleware(rootEpic))
    )
);

export default store;
