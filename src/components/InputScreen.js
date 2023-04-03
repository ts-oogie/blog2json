import React from 'react'
import { useEffect } from 'react'
import {InputHeading, InputParagraph, InputMedia, InputCode}  from './inputForm'

const InputScrn = ({
        winWidth, 
        hoverState, 
        //setHoverState, 
        defaultName,  
        setName, 
        items,
        setItems, 
        count, 
        setCount
    }) => {   

    const headerStyle = {
        minHeight: (()=>{
            if( winWidth > 768){ 
                if( hoverState == "paragraph"){ 
                    return "450px"
                }
                else{
                    return "250px"
                } 
            }
            else if ( winWidth <= 768 &&  winWidth > 569){
                if( hoverState == "paragraph"){ 
                    return "300px"
                }
                else{
                    return "200px"
                } 
            }
            else {
                if( hoverState == "paragraph"){ 
                    return "250px"
                }
                else{
                    return "150px"
                } 
            }
        })()  
    }

    if (hoverState == ""){ 
        setName(defaultName.title)
        return(   
            <></>
        )
    }

    else if (hoverState == "code"){
        return(   
            <header className="scrnInput" style={headerStyle} >
                <InputCode
                    defaultName={defaultName}
                    winWidth={winWidth} 
                    setName={setName}  
                    items={items}
                    setItems={setItems}
                    count={count} 
                    setCount={setCount} 
                />
            </header>
        )
    }

    else if (hoverState == "heading"){ 
        return(   
            <header className="scrnInput" style={headerStyle} >
                <InputHeading 
                    defaultName={defaultName}
                    winWidth={winWidth} 
                    setName={setName}  
                    items={items}
                    setItems={setItems}
                    count={count} 
                    setCount={setCount} 
                />
            </header>
        )
    }

    else if (hoverState == "paragraph"){
        return(   
            <header className="scrnInput" style={headerStyle}>
                <InputParagraph 
                    defaultName={defaultName}
                    winWidth={winWidth} 
                    setName={setName}  
                    items={items}
                    setItems={setItems}
                    count={count} 
                    setCount={setCount} 
                />
            </header>
        )
    }

    else {
        return (   
            <header 
                className="scrnInput" style={headerStyle}>
                <InputMedia 
                    winWidth={ winWidth} 
                    setName={ setName}  
                    count={count} 
                    items={items}
                    setItems={setItems}
                    setCount={setCount} />
            </header>
        )
    }
    
} 

export default InputScrn