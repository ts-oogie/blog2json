 
import { useState } from 'react'

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

export default InputHeading