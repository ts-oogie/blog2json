import Header from './components/Header'
import PrintItems from './components/Menu'
import TitleImageText from './components/titleImageText' 
import InputScrn from './components/InputScreen'
import {useState} from 'react' 

import './App.css';

function App() { 

  const [items, setItems] = useState([ //items is our current State, setItems is the func we use to update the state, useState is where we set the initial state
    {
        id: 1,
        title: "Design" 
    },
    {
        id: 2,
        text: "Develop"
    },
    {
        id:3,
        text: "Code"
    }
  ])
  
  const [inputState, setInputState] = useState("")
  const [hoverState, setHoverState] = useState("")

  const name = 'BLOG2JSON' 

  return (
    <div className="App">
      <Header title={name} />
      <TitleImageText setHoverState={setHoverState}  />
      <InputScrn hoverState={hoverState} setHoverState={setHoverState}  />
      <PrintItems items={items}/> 
    </div> 
  )
}

Header.defaultProps = {
  title: "I - Goose"
}

export default App;
