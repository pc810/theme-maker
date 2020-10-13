import React from 'react'
import {HtmlTagPropertiesContainer} from '../styles/globalStyles'
import Body from './tags/renderComponent/body'
import Input from './tags/renderComponent/input'

function HtmlTagProperties({tag}) {    
    
    return (
        <HtmlTagPropertiesContainer>
            {tag==='body' && <Body/>}
            {tag==='input' && <Input/>}
        </HtmlTagPropertiesContainer>        
    )
}

export default HtmlTagProperties
