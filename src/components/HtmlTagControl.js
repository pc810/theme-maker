import React from 'react'
import {HtmlTagControlContainer} from '../styles/globalStyles'
import BodyController from './tags/controller/BodyController'
import InputController from './tags/controller/inputController'

function HtmlTagControl({tag}) {
    return (
        <HtmlTagControlContainer>
            {tag==='body' && <BodyController/>}
            {tag==='input' && <InputController/>}
        </HtmlTagControlContainer>
    )
}

export default HtmlTagControl
