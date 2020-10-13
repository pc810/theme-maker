import { combineReducers } from "redux"
import bodyReducer from './body/bodyReducer'

const rootReducer = combineReducers({
    body:bodyReducer
})
export default rootReducer