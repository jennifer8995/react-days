//initial(starting) state
import { combineReducers } from "redux";
import * as currentUser from "./currentUser";
import * as currentTime from "./currentTime";
export const initialState = {
    currentTime : currentTime.initialState,
    currentUser : currentUser.initialState
}
export const rootReducer = combineReducers({
    currentTime : currentTime.reducer,
    currentUser : currentUser.reducer
})

export default rootReducer