import { combineReducers } from "redux"
import bodyReducer from './body/bodyReducer'
import inputReducer from './input/inputReducer'

const rootReducer = combineReducers({
    body:bodyReducer,
    input:inputReducer
})
export default rootReducer