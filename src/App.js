import Header from './components/Header'
import Menu from './components/Menu'
//import {BrowserRouter as Router, Route} from 
import {useState} from 'react' 

import './App.css';

function App() {
  const [items, setItems] = useState([ //items is our current State, setItems is the func we use to update the state, useState is where we set the initial state
    {
        id: 1,
        text: "Blog"
    },
    {
        id: 2,
        text: "Design"
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
      <Header title={name} heading='MENS'/>
      <Menu items={items}/>
    </div>
    // we can only return one wrapper element
  );
}

Header.defaultProps = {
  title: "I - Goose"
}

export default App;
