import React from 'react'
import { Provider } from "react-redux"
import store from './redux/store'
import {Container, Flex} from './styles/globalStyles'

function App() {
  return (
    <Provider store={store}>
      <Container>
        <h1>Hello Container</h1>
      </Container>
      <Flex>
        <h1>Hello Flex</h1>
      </Flex>
    </Provider>
  )
}

export default App
