import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducer";

export const store = createStore(rootReducers, applyMiddleware(thunk));
