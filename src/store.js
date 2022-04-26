import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { promiseMiddleware, localStorageMiddleware } from "./middleware";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import thunk from "redux-thunk";
/*
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();*/

// Build the middleware for intercepting and dispatching navigation actions

const getMiddleware = () => {
    if (process.env.NODE_ENV === "production") {
        return applyMiddleware(thunk, promiseMiddleware, localStorageMiddleware);
    } else {
        // Enable additional logging in non-production environments.
        return applyMiddleware(
            thunk,
            promiseMiddleware,
            localStorageMiddleware,
            createLogger()
        );
    }
};

export const store = configureStore({
    reducer,
    middleware: [thunk],
    devTools: process.env.NODE_ENV !== "production",
});