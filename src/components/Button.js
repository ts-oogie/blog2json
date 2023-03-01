import React from 'react'

import PropTypes from 'prop-types' 

const Button = ({color, text, onClick}) =>{ 

    return(
        <button 
            onClick={onClick} 
            style={{backgroundColor: color, color: "white"}} 
            className='btn'>{text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
} 

export default Button