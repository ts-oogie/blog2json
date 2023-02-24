import Header from './components/Header'
import PrintItems from './components/Menu'
import TitleImageText from './components/titleImageText' 
import InputScrn from './components/InputScreen'
import {useState} from 'react' 

import './App.css';

function App() { 

  const [count, setCount] = useState(0)

  const [items, setItems] = useState([  
    {
        id: 0,
        text: "Design",
        type: "Heading",
        styling: {

        } 
    } 
  ])
  
  const [inputState, setInputState] = useState("")
  const [hoverState, setHoverState] = useState("")
  const [name, setName] = useState(Header.defaultProps.title)

  let winWidth = window.innerWidth  

  return (
    <div className="App">
      <Header title={name} />
      <TitleImageText setHoverState={setHoverState}/>
      <InputScrn 
          hoverState={hoverState} 
          setHoverState={setHoverState} 
          winWidth={winWidth}  
          setName={setName} 
          setItems={setItems}
          defaultName={Header.defaultProps.title} />
      <PrintItems items={items}/> 
    </div> 
  )
}

Header.defaultProps = {
  title: "BLOG2JSON"
}

export default App;
