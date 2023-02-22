import Item from './Item'

const PrintItems = ({items}) => {
    console.log(items)
    return(
        <>
        {items.map((item) => (
            <Item id={item.id} text={item.text}  />
        ))}
        </>
    )
}

export default PrintItems