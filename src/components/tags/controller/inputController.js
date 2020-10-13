import React from "react";


//styles
import {PropertyContainer,PropertyName,PropertyValue} from '../../../styles/componentContainerStyles'

//HOC
import withBasicProperties from './withBasicProperties'

//components
import Handler from './Handler'


const BasicInputController = (props)=>{     
  return (    
        <PropertyContainer>                     
                {
                    Object.entries(props)
                    .map(([key,value])=>(                        
                            <div key={key}>                          
                                <PropertyName>{key}</PropertyName>
                                <PropertyValue>
                                    <Handler tag="input" type={key} value={value}/>
                                </PropertyValue>
                            </div>
                        )
                    )
                    
                }   
        </PropertyContainer>          
  );
}
const InputController = withBasicProperties('input')(BasicInputController)
export default InputController;
