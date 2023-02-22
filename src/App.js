import Header from './components/Header'
import PrintItems from './components/Menu'
import BlogInput from './components/BlogInput'
import TitleImageText from './components/titleImageText' 

//import {BrowserRouter as Router, Route} from 
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
  ]
)   

  const name = 'BLOG2JSON' 

  return (
    <div className="App">
      <Header title={name}  />
      <TitleImageText />
      <PrintItems items={items}/>
      <BlogInput setItems={setItems} />
    </div>
    // we can only return one wrapper element
  )
}

Header.defaultProps = {
  title: "I - Goose"
}

export default App;
