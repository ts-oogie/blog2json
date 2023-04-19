import React from 'react'

import Header from './components/Header'
import PrintItems from './components/Menu'
import TitleImageText from './components/titleImageText' 
import InputScrn from './components/InputScreen'
import {useState, useEffect} from 'react' 

import './App.css';

function App() { 

  let winWidth = window.innerWidth  

  const [count, setCount] = useState(0) //number of blog articles returned
  const [elCount, setElCount] = useState(0) //number of children in each blog post
  const [currArticle, setCurrArticle] = useState("") //current blog article
  const [hoverState, setHoverState] = useState("") //for icons
  const [name, setName] = useState(Header.defaultProps.title) //name of header

  const [items, setItems] = useState([  //the JS Obj
    {
        id: 0, 
        type: "blank",
        text: "blank",
        size: "blank"
    } 
  ])

  useEffect(()=>{
    console.log("App elCount : ", elCount) 
  })  

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
