import {INPUT_BACKGROUND} from './inputTypes'
import {INPUT_COLOR} from './inputTypes'


const initialState = {
    background: '#ffffff',
    color: '#000000'
}

const inputReducer = (state = initialState, action)=>{
    switch (action.type) {
        case INPUT_BACKGROUND:return{
            ...state,
            background:action.payload
        }                            
        case INPUT_COLOR:return{
            ...state,
            color:action.payload
        }                            
        default:
            return state
    }
}
export default inputReducer