 import PropTypes from 'prop-types'
 import Button from './Button'
 
 const Header = (props) => { //Or const Header = ({title})
    //or  {title} instead of {props.title} on line 4
  const btnClick = () => {
    alert("I was clicked")
  }

  return (
    <header>
      <h1 style={{color: "white", backgroundColor: "black"}}>{props.title}</h1> 
      <h2 style={headingStyle}>{props.heading}</h2>
      <Button color="black" text="add" onClick={btnClick} />
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
