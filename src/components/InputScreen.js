 
import { useState } from 'react'
import {InputHeading, InputParagraph}  from './inputForm'

const InputScrn = (props) => {  

    const headerStyle = {
        minHeight: (()=>{
            if(props.winWidth > 768){ 
                if(props.hoverState == "paragraph"){ 
                    return "350px"
                }
                else{
                    return "250px"
                } 
            }
            else if (props.winWidth <= 768 && props.winWidth > 569){
                if(props.hoverState == "paragraph"){ 
                    return "300px"
                }
                else{
                    return "200px"
                } 
            }
            else {
                if(props.hoverState == "paragraph"){ 
                    return "250px"
                }
                else{
                    return "150px"
                } 
            }
        })()
    }

    if(props.hoverState == ""){
        console.log("")
        return(   
            <></>
        )
    }

    else if(props.hoverState == "heading"){
        return(   
            <header onMouseLeave={(e) => {props.setHoverState("")}} className="scrnInput" style={headerStyle} >
                <InputHeading winWidth={props.winWidth} />
            </header>
        )
    }

    else if(props.hoverState == "paragraph"){
        return(   
            <header onMouseLeave={(e) => {props.setHoverState("")}} className="scrnInput" style={headerStyle}>
                <InputParagraph winWidth={props.winWidth}  />
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