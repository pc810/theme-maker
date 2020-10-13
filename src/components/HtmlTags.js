import React from 'react'
import {HtmlTagContainer} from '../styles/globalStyles'
const tags = [
    'body',
    'input'
]

function HtmlTags({onSelectedItemChange,selectedTag}) {
    return (
        <HtmlTagContainer>
            <ul>
                {
                    tags.map((tag,i)=>(
                        <li key={i} onClick={()=>onSelectedItemChange(tag)}>{tag}</li>
                    ))
                }
            </ul>
        </HtmlTagContainer>
    )
}

export default HtmlTags
