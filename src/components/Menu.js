import React from 'react'
import Item from './Item'
import { useState } from 'react'

const PrintItems = ({items, count}) => {
    
    const [btnState, setBtnState] = useState("none");

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
    

    return(
        <div style={cssPrintItems}>
            {items.map((item) => (
                <Item id={item.id} text={item.text} type={item.type} size={item.size} count={count} />
            ))}
            <div className="submitBtn" 
                    style={btnStyle}

                    onClick={ (e)=>{
                        e.preventDefault()   
                    }}

                    onMouseEnter={ ()=>{
                        setBtnState("pointer")
                    }}

                    onMouseLeave={ ()=>{
                        setBtnState("none")
                    }}
                >
                <h2>Submit</h2>
                </div>
        </div>
    )
}

export default PrintItems