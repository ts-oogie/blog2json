 import PropTypes from 'prop-types'
 import Button from './Button'
 
 const Header = (props) => { //Or const Header = ({title})
    //or  {title} instead of {props.title} on line 4
  const btnClick = () => {
    alert("I was clicked")
  }

  return (
    <header className="navBar">
      <h1 className="navTitle" style={{color: "white"}}>{props.title}</h1> 
      <h2 style={headingStyle}>{props.heading}</h2>
       
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
