import {INPUT_BACKGROUND,INPUT_COLOR} from './inputTypes'
export const inputBackground = (payload)=>{
    return{
        type:INPUT_BACKGROUND,
        payload: payload
    }
}

export const inputColor = (payload)=>{
    return{
        type:INPUT_COLOR,
        payload:payload
    }
}