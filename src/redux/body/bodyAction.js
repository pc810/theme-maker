import {BODY_BACKGROUND,BODY_COLOR} from './bodyTypes'
export const bodyBackground = (payload)=>{
    return{
        type:BODY_BACKGROUND,
        payload: payload
    }
}

export const bodyColor = (payload)=>{
    return{
        type:BODY_COLOR,
        payload:payload
    }
}