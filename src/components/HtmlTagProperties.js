import React from 'react'
import {HtmlTagPropertiesContainer} from '../styles/globalStyles'
import Body from './tags/renderComponent/body'

function HtmlTagProperties({tag}) {    
    return (
        <HtmlTagPropertiesContainer>
            {tag==='body' && <Body/>}
        </HtmlTagPropertiesContainer>        
    )
}

export default HtmlTagProperties
