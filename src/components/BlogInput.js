import PropTypes from 'prop-types' 
import { useState } from 'react'
import InputTitle from './inputForm'

const BlogInput = (props) => { 

    const [record, addRecord] = useState({
        id: 1,
        title: "",
        p1: "This is the first paragraph in this entry",
        p2: "This is the second paragraphc in this entry"
    })

    return( 
        <form>
            <InputTitle addRecord={addRecord} record={record}/> 
        </form>
    )
} 

export default BlogInput