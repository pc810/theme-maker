import React, { useContext, useState } from "react";
import { ThemeContext } from "styled-components";

//styles
import {PropertyContainer,PropertyName,PropertyValue} from '../../../styles/componentContainerStyles'

function BodyController(props) {
  const theme = useContext(ThemeContext);
  const [body] = useState(theme.body);
  return (    
        <PropertyContainer>                     
                {
                    Object.entries(body)
                    .map(([key,value])=>(                        
                            <>                          
                                <PropertyName>{key}</PropertyName>
                                <PropertyValue>{value}</PropertyValue>
                            </>
                        )
                    )
                    
                }        
        </PropertyContainer>          
  );
}

export default BodyController;
