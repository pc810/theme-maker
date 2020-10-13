import styled,{css} from 'styled-components'

export const Container =  styled.div`
    flex-grow: 1;
    margin: 0 auto;
    padding: 0 32px;
    position: relative;
    width: auto;
    height: 100%;        
    @media (min-width: 1024px){
        max-width: 960px
    }
    @media (min-width: 1216px){
        max-width: 1152px
    }
    @media (min-width: 1408px){
        max-width: 1244px
    }

    ${props=>
        props.fluid && 
    css`
        padding: 0;
        margin: 0;
        max-width: 100%;        
    `}
`

export const Flex = styled.div`
    position: relative;
    display:flex;
    /* align-items: center; */

    ${props=>
        props.column &&
        css`
            flex-direction: column;
        `
    }
    
    ${props=>
        props.spaceBetween &&
        css`
            justify-content: space-between;
        `}

    ${props=>
        props.flexEnd &&
        css`
            justify-content: flex-end;
        `}

    ${props=>
        props.alignTop &&
        css`
            align-items: top;
        `}

    ${props=>
        props.noHeight &&
        css`
            height: 0;
        `}
`

export const Body = styled.div`
    background: ${props=>props.theme.body.background};
    color: ${props=>props.theme.body.color};    
`

export const HtmlTagContainer = styled.div`
    background: ${props=>props.theme.body.background};
    color: ${props=>props.theme.body.color};
    width: 20%;
    height: 80vh;
    border: 1px solid black;
    cursor: pointer;
`


export const HtmlTagPropertiesContainer = styled.div`
    background: ${props=>props.theme.body.background};
    color: ${props=>props.theme.body.color};
    width: 100%;
    height: 25vh;
    border: 1px solid black;
`

export const HtmlTagControlContainer = styled.div`
    background: ${props=>props.theme.body.background};
    color: ${props=>props.theme.body.color};
    width: 100%;
    height: 55vh;
    border: 1px solid black;
`