import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-regular-svg-icons' 

const BlogItem = ({name, number}) => {

    const fileStyle = {
        width: "55px",
        height: "55px",
        color: "white"
    } 


    return(
        <div key={number}>
            <FontAwesomeIcon icon={faFile} style={fileStyle} id="blog"  />
            <h3>{name}</h3>
        </div>
    )

}

export default BlogItem