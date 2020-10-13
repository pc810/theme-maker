import React from 'react'
import {HtmlTagControlContainer} from '../styles/globalStyles'

function HtmlTagControl({tag}) {
    return (
        <HtmlTagControlContainer>
            {tag}
        </HtmlTagControlContainer>
    )
}

export default HtmlTagControl
