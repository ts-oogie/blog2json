const Item = ({key, text}) => {
    return(
        <div>
            <h2 key={key}>{text}</h2>
        </div>
    )
}

export default Item