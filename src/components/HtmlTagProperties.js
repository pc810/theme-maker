import React from 'react'
import {HtmlTagPropertiesContainer} from '../styles/globalStyles'

function HtmlTagProperties({tag}) {
    return (
        <HtmlTagPropertiesContainer>
            {tag}
        </HtmlTagPropertiesContainer>        
    )
}

export default HtmlTagProperties
