 
import { useState } from 'react'

//InputHeading
const InputHeading = ({winWidth}) =>{ 

    const [heading, setHeading] = useState("") 
    const headingStyle = {
        
        width : (()=>{
            if(winWidth <= 760 && winWidth >= 600){ 
                return "300px"
            }
            else if(winWidth < 600){
                return "150px"
            }
        })()
    }

    return( 
        <div className="inputHeading">
            <label> 
                <input
                    type="text" 
                    style={headingStyle}
                    className="form-text"
                    value={heading} 
                    onChange={(e) => setHeading(e.target.value)}
                />
                <div className="submitBtn"><h2>Add</h2></div>
            </label> 
        </div>
    )
}   

//InputParagraph
const InputParagraph = () => { 

const [paragraph, setParagraph] = useState("")

return( 
    <div className="inputHeading">
        <label>  
            <textarea rows="10" cols="48" name="paragraph" > </textarea>
            <div className="submitBtn"><h2>Add</h2></div>
        </label> 
    </div>
) 

}

export {InputParagraph, InputHeading}
  