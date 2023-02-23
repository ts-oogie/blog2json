 
import { useEffect } from 'react'
import {InputHeading, InputParagraph, InputMedia}  from './inputForm'

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
        props.setName(props.defaultName)
        return(   
            <></>
        )
    }

    else if(props.hoverState == "heading"){ 
        return(   
            <header onMouseLeave={(e) => {props.setHoverState("")}} className="scrnInput" style={headerStyle} >
                <InputHeading winWidth={props.winWidth} setName={props.setName}/>
            </header>
        )
    }

    else if(props.hoverState == "paragraph"){
        return(   
            <header onMouseLeave={(e) => {props.setHoverState("")}} className="scrnInput" style={headerStyle}>
                <InputParagraph winWidth={props.winWidth} setName={props.setName} />
            </header>
        )
    }

    else{
        return(   
            <header onMouseLeave={(e) => {props.setHoverState("")}} className="scrnInput" style={headerStyle}>
                <InputMedia winWidth={props.winWidth} setName={props.setName} />
            </header>
        )
    }
    
} 

export default InputScrn