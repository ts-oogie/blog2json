import Item from './Item'

const PrintItems = ({items, count}) => {
    console.log(items)

    const cssPrintItems = {
        backgroundColor : '#A5A5A5',
        width: "60%",
        position: "relative",
        display: "inline-block",
        textAlign: "center"
    }

    return(
        <div style={cssPrintItems}>
            {items.map((item) => (
                <Item id={item.id} text={item.text} type={item.type} size={item.size} count={count} />
            ))}
        </div>
    )
}

export default PrintItems