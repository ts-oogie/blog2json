import React from 'react'

import Header from './components/Header'
import PrintItems from './components/Menu'
import TitleImageText from './components/titleImageText' 
import InputScrn from './components/InputScreen'
import {useState, useEffect} from 'react' 

import './App.css';

function App() { 

  const [count, setCount] = useState(0) //number of blog articles returned
  const [elCount, setElCount] = useState(0) //number of children in each blog post
  const [items, setItems] = useState([  //the JS Obj
    {
        id: 0, 
        type: "_blank",
        text: "_blank",
        size: "_blank"
    } 
  ])

  useEffect(()=>{
    console.log("App elCount : ", elCount)
    console.log("App count : ", count)
  })
  
  //const [inputState, setInputState] = useState("") 
  const [hoverState, setHoverState] = useState("") //for icons
  const [name, setName] = useState(Header.defaultProps.title) //name of header

  let winWidth = window.innerWidth  

  return (
    <div className="App" style={appStyle}>
      <Header title={name} />
      <TitleImageText setHoverState={setHoverState}/>
      <InputScrn 
          hoverState={hoverState}  
          winWidth={winWidth}  
          items={items}
          setItems={setItems}
          setName={setName}  
          setHoverState={setHoverState}  
          count={count}
          setCount={setCount}
          elCount={elCount}
          setElCount={setElCount}
          defaultName={Header.defaultProps} />
      <PrintItems items={items} count={count}/> 
    </div> 
  )
}

Header.defaultProps = {
  title: "BLOG2JSON",
  errBlankInput: "Please enter a title"
}

const appStyle = {
  width: "100%" 
}

export default App;
