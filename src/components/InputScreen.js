import React from 'react'
import { useEffect } from 'react'
import {InputHeading, InputParagraph, InputMedia, InputCode, InputFile}  from './inputForm'

const InputScrn = ({
        winWidth, 
        hoverState,  
        defaultName,  
        setName, 
        items,
        setItems, 
        count, 
        setCount, 
        elCount,
        setElCount,
        currArticle,
        setCurrArticle
    }) => {   

    const headerStyle = {
        minHeight: (()=>{
            if( winWidth > 768){ 
                if( hoverState == "paragraph"){ 
                    return "400px"
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

    else if(hoverState == "file"){
        return(   
            <header className="scrnInput" style={headerStyle} >
                <InputFile
                    defaultName={defaultName}
                    winWidth={winWidth} 
                    setName={setName}  
                    items={items}
                    setItems={setItems}
                    count={count} 
                    setCount={setCount} 
                    elCount={elCount}
                    setElCount={setElCount}
                    currArticle={currArticle}
                    setCurrArticle={setCurrArticle}
                />
            </header>
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
                    elCount={elCount}
                    setElCount={setElCount}
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
                    elCount={elCount}
                    setElCount={setElCount}
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
                    elCount={elCount}
                    setElCount={setElCount}
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
                    setCount={setCount}
                    elCount={elCount}
                    setElCount={setElCount}
                /> 
            </header>
        )
    }
    
} 

export default InputScrn