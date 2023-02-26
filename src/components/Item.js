const Item = ({id, text, type, size, count}) => {
    
    const cssItems = {
        backgroundColor : 'grey',
        marginTop: '20px',
        marginBottom: '10px',
        borderRadius: '20px',
        width: "60%",
        position: "relative",
        display: "inline-block",
        textAlign: "center",
        paddingRight: "20px",
        paddingLeft: "20px"
    }

    return(
        <div style={cssItems} key={id}>
            <h2>{id == 0 ? "[" : ""}{'{"id" : ' +  '' + id + ','}</h2>
            <h2 >{'"type" : ' + '"' + type + '",'}</h2>
            <h2 >{'"text" : ' + '"' + text + '",'}</h2>
            <h2 >{'"size" : ' + '"' + size + '"}'}{(id == 0 && count == 0) || (id > 0 && (id == count)) ? "]" : ","} </h2>
        </div>
    )
}

export default Item