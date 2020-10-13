import React from 'react'
import {HtmlTagControlContainer} from '../styles/globalStyles'
import BodyController from './tags/controller/bodyController'

function HtmlTagControl({tag}) {
    return (
        <HtmlTagControlContainer>
            {tag==='body' && <BodyController/>}
        </HtmlTagControlContainer>
    )
}

export default HtmlTagControl
