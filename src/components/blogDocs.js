import React from 'react'
import BlogItem from './blogItem'
import { useState, useEffect } from 'react'
 

const BlogDocs = ({docs}) => {  
    
    const divStyle = {
        display: 'block',
        width: "100%",
        border: "1px red solid"
    }

    const fileStyle = {
        width: "55px",
        height: "55px",
        color: "white"
    }

    useEffect(()=>{
        
    })
    
    return(
        <div style={divStyle} >
            {docs.map((article, index)=>(
                <BlogItem name={article} number={index}/>
            ))}
        </div>
    )
}

export default BlogDocs