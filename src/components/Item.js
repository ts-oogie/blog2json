const Item = ({id, text, type, size}) => {
    console.log(id)
    return(
        <div key={id}>
            <h2>{id}</h2>
            <h2 >{type}</h2>
            <h2 >{text}</h2>
            <h2 >{size}</h2>
        </div>
    )
}

export default Item