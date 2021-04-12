import { applyMiddleware, createStore } from "redux"
import apiMiddleware from "./apiMiddleware";
import loggingMiddleWare from "./loggingMiddleWare";
import { initialState, rootReducer } from "./reducers"

export const configureStore = () => {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            loggingMiddleWare,
            apiMiddleware
        )
    ); //root reducer

    return store;
}
export default configureStore;