import React from 'react'
import { useState, useEffect } from 'react'
import { Htype, Mtype} from './typeBar'
import { projectStorage, projectFirestore} from '../firebase/config.js'
import ProgressBar from './ProgressBar'

//InputHeading
const InputHeading = ({winWidth, setName, items, setItems, count, setCount}) =>{ 

    let thisObj = {}
    let newItem = items
    let newCount

    const [heading, setHeading] = useState("")  
    const [headerType, setHeaderType] = useState(InputHeading.defaultProps.headerStyle) 
    const [btnState, setBtnState] = useState("none")

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

    let btnStyle = {
        cursor: btnState
    } 

    const togglePointer = (toggle) => {
        if(toggle == 'on'){
            btnStyle.cursor = 'auto'
        }
        else{
            btnStyle.cursor = 'none'
        }
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
                <div className="submitBtn" 
                    style={btnStyle}
                    onClick={ (e)=>{
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
                    }}
                    onMouseEnter={ ()=>{
                        setBtnState("pointer")
                    }}

                    onMouseLeave={ ()=>{
                        setBtnState("none")
                    }}
                >
                <h2>Add</h2>
                </div>
            </label> 
        </div>
    )
}   

InputHeading.defaultProps = {
    headerStyle : "H1"
}

//InputParagraph
const InputParagraph = ({winWidth, setName, items, setItems, count, setCount}) => { 

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

const InputMedia = ({winWidth, setName, items, setItems, count, setCount}) =>{ 

    const [file, setFile] = useState(null) 
    const [error, setError] = useState(null)
    const types = ['image/png', 'image/jpeg']

    const [size, setSize] = useState("100%")  

    useEffect(() => {
        setName("Upload an Image/Video") 
    })

    const changeHandle = (e) => { 
        let fileSelected = e.target.files[0]
        console.log(fileSelected)
        if (fileSelected && types.includes(fileSelected.type)){
            setError(null) 
            setFile(fileSelected) 
        } else{
            setFile(null)
            setError("Please select an image type (.png or .jpg)")
        }
    }

    const headingStyle = { 
        width : (()=>{
            if(winWidth <= 760 && winWidth >= 600){ 
                return "300px"
            }
            else if(winWidth < 600){
                return "150px"
            }
        })(),
        height: "35px", 
        clear: "left",
        marginRight : "-50px",
        fontSize: "25px",
        fontFamily: "Share Tech Mono"   
    }

    return( 
        <div className="inputMedia">
            <Mtype size={size} setSize={setSize} />
            <form>  
                <input
                    type="file" 
                    style={headingStyle}
                    className="form-image"
                    onChange={changeHandle} 
                />
                <div className="errorMsg">
                    {error && <div className="errorMsg">{error}</div>} 
                    {file && <ProgressBar 
                                file={file}  
                                size={size}
                                count={count}
                                setCount={setCount}
                                items={items}
                                setItems={setItems} />}
                </div>
            </form> 
        </div>
    )
}    

export {InputParagraph, InputHeading, InputMedia}
  