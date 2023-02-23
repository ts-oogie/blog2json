 
import { useState } from 'react'
import {InputHeading, InputParagraph}  from './inputForm'

const InputScrn = (props) => {  

    if(props.hoverState == ""){
        console.log("")
        return(   
            <></>
        )
    }

    else if(props.hoverState == "heading"){
        return(   
            <header onMouseLeave={(e) => {props.setHoverState("")}} className="scrnInput">
                <InputHeading  />
            </header>
        )
    }

    else if(props.hoverState == "paragraph"){
        return(   
            <header onMouseLeave={(e) => {props.setHoverState("")}} className="scrnInput">
                <InputParagraph  />
            </header>
        )
    }
    
    else{
        return(   
            <header onMouseLeave={(e) => {props.setHoverState("")}} className="scrnInput">
                <h1>IMAGE</h1>
            </header>
        )
    }
    
} 

export default InputScrn