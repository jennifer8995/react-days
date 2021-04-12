import { createStore } from "redux"
import { initialState, rootReducer } from "./reducers"

export const configureStore = () =>{
    const store = createStore(
        rootReducer, //root reducer
        initialState  //our initialState
    )
    return store;
}
export default configureStore;