import React, { useEffect } from "react";
import {useSelector} from 'react-redux';



export const withBasicProperties = (type)=>(Tag) => {
    const HOC = ()=>{                                                    
            const temp = useSelector(state => state[type]) 
            console.log(temp)       
            useEffect(() => {                
                console.log(type)
            }, [])
            return (
                <Tag                
                {...temp}                
                />
            )
    }
    return HOC;
}
export default withBasicProperties
