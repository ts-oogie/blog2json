import { useState, useEffect } from 'react'
import Htype from './typeBar'

//InputHeading
const InputHeading = ({winWidth, setName, items, setItems, count, setCount, defaultName}) =>{ 

    let thisObj = {}
    let newItem = items
    let newCount

    const [heading, setHeading] = useState("")  
    const [headerType, setHeaderType] = useState(InputHeading.defaultProps.headerStyle) 

    useEffect(() => {
        setName("Enter a Heading")
    })

    const headingStyle = { 
        width : (()=>{
            if(winWidth <= 760 && winWidth >= 600){ 
                return "300px"
            }
            else if(winWidth < 600){
                return "150px"
            }
        })(),
        height: "40px", 
        clear: "right",
        fontSize: "30px",
        fontFamily: "Share Tech Mono",
        fontWeight: "bold"
    }

    return( 
        <div className="inputHeading">
            <Htype headerType={headerType} setHeaderType={setHeaderType} />
            <label> 
                <input
                    type="text" 
                    style={headingStyle}
                    className="form-text"
                    value={heading} 
                    onChange={(e) => setHeading(e.target.value)}
                />
                <div className="submitBtn" onClick={(e)=>{
                    e.preventDefault() 

                    if(heading == ""){
                        alert("Please enter a title")
                    }
                    
                    else{
                        newCount = count + 1 
                        setCount(newCount)

                        thisObj.id = newCount
                        thisObj.type = "heading"
                        thisObj.text = heading
                        thisObj.size = headerType 
                        newItem.push(thisObj) 
                        setItems(newItem)
                    }

                }}><h2>Add</h2></div>
            </label> 
        </div>
    )
}   

InputHeading.defaultProps = {
    headerStyle : "H1"
}

//InputParagraph
const InputParagraph = ({winWidth, setName, items, setItems, count, setCount, defaultName}) => { 

const cssPInput = {
    fontFamily: 'Share Tech Mono',
    fontSize: '1.5rem'
}

let thisObj = {}
let newItem = items
let newCount

const [paragraph, setParagraph] = useState("")
const [headerType, setHeaderType] = useState(InputHeading.defaultProps.headerStyle) 

useEffect(() => {
    setName("Enter a Paragraph")
})

const textAreaStyle = {
    cols: (()=>{
        if(winWidth > 760){
            return "48"
        }
        else if(winWidth <= 760 && winWidth >= 600){  
            return "40"
        }
        else if(winWidth < 600){
            return "35"
        }
    })()
}

return( 
    <div className="inputHeading">
        <label>  
            <textarea 
                rows="10" 
                cols={textAreaStyle.cols} 
                name="paragraph" 
                type="text"  
                style={cssPInput}
                value={paragraph} 
                onChange={(e) => setParagraph(e.target.value)}
            >
            </textarea>
 
            <div className="submitBtn" onClick={(e)=>{
                    e.preventDefault() 

                    if(paragraph == ""){
                        alert("Please enter a paragraph")
                    }
                    
                    else{
                        newCount = count + 1 
                        setCount(newCount)

                        thisObj.id = newCount
                        thisObj.type = "paragraph"
                        thisObj.text = paragraph
                        thisObj.size = ""
                        newItem.push(thisObj) 
                        setItems(newItem)
                    }

                }}><h2>Add</h2></div>
        </label> 
    </div>
) 

}

const InputMedia = ({winWidth, setName}) =>{ 

    const [url, setUrl] = useState("") 

    useEffect(() => {
        setName("Upload an Image/Video")
    })

    const headingStyle = { 
        width : (()=>{
            if(winWidth <= 760 && winWidth >= 600){ 
                return "300px"
            }
            else if(winWidth < 600){
                return "150px"
            }
        })(),
        height: "40px", 
        clear: "right",
        fontSize: "30px",
        fontFamily: "Share Tech Mono",
        fontWeight: "bold"
    }

    return( 
        <div className="inputHeading">
            <label> 
                <input
                    type="text" 
                    style={headingStyle}
                    className="form-text"
                    value={url}  
                />
                <div className="submitBtn"><h2>Upload</h2></div>
            </label> 
        </div>
    )
}   

export {InputParagraph, InputHeading, InputMedia}
  