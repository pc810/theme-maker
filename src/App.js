import React,{useState} from 'react'
import { Provider } from "react-redux"

//redux
import store from './redux/store'


//styles
import {Container, Flex, } from './styles/globalStyles'


//components
import Layout from './components/layout'
import HtmlTags from './components/HtmlTags'
import HtmlTagProperties from './components/HtmlTagProperties'
import HtmlTagControl from './components/HtmlTagControl'

function App() {
  const [selectedTag, setselectedTag] = useState('body')
  const onSelectedItemChange = (item)=>{
    setselectedTag(item);
  }

  return (
    <Provider store={store}>
      <Layout>
        <Container>
          <h1>Theme Maker</h1>
        </Container>
        <Flex>
          <HtmlTags onSelectedItemChange={onSelectedItemChange} selectedTag={selectedTag}/>
          <Flex column  style={{width:'100vw'}}>
              <HtmlTagProperties tag={selectedTag}/>                        
              <HtmlTagControl tag={selectedTag}/>            
          </Flex>
        </Flex>
      </Layout>
    </Provider>
  )
}

export default App
