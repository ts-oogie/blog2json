import React from 'react'
import BlogItem from './blogItem'
import { useState, useEffect } from 'react'

const BlogDocs = ({docs, setItems, count, setCount, elCount, setElCount, currArticle, setCurrArticle}) => {  
    
    const divStyle = {
        display: 'block',
        width: "500px"
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
                <BlogItem 
                    name={article} 
                    number={index} 
                    key={index} 
                    setItems={setItems} 
                    count={count} 
                    setCount={setCount}
                    elCount={elCount}
                    setElCount={setElCount}
                    currArticle={currArticle}
                    setCurrArticle={setCurrArticle}
                />
            ))}
        </div>
    )
}

export default BlogDocs