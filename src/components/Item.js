const Item = ({id, text}) => {
    console.log(id)
    return(
        <div key={id}>
            <h2>{id}</h2>
            <h2 >{text}</h2>
        </div>
    )
}

export default Item