import React from 'react'
import {useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-regular-svg-icons' 
import {collection, getDocs, db} from '../firebase/config.js'

const BlogItem = ({name, number, setItems, count, setCount, elCount, setElCount, currArticle, setCurrArticle}) => {

    const [btnState, setBtnState] = useState("none")
    const [colorState, setColorState] = useState("white")
    let thisObj = {}
    let dbQuery = []
    let newCount = count

    const fileStyle = {
        width: "55px",
        height: "55px",
        color: colorState,
        cursor: btnState
    }  

    const divStyle = {
        display : "inline-block",
        marginBottom: "50px"
    }

    const hStyle = {
        marginLeft: "20px"
    } 

    useEffect(()=>{
        //console.log("blogItem elCount : ", elCount) 
        if(name == currArticle){
            setColorState("black")
        }
        else{
            setColorState("white")
        }
    }, [currArticle])

    async function articleQuery() {

        let doc = await getDocs(collection(db, 'blog/' + name + '/children'))  

        doc.forEach((data)=>{ 
            
            thisObj = {} 

            let thisType =  data.data().type
            let thisText = data.data().text
            let thisSize = data.data().size
            let thisId = data.data().id 
                
            thisObj.id = thisId
            thisObj.type = thisType
            thisObj.text = thisText
            thisObj.size = thisSize

            dbQuery.push(thisObj)   

            setElCount(thisId)
            
        })

        setItems(dbQuery) 
    }

    return(
        <div key={number} style={divStyle}>
            <FontAwesomeIcon 
                icon={faFile} 
                style={fileStyle} 
                id="blog" 
                onClick={()=>{
                    articleQuery()
                    setCurrArticle(name) 
                }} 
                onMouseEnter={()=>{
                    setBtnState("pointer")
                }} 
                onMouseLeave={ ()=>{
                    setBtnState("none")
                    
                }}
            />
            <h3 style={hStyle}>{name}</h3>
        </div>
    )

}

export default BlogItem