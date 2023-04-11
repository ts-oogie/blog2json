import React from 'react'
import { useState, useEffect } from 'react'
import { Htype, Mtype} from './typeBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFile} from '@fortawesome/free-regular-svg-icons'
import { collection, getDocs, db} from '../firebase/config.js'
 
import ProgressBar from './ProgressBar' 

const InputFile = ({winWidth, setName, items, setItems, count, setCount}) =>{ 

    let thisObj = {}
    let newItem = []
    let newCount = count

    async function collectionQuery(){
       let data = await getDocs(collection(db, "blog"))

        data.forEach((doc) => { 

            thisObj = {} 

            let thisType =  doc.data().type
            let thisText = doc.data().text
            let thisSize = doc.data().size
            let thisId = doc.data().id 
                
            thisObj.id = thisId
            thisObj.type = thisType
            thisObj.text = thisText
            thisObj.size = thisSize

            newItem.push(thisObj) 

            setCount(newCount)

            newCount++

        })

        setItems(newItem)

    } 

    const cssPInput = {
        fontFamily: 'Share Tech Mono',
        fontSize: '1.25rem'
    }
 
    const [btnState, setBtnState] = useState("none")
    const [select, setSelect] = useState("")

    useEffect(() => {
        setName("Load Collection")
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
        height: "20px", 
        clear: "right",
        fontSize: "20px",
        fontFamily: "Share Tech Mono",
        fontWeight: "bold"
    }

    const fileStyle = {
        width: "55px",
        height: "55px",
        color: "white"
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
            <FontAwesomeIcon icon={faFile} style={fileStyle} id="blog"  />
            <h3>Blog</h3>
            <label>  
                <div className="submitBtn" 
                    style={btnStyle}
                    onClick={ (e)=>{
                        e.preventDefault()  
                        collectionQuery()
                    }}
                    onMouseEnter={ ()=>{
                        setBtnState("pointer")
                    }} 
                    onMouseLeave={ ()=>{
                        setBtnState("none")
                    }}
                >
                <h4>Load</h4>
                </div>
            </label> 
        </div>
    )
}   


const InputCode = ({winWidth, setName, items, setItems, count, setCount}) =>{ 

    let thisObj = {}
    let newItem = items
    let newCount

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

    const cssPInput = {
        fontFamily: 'Share Tech Mono',
        fontSize: '1.25rem'
    }

    const [code, setCode] = useState("")   
    const [btnState, setBtnState] = useState("none")

    useEffect(() => {
        setName("Enter Code Insert")
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
        height: "20px", 
        clear: "right",
        fontSize: "20px",
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
            <label> 
                <textarea 
                    rows="5" 
                    cols={textAreaStyle.cols} 
                    name="code" 
                    type="text"  
                    style={cssPInput}
                    value={code} 
                    onChange={(e) => setCode(e.target.value)}
                >
                </textarea>
                <div className="submitBtn" 
                    style={btnStyle}
                    onClick={ (e)=>{
                        e.preventDefault()  

                        if(code == ""){
                            alert("Please enter code snippet")
                        }
                        
                        else{
                            newCount = count + 1 
                            setCount(newCount) 
                            thisObj.id = newCount
                            thisObj.type = "code"
                            thisObj.text = code
                            thisObj.size = "" 
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
                <h4>Add</h4>
                </div>
            </label> 
        </div>
    )
}   
 
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
        height: "20px", 
        clear: "right",
        fontSize: "20px",
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
                <h4>Add</h4>
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
    fontSize: '1.25rem'
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
    <div className="inputParagraph"> 
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

                }}><h4>Add</h4></div>
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
        console.log("filed selected : ")
        console.log(fileSelected)
        if (fileSelected && types.includes(fileSelected.type)){
            setError(null) 
            setFile(fileSelected) 
            setTimeout(()=>{console.log("file : " + file)}, 3000)
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
        fontSize: "18px",
        fontFamily: "Share Tech Mono",
        top: "30px" 
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

export {InputParagraph, InputHeading, InputMedia, InputCode, InputFile}
  