 
import { useEffect } from 'react'
import {InputHeading, InputParagraph, InputMedia}  from './inputForm'

const InputScrn = ({
        winWidth, 
        hoverState, 
        setHoverState, 
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
                    return "350px"
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

    if ( hoverState == ""){ 
         setName( defaultName)
        return(   
            <></>
        )
    }

    else if (hoverState == "heading"){ 
 
        return(   
            <header onMouseLeave={(e) => { setHoverState("")}} className="scrnInput" style={headerStyle} >
                <InputHeading 
                    winWidth={winWidth} 
                    setName={setName}  
                    items={items}
                    setItems={setItems}
                    count={count} 
                    setCount={setCount}/>
            </header>
        )
    }

    else if (hoverState == "paragraph"){
        return(   
            <header onMouseLeave={(e) => { setHoverState("")}} className="scrnInput" style={headerStyle}>
                <InputParagraph 
                    winWidth={ winWidth} 
                    setName={ setName} 
                    count={count} 
                    setCount={setCount} />
            </header>
        )
    }

    else {
        return(   
            <header onMouseLeave={
                (e) => { setHoverState("")
                }} 
                className="scrnInput" 
                style={headerStyle}>
                <InputMedia 
                    winWidth={ winWidth} 
                    setName={ setName}  
                    count={count} 
                    setCount={setCount} />
            </header>
        )
    }
    
} 

export default InputScrn