import React from 'react'
import Item from './Item'
import { useState } from 'react'
import {db, collection, addDoc} from '../firebase/config'

const PrintItems = ({items, count}) => {
    
    const [btnState, setBtnState] = useState("none")
    const blogRef = collection(db, 'blog')

    const cssPrintItems = {
        backgroundColor : '#A5A5A5',
        width: "60%",
        position: "relative",
        display: "inline-block",
        textAlign: "center",
        paddingBottom: "15px",
        borderTop: "4px solid black",
        borderBottom: "4px solid black"
    }

    let btnStyle = {
        cursor: btnState,
        width: '100px'
    } 

    const addItems = () => {
        items.map((item, index) => (
            addDoc(blogRef, {
                id: item.id,
                size: item.size,
                type: item.type,
                text: item.text 
            }).then(()=>{
                console.log(item)
            })
        ))
       
    }

    return(
        <div style={cssPrintItems}>
            {items.map((item, index) => (
                <Item key={index} id={item.id} text={item.text} type={item.type} size={item.size} count={count} />
            ))}
            <div className="submitBtn" 
                    style={btnStyle}

                    onClick={ (e)=>{
                        e.preventDefault()   
                        addItems()
                    }}

                    onMouseEnter={ ()=>{
                        setBtnState("pointer")
                    }}

                    onMouseLeave={ ()=>{
                        setBtnState("none")
                    }}
                >
                <h4>Submit</h4>
                </div>
        </div>
    )
}

export default PrintItems