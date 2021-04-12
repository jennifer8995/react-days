import { combineReducers, createStore } from "redux"
import { initialState as userInitialState, reducer } from "./currentUser";
import { initialState, rootReducer } from "./reducers"

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            time: rootReducer,
            user: reducer
        }), //root reducer
        {
        time : initialState, 
        user : userInitialState  //our initialState
        }
    )
    return store;
}
export default configureStore;