import { applyMiddleware, combineReducers, createStore } from "redux"
import reduxThunk from "redux-thunk"
import postReducer from "./post.reducer"

const rootReducer = combineReducers({
    post: postReducer,
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk))

export default store
