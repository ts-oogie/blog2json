import PropTypes from 'prop-types' 
import { useState } from 'react'

const InputTitle = ({addRecord, record}) =>{ 

    const [title, setTitle] = useState("")

    return( 
        <label>Enter Title :
            <input
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input type="submit" onClick={()=>{
                alert(title)
                console.log(record)
            }} />

        </label> 
    )
} 

export default InputTitle