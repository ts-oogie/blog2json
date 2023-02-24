 import PropTypes from 'prop-types' 
 
 const Header = (props) => {  

  return (
    <header className="navBar  "> 
      <h1 className="navTitle" style={{color: "white"}}>{props.title}</h1>  
    </header> 
  )
}

//You can set property types
Header.propTypes = {
    title: PropTypes.string,
    heading: PropTypes.string
}

//You can set the inline css styles in here too
const headingStyle = {
    color: "black"
}

export default Header



 
