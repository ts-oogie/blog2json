import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-regular-svg-icons' 

const BlogItem = ({name, number}) => {

    const fileStyle = {
        width: "55px",
        height: "55px",
        color: "white"
    }  

    const divStyle = {
        display : "inline-block",
        marginBottom: "20px"
    }

    const hStyle = {
        marginLeft: "20px"
    }

    return(
        <div key={number} style={divStyle}>
            <FontAwesomeIcon icon={faFile} style={fileStyle} id="blog"  />
            <h3 style={hStyle}>{name}</h3>
        </div>
    )

}

export default BlogItem