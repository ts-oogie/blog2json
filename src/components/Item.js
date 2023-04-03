import React from 'react'

const Item = ({id, text, type, size, count}) => {
    
    const cssItems = {
        backgroundColor : 'grey',
        marginTop: '20px',
        marginBottom: '10px',
        borderRadius: '20px',
        width: "80%",
        position: "relative",
        display: "inline-block",
        textAlign: "center",
        paddingRight: "20px",
        paddingLeft: "20px",
        border: "black solid 3px"
    }

    return(
        <div style={cssItems} key={id}>
            <h3>{id == 0 ? "[" : ""}{'{"id" : ' +  '' + id + ','}</h3>
            <h3 >{'"type" : ' + '"' + type + '",'}</h3>
            <h3 >{'"text" : ' + '"' + text + '",'}</h3>
            <h3 >{'"size" : ' + '"' + size + '"}'}{(id == 0 && count == 0) || (id > 0 && (id == count)) ? "]" : ","} </h3>
        </div>
    )
}

export default Item