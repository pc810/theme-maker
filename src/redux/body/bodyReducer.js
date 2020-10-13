import {BODY_BACKGROUND} from './bodyTypes'
import {BODY_COLOR} from './bodyTypes'


const initialState = {
    background: '#fff',
    color: '#000'
}

const bodyReducer = (state = initialState, action)=>{
    switch (action.type) {
        case BODY_BACKGROUND:return{
            ...state,
            background:action.payload
        }                            
        case BODY_COLOR:return{
            ...state,
            color:action.payload
        }                            
        default:
            return state
    }
}
export default bodyReducer