import React from "react"
//styled components
import {createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";
import {Body} from '../styles/globalStyles'

import {useSelector, } from 'react-redux';     // useDispatch

const GlobalStyle = createGlobalStyle`
${normalize}  
  html{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size:16px;
  }
  body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;    
    overscroll-behavior: none;
    overflow-x: hidden;
  }
`

const Layout = ({ children }) => { 
    const body = useSelector(state => state.body)
    const defaultTheme = {
        body: body
    }
    return(
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle/>
            <Body>{children}</Body>
        </ThemeProvider>
    )
}
export default Layout