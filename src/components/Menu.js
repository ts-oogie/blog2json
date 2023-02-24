import Item from './Item'

const PrintItems = ({items}) => {
    console.log(items)
    return(
        <>
        {items.map((item) => (
            <Item id={item.id} text={item.text} type={item.type} size={item.size} />
        ))}
        </>
    )
}

export default PrintItems