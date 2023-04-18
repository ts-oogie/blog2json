import React from 'react'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-regular-svg-icons' 
import {collection, getDocs, db} from '../firebase/config.js'

const BlogItem = ({name, number, setItems, count, setCount}) => {

    const [btnState, setBtnState] = useState("none")
    let thisObj = {}
    let dbQuery = []
    let newCount = count

    const fileStyle = {
        width: "55px",
        height: "55px",
        color: "white",
        cursor: btnState
    }  

    const divStyle = {
        display : "inline-block",
        marginBottom: "20px"
    }

    const hStyle = {
        marginLeft: "20px"
    } 

    async function articleQuery() {
        let doc = await getDocs(collection(db, 'blog/' + name + '/children'))

        newCount = 1

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

            newCount++ 
            
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