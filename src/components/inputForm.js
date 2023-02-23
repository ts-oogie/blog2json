 
import { useState } from 'react'

//InputHeading
const InputHeading = ({addRecord, record}) =>{ 

    const [heading, setHeading] = useState("")

    return( 
        <div className="inputHeading">
            <label> 
                <input
                    type="text" 
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
  